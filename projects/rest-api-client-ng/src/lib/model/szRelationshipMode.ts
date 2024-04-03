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

/**
 * Controls how to handle the first-degree related entities.  The possible values are:   * `NONE` - Do not include any data on first-degree related entities --      this is the fastest option from a performance perspective because      related entities do not have to be retrieved.   * `PARTIAL` - **(default value)** Include only partial stub      information for related entities with the `partial` property of the      `SzRelatedEntity` instances set to `true`.  Obtaining additional      information requires subsequent API calls.   * `FULL` - Include full data on the first-degree related entities      according to the `featureMode` and `detailLevel` **unless**      `forceMinimal` is `true`.  This option obtains the entity network      at one degree for the requested entity and will populate up to 1000      related entities as much as possible with respect to the      `featureMode` and `detailLevel`.  Related entities beyond the first      1000 will be left incomplete and have their `partial` property set      to `true` regardless of the `detailLevel` and `featureMode`.  If      this value is specified along with `forceMinimal=true` then      `PARTIAL` is used instead.
 */
export type SzRelationshipMode = 'NONE' | 'PARTIAL' | 'FULL';

export const SzRelationshipMode = {
    NONE: 'NONE' as SzRelationshipMode,
    PARTIAL: 'PARTIAL' as SzRelationshipMode,
    FULL: 'FULL' as SzRelationshipMode
};