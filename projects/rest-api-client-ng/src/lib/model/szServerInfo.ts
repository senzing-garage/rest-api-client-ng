/**
 * Senzing POC REST API
 * This is the Senzing POC REST API.  This API is <b>NOT</b> maintained for backwards compatibility.  This API extends the [Senzing REST API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/Senzing/senzing-rest-api-specification/master/senzing-rest-api.yaml) which is maintained for backwards compatibility.  However, the Senzing POC API is specifically targeted at the Senzing One-Day POC application and no guarantees are made for support.  It can be used as example for creating your own extended API. <br><br> <b>SSE NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave similarly to its standard operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) <br><br> <b>WEB SOCKETS NOTE:</b> Some end-points described here will indicate \"(Supports WebSockets)\" to indicate that they can invoked via the Web Sockets protocol. This support is activated by invoking the end-point using the `ws://` protocol in the URL.  Any request query parameters can still be sent on the URL and the request body can be sent as one or more message from the client (as documented).  The end-point response will be sent as one or more response messages as documented (sometimes describing progress as with SSE end-points).  Upon failure responses will follow the same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Provides information about which server features are enabled and which are not enabled.
 */
 export interface SzServerInfo { 
  /**
   * The number of Senzing worker threads pooled for handling requests.
   */
  concurrency?: number;
  /**
   * The active configuration ID being used by the API server.  This is still available if the server was started with a static file configuration via the `G2CONFIGFILE` initialization property.
   */
  activeConfigId?: number;
  /**
   * Whether or not the server will automatically pickup the latest default configuration if it changes.
   */
  dynamicConfig?: boolean;
  /**
   * Whether or not the server was started in read-only mode.  If in read-only mode then operations that modify the repository (e.g.: loading records or configuring new data sources) are not allowed.
   */
  readOnly?: boolean;
  /**
   * Whether or not admin features are enabled.  If admin features are not enabled then the configuration cannot be modified.
   */
  adminEnabled?: boolean;
  /**
   * The maximum size for inbound text or binary messages when invoking end-points via Web Sockets `ws://` protocol.
   */
  webSocketsMessageMaxSize?: number;
  /**
   * Whether or not an asynchronous INFO queue has been configured for automatically sending \"INFO\" messages when records are loaded, reevaluated or deleted.
   */
  infoQueueConfigured?: boolean;
  /**
   * Whether or not an asynchronous LOAD queue has been configured for asynchronously loading records.
   */
  loadQueueConfigured?: boolean;
}