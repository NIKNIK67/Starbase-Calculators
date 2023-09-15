/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ItemOutputDto } from '../../models/item-output-dto';

export interface GetCapitalItemsGet$Plain$Params {
}

export function getCapitalItemsGet$Plain(http: HttpClient, rootUrl: string, params?: GetCapitalItemsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemOutputDto>>> {
  const rb = new RequestBuilder(rootUrl, getCapitalItemsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ItemOutputDto>>;
    })
  );
}

getCapitalItemsGet$Plain.PATH = '/GetCapitalItems';
