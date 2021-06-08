/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave the similarly to its stand operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 2.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { SzBaseResponse } from '../model/szBaseResponse';
import { SzLicenseResponse } from '../model/szLicenseResponse';
import { SzServerInfoResponse } from '../model/szServerInfoResponse';
import { SzVersionResponse } from '../model/szVersionResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AdminService {

    protected _basePath = '/';
    /**
     * get the basePath from the configuration instance
     * or alternatively fallback to local reference
     */
    public get basePath(): string {
        return this.configuration && this.configuration.basePath ? this.configuration.basePath : this._basePath;
    }
    /**
     * set the local basePath reference
     */
    public set basePath(value: string) {
        this._basePath = value;
    }

    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    /**
     * Get info regarding the server&#x27;s state and supported features.
     *
     *
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getServerInfo(observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<SzServerInfoResponse>;
    public getServerInfo(observe?: 'response', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpResponse<SzServerInfoResponse>>;
    public getServerInfo(observe?: 'events', reportProgress?: boolean, additionalHeaders?: {[key: string]: string} ): Observable<HttpEvent<SzServerInfoResponse>>;
    public getServerInfo(observe: any = 'body', reportProgress: boolean = false, additionalHeaders: {[key: string]: string} = {}): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        if(additionalHeaders) {
            for(let _hKey in additionalHeaders) {
                headers = headers.set(_hKey, additionalHeaders[_hKey]);
            }
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SzServerInfoResponse>('get',`${this.basePath}/server-info`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a heartbeat from the server to make sure it is up and running.  The response will include the current timestamp.
     *
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public heartbeat(observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<SzBaseResponse>;
    public heartbeat(observe?: 'response', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpResponse<SzBaseResponse>>;
    public heartbeat(observe?: 'events', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpEvent<SzBaseResponse>>;
    public heartbeat(observe: any = 'body', reportProgress: boolean = false, additionalHeaders: {[key: string]: string} = {} ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        if(additionalHeaders) {
            for(let _hKey in additionalHeaders) {
                headers = headers.set(_hKey, additionalHeaders[_hKey]);
            }
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SzBaseResponse>('get',`${this.basePath}/heartbeat`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the license information.
     *
     * @param withRaw Whether or not to include the raw JSON response from the underlying native API.  This raw response may include additional details but lack some of the abstraction the standard response provides.  If true, then the &#x27;rawData&#x27; field in the response will be a non-null value and contain the additional details.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public license(withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<SzLicenseResponse>;
    public license(withRaw?: boolean, observe?: 'response', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpResponse<SzLicenseResponse>>;
    public license(withRaw?: boolean, observe?: 'events', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpEvent<SzLicenseResponse>>;
    public license(withRaw?: boolean, observe: any = 'body', reportProgress: boolean = false, additionalHeaders: {[key: string]: string} = {} ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (withRaw !== undefined && withRaw !== null) {
            queryParameters = queryParameters.set('withRaw', <any>withRaw);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        if(additionalHeaders) {
            for(let _hKey in additionalHeaders) {
                headers = headers.set(_hKey, additionalHeaders[_hKey]);
            }
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SzLicenseResponse>('get',`${this.basePath}/license`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the full version information.
     *
     * @param withRaw Whether or not to include the raw JSON response from the underlying native API.  This raw response may include additional details but lack some of the abstraction the standard response provides.  If true, then the &#x27;rawData&#x27; field in the response will be a non-null value and contain the additional details.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public version(withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<SzVersionResponse>;
    public version(withRaw?: boolean, observe?: 'response', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpResponse<SzVersionResponse>>;
    public version(withRaw?: boolean, observe?: 'events', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpEvent<SzVersionResponse>>;
    public version(withRaw?: boolean, observe: any = 'body', reportProgress: boolean = false, additionalHeaders: {[key: string]: string} = {} ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (withRaw !== undefined && withRaw !== null) {
            queryParameters = queryParameters.set('withRaw', <any>withRaw);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        if(additionalHeaders) {
            for(let _hKey in additionalHeaders) {
                headers = headers.set(_hKey, additionalHeaders[_hKey]);
            }
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<SzVersionResponse>('get',`${this.basePath}/version`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
 }
