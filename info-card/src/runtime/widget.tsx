import { React, AllWidgetProps, DataSourceComponent, FeatureDataRecord, IMDataSourceInfo, DataSource } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import { useState } from "react";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import CreateFeatures from "../components/createfeatures";
import "./style.css";

export default function Widget(props: AllWidgetProps<any>) {
  const { useMapWidgetIds, useDataSources } = props;
  const [selectedFeatures, setSelectedFeatures] = useState<Graphic[]>([]);
  const [dataSource, setDataSource] = useState<DataSource | null>(null);

  // Type guard to ensure we have a Graphic with layer
  function isEsriGraphic(obj: any): obj is Graphic {
    return obj && typeof obj === 'object' && 'geometry' in obj && 'layer' in obj;
  }

  function onActiveViewChange(jimuMapView: JimuMapView) {
    if (!jimuMapView || !useDataSources?.length) return;

    const selectedLayerId = useDataSources[0].dataSourceId;

    jimuMapView.view.on("click", async (event) => {
      const response = await jimuMapView.view.hitTest(event);
      const graphics = response.results
        .map(r => (r as any).graphic)
        .filter(
          (g: any): g is Graphic =>
            g instanceof Graphic &&
            g.layer instanceof FeatureLayer &&
            g.layer.id === selectedLayerId
        );

      if (graphics.length > 0) {
        const updated = await Promise.all(
          graphics.map(async (graphic) => {
            if (graphic.attributes) {
              const layer = graphic.layer as FeatureLayer;
              try {
                const full = await layer.queryFeatures({
                  objectIds: [graphic.attributes[layer.objectIdField]],
                  returnGeometry: true,
                  outFields: ['*']
                });
                return full.features[0] || graphic;
              } catch {
                return graphic;
              }
            }
            return graphic;
          })
        );
        setSelectedFeatures(updated.filter(Boolean) as Graphic[]);
      }
    });
  }

  async function handleDataSourceInfoChange(info: IMDataSourceInfo) {
    if (info?.selectedIds?.length > 0 && dataSource) {
      const records = dataSource.getSelectedRecords() as FeatureDataRecord[];

      const fullFeatures = await Promise.all(
        records.map(async (record) => {
          const feat = record.getFeature();
          if (isEsriGraphic(feat)) {
            const layer = feat.layer as FeatureLayer;
            if (layer && feat.attributes) {
              try {
                const full = await layer.queryFeatures({
                  objectIds: [feat.attributes[layer.objectIdField]],
                  returnGeometry: true,
                  outFields: ['*']
                });
                return full.features[0] || feat;
              } catch {
                return feat;
              }
            }
            return feat;
          }
          return null;
        })
      );

      setSelectedFeatures(fullFeatures.filter(Boolean) as Graphic[]);
    }
  }

  function onDataSourceCreated(ds: DataSource) {
    setDataSource(ds);
  }

  return (
    <div className="widget-container">
      {useMapWidgetIds?.length > 0 && (
        <JimuMapViewComponent
          useMapWidgetId={useMapWidgetIds[0]}
          onActiveViewChange={onActiveViewChange}
        />
      )}

      {useDataSources?.length > 0 && (
        <DataSourceComponent
          useDataSource={useDataSources[0]}
          widgetId={props.id}
          onDataSourceCreated={onDataSourceCreated}
          onDataSourceInfoChange={handleDataSourceInfoChange}
        />
      )}

      <CreateFeatures features={selectedFeatures} />
    </div>
  );
}
