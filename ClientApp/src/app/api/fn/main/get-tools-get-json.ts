/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tool } from '../../models/tool';

export interface GetToolsGet$Json$Params {
}

export function getToolsGet$Json(http: HttpClient, rootUrl: string, params?: GetToolsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tool>>> {
  const rb = new RequestBuilder(rootUrl, getToolsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Tool>>;
    })
  );
}

getToolsGet$Json.PATH = '/GetTools';
