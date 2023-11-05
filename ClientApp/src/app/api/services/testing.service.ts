/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { initGet$Json } from '../fn/testing/init-get-json';
import { InitGet$Json$Params } from '../fn/testing/init-get-json';
import { initGet$Plain } from '../fn/testing/init-get-plain';
import { InitGet$Plain$Params } from '../fn/testing/init-get-plain';

@Injectable({ providedIn: 'root' })
export class TestingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `initGet()` */
  static readonly InitGetPath = '/init';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `initGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  initGet$Plain$Response(params?: InitGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return initGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `initGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  initGet$Plain(params?: InitGet$Plain$Params, context?: HttpContext): Observable<string> {
    return this.initGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `initGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  initGet$Json$Response(params?: InitGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return initGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `initGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  initGet$Json(params?: InitGet$Json$Params, context?: HttpContext): Observable<string> {
    return this.initGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
