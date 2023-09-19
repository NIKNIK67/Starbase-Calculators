/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Generator } from '../../models/generator';

export interface GetGeneratorsGet$Plain$Params {
}

export function getGeneratorsGet$Plain(http: HttpClient, rootUrl: string, params?: GetGeneratorsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Generator>>> {
  const rb = new RequestBuilder(rootUrl, getGeneratorsGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Generator>>;
    })
  );
}

getGeneratorsGet$Plain.PATH = '/GetGenerators';
