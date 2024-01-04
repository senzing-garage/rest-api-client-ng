/**
 * Senzing POC REST API
 * This is the Senzing POC REST API.  This API is <b>NOT</b> maintained for backwards compatibility.  This API extends the [Senzing REST API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/Senzing/senzing-rest-api-specification/main/senzing-rest-api.yaml) which is maintained for backwards compatibility.  However, the Senzing POC API is specifically targeted at the Senzing One-Day POC application and no guarantees are made for support.  It can be used as example for creating your own extended API. <br><br> <b>SSE NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave similarly to its standard operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) <br><br> <b>WEB SOCKETS NOTE:</b> Some end-points described here will indicate \"(Supports WebSockets)\" to indicate that they can invoked via the Web Sockets protocol. This support is activated by invoking the end-point using the `ws://` protocol in the URL.  Any request query parameters can still be sent on the URL and the request body can be sent as one or more message from the client (as documented).  The end-point response will be sent as one or more response messages as documented (sometimes describing progress as with SSE end-points).  Upon failure responses will follow the same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 3.4.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Encapsulates the statistics pertaining to counts of entities and records for a specific data source.
 */
export interface SzSourceCountStats { 
    /**
     * The data source code identifying the data source to which the statistics are associated.
     */
    dataSourceCode: string;
    /**
     * The total number of records that have been loaded for the associated data source.
     */
    recordCount: number;
    /**
     * The number of entities that have at least one record from the  associated data source.
     */
    entityCount: number;
    /**
     * The total number of records that have been loaded for the associated data source that did *NOT* match against any other records.  This  represents the number of entities having a record from this data source where that is the *ONLY* (single) record in the entity.
     */
    unmatchedRecordCount?: number;
}