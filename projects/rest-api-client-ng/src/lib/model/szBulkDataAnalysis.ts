/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave the similarly to its stand operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`)
 *
 * OpenAPI spec version: 1.8.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SzBulkDataStatus } from './szBulkDataStatus';
import { SzDataSourceRecordAnalysis } from './szDataSourceRecordAnalysis';
import { SzEntityTypeRecordAnalysis } from './szEntityTypeRecordAnalysis';

/**
 * Describes the analysis performed against a set of bulk data records described as a JSON array, JSON Lines format or CSV format.
 */
export interface SzBulkDataAnalysis { 
    status?: SzBulkDataStatus;
    /**
     * The character encoding used to process the bulk data.
     */
    characterEncoding?: string;
    /**
     * The media type of the bulk data.
     */
    mediaType?: string;
    /**
     * The number of records found in the bulk data.  This may not match the number of \"observed entities\" once loaded since some records may be exact duplicates.
     */
    recordCount?: number;
    /**
     * The number of records provided that include a `RECORD_ID` value.
     */
    recordsWithRecordIdCount?: number;
    /**
     * The number of records provided that include a `DATA_SOURCE` value.
     */
    recordsWithDataSourceCount?: number;
    /**
     * The number of records provided that include a `ENTITY_TYPE` value.
     */
    recordsWithEntityTypeCount?: number;
    /**
     * The array of `SzDataSourceRecordAnalysis` elements providing statistics on the records by data source.
     */
    analysisByDataSource?: Array<SzDataSourceRecordAnalysis>;
    /**
     * The array of `SzEntityTypeRecordAnalysis` elements providing statistics on the records by entity type.
     */
    analysisByEntityType?: Array<SzEntityTypeRecordAnalysis>;
}