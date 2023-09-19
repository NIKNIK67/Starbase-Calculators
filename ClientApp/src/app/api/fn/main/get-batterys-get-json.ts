/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Battery } from '../../models/battery';

export interface GetBatterysGet$Json$Params {
}

export function getBatterysGet$Json(http: HttpClient, rootUrl: string, params?: GetBatterysGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Battery>>> {
  const rb = new RequestBuilder(rootUrl, getBatterysGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Battery>>;
    })
  );
}

getBatterysGet$Json.PATH = '/GetBatterys';
