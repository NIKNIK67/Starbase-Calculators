/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getAlloyItemsGet$Json } from '../fn/main/get-alloy-items-get-json';
import { GetAlloyItemsGet$Json$Params } from '../fn/main/get-alloy-items-get-json';
import { getAlloyItemsGet$Plain } from '../fn/main/get-alloy-items-get-plain';
import { GetAlloyItemsGet$Plain$Params } from '../fn/main/get-alloy-items-get-plain';
import { getCapitalItemsGet$Json } from '../fn/main/get-capital-items-get-json';
import { GetCapitalItemsGet$Json$Params } from '../fn/main/get-capital-items-get-json';
import { getCapitalItemsGet$Plain } from '../fn/main/get-capital-items-get-plain';
import { GetCapitalItemsGet$Plain$Params } from '../fn/main/get-capital-items-get-plain';
import { getMaterialsNamesGet$Json } from '../fn/main/get-materials-names-get-json';
import { GetMaterialsNamesGet$Json$Params } from '../fn/main/get-materials-names-get-json';
import { getMaterialsNamesGet$Plain } from '../fn/main/get-materials-names-get-plain';
import { GetMaterialsNamesGet$Plain$Params } from '../fn/main/get-materials-names-get-plain';
import { ItemOutputDto } from '../models/item-output-dto';
import { MaterialsNamesDto } from '../models/materials-names-dto';

@Injectable({ providedIn: 'root' })
export class MainService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCapitalItemsGet()` */
  static readonly GetCapitalItemsGetPath = '/GetCapitalItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCapitalItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCapitalItemsGet$Plain$Response(params?: GetCapitalItemsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemOutputDto>>> {
    return getCapitalItemsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCapitalItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCapitalItemsGet$Plain(params?: GetCapitalItemsGet$Plain$Params, context?: HttpContext): Observable<Array<ItemOutputDto>> {
    return this.getCapitalItemsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemOutputDto>>): Array<ItemOutputDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCapitalItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCapitalItemsGet$Json$Response(params?: GetCapitalItemsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemOutputDto>>> {
    return getCapitalItemsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCapitalItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCapitalItemsGet$Json(params?: GetCapitalItemsGet$Json$Params, context?: HttpContext): Observable<Array<ItemOutputDto>> {
    return this.getCapitalItemsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemOutputDto>>): Array<ItemOutputDto> => r.body)
    );
  }

  /** Path part for operation `getMaterialsNamesGet()` */
  static readonly GetMaterialsNamesGetPath = '/GetMaterialsNames';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMaterialsNamesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMaterialsNamesGet$Plain$Response(params?: GetMaterialsNamesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaterialsNamesDto>>> {
    return getMaterialsNamesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMaterialsNamesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMaterialsNamesGet$Plain(params?: GetMaterialsNamesGet$Plain$Params, context?: HttpContext): Observable<Array<MaterialsNamesDto>> {
    return this.getMaterialsNamesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MaterialsNamesDto>>): Array<MaterialsNamesDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMaterialsNamesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMaterialsNamesGet$Json$Response(params?: GetMaterialsNamesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MaterialsNamesDto>>> {
    return getMaterialsNamesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMaterialsNamesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMaterialsNamesGet$Json(params?: GetMaterialsNamesGet$Json$Params, context?: HttpContext): Observable<Array<MaterialsNamesDto>> {
    return this.getMaterialsNamesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MaterialsNamesDto>>): Array<MaterialsNamesDto> => r.body)
    );
  }

  /** Path part for operation `getAlloyItemsGet()` */
  static readonly GetAlloyItemsGetPath = '/GetAlloyItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlloyItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlloyItemsGet$Plain$Response(params?: GetAlloyItemsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemOutputDto>>> {
    return getAlloyItemsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlloyItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlloyItemsGet$Plain(params?: GetAlloyItemsGet$Plain$Params, context?: HttpContext): Observable<Array<ItemOutputDto>> {
    return this.getAlloyItemsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemOutputDto>>): Array<ItemOutputDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAlloyItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlloyItemsGet$Json$Response(params?: GetAlloyItemsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ItemOutputDto>>> {
    return getAlloyItemsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAlloyItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAlloyItemsGet$Json(params?: GetAlloyItemsGet$Json$Params, context?: HttpContext): Observable<Array<ItemOutputDto>> {
    return this.getAlloyItemsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ItemOutputDto>>): Array<ItemOutputDto> => r.body)
    );
  }

}
