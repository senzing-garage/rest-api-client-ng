/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>SSE NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave similarly to its standard operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) <br><br> <b>WEB SOCKETS NOTE:</b> Some end-points described here will indicate \"(Supports WebSockets)\" to indicate that they can invoked via the Web Sockets protocol. This support is activated by invoking the end-point using the `ws://` protocol in the URL.  Any request query parameters can still be sent on the URL and the request body can be sent as one or more message from the client (as documented).  The end-point response will be sent as one or more response messages as documented (sometimes describing progress as with SSE end-points).  Upon failure responses will follow the same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 3.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Describes the level of detail desired for entity data when obtained via the various endpoints that return entity data.  Details for features of entities as well as the related entities of entities are controlled by other flags.  Possible values are:   * `MINIMAL` - The entities returned will include at most their                 entity ID's as well as identifiers for their                 constituent records (i.e.: data source code and record                 ID for each record).   * `BRIEF` - Builds upon `MINIMAL` to add the entity name and record               summary as well as those for related entities when related               entities are being included.   * `STANDARD` - Builds upon `BRIEF` to add record-level matching info                  as well as matching info for related entities when                  related entities are being included.   * `DETAILED` - Builds upon `STANDARD` to add the original JSON data                  for each record as well as formatted record data
 */
export type SzDetailLevel = 'MINIMAL' | 'BRIEF' | 'STANDARD' | 'DETAILED';

export const SzDetailLevel = {
    MINIMAL: 'MINIMAL' as SzDetailLevel,
    BRIEF: 'BRIEF' as SzDetailLevel,
    STANDARD: 'STANDARD' as SzDetailLevel,
    DETAILED: 'DETAILED' as SzDetailLevel
};