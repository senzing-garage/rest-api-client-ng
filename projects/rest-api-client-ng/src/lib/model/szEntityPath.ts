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
 * Describes a path between two entities using the entity IDs of the entities in the path.
 */
export interface SzEntityPath { 
    /**
     * The starting entity ID for the path.
     */
    startEntityId?: number;
    /**
     * The ending entity ID for the path.
     */
    endEntityId?: number;
    /**
     * The array of entity IDs identifying the entities on the path in order of how are they are connected on the path.  This is null if there is no path between the entities.
     */
    entityIDs?: Array<number>;
}