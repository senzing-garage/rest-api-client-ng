/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>SSE NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave similarly to its standard operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) <br><br> <b>WEB SOCKETS NOTE:</b> Some end-points described here will indicate \"(Supports WebSockets)\" to indicate that they can invoked via the Web Sockets protocol. This support is activated by invoking the end-point using the `ws://` protocol in the URL.  Any request query parameters can still be sent on the URL and the request body can be sent as one or more message from the client (as documented).  The end-point response will be sent as one or more response messages as documented (sometimes describing progress as with SSE end-points).  Upon failure responses will follow the same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 3.5.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SzEntityRecord } from './szEntityRecord';
import { SzFeatureReference } from './szFeatureReference';

/**
 * Provides the additional fields to an SzEntityRecord that describe how it matched to the entity that it belongs to.
 */
export interface SzMatchedRecord extends SzEntityRecord { 
    /**
     * The match key describing what features matched between the first record in the resolved entity and this record. This is blank for the first record.
     */
    matchKey?: string;
    /**
     * The code identifying the resolution rule that matched this record to the first record in the resolved entity.  This is blank for the first record.
     */
    resolutionRuleCode?: string;
    /**
     * The integer \"match level\" describing how the first record in the resolved entity matched to this record.  This is zero for the first record and usually one (1) for other records.
     */
    matchLevel?: number;
}