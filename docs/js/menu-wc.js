'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@senzing/rest-api-client-ng documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link" >ApiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ApiModule-f20dfb074f583873645c8ef6bf9e703b97f299a090334d41c7fcfe7ee8602ec0c0f45ec2f9deb519dc519d21ace7c319cb978c100009af32499268d0acddb470"' : 'data-bs-target="#xs-injectables-links-module-ApiModule-f20dfb074f583873645c8ef6bf9e703b97f299a090334d41c7fcfe7ee8602ec0c0f45ec2f9deb519dc519d21ace7c319cb978c100009af32499268d0acddb470"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ApiModule-f20dfb074f583873645c8ef6bf9e703b97f299a090334d41c7fcfe7ee8602ec0c0f45ec2f9deb519dc519d21ace7c319cb978c100009af32499268d0acddb470"' :
                                        'id="xs-injectables-links-module-ApiModule-f20dfb074f583873645c8ef6bf9e703b97f299a090334d41c7fcfe7ee8602ec0c0f45ec2f9deb519dc519d21ace7c319cb978c100009af32499268d0acddb470"' }>
                                        <li class="link">
                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BulkDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulkDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfigService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntityDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityDataService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EntityGraphService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntityGraphService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StatisticsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatisticsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Configuration.html" data-type="entity-link" >Configuration</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomHttpUrlEncodingCodec.html" data-type="entity-link" >CustomHttpUrlEncodingCodec</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BulkdataAnalyzeBody.html" data-type="entity-link" >BulkdataAnalyzeBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BulkdataLoadBody.html" data-type="entity-link" >BulkdataLoadBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BulkdataRecordsBody.html" data-type="entity-link" >BulkdataRecordsBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfigurationParameters.html" data-type="entity-link" >ConfigurationParameters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeSearchResponse.html" data-type="entity-link" >SzAttributeSearchResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeSearchResponseData.html" data-type="entity-link" >SzAttributeSearchResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeSearchResult.html" data-type="entity-link" >SzAttributeSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeType.html" data-type="entity-link" >SzAttributeType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeTypeResponse.html" data-type="entity-link" >SzAttributeTypeResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeTypeResponseData.html" data-type="entity-link" >SzAttributeTypeResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeTypesResponse.html" data-type="entity-link" >SzAttributeTypesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzAttributeTypesResponseData.html" data-type="entity-link" >SzAttributeTypesResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBaseBulkLoadResult.html" data-type="entity-link" >SzBaseBulkLoadResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBaseRelatedEntity.html" data-type="entity-link" >SzBaseRelatedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBaseResponse.html" data-type="entity-link" >SzBaseResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBulkDataAnalysis.html" data-type="entity-link" >SzBulkDataAnalysis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBulkDataAnalysisResponse.html" data-type="entity-link" >SzBulkDataAnalysisResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBulkLoadError.html" data-type="entity-link" >SzBulkLoadError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBulkLoadResponse.html" data-type="entity-link" >SzBulkLoadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzBulkLoadResult.html" data-type="entity-link" >SzBulkLoadResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzCandidateKey.html" data-type="entity-link" >SzCandidateKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzConfigResponse.html" data-type="entity-link" >SzConfigResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzCrossSourceSummary.html" data-type="entity-link" >SzCrossSourceSummary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzCrossSourceSummaryResponse.html" data-type="entity-link" >SzCrossSourceSummaryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSource.html" data-type="entity-link" >SzDataSource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSourceBulkLoadResult.html" data-type="entity-link" >SzDataSourceBulkLoadResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSourceRecordAnalysis.html" data-type="entity-link" >SzDataSourceRecordAnalysis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSourceRecordSummary.html" data-type="entity-link" >SzDataSourceRecordSummary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSourceResponse.html" data-type="entity-link" >SzDataSourceResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSourceResponseData.html" data-type="entity-link" >SzDataSourceResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSourcesResponse.html" data-type="entity-link" >SzDataSourcesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDataSourcesResponseData.html" data-type="entity-link" >SzDataSourcesResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDeleteRecordResponse.html" data-type="entity-link" >SzDeleteRecordResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDeleteRecordResponseData.html" data-type="entity-link" >SzDeleteRecordResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzDisclosedRelation.html" data-type="entity-link" >SzDisclosedRelation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntitiesPage.html" data-type="entity-link" >SzEntitiesPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntity.html" data-type="entity-link" >SzEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityData.html" data-type="entity-link" >SzEntityData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityFeature.html" data-type="entity-link" >SzEntityFeature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityFeatureDetail.html" data-type="entity-link" >SzEntityFeatureDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityFeatureStatistics.html" data-type="entity-link" >SzEntityFeatureStatistics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityNetworkData.html" data-type="entity-link" >SzEntityNetworkData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityNetworkResponse.html" data-type="entity-link" >SzEntityNetworkResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityPath.html" data-type="entity-link" >SzEntityPath</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityPathData.html" data-type="entity-link" >SzEntityPathData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityPathResponse.html" data-type="entity-link" >SzEntityPathResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityRecord.html" data-type="entity-link" >SzEntityRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityRelationsBreakdown.html" data-type="entity-link" >SzEntityRelationsBreakdown</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityRelationsBreakdownResponse.html" data-type="entity-link" >SzEntityRelationsBreakdownResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityRelationsCount.html" data-type="entity-link" >SzEntityRelationsCount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityRelationsCountResponse.html" data-type="entity-link" >SzEntityRelationsCountResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntityResponse.html" data-type="entity-link" >SzEntityResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntitySizeBreakdown.html" data-type="entity-link" >SzEntitySizeBreakdown</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntitySizeBreakdownResponse.html" data-type="entity-link" >SzEntitySizeBreakdownResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntitySizeCount.html" data-type="entity-link" >SzEntitySizeCount</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzEntitySizeCountResponse.html" data-type="entity-link" >SzEntitySizeCountResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzError.html" data-type="entity-link" >SzError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzErrorResponse.html" data-type="entity-link" >SzErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzFeatureReference.html" data-type="entity-link" >SzFeatureReference</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzFeatureScore.html" data-type="entity-link" >SzFeatureScore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzFlaggedEntity.html" data-type="entity-link" >SzFlaggedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzFlaggedRecord.html" data-type="entity-link" >SzFlaggedRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzFocusRecordId.html" data-type="entity-link" >SzFocusRecordId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzHowEntityResponse.html" data-type="entity-link" >SzHowEntityResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzHowEntityResult.html" data-type="entity-link" >SzHowEntityResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzHowMatchInfo.html" data-type="entity-link" >SzHowMatchInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLicenseInfo.html" data-type="entity-link" >SzLicenseInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLicenseResponse.html" data-type="entity-link" >SzLicenseResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLicenseResponseData.html" data-type="entity-link" >SzLicenseResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLinks.html" data-type="entity-link" >SzLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLoadedStats.html" data-type="entity-link" >SzLoadedStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLoadedStatsResponse.html" data-type="entity-link" >SzLoadedStatsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLoadRecordResponse.html" data-type="entity-link" >SzLoadRecordResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzLoadRecordResponseData.html" data-type="entity-link" >SzLoadRecordResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzMatchCounts.html" data-type="entity-link" >SzMatchCounts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzMatchCountsResponse.html" data-type="entity-link" >SzMatchCountsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzMatchCountsResponseData.html" data-type="entity-link" >SzMatchCountsResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzMatchedRecord.html" data-type="entity-link" >SzMatchedRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzMeta.html" data-type="entity-link" >SzMeta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzNameScoring.html" data-type="entity-link" >SzNameScoring</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzOpenApiSpecResponse.html" data-type="entity-link" >SzOpenApiSpecResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzPagedEntitiesResponse.html" data-type="entity-link" >SzPagedEntitiesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzPagedRelationsResponse.html" data-type="entity-link" >SzPagedRelationsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzQueueInfo.html" data-type="entity-link" >SzQueueInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzQueueInfoResponse.html" data-type="entity-link" >SzQueueInfoResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRecord.html" data-type="entity-link" >SzRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRecordId.html" data-type="entity-link" >SzRecordId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRecordResponse.html" data-type="entity-link" >SzRecordResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRecordResponseData.html" data-type="entity-link" >SzRecordResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzReevaluateResponse.html" data-type="entity-link" >SzReevaluateResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzReevaluateResponseData.html" data-type="entity-link" >SzReevaluateResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRelatedEntity.html" data-type="entity-link" >SzRelatedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRelatedFeatures.html" data-type="entity-link" >SzRelatedFeatures</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRelation.html" data-type="entity-link" >SzRelation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRelationCounts.html" data-type="entity-link" >SzRelationCounts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRelationCountsResponse.html" data-type="entity-link" >SzRelationCountsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRelationCountsResponseData.html" data-type="entity-link" >SzRelationCountsResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzRelationsPage.html" data-type="entity-link" >SzRelationsPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzResolutionInfo.html" data-type="entity-link" >SzResolutionInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzResolutionStep.html" data-type="entity-link" >SzResolutionStep</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzResolvedEntity.html" data-type="entity-link" >SzResolvedEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzResponseWithRawData.html" data-type="entity-link" >SzResponseWithRawData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzScoredFeature.html" data-type="entity-link" >SzScoredFeature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzScoringBehavior.html" data-type="entity-link" >SzScoringBehavior</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzSearchFeatureScore.html" data-type="entity-link" >SzSearchFeatureScore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzServerInfo.html" data-type="entity-link" >SzServerInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzServerInfoResponse.html" data-type="entity-link" >SzServerInfoResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzSourceLoadedStats.html" data-type="entity-link" >SzSourceLoadedStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzSourceLoadedStatsResponse.html" data-type="entity-link" >SzSourceLoadedStatsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzSourceSummary.html" data-type="entity-link" >SzSourceSummary</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzSourceSummaryResponse.html" data-type="entity-link" >SzSourceSummaryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzSummaryStats.html" data-type="entity-link" >SzSummaryStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzSummaryStatsResponse.html" data-type="entity-link" >SzSummaryStatsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzVersionInfo.html" data-type="entity-link" >SzVersionInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzVersionResponse.html" data-type="entity-link" >SzVersionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzVirtualEntity.html" data-type="entity-link" >SzVirtualEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzVirtualEntityData.html" data-type="entity-link" >SzVirtualEntityData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzVirtualEntityRecord.html" data-type="entity-link" >SzVirtualEntityRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzVirtualEntityResponse.html" data-type="entity-link" >SzVirtualEntityResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyEntitiesResponse.html" data-type="entity-link" >SzWhyEntitiesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyEntitiesResponseData.html" data-type="entity-link" >SzWhyEntitiesResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyEntitiesResult.html" data-type="entity-link" >SzWhyEntitiesResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyEntityResponse.html" data-type="entity-link" >SzWhyEntityResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyEntityResponseData.html" data-type="entity-link" >SzWhyEntityResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyEntityResult.html" data-type="entity-link" >SzWhyEntityResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyMatchInfo.html" data-type="entity-link" >SzWhyMatchInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyPerspective.html" data-type="entity-link" >SzWhyPerspective</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyRecordsResponse.html" data-type="entity-link" >SzWhyRecordsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyRecordsResponseData.html" data-type="entity-link" >SzWhyRecordsResponseData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SzWhyRecordsResult.html" data-type="entity-link" >SzWhyRecordsResult</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});