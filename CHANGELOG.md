# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
[markdownlint](https://dlaa.me/markdownlint/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.1] - 2023-05-11

### Modified
- angular dependencies updated to 15.2.x
- dependency versions updated for security patches

## [6.0.0] - 2023-01-12

As of 6.0.0 release this package now requires `@angular@~15.0.0` to compile and run. There are no components in this package so _technically_ it would probably be compatible with earlier releases but it is not recommended and would **not** be officially supported.

Updating to angular 15 resolves major dependency compatibility issues so we can apply the latest security patches to the library.

For information updating your project from a previous angular version to `~15.0.0` see the [Angular Update Guide ](https://update.angular.io/)

models updated to [senzing-rest-api-spec@3.3.0](https://github.com/Senzing/senzing-rest-api-specification/releases/tag/3.3.0)
- Added methods and models to support "how entity" functionality
- Added enumeration options for detail levels and feature mode to allow for graph optimization.

### Added
- `SzFeatureReference` model
- `SzHowEntityResponse` model
- `SzHowEntityResult` model
- `SzHowMatchInfo` model
- `SzRecordIdentifier` model
- `SzRecordIdentifiers` model
- `SzResolutionStep` model
- `SzVirtualEntity` model
- `SzVirtualEntityData` model
- `SzVirtualEntityRecord` model
- `SzVirtualEntityResponse` model
- `BAREMINIMAL` added to `SzDetailLevel` to handle just returning the
  entity ID's without record information or relationship match info.
- `NETWORKMINIMAL` added to `SzDetailLevel` to behave the same as 
  `SzDetailLevel.BAREMINIMAL`, but with the addition of relationship match info in the case of related entities being included.
- `ENTITYNAMEONLY` added to `SzFeatureMode` to handle just retrieving the entity name without actually returning other features.
- `ATTRIBUTED` value for `SzFeatureMode` for pulling back feature references at the record level to indicate which records contributed which features.
- `featureReferences` property to `SzEntityRecord`
- the following methods added to `EntityDataService`
  - `getVirtualEntityByRecordIds` gets a virtual entity by simulating the resolution of the records identified by the specified record ID parameters. This operation simulates the resolution of the one or more specified records into a single entity and returns the simulated "virtual" entity.  The subject records are identified by data source code and record ID pairs.
  - `howEntityByEntityID` gets an analysis of how the entity for the respective entity ID resolved. This operation provides an anlysis of how the records in an entity resolved.  The subject entity is identified by the entity ID in the request path. 
  - `howEntityByRecordID` gets an analysis of how the entity for the record with the respective data source code and record ID resolved. This operation provides an anlysis of how the records in an entity resolved.  The subject entity is the one containing the record identified by the data source code and record ID in the request path. 

### Modified
- `SzMatchInfo` renamed to `SzWhyMatchInfo`
- Updated `GET /entity-paths` parameter(s)

### Removed

## [5.0.0] - 2022-08-11
A new parameter and enum has been added for finer control over the detail levels of entity response objects.  

### Added
- `SzDetailLevel` is a new enum that describes the level of detail desired for entity data when obtained via the various endpoints that return entity data. Details for features of entities as well as the related entities of entities are controlled by other flags.  Possible values are:
  - `MINIMAL` The entities returned will include at most their entity ID's as well as identifiers for their constituent records (i.e.: data source code and record ID for each record).  This detail level is optimized for the fastest possible processing time.   
  - `BRIEF` Builds upon `MINIMAL` to add the entity name and related entity match info when related entity match info when related entities are included.  This detail level aims to maintain as much speed as possible while providing names and relationship information for rendering a graph.   
  - `SUMMARY` Identical to `BRIEF` except that individual record identifier information is excluded, leaving only the record summary (i.e.: a record count by data source code).  This reduces the size of the JSON document for large entities with thousands of records.  It may take longer to process than `BRIEF` but less data is returned as well, speeding up network transfer times.
  - `VERBOSE` Combines `BRIEF` and `SUMMARY` and then adds the original JSON data for each record, the record-level matching info, as well as formatted record data.  NOTE: the record-level matching info returned via "how" and "why" is often more useful than that embedded in the entity.  Further, the formatted record data, while readable, is not formatted according to locale (i.e.: address, name and date formatting may not appear as expected to a user).

### Modified
- The call signature has been updated for `EntityDataService.getEntityByEntityId` from `entityId: number, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelated?: SzRelationshipMode, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `entityId: number, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelated?: SzRelationshipMode, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityDataService.getEntityByRecordId` from `dataSourceCode: string, recordId: string, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelated?: SzRelationshipMode, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `dataSourceCode: string, recordId: string, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelated?: SzRelationshipMode, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityDataService.searchEntitiesByGet` from `attrs?: string, attr?: Array<string>, includeOnly?: Array<SzAttributeSearchResultType>, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelationships?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `attrs?: string, attr?: Array<string>, includeOnly?: Array<SzAttributeSearchResultType>, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelationships?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityDataService.searchEntitiesByPost` from `body: { [key: string]: any; }, includeOnly?: Array<SzAttributeSearchResultType>, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelationships?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `body: { [key: string]: any; }, includeOnly?: Array<SzAttributeSearchResultType>, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRelationships?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityDataService.whyEntities` from `entity1: string, entity2: string, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `entity1: string, entity2: string, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityDataService.whyEntityByEntityID` from `entityId: number, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `entityId: number, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityDataService.whyEntityByRecordID` from `dataSourceCode: string, recordId: string, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `dataSourceCode: string, recordId: string, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityDataService.whyRecords` from `dataSource1: string, recordId1: string, dataSource2: string, recordId2: string, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `dataSource1: string, recordId1: string, dataSource2: string, recordId2: string, withRelationships?: boolean, withFeatureStats?: boolean, withInternalFeatures?: boolean, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityGraphService.findEntityNetwork` from `e?: Array<SzEntityIdentifier>, entities?: SzEntityIdentifiers, maxDegrees?: number, buildOut?: number, maxEntities?: number, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `e?: Array<SzEntityIdentifier>, entities?: SzEntityIdentifiers, maxDegrees?: number, buildOut?: number, maxEntities?: number, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`
- The call signature has been updated for `EntityGraphService.findEntityPath` from `from: SzEntityIdentifier, to: SzEntityIdentifier, maxDegrees?: number, x?: Array<SzEntityIdentifier>, avoidEntities?: SzEntityIdentifiers, forbidAvoided?: boolean, s?: Array<string>, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}` to `from: SzEntityIdentifier, to: SzEntityIdentifier, maxDegrees?: number, x?: Array<SzEntityIdentifier>, avoidEntities?: SzEntityIdentifiers, forbidAvoided?: boolean, s?: Array<string>, detailLevel?: SzDetailLevel, featureMode?: SzFeatureMode, withFeatureStats?: boolean, withInternalFeatures?: boolean, forceMinimal?: boolean, withRaw?: boolean, observe?: 'body', reportProgress?: boolean, additionalHeaders?: {[key: string]: string}`

## [4.0.2] - 2022-07-31

### Modified
Dependencies updated

## [4.0.1] - 2022-06-09

### Modified
Dependencies updated

## [4.0.0] - 2022-03-15

This update brings the models in line with the changes for the `3.0.0` release of the [senzing rest api server](https://github.com/Senzing/senzing-api-server)
and [rest api specification](https://github.com/Senzing/senzing-rest-api-specification/blob/caceres.version-3.0.0/senzing-rest-api.yaml).

### Modified
- `matchScore` removed from `SzBaseRelatedEntity`
- The `EntityData.getEntityByEntityId` method had the parameter `forceMinimal` moved from the 3rd position to the 5th position.

### Removed
- All models related to *Entity Types* and *Entity Classes* removed from the api have been removed from this package(see below)
  - `SzEntityClass`
  - `SzEntityClassDescriptor`
  - `SzEntityClassResponse`
  - `SzEntityClassResponseData`
  - `SzEntityClassesResponse`
  - `SzEntityClassesResponseData`
  - `SzEntityType`
  - `SzEntityTypeBulkLoadResult`
  - `SzEntityTypeDescriptor`
  - `SzEntityTypeRecordAnalysis`
  - `SzEntityTypeResponse`
  - `SzEntityTypeResponseData`
  - `SzEntityTypesResponse`
  - `SzEntityTypesResponseData`
- The following methods removed from `ConfigService`
  - `addEntityTypes`
  - `addEntityTypesForClass`
  - `getEntityClass`
  - `getEntityClasses`
  - `getEntityType`
  - `getEntityTypeByClass`
  - `getEntityTypes`
  - `getEntityTypesByClass`
- The following parameters removed from `BulkData.analyzeBulkRecordsForm`
  - `entityType`
  - `mapEntityTypes`
  - `mapEntityType`
  - `maxFailures`
- The following parameters removed from `BulkData.loadBulkRecordsForm`
  - `entityType`
  - `mapEntityTypes`
  - `mapEntityType`

## [3.0.0] - 2021-12-14

As of 3.0.0 release this package now requires `@angular@~13.0.0` to compile and run. There are no components in this package so _technically_ it would probably be compatible with earlier releases but it is not recommended and would **not** be officially supported.

Updating to angular 13 resolves major dependency compatibility issues so we can apply the latest security patches to the library.

For information updating your project from a previous angular version to `~13.0.0` see the [Angular Update Guide ](https://update.angular.io/)

## [2.4.0] - 2021-12-10

- removed:
    - IE11 support (via NG13)
- modified:
    - Framework updated to Angular 13 ([click here for full changelog](https://angular.io/guide/update-to-latest-version#changes-and-deprecations-in-version-13))
    - Build tooling to Angular 13
    - Dependencies updated to latest versions available

As of 2.4.0 release this package now requires `@angular@~13.0.0` to compile and run. There are no components in this package so _technically_ it would probably be compatible with earlier releases but it is not recommended and would **not** be officially supported.

Updating to angular 13 resolves major dependency compatibility issues so we can apply the latest security patches to the library.

For information updating your project from a previous angular version to `~13.0.0` see the [Angular Update Guide ](https://update.angular.io/)

relevant tickets #78

## [2.3.0] - 2021-7-31

- deleted:    
    - szBaseResponseLinks.ts
    - szBaseResponseMeta.ts
    - (DEPRECATED) szBulkDataLoadResponse.ts
    - body.ts
    - body1.ts
    - body2.ts
    - body3.ts
    - body4.ts
    - body5.ts

- added:
    - bulkdataAnalyzeBody.ts
    - bulkdataLoadBody.ts
    - bulkdataRecordsBody.ts
    - datasourcesBody.ts
    - datasourcesBody1.ts
    - entitytypesBody.ts
    - entitytypesBody1.ts
    - szDeleteRecordResponseData.ts
    - szDisclosedRelation.ts
    - szLinks.ts (replaces szBaseResponseLinks)
    - szMeta.ts (replaces szBaseResponseMeta)
    - szOpenApiSpecResponse.ts
    - szOpenApiSpecResponseOrRawJson.ts
    - szQueueInfo.ts
    - szQueueInfoResponse.ts
    - szRelatedFeatures.ts
    - szRelationDirection.ts
    - szWhyEntitiesResponse.ts
    - szWhyEntitiesResponseData.ts
    - szWhyEntitiesResult.ts

- SenzingBaseResponse:
    - `meta` changed from type `SzBaseResponseMeta` to `SzMeta`
    - `links` changed from type `SzBaseResponseLinks` to `SzLinks`
- SzEntityRecord:
    - added `lastSeenTimestamp` as Date
    - added `originalSourceData` as { [key: string]: any; }
- SzMatchInfo
    - added `disclosedRelations` as Array<SzDisclosedRelation>
- SzResolvedEntity
    - added `lastSeenTimestamp` as Date
- SzServerInfo
    - added `webSocketsMessageMaxSize` as number
    - added `infoQueueConfigured` as boolean
    - added `loadQueueConfigured` as boolean
- SzVersionInfo
    - added `nativeApiBuildVersion` as string
    - added `pocServerVersion` as string
    - added `pocApiVersion` as string
- AdminService
    - added `openApiSpecification` method
    - added `root` method
- BulkDataService
    - parameters maxFailures, and eofSendTimeout added to method `analyzeBulkRecords`
    - parameters maxFailures, and eofSendTimeout added to method `loadBulkRecords`
    - added `analyzeBulkRecordsForm` method
    - added `loadBulkRecordsForm` method
- EntityDataService
    - added `searchEntitiesByGet` method. existing behavior or passing search parameters in the url of api requests.
    - added `searchEntitiesByPost` method to allow not passing search parameters through url requests.
    - `searchByAttributes` refactored as alias of `searchEntitiesByGet` to prevent breaking change.

## [2.2.2] - 2021-06-09

- Dependency security updates and bugfixes. #67
- Added new `additionalHeaders` parameter to _*ALL*_ service methods. see issue #63
- New methods and property added to [Cofiguration class](http://hub.senzing.com/rest-api-client-ng/classes/Configuration.html) :
    - [additionalHeaders](http://hub.senzing.com/rest-api-client-ng/classes/Configuration.html#additionalHeaders)
    - [addAdditionalRequestHeader](http://hub.senzing.com/rest-api-client-ng/classes/Configuration.html#addAdditionalRequestHeader)
    - [removeAdditionalRequestHeader](http://hub.senzing.com/rest-api-client-ng/classes/Configuration.html#removeAdditionalRequestHeader)

relevant tickets: #63, #67

## [2.2.1] - 2021-04-08

- Dependency security updates and bugfixes.

## [2.2.0] - 2020-10-16

the models need to be updated to match the 2.2.0 specification release.
https://github.com/Senzing/senzing-rest-api-specification/releases/tag/2.2.0

- Added `SzNameScoring` to describe name scoring details
- Added `SzSearchFeatureScore` for search feature scores
- Modified `SzBaseRelatedEntity` to remove `fullNameScore` field since it has
not been populated since switch to version 2.0.0 of native Senzing SDK and
never made sense in the "base class" since only `SzAttributeSearchResult` had
this field populated under native Senzing SDK version 1.x.
- Added `bestNameScore` field to `SzAttributeSearchResult` to replace
`fullNameScore` in the place where the name score was previously
used with version 1.x of the native Senzing SDK (i.e.: to sort search results
based on the strength of the name match).
- Modified `SzAttributeSearchResult` to include the `featureScores` field to
provide feature scores without using "raw data"
- Added `nameScoringDetails` field to `SzFeatureScore` class to provide
`SzNameScoring` name scoring details on why operations,
- Updated `com.senzing.api.model.SzFeatureScore` to define its `score` field as 
the most sensible score value from the `nameScoringDetails` for `"NAME"`
features since the `FULL_SCORE` field is not available for names.
- Added the `NOT_SCORED` value for `SzScoringBucket` enum.

## [2.1.0] - 2020-9-20

Maintenance release for framework upgrade to Angular 10: see [https://blog.angular.io/version-10-of-angular-now-available-78960babd41](https://blog.angular.io/version-10-of-angular-now-available-78960babd41)

Major updates to most dependency versions have also been made which should improve file sizes, security, and stability.

The following Senzing projects have also been updated to operate on Angular 10,
see the following links for associated tickets:
- [sdk-components-ng/issues/143](https://github.com/Senzing/sdk-components-ng/issues/143)
- [rest-api-client-ng/issues/39](https://github.com/Senzing/rest-api-client-ng/issues/39)
- [sdk-graph-components/issues/37](https://github.com/Senzing/sdk-graph-components/issues/37)

## 2.0.1 - 2020-9-20

Minor updates to dependency versions. Security patches.


## 2.0.0 - 2020-07-06

### Added to 2.0.0

ConfigService.getDataSources
EntityDataService.reevaluateEntity
EntityDataService.reevaluateRecord
EntityDataService.whyEntityByEntityID
EntityDataService.whyEntityByRecordID
EntityDataService.whyRecords
EntityDataService.deleteRecord

### Removed in 2.0.0

ConfigService.addEntityClasses
ConfigService.getCurrentConfig
ConfigService.getDefaultConfig

### Refactored in 2.0.0

ConfigService.listDataSources: renamed to `ConfigService.getDataSources`
ConfigService.listEntityClasses: renamed to `ConfigService.getEntityClasses`
ConfigService.listEntityTypes: renamed to `ConfigService.getEntityTypes`
ConfigService.listEntityTypesByClass: renamed to `ConfigService.getEntityTypesByClass`

EntityDataService: `withRelated` arg type(s) globally changed from `string: 'NONE' | 'REPRESENTATIVE' | 'WITH_DUPLICATES'` to `SzRelationshipMode: NONE | PARTIAL | FULL as SzRelationshipMode`
EntityDataService.addRecord: `withInfo` and `withRaw` arguments added
EntityDataService.addRecordWithReturnedRecordId: `withInfo` and `withRaw` arguments added
EntityDataService.getDataSourceRecord: renamed to `EntityDataService.getRecord`
EntityDataService.getEntityByEntityId: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityDataService.getEntityByEntityId: `forceMinimal` argument added
EntityDataService.getEntityByEntityId: order of args changed from:
    `entityId, featureMode, forceMinimal, withFeatureStats, withDerivedFeatures, withRelated, withRaw, observe, reportProgress`
to:
    `entityId, featureMode, withFeatureStats, withInternalFeatures, forceMinimal, withRelated, withRaw, observe, reportProgress`
EntityDataService.searchByAttributes: order of args changed from:
    `attrs, attr, withRelationships, featureMode, withFeatureStats, withDerivedFeatures, forceMinimal, withRaw, observe, reportProgress`
to:
    `attrs, attr, featureMode, withFeatureStats, withInternalFeatures, forceMinimal, withRelationships, withRaw, observe, reportProgress`
EntityDataService.getEntityByRecordId: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityDataService.whyEntityByEntityID: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityDataService.whyEntityByRecordID: `withDerivedFeatures` renamed to `withInternalFeatures`

EntityGraphService.findNetworkByEntityID: renamed to `EntityGraphService.findEntityNetwork`
EntityGraphService.findPathByEntityID: renamed to `EntityGraphService.findEntityPath`
EntityGraphService.findEntityNetwork: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityGraphService.findEntityNetwork: "e" arg type changed from `Array<string|number>` to `Array<SzEntityIdentifier>` which is equal to `Array<number | SzRecordId | string>`
EntityGraphService.findEntityNetwork: "entities" arg type changed from `string` to `SzEntityIdentifiers` which is equal to `Array<number> | Array<SzRecordId | string>`
EntityGraphService.findEntityPath: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityGraphService.findEntityPath: `x` arg type changed from `SzEntityIdentifiers` to `Array<SzEntityIdentifier>` (superficial type change)
EntityGraphService.findEntityPath: `featureMode` arg type changed from `string` to `featureMode` (enum 'NONE' | 'REPRESENTATIVE' | 'WITHDUPLICATES')

## [1.0.2] - 2019-06-05

### Added to 1.0.2

- minor update to projects/rest-api-client-ng/src/lib/model/szEntityPath.ts to support Graph Components.
model was incorrect.
