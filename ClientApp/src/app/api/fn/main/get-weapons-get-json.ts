/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Weapon } from '../../models/weapon';

export interface GetWeaponsGet$Json$Params {
}

export function getWeaponsGet$Json(http: HttpClient, rootUrl: string, params?: GetWeaponsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Weapon>>> {
  const rb = new RequestBuilder(rootUrl, getWeaponsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Weapon>>;
    })
  );
}

getWeaponsGet$Json.PATH = '/GetWeapons';
