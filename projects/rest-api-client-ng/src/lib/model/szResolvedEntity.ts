/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 1.7.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SzDataSourceRecordSummary } from './szDataSourceRecordSummary';
import { SzEntityFeature } from './szEntityFeature';
import { SzEntityRecord } from './szEntityRecord';


/**
 * Describes a resolved entity that is made up of one or more EntityRecord instances.
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
     * An array of characteristiics associated with the entity that are formatted for readability.  These will be prefixed by a characteristic type and optionally by a \"usage type\" if one was provided.
     */
    characteristicData?: Array<string>;
    /**
     * An array of attributes associated with the entity that are formatted for readability.  These will be prefixed by an attribtue type and optionally by a \"usage type\" if one was provided.
     * @deprecated use characteristicData instead
     */
    attributeData?: Array<string>;
    /**
     * An array of addresses associated with the entity that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"HOME: 101 Main Street\")
     */
    addressData?: Array<string>;
    /**
     * An array of phone numbers associated with the entity that are formatted for readability.  These may be prefixed by a \"usage type\" if one was provided (e.g.: \"HOME: 702-555-1212\")
     */
    phoneData?: Array<string>;
    /**
     * An array of entity data associated with the record where the items are formatted for readability.  These will be prefixed by an identifier type and may be prefixed by a \"usage type\" if one was provided (e.g.: \"ID: 123456789\" or \"EMAIL: WORK: joe@nowhere.com\")
     */
    identifierData?: Array<string>;
    /**
     * The array of EntityRecord instances describing the records associated with this entity.
     */
    records?: Array<SzEntityRecord>;
    /**
     * The map of string feature names to arrays of EntityFeature instances describing the values associated with each respective feature name.
     */
    features?: {
        [key: string] : SzEntityFeature[]
    }
    /**
     * If true then this SzResolvedEntity has complete features and records, otherwise they are not provided.  Also, the recordSummary items may be missing the topRecordIds if partial is true.  This can be true for partially retrieved related entities or if features are suppressed or if the minimal response flag has been specified.
     */
    partial?: boolean;
}