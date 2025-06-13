import {
  React,
  FormattedMessage,
  css,
  jsx,
  Immutable,
  DataSourceTypes,
  UseDataSource,
} from "jimu-core";
import { type AllWidgetSettingProps } from "jimu-for-builder";
import {
  MapWidgetSelector,
  SettingRow,
  SettingSection,
} from "jimu-ui/advanced/setting-components";
import { IMConfig } from "../config";
import defaultMessages from "./translations/default";
import { DataSourceSelector } from "jimu-ui/advanced/data-source-selector";
import { NumericInput, Select, Option } from "jimu-ui";

export default function Setting(props: AllWidgetSettingProps<IMConfig>) {
  const dsTypes = Immutable([DataSourceTypes.FeatureLayer]);

  function onDSSelected(useDataSources: UseDataSource[]) {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources,
    });
  }

  function onMapSelected(useMapWidgetIds: string[]) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds,
    });
  }

  return (
    <div>
      <SettingSection>
        <SettingRow
          label={
            <FormattedMessage
              id="instruction"
              defaultMessage={defaultMessages.instruction}
            ></FormattedMessage>
          }
        ></SettingRow>

        <SettingSection>
          <MapWidgetSelector
            onSelect={onMapSelected}
            useMapWidgetIds={props.useMapWidgetIds}
          />
        </SettingSection>

        {props.useMapWidgetIds && props.useMapWidgetIds.length !== 0 && (
          <SettingSection>
            <FormattedMessage
              id="ds"
              defaultMessage={defaultMessages.ds}
            ></FormattedMessage>
            <DataSourceSelector
              mustUseDataSource
              hideAddDataButton
              types={dsTypes}
              onChange={onDSSelected}
              useDataSources={props.useDataSources}
            ></DataSourceSelector>
          </SettingSection>
        )}
        {props.useDataSources && props.useDataSources.length !== 0 && (
          <SettingSection>
            <FormattedMessage
              id="br"
              defaultMessage={defaultMessages.br}
            ></FormattedMessage>
          </SettingSection>
        )}
      </SettingSection>
    </div>
  );
}
