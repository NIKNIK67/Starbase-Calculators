/* tslint:disable */
/* eslint-disable */
import { Item } from '../models/item';
import { Material } from '../models/material';
export interface CompositionElement {
  amount?: number;
  id?: number;
  material?: Material;
  rootItem?: Item;
}
