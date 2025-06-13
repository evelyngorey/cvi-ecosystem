import { type ImmutableObject } from "seamless-immutable";
import { type UseDataSource } from "jimu-core"; // ✅ Add this line
import { type Units } from "@esri/arcgis-rest-types";

export interface Config {
  useMapWidgetIds?: string[];
  useDataSources?: UseDataSource[];
}

export type IMConfig = ImmutableObject<Config>;
