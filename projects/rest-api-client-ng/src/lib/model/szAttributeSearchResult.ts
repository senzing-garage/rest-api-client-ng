/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com). <br><br> <b>NOTE:</b> Some end-points described here will indicate \"(Supports SSE)\" to indicate that they support \"Server-sent Events\" via the `text/event-stream` media type.  This support is activated by adding the `Accept: text/event-stream` header to a request to override the default `application/json` media type.  Further, the end-point will behave the similarly to its stand operation but will produce `progress` events at regular intervals that are equivalent to its `200` response schema. Upon success, the final event will be `completed` with the same response schema as a `200` response.  Upon failure, the final event will be `failed` with same schema as the `4xx` or `5xx` response (typically the `SzErrorResponse`) [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 2.2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SzAttributeSearchResultType } from './szAttributeSearchResultType';
import { SzBaseRelatedEntity } from './szBaseRelatedEntity';
import { SzRelatedEntity } from './szRelatedEntity';
import { SzSearchFeatureScore } from './szSearchFeatureScore';

/**
 * Describes an entity that matched attribute search criteria and how it matched against that criteria.
 */
export interface SzAttributeSearchResult extends SzBaseRelatedEntity { 
    resultType?: SzAttributeSearchResultType;
    /**
     * The best name score between the search criteria and this matched search entity.  The higher the score the closer the name match.  This uses either the full name score or organization name score.  If none exist then this filed is omitted.
     */
    bestNameScore?: number;
    /**
     * The map of feature types to arrays of `SzSearchFeatureScore` instances for that feature type.
     */
    featureScores?: { [key: string]: Array<SzSearchFeatureScore>; };
    /**
     * The array of RelatedEntity instances describing the possible matches, discovered relationships, and disclosed relationships.
     */
    relatedEntities?: Array<SzRelatedEntity>;
}