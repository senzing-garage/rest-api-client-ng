/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Describes the number of records associated with a specific data source for a given resolved entity.  Optionally, if the complete set of records has been retrieved for the associated entity, then this may also contain the \"top 10\" record IDs for the associated data source.
 */
export interface SzDataSourceRecordSummary { 
    /**
     * The data source code identifying the data source for which the record breakdown is being described.
     */
    dataSource?: string;
    /**
     * The number of records from the respective data source that are part of the associated resolved entity.
     */
    recordCount?: number;
    /**
     * The optional array of string record ID's identifying the top 10 records for the associated entity from the respective data source. This may be null or an empty array if the data was not available.
     */
    topRecordIds?: Array<string>;
}