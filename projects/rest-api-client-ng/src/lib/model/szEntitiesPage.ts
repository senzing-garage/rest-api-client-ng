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
import { SzBoundType } from './szBoundType';
import { SzEntity } from './szEntity';

/**
 * Encapsulates a paged list of entity ID's identifying the entities pertaining to a specific statistic.
 */
export interface SzEntitiesPage {
    /**
     * The entity ID bound value that bounds the returned entity ID's.
     */
    bound: number;
    boundType: SzBoundType;
    /**
     * The requested page size representing the maximum number of  entities that were included in the page.
     */
    pageSize: number;
    /**
     * The requested sample size representing the number of entities to be randomly selected from the page of results.
     */
    sampleSize?: number;
    /**
     * The minimum entity ID of the returned results.  **NOTE:** This field is absent or `null` if there are no results.
     */
    minimumValue?: number;
    /**
     * The maximum entity ID of the returned results.  **NOTE:** This field is absent or `null` if there are no results.
     */
    maximumValue?: number;
    /**
     * The minimum entity ID of the entire entity page.  This will  be the same as `minimumValue` if `sampleSize` was not  specified, however, if `sampleSize` was specified then this  will be the minimum entity ID value of all the candidate entities on the page that were used for random sample selection even if that entity was not randomly selected.  **NOTE:** This field is absent or `null` if there are no results.
     */
    pageMinimumValue?: number;
    /**
     * The maximum entity ID of the entire entity page.  This will  be the same as `maximumValue` if `sampleSize` was not  specified, however, if `sampleSize` was specified then this  will be the maximum entity ID value of all the candidate entities on the page that were used for random sample selection even if that entity was not randomly selected.  **NOTE:** This field is absent or `null` if there are no results.
     */
    pageMaximumValue?: number;
    /**
     * The total number of entities representing the set of all  possible results across all pages.
     */
    totalEntityCount: number;
    /**
     * The number of entities in the set that exist on pages before  this page.
     */
    beforePageCount: number;
    /**
     * The number of entities in the set that exist on pages after this page.
     */
    afterPageCount: number;
    /**
     * An array of `SzEntity` instances describing the entities for the page. The array will be in ascending order of entity ID.
     */
    entities: Array<SzEntity>;
}
