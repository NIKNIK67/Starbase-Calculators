/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Location } from '../../models/location';

export interface GetOreLocationsGet$Json$Params {
}

export function getOreLocationsGet$Json(http: HttpClient, rootUrl: string, params?: GetOreLocationsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Location>>> {
  const rb = new RequestBuilder(rootUrl, getOreLocationsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Location>>;
    })
  );
}

getOreLocationsGet$Json.PATH = '/GetOreLocations';
