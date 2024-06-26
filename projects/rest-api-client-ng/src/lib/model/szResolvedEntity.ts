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
import { SzDataSourceRecordSummary } from './szDataSourceRecordSummary';
import { SzEntityFeature } from './szEntityFeature';
import { SzMatchedRecord } from './szMatchedRecord';

/**
 * Describes a resolved entity that is made up of one or more SzMatchedRecord instances.
 */
export interface SzResolvedEntity { 
    /**
     * The unique numeric ID identifying the entity.
     */
    entityId?: number;
    /**
     * The name associated with this entity that is considered the best name among all the associated names.
     */
    entityName?: string;
    /**
     * Usually the same as the entityName property, but this may differ if the entity was found based on a name search.  In such a case, this field represents the name that most closely matches the name that was searched on.
     */
    bestName?: string;
    /**
     * The array of DataSourceRecordSummary instances describing the number of records associated with each data source that contributes to this entity.
     */
    recordSummaries?: Array<SzDataSourceRecordSummary>;
    /**
     * An array of names associated with the entity that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"Joe Schmoe\" or \"AKA: Joseph P. Schmoe\")
     */
    nameData?: Array<string>;
    /**
     * An array of characteristics associated with the entity that are formatted for readability.  These will be prefixed by a characteristic type and optionally by a \"usage type\" if one was provided. **NOTE:** The `characteristicData` field is derived from the feature data values that contribute to the `ATTRIBUTE_DATA` field at the record level in the \"raw data\" JSON.
     */
    characteristicData?: Array<string>;
    /**
     * An array of addresses associated with the entity that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"HOME: 101 Main Street\")
     */
    addressData?: Array<string>;
    /**
     * An array of phone numbers associated with the entity that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"HOME: 702-555-1212\")
     */
    phoneData?: Array<string>;
    /**
     * An array of entity data associated with the entity where the items are formatted for readability.  These will be prefixed by an identifier type and may be prefixed by a \"usage type\" if one was provided (e.g.: \"ID: 123456789\" or \"EMAIL: WORK: joe@nowhere.com\")
     */
    identifierData?: Array<string>;
    /**
     * An array of relationship data items associated with the entity that describes disclosed relationships.
     */
    relationshipData?: Array<string>;
    /**
     * An array of associated data items that were loaded with the entity's records but not normally recognized or used for entity resolution. This array usually contains useful information from the source systems.
     */
    otherData?: Array<string>;
    /**
     * The array of `SzMatchedRecord` instances describing the records associated with this entity.
     */
    records?: Array<SzMatchedRecord>;
    /**
     * The map of string feature names to arrays of SzEntityFeature instances describing the values associated with each respective feature name.
     */
    features?: { [key: string]: Array<SzEntityFeature>; };
    /**
     * If true then this `SzResolvedEntity` has complete features and records, otherwise they are not provided.  Also, the recordSummary items may be missing the topRecordIds if partial is true.  This can be true for partially retrieved related entities or if features are suppressed, if the detail level has suppressed records or related matching info (in the case of related entities) or if the force-minimal response flag has been been specified.
     */
    partial?: boolean;
    /**
     * The timestamp that the entity was last seen (i.e.: most recent record was loaded).
     */
    lastSeenTimestamp?: Date;
}