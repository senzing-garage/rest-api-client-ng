/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 1.8.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Provides statistics specific to a given entity type of the records found in bulk data.
 */
export interface SzEntityTypeRecordAnalysis { 
    /**
     * The entity type code identifying the entity type for which the statistics are being provided.  This is `null` if the statistics pertain to those records with no entity type defined in the source data.
     */
    entityType?: string;
    /**
     * The number of records having the associated entity type.
     */
    recordCount?: number;
    /**
     * The number of records having the associated entity type that include a `RECORD_ID` value.
     */
    recordsWithRecordIdCount?: number;
}