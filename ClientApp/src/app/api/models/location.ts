/* tslint:disable */
/* eslint-disable */
import { OreLocation } from '../models/ore-location';
export interface Location {
  id?: number;
  imageUrl?: null | string;
  name?: null | string;
  oreLocations?: null | Array<OreLocation>;
}
