/* tslint:disable */
/* eslint-disable */
import { Location } from '../models/location';
import { LocationType } from '../models/location-type';
import { OreLocationElement } from '../models/ore-location-element';
export interface OreLocation {
  id?: number;
  locationType?: LocationType;
  name?: null | string;
  ores?: null | Array<OreLocationElement>;
  rootLocation?: Location;
}
