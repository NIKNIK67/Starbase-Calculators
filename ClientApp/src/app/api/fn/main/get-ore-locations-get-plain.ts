/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Location } from '../../models/location';

export interface GetOreLocationsGet$Plain$Params {
}

export function getOreLocationsGet$Plain(http: HttpClient, rootUrl: string, params?: GetOreLocationsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Location>>> {
  const rb = new RequestBuilder(rootUrl, getOreLocationsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Location>>;
    })
  );
}

getOreLocationsGet$Plain.PATH = '/GetOreLocations';
