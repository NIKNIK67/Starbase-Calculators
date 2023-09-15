/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ItemOutputDto } from '../../models/item-output-dto';

export interface GetCapitalItemsGet$Json$Params {
}

export function getCapitalItemsGet$Json(http: HttpClient, rootUrl: string, params?: GetCapitalItemsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemOutputDto>>> {
  const rb = new RequestBuilder(rootUrl, getCapitalItemsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ItemOutputDto>>;
    })
  );
}

getCapitalItemsGet$Json.PATH = '/GetCapitalItems';
