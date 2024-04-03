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
import { SzAttributeClass } from './szAttributeClass';
import { SzAttributeNecessity } from './szAttributeNecessity';

/**
 * Describes an attribute type that partially (or fully) describes a feature of an entity that may be loaded as part of a record or used as criteria in a search.
 */
export interface SzAttributeType { 
    /**
     * The unique string that identifies the attribute type among all other attribute types.
     */
    attributeCode?: string;
    /**
     * The default value assumed for the attribute when it is not provided but is required as part of a feature.
     */
    defaultValue?: string;
    necessity?: SzAttributeNecessity;
    attributeClass?: SzAttributeClass;
    /**
     * Identifiers the feature type that this attribute type is an attribute of (if any).  For example, the \"NAME_FIRST\" attribute type would be an attribute of the \"NAME\" feature type and \"PASSPORT_COUNTRY\" would be an attribute of \"PASSPORT\" feature type. Some (advanced) attribute types are stand-alone and do not belong to a feature (e.g.: \"RECORD_ID\").
     */
    featureType?: string;
    /**
     * Indicates if the attribute type is considered to be \"advanced\". Advanced attribute types usually require the user to have some knowledge of how the data is mapped in the entity repository (e.g.: \"RECORD_ID\" or \"DATA_SOURCE\").  An application may exclude displaying these as options if these things are being auto-generated or automatically selected for the user.  You may want to contact Senzing support before leveraging advanced attribute types in your application.
     */
    advanced?: boolean;
    /**
     * Whether or not an attribute type is typically generated internally based on other attribute types.  These are not commonly used by the user except in some rare cases.  Examples include pre-hashed versions of attributes that are hashed.
     */
    internal?: boolean;
}