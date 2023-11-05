/* tslint:disable */
/* eslint-disable */
import { CompositionElement } from '../models/composition-element';
import { ItemTypes } from '../models/item-types';
export interface Item {
  compositions?: null | Array<CompositionElement>;
  id?: number;
  name?: null | string;
  type?: ItemTypes;
}
