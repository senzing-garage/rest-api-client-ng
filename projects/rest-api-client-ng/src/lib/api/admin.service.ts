/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>SSE NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave similarly to its standard operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) <br><br> <b>WEB SOCKETS NOTE:</b> Some end-points described here will indicate \"(Supports WebSockets)\" to indicate that they can invoked via the Web Sockets protocol. This support is activated by invoking the end-point using the `ws://` protocol in the URL.  Any request query parameters can still be sent on the URL and the request body can be sent as one or more message from the client (as documented).  The end-point response will be sent as one or more response messages as documented (sometimes describing progress as with SSE end-points).  Upon failure responses will follow the same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 3.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { SzBaseResponse } from '../model/szBaseResponse';
import { SzLicenseResponse } from '../model/szLicenseResponse';
import { SzOpenApiSpecResponseOrRawJson } from '../model/szOpenApiSpecResponseOrRawJson';
import { SzServerInfoResponse } from '../model/szServerInfoResponse';
import { SzVersionResponse } from '../model/szVersionResponse';
import { SzQueueInfoResponse } from '../model/szQueueInfoResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AdminService {
    protected _basePath     = '/';
    public configuration    = new Configuration();
    private _defaultHeaders = new HttpHeaders();

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
    /**
     * get additional headers so we can add them to the default request headers
     */
    private get additionalHeaders(): {[key: string]: string} | undefined {
        return this.configuration && this.configuration.additionalHeaders ? this.configuration.additionalHeaders : undefined;
    }
    /** 
     * the default headers for http requests
     * including any additional headers added to configuration
    */
    public get defaultHeaders() {
        let retVal = this._defaultHeaders;
        let _additionalHeaders = this.additionalHeaders;
        // if additional headers specified merge with defaults
        if(_additionalHeaders) {
            for(let _hKey in _additionalHeaders) {
                retVal = retVal.set(_hKey, _additionalHeaders[_hKey]);
            }
        }
        return retVal;
    }
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
     * This operation will provides server information describing the options with which the server was started.  This can be used to determine if the admin operations are enabled or if only read operations may be invoked.  This also allows the client to know the maximum message size for Web Sockets communication. 
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
     * The heartbeat operation can be used to ensure that the HTTP server is indeed running, but this operation does not call upon the underlying native Senzing API and therefore does not ensure the Senzing initialization or configuration is valid. 
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
     * This operation will obtain license information for the underlying native Senzing API. 
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
     * Gets this Open API specification to describe the API.
     * This operation can be used to obtain the Open API specification in JSON format.  The specification can either be the &#x60;data&#x60; field of a standard response (i.e.: a response with a &#x60;meta&#x60;, &#x60;links&#x60; and &#x60;data&#x60; field) or as raw format where the root JSON document is the Open API specification JSON. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public openApiSpecification(observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<SzOpenApiSpecResponseOrRawJson>;
    public openApiSpecification(observe?: 'response', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpResponse<SzOpenApiSpecResponseOrRawJson>>;
    public openApiSpecification(observe?: 'events', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpEvent<SzOpenApiSpecResponseOrRawJson>>;
    public openApiSpecification(observe: any = 'body', reportProgress: boolean = false, additionalHeaders: {[key: string]: string} = {} ): Observable<any> {

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

        return this.httpClient.request<SzOpenApiSpecResponseOrRawJson>('get',`${this.basePath}/specifications/open-api`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a root-level response from the server.  This returns the same as the &#x60;GET /heartbeat&#x60; endpoint for now, but may change in the future to provide additional information.
     * The root operation can be used to ensure that the HTTP server is indeed running, but this operation does not call upon the underlying native Senzing API and therefore does not ensure the Senzing initialization or configuration is valid. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public root(observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<SzBaseResponse>;
    public root(observe?: 'response', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpResponse<SzBaseResponse>>;
    public root(observe?: 'events', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}): Observable<HttpEvent<SzBaseResponse>>;
    public root(observe: any = 'body', reportProgress: boolean = false, additionalHeaders: {[key: string]: string} = {} ): Observable<any> {

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

        return this.httpClient.request<SzBaseResponse>('get',`${this.basePath}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get the full version information.
     * This operation will obtain the full version information for the server. Much of the same information is available in the &#x60;meta&#x60; segment of every JSON response. 
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

    /**
     * Gets the properties of the configured load queue.
     * Obtains the properties of the configured load queue
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
     public getLoadQueueInfo(observe?: 'body', reportProgress?: boolean): Observable<SzQueueInfoResponse>;
     public getLoadQueueInfo(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SzQueueInfoResponse>>;
     public getLoadQueueInfo(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SzQueueInfoResponse>>;
     public getLoadQueueInfo(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
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
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<SzQueueInfoResponse>('get',`${this.basePath}/load-queue`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 }
