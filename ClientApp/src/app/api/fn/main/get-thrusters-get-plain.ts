/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Thruster } from '../../models/thruster';

export interface GetThrustersGet$Plain$Params {
}

export function getThrustersGet$Plain(http: HttpClient, rootUrl: string, params?: GetThrustersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Thruster>>> {
  const rb = new RequestBuilder(rootUrl, getThrustersGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Thruster>>;
    })
  );
}

getThrustersGet$Plain.PATH = '/GetThrusters';
