/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>SSE NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave similarly to its standard operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) <br><br> <b>WEB SOCKETS NOTE:</b> Some end-points described here will indicate \"(Supports WebSockets)\" to indicate that they can invoked via the Web Sockets protocol. This support is activated by invoking the end-point using the `ws://` protocol in the URL.  Any request query parameters can still be sent on the URL and the request body can be sent as one or more message from the client (as documented).  The end-point response will be sent as one or more response messages as documented (sometimes describing progress as with SSE end-points).  Upon failure responses will follow the same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 3.3.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SzFocusRecordId } from './szFocusRecordId';

/**
 * Describes the perspective used in evaluating why an entity resolved or why two records may or may not resolve.  The answer to \"why\" is dependent on which \"record\" you are comparing against the other \"records\".  Internally, it is not always based on \"record\" because multiple records that are effectively identical collapse into a single perspective.
 */
export interface SzWhyPerspective { 
    /**
     * The internal ID uniquely identifying this perspective from others in the complete \"why\" response.
     */
    internalId?: number;
    /**
     * The associated entity ID for the perspective.
     */
    entityId?: number;
    /**
     * The array of `SzFocusRecordId` instances identifying the effectively identical records that are being compared against the other records.
     */
    focusRecords?: Array<SzFocusRecordId>;
}