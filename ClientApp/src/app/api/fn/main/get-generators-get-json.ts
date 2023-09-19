/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Generator } from '../../models/generator';

export interface GetGeneratorsGet$Json$Params {
}

export function getGeneratorsGet$Json(http: HttpClient, rootUrl: string, params?: GetGeneratorsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Generator>>> {
  const rb = new RequestBuilder(rootUrl, getGeneratorsGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Generator>>;
    })
  );
}

getGeneratorsGet$Json.PATH = '/GetGenerators';
