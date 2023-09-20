/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Battery } from '../models/battery';
import { FuelChamber } from '../models/fuel-chamber';
import { Generator } from '../models/generator';
import { getAlloyItemsGet$Json } from '../fn/main/get-alloy-items-get-json';
import { GetAlloyItemsGet$Json$Params } from '../fn/main/get-alloy-items-get-json';
import { getAlloyItemsGet$Plain } from '../fn/main/get-alloy-items-get-plain';
import { GetAlloyItemsGet$Plain$Params } from '../fn/main/get-alloy-items-get-plain';
import { getBatteriesGet$Json } from '../fn/main/get-batteries-get-json';
import { GetBatteriesGet$Json$Params } from '../fn/main/get-batteries-get-json';
import { getBatteriesGet$Plain } from '../fn/main/get-batteries-get-plain';
import { GetBatteriesGet$Plain$Params } from '../fn/main/get-batteries-get-plain';
import { getCapitalItemsGet$Json } from '../fn/main/get-capital-items-get-json';
import { GetCapitalItemsGet$Json$Params } from '../fn/main/get-capital-items-get-json';
import { getCapitalItemsGet$Plain } from '../fn/main/get-capital-items-get-plain';
import { GetCapitalItemsGet$Plain$Params } from '../fn/main/get-capital-items-get-plain';
import { getFuelChambersGet$Json } from '../fn/main/get-fuel-chambers-get-json';
import { GetFuelChambersGet$Json$Params } from '../fn/main/get-fuel-chambers-get-json';
import { getFuelChambersGet$Plain } from '../fn/main/get-fuel-chambers-get-plain';
import { GetFuelChambersGet$Plain$Params } from '../fn/main/get-fuel-chambers-get-plain';
import { getGeneratorsGet$Json } from '../fn/main/get-generators-get-json';
import { GetGeneratorsGet$Json$Params } from '../fn/main/get-generators-get-json';
import { getGeneratorsGet$Plain } from '../fn/main/get-generators-get-plain';
import { GetGeneratorsGet$Plain$Params } from '../fn/main/get-generators-get-plain';
import { getMaterialsNamesGet$Json } from '../fn/main/get-materials-names-get-json';
import { GetMaterialsNamesGet$Json$Params } from '../fn/main/get-materials-names-get-json';
import { getMaterialsNamesGet$Plain } from '../fn/main/get-materials-names-get-plain';
import { GetMaterialsNamesGet$Plain$Params } from '../fn/main/get-materials-names-get-plain';
import { getPropelantTanksGet$Json } from '../fn/main/get-propelant-tanks-get-json';
import { GetPropelantTanksGet$Json$Params } from '../fn/main/get-propelant-tanks-get-json';
import { getPropelantTanksGet$Plain } from '../fn/main/get-propelant-tanks-get-plain';
import { GetPropelantTanksGet$Plain$Params } from '../fn/main/get-propelant-tanks-get-plain';
import { getRadiatorsGet$Json } from '../fn/main/get-radiators-get-json';
import { GetRadiatorsGet$Json$Params } from '../fn/main/get-radiators-get-json';
import { getRadiatorsGet$Plain } from '../fn/main/get-radiators-get-plain';
import { GetRadiatorsGet$Plain$Params } from '../fn/main/get-radiators-get-plain';
import { getThrustersGet$Json } from '../fn/main/get-thrusters-get-json';
import { GetThrustersGet$Json$Params } from '../fn/main/get-thrusters-get-json';
import { getThrustersGet$Plain } from '../fn/main/get-thrusters-get-plain';
import { GetThrustersGet$Plain$Params } from '../fn/main/get-thrusters-get-plain';
import { getToolsGet$Json } from '../fn/main/get-tools-get-json';
import { GetToolsGet$Json$Params } from '../fn/main/get-tools-get-json';
import { getToolsGet$Plain } from '../fn/main/get-tools-get-plain';
import { GetToolsGet$Plain$Params } from '../fn/main/get-tools-get-plain';
import { getWeaponsGet$Json } from '../fn/main/get-weapons-get-json';
import { GetWeaponsGet$Json$Params } from '../fn/main/get-weapons-get-json';
import { getWeaponsGet$Plain } from '../fn/main/get-weapons-get-plain';
import { GetWeaponsGet$Plain$Params } from '../fn/main/get-weapons-get-plain';
import { ItemOutputDto } from '../models/item-output-dto';
import { MaterialsNamesDto } from '../models/materials-names-dto';
import { PropelantTank } from '../models/propelant-tank';
import { Radiator } from '../models/radiator';
import { Thruster } from '../models/thruster';
import { Tool } from '../models/tool';
import { Weapon } from '../models/weapon';

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

  /** Path part for operation `getThrustersGet()` */
  static readonly GetThrustersGetPath = '/GetThrusters';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getThrustersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getThrustersGet$Plain$Response(params?: GetThrustersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Thruster>>> {
    return getThrustersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getThrustersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getThrustersGet$Plain(params?: GetThrustersGet$Plain$Params, context?: HttpContext): Observable<Array<Thruster>> {
    return this.getThrustersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Thruster>>): Array<Thruster> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getThrustersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getThrustersGet$Json$Response(params?: GetThrustersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Thruster>>> {
    return getThrustersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getThrustersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getThrustersGet$Json(params?: GetThrustersGet$Json$Params, context?: HttpContext): Observable<Array<Thruster>> {
    return this.getThrustersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Thruster>>): Array<Thruster> => r.body)
    );
  }

  /** Path part for operation `getWeaponsGet()` */
  static readonly GetWeaponsGetPath = '/GetWeapons';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeaponsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeaponsGet$Plain$Response(params?: GetWeaponsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Weapon>>> {
    return getWeaponsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeaponsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeaponsGet$Plain(params?: GetWeaponsGet$Plain$Params, context?: HttpContext): Observable<Array<Weapon>> {
    return this.getWeaponsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Weapon>>): Array<Weapon> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeaponsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeaponsGet$Json$Response(params?: GetWeaponsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Weapon>>> {
    return getWeaponsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeaponsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeaponsGet$Json(params?: GetWeaponsGet$Json$Params, context?: HttpContext): Observable<Array<Weapon>> {
    return this.getWeaponsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Weapon>>): Array<Weapon> => r.body)
    );
  }

  /** Path part for operation `getBatteriesGet()` */
  static readonly GetBatteriesGetPath = '/GetBatteries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBatteriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteriesGet$Plain$Response(params?: GetBatteriesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Battery>>> {
    return getBatteriesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBatteriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteriesGet$Plain(params?: GetBatteriesGet$Plain$Params, context?: HttpContext): Observable<Array<Battery>> {
    return this.getBatteriesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Battery>>): Array<Battery> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBatteriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteriesGet$Json$Response(params?: GetBatteriesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Battery>>> {
    return getBatteriesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getBatteriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBatteriesGet$Json(params?: GetBatteriesGet$Json$Params, context?: HttpContext): Observable<Array<Battery>> {
    return this.getBatteriesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Battery>>): Array<Battery> => r.body)
    );
  }

  /** Path part for operation `getFuelChambersGet()` */
  static readonly GetFuelChambersGetPath = '/GetFuelChambers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFuelChambersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFuelChambersGet$Plain$Response(params?: GetFuelChambersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FuelChamber>>> {
    return getFuelChambersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFuelChambersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFuelChambersGet$Plain(params?: GetFuelChambersGet$Plain$Params, context?: HttpContext): Observable<Array<FuelChamber>> {
    return this.getFuelChambersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuelChamber>>): Array<FuelChamber> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFuelChambersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFuelChambersGet$Json$Response(params?: GetFuelChambersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FuelChamber>>> {
    return getFuelChambersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFuelChambersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFuelChambersGet$Json(params?: GetFuelChambersGet$Json$Params, context?: HttpContext): Observable<Array<FuelChamber>> {
    return this.getFuelChambersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FuelChamber>>): Array<FuelChamber> => r.body)
    );
  }

  /** Path part for operation `getGeneratorsGet()` */
  static readonly GetGeneratorsGetPath = '/GetGenerators';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGeneratorsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneratorsGet$Plain$Response(params?: GetGeneratorsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Generator>>> {
    return getGeneratorsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGeneratorsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneratorsGet$Plain(params?: GetGeneratorsGet$Plain$Params, context?: HttpContext): Observable<Array<Generator>> {
    return this.getGeneratorsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Generator>>): Array<Generator> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGeneratorsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneratorsGet$Json$Response(params?: GetGeneratorsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Generator>>> {
    return getGeneratorsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGeneratorsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGeneratorsGet$Json(params?: GetGeneratorsGet$Json$Params, context?: HttpContext): Observable<Array<Generator>> {
    return this.getGeneratorsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Generator>>): Array<Generator> => r.body)
    );
  }

  /** Path part for operation `getPropelantTanksGet()` */
  static readonly GetPropelantTanksGetPath = '/GetPropelantTanks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPropelantTanksGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPropelantTanksGet$Plain$Response(params?: GetPropelantTanksGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PropelantTank>>> {
    return getPropelantTanksGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPropelantTanksGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPropelantTanksGet$Plain(params?: GetPropelantTanksGet$Plain$Params, context?: HttpContext): Observable<Array<PropelantTank>> {
    return this.getPropelantTanksGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PropelantTank>>): Array<PropelantTank> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPropelantTanksGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPropelantTanksGet$Json$Response(params?: GetPropelantTanksGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PropelantTank>>> {
    return getPropelantTanksGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPropelantTanksGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPropelantTanksGet$Json(params?: GetPropelantTanksGet$Json$Params, context?: HttpContext): Observable<Array<PropelantTank>> {
    return this.getPropelantTanksGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PropelantTank>>): Array<PropelantTank> => r.body)
    );
  }

  /** Path part for operation `getRadiatorsGet()` */
  static readonly GetRadiatorsGetPath = '/GetRadiators';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRadiatorsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRadiatorsGet$Plain$Response(params?: GetRadiatorsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Radiator>>> {
    return getRadiatorsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRadiatorsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRadiatorsGet$Plain(params?: GetRadiatorsGet$Plain$Params, context?: HttpContext): Observable<Array<Radiator>> {
    return this.getRadiatorsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Radiator>>): Array<Radiator> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRadiatorsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRadiatorsGet$Json$Response(params?: GetRadiatorsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Radiator>>> {
    return getRadiatorsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRadiatorsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRadiatorsGet$Json(params?: GetRadiatorsGet$Json$Params, context?: HttpContext): Observable<Array<Radiator>> {
    return this.getRadiatorsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Radiator>>): Array<Radiator> => r.body)
    );
  }

  /** Path part for operation `getToolsGet()` */
  static readonly GetToolsGetPath = '/GetTools';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getToolsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getToolsGet$Plain$Response(params?: GetToolsGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tool>>> {
    return getToolsGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getToolsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getToolsGet$Plain(params?: GetToolsGet$Plain$Params, context?: HttpContext): Observable<Array<Tool>> {
    return this.getToolsGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tool>>): Array<Tool> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getToolsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getToolsGet$Json$Response(params?: GetToolsGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tool>>> {
    return getToolsGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getToolsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getToolsGet$Json(params?: GetToolsGet$Json$Params, context?: HttpContext): Observable<Array<Tool>> {
    return this.getToolsGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tool>>): Array<Tool> => r.body)
    );
  }

}
