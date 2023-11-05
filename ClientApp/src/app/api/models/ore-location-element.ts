/* tslint:disable */
/* eslint-disable */
import { Material } from '../models/material';
import { OreLocation } from '../models/ore-location';
import { OreRarity } from '../models/ore-rarity';
export interface OreLocationElement {
  id?: number;
  material?: Material;
  rarity?: OreRarity;
  rootOreLocation?: OreLocation;
}
