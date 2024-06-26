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
import { SzFeatureReference } from './szFeatureReference';

/**
 * Describes a record (aka: observed entity) that has been loaded for a particular data source.
 */
export interface SzEntityRecord { 
    /**
     * The data source code identifying the source from which the record was loaded.
     */
    dataSource?: string;
    /**
     * The identifier that uniquely identifies this record from other records from the same data source.  This may have been loaded with the record or automatically generated from the record's data.
     */
    recordId?: string;
    /**
     * The optional array of record feature references to the entity features along with the record's usage type if any.
     */
    featureReferences?: Array<SzFeatureReference>;
    /**
     * The timestamp that the record was most recently loaded or updated.
     */
    lastSeenTimestamp?: Date;
    /**
     * An array of addresses associated with the record that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"HOME: 101 Main Street\")
     */
    addressData?: Array<string>;
    /**
     * An array of characteristics associated with the record that are formatted for readability.  These will be prefixed by a characteristic type and optionally by a \"usage type\" if one was provided.  **NOTE:** The `characteristicData` field is derived from the `ATTRIBUTE_DATA` field in the \"raw data\" JSON. 
     */
    characteristicData?: Array<string>;
    /**
     * An array of entity data associated with the record where the items are formatted for readability.  These will be prefixed by an identifier type and may be prefixed by a \"usage type\" if one was provided (e.g.: \"ID: 123456789\" or \"EMAIL: WORK: joe@nowhere.com\")
     */
    identifierData?: Array<string>;
    /**
     * An array of names associated with the record that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"Joe Schmoe\" or \"AKA: Joseph P. Schmoe\")
     */
    nameData?: Array<string>;
    /**
     * An array of phone numbers associated with the record that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"HOME: 702-555-1212\")
     */
    phoneData?: Array<string>;
    /**
     * An array of relationship data items associated with the record that describes disclosed relationships.
     */
    relationshipData?: Array<string>;
    /**
     * An array of associated data items that were loaded with the record but not normally recognized or used for entity resolution.  This array usually contains useful information from the source system.
     */
    otherData?: Array<string>;
    /**
     * The JSON representation of the original data record that was loaded.
     */
    originalSourceData?: { [key: string]: any; };
}