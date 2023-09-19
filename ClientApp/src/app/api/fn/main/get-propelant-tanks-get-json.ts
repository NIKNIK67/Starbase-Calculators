/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PropelantTank } from '../../models/propelant-tank';

export interface GetPropelantTanksGet$Json$Params {
}

export function getPropelantTanksGet$Json(http: HttpClient, rootUrl: string, params?: GetPropelantTanksGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PropelantTank>>> {
  const rb = new RequestBuilder(rootUrl, getPropelantTanksGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PropelantTank>>;
    })
  );
}

getPropelantTanksGet$Json.PATH = '/GetPropelantTanks';
