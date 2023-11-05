/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MaterialObject } from '../../models/material-object';

export interface GetMaterialsNamesGet$Json$Params {
}

export function getMaterialsNamesGet$Json(http: HttpClient, rootUrl: string, params?: GetMaterialsNamesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaterialObject>>> {
  const rb = new RequestBuilder(rootUrl, getMaterialsNamesGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MaterialObject>>;
    })
  );
}

getMaterialsNamesGet$Json.PATH = '/GetMaterialsNames';
