/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropelantTank } from '../../models/propelant-tank';

export interface GetPropelantTanksGet$Plain$Params {
}

export function getPropelantTanksGet$Plain(http: HttpClient, rootUrl: string, params?: GetPropelantTanksGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PropelantTank>>> {
  const rb = new RequestBuilder(rootUrl, getPropelantTanksGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PropelantTank>>;
    })
  );
}

getPropelantTanksGet$Plain.PATH = '/GetPropelantTanks';
