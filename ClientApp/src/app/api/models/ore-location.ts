/* tslint:disable */
/* eslint-disable */
import { LocationType } from '../models/location-type';
import { OreLocationElement } from '../models/ore-location-element';
export interface OreLocation {
  locationType?: LocationType;
  name?: null | string;
  ores?: null | Array<OreLocationElement>;
}
