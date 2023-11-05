/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Item } from '../../models/item';

export interface GetAlloyItemsGet$Plain$Params {
}

export function getAlloyItemsGet$Plain(http: HttpClient, rootUrl: string, params?: GetAlloyItemsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Item>>> {
  const rb = new RequestBuilder(rootUrl, getAlloyItemsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Item>>;
    })
  );
}

getAlloyItemsGet$Plain.PATH = '/GetAlloyItems';
