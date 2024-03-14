/**
 * Senzing POC REST API
 * This is the Senzing POC REST API.  This API is <b>NOT</b> maintained for backwards compatibility.  This API extends the [Senzing REST API](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/senzing-garage/senzing-rest-api-specification/main/senzing-rest-api.yaml) which is maintained for backwards compatibility.  However, the Senzing POC API is specifically targeted at the Senzing One-Day POC application and no guarantees are made for support.  It can be used as example for creating your own extended API. <br><br> <b>SSE NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave similarly to its standard operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) <br><br> <b>WEB SOCKETS NOTE:</b> Some end-points described here will indicate \"(Supports WebSockets)\" to indicate that they can invoked via the Web Sockets protocol. This support is activated by invoking the end-point using the `ws://` protocol in the URL.  Any request query parameters can still be sent on the URL and the request body can be sent as one or more message from the client (as documented).  The end-point response will be sent as one or more response messages as documented (sometimes describing progress as with SSE end-points).  Upon failure responses will follow the same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 3.5.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SzRelationCounts } from './szRelationCounts';
import { SzRelationType } from './szRelationType';

/**
 * Describes the cross-source statistics between two data sources.
 */
export interface SzRelationCountsResponseData { 
    /**
     * The primary data source in the cross comparison.
     */
    dataSource: string;
    /**
     * The versus data source in the cross comparison.
     */
    versusDataSource: string;
    relationType: SzRelationType;
    /**
     * The array of `SzRelationCounts` describing the entity, record and relationship counts associated with the relationships of the  associated `relationType` from entities having at least one record from the primary data source to entities having at least at least one record from the \"versus\" data source for each combination of match key and principle that were requested.  If all were requested, this includes the cases where either or both of the match key and principle are absent or `null` indicating tracking across all match keys and/or principles.
     */
    counts: Array<SzRelationCounts>;
}