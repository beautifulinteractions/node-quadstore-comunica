module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const __b16bnode115 = new (__webpack_require__(4292).LoggerVoid)({});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-init/Bus/Init'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-quad-pattern/Bus/RdfResolveQuadPattern'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-optimize-query-operation/Bus/OptimizeQueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-parse/Bus/SparqlParse'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-serialize/Bus/SparqlSerialize'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-context-preprocess/Bus/ContextPreprocess'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http-invalidate/Bus/HttpInvalidate'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join/Bus/RdfJoin'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation = new (__webpack_require__(1709).BusIndexed)({
  'actorIdentifierFields': [
    'operationName'
  ],
  'actionIdentifierFields': [
    'operation',
    'type'
  ],
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-operation/Bus/QueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_rdfjs_json_myRdfRdfJsSourceQuadPatternResolver = new (__webpack_require__(598).ActorRdfResolveQuadPatternRdfJsSource)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-rdfjs.json#myRdfRdfJsSourceQuadPatternResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorResolveQuadPattern',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_optimize_json_myJoinBgpOptimizer = new (__webpack_require__(5688).ActorOptimizeQueryOperationJoinBgp)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-optimize.json#myJoinBgpOptimizer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation = new (__webpack_require__(4437).MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorOptimizeQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlParse',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlSerialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const __b0bnode253 = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': '_:b0bnode253',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const __b1bnode253 = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypeFormats',
  'name': '_:b1bnode253',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess = new (__webpack_require__(4437).MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorContextPreprocess',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate = new (__webpack_require__(7930).MediatorAll)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorHttpInvalidate',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorRdfJoin',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorNestedLoop = new (__webpack_require__(3836).ActorRdfJoinNestedLoop)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinActorNestedLoop',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation = new (__webpack_require__(9114).MediatorNumber)({
  'field': 'httpRequests',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator = new (__webpack_require__(3833).ActorQueryOperationBgpEmpty)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myEmptyBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator = new (__webpack_require__(963).ActorQueryOperationValues)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myValuesQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator = new (__webpack_require__(8010).ActorQueryOperationQuadpattern)({
  'mediatorResolveQuadPattern': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myQuadPatternQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinMultiActor = new (__webpack_require__(6474).ActorRdfJoinMultiSmallest)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinMultiActor',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const urn_comunica_sparqlinit = new (__webpack_require__(6875).ActorInitSparql)({
  'mediatorOptimizeQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'mediatorSparqlParse': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse,
  'mediatorSparqlSerialize': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize,
  'mediatorSparqlSerializeMediaTypeCombiner': __b0bnode253,
  'mediatorSparqlSerializeMediaTypeFormatCombiner': __b1bnode253,
  'mediatorContextPreprocess': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess,
  'mediatorHttpInvalidate': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate,
  'logger': __b16bnode115,
  'contextKeyShortcuts': {
    'source': '@comunica/bus-rdf-resolve-quad-pattern:source',
    'sources': '@comunica/bus-rdf-resolve-quad-pattern:sources',
    'initialBindings': '@comunica/actor-init-sparql:initialBindings',
    'queryFormat': '@comunica/actor-init-sparql:queryFormat',
    'baseIRI': '@comunica/actor-init-sparql:baseIRI',
    'log': '@comunica/core:log',
    'datetime': '@comunica/actor-http-memento:datetime',
    'queryTimestamp': '@comunica/actor-init-sparql:queryTimestamp',
    'httpProxyHandler': '@comunica/actor-http-proxy:httpProxyHandler',
    'lenient': '@comunica/actor-init-sparql:lenient',
    'httpIncludeCredentials': '@comunica/bus-http:include-credentials',
    'httpAuth': '@comunica/bus-http:auth'
  },
  'name': 'urn:comunica:sparqlinit',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator = new (__webpack_require__(540).ActorQueryOperationPathAlt)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myAltPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator = new (__webpack_require__(9986).ActorQueryOperationPathInv)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myInvPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator = new (__webpack_require__(7667).ActorQueryOperationPathLink)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myLinkPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator = new (__webpack_require__(8030).ActorQueryOperationPathNps)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myNpsPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator = new (__webpack_require__(1828).ActorQueryOperationPathOneOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myOneOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator = new (__webpack_require__(2687).ActorQueryOperationPathSeq)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#mySeqPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator = new (__webpack_require__(5665).ActorQueryOperationPathZeroOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator = new (__webpack_require__(7521).ActorQueryOperationPathZeroOrOne)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrOnePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator = new (__webpack_require__(1009).ActorQueryOperationAsk)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myAskQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator = new (__webpack_require__(2885).ActorQueryOperationService)({
  'forceSparqlEndpoint': false,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myServiceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator = new (__webpack_require__(2299).ActorQueryOperationSlice)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySliceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator = new (__webpack_require__(8640).ActorQueryOperationBgpSingle)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySingleBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator = new (__webpack_require__(9844).ActorQueryOperationBgpLeftDeepSmallest)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftDeepSmallestBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator = new (__webpack_require__(1825).ActorQueryOperationConstruct)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myConstructQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator = new (__webpack_require__(4111).ActorQueryOperationDescribeSubject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDescribeQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator = new (__webpack_require__(836).ActorQueryOperationDistinctHash)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDistinctQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator = new (__webpack_require__(776).ActorQueryOperationExtend)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myExtendQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator = new (__webpack_require__(6790).ActorQueryOperationReducedHash)({
  'cacheSize': 100,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myReducedQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator = new (__webpack_require__(9190).ActorQueryOperationFilterSparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFilterQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator = new (__webpack_require__(8642).ActorQueryOperationFromQuad)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFromQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator = new (__webpack_require__(8834).ActorQueryOperationGroup)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myGroupQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator = new (__webpack_require__(1318).ActorQueryOperationJoin)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator = new (__webpack_require__(1021).ActorQueryOperationLeftJoinLeftDeep)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator = new (__webpack_require__(1293).ActorQueryOperationOrderBySparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myOrderByQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator = new (__webpack_require__(651).ActorQueryOperationProject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myProjectQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator = new (__webpack_require__(5766).ActorQueryOperationUnion)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myUnionQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator = new (__webpack_require__(5609).ActorQueryOperationMinus)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myMinusQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const urn_comunica_my = ({
  'busInit': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init,
  'actors': [
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_rdfjs_json_myRdfRdfJsSourceQuadPatternResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_optimize_json_myJoinBgpOptimizer,
    urn_comunica_sparqlinit,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinMultiActor,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorNestedLoop,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator
  ]
});
module.exports = urn_comunica_sparqlinit;



/***/ }),

/***/ 6010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.newEngine = () => {
  return __webpack_require__(2830);
};


/***/ }),

/***/ 3828:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(601), exports);
__exportStar(__webpack_require__(1514), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 601:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractBindingsHash = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
/**
 * A comunica Hash Query Operation Actor.
 */
class AbstractBindingsHash extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args, operator) {
        super(args, operator);
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: pattern.input, context }));
        const bindingsStream = output.bindingsStream.filter(this.newHashFilter());
        return {
            type: 'bindings',
            bindingsStream,
            metadata: output.metadata,
            variables: output.variables,
            canContainUndefs: output.canContainUndefs,
        };
    }
}
exports.AbstractBindingsHash = AbstractBindingsHash;
//# sourceMappingURL=AbstractBindingsHash.js.map

/***/ }),

/***/ 1514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractFilterHash = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const hash_js_1 = __webpack_require__(3715);
const rdf_string_1 = __webpack_require__(2086);
/**
 * A comunica Hash Query Operation Actor.
 */
class AbstractFilterHash extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args, operator) {
        super(args, operator);
    }
    /**
     * Create a string-based hash of the given object.
     * @param bindings The bindings to hash.
     * @return {string} The object's hash.
     */
    static hash(bindings) {
        return hash_js_1.sha1()
            .update(__webpack_require__(5456)(bindings.map(x => rdf_string_1.termToString(x))))
            .digest('hex');
    }
}
exports.AbstractFilterHash = AbstractFilterHash;
//# sourceMappingURL=AbstractFilterHash.js.map

/***/ }),

/***/ 2318:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6527), exports);
__exportStar(__webpack_require__(1775), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6527:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorAbstractMediaTyped = void 0;
const core_1 = __webpack_require__(1709);
/**
 * An abstract actor that handles media-typed actions.
 *
 * It splits up a action between a 'handle' and a 'mediaTypes' action.
 * A 'mediaTypes' action is used to retrieve the available media types from this actor.
 * A 'handle' action is abstract, and can be implemented to do anything,
 * such as parsing, serializing, etc.
 * @see IActionAbstractMediaTyped
 *
 * @see ActorAbstractMediaTypedFixed
 */
class ActorAbstractMediaTyped extends core_1.Actor {
    constructor(args) {
        super(args);
    }
    async run(action) {
        if ('handle' in action) {
            const typedAction = action;
            return { handle: await this.runHandle(typedAction.handle, typedAction.handleMediaType, action.context) };
        }
        if ('mediaTypes' in action) {
            return { mediaTypes: await this.getMediaTypes(action.context) };
        }
        if ('mediaTypeFormats' in action) {
            return { mediaTypeFormats: await this.getMediaTypeFormats(action.context) };
        }
        throw new Error('Either a handle, mediaTypes or mediaTypeFormats action needs to be provided');
    }
    async test(action) {
        if ('handle' in action) {
            const typedAction = action;
            return { handle: await this.testHandle(typedAction.handle, typedAction.handleMediaType, action.context) };
        }
        if ('mediaTypes' in action) {
            return { mediaTypes: await this.testMediaType(action.context) };
        }
        if ('mediaTypeFormats' in action) {
            return { mediaTypeFormats: await this.testMediaTypeFormats(action.context) };
        }
        throw new Error('Either a handle, mediaTypes or mediaTypeFormats action needs to be provided');
    }
}
exports.ActorAbstractMediaTyped = ActorAbstractMediaTyped;
//# sourceMappingURL=ActorAbstractMediaTyped.js.map

/***/ }),

/***/ 1775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorAbstractMediaTypedFixed = void 0;
const ActorAbstractMediaTyped_1 = __webpack_require__(6527);
class ActorAbstractMediaTypedFixed extends ActorAbstractMediaTyped_1.ActorAbstractMediaTyped {
    constructor(args) {
        super(args);
        const scale = this.priorityScale || this.priorityScale === 0 ? this.priorityScale : 1;
        if (this.mediaTypes) {
            Object.entries(this.mediaTypes).forEach(([key, value], index) => {
                this.mediaTypes[key] = scale * value;
            });
        }
        this.mediaTypes = Object.freeze(this.mediaTypes);
        this.mediaTypeFormats = Object.freeze(this.mediaTypeFormats);
    }
    async testHandle(action, mediaType, context) {
        if (!(mediaType in this.mediaTypes)) {
            throw new Error(`Unrecognized media type: ${mediaType}`);
        }
        return await this.testHandleChecked(action, context);
    }
    async testMediaType(context) {
        return true;
    }
    async getMediaTypes(context) {
        return this.mediaTypes;
    }
    async testMediaTypeFormats(context) {
        return true;
    }
    async getMediaTypeFormats(context) {
        return this.mediaTypeFormats;
    }
}
exports.ActorAbstractMediaTypedFixed = ActorAbstractMediaTypedFixed;
//# sourceMappingURL=ActorAbstractMediaTypedFixed.js.map

/***/ }),

/***/ 9400:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8248), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorAbstractPath = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const core_1 = __webpack_require__(1709);
const asynciterator_1 = __webpack_require__(7400);
const rdf_data_factory_1 = __webpack_require__(3623);
const rdf_string_1 = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
const DF = new rdf_data_factory_1.DataFactory();
/**
 * An abstract actor that handles Path operations.
 *
 * Provides multiple helper functions used by the Path operation actors.
 */
class ActorAbstractPath extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args, predicateType) {
        super(args, 'path');
        this.predicateType = predicateType;
    }
    async testOperation(pattern, context) {
        if (pattern.predicate.type !== this.predicateType) {
            throw new Error(`This Actor only supports ${this.predicateType} Path operations.`);
        }
        return true;
    }
    // Generates a variable that does not yet occur in the path
    generateVariable(path, name) {
        if (!name) {
            return this.generateVariable(path, 'b');
        }
        // Path predicates can't contain variables
        if (path && (path.subject.value === name || path.object.value === name)) {
            return this.generateVariable(path, `${name}b`);
        }
        return DF.variable(name);
    }
    // Such connectivity matching does not introduce duplicates (it does not incorporate any count of the number
    // of ways the connection can be made) even if the repeated path itself would otherwise result in duplicates.
    // https://www.w3.org/TR/sparql11-query/#propertypaths
    async isPathArbitraryLengthDistinct(context, path) {
        if (!context || !context.get(ActorAbstractPath.isPathArbitraryLengthDistinctKey)) {
            context = context ?
                context.set(ActorAbstractPath.isPathArbitraryLengthDistinctKey, true) :
                core_1.ActionContext({ [ActorAbstractPath.isPathArbitraryLengthDistinctKey]: true });
            return { context,
                operation: bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({
                    operation: ActorAbstractPath.FACTORY.createDistinct(path),
                    context,
                })) };
        }
        context = context.set(ActorAbstractPath.isPathArbitraryLengthDistinctKey, false);
        return { context, operation: undefined };
    }
    async predicateStarGraphVariable(subject, object, predicate, graph, context) {
        // Construct path to obtain all graphs where subject exists
        const predVar = this.generateVariable(ActorAbstractPath.FACTORY.createPath(subject, predicate, object, graph));
        const findGraphs = ActorAbstractPath.FACTORY.createUnion(ActorAbstractPath.FACTORY.createPattern(subject, predVar, object, graph), ActorAbstractPath.FACTORY.createPattern(object, predVar, subject, graph));
        const results = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ context, operation: findGraphs }));
        const objectString = rdf_string_1.termToString(object);
        const passedGraphs = new Set();
        return new asynciterator_1.MultiTransformIterator(results.bindingsStream, {
            multiTransform: (bindings) => {
                // Extract the graph and start a predicate* search starting from subject in each graph
                const graphValue = bindings.get(rdf_string_1.termToString(graph));
                if (passedGraphs.has(rdf_string_1.termToString(graphValue))) {
                    return new asynciterator_1.EmptyIterator();
                }
                passedGraphs.add(rdf_string_1.termToString(graphValue));
                return new asynciterator_1.TransformIterator(async () => {
                    const it = new asynciterator_1.BufferedIterator();
                    await this.getObjectsPredicateStar(subject, predicate, graphValue, context, {}, it, { count: 0 });
                    return it.transform({
                        transform(item, next, push) {
                            push(bus_query_operation_1.Bindings({ [objectString]: item, [rdf_string_1.termToString(graph)]: graphValue }));
                            next();
                        },
                    });
                }, { maxBufferSize: 128 });
            },
            autoStart: false,
        });
    }
    /**
       * Returns an iterator with Bindings of the query subject predicate* ?o
       * If graph is a variable, it will also be in those bindings
       * @param {Term} subject Term of where we start the predicate* search.
       * @param {Variable} object Variable of the zeroOrMore-query.
       * @param {Term} objectVal
       * @param {Algebra.PropertyPathSymbol} predicate Predicate of the *-path.
       * @param {Term} graph The graph in which we search for the pattern. (Possibly a variable)
       * @param {ActionContext} context
       * @return {Promise<AsyncIterator<Bindings>} Iterator to where all bindings of query should have been pushed.
       */
    async getObjectsPredicateStarEval(subject, object, predicate, graph, context) {
        if (graph.termType === 'Variable') {
            return this.predicateStarGraphVariable(subject, object, predicate, graph, context);
        }
        const it = new asynciterator_1.BufferedIterator();
        await this.getObjectsPredicateStar(subject, predicate, graph, context, {}, it, { count: 0 });
        return it.transform({
            transform(item, next, push) {
                push(bus_query_operation_1.Bindings({ [rdf_string_1.termToString(object)]: item }));
                next();
            },
        });
    }
    /**
       * Pushes all terms to iterator `it` that are a solution of object predicate* ?o.
       * @param {Term} object Term of where we start the predicate* search.
       * @param {Algebra.PropertyPathSymbol} predicate Predicate of the *-path.
       * @param {Term} graph The graph in which we search for the pattern.
       * @param {ActionContext} context
       * @param {{[id: string]: Term}} termHashes Remembers the objects we've already searched for.
       * @param {BufferedIterator<Term>} it Iterator to push terms to.
       * @param {any} counter Counts how many searches are in progress to close it when needed (when counter == 0).
       * @return {Promise<void>} All solutions of query should have been pushed to it by then.
       */
    async getObjectsPredicateStar(object, predicate, graph, context, termHashes, it, counter) {
        const termString = rdf_string_1.termToString(object);
        if (termHashes[termString]) {
            return;
        }
        it._push(object);
        termHashes[termString] = object;
        counter.count++;
        const thisVariable = this.generateVariable();
        const vString = rdf_string_1.termToString(thisVariable);
        const path = ActorAbstractPath.FACTORY.createPath(object, predicate, thisVariable, graph);
        const results = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: path, context }));
        results.bindingsStream.on('data', async (bindings) => {
            const result = bindings.get(vString);
            await this.getObjectsPredicateStar(result, predicate, graph, context, termHashes, it, counter);
        });
        results.bindingsStream.on('end', () => {
            if (--counter.count === 0) {
                it.close();
            }
        });
    }
    /**
       * Pushes all terms to iterator `it` that are a solution of ?s predicate* ?o.
       * @param {string} subjectString String representation of subjectVariable
       * @param {string} objectString String representation of objectVariable
       * @param {Term} subjectVal Term of where we start the predicate* search.
       * @param {Term} objectVal Found solution for an object, start for the new step.
       * @param {Algebra.PropertyPathSymbol} predicate Predicate of the *-path.
       * @param {Term} graph The graph in which we search for the pattern.
       * @param {ActionContext} context
       * @param {{[id: string]: Promise<Term[]>}} termHashesGlobal
       * Remembers solutions for when objectVal is already been calculated, can be reused when same objectVal occurs
       * @param {{[id: string]: Term}} termHashesCurrentSubject
       * Remembers the pairs we've already searched for, can stop searching if so.
       * @param {BufferedIterator<Bindings>} it Iterator to push terms to.
       * @param {any} counter Counts how many searches are in progress to close it when needed (when counter == 0).
       * @return {Promise<void>} All solutions of query should have been pushed to it by then.
       */
    // Let the iterator `it` emit all bindings of size 2, with subjectStringVariable as value subjectVal
    // and objectStringVariable as value all nodes reachable through predicate* beginning at objectVal
    async getSubjectAndObjectBindingsPredicateStar(subjectString, objectString, subjectVal, objectVal, predicate, graph, context, termHashesGlobal, termHashesCurrentSubject, it, counter) {
        const termString = rdf_string_1.termToString(objectVal) + rdf_string_1.termToString(graph);
        // If this combination of subject and object already done, return nothing
        if (termHashesCurrentSubject[termString]) {
            return;
        }
        counter.count++;
        termHashesCurrentSubject[termString] = true;
        it._push(bus_query_operation_1.Bindings({ [subjectString]: subjectVal, [objectString]: objectVal }));
        // If every reachable node from object has already been calculated, use these for current subject too
        if (termString in termHashesGlobal) {
            const objects = await termHashesGlobal[termString];
            for (const object of objects) {
                await this.getSubjectAndObjectBindingsPredicateStar(subjectString, objectString, subjectVal, object, predicate, graph, context, termHashesGlobal, termHashesCurrentSubject, it, counter);
            }
            if (--counter.count === 0) {
                it.close();
            }
            return;
        }
        // Construct promise to calculate all reachable nodes from this object
        const promise = new Promise(async (resolve, reject) => {
            const objectsArray = [];
            // Construct path that leads us one step through predicate
            const thisVariable = this.generateVariable();
            const vString = rdf_string_1.termToString(thisVariable);
            const path = ActorAbstractPath.FACTORY.createPath(objectVal, predicate, thisVariable, graph);
            const results = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: path, context }));
            // Recursive call on all neighbours
            results.bindingsStream.on('data', async (bindings) => {
                const result = bindings.get(vString);
                objectsArray.push(result);
                await this.getSubjectAndObjectBindingsPredicateStar(subjectString, objectString, subjectVal, result, predicate, graph, context, termHashesGlobal, termHashesCurrentSubject, it, counter);
            });
            results.bindingsStream.on('error', reject);
            results.bindingsStream.on('end', () => {
                if (--counter.count === 0) {
                    it.close();
                }
                resolve(objectsArray);
            });
        });
        // Set it in the termHashesGlobal when this object occurs again they can wait for this promise
        termHashesGlobal[termString] = promise;
    }
}
exports.ActorAbstractPath = ActorAbstractPath;
ActorAbstractPath.FACTORY = new sparqlalgebrajs_1.Factory();
ActorAbstractPath.isPathArbitraryLengthDistinctKey = 'isPathArbitraryLengthDistinct';
//# sourceMappingURL=ActorAbstractPath.js.map

/***/ }),

/***/ 697:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7862), exports);
__exportStar(__webpack_require__(8329), exports);
__exportStar(__webpack_require__(1270), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KEY_CONTEXT_HTTPPROXYHANDLER = exports.ActorHttpProxy = void 0;
const bus_http_1 = __webpack_require__(4864);
/**
 * A comunica Proxy Http Actor.
 */
class ActorHttpProxy extends bus_http_1.ActorHttp {
    constructor(args) {
        super(args);
    }
    async test(action) {
        if (!action.context) {
            throw new Error(`Actor ${this.name} could not find a context.`);
        }
        const proxyHandler = action.context.get(exports.KEY_CONTEXT_HTTPPROXYHANDLER);
        if (!proxyHandler) {
            throw new Error(`Actor ${this.name} could not find a proxy handler in the context.`);
        }
        if (!await proxyHandler.getProxy(action)) {
            throw new Error(`Actor ${this.name} could not determine a proxy for the given request.`);
        }
        return { time: Infinity };
    }
    async run(action) {
        var _a;
        const requestedUrl = typeof action.input === 'string' ? action.input : action.input.url;
        if (!action.context) {
            throw new Error('Illegal state: missing context');
        }
        const proxyHandler = action.context.get(exports.KEY_CONTEXT_HTTPPROXYHANDLER);
        // Send a request for the modified request
        const output = await this.mediatorHttp.mediate(Object.assign(Object.assign({}, await proxyHandler.getProxy(action)), { context: action.context.delete(exports.KEY_CONTEXT_HTTPPROXYHANDLER) }));
        // Modify the response URL
        output.url = (_a = output.headers.get('x-final-url')) !== null && _a !== void 0 ? _a : requestedUrl;
        return output;
    }
}
exports.ActorHttpProxy = ActorHttpProxy;
exports.KEY_CONTEXT_HTTPPROXYHANDLER = '@comunica/actor-http-proxy:httpProxyHandler';
//# sourceMappingURL=ActorHttpProxy.js.map

/***/ }),

/***/ 8329:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IProxyHandler.js.map

/***/ }),

/***/ 1270:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProxyHandlerStatic = void 0;
/**
 * A proxy handler that prefixes all URLs with a given string.
 */
class ProxyHandlerStatic {
    constructor(prefixUrl) {
        this.prefixUrl = prefixUrl;
    }
    async getProxy(request) {
        return {
            init: request.init,
            input: this.modifyInput(request.input),
        };
    }
    modifyInput(input) {
        if (typeof input === 'string') {
            return this.prefixUrl + input;
        }
        return new Request(this.prefixUrl + input.url, input);
    }
}
exports.ProxyHandlerStatic = ProxyHandlerStatic;
//# sourceMappingURL=ProxyHandlerStatic.js.map

/***/ }),

/***/ 488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const __b16bnode136 = new (__webpack_require__(4292).LoggerVoid)({});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-init/Bus/Init'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http/Bus/Http'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-parse/Bus/RdfParse'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-dereference/Bus/RdfDereference'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-join/Bus/RdfJoin'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-parse-html/Bus/RdfParseHtml'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-serialize/Bus/RdfSerialize'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-quad-pattern/Bus/RdfResolveQuadPattern'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_Bus_RdfMetadata = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-metadata/Bus/RdfMetadata'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-metadata-extract/Bus/RdfMetadataExtract'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_Bus_RdfResolveHypermedia = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-hypermedia/Bus/RdfResolveHypermedia'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_Bus_RdfResolveHypermediaLinks = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-rdf-resolve-hypermedia-links/Bus/RdfResolveHypermediaLinks'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-http-invalidate/Bus/HttpInvalidate'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-parse/Bus/SparqlParse'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-optimize-query-operation/Bus/OptimizeQueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-sparql-serialize/Bus/SparqlSerialize'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess = new (__webpack_require__(1709).Bus)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-context-preprocess/Bus/ContextPreprocess'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation = new (__webpack_require__(1709).BusIndexed)({
  'actorIdentifierFields': [
    'operationName'
  ],
  'actionIdentifierFields': [
    'operation',
    'type'
  ],
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/bus-query-operation/Bus/QueryOperation'
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp = new (__webpack_require__(9114).MediatorNumber)({
  'field': 'time',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/http.json#mediatorHttp',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_myHttpFetcher = new (__webpack_require__(3938).ActorHttpNative)({
  'agentOptions': '{ \"keepAlive\": true, \"maxSockets\": 5 }',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/http.json#myHttpFetcher',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_sparql_serialize_stats_Actor_SparqlSerialize_Stats_httpObserver_default = new (__webpack_require__(3938).ActionObserverHttp)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-sparql-serialize-stats/Actor/SparqlSerialize/Stats/httpObserver/default',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseMediatypes = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-dereference.json#mediatorRdfParseMediatypes',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseHandle = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-dereference.json#mediatorRdfParseHandle',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserN3 = new (__webpack_require__(3938).ActorRdfParseN3)({
  'mediaTypes': {
    'application/n-quads': '1.0',
    'application/trig': '0.95',
    'application/n-triples': '0.8',
    'text/turtle': '0.6',
    'text/n3': '0.35'
  },
  'mediaTypeFormats': {
    'application/n-quads': 'http://www.w3.org/ns/formats/N-Quads',
    'application/trig': 'http://www.w3.org/ns/formats/TriG',
    'application/n-triples': 'http://www.w3.org/ns/formats/N-Triples',
    'text/turtle': 'http://www.w3.org/ns/formats/Turtle',
    'text/n3': 'http://www.w3.org/ns/formats/N3'
  },
  'priorityScale': '1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserN3',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserRdfXml = new (__webpack_require__(3938).ActorRdfParseRdfXml)({
  'mediaTypes': {
    'application/rdf+xml': '1.0'
  },
  'mediaTypeFormats': {
    'application/rdf+xml': 'http://www.w3.org/ns/formats/RDF_XML'
  },
  'priorityScale': '5.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserRdfXml',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserXmlRdfa = new (__webpack_require__(3938).ActorRdfParseXmlRdfa)({
  'mediaTypes': {
    'application/xml': '1.0',
    'text/xml': '1.0',
    'image/svg+xml': '1.0'
  },
  'mediaTypeFormats': {
    'application/xml': 'http://www.w3.org/ns/formats/RDFa',
    'text/xml': 'http://www.w3.org/ns/formats/RDFa',
    'image/svg+xml': 'http://www.w3.org/ns/formats/RDFa'
  },
  'priorityScale': '3.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserXmlRdfa',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseMediatypes = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#mediatorRdfParseMediatypes',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseHandle = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#mediatorRdfParseHandle',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorRdfDereference = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#mediatorRdfDereference',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorRdfJoin',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorSymmetricHash = new (__webpack_require__(3938).ActorRdfJoinSymmetricHash)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinActorSymmetricHash',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorNestedLoop = new (__webpack_require__(3836).ActorRdfJoinNestedLoop)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinActorNestedLoop',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtml = new (__webpack_require__(3938).ActorRdfParseHtml)({
  'busRdfParseHtml': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml,
  'mediaTypes': {
    'text/html': '1.0',
    'application/xhtml+xml': '0.9'
  },
  'mediaTypeFormats': {
    'text/html': 'http://www.w3.org/ns/formats/HTML',
    'application/xhtml+xml': 'http://www.w3.org/ns/formats/HTML'
  },
  'priorityScale': '2.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserHtml',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlMicrodata = new (__webpack_require__(6328).ActorRdfParseHtmlMicrodata)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserHtmlMicrodata',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlRdfa = new (__webpack_require__(3938).ActorRdfParseHtmlRdfa)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserHtmlRdfa',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializerN3 = new (__webpack_require__(3938).ActorRdfSerializeN3)({
  'mediaTypes': {
    'application/trig': '1.0',
    'application/n-quads': '0.7',
    'text/turtle': '0.6',
    'application/n-triples': '0.3',
    'text/n3': '0.2'
  },
  'mediaTypeFormats': {
    'application/trig': 'http://www.w3.org/ns/formats/TriG',
    'application/n-quads': 'http://www.w3.org/ns/formats/N-Quads',
    'text/turtle': 'http://www.w3.org/ns/formats/Turtle',
    'application/n-triples': 'http://www.w3.org/ns/formats/N-Triples',
    'text/n3': 'http://www.w3.org/ns/formats/N3'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-serializers.json#myRdfSerializerN3',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializeJsonLd = new (__webpack_require__(7489).ActorRdfSerializeJsonLd)({
  'jsonStringifyIndentSpaces': 2,
  'mediaTypes': {
    'application/ld+json': '1.0'
  },
  'mediaTypeFormats': {
    'application/ld+json': 'http://www.w3.org/ns/formats/JSON-LD'
  },
  'priorityScale': '9.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-serializers.json#myRdfSerializeJsonLd',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mediatorRdfSerialize = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mediatorRdfSerialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const __b0bnode322 = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': '_:b0bnode322',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const __b1bnode322 = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypeFormats',
  'name': '_:b1bnode322',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_serialize_Bus_RdfSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorResolveQuadPattern',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_rdfjs_json_myRdfRdfJsSourceQuadPatternResolver = new (__webpack_require__(598).ActorRdfResolveQuadPatternRdfJsSource)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-rdfjs.json#myRdfRdfJsSourceQuadPatternResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadata = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#mediatorMetadata',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_Bus_RdfMetadata
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataPrimaryTopic = new (__webpack_require__(3938).ActorRdfMetadataPrimaryTopic)({
  'metadataToData': false,
  'dataToMetadataOnInvalidMetadataGraph': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataPrimaryTopic',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_Bus_RdfMetadata
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataAll = new (__webpack_require__(3938).ActorRdfMetadataAll)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataAll',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_Bus_RdfMetadata
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadataExtract = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'metadata',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#mediatorMetadataExtract',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraControls = new (__webpack_require__(3938).ActorRdfMetadataExtractHydraControls)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataExtractHydraControls',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraCount = new (__webpack_require__(3938).ActorRdfMetadataExtractHydraCount)({
  'predicates': [
    'http://www.w3.org/ns/hydra/core#totalItems',
    'http://rdfs.org/ns/void#triples'
  ],
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myRdfMetadataExtractHydraCount',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_sparql_json_myRdfMetadataExtractSparqlService = new (__webpack_require__(3938).ActorRdfMetadataExtractSparqlService)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-sparql.json#myRdfMetadataExtractSparqlService',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_metadata_extract_Bus_RdfMetadataExtract
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaNoneResolver = new (__webpack_require__(3938).ActorRdfResolveHypermediaNone)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myHypermediaNoneResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_Bus_RdfResolveHypermedia
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorRdfResolveHypermedia = new (__webpack_require__(9114).MediatorNumber)({
  'field': 'filterFactor',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMax',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#mediatorRdfResolveHypermedia',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_Bus_RdfResolveHypermedia
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorRdfResolveHypermediaLinks = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#mediatorRdfResolveHypermediaLinks',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_Bus_RdfResolveHypermediaLinks
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaLinksNext = new (__webpack_require__(4187).ActorRdfResolveHypermediaLinksNext)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myHypermediaLinksNext',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_links_Bus_RdfResolveHypermediaLinks
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_rdf_resolve_quad_pattern_hypermedia_Actor_RdfResolveQuadPattern_Hypermedia_httpInvalidator_default = new (__webpack_require__(7941).ActorHttpInvalidateListenable)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-rdf-resolve-quad-pattern-hypermedia/Actor/RdfResolveQuadPattern/Hypermedia/httpInvalidator#default',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate = new (__webpack_require__(7930).MediatorAll)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorHttpInvalidate',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_invalidate_Bus_HttpInvalidate
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_graphql_parsers_json_myGraphqlParser = new (__webpack_require__(3938).ActorSparqlParseGraphql)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/graphql-parsers.json#myGraphqlParser',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlParse',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_parsers_json_mySparqlParser = new (__webpack_require__(6051).ActorSparqlParseAlgebra)({
  'prefixes': {
    'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
    'owl': 'http://www.w3.org/2002/07/owl#',
    'xsd': 'http://www.w3.org/2001/XMLSchema#',
    'dc': 'http://purl.org/dc/terms/',
    'dcterms': 'http://purl.org/dc/terms/',
    'dc11': 'http://purl.org/dc/elements/1.1/',
    'foaf': 'http://xmlns.com/foaf/0.1/',
    'geo': 'http://www.w3.org/2003/01/geo/wgs84_pos#',
    'dbpedia': 'http://dbpedia.org/resource/',
    'dbpedia-owl': 'http://dbpedia.org/ontology/',
    'dbpprop': 'http://dbpedia.org/property/',
    'schema': 'http://schema.org/',
    'skos': 'http://www.w3.org/2008/05/skos#'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-parsers.json#mySparqlParser',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_parse_Bus_SparqlParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation = new (__webpack_require__(4437).MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorOptimizeQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_optimize_json_myJoinBgpOptimizer = new (__webpack_require__(5688).ActorOptimizeQueryOperationJoinBgp)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-optimize.json#myJoinBgpOptimizer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_optimize_query_operation_Bus_OptimizeQueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize = new (__webpack_require__(6277).MediatorRace)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorSparqlSerialize',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const __b0bnode316 = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypes',
  'name': '_:b0bnode316',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const __b1bnode316 = new (__webpack_require__(6479).MediatorCombineUnion)({
  'field': 'mediaTypeFormats',
  'name': '_:b1bnode316',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myJsonSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeJson)({
  'mediaTypes': {
    'application/json': '1.0'
  },
  'mediaTypeFormats': {
    'application/json': 'https://comunica.linkeddatafragments.org/#results_JSON'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myJsonSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySimpleSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeSimple)({
  'mediaTypes': {
    'simple': '0.9'
  },
  'mediaTypeFormats': {
    'simple': 'https://comunica.linkeddatafragments.org/#results_simple'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySimpleSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlCsvSparqlSerializer = new (__webpack_require__(1965).ActorSparqlSerializeSparqlCsv)({
  'mediaTypes': {
    'text/csv': '0.75'
  },
  'mediaTypeFormats': {
    'text/csv': 'http://www.w3.org/ns/formats/SPARQL_Results_CSV'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySparqlCsvSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlJsonSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeSparqlJson)({
  'mediaTypes': {
    'application/sparql-results+json': '0.8'
  },
  'mediaTypeFormats': {
    'application/sparql-results+json': 'http://www.w3.org/ns/formats/SPARQL_Results_JSON'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySparqlJsonSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlTsvSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeSparqlTsv)({
  'mediaTypes': {
    'text/tab-separated-values': '0.75'
  },
  'mediaTypeFormats': {
    'text/tab-separated-values': 'http://www.w3.org/ns/formats/SPARQL_Results_TSV'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySparqlTsvSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlXmlSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeSparqlXml)({
  'mediaTypes': {
    'application/sparql-results+xml': '0.8'
  },
  'mediaTypeFormats': {
    'application/sparql-results+xml': 'http://www.w3.org/ns/formats/SPARQL_Results_XML'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#mySparqlXmlSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTableSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeTable)({
  'columnWidth': 50,
  'mediaTypes': {
    'table': '0.6'
  },
  'mediaTypeFormats': {
    'table': 'https://comunica.linkeddatafragments.org/#results_table'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myTableSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTreeSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeTree)({
  'mediaTypes': {
    'tree': '0.5'
  },
  'mediaTypeFormats': {
    'tree': 'https://comunica.linkeddatafragments.org/#results_tree'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myTreeSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess = new (__webpack_require__(4437).MediatorCombinePipeline)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-init.json#mediatorContextPreprocess',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_context_preprocess_Bus_ContextPreprocess
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation = new (__webpack_require__(9114).MediatorNumber)({
  'field': 'httpRequests',
  'type': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/Mediator/Number/type/TypeMin',
  'ignoreErrors': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mediatorQueryOperation',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator = new (__webpack_require__(3833).ActorQueryOperationBgpEmpty)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myEmptyBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator = new (__webpack_require__(963).ActorQueryOperationValues)({
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myValuesQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_memento_json_myHttpFetcher = new (__webpack_require__(3938).ActorHttpMemento)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/http-memento.json#myHttpFetcher',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserJsonLd = new (__webpack_require__(3938).ActorRdfParseJsonLd)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp,
  'mediaTypes': {
    'application/ld+json': '1.0',
    'application/json': '0.5'
  },
  'mediaTypeFormats': {
    'application/ld+json': 'http://www.w3.org/ns/formats/JSON-LD',
    'application/json': 'http://www.w3.org/ns/formats/JSON-LD'
  },
  'priorityScale': '9.0E-1',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserJsonLd',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_Bus_RdfParse
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_sparql_json_mySparqlQuadPatternResolver = new (__webpack_require__(3938).ActorRdfResolveHypermediaSparql)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp,
  'checkUrlSuffix': true,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-sparql.json#mySparqlQuadPatternResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_Bus_RdfResolveHypermedia
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_sparql_json_mySparqlEndpointResolver = new (__webpack_require__(3938).ActorQueryOperationSparqlEndpoint)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-sparql.json#mySparqlEndpointResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myStatsSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeStats)({
  'httpObserver': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_sparql_serialize_stats_Actor_SparqlSerialize_Stats_httpObserver_default,
  'mediaTypes': {
    'stats': '0.5'
  },
  'mediaTypeFormats': {
    'stats': 'https://comunica.linkeddatafragments.org/#results_stats'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myStatsSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_dereference_json_myRdfDereferencer = new (__webpack_require__(3938).ActorRdfDereferenceHttpParse)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp,
  'mediatorRdfParseMediatypes': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseMediatypes,
  'mediatorRdfParseHandle': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_dereference_json_mediatorRdfParseHandle,
  'maxAcceptHeaderLength': 1024,
  'maxAcceptHeaderLengthBrowser': 128,
  'mediaMappings': {
    'ttl': 'text/turtle',
    'turtle': 'text/turtle',
    'nt': 'application/n-triples',
    'ntriples': 'application/n-triples',
    'nq': 'application/n-quads',
    'nquads': 'application/n-quads',
    'rdf': 'application/rdf+xml',
    'rdfxml': 'application/rdf+xml',
    'owl': 'application/rdf+xml',
    'n3': 'text/n3',
    'trig': 'application/trig',
    'jsonld': 'application/ld+json',
    'json': 'application/json',
    'html': 'text/html',
    'htm': 'text/html',
    'xhtml': 'application/xhtml+xml',
    'xht': 'application/xhtml+xml',
    'xml': 'application/xml',
    'svg': 'image/svg+xml',
    'svgz': 'image/svg+xml'
  },
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-dereference.json#myRdfDereferencer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_dereference_Bus_RdfDereference
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlScript = new (__webpack_require__(3938).ActorRdfParseHtmlScript)({
  'mediatorRdfParseMediatypes': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseMediatypes,
  'mediatorRdfParseHandle': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_mediatorRdfParseHandle,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/rdf-parsers.json#myRdfParserHtmlScript',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_parse_html_Bus_RdfParseHtml
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinMultiActor = new (__webpack_require__(6474).ActorRdfJoinMultiSmallest)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/join.json#myRdfJoinMultiActor',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_join_Bus_RdfJoin
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myRdfSparqlSerializer = new (__webpack_require__(3938).ActorSparqlSerializeRdf)({
  'mediatorRdfSerialize': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mediatorRdfSerialize,
  'mediatorMediaTypeCombiner': __b0bnode322,
  'mediatorMediaTypeFormatCombiner': __b1bnode322,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-serializers.json#myRdfSparqlSerializer',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_sparql_serialize_Bus_SparqlSerialize
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_federated_json_myFederatedQuadPatternResolver = new (__webpack_require__(3938).ActorRdfResolveQuadPatternFederated)({
  'mediatorResolveQuadPattern': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern,
  'skipEmptyPatterns': false,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-federated.json#myFederatedQuadPatternResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator = new (__webpack_require__(8010).ActorQueryOperationQuadpattern)({
  'mediatorResolveQuadPattern': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorResolveQuadPattern,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myQuadPatternQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaQpfResolver = new (__webpack_require__(3938).ActorRdfResolveHypermediaQpf)({
  'mediatorMetadata': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadata,
  'mediatorMetadataExtract': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadataExtract,
  'mediatorRdfDereference': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorRdfDereference,
  'subjectUri': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject',
  'predicateUri': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate',
  'objectUri': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#object',
  'graphUri': 'http://www.w3.org/ns/sparql-service-description#graph',
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myHypermediaQpfResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_hypermedia_Bus_RdfResolveHypermedia
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myQuadPatternHypermediaResolver = new (__webpack_require__(3938).ActorRdfResolveQuadPatternHypermedia)({
  'mediatorRdfDereference': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorRdfDereference,
  'mediatorMetadata': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadata,
  'mediatorMetadataExtract': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorMetadataExtract,
  'mediatorRdfResolveHypermedia': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorRdfResolveHypermedia,
  'mediatorRdfResolveHypermediaLinks': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_mediatorRdfResolveHypermediaLinks,
  'cacheSize': 100,
  'httpInvalidator': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_rdf_resolve_quad_pattern_hypermedia_Actor_RdfResolveQuadPattern_Hypermedia_httpInvalidator_default,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/resolve-hypermedia.json#myQuadPatternHypermediaResolver',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_rdf_resolve_quad_pattern_Bus_RdfResolveQuadPattern
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_myHttpProxy = new (__webpack_require__(697).ActorHttpProxy)({
  'mediatorHttp': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_mediatorHttp,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/http.json#myHttpProxy',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_http_Bus_Http,
  'beforeActors': [
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_myHttpFetcher
  ]
});
const urn_comunica_sparqlinit = new (__webpack_require__(6875).ActorInitSparql)({
  'mediatorOptimizeQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorOptimizeQueryOperation,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'mediatorSparqlParse': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlParse,
  'mediatorSparqlSerialize': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorSparqlSerialize,
  'mediatorSparqlSerializeMediaTypeCombiner': __b0bnode316,
  'mediatorSparqlSerializeMediaTypeFormatCombiner': __b1bnode316,
  'mediatorContextPreprocess': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorContextPreprocess,
  'mediatorHttpInvalidate': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_init_json_mediatorHttpInvalidate,
  'logger': __b16bnode136,
  'contextKeyShortcuts': {
    'source': '@comunica/bus-rdf-resolve-quad-pattern:source',
    'sources': '@comunica/bus-rdf-resolve-quad-pattern:sources',
    'initialBindings': '@comunica/actor-init-sparql:initialBindings',
    'queryFormat': '@comunica/actor-init-sparql:queryFormat',
    'baseIRI': '@comunica/actor-init-sparql:baseIRI',
    'log': '@comunica/core:log',
    'datetime': '@comunica/actor-http-memento:datetime',
    'queryTimestamp': '@comunica/actor-init-sparql:queryTimestamp',
    'httpProxyHandler': '@comunica/actor-http-proxy:httpProxyHandler',
    'lenient': '@comunica/actor-init-sparql:lenient',
    'httpIncludeCredentials': '@comunica/bus-http:include-credentials',
    'httpAuth': '@comunica/bus-http:auth'
  },
  'name': 'urn:comunica:sparqlinit',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator = new (__webpack_require__(540).ActorQueryOperationPathAlt)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myAltPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator = new (__webpack_require__(9986).ActorQueryOperationPathInv)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myInvPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator = new (__webpack_require__(7667).ActorQueryOperationPathLink)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myLinkPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator = new (__webpack_require__(8030).ActorQueryOperationPathNps)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myNpsPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator = new (__webpack_require__(1828).ActorQueryOperationPathOneOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myOneOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator = new (__webpack_require__(2687).ActorQueryOperationPathSeq)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#mySeqPathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator = new (__webpack_require__(5665).ActorQueryOperationPathZeroOrMore)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrMorePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator = new (__webpack_require__(7521).ActorQueryOperationPathZeroOrOne)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperator-path.json#myZeroOrOnePathOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator = new (__webpack_require__(1009).ActorQueryOperationAsk)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myAskQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator = new (__webpack_require__(2885).ActorQueryOperationService)({
  'forceSparqlEndpoint': false,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myServiceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator = new (__webpack_require__(2299).ActorQueryOperationSlice)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySliceQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator = new (__webpack_require__(8640).ActorQueryOperationBgpSingle)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#mySingleBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator = new (__webpack_require__(9844).ActorQueryOperationBgpLeftDeepSmallest)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftDeepSmallestBgpQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator = new (__webpack_require__(1825).ActorQueryOperationConstruct)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myConstructQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator = new (__webpack_require__(4111).ActorQueryOperationDescribeSubject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDescribeQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator = new (__webpack_require__(836).ActorQueryOperationDistinctHash)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myDistinctQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator = new (__webpack_require__(776).ActorQueryOperationExtend)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myExtendQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator = new (__webpack_require__(6790).ActorQueryOperationReducedHash)({
  'cacheSize': 100,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myReducedQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator = new (__webpack_require__(9190).ActorQueryOperationFilterSparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFilterQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator = new (__webpack_require__(8642).ActorQueryOperationFromQuad)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myFromQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator = new (__webpack_require__(8834).ActorQueryOperationGroup)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myGroupQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator = new (__webpack_require__(1318).ActorQueryOperationJoin)({
  'mediatorJoin': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorRdfJoin,
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator = new (__webpack_require__(1021).ActorQueryOperationLeftJoinLeftDeep)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myLeftJoinQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator = new (__webpack_require__(1293).ActorQueryOperationOrderBySparqlee)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myOrderByQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator = new (__webpack_require__(651).ActorQueryOperationProject)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myProjectQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator = new (__webpack_require__(5766).ActorQueryOperationUnion)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myUnionQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator = new (__webpack_require__(5609).ActorQueryOperationMinus)({
  'mediatorQueryOperation': https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mediatorQueryOperation,
  'name': 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-init-sparql/^1.0.0/config/sets/sparql-queryoperators.json#myMinusQueryOperator',
  'bus': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_query_operation_Bus_QueryOperation
});
const urn_comunica_my = ({
  'busInit': https___linkedsoftwaredependencies_org_bundles_npm__comunica_bus_init_Bus_Init,
  'actors': [
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_myHttpProxy,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_json_myHttpFetcher,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_http_memento_json_myHttpFetcher,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_dereference_json_myRdfDereferencer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinMultiActor,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorSymmetricHash,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_join_json_myRdfJoinActorNestedLoop,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserN3,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserJsonLd,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserRdfXml,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserXmlRdfa,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtml,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlMicrodata,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlRdfa,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_parsers_json_myRdfParserHtmlScript,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializerN3,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_rdf_serializers_json_myRdfSerializeJsonLd,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_federated_json_myFederatedQuadPatternResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_rdfjs_json_myRdfRdfJsSourceQuadPatternResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaQpfResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaNoneResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myQuadPatternHypermediaResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myHypermediaLinksNext,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataPrimaryTopic,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataAll,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraControls,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_hypermedia_json_myRdfMetadataExtractHydraCount,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_sparql_json_mySparqlQuadPatternResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_sparql_json_myRdfMetadataExtractSparqlService,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_resolve_sparql_json_mySparqlEndpointResolver,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_graphql_parsers_json_myGraphqlParser,
    urn_comunica_sparqlinit,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_parsers_json_mySparqlParser,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_optimize_json_myJoinBgpOptimizer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myAltPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myInvPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myLinkPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myNpsPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myOneOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_mySeqPathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrMorePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperator_path_json_myZeroOrOnePathOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myJsonSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myRdfSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySimpleSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlCsvSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlJsonSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlTsvSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_mySparqlXmlSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myStatsSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTableSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_serializers_json_myTreeSparqlSerializer,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myAskQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myServiceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySliceQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myEmptyBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_mySingleBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftDeepSmallestBgpQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myConstructQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDescribeQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myDistinctQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myExtendQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myReducedQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFilterQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myFromQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myGroupQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myLeftJoinQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myOrderByQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myProjectQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myUnionQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myMinusQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myValuesQueryOperator,
    https___linkedsoftwaredependencies_org_bundles_npm__comunica_actor_init_sparql__1_0_0_config_sets_sparql_queryoperators_json_myQuadPatternQueryOperator
  ]
});
module.exports = urn_comunica_sparqlinit;



/***/ }),

/***/ 6875:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.evaluateQuery = exports.newEngine = exports.bindingsStreamToGraphQl = void 0;
/* eslint-disable unicorn/filename-case */
__exportStar(__webpack_require__(7345), exports);
var actor_sparql_serialize_tree_1 = __webpack_require__(3938);
Object.defineProperty(exports, "bindingsStreamToGraphQl", ({ enumerable: true, get: function () { return actor_sparql_serialize_tree_1.bindingsStreamToGraphQl; } }));
/**
 * Create a new comunica engine from the default config.
 * @return {ActorInitSparql} A comunica engine.
 */
function newEngine() {
    return __webpack_require__(488);
}
exports.newEngine = newEngine;
// TODO: remove in 2.0.0, this is just here for backwards-compatibility
function evaluateQuery(query, context) {
    return newEngine().query(query, context);
}
exports.evaluateQuery = evaluateQuery;
//# sourceMappingURL=index-browser.js.map

/***/ }),

/***/ 7345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KEY_CONTEXT_LENIENT = exports.KEY_CONTEXT_GRAPHQL_SINGULARIZEVARIABLES = exports.KEY_CONTEXT_QUERYFORMAT = exports.KEY_CONTEXT_INITIALBINDINGS = exports.ActorInitSparql = void 0;
const bus_init_1 = __webpack_require__(8147);
const bus_query_operation_1 = __webpack_require__(7213);
const bus_rdf_resolve_quad_pattern_1 = __webpack_require__(8575);
const core_1 = __webpack_require__(1709);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A browser-safe comunica SPARQL Init Actor.
 */
class ActorInitSparql extends bus_init_1.ActorInit {
    constructor(args) {
        super(args);
    }
    /**
     * Add convenience methods to query results
     * @param {IActorQueryOperationOutput} results Basic query results.
     * @return {IQueryResult} Same query results with added fields.
     */
    static enhanceQueryResults(results) {
        // Set bindings
        if (results.bindingsStream) {
            results.bindings = () => new Promise((resolve, reject) => {
                const result = [];
                results.bindingsStream.on('data', data => {
                    result.push(data);
                });
                results.bindingsStream.on('end', () => {
                    resolve(result);
                });
                results.bindingsStream.on('error', reject);
            });
        }
        else if (results.quadStream) {
            results.quads = () => new Promise((resolve, reject) => {
                const result = [];
                results.quadStream.on('data', data => {
                    result.push(data);
                });
                results.quadStream.on('end', () => {
                    resolve(result);
                });
                results.quadStream.on('error', reject);
            });
        }
        return results;
    }
    async test(action) {
        return true;
    }
    /**
     * Evaluate the given query
     * @param {string | Algebra.Operation} query A query string or algebra.
     * @param context An optional query context.
     * @return {Promise<IActorQueryOperationOutput>} A promise that resolves to the query output.
     */
    async query(query, context) {
        context = context || {};
        // Expand shortcuts
        for (const key in context) {
            if (this.contextKeyShortcuts[key]) {
                const existingEntry = context[key];
                context[this.contextKeyShortcuts[key]] = existingEntry;
                delete context[key];
            }
        }
        // Set the default logger if none is provided
        if (!context[core_1.KEY_CONTEXT_LOG]) {
            context[core_1.KEY_CONTEXT_LOG] = this.logger;
        }
        if (!context[bus_query_operation_1.KEY_CONTEXT_QUERY_TIMESTAMP]) {
            context[bus_query_operation_1.KEY_CONTEXT_QUERY_TIMESTAMP] = new Date();
        }
        // Ensure sources are an async re-iterable
        if (Array.isArray(context[bus_rdf_resolve_quad_pattern_1.KEY_CONTEXT_SOURCES])) {
            // TODO: backwards compatibility
            context[bus_rdf_resolve_quad_pattern_1.KEY_CONTEXT_SOURCES].forEach((source) => {
                if (!bus_rdf_resolve_quad_pattern_1.isDataSourceRawType(source) && (source.type === 'auto' || source.type === 'hypermedia')) {
                    delete source.type;
                }
            });
        }
        // Prepare context
        context = core_1.ActionContext(context);
        let queryFormat = 'sparql';
        if (context && context.has(exports.KEY_CONTEXT_QUERYFORMAT)) {
            queryFormat = context.get(exports.KEY_CONTEXT_QUERYFORMAT);
            context = context.delete(exports.KEY_CONTEXT_QUERYFORMAT);
            if (queryFormat === 'graphql' && !context.has(exports.KEY_CONTEXT_GRAPHQL_SINGULARIZEVARIABLES)) {
                context = context.set(exports.KEY_CONTEXT_GRAPHQL_SINGULARIZEVARIABLES, {});
            }
        }
        let baseIRI;
        if (context && context.has(bus_query_operation_1.KEY_CONTEXT_BASEIRI)) {
            baseIRI = context.get(bus_query_operation_1.KEY_CONTEXT_BASEIRI);
        }
        // Pre-processing the context
        context = (await this.mediatorContextPreprocess.mediate({ context })).context;
        // Parse query
        let operation;
        if (typeof query === 'string') {
            const queryParseOutput = await this.mediatorSparqlParse.mediate({ context, query, queryFormat, baseIRI });
            operation = queryParseOutput.operation;
            // Update the baseIRI in the context if the query modified it.
            if (queryParseOutput.baseIRI) {
                context = context.set(bus_query_operation_1.KEY_CONTEXT_BASEIRI, queryParseOutput.baseIRI);
            }
        }
        else {
            operation = query;
        }
        // Apply initial bindings in context
        if (context.has(exports.KEY_CONTEXT_INITIALBINDINGS)) {
            const bindings = context.get(exports.KEY_CONTEXT_INITIALBINDINGS);
            operation = bus_query_operation_1.materializeOperation(operation, bus_query_operation_1.ensureBindings(bindings));
        }
        // Optimize the query operation
        operation = (await this.mediatorOptimizeQueryOperation.mediate({ context, operation })).operation;
        // Execute query
        const resolve = { context, operation };
        let output = await this.mediatorQueryOperation.mediate(resolve);
        output = ActorInitSparql.enhanceQueryResults(output);
        output.context = context;
        return output;
    }
    /**
     * @param context An optional context.
     * @return {Promise<{[p: string]: number}>} All available SPARQL (weighted) result media types.
     */
    async getResultMediaTypes(context) {
        return (await this.mediatorSparqlSerializeMediaTypeCombiner.mediate({ context, mediaTypes: true })).mediaTypes;
    }
    /**
     * @param context An optional context.
     * @return {Promise<{[p: string]: number}>} All available SPARQL result media type formats.
     */
    async getResultMediaTypeFormats(context) {
        return (await this.mediatorSparqlSerializeMediaTypeFormatCombiner.mediate({ context, mediaTypeFormats: true }))
            .mediaTypeFormats;
    }
    /**
     * Convert a query result to a string stream based on a certain media type.
     * @param {IActorQueryOperationOutput} queryResult A query result.
     * @param {string} mediaType A media type.
     * @param {ActionContext} context An optional context.
     * @return {Promise<IActorSparqlSerializeOutput>} A text stream.
     */
    async resultToString(queryResult, mediaType, context) {
        context = core_1.ActionContext(context);
        if (!mediaType) {
            switch (queryResult.type) {
                case 'bindings':
                    mediaType = 'application/json';
                    break;
                case 'quads':
                    mediaType = 'application/trig';
                    break;
                default:
                    mediaType = 'simple';
                    break;
            }
        }
        const handle = queryResult;
        handle.context = context;
        return (await this.mediatorSparqlSerialize.mediate({ context, handle, handleMediaType: mediaType })).handle;
    }
    /**
     * Invalidate all internal caches related to the given page URL.
     * If no page URL is given, then all pages will be invalidated.
     * @param {string} url The page URL to invalidate.
     * @return {Promise<any>} A promise resolving when the caches have been invalidated.
     */
    invalidateHttpCache(url) {
        return this.mediatorHttpInvalidate.mediate({ url });
    }
    async run(action) {
        throw new Error('ActorInitSparql#run is not supported in the browser.');
    }
}
exports.ActorInitSparql = ActorInitSparql;
ActorInitSparql.ALGEBRA_TYPES = Object.keys(sparqlalgebrajs_1.Algebra.types)
    .reduce((acc, key) => {
    acc[sparqlalgebrajs_1.Algebra.types[key]] = true;
    return acc;
}, {});
exports.KEY_CONTEXT_INITIALBINDINGS = '@comunica/actor-init-sparql:initialBindings';
exports.KEY_CONTEXT_QUERYFORMAT = '@comunica/actor-init-sparql:queryFormat';
exports.KEY_CONTEXT_GRAPHQL_SINGULARIZEVARIABLES = '@comunica/actor-init-sparql:singularizeVariables';
exports.KEY_CONTEXT_LENIENT = '@comunica/actor-init-sparql:lenient';
//# sourceMappingURL=ActorInitSparql-browser.js.map

/***/ }),

/***/ 5688:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(387), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorOptimizeQueryOperationJoinBgp = void 0;
const bus_optimize_query_operation_1 = __webpack_require__(9557);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Join BGP Optimize Query Operation Actor.
 */
class ActorOptimizeQueryOperationJoinBgp extends bus_optimize_query_operation_1.ActorOptimizeQueryOperation {
    constructor(args) {
        super(args);
    }
    async test(action) {
        return true;
    }
    async run(action) {
        const operation = sparqlalgebrajs_1.Util.mapOperation(action.operation, {
            join(op, factory) {
                if (op.left.type === 'bgp' && op.right.type === 'bgp') {
                    return {
                        recurse: false,
                        result: factory.createBgp(op.left.patterns.concat(op.right.patterns)),
                    };
                }
                return {
                    recurse: false,
                    result: op,
                };
            },
        });
        return { operation };
    }
}
exports.ActorOptimizeQueryOperationJoinBgp = ActorOptimizeQueryOperationJoinBgp;
//# sourceMappingURL=ActorOptimizeQueryOperationJoinBgp.js.map

/***/ }),

/***/ 1009:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2642), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationAsk = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
/**
 * A comunica Ask Query Operation Actor.
 */
class ActorQueryOperationAsk extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'ask');
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        // Call other query operations like this:
        const output = await this.mediatorQueryOperation.mediate({ operation: pattern.input, context });
        const bindings = bus_query_operation_1.ActorQueryOperation.getSafeBindings(output);
        const booleanResult = new Promise((resolve, reject) => {
            // Resolve to true if we find one element, and close immediately
            bindings.bindingsStream.once('data', () => {
                resolve(true);
                bindings.bindingsStream.close();
            });
            // If we reach the end of the stream without finding anything, resolve to false
            bindings.bindingsStream.on('end', () => resolve(false));
            // Reject if an error occurs in the stream
            bindings.bindingsStream.on('error', reject);
        });
        return { type: 'boolean', booleanResult };
    }
}
exports.ActorQueryOperationAsk = ActorQueryOperationAsk;
//# sourceMappingURL=ActorQueryOperationAsk.js.map

/***/ }),

/***/ 3833:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1325), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1325:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationBgpEmpty = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
const rdf_terms_1 = __webpack_require__(1234);
/**
 * A comunica Query Operation Actor for empty BGPs.
 */
class ActorQueryOperationBgpEmpty extends bus_query_operation_1.ActorQueryOperationTyped {
    constructor(args) {
        super(args, 'bgp');
    }
    /**
     * Get all variables in the given patterns.
     * No duplicates are returned.
     * @param {Algebra.Pattern} patterns Quad patterns.
     * @return {string[]} The variables in this pattern, with '?' prefix.
     */
    static getVariables(patterns) {
        return rdf_terms_1.uniqTerms(patterns
            .map(pattern => rdf_terms_1.getTerms(pattern)
            .filter(term => term.termType === 'Variable'))
            .reduce((acc, val) => acc.concat(val), []))
            .map(x => rdf_string_1.termToString(x));
    }
    async testOperation(pattern, context) {
        if (pattern.patterns.length > 0) {
            throw new Error(`Actor ${this.name} can only operate on empty BGPs.`);
        }
        return true;
    }
    async runOperation(pattern, context) {
        return {
            bindingsStream: new asynciterator_1.SingletonIterator(bus_query_operation_1.Bindings({})),
            metadata: () => Promise.resolve({ totalItems: 1 }),
            type: 'bindings',
            variables: ActorQueryOperationBgpEmpty.getVariables(pattern.patterns),
            canContainUndefs: false,
        };
    }
}
exports.ActorQueryOperationBgpEmpty = ActorQueryOperationBgpEmpty;
//# sourceMappingURL=ActorQueryOperationBgpEmpty.js.map

/***/ }),

/***/ 9844:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8737), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationBgpLeftDeepSmallest = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
const rdf_terms_1 = __webpack_require__(1234);
/**
 * A comunica Query Operation Actor that resolves BGPs in a left-deep manner
 * based on the pattern with the smallest item count.
 */
class ActorQueryOperationBgpLeftDeepSmallest extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'bgp');
    }
    /**
     * Create a new bindings stream
     * that takes every binding of the base stream,
     * materializes the remaining patterns with it,
     * and emits all bindings from this new set of patterns.
     * @param {BindingsStream} baseStream The base stream.
     * @param {Algebra.Pattern[]} patterns The patterns to materialize with each binding of the base stream.
     * @param {{ pattern: Algebra.Pattern, bindings: IPatternBindings }[]) => Promise<IActorQueryOperationOutput>}
     *    patternBinder A callback
     * to retrieve the bindings stream of an array of patterns.
     * @return {BindingsStream}
     */
    static createLeftDeepStream(baseStream, patterns, patternBinder) {
        return new asynciterator_1.MultiTransformIterator(baseStream, {
            autoStart: false,
            multiTransform(bindings) {
                const bindingsMerger = (subBindings) => subBindings.merge(bindings);
                return new asynciterator_1.TransformIterator(async () => (await patternBinder(ActorQueryOperationBgpLeftDeepSmallest.materializePatterns(patterns, bindings))).transform({ map: bindingsMerger }), { maxBufferSize: 128 });
            },
        });
    }
    /**
     * Get the combined list of variables of the given pattern outputs.
     * @param {IActorQueryOperationOutput[]} patternOutputs An array of query operation outputs
     * @return {string[]} The array of variable names.
     */
    static getCombinedVariables(patternOutputs) {
        const withDuplicates = [].concat.apply([], patternOutputs.map(patternOutput => patternOutput.variables));
        return [...new Set(withDuplicates)];
    }
    /**
     * Find the pattern index with the smallest number of elements.
     * @param {{[p: string]: any}[]} metadatas An array of optional metadata objects for the patterns.
     * @return {number} The index of the pattern with the smallest number of elements.
     */
    static getSmallestPatternId(metadatas) {
        let smallestId = -1;
        let smallestCount = Infinity;
        for (const [i, meta] of metadatas.entries()) {
            const count = ActorQueryOperationBgpLeftDeepSmallest.getTotalItems(meta);
            if (count <= smallestCount) {
                smallestCount = count;
                smallestId = i;
            }
        }
        return smallestId;
    }
    /**
     * Estimate an upper bound for the total number of items from the given metadata.
     * @param {{[p: string]: any}} smallestPattern The optional metadata for the pattern
     *                                             with the smallest number of elements.
     * @param {{[p: string]: any}[]} otherPatterns The array of optional metadata for the other patterns.
     * @return {number} The estimated number of total items.
     */
    static estimateCombinedTotalItems(smallestPattern, otherPatterns) {
        const smallestCount = ActorQueryOperationBgpLeftDeepSmallest.getTotalItems(smallestPattern);
        return otherPatterns
            .map(otherPattern => smallestCount * ActorQueryOperationBgpLeftDeepSmallest.getTotalItems(otherPattern))
            .reduce((sum, element) => sum + element, 0);
    }
    /**
     * Get the estimated number of items from the given metadata.
     * @param {{[p: string]: any}} metadata An optional metadata object.
     * @return {number} The estimated number of items, or `Infinity` if metadata is falsy.
     */
    static getTotalItems(metadata) {
        const { totalItems } = metadata !== null && metadata !== void 0 ? metadata : {};
        return totalItems || totalItems === 0 ? totalItems : Infinity;
    }
    /**
     * Materialize all patterns in the given pattern array with the given bindings.
     * @param {Pattern[]} patterns SPARQL algebra patterns.
     * @param {Bindings} bindings A bindings object.
     * @return { pattern: Algebra.Pattern, bindings: IPatternBindings }[] An array of patterns with their bindings.
     */
    static materializePatterns(patterns, bindings) {
        return patterns.map(pattern => ActorQueryOperationBgpLeftDeepSmallest.materializePattern(pattern, bindings));
    }
    /**
     * Materialize a pattern with the given bindings.
     * @param {Pattern} pattern A SPARQL algebra pattern.
     * @param {Bindings} bindings A bindings object.
     * @return { pattern: Algebra.Pattern, bindings: IPatternBindings } A new materialized pattern.
     */
    static materializePattern(pattern, bindings) {
        const bindingsOut = {};
        const patternOut = Object.assign(rdf_terms_1.mapTerms(pattern, (term, termPosition) => {
            const materializedTerm = ActorQueryOperationBgpLeftDeepSmallest.materializeTerm(term, bindings);
            if (term !== materializedTerm) {
                bindingsOut[termPosition] = term;
            }
            return materializedTerm;
        }), { type: 'pattern', context: pattern.context });
        return { pattern: patternOut, bindings: bindingsOut };
    }
    /**
     * Materialize a term with the given binding.
     *
     * If the given term is a variable (or blank node)
     * and that variable exist in the given bindings object,
     * the value of that binding is returned.
     * In all other cases, the term itself is returned.
     *
     * @param {RDF.Term} term A term.
     * @param {Bindings} bindings A bindings object.
     * @return {RDF.Term} The materialized term.
     */
    static materializeTerm(term, bindings) {
        if (term.termType === 'Variable') {
            const value = bindings.get(rdf_string_1.termToString(term));
            if (value) {
                return value;
            }
        }
        return term;
    }
    /**
     * Check if at least one of the given outputs has an empty output, i.e., when the estimated count is zero.
     * @param {IActorQueryOperationOutputBindings[]} patternOutputs Pattern outputs.
     * @return {Promise<boolean>} A promise for indicating whether or not at least one of the outputs is empty.
     */
    static async hasOneEmptyPatternOutput(patternOutputs) {
        for (const patternOutput of patternOutputs) {
            if (patternOutput.metadata) {
                const metadata = await patternOutput.metadata();
                if (!ActorQueryOperationBgpLeftDeepSmallest.getTotalItems(metadata)) {
                    return true;
                }
            }
        }
        return false;
    }
    async testOperation(pattern, context) {
        if (pattern.patterns.length < 2) {
            throw new Error(`Actor ${this.name} can only operate on BGPs with at least two patterns.`);
        }
        return true;
    }
    async runOperation(pattern, context) {
        // Get the total number of items for all patterns by resolving the quad patterns
        const patternOutputs = (await Promise.all(pattern.patterns
            .map((subPattern) => this.mediatorQueryOperation.mediate({ operation: subPattern, context }))))
            .map(bus_query_operation_1.ActorQueryOperation.getSafeBindings);
        // If a triple pattern has no matches, the entire graph pattern has no matches.
        if (await ActorQueryOperationBgpLeftDeepSmallest.hasOneEmptyPatternOutput(patternOutputs)) {
            return {
                bindingsStream: new asynciterator_1.ArrayIterator([], { autoStart: false }),
                metadata: () => Promise.resolve({ totalItems: 0 }),
                type: 'bindings',
                variables: ActorQueryOperationBgpLeftDeepSmallest.getCombinedVariables(patternOutputs),
                canContainUndefs: false,
            };
        }
        // Find the pattern with the smallest number of elements
        const metadatas = await Promise.all(patternOutputs.map(async (patternOutput) => patternOutput.metadata ? await patternOutput.metadata() : {}));
        const smallestId = ActorQueryOperationBgpLeftDeepSmallest.getSmallestPatternId(metadatas);
        this.logDebug(context, 'Smallest pattern: ', () => ({ pattern: pattern.patterns[smallestId], metadata: metadatas[smallestId] }));
        // Close the non-smallest streams
        for (const [i, element] of patternOutputs.entries()) {
            if (i !== smallestId) {
                element.bindingsStream.close();
            }
        }
        // Take the pattern with the smallest number of items
        const smallestPattern = patternOutputs.slice(smallestId)[0];
        const remainingPatterns = pattern.patterns.concat([]);
        remainingPatterns.splice(smallestId, 1);
        const remainingMetadatas = metadatas.concat([]);
        remainingMetadatas.splice(smallestId, 1);
        // Check if the output type is correct
        bus_query_operation_1.ActorQueryOperation.validateQueryOutput(smallestPattern, 'bindings');
        // Materialize the remaining patterns for each binding in the stream.
        const subContext = context && context
            .set(bus_query_operation_1.KEY_CONTEXT_BGP_CURRENTMETADATA, metadatas[smallestId])
            .set(bus_query_operation_1.KEY_CONTEXT_BGP_PARENTMETADATA, remainingMetadatas);
        const bindingsStream = ActorQueryOperationBgpLeftDeepSmallest.createLeftDeepStream(smallestPattern.bindingsStream, remainingPatterns, async (patterns) => {
            // Send the materialized patterns to the mediator for recursive BGP evaluation.
            const operation = { type: 'bgp', patterns: patterns.map(pat => pat.pattern) };
            const bindings = patterns.map(pat => pat.bindings);
            return bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation, context: subContext.set(bus_query_operation_1.KEY_CONTEXT_BGP_PATTERNBINDINGS, bindings) })).bindingsStream;
        });
        // Prepare variables and metadata
        const variables = ActorQueryOperationBgpLeftDeepSmallest.getCombinedVariables(patternOutputs);
        const metadata = () => Promise.resolve({
            totalItems: ActorQueryOperationBgpLeftDeepSmallest.estimateCombinedTotalItems(metadatas[smallestId], metadatas.slice(smallestId)),
        });
        return { type: 'bindings', bindingsStream, variables, metadata, canContainUndefs: false };
    }
}
exports.ActorQueryOperationBgpLeftDeepSmallest = ActorQueryOperationBgpLeftDeepSmallest;
//# sourceMappingURL=ActorQueryOperationBgpLeftDeepSmallest.js.map

/***/ }),

/***/ 8640:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8337), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationBgpSingle = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
/**
 * A comunica Query Operation Actor for BGPs with a single pattern.
 */
class ActorQueryOperationBgpSingle extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'bgp');
    }
    async testOperation(pattern, context) {
        if (pattern.patterns.length !== 1) {
            throw new Error(`Actor ${this.name} can only operate on BGPs with a single pattern.`);
        }
        return true;
    }
    runOperation(pattern, context) {
        // If we have parent metadata, extract the single parent metadata entry.
        if (context && context.has(bus_query_operation_1.KEY_CONTEXT_BGP_PARENTMETADATA)) {
            const metadatas = context.get(bus_query_operation_1.KEY_CONTEXT_BGP_PARENTMETADATA);
            context = context.delete(bus_query_operation_1.KEY_CONTEXT_BGP_PARENTMETADATA);
            context = context.set(bus_query_operation_1.KEY_CONTEXT_PATTERN_PARENTMETADATA, metadatas[0]);
        }
        return this.mediatorQueryOperation.mediate({ operation: pattern.patterns[0], context });
    }
}
exports.ActorQueryOperationBgpSingle = ActorQueryOperationBgpSingle;
//# sourceMappingURL=ActorQueryOperationBgpSingle.js.map

/***/ }),

/***/ 1825:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2289), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationConstruct = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const rdf_terms_1 = __webpack_require__(1234);
const BindingsToQuadsIterator_1 = __webpack_require__(228);
/**
 * A comunica Construct Query Operation Actor.
 */
class ActorQueryOperationConstruct extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'construct');
    }
    /**
     * Find all variables in a list of triple patterns.
     * @param {Algebra.Pattern[]} patterns An array of triple patterns.
     * @return {RDF.Variable[]} The variables in the triple patterns.
     */
    static getVariables(patterns) {
        return rdf_terms_1.uniqTerms([].concat
            .apply([], patterns.map(pattern => rdf_terms_1.getVariables(rdf_terms_1.getTerms(pattern)))));
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        // Apply a projection on our CONSTRUCT variables first, as the query may contain other variables as well.
        const variables = ActorQueryOperationConstruct.getVariables(pattern.template);
        const operation = { type: 'project', input: pattern.input, variables };
        // Evaluate the input query
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation, context }));
        // Construct triples using the result based on the pattern.
        const quadStream = new BindingsToQuadsIterator_1.BindingsToQuadsIterator(pattern.template, output.bindingsStream);
        // Let the final metadata contain the estimated number of triples
        let metadata;
        if (output.metadata) {
            metadata = () => output.metadata().then(meta => {
                if (meta.totalItems) {
                    return Object.assign(Object.assign({}, meta), { totalItems: meta.totalItems * pattern.template.length });
                }
                return meta;
            });
        }
        return {
            metadata,
            quadStream,
            type: 'quads',
        };
    }
}
exports.ActorQueryOperationConstruct = ActorQueryOperationConstruct;
//# sourceMappingURL=ActorQueryOperationConstruct.js.map

/***/ }),

/***/ 228:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BindingsToQuadsIterator = void 0;
const asynciterator_1 = __webpack_require__(7400);
const rdf_data_factory_1 = __webpack_require__(3623);
const rdf_terms_1 = __webpack_require__(1234);
const DF = new rdf_data_factory_1.DataFactory();
/**
 * Transforms a bindings stream into a quad stream given a quad template.
 *
 * This conforms to the SPARQL 1.1 spec on constructing triples:
 * https://www.w3.org/TR/sparql11-query/#rConstructTriples
 */
class BindingsToQuadsIterator extends asynciterator_1.MultiTransformIterator {
    constructor(template, bindingsStream) {
        super(bindingsStream, { autoStart: false });
        this.template = template;
        this.blankNodeCounter = 0;
    }
    /**
     * Bind the given term.
     * If the term is a variable and the variable is bound in the bindings object,
     * return the bindings value.
     * If the term is a variable and the variable is not bound in the bindings object,
     * a falsy value is returned..
     * Otherwise, the term itself is returned.
     * @param {Bindings}  bindings A bindings object.
     * @param {RDF.Term}  term     An RDF term.
     * @return {RDF.Term}          If the given term is not a variable, the term itself is returned.
     *                             If the given term is a variable, then the bound term is returned,
     *                             or a falsy value if it did not exist in the bindings.
     */
    static bindTerm(bindings, term) {
        if (term.termType === 'Variable') {
            return bindings.get(`?${term.value}`);
        }
        return term;
    }
    /**
     * Bind the given quad pattern.
     * If one of the terms was a variable AND is not bound in the bindings,
     * a falsy value will be returned.
     * @param {Bindings} bindings A bindings object.
     * @param {RDF.Quad} pattern  An RDF quad.
     * @return {RDF.Quad}         A bound RDF quad or undefined.
     */
    static bindQuad(bindings, pattern) {
        try {
            return rdf_terms_1.mapTerms(pattern, term => {
                const boundTerm = BindingsToQuadsIterator.bindTerm(bindings, term);
                if (!boundTerm) {
                    throw new Error('Unbound term');
                }
                return boundTerm;
            });
        }
        catch (_a) {
            // Do nothing
        }
    }
    /**
     * Convert a blank node to a unique blank node in the given context.
     * If the given term is not a blank node, the term itself will be returned.
     * @param             blankNodeCounter A counter value for the blank node.
     * @param {RDF.Term}  term             The term that should be localized.
     * @return {RDF.Term}                  A term.
     */
    static localizeBlankNode(blankNodeCounter, term) {
        if (term.termType === 'BlankNode') {
            return DF.blankNode(`${term.value}${blankNodeCounter}`);
        }
        return term;
    }
    /**
     * Convert the given quad to a quad that only contains unique blank nodes.
     * @param            blankNodeCounter A counter value for the blank node.
     * @param {RDF.BaseQuad} pattern          The pattern that should be localized.
     * @return {RDF.BaseQuad}                 A quad.
     */
    static localizeQuad(blankNodeCounter, pattern) {
        return rdf_terms_1.mapTerms(pattern, term => BindingsToQuadsIterator.localizeBlankNode(blankNodeCounter, term));
    }
    /**
     * Convert the given template to a list of quads based on the given bindings.
     * @param {Bindings}    bindings           A bindings object.
     * @param {RDF.Quad[]}  template           A list of quad patterns.
     * @param               blankNodeCounter   A counter value for the blank node.
     * @return {RDF.Quad[]}                    A list of quads.
     */
    static bindTemplate(bindings, template, blankNodeCounter) {
        return template
            // Bind variables to bound terms
            .map(x => BindingsToQuadsIterator.bindQuad.bind(null, bindings)(x))
            // Remove quads that contained unbound terms, i.e., variables.
            .filter(Boolean)
            // Make sure the multiple instantiations of the template contain different blank nodes, as required by SPARQL 1.1.
            .map(BindingsToQuadsIterator.localizeQuad.bind(null, blankNodeCounter));
    }
    _createTransformer(bindings) {
        return new asynciterator_1.ArrayIterator(BindingsToQuadsIterator.bindTemplate(bindings, this.template, this.blankNodeCounter++));
    }
}
exports.BindingsToQuadsIterator = BindingsToQuadsIterator;
//# sourceMappingURL=BindingsToQuadsIterator.js.map

/***/ }),

/***/ 4111:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5047), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5047:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationDescribeSubject = void 0;
const actor_query_operation_union_1 = __webpack_require__(5766);
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_data_factory_1 = __webpack_require__(3623);
const DF = new rdf_data_factory_1.DataFactory();
/**
 * A comunica Describe Subject Query Operation Actor.
 */
class ActorQueryOperationDescribeSubject extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'describe');
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        // Create separate construct queries for all non-variable terms
        const operations = pattern.terms
            .filter(term => term.termType !== 'Variable')
            .map((term) => {
            // Transform each term to a separate construct operation with S ?p ?o patterns (BGP) for all terms
            const patterns = [
                DF.quad(term, DF.variable('__predicate'), DF.variable('__object')),
            ];
            // eslint-disable-next-line no-return-assign
            patterns.forEach((templatePattern) => templatePattern.type = 'pattern');
            const templateOperation = { type: 'bgp', patterns: patterns };
            // Create a construct query
            return {
                input: templateOperation,
                template: patterns,
                type: 'construct',
            };
        });
        // If we have variables in the term list,
        // create one separate construct operation to determine these variables using the input pattern.
        if (operations.length !== pattern.terms.length) {
            let variablePatterns = [];
            pattern.terms
                .filter(term => term.termType === 'Variable')
                .forEach((term, i) => {
                // Transform each term to an S ?p ?o pattern in a non-conflicting way
                const patterns = [
                    DF.quad(term, DF.variable(`__predicate${i}`), DF.variable(`__object${i}`)),
                ];
                // eslint-disable-next-line no-return-assign
                patterns.forEach((templatePattern) => templatePattern.type = 'pattern');
                variablePatterns = variablePatterns.concat(patterns);
            });
            // Add a single construct for the variables
            // This requires a join between the input pattern and our variable patterns that form a simple BGP
            operations.push({
                input: { type: 'join', left: pattern.input, right: { type: 'bgp', patterns: variablePatterns } },
                template: variablePatterns,
                type: 'construct',
            });
        }
        // Evaluate the construct queries
        const outputs = (await Promise.all(operations.map(operation => this.mediatorQueryOperation.mediate({ operation, context }))))
            .map(bus_query_operation_1.ActorQueryOperation.getSafeQuads);
        // Take the union of all quad streams
        const quadStream = new asynciterator_1.UnionIterator(outputs.map(output => output.quadStream), { autoStart: false });
        // Take union of metadata
        const metadata = () => Promise.all(outputs
            .map(x => bus_query_operation_1.getMetadata(x)))
            .then(actor_query_operation_union_1.ActorQueryOperationUnion.unionMetadata);
        return { type: 'quads', quadStream, metadata };
    }
}
exports.ActorQueryOperationDescribeSubject = ActorQueryOperationDescribeSubject;
//# sourceMappingURL=ActorQueryOperationDescribeSubject.js.map

/***/ }),

/***/ 836:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3200), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationDistinctHash = void 0;
const actor_abstract_bindings_hash_1 = __webpack_require__(3828);
/**
 * A comunica Distinct Hash Query Operation Actor.
 */
class ActorQueryOperationDistinctHash extends actor_abstract_bindings_hash_1.AbstractBindingsHash {
    constructor(args) {
        super(args, 'distinct');
    }
    /**
       * Create a new distinct filter function for the given hash algorithm and digest algorithm.
       * This will maintain an internal hash datastructure so that every bindings object only returns true once.
       * @return {(bindings: Bindings) => boolean} A distinct filter for bindings.
       */
    newHashFilter() {
        const hashes = {};
        return (bindings) => {
            const hash = actor_abstract_bindings_hash_1.AbstractFilterHash.hash(bindings);
            // eslint-disable-next-line no-return-assign
            return !(hash in hashes) && (hashes[hash] = true);
        };
    }
}
exports.ActorQueryOperationDistinctHash = ActorQueryOperationDistinctHash;
//# sourceMappingURL=ActorQueryOperationDistinctHash.js.map

/***/ }),

/***/ 776:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3626), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationExtend = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const rdf_string_1 = __webpack_require__(2086);
const sparqlee_1 = __webpack_require__(390);
/**
 * A comunica Extend Query Operation Actor.
 *
 * See https://www.w3.org/TR/sparql11-query/#sparqlAlgebra;
 */
class ActorQueryOperationExtend extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'extend');
    }
    async testOperation(pattern, context) {
        // Will throw error for unsupported opperations
        const _ = Boolean(new sparqlee_1.AsyncEvaluator(pattern.expression));
        return true;
    }
    async runOperation(pattern, context) {
        const { expression, input, variable } = pattern;
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: input, context }));
        const extendKey = rdf_string_1.termToString(variable);
        const config = Object.assign({}, bus_query_operation_1.ActorQueryOperation.getExpressionContext(context, this.mediatorQueryOperation));
        const evaluator = new sparqlee_1.AsyncEvaluator(expression, config);
        // Transform the stream by extending each Bindings with the expression result
        const transform = async (bindings, next, push) => {
            try {
                const result = await evaluator.evaluate(bindings);
                // Extend operation is undefined when the key already exists
                // We just override it here.
                const extended = bindings.set(extendKey, result);
                push(extended);
            }
            catch (error) {
                if (sparqlee_1.isExpressionError(error)) {
                    // Errors silently don't actually extend according to the spec
                    push(bindings);
                    // But let's warn anyway
                    this.logWarn(context, `Expression error for extend operation with bindings '${JSON.stringify(bindings)}'`);
                }
                else {
                    bindingsStream.emit('error', error);
                }
            }
            next();
        };
        const variables = output.variables.concat([extendKey]);
        const bindingsStream = output.bindingsStream.transform({ transform });
        const { metadata } = output;
        return { type: 'bindings', bindingsStream, metadata, variables, canContainUndefs: output.canContainUndefs };
    }
}
exports.ActorQueryOperationExtend = ActorQueryOperationExtend;
//# sourceMappingURL=ActorQueryOperationExtend.js.map

/***/ }),

/***/ 9190:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7594), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationFilterSparqlee = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const sparqlee_1 = __webpack_require__(390);
/**
 * A comunica Filter Sparqlee Query Operation Actor.
 */
class ActorQueryOperationFilterSparqlee extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'filter');
    }
    async testOperation(pattern, context) {
        // Will throw error for unsupported operators
        const _ = new sparqlee_1.AsyncEvaluator(pattern.expression, bus_query_operation_1.ActorQueryOperation.getExpressionContext(context, this.mediatorQueryOperation));
        return true;
    }
    async runOperation(pattern, context) {
        const outputRaw = await this.mediatorQueryOperation.mediate({ operation: pattern.input, context });
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(outputRaw);
        bus_query_operation_1.ActorQueryOperation.validateQueryOutput(output, 'bindings');
        const { variables, metadata } = output;
        const config = bus_query_operation_1.ActorQueryOperation.getExpressionContext(context, this.mediatorQueryOperation);
        const evaluator = new sparqlee_1.AsyncEvaluator(pattern.expression, config);
        const transform = async (item, next, push) => {
            try {
                const result = await evaluator.evaluateAsEBV(item);
                if (result) {
                    push(item);
                }
            }
            catch (error) {
                if (!sparqlee_1.isExpressionError(error)) {
                    bindingsStream.emit('error', error);
                }
            }
            next();
        };
        const bindingsStream = output.bindingsStream.transform({ transform });
        return { type: 'bindings', bindingsStream, metadata, variables, canContainUndefs: output.canContainUndefs };
    }
}
exports.ActorQueryOperationFilterSparqlee = ActorQueryOperationFilterSparqlee;
//# sourceMappingURL=ActorQueryOperationFilterSparqlee.js.map

/***/ }),

/***/ 8642:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4490), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4490:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationFromQuad = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica From Query Operation Actor.
 */
class ActorQueryOperationFromQuad extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'from');
    }
    /**
     * Create a deep copy of the given operation.
     * @param {Operation} operation An operation.
     * @param {(subOperation: Operation) => Operation} recursiveCb A callback for recursive operation calls.
     * @return {Operation} The copied operation.
     */
    static copyOperation(operation, recursiveCb) {
        const copiedOperation = {};
        for (const key of Object.keys(operation)) {
            if (Array.isArray(operation[key])) {
                if (key === 'variables') {
                    copiedOperation[key] = operation[key];
                }
                else {
                    copiedOperation[key] = operation[key].map(recursiveCb);
                }
            }
            else if (ActorQueryOperationFromQuad.ALGEBRA_TYPES.includes(operation[key].type)) {
                copiedOperation[key] = recursiveCb(operation[key]);
            }
            else {
                copiedOperation[key] = operation[key];
            }
        }
        return copiedOperation;
    }
    /**
     * Recursively transform the given operation to use the given graphs as default graph
     * This will (possibly) create a new operation and not modify the given operation.
     * @param {Operation} operation An operation.
     * @param {RDF.Term[]} defaultGraphs Graph terms.
     * @return {Operation} A new operation.
     */
    static applyOperationDefaultGraph(operation, defaultGraphs) {
        // If the operation is a BGP or Path, change the graph.
        if ((operation.type === 'bgp' && operation.patterns.length > 0) || operation.type === 'path') {
            if (operation.type === 'bgp') {
                return ActorQueryOperationFromQuad.joinOperations(operation.patterns.map((pattern) => {
                    if (pattern.graph.termType !== 'DefaultGraph') {
                        return ActorQueryOperationFromQuad.FACTORY.createBgp([pattern]);
                    }
                    const bgps = defaultGraphs.map((graph) => ActorQueryOperationFromQuad.FACTORY.createBgp([ActorQueryOperationFromQuad.FACTORY
                            .createPattern(pattern.subject, pattern.predicate, pattern.object, graph)]));
                    return ActorQueryOperationFromQuad.unionOperations(bgps);
                }));
            }
            if (operation.graph.termType !== 'DefaultGraph') {
                return operation;
            }
            const paths = defaultGraphs.map((graph) => ActorQueryOperationFromQuad.FACTORY
                .createPath(operation.subject, operation.predicate, operation.object, graph));
            return ActorQueryOperationFromQuad.joinOperations(paths);
        }
        return ActorQueryOperationFromQuad.copyOperation(operation, (subOperation) => this.applyOperationDefaultGraph(subOperation, defaultGraphs));
    }
    /**
     * Recursively transform the given operation to use the given graphs as named graph
     * This will (possibly) create a new operation and not modify the given operation.
     * @param {Operation} operation An operation.
     * @param {RDF.Term[]} namedGraphs Graph terms.
     * @return {Operation} A new operation.
     */
    static applyOperationNamedGraph(operation, namedGraphs, defaultGraphs) {
        // If the operation is a BGP or Path, change the graph.
        if ((operation.type === 'bgp' && operation.patterns.length > 0) || operation.type === 'path') {
            let patternGraph;
            if (operation.type === 'bgp') {
                // We assume that the BGP has at least one pattern and all have the same graph.
                patternGraph = operation.patterns[0].graph;
            }
            else {
                patternGraph = operation.graph;
            }
            if (patternGraph.termType === 'DefaultGraph') {
                // SPARQL spec (8.2) describes that when FROM NAMED's are used without a FROM, the default graph must be empty.
                // The FROMs are transformed before this step to a named node, so this will not apply to this case anymore.
                return { type: 'bgp', patterns: [] };
            }
            if (patternGraph.termType === 'Variable') {
                if (namedGraphs.length === 1) {
                    const graph = namedGraphs[0];
                    // If the pattern graph is a variable, replace the graph and bind the variable using VALUES
                    const bindings = {};
                    bindings[`?${patternGraph.value}`] = graph;
                    const values = ActorQueryOperationFromQuad.FACTORY
                        .createValues([patternGraph], [bindings]);
                    let pattern;
                    if (operation.type === 'bgp') {
                        pattern = ActorQueryOperationFromQuad.FACTORY
                            .createBgp(operation.patterns.map((pat) => ActorQueryOperationFromQuad.FACTORY
                            .createPattern(pat.subject, pat.predicate, pat.object, graph)));
                    }
                    else {
                        pattern = ActorQueryOperationFromQuad.FACTORY
                            .createPath(operation.subject, operation.predicate, operation.object, graph);
                    }
                    return ActorQueryOperationFromQuad.FACTORY.createJoin(values, pattern);
                }
                // If the pattern graph is a variable, take the union of the pattern applied to each available named graph
                return ActorQueryOperationFromQuad.unionOperations(namedGraphs.map((graph) => ActorQueryOperationFromQuad.applyOperationNamedGraph(operation, [graph], defaultGraphs)));
            }
            // The pattern's graph is defined (including the default graphs)
            const isNamedGraphAvailable = namedGraphs.concat(defaultGraphs).some((namedGraph) => namedGraph.equals(patternGraph));
            if (isNamedGraphAvailable) {
                // Return the pattern as-is if the pattern's graph was selected in a FROM NAMED
                return operation;
            }
            // No-op if the pattern's graph was not selected in a FROM NAMED.
            return { type: 'bgp', patterns: [] };
        }
        return ActorQueryOperationFromQuad.copyOperation(operation, (subOperation) => this.applyOperationNamedGraph(subOperation, namedGraphs, defaultGraphs));
    }
    /**
     * Transform the given array of operations into a join operation.
     * @param {Operation[]} operations An array of operations, must contain at least one operation.
     * @return {Join} A join operation.
     */
    static joinOperations(operations) {
        if (operations.length === 1) {
            return operations[0];
        }
        if (operations.length === 2) {
            return ActorQueryOperationFromQuad.FACTORY.createJoin(operations[0], operations[1]);
        }
        if (operations.length > 2) {
            return ActorQueryOperationFromQuad.FACTORY.createJoin(operations.shift(), this.joinOperations(operations));
        }
        throw new Error('A join can only be applied on at least one operation');
    }
    /**
     * Transform the given array of operations into a union operation.
     * @param {Operation[]} operations An array of operations, must contain at least one operation.
     * @return {Union} A union operation.
     */
    static unionOperations(operations) {
        if (operations.length === 1) {
            return operations[0];
        }
        if (operations.length === 2) {
            return ActorQueryOperationFromQuad.FACTORY.createUnion(operations[0], operations[1]);
        }
        if (operations.length > 2) {
            return ActorQueryOperationFromQuad.FACTORY.createUnion(operations.shift(), this.unionOperations(operations));
        }
        throw new Error('A union can only be applied on at least one operation');
    }
    /**
     * Transform an operation based on the default and named graphs in the pattern.
     *
     * FROM sets the default graph.
     * If multiple are available, take the union of the operation for all of them at quad-pattern level.
     *
     * FROM NAMED indicates which named graphs are available.
     * This will rewrite the query so that only triples from the given named graphs can be selected.
     *
     * @param {From} pattern A from operation.
     * @return {Operation} The transformed operation.
     */
    static createOperation(pattern) {
        let operation = pattern.input;
        if (pattern.default.length > 0) {
            operation = ActorQueryOperationFromQuad.applyOperationDefaultGraph(operation, pattern.default);
        }
        if (pattern.named.length > 0) {
            operation = ActorQueryOperationFromQuad.applyOperationNamedGraph(operation, pattern.named, pattern.default);
        }
        return operation;
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        const operation = ActorQueryOperationFromQuad.createOperation(pattern);
        return this.mediatorQueryOperation.mediate({ operation, context });
    }
}
exports.ActorQueryOperationFromQuad = ActorQueryOperationFromQuad;
ActorQueryOperationFromQuad.FACTORY = new sparqlalgebrajs_1.Factory();
ActorQueryOperationFromQuad.ALGEBRA_TYPES = Object.keys(sparqlalgebrajs_1.Algebra.types).map(key => sparqlalgebrajs_1.Algebra.types[key]);
//# sourceMappingURL=ActorQueryOperationFromQuad.js.map

/***/ }),

/***/ 8834:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5208), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5208:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationGroup = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
const sparqlee_1 = __webpack_require__(390);
const GroupsState_1 = __webpack_require__(511);
/**
 * A comunica Group Query Operation Actor.
 */
class ActorQueryOperationGroup extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'group');
    }
    async testOperation(pattern, context) {
        for (const aggregate of pattern.aggregates) {
            // Will throw for unsupported expressions
            const _ = new sparqlee_1.SyncEvaluator(aggregate.expression);
        }
        return true;
    }
    async runOperation(pattern, context) {
        // Get result stream for the input query
        const { input, aggregates } = pattern;
        const outputRaw = await this.mediatorQueryOperation.mediate({ operation: input, context });
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(outputRaw);
        // The variables in scope are the variables on which we group, i.e. pattern.variables.
        // For 'GROUP BY ?x, ?z', this is [?x, ?z], for 'GROUP by expr(?x) as ?e' this is [?e].
        // But also in scope are the variables defined by the aggregations, since GROUP has to handle this.
        const variables = pattern.variables
            .map(x => rdf_string_1.termToString(x))
            .concat(aggregates.map(agg => rdf_string_1.termToString(agg.variable)));
        const sparqleeConfig = Object.assign({}, bus_query_operation_1.ActorQueryOperation.getExpressionContext(context));
        // Return a new promise that completes when the stream has ended or when
        // an error occurs
        return new Promise((resolve, reject) => {
            const groups = new GroupsState_1.GroupsState(pattern, sparqleeConfig);
            // Phase 2: Collect aggregator results
            // We can only return when the binding stream ends, when that happens
            // we return the identified groups. Which are nothing more than Bindings
            // of the grouping variables merged with the aggregate variables
            output.bindingsStream.on('end', () => {
                try {
                    const bindingsStream = new asynciterator_1.ArrayIterator(groups.collectResults(), { autoStart: false });
                    const { metadata } = output;
                    resolve({ type: 'bindings', bindingsStream, metadata, variables, canContainUndefs: output.canContainUndefs });
                }
                catch (error) {
                    reject(error);
                }
            });
            // Make sure to propagate any errors in the binding stream
            output.bindingsStream.on('error', reject);
            // Phase 1: Consume the stream, identify the groups and populate the aggregators.
            // We need to bind this after the 'error' and 'end' listeners to avoid the
            // stream having ended before those listeners are bound.
            output.bindingsStream.on('data', bindings => {
                try {
                    groups.consumeBindings(bindings);
                }
                catch (error) {
                    reject(error);
                }
            });
        });
    }
}
exports.ActorQueryOperationGroup = ActorQueryOperationGroup;
//# sourceMappingURL=ActorQueryOperationGroup.js.map

/***/ }),

/***/ 511:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupsState = void 0;
const actor_abstract_bindings_hash_1 = __webpack_require__(3828);
const bus_query_operation_1 = __webpack_require__(7213);
const rdf_string_1 = __webpack_require__(2086);
const sparqlee_1 = __webpack_require__(390);
/**
 * A state manager for the groups constructed by consuming the bindings-stream.
 */
class GroupsState {
    constructor(pattern, sparqleeConfig) {
        this.pattern = pattern;
        this.sparqleeConfig = sparqleeConfig;
        this.groups = new Map();
        this.groupVariables = new Set(this.pattern.variables.map(x => rdf_string_1.termToString(x)));
        this.distinctHashes = pattern.aggregates.some(({ distinct }) => distinct) ?
            new Map() :
            null;
    }
    /**
     * - Consumes a stream binding
     * - Find the corresponding group and create one if need be
     * - Feeds the binding to the group's aggregators
     *
     * @param {Bindings} bindings - The Bindings to consume
     */
    consumeBindings(bindings) {
        // Select the bindings on which we group
        const grouper = bindings
            .filter((_, variable) => this.groupVariables.has(variable))
            .toMap();
        const groupHash = this.hashBindings(grouper);
        // First member of group -> create new group
        let group = this.groups.get(groupHash);
        if (!group) {
            // Initialize state for all aggregators for new group
            const aggregators = {};
            for (const aggregate of this.pattern.aggregates) {
                const key = rdf_string_1.termToString(aggregate.variable);
                aggregators[key] = new sparqlee_1.AggregateEvaluator(aggregate, this.sparqleeConfig);
                aggregators[key].put(bindings);
            }
            group = { aggregators, bindings: grouper };
            this.groups.set(groupHash, group);
            if (this.distinctHashes) {
                const bindingsHash = this.hashBindings(bindings);
                this.distinctHashes.set(groupHash, new Set([bindingsHash]));
            }
        }
        else {
            // Group already exists
            // Update all the aggregators with the input binding
            for (const aggregate of this.pattern.aggregates) {
                // If distinct, check first wether we have inserted these values already
                if (aggregate.distinct) {
                    const hash = this.hashBindings(bindings);
                    if (this.distinctHashes.get(groupHash).has(hash)) {
                        continue;
                    }
                    else {
                        this.distinctHashes.get(groupHash).add(hash);
                    }
                }
                const variable = rdf_string_1.termToString(aggregate.variable);
                group.aggregators[variable].put(bindings);
            }
        }
    }
    /**
     * Collect the result of the current state. This returns a Bindings per group,
     * and a (possibly empty) Bindings in case the no Bindings have been consumed yet.
     */
    collectResults() {
        // Collect groups
        let rows = [...this.groups].map(([_, group]) => {
            const { bindings: groupBindings, aggregators } = group;
            // Collect aggregator bindings
            // If the aggregate errorred, the result will be undefined
            const aggBindings = {};
            for (const variable in aggregators) {
                const value = aggregators[variable].result();
                if (value !== undefined) {
                    // Filter undefined
                    aggBindings[variable] = value;
                }
            }
            // Merge grouping bindings and aggregator bindings
            return groupBindings.merge(aggBindings);
        });
        // Case: No Input
        // Some aggregators still define an output on the empty input
        // Result is a single Bindings
        if (rows.length === 0 && this.groupVariables.size === 0) {
            const single = {};
            for (const aggregate of this.pattern.aggregates) {
                const key = rdf_string_1.termToString(aggregate.variable);
                const value = sparqlee_1.AggregateEvaluator.emptyValue(aggregate);
                if (value !== undefined) {
                    single[key] = value;
                }
            }
            rows = [bus_query_operation_1.Bindings(single)];
        }
        return rows;
    }
    /**
     * @param {Bindings} bindings - Bindings to hash
     */
    hashBindings(bindings) {
        return actor_abstract_bindings_hash_1.AbstractFilterHash.hash(bindings);
    }
}
exports.GroupsState = GroupsState;
//# sourceMappingURL=GroupsState.js.map

/***/ }),

/***/ 1318:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5188), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationJoin = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
/**
 * A comunica Join Query Operation Actor.
 */
class ActorQueryOperationJoin extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'join');
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        const left = this.mediatorQueryOperation.mediate({ operation: pattern.left, context });
        const right = this.mediatorQueryOperation.mediate({ operation: pattern.right, context });
        return this.mediatorJoin.mediate({
            entries: [bus_query_operation_1.ActorQueryOperation.getSafeBindings(await left), bus_query_operation_1.ActorQueryOperation.getSafeBindings(await right)],
        });
    }
}
exports.ActorQueryOperationJoin = ActorQueryOperationJoin;
//# sourceMappingURL=ActorQueryOperationJoin.js.map

/***/ }),

/***/ 1021:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6675), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6675:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationLeftJoinLeftDeep = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const bus_rdf_join_1 = __webpack_require__(2444);
const asynciterator_1 = __webpack_require__(7400);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica LeftJoin left-deep Query Operation Actor.
 */
class ActorQueryOperationLeftJoinLeftDeep extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'leftjoin');
    }
    /**
     * Create a new bindings stream
     * that takes every binding of the base stream,
     * materializes the remaining patterns with it,
     * and emits all bindings from this new set of patterns.
     * @param {BindingsStream} leftStream The base stream.
     * @param {Algebra.Operation} rightOperation The operation to materialize with each binding of the base stream.
     * @param {Algebra.Operation => Promise<BindingsStream>} operationBinder A callback to retrieve the bindings stream
     *                                                                       of an operation.
     * @return {BindingsStream}
     */
    static createLeftDeepStream(leftStream, rightOperation, operationBinder) {
        return new asynciterator_1.MultiTransformIterator(leftStream, {
            multiTransform(bindings) {
                const bindingsMerger = (subBindings) => subBindings.merge(bindings);
                return new asynciterator_1.TransformIterator(async () => (await operationBinder(bus_query_operation_1.materializeOperation(rightOperation, bindings)))
                    .map(bindingsMerger), { maxBufferSize: 128 });
            },
            optional: true,
        });
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        // Initiate left and right operations
        // Only the left stream will be used.
        // The right stream is ignored and only its metadata and variables are used.
        const left = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation
            .mediate({ operation: pattern.left, context }));
        const right = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation
            .mediate({ operation: pattern.right, context }));
        // Close the right stream, since we don't need that one
        right.bindingsStream.close();
        // If an expression was defined, wrap the right operation in a filter expression.
        const rightOperation = pattern.expression ?
            ActorQueryOperationLeftJoinLeftDeep.FACTORY.createFilter(pattern.right, pattern.expression) :
            pattern.right;
        // Create a left-deep stream with left and right.
        const bindingsStream = ActorQueryOperationLeftJoinLeftDeep.createLeftDeepStream(left.bindingsStream, rightOperation, async (operation) => bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation, context })).bindingsStream);
        // Determine variables and metadata
        const variables = bus_rdf_join_1.ActorRdfJoin.joinVariables({ entries: [left, right] });
        const metadata = () => Promise.all([left, right].map(x => bus_query_operation_1.getMetadata(x)))
            .then(metadatas => metadatas.reduce((acc, val) => acc * val.totalItems, 1))
            .catch(() => Infinity)
            .then(totalItems => ({ totalItems }));
        return { type: 'bindings', bindingsStream, metadata, variables, canContainUndefs: true };
    }
}
exports.ActorQueryOperationLeftJoinLeftDeep = ActorQueryOperationLeftJoinLeftDeep;
ActorQueryOperationLeftJoinLeftDeep.FACTORY = new sparqlalgebrajs_1.Factory();
//# sourceMappingURL=ActorQueryOperationLeftJoinLeftDeep.js.map

/***/ }),

/***/ 5609:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2505), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationMinus = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const BindingsIndex_1 = __webpack_require__(472);
/**
 * A comunica Minus Query Operation Actor.
 */
class ActorQueryOperationMinus extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'minus');
    }
    async testOperation(operation, context) {
        return true;
    }
    async runOperation(pattern, context) {
        const buffer = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: pattern.right, context }));
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: pattern.left, context }));
        const commons = this.getCommonVariables(buffer.variables, output.variables);
        if (commons.length > 0) {
            /**
             * To assure we've filtered all B (`buffer`) values from A (`output`) we wait until we've fetched all values of B.
             * Then we save these triples in `index` and use it to filter our A-stream.
             */
            const index = new BindingsIndex_1.BindingsIndex(commons);
            const bindingsStream = new asynciterator_1.TransformIterator(async () => {
                await new Promise(resolve => {
                    buffer.bindingsStream.on('data', data => index.add(data));
                    buffer.bindingsStream.on('end', resolve);
                });
                return output.bindingsStream.filter(data => !index.contains(data));
            }, { autoStart: false });
            const canContainUndefs = buffer.canContainUndefs || output.canContainUndefs;
            return {
                type: 'bindings',
                bindingsStream,
                variables: output.variables,
                metadata: output.metadata,
                canContainUndefs,
            };
        }
        return output;
    }
    /**
     * This function puts all common values between 2 arrays in a map with `value` : true
     */
    getCommonVariables(array1, array2) {
        return Object.keys(array1.filter((value) => array2.includes(value)).reduce((hash, key) => {
            hash[key] = true;
            return hash;
        }, {}));
    }
}
exports.ActorQueryOperationMinus = ActorQueryOperationMinus;
//# sourceMappingURL=ActorQueryOperationMinus.js.map

/***/ }),

/***/ 472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BindingsIndex = void 0;
const rdf_string_1 = __webpack_require__(2086);
/**
 * A simple efficient tree-based index for maintaining bindings,
 * and checking whether or not a bindings is contained in this index.
 *
 * This will consider bindings with a variable term or a missing term
 * as a 'match-all' with other terms.
 */
class BindingsIndex {
    constructor(keys) {
        this.data = {};
        this.keys = keys;
    }
    static hashTerm(term) {
        return term && term.termType !== 'Variable' ? rdf_string_1.termToString(term) : '';
    }
    /**
     * Add the given bindings to the index.
     * @param {Bindings} bindings A bindings.
     */
    add(bindings) {
        if (this.isBindingsValid(bindings)) {
            let dataIt = this.data;
            for (const key of this.keys) {
                const dataKey = BindingsIndex.hashTerm(bindings.get(key));
                let subDataIt = dataIt[dataKey];
                if (!subDataIt) {
                    subDataIt = dataIt[dataKey] = {};
                }
                dataIt = subDataIt;
            }
        }
    }
    /**
     * Check if the given bindings is contained in this index.
     * @param {Bindings} bindings A bindings.
     * @return {boolean} If it exists in the index.
     */
    contains(bindings) {
        // Always return false if the bindings contain none of the expected keys
        if (!this.isBindingsValid(bindings)) {
            return false;
        }
        return this.containsRecursive(bindings, this.keys, [this.data]);
    }
    isBindingsValid(bindings) {
        let validKeys = false;
        for (const key of this.keys) {
            if (bindings.get(key)) {
                validKeys = true;
                break;
            }
        }
        return validKeys;
    }
    containsRecursive(bindings, keys, dataIndexes) {
        if (keys.length === 0) {
            return true;
        }
        let key;
        // eslint-disable-next-line prefer-const
        [key, ...keys] = keys;
        for (const data of dataIndexes) {
            // If the index contained a variable, all terms will match.
            const dataKey = BindingsIndex.hashTerm(bindings.get(key));
            if (!dataKey) {
                // Iterate over all entries
                let subDatas = Object.keys(data).map(subKey => data[subKey]);
                if (subDatas.length === 0) {
                    subDatas = [{}];
                }
                if (this.containsRecursive(bindings, keys, subDatas)) {
                    return true;
                }
            }
            else {
                // Check the entry for the term, and the variable term.
                const subDatas = [data[dataKey], data['']].filter(Boolean);
                if (subDatas.length === 0) {
                    continue;
                }
                if (this.containsRecursive(bindings, keys, subDatas)) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.BindingsIndex = BindingsIndex;
//# sourceMappingURL=BindingsIndex.js.map

/***/ }),

/***/ 1293:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(262), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 262:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationOrderBySparqlee = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const sparqlalgebrajs_1 = __webpack_require__(6609);
const sparqlee_1 = __webpack_require__(390);
const SortIterator_1 = __webpack_require__(3159);
/**
 * A comunica OrderBy Sparqlee Query Operation Actor.
 */
class ActorQueryOperationOrderBySparqlee extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        var _a;
        super(args, 'orderby');
        this.window = (_a = args.window) !== null && _a !== void 0 ? _a : Infinity;
    }
    async testOperation(pattern, context) {
        // Will throw error for unsupported operators
        for (let expr of pattern.expressions) {
            expr = this.extractSortExpression(expr);
            const _ = new sparqlee_1.AsyncEvaluator(expr);
        }
        return true;
    }
    async runOperation(pattern, context) {
        const outputRaw = await this.mediatorQueryOperation.mediate({ operation: pattern.input, context });
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(outputRaw);
        const options = { window: this.window };
        const sparqleeConfig = Object.assign({}, bus_query_operation_1.ActorQueryOperation.getExpressionContext(context));
        let { bindingsStream } = output;
        // Sorting backwards since the first one is the most important therefore should be ordered last.
        for (let i = pattern.expressions.length - 1; i >= 0; i--) {
            let expr = pattern.expressions[i];
            const isAscending = this.isAscending(expr);
            expr = this.extractSortExpression(expr);
            // Transform the stream by annotating it with the expr result
            const evaluator = new sparqlee_1.AsyncEvaluator(expr, sparqleeConfig);
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            const transform = async (bindings, next, push) => {
                try {
                    const result = await evaluator.evaluate(bindings);
                    push({ bindings, result });
                }
                catch (error) {
                    if (!sparqlee_1.isExpressionError(error)) {
                        bindingsStream.emit('error', error);
                    }
                    push({ bindings, result: undefined });
                }
                next();
            };
            const transformedStream = bindingsStream.transform({ transform });
            // Sort the annoted stream
            const sortedStream = new SortIterator_1.SortIterator(transformedStream, (left, right) => sparqlee_1.orderTypes(left.result, right.result, isAscending), options);
            // Remove the annotation
            bindingsStream = sortedStream.map(({ bindings, result }) => bindings);
        }
        return {
            type: 'bindings',
            bindingsStream,
            metadata: output.metadata,
            variables: output.variables,
            canContainUndefs: output.canContainUndefs,
        };
    }
    // Remove descending operator if necessary
    extractSortExpression(expr) {
        const { expressionType, operator } = expr;
        if (expressionType !== sparqlalgebrajs_1.Algebra.expressionTypes.OPERATOR) {
            return expr;
        }
        return operator === 'desc' ?
            expr.args[0] :
            expr;
    }
    isAscending(expr) {
        const { expressionType, operator } = expr;
        if (expressionType !== sparqlalgebrajs_1.Algebra.expressionTypes.OPERATOR) {
            return true;
        }
        return operator !== 'desc';
    }
}
exports.ActorQueryOperationOrderBySparqlee = ActorQueryOperationOrderBySparqlee;
//# sourceMappingURL=ActorQueryOperationOrderBySparqlee.js.map

/***/ }),

/***/ 3159:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SortIterator = void 0;
const asynciterator_1 = __webpack_require__(7400);
// Based on https://github.com/LinkedDataFragments/Client.js/blob/master/lib/sparql/SortIterator.js
class SortIterator extends asynciterator_1.TransformIterator {
    constructor(source, sort, options) {
        super(source, options);
        // The `window` parameter indicates the length of the sliding window to apply sorting
        const window = options && options.window;
        this.windowLength = Number.isFinite(window) && window > 0 ? window : Infinity;
        this.sort = sort;
        this.sorted = [];
    }
    // Reads the smallest item in the current sorting window
    _read(count, done) {
        let item;
        let { length } = this.sorted;
        // Try to read items until we reach the desired window length
        while (length !== this.windowLength) {
            item = this.source.read();
            if (item === null) {
                break;
            }
            // Insert the item in the sorted window (smallest last)
            let left = 0;
            let right = length - 1;
            let mid;
            let order;
            while (left <= right) {
                mid = Math.trunc((left + right) / 2);
                order = this.sort(item, this.sorted[mid]);
                if (order < 0) {
                    left = mid + 1;
                }
                else if (order > 0) {
                    right = mid - 1;
                }
                else {
                    left = mid;
                    right = -1;
                }
            }
            this.sorted.splice(left, 0, item);
            length++;
        }
        // Push the smallest item in the window
        if (length === this.windowLength) {
            this._push(this.sorted.pop());
        }
        done();
    }
    // Flushes remaining data after the source has ended
    _flush(done) {
        let { length } = this.sorted;
        while (length--) {
            this._push(this.sorted.pop());
        }
        done();
    }
}
exports.SortIterator = SortIterator;
//# sourceMappingURL=SortIterator.js.map

/***/ }),

/***/ 540:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2663), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2663:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathAlt = void 0;
const actor_abstract_path_1 = __webpack_require__(9400);
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path Alt Query Operation Actor.
 */
class ActorQueryOperationPathAlt extends actor_abstract_path_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.ALT);
    }
    async runOperation(path, context) {
        const predicate = path.predicate;
        const subOperations = (await Promise.all([
            this.mediatorQueryOperation.mediate({
                context,
                operation: actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.subject, predicate.left, path.object, path.graph),
            }),
            this.mediatorQueryOperation.mediate({
                context,
                operation: actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.subject, predicate.right, path.object, path.graph),
            }),
        ])).map(op => bus_query_operation_1.ActorQueryOperation.getSafeBindings(op));
        const bindingsStream = new asynciterator_1.UnionIterator(subOperations.map(op => op.bindingsStream), { autoStart: false });
        const variables = [].concat
            .apply([], subOperations.map(op => op.variables));
        return { type: 'bindings', bindingsStream, variables: [...new Set(variables)], canContainUndefs: false };
    }
}
exports.ActorQueryOperationPathAlt = ActorQueryOperationPathAlt;
//# sourceMappingURL=ActorQueryOperationPathAlt.js.map

/***/ }),

/***/ 9986:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8087), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8087:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathInv = void 0;
const actor_abstract_path_1 = __webpack_require__(9400);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path Inv Query Operation Actor.
 */
class ActorQueryOperationPathInv extends actor_abstract_path_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.INV);
    }
    async runOperation(path, context) {
        const predicate = path.predicate;
        const invPath = actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.object, predicate.path, path.subject, path.graph);
        return this.mediatorQueryOperation.mediate({ operation: invPath, context });
    }
}
exports.ActorQueryOperationPathInv = ActorQueryOperationPathInv;
//# sourceMappingURL=ActorQueryOperationPathInv.js.map

/***/ }),

/***/ 7667:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4176), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4176:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathLink = void 0;
const actor_abstract_path_1 = __webpack_require__(9400);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path Link Query Operation Actor.
 */
class ActorQueryOperationPathLink extends actor_abstract_path_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.LINK);
    }
    async runOperation(path, context) {
        const predicate = path.predicate;
        const operation = actor_abstract_path_1.ActorAbstractPath.FACTORY.createPattern(path.subject, predicate.iri, path.object, path.graph);
        return this.mediatorQueryOperation.mediate({ operation, context });
    }
}
exports.ActorQueryOperationPathLink = ActorQueryOperationPathLink;
//# sourceMappingURL=ActorQueryOperationPathLink.js.map

/***/ }),

/***/ 8030:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6777), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathNps = void 0;
const actor_abstract_path_1 = __webpack_require__(9400);
const bus_query_operation_1 = __webpack_require__(7213);
const rdf_string_1 = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path Nps Query Operation Actor.
 */
class ActorQueryOperationPathNps extends actor_abstract_path_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.NPS);
    }
    async runOperation(path, context) {
        const predicate = path.predicate;
        const blank = this.generateVariable(path);
        const blankName = rdf_string_1.termToString(blank);
        const pattern = actor_abstract_path_1.ActorAbstractPath.FACTORY.createPattern(path.subject, blank, path.object, path.graph);
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: pattern, context }));
        // Remove the generated blank nodes from the bindings
        const bindingsStream = output.bindingsStream.transform({
            filter(bindings) {
                return !predicate.iris.some(iri => iri.equals(bindings.get(blankName)));
            },
            transform(item, next, push) {
                push(item.delete(blankName));
                next();
            },
        });
        return { type: 'bindings', bindingsStream, variables: output.variables, canContainUndefs: false };
    }
}
exports.ActorQueryOperationPathNps = ActorQueryOperationPathNps;
//# sourceMappingURL=ActorQueryOperationPathNps.js.map

/***/ }),

/***/ 1828:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1953), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1953:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathOneOrMore = void 0;
const actor_abstract_path_1 = __webpack_require__(9400);
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path OneOrMore Query Operation Actor.
 */
class ActorQueryOperationPathOneOrMore extends actor_abstract_path_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.ONE_OR_MORE_PATH);
    }
    async runOperation(path, context) {
        const distinct = await this.isPathArbitraryLengthDistinct(context, path);
        if (distinct.operation) {
            return distinct.operation;
        }
        context = distinct.context;
        const predicate = path.predicate;
        const sVar = path.subject.termType === 'Variable';
        const oVar = path.object.termType === 'Variable';
        const gVar = path.graph.termType === 'Variable';
        if (!sVar && oVar) {
            // Get all the results of applying this once, then do zeroOrMore for those
            const single = actor_abstract_path_1.ActorAbstractPath.FACTORY.createDistinct(actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.subject, predicate.path, path.object, path.graph));
            const results = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ context, operation: single }));
            const objectString = rdf_string_1.termToString(path.object);
            // All branches need to share the same termHashes to prevent duplicates
            const termHashes = {};
            const bindingsStream = new asynciterator_1.MultiTransformIterator(results.bindingsStream, {
                multiTransform: (bindings) => {
                    const val = bindings.get(objectString);
                    const graph = gVar ? bindings.get(rdf_string_1.termToString(path.graph)) : path.graph;
                    return new asynciterator_1.TransformIterator(async () => {
                        const it = new asynciterator_1.BufferedIterator();
                        await this.getObjectsPredicateStar(val, predicate.path, path.graph, context, termHashes, it, { count: 0 });
                        return it.transform({
                            transform(item, next, push) {
                                let binding = bus_query_operation_1.Bindings({ [objectString]: item });
                                if (gVar) {
                                    binding = binding.set(rdf_string_1.termToString(path.graph), graph);
                                }
                                push(binding);
                                next();
                            },
                        });
                    }, { maxBufferSize: 128 });
                },
                autoStart: false,
            });
            const variables = gVar ? [objectString, rdf_string_1.termToString(path.graph)] : [objectString];
            return { type: 'bindings', bindingsStream, variables, canContainUndefs: false };
        }
        if (sVar && oVar) {
            // Get all the results of subjects with same predicate, but once, then fill in first variable for those
            const single = actor_abstract_path_1.ActorAbstractPath.FACTORY.createDistinct(actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.subject, path.predicate.path, path.object, path.graph));
            const results = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ context, operation: single }));
            const subjectString = rdf_string_1.termToString(path.subject);
            const objectString = rdf_string_1.termToString(path.object);
            const termHashes = {};
            const bindingsStream = new asynciterator_1.MultiTransformIterator(results.bindingsStream, {
                multiTransform: (bindings) => {
                    const subject = bindings.get(subjectString);
                    const object = bindings.get(objectString);
                    const graph = gVar ? bindings.get(rdf_string_1.termToString(path.graph)) : path.graph;
                    return new asynciterator_1.TransformIterator(async () => {
                        const it = new asynciterator_1.BufferedIterator();
                        await this.getSubjectAndObjectBindingsPredicateStar(subjectString, objectString, subject, object, predicate.path, graph, context, termHashes, {}, it, { count: 0 });
                        return it.transform({
                            transform(item, next, push) {
                                if (gVar) {
                                    item = item.set(rdf_string_1.termToString(path.graph), graph);
                                }
                                push(item);
                                next();
                            },
                        });
                    }, { maxBufferSize: 128 });
                },
                autoStart: false,
            });
            const variables = gVar ?
                [subjectString, objectString, rdf_string_1.termToString(path.graph)] :
                [subjectString, objectString];
            return { type: 'bindings', bindingsStream, variables, canContainUndefs: false };
        }
        if (sVar && !oVar) {
            return this.mediatorQueryOperation.mediate({
                context,
                operation: actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.object, actor_abstract_path_1.ActorAbstractPath.FACTORY.createOneOrMorePath(actor_abstract_path_1.ActorAbstractPath.FACTORY.createInv(predicate.path)), path.subject, path.graph),
            });
        }
        // If (!sVar && !oVar)
        const variable = this.generateVariable();
        const vString = rdf_string_1.termToString(variable);
        const results = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({
            context,
            operation: actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.subject, predicate, variable, path.graph),
        }));
        const bindingsStream = results.bindingsStream.transform({
            filter: item => item.get(vString).equals(path.object),
            transform(item, next, push) {
                const binding = gVar ?
                    bus_query_operation_1.Bindings({ [rdf_string_1.termToString(path.graph)]: item.get(rdf_string_1.termToString(path.graph)) }) :
                    bus_query_operation_1.Bindings({});
                push(binding);
                next();
            },
        });
        return {
            type: 'bindings',
            bindingsStream,
            variables: gVar ? [rdf_string_1.termToString(path.graph)] : [],
            canContainUndefs: false,
        };
    }
}
exports.ActorQueryOperationPathOneOrMore = ActorQueryOperationPathOneOrMore;
//# sourceMappingURL=ActorQueryOperationPathOneOrMore.js.map

/***/ }),

/***/ 2687:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6606), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathSeq = void 0;
const actor_abstract_path_1 = __webpack_require__(9400);
const bus_query_operation_1 = __webpack_require__(7213);
const rdf_string_1 = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path Seq Query Operation Actor.
 */
class ActorQueryOperationPathSeq extends actor_abstract_path_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.SEQ);
    }
    async runOperation(path, context) {
        const predicate = path.predicate;
        const variable = this.generateVariable(path);
        const varName = rdf_string_1.termToString(variable);
        const subOperations = (await Promise.all([
            this.mediatorQueryOperation.mediate({
                context, operation: actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(path.subject, predicate.left, variable, path.graph),
            }),
            this.mediatorQueryOperation.mediate({
                context, operation: actor_abstract_path_1.ActorAbstractPath.FACTORY.createPath(variable, predicate.right, path.object, path.graph),
            }),
        ])).map(op => bus_query_operation_1.ActorQueryOperation.getSafeBindings(op));
        const join = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorJoin.mediate({ entries: subOperations }));
        // Remove the generated variable from the bindings
        const bindingsStream = join.bindingsStream.transform({
            transform(item, next, push) {
                push(item.delete(varName));
                next();
            },
        });
        // Remove the generated variable from the list of variables
        const variables = join.variables;
        const indexOfVar = variables.indexOf(varName);
        variables.splice(indexOfVar, 1);
        return { type: 'bindings', bindingsStream, variables, canContainUndefs: false };
    }
}
exports.ActorQueryOperationPathSeq = ActorQueryOperationPathSeq;
//# sourceMappingURL=ActorQueryOperationPathSeq.js.map

/***/ }),

/***/ 5665:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7957), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathZeroOrMore = void 0;
const actor_abstract_path_1 = __webpack_require__(9400);
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path ZeroOrMore Query Operation Actor.
 */
class ActorQueryOperationPathZeroOrMore extends actor_abstract_path_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.ZERO_OR_MORE_PATH);
    }
    async runOperation(path, context) {
        const distinct = await this.isPathArbitraryLengthDistinct(context, path);
        if (distinct.operation) {
            return distinct.operation;
        }
        context = distinct.context;
        const predicate = path.predicate;
        const sVar = path.subject.termType === 'Variable';
        const oVar = path.object.termType === 'Variable';
        const gVar = path.graph.termType === 'Variable';
        if (sVar && oVar) {
            // Query ?s ?p ?o, to get all possible namedNodes in de the db
            const predVar = this.generateVariable(path);
            const single = actor_abstract_path_1.ActorAbstractPath.FACTORY.createPattern(path.subject, predVar, path.object, path.graph);
            const results = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ context, operation: single }));
            const subjectString = rdf_string_1.termToString(path.subject);
            const objectString = rdf_string_1.termToString(path.object);
            // Set with all namedNodes we have already started a predicate* search from
            const entities = new Set();
            const termHashes = {};
            const bindingsStream = new asynciterator_1.MultiTransformIterator(results.bindingsStream, {
                multiTransform: (bindings) => {
                    // Get the subject and object of the triples (?s ?p ?o) and extract graph if it was a variable
                    const subject = bindings.get(subjectString);
                    const object = bindings.get(objectString);
                    const graph = gVar ? bindings.get(rdf_string_1.termToString(path.graph)) : path.graph;
                    // Make a hash of namedNode + graph to remember from where we already started a search
                    const subjectGraphHash = rdf_string_1.termToString(subject) + rdf_string_1.termToString(graph);
                    const objectGraphHash = rdf_string_1.termToString(object) + rdf_string_1.termToString(graph);
                    return new asynciterator_1.TransformIterator(async () => {
                        // If no new namedNodes in this triple, return nothing
                        if (entities.has(subjectGraphHash) && entities.has(objectGraphHash)) {
                            return new asynciterator_1.EmptyIterator();
                        }
                        // Set up an iterator to which getSubjectAndObjectBindingsPredicateStar will push solutions
                        const it = new asynciterator_1.BufferedIterator();
                        const counter = { count: 0 };
                        // If not started from this namedNode (subject in triple) in this graph, start a search
                        if (!entities.has(subjectGraphHash)) {
                            entities.add(subjectGraphHash);
                            await this.getSubjectAndObjectBindingsPredicateStar(subjectString, objectString, subject, subject, predicate.path, graph, context, termHashes, {}, it, counter);
                        }
                        // If not started from this namedNode (object in triple) in this graph, start a search
                        if (!entities.has(objectGraphHash)) {
                            entities.add(objectGraphHash);
                            await this.getSubjectAndObjectBindingsPredicateStar(subjectString, objectString, object, object, predicate.path, graph, context, termHashes, {}, it, counter);
                        }
                        return it.transform({
                            transform(item, next, push) {
                                // If the graph was a variable, fill in it's binding (we got it from the ?s ?p ?o binding)
                                if (gVar) {
                                    item = item.set(rdf_string_1.termToString(path.graph), graph);
                                }
                                push(item);
                                next();
                            },
                        });
                    });
                },
            });
            const variables = gVar ?
                [subjectString, objectString, rdf_string_1.termToString(path.graph)] :
                [subjectString, objectString];
            return { type: 'bindings', bindingsStream, variables, canContainUndefs: false };
        }
        if (!sVar && !oVar) {
            const variable = this.generateVariable();
            const bindingsStream = (await this.getObjectsPredicateStarEval(path.subject, variable, predicate.path, path.graph, context))
                .transform({
                filter: item => item.get(rdf_string_1.termToString(variable)).equals(path.object),
                transform(item, next, push) {
                    // Return graph binding if graph was a variable, otherwise empty binding
                    const binding = gVar ?
                        bus_query_operation_1.Bindings({ [rdf_string_1.termToString(path.graph)]: item.get(rdf_string_1.termToString(path.graph)) }) :
                        bus_query_operation_1.Bindings({});
                    push(binding);
                    next();
                },
            });
            return {
                type: 'bindings',
                bindingsStream,
                variables: gVar ? [rdf_string_1.termToString(path.graph)] : [],
                canContainUndefs: false,
            };
        }
        // If (sVar || oVar)
        const subject = sVar ? path.object : path.subject;
        const value = (sVar ? path.subject : path.object);
        const pred = sVar ? actor_abstract_path_1.ActorAbstractPath.FACTORY.createInv(predicate.path) : predicate.path;
        const bindingsStream = (await this.getObjectsPredicateStarEval(subject, value, pred, path.graph, context))
            .transform({
            transform(item, next, push) {
                push(item);
                next();
            },
        });
        const variables = gVar ? [rdf_string_1.termToString(value), rdf_string_1.termToString(path.graph)] : [rdf_string_1.termToString(value)];
        return { type: 'bindings', bindingsStream, variables, canContainUndefs: false };
    }
}
exports.ActorQueryOperationPathZeroOrMore = ActorQueryOperationPathZeroOrMore;
//# sourceMappingURL=ActorQueryOperationPathZeroOrMore.js.map

/***/ }),

/***/ 7521:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3273), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationPathZeroOrOne = void 0;
const ActorAbstractPath_1 = __webpack_require__(8248);
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A comunica Path ZeroOrOne Query Operation Actor.
 */
class ActorQueryOperationPathZeroOrOne extends ActorAbstractPath_1.ActorAbstractPath {
    constructor(args) {
        super(args, sparqlalgebrajs_1.Algebra.types.ZERO_OR_ONE_PATH);
    }
    async runOperation(path, context) {
        const predicate = path.predicate;
        const sVar = path.subject.termType === 'Variable';
        const oVar = path.object.termType === 'Variable';
        const extra = [];
        // Both subject and object non-variables
        if (!sVar && !oVar) {
            if (path.subject.equals(path.object)) {
                return {
                    type: 'bindings',
                    bindingsStream: new asynciterator_1.SingletonIterator(bus_query_operation_1.Bindings({})),
                    variables: [],
                    canContainUndefs: false,
                };
            }
        }
        if (sVar && oVar) {
            throw new Error('ZeroOrOne path expressions with 2 variables not supported yet');
        }
        const distinct = await this.isPathArbitraryLengthDistinct(context, path);
        if (distinct.operation) {
            return distinct.operation;
        }
        context = distinct.context;
        if (sVar) {
            extra.push(bus_query_operation_1.Bindings({ [rdf_string_1.termToString(path.subject)]: path.object }));
        }
        if (oVar) {
            extra.push(bus_query_operation_1.Bindings({ [rdf_string_1.termToString(path.object)]: path.subject }));
        }
        const single = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({
            context,
            operation: ActorAbstractPath_1.ActorAbstractPath.FACTORY.createPath(path.subject, predicate.path, path.object, path.graph),
        }));
        const bindingsStream = single.bindingsStream.prepend(extra);
        return { type: 'bindings', bindingsStream, variables: single.variables, canContainUndefs: false };
    }
}
exports.ActorQueryOperationPathZeroOrOne = ActorQueryOperationPathZeroOrOne;
//# sourceMappingURL=ActorQueryOperationPathZeroOrOne.js.map

/***/ }),

/***/ 651:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7164), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7164:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationProject = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const data_factory_1 = __webpack_require__(5093);
const rdf_data_factory_1 = __webpack_require__(3623);
const rdf_string_1 = __webpack_require__(2086);
const DF = new rdf_data_factory_1.DataFactory();
/**
 * A comunica Project Query Operation Actor.
 */
class ActorQueryOperationProject extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'project');
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        // Resolve the input
        const output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: pattern.input, context }));
        // Find all variables that should be deleted from the input stream.
        const variables = pattern.variables.map(x => rdf_string_1.termToString(x));
        const deleteVariables = output.variables.filter(variable => !variables.includes(variable));
        // Error if there are variables that are not bound in the input stream.
        const missingVariables = variables.filter(variable => !output.variables.includes(variable));
        if (missingVariables.length > 0) {
            throw new Error(`Variables '${missingVariables}' are used in the projection result, but are not assigned.`);
        }
        // Make sure the project variables are the only variables that are present in the bindings.
        let bindingsStream = deleteVariables.length === 0 ?
            output.bindingsStream :
            output.bindingsStream.transform({
                map(bindings) {
                    for (const deleteVariable of deleteVariables) {
                        bindings = bindings.delete(deleteVariable);
                    }
                    return bindings;
                },
                autoStart: false,
            });
        // Make sure that blank nodes with same labels are not reused over different bindings, as required by SPARQL 1.1.
        // Required for the BNODE() function: https://www.w3.org/TR/sparql11-query/#func-bnode
        // When we have a scoped blank node, make sure the skolemized value is maintained.
        let blankNodeCounter = 0;
        bindingsStream = bindingsStream.transform({
            map(bindings) {
                blankNodeCounter++;
                return bindings.map(term => {
                    if (term && term.termType === 'BlankNode') {
                        if (term instanceof data_factory_1.BlankNodeScoped) {
                            return new data_factory_1.BlankNodeScoped(`${term.value}${blankNodeCounter}`, term.skolemized);
                        }
                        return DF.blankNode(`${term.value}${blankNodeCounter}`);
                    }
                    return term;
                });
            },
            autoStart: false,
        });
        return {
            type: 'bindings',
            bindingsStream,
            metadata: output.metadata,
            variables,
            canContainUndefs: output.canContainUndefs,
        };
    }
}
exports.ActorQueryOperationProject = ActorQueryOperationProject;
//# sourceMappingURL=ActorQueryOperationProject.js.map

/***/ }),

/***/ 8010:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5977), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5977:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationQuadpattern = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
const rdf_terms_1 = __webpack_require__(1234);
/**
 * A comunica actor for handling 'quadpattern' query operations.
 */
class ActorQueryOperationQuadpattern extends bus_query_operation_1.ActorQueryOperationTyped {
    constructor(args) {
        super(args, 'pattern');
    }
    /**
     * Check if a term is a variable.
     * @param {RDF.Term} term An RDF term.
     * @return {any} If the term is a variable or blank node.
     */
    static isTermVariable(term) {
        return term.termType === 'Variable';
    }
    /**
     * Get all variables in the given pattern.
     * No duplicates are returned.
     * @param {RDF.BaseQuad} pattern A quad pattern.
     * @return {string[]} The variables in this pattern, with '?' prefix.
     */
    static getVariables(pattern) {
        return rdf_terms_1.uniqTerms(rdf_terms_1.getTerms(pattern)
            .filter(ActorQueryOperationQuadpattern.isTermVariable))
            .map(x => rdf_string_1.termToString(x));
    }
    /**
     * A helper function to find a hash with quad elements that have duplicate variables.
     *
     * @param {RDF.Quad} pattern A quad pattern.
     *
     * @return {{[p: string]: string[]}} If no equal variable names are present in the four terms, this returns undefined.
     *                                   Otherwise, this maps quad elements ('subject', 'predicate', 'object', 'graph')
     *                                   to the list of quad elements it shares a variable name with.
     *                                   If no links for a certain element exist, this element will
     *                                   not be included in the hash.
     *                                   Note 1: Quad elements will never have a link to themselves.
     *                                           So this can never occur: { subject: [ 'subject'] },
     *                                           instead 'null' would be returned.
     *                                   Note 2: Links only exist in one direction,
     *                                           this means that { subject: [ 'predicate'], predicate: [ 'subject' ] }
     *                                           will not occur, instead only { subject: [ 'predicate'] }
     *                                           will be returned.
     */
    static getDuplicateElementLinks(pattern) {
        // Collect a variable to quad elements mapping.
        const variableElements = {};
        let duplicateVariables = false;
        for (const key of rdf_terms_1.QUAD_TERM_NAMES) {
            if (pattern[key].termType === 'Variable') {
                const val = rdf_string_1.termToString(pattern[key]);
                const length = (variableElements[val] || (variableElements[val] = [])).push(key);
                duplicateVariables = duplicateVariables || length > 1;
            }
        }
        if (!duplicateVariables) {
            return;
        }
        // Collect quad element to elements with equal variables mapping.
        const duplicateElementLinks = {};
        for (const variable in variableElements) {
            const elements = variableElements[variable];
            const remainingElements = elements.slice(1);
            // Only store the elements that have at least one equal element.
            if (remainingElements.length > 0) {
                duplicateElementLinks[elements[0]] = remainingElements;
            }
        }
        return duplicateElementLinks;
    }
    /**
     * Get the metadata of the given action on a quad stream.
     *
     * @param {AsyncIterator<Quad>} data The data stream that is guaranteed to emit the metadata property.
     * @return {() => Promise<{[p: string]: any}>} A lazy promise behind a callback resolving to a metadata object.
     */
    static getMetadata(data) {
        return () => new Promise((resolve, reject) => {
            data.getProperty('metadata', (metadata) => resolve(metadata));
            data.on('error', reject);
        });
    }
    async testOperation(operation, context) {
        return true;
    }
    async runOperation(pattern, context) {
        // Apply the (optional) pattern-specific context
        if (pattern.context) {
            context = context ? context.merge(pattern.context) : pattern.context;
        }
        // Resolve the quad pattern
        const result = await this.mediatorResolveQuadPattern.mediate({ pattern, context });
        // Collect all variables from the pattern
        const variables = ActorQueryOperationQuadpattern.getVariables(pattern);
        // Create the metadata callback
        const metadata = ActorQueryOperationQuadpattern.getMetadata(result.data);
        // Convenience datastructure for mapping quad elements to variables
        const elementVariables = rdf_terms_1.reduceTerms(pattern, (acc, term, key) => {
            if (ActorQueryOperationQuadpattern.isTermVariable(term)) {
                acc[key] = rdf_string_1.termToString(term);
            }
            return acc;
        }, {});
        const quadBindingsReducer = (acc, term, key) => {
            const variable = elementVariables[key];
            if (variable) {
                acc[variable] = term;
            }
            return acc;
        };
        // Optionally filter, and construct bindings
        const bindingsStream = new asynciterator_1.TransformIterator(async () => {
            let filteredOutput = result.data;
            // Detect duplicate variables in the pattern
            const duplicateElementLinks = ActorQueryOperationQuadpattern
                .getDuplicateElementLinks(pattern);
            // If there are duplicate variables in the search pattern,
            // make sure that we filter out the triples that don't have equal values for those triple elements,
            // as QPF ignores variable names.
            if (duplicateElementLinks) {
                filteredOutput = filteredOutput.filter(quad => {
                    // No need to check the graph, because an equal element already would have to be found in s, p, or o.
                    for (const element1 of rdf_terms_1.TRIPLE_TERM_NAMES) {
                        for (const element2 of duplicateElementLinks[element1] || []) {
                            if (!quad[element1].equals(quad[element2])) {
                                return false;
                            }
                        }
                    }
                    return true;
                });
            }
            return filteredOutput.map(quad => bus_query_operation_1.Bindings(rdf_terms_1.reduceTerms(quad, quadBindingsReducer, {})), { autoStart: true, maxBufferSize: 128 });
        }, { autoStart: false });
        return { type: 'bindings', bindingsStream, variables, metadata, canContainUndefs: false };
    }
}
exports.ActorQueryOperationQuadpattern = ActorQueryOperationQuadpattern;
//# sourceMappingURL=ActorQueryOperationQuadpattern.js.map

/***/ }),

/***/ 6790:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5921), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5921:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationReducedHash = void 0;
const actor_abstract_bindings_hash_1 = __webpack_require__(3828);
const LRU = __webpack_require__(9593);
/**
 * A comunica Reduced Hash Query Operation Actor.
 */
class ActorQueryOperationReducedHash extends actor_abstract_bindings_hash_1.AbstractBindingsHash {
    constructor(args) {
        super(args, 'reduced');
    }
    /**
     * Create a new distinct filter function for the given hash algorithm and digest algorithm.
     * This will maintain an internal hash datastructure so that every bindings object only returns true once.
     * @return {(bindings: Bindings) => boolean} A distinct filter for bindings.
     */
    newHashFilter() {
        const hashes = new LRU({ max: this.cacheSize });
        return (bindings) => {
            const hash = actor_abstract_bindings_hash_1.AbstractFilterHash.hash(bindings);
            return !hashes.has(hash) && hashes.set(hash, true);
        };
    }
}
exports.ActorQueryOperationReducedHash = ActorQueryOperationReducedHash;
//# sourceMappingURL=ActorQueryOperationReducedHash.js.map

/***/ }),

/***/ 2885:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2063), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2063:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationService = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const bus_rdf_resolve_quad_pattern_1 = __webpack_require__(8575);
const core_1 = __webpack_require__(1709);
const asynciterator_1 = __webpack_require__(7400);
/**
 * A comunica Service Query Operation Actor.
 * It unwraps the SERVICE operation and executes it on the given source.
 */
class ActorQueryOperationService extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'service');
    }
    async testOperation(pattern, context) {
        if (pattern.name.termType !== 'NamedNode') {
            throw new Error(`${this.name} can only query services by IRI, while a ${pattern.name.termType} was given.`);
        }
        return true;
    }
    async runOperation(pattern, context) {
        const endpoint = pattern.name.value;
        // Adjust our context to only have the endpoint as source
        context = context || core_1.ActionContext({});
        let subContext = context.delete(bus_rdf_resolve_quad_pattern_1.KEY_CONTEXT_SOURCE).delete(bus_rdf_resolve_quad_pattern_1.KEY_CONTEXT_SOURCES);
        const sourceType = this.forceSparqlEndpoint ? 'sparql' : 'auto';
        subContext = subContext.set(bus_rdf_resolve_quad_pattern_1.KEY_CONTEXT_SOURCES, [{ type: sourceType, value: endpoint }]);
        // Query the source
        let output;
        try {
            output = bus_query_operation_1.ActorQueryOperation.getSafeBindings(await this.mediatorQueryOperation.mediate({ operation: pattern.input, context: subContext }));
        }
        catch (error) {
            if (pattern.silent) {
                // Emit a single empty binding
                output = {
                    bindingsStream: new asynciterator_1.SingletonIterator(bus_query_operation_1.Bindings({})),
                    type: 'bindings',
                    variables: [],
                    canContainUndefs: false,
                };
            }
            else {
                throw error;
            }
        }
        return output;
    }
}
exports.ActorQueryOperationService = ActorQueryOperationService;
//# sourceMappingURL=ActorQueryOperationService.js.map

/***/ }),

/***/ 2299:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3078), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationSlice = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
/**
 * A comunica Slice Query Operation Actor.
 */
class ActorQueryOperationSlice extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'slice');
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        // Resolve the input
        const output = await this.mediatorQueryOperation
            .mediate({ operation: pattern.input, context });
        const metadata = this.sliceMetadata(output, pattern);
        if (output.type === 'bindings') {
            const bindingsOutput = output;
            const bindingsStream = this.sliceStream(bindingsOutput.bindingsStream, pattern);
            return {
                type: 'bindings',
                bindingsStream,
                metadata,
                variables: bindingsOutput.variables,
                canContainUndefs: bindingsOutput.canContainUndefs,
            };
        }
        if (output.type === 'quads') {
            const quadOutput = output;
            const quadStream = this.sliceStream(quadOutput.quadStream, pattern);
            return { type: 'quads', quadStream, metadata };
        }
        throw new Error(`Invalid query output type: Expected 'bindings' or 'quads' but got '${output.type}'`);
    }
    // Slice the stream based on the pattern values
    sliceStream(stream, pattern) {
        const hasLength = Boolean(pattern.length) || pattern.length === 0;
        const { start } = pattern;
        const end = hasLength ? pattern.start + pattern.length - 1 : Infinity;
        return stream.transform({ offset: start, limit: Math.max(end - start + 1, 0), autoStart: false });
    }
    // If we find metadata, apply slicing on the total number of items
    sliceMetadata(output, pattern) {
        const hasLength = Boolean(pattern.length) || pattern.length === 0;
        return !output.metadata ?
            undefined :
            () => output.metadata()
                .then(subMetadata => {
                let { totalItems } = subMetadata;
                if (Number.isFinite(totalItems)) {
                    totalItems = Math.max(0, totalItems - pattern.start);
                    if (hasLength) {
                        totalItems = Math.min(totalItems, pattern.length);
                    }
                }
                return Object.assign(Object.assign({}, subMetadata), { totalItems });
            });
    }
}
exports.ActorQueryOperationSlice = ActorQueryOperationSlice;
//# sourceMappingURL=ActorQueryOperationSlice.js.map

/***/ }),

/***/ 5766:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4810), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4810:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationUnion = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
/**
 * A comunica Union Query Operation Actor.
 */
class ActorQueryOperationUnion extends bus_query_operation_1.ActorQueryOperationTypedMediated {
    constructor(args) {
        super(args, 'union');
    }
    /**
     * Takes the union of the given double array variables.
     * Uniqueness is guaranteed.
     * @param {string[][]} variables Double array of variables to take the union of.
     * @return {string[]} The union of the given variables.
     */
    static unionVariables(variables) {
        const withDuplicates = variables.reduce((acc, it) => [...acc, ...it], []);
        return [...new Set(withDuplicates)];
    }
    /**
     * Takes the union of the given metadata array.
     * It will ensure that the totalItems metadata value is properly calculated.
     * @param {{[p: string]: any}[]} metadatas Array of metadata.
     * @return {{[p: string]: any}} Union of the metadata.
     */
    static unionMetadata(metadatas) {
        let totalItems = 0;
        for (const metadata of metadatas) {
            if (metadata.totalItems && Number.isFinite(metadata.totalItems)) {
                totalItems += metadata.totalItems;
            }
            else {
                totalItems = Infinity;
                break;
            }
        }
        return { totalItems };
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        const outputs = (await Promise.all([
            this.mediatorQueryOperation.mediate({ operation: pattern.left, context }),
            this.mediatorQueryOperation.mediate({ operation: pattern.right, context }),
        ])).map(bus_query_operation_1.ActorQueryOperation.getSafeBindings);
        const bindingsStream = new asynciterator_1.UnionIterator(outputs.map((output) => output.bindingsStream), { autoStart: false });
        const metadata = outputs[0].metadata && outputs[1].metadata ?
            () => Promise.all([
                outputs[0].metadata(),
                outputs[1].metadata(),
            ]).then(ActorQueryOperationUnion.unionMetadata) :
            undefined;
        const variables = ActorQueryOperationUnion.unionVariables(outputs.map((output) => output.variables));
        const canContainUndefs = outputs.reduce((acc, val) => acc || val.canContainUndefs, false);
        return { type: 'bindings', bindingsStream, metadata, variables, canContainUndefs };
    }
}
exports.ActorQueryOperationUnion = ActorQueryOperationUnion;
//# sourceMappingURL=ActorQueryOperationUnion.js.map

/***/ }),

/***/ 963:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8374), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8374:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationValues = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const asynciterator_1 = __webpack_require__(7400);
const rdf_string_1 = __webpack_require__(2086);
/**
 * A comunica Values Query Operation Actor.
 */
class ActorQueryOperationValues extends bus_query_operation_1.ActorQueryOperationTyped {
    constructor(args) {
        super(args, 'values');
    }
    async testOperation(pattern, context) {
        return true;
    }
    async runOperation(pattern, context) {
        const bindingsStream = new asynciterator_1.ArrayIterator(pattern.bindings.map(x => bus_query_operation_1.Bindings(x)));
        const metadata = () => Promise.resolve({ totalItems: pattern.bindings.length });
        const variables = pattern.variables.map(x => rdf_string_1.termToString(x));
        const canContainUndefs = pattern.bindings.some(bindings => variables.some(variable => !(variable in bindings)));
        return { type: 'bindings', bindingsStream, metadata, variables, canContainUndefs };
    }
}
exports.ActorQueryOperationValues = ActorQueryOperationValues;
//# sourceMappingURL=ActorQueryOperationValues.js.map

/***/ }),

/***/ 6474:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9401), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfJoinMultiSmallest = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const bus_rdf_join_1 = __webpack_require__(2444);
/**
 * A Multi Smallest RDF Join Actor.
 * It accepts 3 or more streams, joins the smallest two, and joins the result with the remaining streams.
 */
class ActorRdfJoinMultiSmallest extends bus_rdf_join_1.ActorRdfJoin {
    constructor(args) {
        super(args, 3, true);
    }
    static getSmallestPatternId(totalItems) {
        let smallestId = -1;
        let smallestCount = Infinity;
        for (const [i, count] of totalItems.entries()) {
            if (count <= smallestCount) {
                smallestCount = count;
                smallestId = i;
            }
        }
        return smallestId;
    }
    async getOutput(action) {
        const entries = action.entries.slice();
        // Determine the two smallest streams by estimated count
        const entriesTotalItems = (await Promise.all(action.entries.map(x => bus_query_operation_1.getMetadata(x))))
            .map(metadata => 'totalItems' in metadata ? metadata.totalItems : Infinity);
        const smallestIndex1 = ActorRdfJoinMultiSmallest.getSmallestPatternId(entriesTotalItems);
        const smallestItem1 = entries.splice(smallestIndex1, 1)[0];
        const smallestCount1 = entriesTotalItems.splice(smallestIndex1, 1);
        const smallestIndex2 = ActorRdfJoinMultiSmallest.getSmallestPatternId(entriesTotalItems);
        const smallestItem2 = entries.splice(smallestIndex2, 1)[0];
        const smallestCount2 = entriesTotalItems.splice(smallestIndex2, 1);
        // Join the two selected streams, and then join the result with the remaining streams
        const firstEntry = await this.mediatorJoin.mediate({ entries: [smallestItem1, smallestItem2] });
        entries.push(firstEntry);
        return await this.mediatorJoin.mediate({ entries });
    }
    async getIterations(action) {
        return (await Promise.all(action.entries.map(x => bus_query_operation_1.getMetadata(x))))
            .reduce((acc, value) => acc * value.totalItems, 1);
    }
}
exports.ActorRdfJoinMultiSmallest = ActorRdfJoinMultiSmallest;
//# sourceMappingURL=ActorRdfJoinMultiSmallest.js.map

/***/ }),

/***/ 3836:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(2654), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfJoinNestedLoop = void 0;
const bus_query_operation_1 = __webpack_require__(7213);
const bus_rdf_join_1 = __webpack_require__(2444);
const asyncjoin_1 = __webpack_require__(9912);
/**
 * A comunica NestedLoop RDF Join Actor.
 */
class ActorRdfJoinNestedLoop extends bus_rdf_join_1.ActorRdfJoin {
    constructor(args) {
        super(args, 2, undefined, true);
    }
    async getOutput(action) {
        const join = new asyncjoin_1.NestedLoopJoin(action.entries[0].bindingsStream, action.entries[1].bindingsStream, bus_rdf_join_1.ActorRdfJoin.join, { autoStart: false });
        return {
            type: 'bindings',
            bindingsStream: join,
            variables: bus_rdf_join_1.ActorRdfJoin.joinVariables(action),
            canContainUndefs: action.entries.reduce((acc, val) => acc || val.canContainUndefs, false),
        };
    }
    async getIterations(action) {
        return (await bus_query_operation_1.getMetadata(action.entries[0])).totalItems * (await bus_query_operation_1.getMetadata(action.entries[1])).totalItems;
    }
}
exports.ActorRdfJoinNestedLoop = ActorRdfJoinNestedLoop;
//# sourceMappingURL=ActorRdfJoinNestedLoop.js.map

/***/ }),

/***/ 6328:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6638), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfParseHtmlMicrodata = void 0;
const bus_rdf_parse_html_1 = __webpack_require__(3688);
const microdata_rdf_streaming_parser_1 = __webpack_require__(3938);
/**
 * A comunica Microdata RDF Parse Html Actor.
 */
class ActorRdfParseHtmlMicrodata extends bus_rdf_parse_html_1.ActorRdfParseHtml {
    constructor(args) {
        super(args);
    }
    async test(action) {
        return true;
    }
    async run(action) {
        const mediaType = action.headers ? action.headers.get('content-type') : null;
        const xmlMode = mediaType === null || mediaType === void 0 ? void 0 : mediaType.includes('xml');
        const htmlParseListener = new microdata_rdf_streaming_parser_1.MicrodataRdfParser({ baseIRI: action.baseIRI, xmlMode });
        htmlParseListener.on('error', action.error);
        htmlParseListener.on('data', action.emit);
        const onTagEndOld = htmlParseListener.onEnd;
        htmlParseListener.onEnd = () => {
            onTagEndOld.call(htmlParseListener);
            action.end();
        };
        return { htmlParseListener };
    }
}
exports.ActorRdfParseHtmlMicrodata = ActorRdfParseHtmlMicrodata;
//# sourceMappingURL=ActorRdfParseHtmlMicrodata.js.map

/***/ }),

/***/ 4187:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9613), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfResolveHypermediaLinksNext = void 0;
const bus_rdf_resolve_hypermedia_links_1 = __webpack_require__(5413);
/**
 * A comunica Next RDF Resolve Hypermedia Links Actor.
 */
class ActorRdfResolveHypermediaLinksNext extends bus_rdf_resolve_hypermedia_links_1.ActorRdfResolveHypermediaLinks {
    constructor(args) {
        super(args);
    }
    async test(action) {
        if (!action.metadata.next) {
            throw new Error(`Actor ${this.name} requires a 'next' metadata entry.`);
        }
        return true;
    }
    async run(action) {
        return { urls: [action.metadata.next] };
    }
}
exports.ActorRdfResolveHypermediaLinksNext = ActorRdfResolveHypermediaLinksNext;
//# sourceMappingURL=ActorRdfResolveHypermediaLinksNext.js.map

/***/ }),

/***/ 598:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5112), exports);
__exportStar(__webpack_require__(5534), exports);
__exportStar(__webpack_require__(8568), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5112:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfResolveQuadPatternRdfJsSource = void 0;
const bus_rdf_resolve_quad_pattern_1 = __webpack_require__(8575);
const RdfJsQuadSource_1 = __webpack_require__(8568);
/**
 * A comunica RDFJS Source RDF Resolve Quad Pattern Actor.
 */
class ActorRdfResolveQuadPatternRdfJsSource extends bus_rdf_resolve_quad_pattern_1.ActorRdfResolveQuadPatternSource {
    constructor(args) {
        super(args);
    }
    async test(action) {
        if (!this.hasContextSingleSourceOfType('rdfjsSource', action.context)) {
            throw new Error(`${this.name} requires a single source with an rdfjsSource to be present in the context.`);
        }
        const source = this.getContextSource(action.context);
        if (!source || typeof source === 'string' || (!('match' in source) && !source.value.match)) {
            throw new Error(`${this.name} received an invalid rdfjsSource.`);
        }
        return true;
    }
    async getSource(context) {
        const source = this.getContextSource(context);
        return new RdfJsQuadSource_1.RdfJsQuadSource('match' in source ? source : source.value);
    }
}
exports.ActorRdfResolveQuadPatternRdfJsSource = ActorRdfResolveQuadPatternRdfJsSource;
//# sourceMappingURL=ActorRdfResolveQuadPatternRdfJsSource.js.map

/***/ }),

/***/ 5534:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=IRdfJsSourceExtended.js.map

/***/ }),

/***/ 8568:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RdfJsQuadSource = void 0;
const asynciterator_1 = __webpack_require__(7400);
/**
 * A quad source that wraps over an {@link RDF.Source}.
 */
class RdfJsQuadSource {
    constructor(source) {
        this.source = source;
    }
    static nullifyVariables(term) {
        return !term || term.termType === 'Variable' ? undefined : term;
    }
    match(subject, predicate, object, graph) {
        // Create an async iterator from the matched quad stream
        const rawStream = this.source.match(RdfJsQuadSource.nullifyVariables(subject), RdfJsQuadSource.nullifyVariables(predicate), RdfJsQuadSource.nullifyVariables(object), RdfJsQuadSource.nullifyVariables(graph));
        const it = asynciterator_1.wrap(rawStream, { autoStart: false });
        // Determine metadata
        this.setMetadata(it, subject, predicate, object, graph)
            .catch(error => it.destroy(error));
        return it;
    }
    async setMetadata(it, subject, predicate, object, graph) {
        let totalItems;
        if (this.source.countQuads) {
            // If the source provides a dedicated method for determining cardinality, use that.
            totalItems = await this.source.countQuads(RdfJsQuadSource.nullifyVariables(subject), RdfJsQuadSource.nullifyVariables(predicate), RdfJsQuadSource.nullifyVariables(object), RdfJsQuadSource.nullifyVariables(graph));
        }
        else {
            // Otherwise, fallback to a sub-optimal alternative where we just call match again to count the quads.
            // WARNING: we can NOT reuse the original data stream here,
            // because we may loose data elements due to things happening async.
            let i = 0;
            totalItems = await new Promise((resolve, reject) => {
                const matches = this.source.match(RdfJsQuadSource.nullifyVariables(subject), RdfJsQuadSource.nullifyVariables(predicate), RdfJsQuadSource.nullifyVariables(object), RdfJsQuadSource.nullifyVariables(graph));
                matches.on('error', reject);
                matches.on('end', () => resolve(i));
                matches.on('data', () => i++);
            });
        }
        it.setProperty('metadata', { totalItems });
    }
}
exports.RdfJsQuadSource = RdfJsQuadSource;
//# sourceMappingURL=RdfJsQuadSource.js.map

/***/ }),

/***/ 7489:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4243), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4243:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfSerializeJsonLd = void 0;
const bus_rdf_serialize_1 = __webpack_require__(4264);
const jsonld_streaming_serializer_1 = __webpack_require__(3938);
/**
 * A comunica Jsonld RDF Serialize Actor.
 */
class ActorRdfSerializeJsonLd extends bus_rdf_serialize_1.ActorRdfSerializeFixedMediaTypes {
    constructor(args) {
        super(args);
    }
    async runHandle(action, mediaType, context) {
        const data = new jsonld_streaming_serializer_1.JsonLdSerializer({ space: ' '.repeat(this.jsonStringifyIndentSpaces) }).import(action.quadStream);
        return { data };
    }
}
exports.ActorRdfSerializeJsonLd = ActorRdfSerializeJsonLd;
//# sourceMappingURL=ActorRdfSerializeJsonLd.js.map

/***/ }),

/***/ 6051:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8070), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorSparqlParseAlgebra = void 0;
const bus_sparql_parse_1 = __webpack_require__(9725);
const sparqlalgebrajs_1 = __webpack_require__(6609);
const sparqljs_1 = __webpack_require__(5585);
/**
 * A comunica Algebra SPARQL Parse Actor.
 */
class ActorSparqlParseAlgebra extends bus_sparql_parse_1.ActorSparqlParse {
    constructor(args) {
        super(args);
        this.prefixes = Object.freeze(this.prefixes);
    }
    async test(action) {
        if (action.queryFormat && action.queryFormat !== 'sparql') {
            throw new Error('This actor can only parse SPARQL queries');
        }
        return true;
    }
    async run(action) {
        const parser = new sparqljs_1.Parser({ prefixes: this.prefixes, baseIRI: action.baseIRI });
        // Resets the identifier counter used for blank nodes
        // provides nicer and more consistent output if there are multiple calls
        parser._resetBlanks();
        const parsedSyntax = parser.parse(action.query);
        const baseIRI = parsedSyntax.type === 'query' ? parsedSyntax.base : undefined;
        return {
            baseIRI,
            operation: sparqlalgebrajs_1.translate(parsedSyntax, { quads: true, prefixes: this.prefixes, blankToVariable: true, baseIRI: action.baseIRI }),
        };
    }
}
exports.ActorSparqlParseAlgebra = ActorSparqlParseAlgebra;
//# sourceMappingURL=ActorSparqlParseAlgebra.js.map

/***/ }),

/***/ 1965:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8569), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorSparqlSerializeSparqlCsv = void 0;
const stream_1 = __webpack_require__(3938);
const bus_sparql_serialize_1 = __webpack_require__(8432);
/**
 * A comunica SPARQL CSV SPARQL Serialize Actor.
 */
class ActorSparqlSerializeSparqlCsv extends bus_sparql_serialize_1.ActorSparqlSerializeFixedMediaTypes {
    constructor(args) {
        super(args);
    }
    /**
     * Converts an RDF term to its CSV representation.
     * @param {RDF.Term} value An RDF term.
     * @return {string} A string representation of the given value.
     */
    static bindingToCsvBindings(value) {
        if (!value) {
            return '';
        }
        let stringValue = value.value;
        if (value.termType === 'Literal') {
            // This is a lossy representation, since language and datatype are not encoded in here.
            stringValue = `${stringValue}`;
        }
        else if (value.termType === 'BlankNode') {
            stringValue = `_:${stringValue}`;
        }
        else {
            stringValue = `<${stringValue}>`;
        }
        // If a value contains certain characters, put it between double quotes
        if (/[",\n\r]/u.exec(stringValue)) {
            // Within quote strings, " is written using a pair of quotation marks "".
            stringValue = `"${stringValue.replace(/"/gu, '""')}"`;
        }
        return stringValue;
    }
    async testHandleChecked(action, context) {
        if (action.type !== 'bindings') {
            throw new Error('This actor can only handle bindings streams.');
        }
        return true;
    }
    async runHandle(action, mediaType, context) {
        const bindingsAction = action;
        const data = new stream_1.Readable();
        data._read = () => {
            // Do nothing
        };
        // Write head
        data.push(`${bindingsAction.variables.map((variable) => variable.slice(1)).join(',')}\r\n`);
        // Write bindings
        bindingsAction.bindingsStream.on('error', (error) => {
            data.emit('error', error);
        });
        bindingsAction.bindingsStream.on('data', (bindings) => {
            data.push(`${bindingsAction.variables
                .map((key) => ActorSparqlSerializeSparqlCsv
                .bindingToCsvBindings(bindings.get(key)))
                .join(',')}\r\n`);
        });
        bindingsAction.bindingsStream.on('end', () => {
            data.push(null);
        });
        return { data };
    }
}
exports.ActorSparqlSerializeSparqlCsv = ActorSparqlSerializeSparqlCsv;
//# sourceMappingURL=ActorSparqlSerializeSparqlCsv.js.map

/***/ }),

/***/ 7941:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9703), exports);
__exportStar(__webpack_require__(1779), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9703:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorHttpInvalidate = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica actor for http-invalidate events.
 *
 * Actor types:
 * * Input:  IActionHttpInvalidate:      An action for invalidating the cached contents of given URL.
 * * Test:   <none>
 * * Output: IActorHttpInvalidateOutput: An empty response.
 *
 * @see IActionHttpInvalidate
 * @see IActorHttpInvalidateOutput
 */
class ActorHttpInvalidate extends core_1.Actor {
    constructor(args) {
        super(args);
    }
}
exports.ActorHttpInvalidate = ActorHttpInvalidate;
//# sourceMappingURL=ActorHttpInvalidate.js.map

/***/ }),

/***/ 1779:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorHttpInvalidateListenable = void 0;
const ActorHttpInvalidate_1 = __webpack_require__(9703);
/**
 * An ActorHttpInvalidate actor that allows listeners to be attached.
 *
 * @see ActorHttpInvalidate
 */
class ActorHttpInvalidateListenable extends ActorHttpInvalidate_1.ActorHttpInvalidate {
    constructor(args) {
        super(args);
        this.invalidateListeners = [];
    }
    addInvalidateListener(listener) {
        this.invalidateListeners.push(listener);
    }
    async test(action) {
        return true;
    }
    async run(action) {
        for (const listener of this.invalidateListeners) {
            listener(action);
        }
        return true;
    }
}
exports.ActorHttpInvalidateListenable = ActorHttpInvalidateListenable;
//# sourceMappingURL=ActorHttpInvalidateListenable.js.map

/***/ }),

/***/ 4864:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6483), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KEY_CONTEXT_AUTH = exports.KEY_CONTEXT_INCLUDE_CREDENTIALS = exports.ActorHttp = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A base actor for listening to HTTP events.
 *
 * Actor types:
 * * Input:  IActionHttp:      The HTTP request.
 * * Test:   IActorHttpTest:   An estimate for the response time.
 * * Output: IActorHttpOutput: The HTTP response.
 *
 * @see IActionHttp
 * @see IActorHttpTest
 * @see IActorHttpOutput
 */
class ActorHttp extends core_1.Actor {
    constructor(args) {
        super(args);
    }
    /**
     * Converts a WhatWG streams to Node streams if required.
     * Returns the input in case the stream already is a Node stream.
     * @param {ReadableStream} body
     * @returns {NodeJS.ReadableStream}
     */
    static toNodeReadable(body) {
        return __webpack_require__(4970)(body) ? body : __webpack_require__(3938).toNodeReadable(body);
    }
    /**
     * Convert the given headers object into a raw hash.
     * @param headers A headers object.
     */
    static headersToHash(headers) {
        const hash = {};
        headers.forEach((value, key) => {
            hash[key] = value;
        });
        return hash;
    }
}
exports.ActorHttp = ActorHttp;
/**
 * @type {string} Context entry for the include credentials glags.
 */
exports.KEY_CONTEXT_INCLUDE_CREDENTIALS = '@comunica/bus-http:include-credentials';
/**
 * @type {string} Context entry for the authentication for a source.
 * @value {string} "username:password"-pair.
 */
exports.KEY_CONTEXT_AUTH = '@comunica/bus-http:auth';
//# sourceMappingURL=ActorHttp.js.map

/***/ }),

/***/ 8147:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(206), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorInit = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A base actor for listening to init events.
 *
 * Actor types:
 * * Input:  IActionInit:      Contains process information
 *                             such as the list of arguments,
 *                             environment variables and input stream.
 * * Test:   <none>
 * * Output: IActorOutputInit: Contains process output streams.
 *
 * @see IActionInit
 */
class ActorInit extends core_1.Actor {
    constructor(args) {
        super(args);
    }
}
exports.ActorInit = ActorInit;
//# sourceMappingURL=ActorInit.js.map

/***/ }),

/***/ 9557:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1569), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1569:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorOptimizeQueryOperation = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica actor for optimize-query-operation events.
 *
 * Actor types:
 * * Input:  IActionOptimizeQueryOperation:      An incoming SPARQL operation.
 * * Test:   <none>
 * * Output: IActorOptimizeQueryOperationOutput: A (possibly optimized) outgoing SPARQL operation.
 *
 * @see IActionOptimizeQueryOperation
 * @see IActorOptimizeQueryOperationOutput
 */
class ActorOptimizeQueryOperation extends core_1.Actor {
    constructor(args) {
        super(args);
    }
}
exports.ActorOptimizeQueryOperation = ActorOptimizeQueryOperation;
//# sourceMappingURL=ActorOptimizeQueryOperation.js.map

/***/ }),

/***/ 7213:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5825), exports);
__exportStar(__webpack_require__(9437), exports);
__exportStar(__webpack_require__(9537), exports);
__exportStar(__webpack_require__(9438), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMetadata = exports.ActorQueryOperation = exports.KEY_CONTEXT_QUERY_TIMESTAMP = exports.KEY_CONTEXT_BASEIRI = exports.KEY_CONTEXT_PATTERN_PARENTMETADATA = exports.KEY_CONTEXT_BGP_PATTERNBINDINGS = exports.KEY_CONTEXT_BGP_PARENTMETADATA = exports.KEY_CONTEXT_BGP_CURRENTMETADATA = void 0;
const core_1 = __webpack_require__(1709);
const Bindings_1 = __webpack_require__(9438);
/**
 * @type {string} Context entry for current metadata.
 *                I.e., the metadata that was used to determine the next BGP operation.
 * @value {any} A metadata hash.
 */
exports.KEY_CONTEXT_BGP_CURRENTMETADATA = '@comunica/bus-query-operation:bgpCurrentMetadata';
/**
 * @type {string} Context entry for an array of parent metadata.
 *                I.e., an array of the metadata that was present before materializing the current BGP operations.
 *                This can be passed in 'bgp' actions.
 *                The array entries should correspond to the pattern entries in the BGP.
 * @value {any} An array of metadata hashes.
 */
exports.KEY_CONTEXT_BGP_PARENTMETADATA = '@comunica/bus-query-operation:bgpParentMetadata';
/**
 * @type {string} Context entry for indicating which patterns were bound from variables.
 *                I.e., an array of the same length as the value of KEY_CONTEXT_BGP_PARENTMETADATA,
 *                where each array value corresponds to the pattern bindings for the corresponding pattern.
 * @value {any} An array of {@link IPatternBindings}.
 */
exports.KEY_CONTEXT_BGP_PATTERNBINDINGS = '@comunica/bus-query-operation:bgpPatternBindings';
/**
 * @type {string} Context entry for parent metadata.
 *                I.e., the metadata that was present before materializing the current operation.
 *                This can be passed in 'pattern' actions.
 * @value {any} A metadata hash.
 */
exports.KEY_CONTEXT_PATTERN_PARENTMETADATA = '@comunica/bus-query-operation:patternParentMetadata';
/**
 * @type {string} Context entry for query's base IRI.
 * @value {any} A string.
 */
exports.KEY_CONTEXT_BASEIRI = '@comunica/actor-init-sparql:baseIRI';
/**
 * @type {string} A timestamp representing the current time.
 *                This is required for certain SPARQL operations such as NOW().
 * @value {any} a date.
 */
exports.KEY_CONTEXT_QUERY_TIMESTAMP = '@comunica/actor-init-sparql:queryTimestamp';
/**
 * A comunica actor for query-operation events.
 *
 * Actor types:
 * * Input:  IActionQueryOperation:      A SPARQL Algebra operation.
 * * Test:   <none>
 * * Output: IActorQueryOperationOutput: A bindings stream.
 *
 * @see IActionQueryOperation
 * @see IActorQueryOperationOutput
 */
class ActorQueryOperation extends core_1.Actor {
    constructor(args) {
        super(args);
    }
    /**
     * Safely cast a query operation output to a bindings output.
     * This will throw a runtime error if the output is of the incorrect type.
     * @param {IActorQueryOperationOutput} output A query operation output.
     * @return {IActorQueryOperationOutputBindings} A bindings query operation output.
     */
    static getSafeBindings(output) {
        ActorQueryOperation.validateQueryOutput(output, 'bindings');
        return output;
    }
    /**
     * Safely cast a query operation output to a quads output.
     * This will throw a runtime error if the output is of the incorrect type.
     * @param {IActorQueryOperationOutput} output A query operation output.
     * @return {IActorQueryOperationOutputQuads} A quads query operation output.
     */
    static getSafeQuads(output) {
        ActorQueryOperation.validateQueryOutput(output, 'quads');
        return output;
    }
    /**
     * Safely cast a query operation output to a boolean output.
     * This will throw a runtime error if the output is of the incorrect type.
     * @param {IActorQueryOperationOutput} output A query operation output.
     * @return {IActorQueryOperationOutputBoolean} A boolean query operation output.
     */
    static getSafeBoolean(output) {
        ActorQueryOperation.validateQueryOutput(output, 'boolean');
        return output;
    }
    /**
     * Convert a metadata callback to a lazy callback where the response value is cached.
     * @param {() => Promise<{[p: string]: any}>} metadata A metadata callback
     * @return {() => Promise<{[p: string]: any}>} The callback where the response will be cached.
     */
    static cachifyMetadata(metadata) {
        let lastReturn;
        // eslint-disable-next-line no-return-assign,@typescript-eslint/no-misused-promises
        return (metadata && (() => (lastReturn || (lastReturn = metadata()))));
    }
    /**
     * Throw an error if the output type does not match the expected type.
     * @param {IActorQueryOperationOutput} output A query operation output.
     * @param {string} expectedType The expected output type.
     */
    static validateQueryOutput(output, expectedType) {
        if (output.type !== expectedType) {
            throw new Error(`Invalid query output type: Expected '${expectedType}' but got '${output.type}'`);
        }
    }
    /**
     * Create an options object that can be used to construct a sparqlee evaluator.
     * @param context An action context.
     * @param mediatorQueryOperation An optional query query operation mediator.
     *                               If defined, the existence resolver will be defined as `exists`.
     */
    static getExpressionContext(context, mediatorQueryOperation) {
        if (context) {
            const now = context.get(exports.KEY_CONTEXT_QUERY_TIMESTAMP);
            const baseIRI = context.get(exports.KEY_CONTEXT_BASEIRI);
            return Object.assign({ now,
                baseIRI }, mediatorQueryOperation ?
                {
                    exists: ActorQueryOperation.createExistenceResolver(context, mediatorQueryOperation),
                } :
                {});
        }
        return {};
    }
    /**
     * Create an existence resolver for usage within an expression context.
     * @param context An action context.
     * @param mediatorQueryOperation A query operation mediator.
     */
    static createExistenceResolver(context, mediatorQueryOperation) {
        return async (expr, bindings) => {
            const operation = Bindings_1.materializeOperation(expr.input, bindings);
            const outputRaw = await mediatorQueryOperation.mediate({ operation, context });
            const output = ActorQueryOperation.getSafeBindings(outputRaw);
            return new Promise((resolve, reject) => {
                output.bindingsStream.on('end', () => {
                    resolve(false);
                });
                output.bindingsStream.on('error', reject);
                output.bindingsStream.on('data', () => {
                    output.bindingsStream.close();
                    resolve(true);
                });
            })
                .then((exists) => expr.not ? !exists : exists);
        };
    }
}
exports.ActorQueryOperation = ActorQueryOperation;
/**
 * Helper function to get the metadata of an action output.
 * @param actionOutput An action output, with an optional metadata function.
 * @return The metadata.
 */
function getMetadata(actionOutput) {
    if (!actionOutput.metadata) {
        return Promise.resolve({});
    }
    return actionOutput.metadata();
}
exports.getMetadata = getMetadata;
//# sourceMappingURL=ActorQueryOperation.js.map

/***/ }),

/***/ 9437:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationTyped = exports.KEY_CONTEXT_QUERYOPERATION = void 0;
const ActorQueryOperation_1 = __webpack_require__(5825);
/**
 * @type {string} Context entry for the current query operation.
 */
exports.KEY_CONTEXT_QUERYOPERATION = '@comunica/bus-query-operation:operation';
/**
 * A base implementation for query operation actors for a specific operation type.
 */
class ActorQueryOperationTyped extends ActorQueryOperation_1.ActorQueryOperation {
    constructor(args, operationName) {
        super(Object.assign(Object.assign({}, args), { operationName }));
        if (!this.operationName) {
            throw new Error('A valid "operationName" argument must be provided.');
        }
    }
    async test(action) {
        if (!action.operation) {
            throw new Error('Missing field \'operation\' in a query operation action.');
        }
        if (action.operation.type !== this.operationName) {
            throw new Error(`Actor ${this.name} only supports ${this.operationName} operations, but got ${action.operation.type}`);
        }
        const operation = action.operation;
        return this.testOperation(operation, action.context);
    }
    async run(action) {
        const operation = action.operation;
        const subContext = action.context && action.context.set(exports.KEY_CONTEXT_QUERYOPERATION, operation);
        const output = await this.runOperation(operation, subContext);
        if (output.metadata) {
            output.metadata =
                ActorQueryOperation_1.ActorQueryOperation.cachifyMetadata(output.metadata);
        }
        return output;
    }
}
exports.ActorQueryOperationTyped = ActorQueryOperationTyped;
//# sourceMappingURL=ActorQueryOperationTyped.js.map

/***/ }),

/***/ 9537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorQueryOperationTypedMediated = void 0;
const ActorQueryOperationTyped_1 = __webpack_require__(9437);
/**
 * A base implementation for query operation actors for a specific operation type that have a query operation mediator.
 */
class ActorQueryOperationTypedMediated extends ActorQueryOperationTyped_1.ActorQueryOperationTyped {
    constructor(args, operationName) {
        super(args, operationName);
    }
}
exports.ActorQueryOperationTypedMediated = ActorQueryOperationTypedMediated;
//# sourceMappingURL=ActorQueryOperationTypedMediated.js.map

/***/ }),

/***/ 9438:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.materializeOperation = exports.materializeTerm = exports.ensureBindings = exports.isBindings = exports.Bindings = void 0;
const immutable_1 = __webpack_require__(3393);
const rdf_string_1 = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
/**
 * A convenience constructor for bindings based on a given hash.
 * @param {{[p: string]: RDF.Term}} hash A hash that maps variable names to terms.
 * @return {Bindings} The immutable bindings from the hash.
 * @constructor
 */
// eslint-disable-next-line no-redeclare
function Bindings(hash) {
    return immutable_1.Map(hash);
}
exports.Bindings = Bindings;
/**
 * Check if the given object is a bindings object.
 * @param maybeBindings Any object.
 * @return {boolean} If the object is a bindings object.
 */
function isBindings(maybeBindings) {
    return immutable_1.Map.isMap(maybeBindings);
}
exports.isBindings = isBindings;
/**
 * Convert the given object to a bindings object if it is not a bindings object yet.
 * If it already is a bindings object, return the object as-is.
 * @param maybeBindings Any object.
 * @return {Bindings} A bindings object.
 */
function ensureBindings(maybeBindings) {
    return isBindings(maybeBindings) ? maybeBindings : Bindings(maybeBindings);
}
exports.ensureBindings = ensureBindings;
/**
 * Materialize a term with the given binding.
 *
 * If the given term is a variable,
 * and that variable exist in the given bindings object,
 * the value of that binding is returned.
 * In all other cases, the term itself is returned.
 *
 * @param {RDF.Term} term A term.
 * @param {Bindings} bindings A bindings object.
 * @return {RDF.Term} The materialized term.
 */
function materializeTerm(term, bindings) {
    if (term.termType === 'Variable') {
        const value = bindings.get(rdf_string_1.termToString(term));
        if (value) {
            return value;
        }
    }
    return term;
}
exports.materializeTerm = materializeTerm;
/**
 * Materialize the given operation (recursively) with the given bindings.
 * Essentially, all variables in the given operation will be replaced
 * by the terms bound to the variables in the given bindings.
 * @param {Operation} operation SPARQL algebra operation.
 * @param {Bindings} bindings A bindings object.
 * @param {boolean} strictTargetVariables If target variable bindings (such as on SELECT or BIND) should not be allowed.
 * @return Algebra.Operation A new operation materialized with the given bindings.
 */
function materializeOperation(operation, bindings, strictTargetVariables = false) {
    return sparqlalgebrajs_1.Util.mapOperation(operation, {
        path(op, factory) {
            // Materialize variables in a path expression.
            // The predicate expression will be recursed.
            return {
                recurse: false,
                result: factory.createPath(materializeTerm(op.subject, bindings), op.predicate, materializeTerm(op.object, bindings), materializeTerm(op.graph, bindings)),
            };
        },
        pattern(op, factory) {
            // Materialize variables in the quad pattern.
            return {
                recurse: false,
                result: factory.createPattern(materializeTerm(op.subject, bindings), materializeTerm(op.predicate, bindings), materializeTerm(op.object, bindings), materializeTerm(op.graph, bindings)),
            };
        },
        extend(op) {
            // Materialize an extend operation.
            // If strictTargetVariables is true, we throw if the extension target variable is attempted to be bound.
            // Otherwise, we remove the extend operation.
            if (bindings.has(rdf_string_1.termToString(op.variable))) {
                if (strictTargetVariables) {
                    throw new Error(`Tried to bind variable ${rdf_string_1.termToString(op.variable)} in a BIND operator.`);
                }
                else {
                    return {
                        recurse: true,
                        result: materializeOperation(op.input, bindings, strictTargetVariables),
                    };
                }
            }
            return {
                recurse: true,
                result: op,
            };
        },
        group(op, factory) {
            // Materialize a group operation.
            // If strictTargetVariables is true, we throw if the group target variable is attempted to be bound.
            // Otherwise, we just filter out the bound variables.
            if (strictTargetVariables) {
                for (const variable of op.variables) {
                    if (bindings.has(rdf_string_1.termToString(variable))) {
                        throw new Error(`Tried to bind variable ${rdf_string_1.termToString(variable)} in a GROUP BY operator.`);
                    }
                }
                return {
                    recurse: true,
                    result: op,
                };
            }
            const variables = op.variables.filter(variable => !bindings.has(rdf_string_1.termToString(variable)));
            return {
                recurse: true,
                result: factory.createGroup(op.input, variables, op.aggregates),
            };
        },
        project(op, factory) {
            // Materialize a project operation.
            // If strictTargetVariables is true, we throw if the project target variable is attempted to be bound.
            // Otherwise, we just filter out the bound variables.
            if (strictTargetVariables) {
                for (const variable of op.variables) {
                    if (bindings.has(rdf_string_1.termToString(variable))) {
                        throw new Error(`Tried to bind variable ${rdf_string_1.termToString(variable)} in a SELECT operator.`);
                    }
                }
                return {
                    recurse: true,
                    result: op,
                };
            }
            const variables = op.variables.filter(variable => !bindings.has(rdf_string_1.termToString(variable)));
            return {
                recurse: true,
                result: factory.createProject(op.input, variables),
            };
        },
        values(op, factory) {
            // Materialize a values operation.
            // If strictTargetVariables is true, we throw if the values target variable is attempted to be bound.
            // Otherwise, we just filter out the bound variables and their bindings.
            if (strictTargetVariables) {
                for (const variable of op.variables) {
                    if (bindings.has(rdf_string_1.termToString(variable))) {
                        throw new Error(`Tried to bind variable ${rdf_string_1.termToString(variable)} in a VALUES operator.`);
                    }
                }
            }
            else {
                const variables = op.variables.filter(variable => !bindings.has(rdf_string_1.termToString(variable)));
                const valueBindings = op.bindings.map(binding => {
                    const newBinding = Object.assign({}, binding);
                    bindings.forEach((value, key) => delete newBinding[key]);
                    return newBinding;
                });
                return {
                    recurse: true,
                    result: factory.createValues(variables, valueBindings),
                };
            }
            return {
                recurse: false,
                result: op,
            };
        },
        expression(op, factory) {
            if (op.expressionType === 'term') {
                // Materialize a term expression
                return {
                    recurse: false,
                    result: factory.createTermExpression(materializeTerm(op.term, bindings)),
                };
            }
            if (op.expressionType === 'aggregate' &&
                'variable' in op &&
                bindings.has(rdf_string_1.termToString(op.variable))) {
                // Materialize a bound aggregate operation.
                // If strictTargetVariables is true, we throw if the expression target variable is attempted to be bound.
                // Otherwise, we ignore this operation.
                if (strictTargetVariables) {
                    throw new Error(`Tried to bind ${rdf_string_1.termToString(op.variable)} in a ${op.aggregator} aggregate.`);
                }
                else {
                    return {
                        recurse: true,
                        result: op,
                    };
                }
            }
            return {
                recurse: true,
                result: op,
            };
        },
    });
}
exports.materializeOperation = materializeOperation;
//# sourceMappingURL=Bindings.js.map

/***/ }),

/***/ 2444:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9949), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9949:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfJoin = void 0;
const core_1 = __webpack_require__(1709);
const asynciterator_1 = __webpack_require__(7400);
/**
 * A comunica actor for joining 2 binding streams.
 *
 * Actor types:
 * * Input:  IActionRdfJoin:      The streams that need to be joined.
 * * Test:   <none>
 * * Output: IActorRdfJoinOutput: The resulting joined stream.
 *
 * @see IActionRdfJoin
 * @see IActorQueryOperationOutput
 */
class ActorRdfJoin extends core_1.Actor {
    constructor(args, limitEntries, limitEntriesMin, canHandleUndefs) {
        super(args);
        this.limitEntries = limitEntries !== null && limitEntries !== void 0 ? limitEntries : Infinity;
        this.limitEntriesMin = limitEntriesMin !== null && limitEntriesMin !== void 0 ? limitEntriesMin : false;
        this.canHandleUndefs = canHandleUndefs !== null && canHandleUndefs !== void 0 ? canHandleUndefs : false;
    }
    /**
     * Returns an array containing all the variable names that occur in all bindings streams.
     * @param {IActionRdfJoin} action
     * @returns {string[]}
     */
    static overlappingVariables(action) {
        const variables = action.entries.map(entry => entry.variables);
        let baseArray = variables[0];
        for (const array of variables.slice(1)) {
            baseArray = baseArray.filter(el => array.includes(el));
        }
        return baseArray;
    }
    /**
     * Returns the variables that will occur in the joined bindings.
     * @param {IActionRdfJoin} action
     * @returns {string[]}
     */
    static joinVariables(action) {
        const variables = action.entries.map(entry => entry.variables);
        const withDuplicates = variables.reduce((acc, it) => [...acc, ...it], []);
        return [...new Set(withDuplicates)];
    }
    /**
     * Returns the result of joining bindings, or `null` if no join is possible.
     * @param {Bindings[]} bindings
     * @returns {Bindings}
     */
    static join(...bindings) {
        try {
            return bindings.reduce((acc, val) => acc.mergeWith((left, right) => {
                if (!left.equals(right)) {
                    throw new Error('Join failure');
                }
                return left;
            }, val));
        }
        catch (_a) {
            return null;
        }
    }
    /**
     * Checks if all metadata objects are present in the action, and if they have the specified key.
     * @param {IActionRdfJoin} action
     * @param {string} key
     * @returns {boolean}
     */
    static async iteratorsHaveMetadata(action, key) {
        return Promise.all(action.entries.map(async (entry) => {
            if (!entry.metadata) {
                throw new Error('Missing metadata');
            }
            const metadata = await entry.metadata();
            if (!(key in metadata)) {
                throw new Error('Missing metadata value');
            }
        })).then(() => true).catch(() => false);
    }
    /**
     * Default test function for join actors.
     * Checks whether all iterators have metadata.
     * If yes: call the abstract getIterations method, if not: return Infinity.
     * @param {IActionRdfJoin} action The input action containing the relevant iterators
     * @returns {Promise<IMediatorTypeIterations>} The calculated estime.
     */
    async test(action) {
        // Allow joining of one or zero streams
        if (action.entries.length <= 1) {
            return { iterations: 0 };
        }
        // Check if this actor can handle the given number of streams
        if (this.limitEntriesMin ? action.entries.length < this.limitEntries : action.entries.length > this.limitEntries) {
            throw new Error(`${this.name} requires ${this.limitEntries} sources at ${this.limitEntriesMin ? 'least' : 'most'}. The input contained ${action.entries.length}.`);
        }
        // Check if all streams are bindings streams
        for (const entry of action.entries) {
            if (entry.type !== 'bindings') {
                throw new Error(`Invalid type of a join entry: Expected 'bindings' but got '${entry.type}'`);
            }
        }
        // Check if this actor can handle undefs
        if (!this.canHandleUndefs) {
            for (const entry of action.entries) {
                if (entry.canContainUndefs) {
                    throw new Error(`Actor ${this.name} can not join streams containing undefs`);
                }
            }
        }
        if (!await ActorRdfJoin.iteratorsHaveMetadata(action, 'totalItems')) {
            return { iterations: Infinity };
        }
        return { iterations: await this.getIterations(action) };
    }
    /**
     * Returns default input for 0 or 1 entries. Calls the getOutput function otherwise
     * @param {IActionRdfJoin} action
     * @returns {Promise<IActorQueryOperationOutput>}
     */
    async run(action) {
        if (action.entries.length === 0) {
            return {
                bindingsStream: new asynciterator_1.ArrayIterator([], { autoStart: false }),
                metadata: () => Promise.resolve({ totalItems: 0 }),
                type: 'bindings',
                variables: [],
                canContainUndefs: false,
            };
        }
        if (action.entries.length === 1) {
            return action.entries[0];
        }
        const result = this.getOutput(action);
        function totalItems() {
            return Promise.all(action.entries
                .map(entry => entry.metadata()))
                .then(metadatas => metadatas.reduce((acc, val) => acc * val.totalItems, 1));
        }
        if (await ActorRdfJoin.iteratorsHaveMetadata(action, 'totalItems')) {
            // Update the result promise to also add the estimated total items
            const unwrapped = await result;
            if (unwrapped.metadata) {
                const oldMetadata = unwrapped.metadata;
                unwrapped.metadata = () => oldMetadata().then(async (metadata) => {
                    // Don't overwrite metadata if it was generated by implementation
                    if (!('totalItems' in metadata)) {
                        metadata.totalItems = await totalItems();
                    }
                    return metadata;
                });
            }
            else {
                unwrapped.metadata = () => totalItems().then(totalItemsValue => ({ totalItems: totalItemsValue }));
            }
            return unwrapped;
        }
        return result;
    }
}
exports.ActorRdfJoin = ActorRdfJoin;
//# sourceMappingURL=ActorRdfJoin.js.map

/***/ }),

/***/ 3688:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5168), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5168:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfParseHtml = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica actor for rdf-parse-html events.
 *
 * Actor types:
 * * Input:  IActionRdfParseHtml:      Callbacks for parsing results.
 * * Test:   <none>
 * * Output: IActorRdfParseHtmlOutput: An HTML event listeners.
 *
 * @see IActionRdfParseHtml
 * @see IActorRdfParseHtmlOutput
 */
class ActorRdfParseHtml extends core_1.Actor {
    constructor(args) {
        super(args);
    }
}
exports.ActorRdfParseHtml = ActorRdfParseHtml;
//# sourceMappingURL=ActorRdfParseHtml.js.map

/***/ }),

/***/ 5413:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8457), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfResolveHypermediaLinks = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica actor for rdf-resolve-hypermedia-links events.
 *
 * Actor types:
 * * Input:  IActionRdfResolveHypermediaLinks:      The metadata from which the links should be extracted.
 * * Test:   <none>
 * * Output: IActorRdfResolveHypermediaLinksOutput: The URLs that were detected.
 *
 * @see IActionRdfResolveHypermediaLinks
 * @see IActorRdfResolveHypermediaLinksOutput
 */
class ActorRdfResolveHypermediaLinks extends core_1.Actor {
    constructor(args) {
        super(args);
    }
}
exports.ActorRdfResolveHypermediaLinks = ActorRdfResolveHypermediaLinks;
//# sourceMappingURL=ActorRdfResolveHypermediaLinks.js.map

/***/ }),

/***/ 8575:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9583), exports);
__exportStar(__webpack_require__(8883), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfResolveQuadPattern = exports.getDataSourceContext = exports.getDataSourceValue = exports.getDataSourceType = exports.isDataSourceRawType = exports.KEY_CONTEXT_SOURCE = exports.KEY_CONTEXT_SOURCES = void 0;
const core_1 = __webpack_require__(1709);
/**
 * @type {string} Context entry for data sources.
 * @value {DataSources} An array of sources.
 */
exports.KEY_CONTEXT_SOURCES = '@comunica/bus-rdf-resolve-quad-pattern:sources';
/**
 * @type {string} Context entry for a data source.
 * @value {IDataSource} A source.
 */
exports.KEY_CONTEXT_SOURCE = '@comunica/bus-rdf-resolve-quad-pattern:source';
function isDataSourceRawType(dataSource) {
    return typeof dataSource === 'string' || 'match' in dataSource;
}
exports.isDataSourceRawType = isDataSourceRawType;
function getDataSourceType(dataSource) {
    if (typeof dataSource === 'string') {
        return '';
    }
    return 'match' in dataSource ? 'rdfjsSource' : dataSource.type;
}
exports.getDataSourceType = getDataSourceType;
function getDataSourceValue(dataSource) {
    return isDataSourceRawType(dataSource) ? dataSource : dataSource.value;
}
exports.getDataSourceValue = getDataSourceValue;
function getDataSourceContext(dataSource, context) {
    if (typeof dataSource === 'string' || 'match' in dataSource || !dataSource.context) {
        return context;
    }
    return context.merge(dataSource.context);
}
exports.getDataSourceContext = getDataSourceContext;
/**
 * A comunica actor for rdf-resolve-quad-pattern events.
 *
 * Actor types:
 * * Input:  IActionRdfResolveQuadPattern:      A quad pattern and an optional context.
 * * Test:   <none>
 * * Output: IActorRdfResolveQuadPatternOutput: The resulting quad stream and optional metadata.
 *
 * @see IActionRdfResolveQuadPattern
 * @see IActorRdfResolveQuadPatternOutput
 */
class ActorRdfResolveQuadPattern extends core_1.Actor {
    constructor(args) {
        super(args);
    }
    /**
     * Get the sources from the given context.
     * @param {ActionContext} context An optional context.
     * @return {IDataSource[]} The array of sources or undefined.
     */
    getContextSources(context) {
        return context ? context.get(exports.KEY_CONTEXT_SOURCES) : undefined;
    }
    /**
     * Get the source from the given context.
     * @param {ActionContext} context An optional context.
     * @return {IDataSource} The source or undefined.
     */
    getContextSource(context) {
        return context ? context.get(exports.KEY_CONTEXT_SOURCE) : undefined;
    }
    /**
     * Get the source's raw URL value from the given context.
     * @param {IDataSource} source A source.
     * @return {string} The URL or null.
     */
    getContextSourceUrl(source) {
        if (source) {
            let fileUrl = getDataSourceValue(source);
            if (typeof fileUrl === 'string') {
                // Remove hashes from source
                const hashPosition = fileUrl.indexOf('#');
                if (hashPosition >= 0) {
                    fileUrl = fileUrl.slice(0, hashPosition);
                }
                return fileUrl;
            }
        }
    }
    /**
     * Check if the given context has a single source.
     * @param {ActionContext} context An optional context.
     * @return {boolean} If the given context has a single source of the given type.
     */
    hasContextSingleSource(context) {
        const source = this.getContextSource(context);
        return Boolean(source && (isDataSourceRawType(source) || source.value));
    }
    /**
     * Check if the given context has a single source of the given type.
     * @param {string} requiredType The required source type name.
     * @param {ActionContext} context An optional context.
     * @return {boolean} If the given context has a single source of the given type.
     */
    hasContextSingleSourceOfType(requiredType, context) {
        const source = this.getContextSource(context);
        return Boolean(source && getDataSourceType(source) === requiredType && getDataSourceValue(source));
    }
}
exports.ActorRdfResolveQuadPattern = ActorRdfResolveQuadPattern;
//# sourceMappingURL=ActorRdfResolveQuadPattern.js.map

/***/ }),

/***/ 8883:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfResolveQuadPatternSource = void 0;
const ActorRdfResolveQuadPattern_1 = __webpack_require__(9583);
/**
 * A base implementation for rdf-resolve-quad-pattern events
 * that wraps around an {@link IQuadSource}.
 *
 * @see IQuadSource
 */
class ActorRdfResolveQuadPatternSource extends ActorRdfResolveQuadPattern_1.ActorRdfResolveQuadPattern {
    constructor(args) {
        super(args);
    }
    async test(action) {
        return true;
    }
    async run(action) {
        const source = await this.getSource(action.context, action.pattern);
        return await this.getOutput(source, action.pattern, action.context);
    }
    /**
     * Get the output of the given action on a source.
     * @param {IQuadSource} source A quad source, possibly lazy.
     * @param {Algebra.Operation} operation The operation to apply.
     * @param ActionContext context Optional context data.
     * @return {Promise<IActorRdfResolveQuadPatternOutput>} A promise that resolves to a hash containing
     *                                                      a data RDFJS stream.
     */
    async getOutput(source, pattern, context) {
        // Create data stream
        const data = source.match(pattern.subject, pattern.predicate, pattern.object, pattern.graph);
        return { data };
    }
}
exports.ActorRdfResolveQuadPatternSource = ActorRdfResolveQuadPatternSource;
//# sourceMappingURL=ActorRdfResolveQuadPatternSource.js.map

/***/ }),

/***/ 4264:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(230), exports);
__exportStar(__webpack_require__(6155), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfSerialize = void 0;
const actor_abstract_mediatyped_1 = __webpack_require__(2318);
/**
 * A comunica actor for RDF parse events.
 *
 * Actor types:
 * * Input:  IActionRdfSerialize:      A serialize input or a media type input.
 * * Test:   <none>
 * * Output: IActorRdfSerializeOutput: The serialized quads.
 *
 * @see IActionRdfSerialize
 * @see IActorRdfSerializeOutput
 */
class ActorRdfSerialize extends actor_abstract_mediatyped_1.ActorAbstractMediaTyped {
    constructor(args) {
        super(args);
    }
}
exports.ActorRdfSerialize = ActorRdfSerialize;
//# sourceMappingURL=ActorRdfSerialize.js.map

/***/ }),

/***/ 6155:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorRdfSerializeFixedMediaTypes = void 0;
const actor_abstract_mediatyped_1 = __webpack_require__(2318);
/**
 * A base actor for listening to RDF serialize events that has fixed media types.
 *
 * Actor types:
 * * Input:  IActionRdfSerializeOrMediaType:      A serialize input or a media type input.
 * * Test:   <none>
 * * Output: IActorRdfSerializeOutputOrMediaType: The serialized quads.
 *
 * @see IActionInit
 */
class ActorRdfSerializeFixedMediaTypes extends actor_abstract_mediatyped_1.ActorAbstractMediaTypedFixed {
    constructor(args) {
        super(args);
    }
    async testHandleChecked(action) {
        return true;
    }
}
exports.ActorRdfSerializeFixedMediaTypes = ActorRdfSerializeFixedMediaTypes;
//# sourceMappingURL=ActorRdfSerializeFixedMediaTypes.js.map

/***/ }),

/***/ 9725:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5173), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorSparqlParse = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica actor for sparql-parse events.
 *
 * Actor types:
 * * Input:  IActionSparqlParse:      A SPARQL query string.
 * * Test:   <none>
 * * Output: IActorSparqlParseOutput: A parsed query in SPARQL query algebra.
 *
 * @see IActionSparqlParse
 * @see IActorSparqlParseOutput
 */
class ActorSparqlParse extends core_1.Actor {
    constructor(args) {
        super(args);
    }
}
exports.ActorSparqlParse = ActorSparqlParse;
//# sourceMappingURL=ActorSparqlParse.js.map

/***/ }),

/***/ 8432:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4573), exports);
__exportStar(__webpack_require__(8475), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4573:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorSparqlSerialize = void 0;
const actor_abstract_mediatyped_1 = __webpack_require__(2318);
/**
 * A comunica actor for sparql-serialize events.
 *
 * Actor types:
 * * Input:  IActionSparqlSerialize:      SPARQL bindings or a quad stream.
 * * Test:   <none>
 * * Output: IActorSparqlSerializeOutput: A text stream.
 *
 * @see IActionSparqlSerialize
 * @see IActorSparqlSerializeOutput
 */
class ActorSparqlSerialize extends actor_abstract_mediatyped_1.ActorAbstractMediaTyped {
    constructor(args) {
        super(args);
    }
}
exports.ActorSparqlSerialize = ActorSparqlSerialize;
//# sourceMappingURL=ActorSparqlSerialize.js.map

/***/ }),

/***/ 8475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActorSparqlSerializeFixedMediaTypes = void 0;
const actor_abstract_mediatyped_1 = __webpack_require__(2318);
/**
 * A base actor for listening to SPARQL serialize events that has fixed media types.
 *
 * Actor types:
 * * Input:  IActionSparqlSerializeOrMediaType:      A serialize input or a media type input.
 * * Test:   <none>
 * * Output: IActorSparqlSerializeOutputOrMediaType: The serialized quads.
 *
 * @see IActionInit
 */
class ActorSparqlSerializeFixedMediaTypes extends actor_abstract_mediatyped_1.ActorAbstractMediaTypedFixed {
    constructor(args) {
        super(args);
    }
    async testHandleChecked(action, context) {
        return true;
    }
}
exports.ActorSparqlSerializeFixedMediaTypes = ActorSparqlSerializeFixedMediaTypes;
//# sourceMappingURL=ActorSparqlSerializeFixedMediaTypes.js.map

/***/ }),

/***/ 1709:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// eslint-disable-next-line no-process-env
if (!process || ( true && !process.env.COMUNICA_DEBUG)) {
    Error.stackTraceLimit = false;
}
__exportStar(__webpack_require__(5090), exports);
__exportStar(__webpack_require__(8039), exports);
__exportStar(__webpack_require__(6195), exports);
__exportStar(__webpack_require__(1863), exports);
__exportStar(__webpack_require__(9784), exports);
__exportStar(__webpack_require__(2372), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6195:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionObserver = void 0;
/**
 * An ActionObserver can passively listen to {@link Actor#run} inputs and outputs for all actors on a certain bus.
 *
 * ActionObserver should not edit inputs and outputs,
 * they should be considered immutable.
 *
 * @see Actor
 * @see Bus
 *
 * @template I The input type of an actor.
 * @template O The output type of an actor.
 */
class ActionObserver {
    /**
     * All enumerable properties from the `args` object are inherited to this observer.
     *
     * The observer will NOT automatically subscribe to the given bus when this constructor is called.
     *
     * @param {IActionObserverArgs<I extends IAction, O extends IActorOutput>} args Arguments object
     * @throws When required arguments are missing.
     */
    constructor(args) {
        Object.assign(this, args);
    }
}
exports.ActionObserver = ActionObserver;
//# sourceMappingURL=ActionObserver.js.map

/***/ }),

/***/ 1863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ensureActionContext = exports.ActionContext = exports.Actor = void 0;
const immutable_1 = __webpack_require__(3393);
const Logger_1 = __webpack_require__(9784);
/**
 * An actor can act on messages of certain types and provide output of a certain type.
 *
 * The flow of an actor is as follows:
 * 1. Send a message to {@link Actor#test} to test if an actor can run that action.
 * 2. If the actor can reply to the message, let the actor run the action using {@link Actor#run}.
 *
 * An actor is typically subscribed to a bus,
 * using which the applicability to an action can be tested.
 *
 * @see Bus
 *
 * @template I The input type of an actor.
 * @template T The test type of an actor.
 * @template O The output type of an actor.
 */
class Actor {
    /**
     * All enumerable properties from the `args` object are inherited to this actor.
     *
     * The actor will subscribe to the given bus when this constructor is called.
     *
     * @param {IActorArgs<I extends IAction, T extends IActorTest, O extends IActorOutput>} args Arguments object
     * @param {string} args.name The name for this actor.
     * @param {Bus<A extends Actor<I, T, O>, I extends IAction, T extends IActorTest, O extends IActorOutput>} args.bus
     *        The bus this actor subscribes to.
     * @throws When required arguments are missing.
     */
    constructor(args) {
        this.beforeActors = [];
        Object.assign(this, args);
        this.bus.subscribe(this);
        if (this.beforeActors.length > 0) {
            this.bus.addDependencies(this, this.beforeActors);
        }
    }
    /**
     * Get the logger from the given context.
     * @param {ActionContext} context An optional context.
     * @return {Logger} The logger or undefined.
     */
    static getContextLogger(context) {
        return context && context.get(Logger_1.KEY_CONTEXT_LOG);
    }
    /**
     * Run the given action on this actor
     * AND invokes the {@link Bus#onRun} method.
     *
     * @param {I} action The action to run.
     * @return {Promise<T>} A promise that resolves to the run result.
     */
    runObservable(action) {
        const output = this.run(action);
        this.bus.onRun(this, action, output);
        return output;
    }
    /**
     * Initialize this actor.
     * This should be used for doing things that take a while,
     * such as opening files.
     *
     * @return {Promise<void>} A promise that resolves when the actor has been initialized.
     */
    async initialize() {
        return true;
    }
    /**
     * Deinitialize this actor.
     * This should be used for cleaning up things when the application is shut down,
     * such as closing files and removing temporary files.
     *
     * @return {Promise<void>} A promise that resolves when the actor has been deinitialized.
     */
    async deinitialize() {
        return true;
    }
    /* Proxy methods for the (optional) logger that is defined in the context */
    getDefaultLogData(context, data) {
        const dataActual = data ? data() : {};
        dataActual.actor = this.name;
        return dataActual;
    }
    logTrace(context, message, data) {
        const logger = Actor.getContextLogger(context);
        if (logger) {
            logger.trace(message, this.getDefaultLogData(context, data));
        }
    }
    logDebug(context, message, data) {
        const logger = Actor.getContextLogger(context);
        if (logger) {
            logger.debug(message, this.getDefaultLogData(context, data));
        }
    }
    logInfo(context, message, data) {
        const logger = Actor.getContextLogger(context);
        if (logger) {
            logger.info(message, this.getDefaultLogData(context, data));
        }
    }
    logWarn(context, message, data) {
        const logger = Actor.getContextLogger(context);
        if (logger) {
            logger.warn(message, this.getDefaultLogData(context, data));
        }
    }
    logError(context, message, data) {
        const logger = Actor.getContextLogger(context);
        if (logger) {
            logger.error(message, this.getDefaultLogData(context, data));
        }
    }
    logFatal(context, message, data) {
        const logger = Actor.getContextLogger(context);
        if (logger) {
            logger.fatal(message, this.getDefaultLogData(context, data));
        }
    }
}
exports.Actor = Actor;
/**
 * A convenience constructor for {@link ActionContext} based on a given hash.
 * @param {{[p: string]: any}} hash A hash that maps keys to values.
 * @return {ActionContext} The immutable action context from the hash.
 * @constructor
 */
// eslint-disable-next-line no-redeclare
function ActionContext(hash) {
    return immutable_1.Map(hash);
}
exports.ActionContext = ActionContext;
/**
 * Convert the given object to an action context object if it is not an action context object yet.
 * If it already is an action context object, return the object as-is.
 * @param maybeActionContext Any object.
 * @return {ActionContext} An action context object.
 */
function ensureActionContext(maybeActionContext) {
    return immutable_1.Map.isMap(maybeActionContext) ? maybeActionContext : ActionContext(maybeActionContext);
}
exports.ensureActionContext = ensureActionContext;
//# sourceMappingURL=Actor.js.map

/***/ }),

/***/ 5090:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bus = void 0;
/**
 * A publish-subscribe bus for sending actions to actors
 * to test whether or not they can run an action.
 *
 * This bus does not run the action itself,
 * for that a {@link Mediator} can be used.
 *
 * @see Actor
 * @see Mediator
 *
 * @template A The actor type that can subscribe to the sub.
 * @template I The input type of an actor.
 * @template T The test type of an actor.
 * @template O The output type of an actor.
 */
class Bus {
    /**
     * All enumerable properties from the `args` object are inherited to this bus.
     *
     * @param {IBusArgs} args Arguments object
     * @param {string} args.name The name for the bus
     * @throws When required arguments are missing.
     */
    constructor(args) {
        this.actors = [];
        this.observers = [];
        // Mapping from dependency (after) to dependents (before)
        this.dependencyLinks = new Map();
        Object.assign(this, args);
    }
    /**
     * Subscribe the given actor to the bus.
     * After this, the given actor can be unsubscribed from the bus by calling {@link Bus#unsubscribe}.
     *
     * An actor that is subscribed multiple times will exist that amount of times in the bus.
     *
     * @param {A} actor The actor to subscribe.
     */
    subscribe(actor) {
        this.actors.push(actor);
        this.reorderForDependencies();
    }
    /**
     * Subscribe the given observer to the bus.
     * After this, the given observer can be unsubscribed from the bus by calling {@link Bus#unsubscribeObserver}.
     *
     * An observer that is subscribed multiple times will exist that amount of times in the bus.
     *
     * @param {ActionObserver<I, O>} observer The observer to subscribe.
     */
    subscribeObserver(observer) {
        this.observers.push(observer);
    }
    /**
     * Unsubscribe the given actor from the bus.
     *
     * An actor that is subscribed multiple times will be unsubscribed only once.
     *
     * @param {A} actor The actor to unsubscribe
     * @return {boolean} If the given actor was successfully unsubscribed,
     *         otherwise it was not subscribed before.
     */
    unsubscribe(actor) {
        const index = this.actors.indexOf(actor);
        if (index >= 0) {
            this.actors.splice(index, 1);
            return true;
        }
        return false;
    }
    /**
     * Unsubscribe the given observer from the bus.
     *
     * An observer that is subscribed multiple times will be unsubscribed only once.
     *
     * @param {ActionObserver<I, O>} observer The observer to unsubscribe.
     * @return {boolean} If the given observer was successfully unsubscribed,
     *         otherwise it was not subscribed before.
     */
    unsubscribeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
            return true;
        }
        return false;
    }
    /**
     * Publish an action to all actors in the bus to test if they can run the action.
     *
     * @param {I} action An action to publish
     * @return {IActorReply<A extends Actor<I, T, O>, I extends IAction, T extends IActorTest,
     *         O extends IActorOutput>[]}
     *         An array of reply objects. Each object contains a reference to the actor,
     *         and a promise to its {@link Actor#test} result.
     */
    publish(action) {
        return this.actors.map((actor) => ({ actor, reply: actor.test(action) }));
    }
    /**
     * Invoked when an action was run by an actor.
     *
     * @param actor               The action on which the {@link Actor#run} method was invoked.
     * @param {I}          action The original action input.
     * @param {Promise<O>} output A promise resolving to the final action output.
     */
    onRun(actor, action, output) {
        for (const observer of this.observers) {
            observer.onRun(actor, action, output);
        }
    }
    /**
     * Indicate that the given actor has the given actor dependencies.
     *
     * This will ensure that the given actor will be present in the bus *before* the given dependencies.
     *
     * @param {A} dependent A dependent actor that will be placed before the given actors.
     * @param {A[]} dependencies Actor dependencies that will be placed after the given actor.
     */
    addDependencies(dependent, dependencies) {
        for (const dependency of dependencies) {
            let existingDependencies = this.dependencyLinks.get(dependency);
            if (!existingDependencies) {
                existingDependencies = [];
                this.dependencyLinks.set(dependency, existingDependencies);
            }
            existingDependencies.push(dependent);
        }
        this.reorderForDependencies();
    }
    /**
     * Reorder the bus based on all present dependencies.
     */
    reorderForDependencies() {
        if (this.dependencyLinks.size > 0) {
            const actorsAfter = [];
            // Temporarily remove all actors that have dependencies
            for (const actorAfter of this.dependencyLinks.keys()) {
                const dependentPos = this.actors.indexOf(actorAfter);
                if (dependentPos >= 0) {
                    this.actors.splice(dependentPos, 1);
                    actorsAfter.push(actorAfter);
                }
            }
            // Iteratively append actors based on the first dependency link
            // that has all of its dependencies available in the array
            while (actorsAfter.length > 0) {
                // Find the first actor that has all of its dependencies available.
                let activeActorAfterId = -1;
                for (let i = 0; i < actorsAfter.length; i++) {
                    let validLink = true;
                    for (const dependency of this.dependencyLinks.get(actorsAfter[i])) {
                        if (!this.actors.includes(dependency) && actorsAfter.includes(dependency)) {
                            validLink = false;
                            break;
                        }
                    }
                    if (validLink) {
                        activeActorAfterId = i;
                        break;
                    }
                }
                // If none of the pending links are possible, there must be a cyclic dependency
                if (activeActorAfterId < 0) {
                    throw new Error(`Cyclic dependency links detected in bus ${this.name}`);
                }
                // The dependent may not be available (yet), so we don't add it to the array (yet).
                const activeActorAfter = actorsAfter.splice(activeActorAfterId, 1)[0];
                this.actors.push(activeActorAfter);
            }
        }
    }
}
exports.Bus = Bus;
//# sourceMappingURL=Bus.js.map

/***/ }),

/***/ 8039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BusIndexed = void 0;
const Bus_1 = __webpack_require__(5090);
/**
 * A bus that indexes identified actors,
 * so that actions with a corresponding identifier can be published more efficiently.
 *
 * Multiple actors with the same identifier can be subscribed.
 *
 * If actors or actions do not have a valid identifier,
 * then this will fallback to the normal bus behaviour.
 *
 * @see Bus
 *
 * @template A The actor type that can subscribe to the sub.
 * @template I The input type of an actor.
 * @template T The test type of an actor.
 * @template O The output type of an actor.
 */
class BusIndexed extends Bus_1.Bus {
    /**
     * All enumerable properties from the `args` object are inherited to this bus.
     *
     * @param {IBusIndexedArgs} args Arguments object
     * @param {string} args.name The name for the bus
     * @throws When required arguments are missing.
     */
    constructor(args) {
        super(args);
        this.actorsIndex = {};
    }
    subscribe(actor) {
        const actorId = this.getActorIdentifier(actor) || '_undefined_';
        let actors = this.actorsIndex[actorId];
        if (!actors) {
            actors = this.actorsIndex[actorId] = [];
        }
        actors.push(actor);
        super.subscribe(actor);
    }
    unsubscribe(actor) {
        const actorId = this.getActorIdentifier(actor) || '_undefined_';
        const actors = this.actorsIndex[actorId];
        if (actors) {
            const i = actors.indexOf(actor);
            if (i >= 0) {
                actors.splice(i, 1);
            }
            if (actors.length === 0) {
                delete this.actorsIndex[actorId];
            }
        }
        return super.unsubscribe(actor);
    }
    publish(action) {
        const actionId = this.getActionIdentifier(action);
        if (actionId) {
            const actors = (this.actorsIndex[actionId] || []).concat(this.actorsIndex._undefined_ || []);
            return actors.map((actor) => ({ actor, reply: actor.test(action) }));
        }
        return super.publish(action);
    }
    getActorIdentifier(actor) {
        return this.actorIdentifierFields.reduce((object, field) => object[field], actor);
    }
    getActionIdentifier(action) {
        return this.actionIdentifierFields.reduce((object, field) => object[field], action);
    }
}
exports.BusIndexed = BusIndexed;
//# sourceMappingURL=BusIndexed.js.map

/***/ }),

/***/ 9784:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KEY_CONTEXT_LOG = exports.Logger = void 0;
/**
 * A logger accepts messages from different levels
 * and emits them in a certain way.
 */
class Logger {
    /**
     * Convert a string-based logging level to a numerical logging level.
     * @param level A string-based logging level
     * @return The numerical logging level, or undefined.
     */
    static getLevelOrdinal(level) {
        return Logger.LEVELS[level];
    }
}
exports.Logger = Logger;
/**
 * All available logging levels.
 * @type {{trace: number; debug: number; info: number; warn: number; error: number; fatal: number}}
 */
Logger.LEVELS = {
    trace: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
    fatal: 5,
};
/**
 * @type {string} Context entry for a logger instance.
 * @value {Logger} A logger.
 */
exports.KEY_CONTEXT_LOG = '@comunica/core:log';
//# sourceMappingURL=Logger.js.map

/***/ }),

/***/ 2372:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mediator = void 0;
/**
 * A mediator can mediate an action over a bus of actors.
 *
 * It does the following:
 * 1. Accepts an action in {@link Mediator#mediate}.
 * 2. Sends the action to the bus to test its applicability on all actors.
 * 3. It _mediates_ over these test results.
 * 4. It selects the _best_ actor.
 * 5. The action is run by the _best_ actor, and the result if returned.
 *
 * The _mediates_ and _best_ parts are filled in by subclasses of this abstract Mediator class.
 *
 * @template A The type of actor to mediator over.
 * @template I The input type of an actor.
 * @template T The test type of an actor.
 * @template O The output type of an actor.
 */
class Mediator {
    /**
     * All enumerable properties from the `args` object are inherited to this mediator.
     *
     * @param {IMediatorArgs<A extends Actor<I, T, O>, I extends IAction, T extends IActorTest,
     * O extends IActorOutput>} args Arguments object
     * @param {string} args.name The name for this mediator.
     * @param {Bus<A extends Actor<I, T, O>, I extends IAction, T extends IActorTest, O extends IActorOutput>} args.bus
     *        The bus this mediator will mediate over.
     * @throws When required arguments are missing.
     */
    constructor(args) {
        Object.assign(this, args);
    }
    /**
     * Publish the given action in the bus.
     *
     * This will send the test action on all actors in the bus.
     * All actor replies will be returned.
     *
     * @param {I} action The action to mediate for.
     * @return {IActorReply<A extends Actor<I, T, O>, I extends IAction, T extends IActorTest, O extends IActorOutput>[]}
     * The list of actor replies.
     */
    publish(action) {
        // Test all actors in the bus
        const actors = this.bus.publish(action);
        if (actors.length === 0) {
            throw new Error(`No actors are able to reply to a message in the bus ${this.bus.name}`);
        }
        return actors;
    }
    /**
     * Mediate for the given action to get an actor.
     *
     * This will send the test action on all actors in the bus.
     * The actor that tests _best_ will be returned.
     *
     * @param {I} action The action to mediate for.
     * @return {Promise<O extends IActorOutput>} A promise that resolves to the _best_ actor.
     */
    async mediateActor(action) {
        // Mediate to one actor and run that actor.
        return await this.mediateWith(action, this.publish(action));
    }
    /**
     * Mediate for the given action.
     *
     * This will send the test action on all actors in the bus.
     * The action will be run on the actor that tests _best_,
     * of which the result will be returned.
     *
     * @param {I} action The action to mediate for.
     * @return {Promise<O extends IActorOutput>} A promise that resolves to the mediation result.
     */
    async mediate(action) {
        // Mediate to one actor and run the action on it
        const actor = await this.mediateActor(action);
        return actor.runObservable(action);
    }
}
exports.Mediator = Mediator;
//# sourceMappingURL=Mediator.js.map

/***/ }),

/***/ 5093:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7081), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7081:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlankNodeScoped = void 0;
/**
 * A blank node that is scoped to a certain source.
 */
class BlankNodeScoped {
    constructor(value, skolemized) {
        this.termType = 'BlankNode';
        this.value = value;
        this.skolemized = skolemized;
    }
    equals(other) {
        // eslint-disable-next-line no-implicit-coercion
        return !!other && other.termType === 'BlankNode' && other.value === this.value;
    }
}
exports.BlankNodeScoped = BlankNodeScoped;
//# sourceMappingURL=BlankNodeScoped.js.map

/***/ }),

/***/ 4292:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1989), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerVoid = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A logger that voids everything.
 */
class LoggerVoid extends core_1.Logger {
    debug() {
        // Void
    }
    error() {
        // Void
    }
    fatal() {
        // Void
    }
    info() {
        // Void
    }
    trace() {
        // Void
    }
    warn() {
        // Void
    }
}
exports.LoggerVoid = LoggerVoid;
//# sourceMappingURL=LoggerVoid.js.map

/***/ }),

/***/ 7930:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3038), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3038:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediatorAll = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica mediator that runs all actors that resolve their test.
 * This mediator will always resolve to the first actor's output.
 */
class MediatorAll extends core_1.Mediator {
    constructor(args) {
        super(args);
    }
    async mediate(action) {
        // Collect all actors that resolve their test
        const validActors = [];
        let testResults;
        try {
            testResults = this.publish(action);
        }
        catch (_a) {
            testResults = [];
        }
        for (const testResult of testResults) {
            try {
                await testResult.reply;
                validActors.push(testResult.actor);
            }
            catch (_b) {
                // Ignore errors
            }
        }
        // Send action to all valid actors
        const outputs = await Promise.all(validActors.map(actor => actor.runObservable(action)));
        return outputs[0];
    }
    async mediateWith() {
        throw new Error('Unsupported operation: MediatorAll#mediateWith');
    }
}
exports.MediatorAll = MediatorAll;
//# sourceMappingURL=MediatorAll.js.map

/***/ }),

/***/ 4437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1611), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1611:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediatorCombinePipeline = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica mediator that goes over all actors in sequence and forwards I/O.
 * This required the action input and the actor output to be of the same type.
 */
class MediatorCombinePipeline extends core_1.Mediator {
    constructor(args) {
        super(args);
    }
    async mediate(action) {
        let testResults;
        try {
            testResults = this.publish(action);
        }
        catch (_a) {
            // If no actors are available, just return the input as output
            return action;
        }
        // Delegate test errors.
        await Promise.all(testResults.map(({ reply }) => reply));
        // Pass action to first actor,
        // and each actor output as input to the following actor.
        let handle = action;
        for (const actor of testResults.map(result => result.actor)) {
            handle = await actor.runObservable(handle);
        }
        // Return the final actor output
        return handle;
    }
    mediateWith() {
        throw new Error('Method not supported.');
    }
}
exports.MediatorCombinePipeline = MediatorCombinePipeline;
//# sourceMappingURL=MediatorCombinePipeline.js.map

/***/ }),

/***/ 6479:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6544), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6544:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediatorCombineUnion = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A comunica mediator that takes the union of all actor results.
 *
 * The actors that are registered first will have priority on setting overlapping fields.
 */
class MediatorCombineUnion extends core_1.Mediator {
    constructor(args) {
        super(args);
        this.combiner = this.createCombiner();
    }
    async mediate(action) {
        let testResults;
        try {
            testResults = this.publish(action);
        }
        catch (_a) {
            testResults = [];
        }
        // Delegate test errors.
        await Promise.all(testResults.map(({ reply }) => reply));
        // Run action on all actors.
        const results = await Promise.all(testResults.map(result => result.actor.runObservable(action)));
        // Return the combined results.
        return this.combiner(results);
    }
    mediateWith() {
        throw new Error('Method not supported.');
    }
    createCombiner() {
        return (results) => {
            const data = {};
            data[this.field] = {};
            [{}].concat(results.map((result) => result[this.field]))
                .forEach((value, index, arr) => {
                data[this.field] = Object.assign(Object.assign({}, value), data[this.field]);
            });
            return data;
        };
    }
}
exports.MediatorCombineUnion = MediatorCombineUnion;
//# sourceMappingURL=MediatorCombineUnion.js.map

/***/ }),

/***/ 9114:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3868), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3868:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediatorNumber = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A mediator that can mediate over a single number field.
 *
 * It takes the required 'field' and 'type' parameters.
 * The 'field' parameter represents the field name of the test result field over which must be mediated.
 * The 'type' parameter
 */
class MediatorNumber extends core_1.Mediator {
    constructor(args) {
        super(args);
        this.indexPicker = this.createIndexPicker();
    }
    /**
     * @return {(tests: T[]) => number} A function that returns the index of the test result
     *                                  that has been chosen by this mediator.
     */
    createIndexPicker() {
        switch (this.type) {
            case MediatorNumber.MIN:
                return (tests) => tests.reduce((prev, curr, i) => {
                    const val = this.getOrDefault(curr[this.field], Infinity);
                    return val !== null && (Number.isNaN(prev[0]) || prev[0] > val) ? [val, i] : prev;
                }, [Number.NaN, -1])[1];
            case MediatorNumber.MAX:
                return (tests) => tests.reduce((prev, curr, i) => {
                    const val = this.getOrDefault(curr[this.field], -Infinity);
                    return val !== null && (Number.isNaN(prev[0]) || prev[0] < val) ? [val, i] : prev;
                }, [Number.NaN, -1])[1];
            default:
                throw new Error(`No valid "type" value was given, must be either ${MediatorNumber.MIN} or ${MediatorNumber.MAX}, but got: ${this.type}`);
        }
    }
    getOrDefault(value, defaultValue) {
        return value === undefined ? defaultValue : value;
    }
    async mediateWith(action, testResults) {
        let promises = testResults.map(({ reply }) => reply);
        const errors = [];
        if (this.ignoreErrors) {
            const dummy = {};
            dummy[this.field] = null;
            promises = promises.map(promise => promise.catch(error => {
                errors.push(error);
                return dummy;
            }));
        }
        const results = await Promise.all(promises);
        const index = this.indexPicker(results);
        if (index < 0) {
            throw new Error(`All actors rejected their test in ${this.name}\n${errors.map(error => error.message).join('\n')}`);
        }
        return testResults[index].actor;
    }
}
exports.MediatorNumber = MediatorNumber;
MediatorNumber.MIN = 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/' +
    'Mediator/Number/type/TypeMin';
MediatorNumber.MAX = 'https://linkedsoftwaredependencies.org/bundles/npm/@comunica/mediator-number/' +
    'Mediator/Number/type/TypeMax';
//# sourceMappingURL=MediatorNumber.js.map

/***/ }),

/***/ 6277:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8794), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediatorRace = void 0;
const core_1 = __webpack_require__(1709);
/**
 * A mediator that picks the first actor that resolves its test.
 */
class MediatorRace extends core_1.Mediator {
    constructor(args) {
        super(args);
    }
    mediateWith(action, testResults) {
        return new Promise((resolve, reject) => {
            const errors = [];
            for (const testResult of testResults) {
                testResult.reply.then(() => {
                    resolve(testResult.actor);
                }).catch(error => {
                    // Reject if all replies were rejected
                    errors.push(error);
                    if (errors.length === testResults.length) {
                        reject(new Error(`${this.name} mediated over all rejecting actors:\n${errors.map(subError => subError.message).join('\n')}`));
                    }
                });
            }
        });
    }
}
exports.MediatorRace = MediatorRace;
//# sourceMappingURL=MediatorRace.js.map

/***/ }),

/***/ 9912:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const DynamicNestedLoopJoin = __webpack_require__(6404);
const HashJoin = __webpack_require__(1917);
const NestedLoopJoin = __webpack_require__(6491);
const SymmetricHashJoin = __webpack_require__(7454);

const MergeStream = __webpack_require__(3065);

module.exports = {
    DynamicNestedLoopJoin,
    HashJoin,
    NestedLoopJoin,
    SymmetricHashJoin,

    MergeStream
};

/***/ }),

/***/ 6404:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let AsyncIterator = __webpack_require__(7400);
let MultiTransformIterator = AsyncIterator.MultiTransformIterator;
let SimpleTransformIterator = AsyncIterator.SimpleTransformIterator;

// Nested Loop Join, but the values of the inner loop are determined by each value of the outer loop, possibly reducing the number of necessary checks
class DynamicNestedLoopJoin extends MultiTransformIterator
{
    constructor (left, funRight, funJoin)
    {
        super(left);
        
        this.funRight = funRight;
        this.funJoin = funJoin;
    }
    
    _createTransformer (leftItem)
    {
        return new SimpleTransformIterator(this.funRight(leftItem), { transform: (rightItem, done) =>
        {
            let result = this.funJoin(leftItem, rightItem);
            if (result !== null)
                this._push(result);
            done();
        }});
    }
}

module.exports = DynamicNestedLoopJoin;

/***/ }),

/***/ 1917:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let AsyncIterator = __webpack_require__(7400).AsyncIterator;

// https://en.wikipedia.org/wiki/Hash_join
class HashJoin extends AsyncIterator
{
    constructor (left, right, funHash, funJoin)
    {
        super();

        this.addedDataListener = false;
        this.left = left;
        this.right = right;
        this.funHash = funHash;
        this.funJoin = funJoin;
        
        this.leftMap = new Map();
    
        this.match    = null;
        this.matches  = [];
        this.matchIdx = 0;
        
        
        this.readable = false;

        this.left.on('end', allowJoining.bind(this));

        function allowJoining ()
        {
            if (this.leftMap.size <= 0)
                return this.close();
            this.readable = true;
            this.right.on('readable', () => this.readable = true);
            this.right.on('end', () => { if (!this.hasResults()) this._end(); });
        }

        this.on('newListener', (eventName) =>
        {
            if (eventName === 'data' && !this.addedDataListener)
            {
                this.addedDataListener = true;
                this._addDataListener();
            }
        })
    }
    
    hasResults ()
    {
        return !this.right.ended || this.matchIdx < this.matches.length;
    }
    
    close ()
    {
        super.close();
        this.left.close();
        this.right.close();
    }
    
    read ()
    {
        if (!this.addedDataListener)
        {
            this.addedDataListener = true;
            this._addDataListener();
        }

        if (this.ended || !this.readable)
            return null;
    
        while (this.matchIdx < this.matches.length)
        {
            let item = this.matches[this.matchIdx++];
            let result = this.funJoin(item, this.match);
            if (result !== null)
                return result;
        }

        if (!this.hasResults())
            this._end();
    
        this.match = this.right.read();
    
        if (this.match === null)
        {
            this.readable = false;
            return null;
        }
    
        let hash = this.funHash(this.match);
        this.matches = this.leftMap.get(hash) || [];
        this.matchIdx = 0;
    
        // array is filled again so recursive call can have results
        return this.read();
    }

    _addDataListener()
    {
        this.left.on('data', addItem.bind(this));

        function addItem(item)
        {
            let hash = this.funHash(item);
            if (!this.leftMap.has(hash))
                this.leftMap.set(hash, []);
            let arr = this.leftMap.get(hash);
            arr.push(item);
        }
    }
}

module.exports = HashJoin;

/***/ }),

/***/ 6491:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let AsyncIterator = __webpack_require__(7400);
let MultiTransformIterator = AsyncIterator.MultiTransformIterator;
let SimpleTransformIterator = AsyncIterator.SimpleTransformIterator;

// https://en.wikipedia.org/wiki/Nested_loop_join
class NestedLoopJoin extends MultiTransformIterator
{
    constructor (left, right, funJoin, options)
    {
        super(left, options);
        
        this.right = right;
        this.funJoin = funJoin; // function that joins 2 elements or returns null if join is not possible
        this.on('end', () => this.right.close());
    }
    
    close ()
    {
        super.close();
        this.right.close();
    }
    
    _createTransformer (leftItem)
    {
        return new SimpleTransformIterator(this.right.clone(), { transform: (rightItem, done) =>
        {
            let result = this.funJoin(leftItem, rightItem);
            if (result !== null)
                this._push(result);
            done();
        }});
    }
}

module.exports = NestedLoopJoin;

/***/ }),

/***/ 7454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let AsyncIterator = __webpack_require__(7400).AsyncIterator;

// https://en.wikipedia.org/wiki/Symmetric_Hash_Join
class SymmetricHashJoin extends AsyncIterator
{
    constructor (left, right, funHash, funJoin)
    {
        super();
        
        this.left  = left;
        this.right = right;
        
        this.funHash = funHash;
        this.funJoin = funJoin;
    
        this.usedLeft = false;
        this.leftMap  = new Map();
        this.rightMap = new Map();
        
        this.on('end', () => this._cleanup() );
        
        this.match    = null;
        this.matches  = [];
        this.matchIdx = 0;

        if (this.left.readable || this.right.readable)
        {
            this.readable = true;
        }
        
        this.left.on('readable', () => this.readable = true);
        this.right.on('readable', () => this.readable = true);
        
        // this needs to be here since it's possible the left/right streams only get ended after there are no more results left
        this.left.on ('end', () => { if (!this.hasResults()) this._end(); });
        this.right.on('end', () => { if (!this.hasResults()) this._end(); });
    }
    
    hasResults()
    {
        return !this.left.ended  || !this.right.ended || this.matchIdx < this.matches.length;
    }
    
    _cleanup ()
    {
        // motivate garbage collector to remove these
        this.leftMap = null;
        this.rightMap = null;
        this.matches = null;
    }
    
    close ()
    {
        super.close();
        this.left.close();
        this.right.close();
    }
    
    read ()
    {
        if (this.ended)
            return null;
        
        while (this.matchIdx < this.matches.length)
        {
            let item = this.matches[this.matchIdx++];
            let result = this.usedLeft ? this.funJoin(this.match, item) : this.funJoin(item, this.match);
            if (result !== null)
                return result;
        }
        
        if (!this.hasResults())
            this._end();
        
        let item = null;
        // try both streams if the first one has no value
        for (let i = 0; i < 2; ++i)
        {
            item = this.usedLeft ? this.right.read() : this.left.read();
            this.usedLeft = !this.usedLeft; // try other stream next time
            
            // found a result, no need to check the other stream this run
            if (item !== null)
                break;
        }
        
        if (item === null)
        {
            this.readable = false;
            return null;
        }
        
        let hash = this.funHash(item);
        let map = this.usedLeft ? this.leftMap : this.rightMap;
        if (!map.has(hash))
            map.set(hash, []);
        let arr = map.get(hash);
        arr.push(item);
    
        this.match = item;
        this.matches = (this.usedLeft ? this.rightMap : this.leftMap).get(hash) || [];
        this.matchIdx = 0;
        
        // array is filled again so recursive call can have results
        return this.read();
    }
}

module.exports = SymmetricHashJoin;

/***/ }),

/***/ 3065:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


let AsyncIterator = __webpack_require__(7400).AsyncIterator;

// merges the contents of multiple streams
class MergeIterator extends AsyncIterator
{
    constructor (streams)
    {
        super();
        
        if (!Array.isArray(streams))
            streams = Array.prototype.slice.call(arguments);
        
        this.streams = streams;
        
        for (let stream of streams)
        {
            stream.on('readable', () => this.emit('readable'));
            stream.on('end', () => this._removeStream(stream));
        }
        
        if (this.streams.length === 0)
            this.close();
        
        this.idx = this.streams.length-1;
    }
    
    _removeStream (stream)
    {
        let idx = this.streams.indexOf(stream);
        if (idx < 0)
            return;
        
        this.streams.splice(idx, 1);
        if (this.idx >= this.streams.length)
            --this.idx;
        
        if (this.streams.length === 0)
            this._end();
    }
    
    close ()
    {
        super.close();
        for (let stream of this.streams)
            stream.close();
    }
    
    read ()
    {
        for (let attempts = 0; attempts < this.streams.length; ++attempts)
        {
            this.idx = (this.idx + 1) % this.streams.length;
            let item = this.streams[this.idx].read();
            if (item !== null)
                return item;
        }
        
        return null;
    }
}

module.exports = MergeIterator;

/***/ }),

/***/ 5456:
/***/ ((module) => {

"use strict";
/* jshint esversion: 6 */
/* jslint node: true */


module.exports = function (object) {
  return serialize(object);

  function serialize (object) {
    if (object === null || typeof object !== 'object' || object.toJSON != null) {
      return JSON.stringify(object);
    }
    if (Array.isArray(object) && object.length === 0) {
      return '[]';
    }
    if (Array.isArray(object) && object.length === 1) {
      return '[' + serialize(object[0]) + ']';
    }
    if (Array.isArray(object)) {
      return '[' + object.reduce((t, cv, ci) => {
        t = (ci === 1 ? serialize(t) : t);
        return t + ',' + serialize(cv);
      }) + ']';
    }
    const keys = Object.keys(object);
    if (keys.length === 0) {
      return '{}';
    }
    if (keys.length === 1) {
      return '{' + serialize(keys[0]) + ':' + serialize(object[keys[0]]) + '}';
    }
    return '{' + keys.sort().reduce((t, cv, ci) => {
      t = (ci === 1 ? serialize(t) + ':' + serialize(object[t]) : t);
      return t + ',' + serialize(cv) + ':' + serialize(object[cv]);
    }) + '}';
  }
};


/***/ }),

/***/ 3776:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function (globalScope) {
  'use strict';


  /*
   *  decimal.js v10.2.1
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2020 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   */


  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


    // The maximum exponent magnitude.
    // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
  var EXP_LIMIT = 9e15,                      // 0 to 9e15

    // The limit on the value of `precision`, and on the value of the first argument to
    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
    MAX_DIGITS = 1e9,                        // 0 to 1e9

    // Base conversion alphabet.
    NUMERALS = '0123456789abcdef',

    // The natural logarithm of 10 (1025 digits).
    LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',

    // Pi (1025 digits).
    PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',


    // The initial configuration properties of the Decimal constructor.
    DEFAULTS = {

      // These values must be integers within the stated ranges (inclusive).
      // Most of these values can be changed at run-time using the `Decimal.config` method.

      // The maximum number of significant digits of the result of a calculation or base conversion.
      // E.g. `Decimal.config({ precision: 20 });`
      precision: 20,                         // 1 to MAX_DIGITS

      // The rounding mode used when rounding to `precision`.
      //
      // ROUND_UP         0 Away from zero.
      // ROUND_DOWN       1 Towards zero.
      // ROUND_CEIL       2 Towards +Infinity.
      // ROUND_FLOOR      3 Towards -Infinity.
      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
      //
      // E.g.
      // `Decimal.rounding = 4;`
      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
      rounding: 4,                           // 0 to 8

      // The modulo mode used when calculating the modulus: a mod n.
      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
      // The remainder (r) is calculated as: r = a - n * q.
      //
      // UP         0 The remainder is positive if the dividend is negative, else is negative.
      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
      // HALF_EVEN  6 The IEEE 754 remainder function.
      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
      //
      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
      // division (9) are commonly used for the modulus operation. The other rounding modes can also
      // be used, but they may not give useful results.
      modulo: 1,                             // 0 to 9

      // The exponent value at and beneath which `toString` returns exponential notation.
      // JavaScript numbers: -7
      toExpNeg: -7,                          // 0 to -EXP_LIMIT

      // The exponent value at and above which `toString` returns exponential notation.
      // JavaScript numbers: 21
      toExpPos:  21,                         // 0 to EXP_LIMIT

      // The minimum exponent value, beneath which underflow to zero occurs.
      // JavaScript numbers: -324  (5e-324)
      minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT

      // The maximum exponent value, above which overflow to Infinity occurs.
      // JavaScript numbers: 308  (1.7976931348623157e+308)
      maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT

      // Whether to use cryptographically-secure random number generation, if available.
      crypto: false                          // true/false
    },


  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


    Decimal, inexact, noConflict, quadrant,
    external = true,

    decimalError = '[DecimalError] ',
    invalidArgument = decimalError + 'Invalid argument: ',
    precisionLimitExceeded = decimalError + 'Precision limit exceeded',
    cryptoUnavailable = decimalError + 'crypto unavailable',

    mathfloor = Math.floor,
    mathpow = Math.pow,

    isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

    BASE = 1e7,
    LOG_BASE = 7,
    MAX_SAFE_INTEGER = 9007199254740991,

    LN10_PRECISION = LN10.length - 1,
    PI_PRECISION = PI.length - 1,

    // Decimal.prototype object
    P = { name: '[object Decimal]' };


  // Decimal prototype methods


  /*
   *  absoluteValue             abs
   *  ceil
   *  comparedTo                cmp
   *  cosine                    cos
   *  cubeRoot                  cbrt
   *  decimalPlaces             dp
   *  dividedBy                 div
   *  dividedToIntegerBy        divToInt
   *  equals                    eq
   *  floor
   *  greaterThan               gt
   *  greaterThanOrEqualTo      gte
   *  hyperbolicCosine          cosh
   *  hyperbolicSine            sinh
   *  hyperbolicTangent         tanh
   *  inverseCosine             acos
   *  inverseHyperbolicCosine   acosh
   *  inverseHyperbolicSine     asinh
   *  inverseHyperbolicTangent  atanh
   *  inverseSine               asin
   *  inverseTangent            atan
   *  isFinite
   *  isInteger                 isInt
   *  isNaN
   *  isNegative                isNeg
   *  isPositive                isPos
   *  isZero
   *  lessThan                  lt
   *  lessThanOrEqualTo         lte
   *  logarithm                 log
   *  [maximum]                 [max]
   *  [minimum]                 [min]
   *  minus                     sub
   *  modulo                    mod
   *  naturalExponential        exp
   *  naturalLogarithm          ln
   *  negated                   neg
   *  plus                      add
   *  precision                 sd
   *  round
   *  sine                      sin
   *  squareRoot                sqrt
   *  tangent                   tan
   *  times                     mul
   *  toBinary
   *  toDecimalPlaces           toDP
   *  toExponential
   *  toFixed
   *  toFraction
   *  toHexadecimal             toHex
   *  toNearest
   *  toNumber
   *  toOctal
   *  toPower                   pow
   *  toPrecision
   *  toSignificantDigits       toSD
   *  toString
   *  truncated                 trunc
   *  valueOf                   toJSON
   */


  /*
   * Return a new Decimal whose value is the absolute value of this Decimal.
   *
   */
  P.absoluteValue = P.abs = function () {
    var x = new this.constructor(this);
    if (x.s < 0) x.s = 1;
    return finalise(x);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of positive Infinity.
   *
   */
  P.ceil = function () {
    return finalise(new this.constructor(this), this.e + 1, 2);
  };


  /*
   * Return
   *   1    if the value of this Decimal is greater than the value of `y`,
   *  -1    if the value of this Decimal is less than the value of `y`,
   *   0    if they have the same value,
   *   NaN  if the value of either Decimal is NaN.
   *
   */
  P.comparedTo = P.cmp = function (y) {
    var i, j, xdL, ydL,
      x = this,
      xd = x.d,
      yd = (y = new x.constructor(y)).d,
      xs = x.s,
      ys = y.s;

    // Either NaN or ±Infinity?
    if (!xd || !yd) {
      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }

    // Either zero?
    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;

    // Signs differ?
    if (xs !== ys) return xs;

    // Compare exponents.
    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;

    xdL = xd.length;
    ydL = yd.length;

    // Compare digit by digit.
    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
      if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }

    // Compare lengths.
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
  };


  /*
   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * cos(0)         = 1
   * cos(-0)        = 1
   * cos(Infinity)  = NaN
   * cos(-Infinity) = NaN
   * cos(NaN)       = NaN
   *
   */
  P.cosine = P.cos = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.d) return new Ctor(NaN);

    // cos(0) = cos(-0) = 1
    if (!x.d[0]) return new Ctor(1);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
  };


  /*
   *
   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   *  cbrt(0)  =  0
   *  cbrt(-0) = -0
   *  cbrt(1)  =  1
   *  cbrt(-1) = -1
   *  cbrt(N)  =  N
   *  cbrt(-I) = -I
   *  cbrt(I)  =  I
   *
   * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
   *
   */
  P.cubeRoot = P.cbrt = function () {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);
    external = false;

    // Initial estimate.
    s = x.s * mathpow(x.s * x, 1 / 3);

     // Math.cbrt underflow/overflow?
     // Pass x to Math.pow as integer, then adjust the exponent of the result.
    if (!s || Math.abs(s) == 1 / 0) {
      n = digitsToString(x.d);
      e = x.e;

      // Adjust n exponent so it is a multiple of 3 away from x exponent.
      if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');
      s = mathpow(n, 1 / 3);

      // Rarely, e may be one less than the result exponent value.
      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
      r.s = x.s;
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Halley's method.
    // TODO? Compare Newton's method.
    for (;;) {
      t = r;
      t3 = t.times(t).times(t);
      t3plusx = t3.plus(x);
      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
        // , i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return the number of decimal places of the value of this Decimal.
   *
   */
  P.decimalPlaces = P.dp = function () {
    var w,
      d = this.d,
      n = NaN;

    if (d) {
      w = d.length - 1;
      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;

      // Subtract the number of trailing zeros of the last word.
      w = d[w];
      if (w) for (; w % 10 == 0; w /= 10) n--;
      if (n < 0) n = 0;
    }

    return n;
  };


  /*
   *  n / 0 = I
   *  n / N = N
   *  n / I = 0
   *  0 / n = 0
   *  0 / 0 = N
   *  0 / N = N
   *  0 / I = 0
   *  N / n = N
   *  N / 0 = N
   *  N / N = N
   *  N / I = N
   *  I / n = I
   *  I / 0 = I
   *  I / N = N
   *  I / I = N
   *
   * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedBy = P.div = function (y) {
    return divide(this, new this.constructor(y));
  };


  /*
   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
   * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.dividedToIntegerBy = P.divToInt = function (y) {
    var x = this,
      Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
  };


  /*
   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
   *
   */
  P.equals = P.eq = function (y) {
    return this.cmp(y) === 0;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
   * direction of negative Infinity.
   *
   */
  P.floor = function () {
    return finalise(new this.constructor(this), this.e + 1, 3);
  };


  /*
   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
   * false.
   *
   */
  P.greaterThan = P.gt = function (y) {
    return this.cmp(y) > 0;
  };


  /*
   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
   * otherwise return false.
   *
   */
  P.greaterThanOrEqualTo = P.gte = function (y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
  };


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [1, Infinity]
   *
   * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
   *
   * cosh(0)         = 1
   * cosh(-0)        = 1
   * cosh(Infinity)  = Infinity
   * cosh(-Infinity) = Infinity
   * cosh(NaN)       = NaN
   *
   *  x        time taken (ms)   result
   * 1000      9                 9.8503555700852349694e+433
   * 10000     25                4.4034091128314607936e+4342
   * 100000    171               1.4033316802130615897e+43429
   * 1000000   3817              1.5166076984010437725e+434294
   * 10000000  abandoned after 2 minute wait
   *
   * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
   *
   */
  P.hyperbolicCosine = P.cosh = function () {
    var k, n, pr, rm, len,
      x = this,
      Ctor = x.constructor,
      one = new Ctor(1);

    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero()) return one;

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
    // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))

    // Estimate the optimum number of times to use the argument reduction.
    // TODO? Estimation reused from cosine() and may not be optimal here.
    if (len < 32) {
      k = Math.ceil(len / 3);
      n = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      n = '2.3283064365386962890625e-10';
    }

    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);

    // Reverse argument reduction
    var cosh2_x,
      i = k,
      d8 = new Ctor(8);
    for (; i--;) {
      cosh2_x = x.times(x);
      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }

    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
   *
   * sinh(0)         = 0
   * sinh(-0)        = -0
   * sinh(Infinity)  = Infinity
   * sinh(-Infinity) = -Infinity
   * sinh(NaN)       = NaN
   *
   * x        time taken (ms)
   * 10       2 ms
   * 100      5 ms
   * 1000     14 ms
   * 10000    82 ms
   * 100000   886 ms            1.4033316802130615897e+43429
   * 200000   2613 ms
   * 300000   5407 ms
   * 400000   8824 ms
   * 500000   13026 ms          8.7080643612718084129e+217146
   * 1000000  48543 ms
   *
   * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
   *
   */
  P.hyperbolicSine = P.sinh = function () {
    var k, pr, rm, len,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;

    if (len < 3) {
      x = taylorSeries(Ctor, 2, x, x, true);
    } else {

      // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
      // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
      // 3 multiplications and 1 addition

      // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
      // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
      // 4 multiplications and 2 additions

      // Estimate the optimum number of times to use the argument reduction.
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;

      x = x.times(1 / tinyPow(5, k));
      x = taylorSeries(Ctor, 2, x, x, true);

      // Reverse argument reduction
      var sinh2_x,
        d5 = new Ctor(5),
        d16 = new Ctor(16),
        d20 = new Ctor(20);
      for (; k--;) {
        sinh2_x = x.times(x);
        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
      }
    }

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * tanh(x) = sinh(x) / cosh(x)
   *
   * tanh(0)         = 0
   * tanh(-0)        = -0
   * tanh(Infinity)  = 1
   * tanh(-Infinity) = -1
   * tanh(NaN)       = NaN
   *
   */
  P.hyperbolicTangent = P.tanh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(x.s);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;

    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
  };


  /*
   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
   * this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [0, pi]
   *
   * acos(x) = pi/2 - asin(x)
   *
   * acos(0)       = pi/2
   * acos(-0)      = pi/2
   * acos(1)       = 0
   * acos(-1)      = pi
   * acos(1/2)     = pi/3
   * acos(-1/2)    = 2*pi/3
   * acos(|x| > 1) = NaN
   * acos(NaN)     = NaN
   *
   */
  P.inverseCosine = P.acos = function () {
    var halfPi,
      x = this,
      Ctor = x.constructor,
      k = x.abs().cmp(1),
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (k !== -1) {
      return k === 0
        // |x| is 1
        ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)
        // |x| > 1 or x is NaN
        : new Ctor(NaN);
    }

    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);

    // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.asin();
    halfPi = getPi(Ctor, pr + 4, rm).times(0.5);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return halfPi.minus(x);
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
   * value of this Decimal.
   *
   * Domain: [1, Infinity]
   * Range: [0, Infinity]
   *
   * acosh(x) = ln(x + sqrt(x^2 - 1))
   *
   * acosh(x < 1)     = NaN
   * acosh(NaN)       = NaN
   * acosh(Infinity)  = Infinity
   * acosh(-Infinity) = NaN
   * acosh(0)         = NaN
   * acosh(-0)        = NaN
   * acosh(1)         = 0
   * acosh(-1)        = NaN
   *
   */
  P.inverseHyperbolicCosine = P.acosh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).minus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * asinh(x) = ln(x + sqrt(x^2 + 1))
   *
   * asinh(NaN)       = NaN
   * asinh(Infinity)  = Infinity
   * asinh(-Infinity) = -Infinity
   * asinh(0)         = 0
   * asinh(-0)        = -0
   *
   */
  P.inverseHyperbolicSine = P.asinh = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite() || x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;

    x = x.times(x).plus(1).sqrt().plus(x);

    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.ln();
  };


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
   * value of this Decimal.
   *
   * Domain: [-1, 1]
   * Range: [-Infinity, Infinity]
   *
   * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
   *
   * atanh(|x| > 1)   = NaN
   * atanh(NaN)       = NaN
   * atanh(Infinity)  = NaN
   * atanh(-Infinity) = NaN
   * atanh(0)         = 0
   * atanh(-0)        = -0
   * atanh(1)         = Infinity
   * atanh(-1)        = -Infinity
   *
   */
  P.inverseHyperbolicTangent = P.atanh = function () {
    var pr, rm, wpr, xsd,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();

    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);

    Ctor.precision = wpr = xsd - x.e;

    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);

    Ctor.precision = pr + 4;
    Ctor.rounding = 1;

    x = x.ln();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(0.5);
  };


  /*
   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
   * Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
   *
   * asin(0)       = 0
   * asin(-0)      = -0
   * asin(1/2)     = pi/6
   * asin(-1/2)    = -pi/6
   * asin(1)       = pi/2
   * asin(-1)      = -pi/2
   * asin(|x| > 1) = NaN
   * asin(NaN)     = NaN
   *
   * TODO? Compare performance of Taylor series.
   *
   */
  P.inverseSine = P.asin = function () {
    var halfPi, k,
      pr, rm,
      x = this,
      Ctor = x.constructor;

    if (x.isZero()) return new Ctor(x);

    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (k !== -1) {

      // |x| is 1
      if (k === 0) {
        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
        halfPi.s = x.s;
        return halfPi;
      }

      // |x| > 1 or x is NaN
      return new Ctor(NaN);
    }

    // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6

    Ctor.precision = pr + 6;
    Ctor.rounding = 1;

    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return x.times(2);
  };


  /*
   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
   * of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi/2, pi/2]
   *
   * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
   *
   * atan(0)         = 0
   * atan(-0)        = -0
   * atan(1)         = pi/4
   * atan(-1)        = -pi/4
   * atan(Infinity)  = pi/2
   * atan(-Infinity) = -pi/2
   * atan(NaN)       = NaN
   *
   */
  P.inverseTangent = P.atan = function () {
    var i, j, k, n, px, t, r, wpr, x2,
      x = this,
      Ctor = x.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding;

    if (!x.isFinite()) {
      if (!x.s) return new Ctor(NaN);
      if (pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.5);
        r.s = x.s;
        return r;
      }
    } else if (x.isZero()) {
      return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.25);
      r.s = x.s;
      return r;
    }

    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;

    // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);

    // Argument reduction
    // Ensure |x| < 0.42
    // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))

    k = Math.min(28, wpr / LOG_BASE + 2 | 0);

    for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));

    external = false;

    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;

    // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
    for (; i !== -1;) {
      px = px.times(x2);
      t = r.minus(px.div(n += 2));

      px = px.times(x2);
      r = t.plus(px.div(n += 2));

      if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
    }

    if (k) r = r.times(2 << (k - 1));

    external = true;

    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
  };


  /*
   * Return true if the value of this Decimal is a finite number, otherwise return false.
   *
   */
  P.isFinite = function () {
    return !!this.d;
  };


  /*
   * Return true if the value of this Decimal is an integer, otherwise return false.
   *
   */
  P.isInteger = P.isInt = function () {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
  };


  /*
   * Return true if the value of this Decimal is NaN, otherwise return false.
   *
   */
  P.isNaN = function () {
    return !this.s;
  };


  /*
   * Return true if the value of this Decimal is negative, otherwise return false.
   *
   */
  P.isNegative = P.isNeg = function () {
    return this.s < 0;
  };


  /*
   * Return true if the value of this Decimal is positive, otherwise return false.
   *
   */
  P.isPositive = P.isPos = function () {
    return this.s > 0;
  };


  /*
   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
   *
   */
  P.isZero = function () {
    return !!this.d && this.d[0] === 0;
  };


  /*
   * Return true if the value of this Decimal is less than `y`, otherwise return false.
   *
   */
  P.lessThan = P.lt = function (y) {
    return this.cmp(y) < 0;
  };


  /*
   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
   *
   */
  P.lessThanOrEqualTo = P.lte = function (y) {
    return this.cmp(y) < 1;
  };


  /*
   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * If no base is specified, return log[10](arg).
   *
   * log[base](arg) = ln(arg) / ln(base)
   *
   * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
   * otherwise:
   *
   * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
   * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
   * between the result and the correctly rounded result will be one ulp (unit in the last place).
   *
   * log[-b](a)       = NaN
   * log[0](a)        = NaN
   * log[1](a)        = NaN
   * log[NaN](a)      = NaN
   * log[Infinity](a) = NaN
   * log[b](0)        = -Infinity
   * log[b](-0)       = -Infinity
   * log[b](-a)       = NaN
   * log[b](1)        = 0
   * log[b](Infinity) = Infinity
   * log[b](NaN)      = NaN
   *
   * [base] {number|string|Decimal} The base of the logarithm.
   *
   */
  P.logarithm = P.log = function (base) {
    var isBase10, d, denominator, k, inf, num, sd, r,
      arg = this,
      Ctor = arg.constructor,
      pr = Ctor.precision,
      rm = Ctor.rounding,
      guard = 5;

    // Default base is 10.
    if (base == null) {
      base = new Ctor(10);
      isBase10 = true;
    } else {
      base = new Ctor(base);
      d = base.d;

      // Return NaN if base is negative, or non-finite, or is 0 or 1.
      if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);

      isBase10 = base.eq(10);
    }

    d = arg.d;

    // Is arg negative, non-finite, 0 or 1?
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }

    // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
    // integer power of 10.
    if (isBase10) {
      if (d.length > 1) {
        inf = true;
      } else {
        for (k = d[0]; k % 10 === 0;) k /= 10;
        inf = k !== 1;
      }
    }

    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);

    // The result will have 5 rounding digits.
    r = divide(num, denominator, sd, 1);

    // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
    // calculate 10 further digits.
    //
    // If the result is known to have an infinite decimal expansion, repeat this until it is clear
    // that the result is above or below the boundary. Otherwise, if after calculating the 10
    // further digits, the last 14 are nines, round up and assume the result is exact.
    // Also assume the result is exact if the last 14 are zero.
    //
    // Example of a result that will be incorrectly rounded:
    // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
    // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
    // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
    // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
    // place is still 2.6.
    if (checkRoundingDigits(r.d, k = pr, rm)) {

      do {
        sd += 10;
        num = naturalLogarithm(arg, sd);
        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
        r = divide(num, denominator, sd, 1);

        if (!inf) {

          // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
            r = finalise(r, pr + 1, 0);
          }

          break;
        }
      } while (checkRoundingDigits(r.d, k += 10, rm));
    }

    external = true;

    return finalise(r, pr, rm);
  };


  /*
   * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.max = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'lt');
  };
   */


  /*
   * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
   *
   * arguments {number|string|Decimal}
   *
  P.min = function () {
    Array.prototype.push.call(arguments, this);
    return maxOrMin(this.constructor, arguments, 'gt');
  };
   */


  /*
   *  n - 0 = n
   *  n - N = N
   *  n - I = -I
   *  0 - n = -n
   *  0 - 0 = 0
   *  0 - N = N
   *  0 - I = -I
   *  N - n = N
   *  N - 0 = N
   *  N - N = N
   *  N - I = N
   *  I - n = I
   *  I - 0 = I
   *  I - N = N
   *  I - I = N
   *
   * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.minus = P.sub = function (y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return y negated if x is finite and y is ±Infinity.
      else if (x.d) y.s = -y.s;

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with different signs.
      // Return NaN if both are ±Infinity with the same sign.
      else y = new Ctor(y.d || x.s !== y.s ? x : NaN);

      return y;
    }

    // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.plus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return y negated if x is zero and y is non-zero.
      if (yd[0]) y.s = -y.s;

      // Return x if y is zero and x is non-zero.
      else if (xd[0]) y = new Ctor(x);

      // Return zero if both are zero.
      // From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.
      else return new Ctor(rm === 3 ? -0 : 0);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);

    xd = xd.slice();
    k = xe - e;

    // If base 1e7 exponents differ...
    if (k) {
      xLTy = k < 0;

      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }

      // Numbers with massively different exponents would result in a very high number of
      // zeros needing to be prepended, but this can be avoided while still ensuring correct
      // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

      if (k > i) {
        k = i;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents.
      d.reverse();
      for (i = k; i--;) d.push(0);
      d.reverse();

    // Base 1e7 exponents equal.
    } else {

      // Check digits to determine which is the bigger number.

      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy) len = i;

      for (i = 0; i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }

      k = 0;
    }

    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }

    len = xd.length;

    // Append zeros to `xd` if shorter.
    // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

    // Subtract yd from xd.
    for (i = yd.length; i > k;) {

      if (xd[--i] < yd[i]) {
        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }

      xd[i] -= yd[i];
    }

    // Remove trailing zeros.
    for (; xd[--len] === 0;) xd.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xd[0] === 0; xd.shift()) --e;

    // Zero?
    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   *   n % 0 =  N
   *   n % N =  N
   *   n % I =  n
   *   0 % n =  0
   *  -0 % n = -0
   *   0 % 0 =  N
   *   0 % N =  N
   *   0 % I =  0
   *   N % n =  N
   *   N % 0 =  N
   *   N % N =  N
   *   N % I =  N
   *   I % n =  N
   *   I % 0 =  N
   *   I % N =  N
   *   I % I =  N
   *
   * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * The result depends on the modulo mode.
   *
   */
  P.modulo = P.mod = function (y) {
    var q,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);

    // Return x if y is ±Infinity or x is ±0.
    if (!y.d || x.d && !x.d[0]) {
      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }

    // Prevent rounding of intermediate calculations.
    external = false;

    if (Ctor.modulo == 9) {

      // Euclidian division: q = sign(y) * floor(x / abs(y))
      // result = x - q * y    where  0 <= result < abs(y)
      q = divide(x, y.abs(), 0, 3, 1);
      q.s *= y.s;
    } else {
      q = divide(x, y, 0, Ctor.modulo, 1);
    }

    q = q.times(y);

    external = true;

    return x.minus(q);
  };


  /*
   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.naturalExponential = P.exp = function () {
    return naturalExponential(this);
  };


  /*
   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   */
  P.naturalLogarithm = P.ln = function () {
    return naturalLogarithm(this);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
   * -1.
   *
   */
  P.negated = P.neg = function () {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
  };


  /*
   *  n + 0 = n
   *  n + N = N
   *  n + I = I
   *  0 + n = n
   *  0 + 0 = 0
   *  0 + N = N
   *  0 + I = I
   *  N + n = N
   *  N + 0 = N
   *  N + N = N
   *  N + I = N
   *  I + n = I
   *  I + 0 = I
   *  I + N = N
   *  I + I = I
   *
   * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   */
  P.plus = P.add = function (y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd,
      x = this,
      Ctor = x.constructor;

    y = new Ctor(y);

    // If either is not finite...
    if (!x.d || !y.d) {

      // Return NaN if either is NaN.
      if (!x.s || !y.s) y = new Ctor(NaN);

      // Return x if y is finite and x is ±Infinity.
      // Return x if both are ±Infinity with the same sign.
      // Return NaN if both are ±Infinity with different signs.
      // Return y if x is finite and y is ±Infinity.
      else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);

      return y;
    }

     // If signs differ...
    if (x.s != y.s) {
      y.s = -y.s;
      return x.minus(y);
    }

    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;

    // If either is zero...
    if (!xd[0] || !yd[0]) {

      // Return x if y is zero.
      // Return y if y is non-zero.
      if (!yd[0]) y = new Ctor(x);

      return external ? finalise(y, pr, rm) : y;
    }

    // x and y are finite, non-zero numbers with the same sign.

    // Calculate base 1e7 exponents.
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);

    xd = xd.slice();
    i = k - e;

    // If base 1e7 exponents differ...
    if (i) {

      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }

      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;

      if (i > len) {
        i = len;
        d.length = 1;
      }

      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
      d.reverse();
      for (; i--;) d.push(0);
      d.reverse();
    }

    len = xd.length;
    i = yd.length;

    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }

    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
    for (carry = 0; i;) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }

    if (carry) {
      xd.unshift(carry);
      ++e;
    }

    // Remove trailing zeros.
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    for (len = xd.length; xd[--len] == 0;) xd.pop();

    y.d = xd;
    y.e = getBase10Exponent(xd, e);

    return external ? finalise(y, pr, rm) : y;
  };


  /*
   * Return the number of significant digits of the value of this Decimal.
   *
   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
   *
   */
  P.precision = P.sd = function (z) {
    var k,
      x = this;

    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

    if (x.d) {
      k = getPrecision(x.d);
      if (z && x.e + 1 > k) k = x.e + 1;
    } else {
      k = NaN;
    }

    return k;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
   * rounding mode `rounding`.
   *
   */
  P.round = function () {
    var x = this,
      Ctor = x.constructor;

    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
  };


  /*
   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-1, 1]
   *
   * sin(x) = x - x^3/3! + x^5/5! - ...
   *
   * sin(0)         = 0
   * sin(-0)        = -0
   * sin(Infinity)  = NaN
   * sin(-Infinity) = NaN
   * sin(NaN)       = NaN
   *
   */
  P.sine = P.sin = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;

    x = sine(Ctor, toLessThanHalfPi(Ctor, x));

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
  };


  /*
   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   *  sqrt(-n) =  N
   *  sqrt(N)  =  N
   *  sqrt(-I) =  N
   *  sqrt(I)  =  I
   *  sqrt(0)  =  0
   *  sqrt(-0) = -0
   *
   */
  P.squareRoot = P.sqrt = function () {
    var m, n, sd, r, rep, t,
      x = this,
      d = x.d,
      e = x.e,
      s = x.s,
      Ctor = x.constructor;

    // Negative/NaN/Infinity/zero?
    if (s !== 1 || !d || !d[0]) {
      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }

    external = false;

    // Initial estimate.
    s = Math.sqrt(+x);

    // Math.sqrt underflow/overflow?
    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(d);

      if ((n.length + e) % 2 == 0) n += '0';
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

      if (s == 1 / 0) {
        n = '5e' + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf('e') + 1) + e;
      }

      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }

    sd = (e = Ctor.precision) + 3;

    // Newton-Raphson iteration.
    for (;;) {
      t = r;
      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);

      // TODO? Replace with for-loop and checkRoundingDigits.
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);

        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
        // 4999, i.e. approaching a rounding boundary, continue the iteration.
        if (n == '9999' || !rep && n == '4999') {

          // On the first iteration only, check to see if rounding up gives the exact result as the
          // nines may infinitely repeat.
          if (!rep) {
            finalise(t, e + 1, 0);

            if (t.times(t).eq(x)) {
              r = t;
              break;
            }
          }

          sd += 4;
          rep = 1;
        } else {

          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
          // If not, then there are further digits and m will be truthy.
          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

            // Truncate to the first rounding digit.
            finalise(r, e + 1, 1);
            m = !r.times(r).eq(x);
          }

          break;
        }
      }
    }

    external = true;

    return finalise(r, e, Ctor.rounding, m);
  };


  /*
   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-Infinity, Infinity]
   *
   * tan(0)         = 0
   * tan(-0)        = -0
   * tan(Infinity)  = NaN
   * tan(-Infinity) = NaN
   * tan(NaN)       = NaN
   *
   */
  P.tangent = P.tan = function () {
    var pr, rm,
      x = this,
      Ctor = x.constructor;

    if (!x.isFinite()) return new Ctor(NaN);
    if (x.isZero()) return new Ctor(x);

    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;

    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);

    Ctor.precision = pr;
    Ctor.rounding = rm;

    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
  };


  /*
   *  n * 0 = 0
   *  n * N = N
   *  n * I = I
   *  0 * n = 0
   *  0 * 0 = 0
   *  0 * N = N
   *  0 * I = N
   *  N * n = N
   *  N * 0 = N
   *  N * N = N
   *  N * I = N
   *  I * n = I
   *  I * 0 = N
   *  I * N = N
   *  I * I = I
   *
   * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   */
  P.times = P.mul = function (y) {
    var carry, e, i, k, r, rL, t, xdL, ydL,
      x = this,
      Ctor = x.constructor,
      xd = x.d,
      yd = (y = new Ctor(y)).d;

    y.s *= x.s;

     // If either is NaN, ±Infinity or ±0...
    if (!xd || !xd[0] || !yd || !yd[0]) {

      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd

        // Return NaN if either is NaN.
        // Return NaN if x is ±0 and y is ±Infinity, or y is ±0 and x is ±Infinity.
        ? NaN

        // Return ±Infinity if either is ±Infinity.
        // Return ±0 if either is ±0.
        : !xd || !yd ? y.s / 0 : y.s * 0);
    }

    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;

    // Ensure xd points to the longer array.
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }

    // Initialise the result array with zeros.
    r = [];
    rL = xdL + ydL;
    for (i = rL; i--;) r.push(0);

    // Multiply!
    for (i = ydL; --i >= 0;) {
      carry = 0;
      for (k = xdL + i; k > i;) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }

      r[k] = (r[k] + carry) % BASE | 0;
    }

    // Remove trailing zeros.
    for (; !r[--rL];) r.pop();

    if (carry) ++e;
    else r.shift();

    y.d = r;
    y.e = getBase10Exponent(r, e);

    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
  };


  /*
   * Return a string representing the value of this Decimal in base 2, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toBinary = function (sd, rm) {
    return toStringBinary(this, 2, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
   *
   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toDecimalPlaces = P.toDP = function (dp, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);
    if (dp === void 0) return x;

    checkInt32(dp, 0, MAX_DIGITS);

    if (rm === void 0) rm = Ctor.rounding;
    else checkInt32(rm, 0, 8);

    return finalise(x, dp + x.e + 1, rm);
  };


  /*
   * Return a string representing the value of this Decimal in exponential notation rounded to
   * `dp` fixed decimal places using rounding mode `rounding`.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toExponential = function (dp, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), dp + 1, rm);
      str = finiteToString(x, true, dp + 1);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
   * omitted.
   *
   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
   *
   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   * (-0).toFixed(3) is '0.000'.
   * (-0.5).toFixed(0) is '-0'.
   *
   */
  P.toFixed = function (dp, rm) {
    var str, y,
      x = this,
      Ctor = x.constructor;

    if (dp === void 0) {
      str = finiteToString(x);
    } else {
      checkInt32(dp, 0, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      y = finalise(new Ctor(x), dp + x.e + 1, rm);
      str = finiteToString(y, false, dp + y.e + 1);
    }

    // To determine whether to add the minus sign look at the value before it was rounded,
    // i.e. look at `x` rather than `y`.
    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return an array representing the value of this Decimal as a simple fraction with an integer
   * numerator and an integer denominator.
   *
   * The denominator will be a positive non-zero value less than or equal to the specified maximum
   * denominator. If a maximum denominator is not specified, the denominator will be the lowest
   * value necessary to represent the number exactly.
   *
   * [maxD] {number|string|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
   *
   */
  P.toFraction = function (maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,
      x = this,
      xd = x.d,
      Ctor = x.constructor;

    if (!xd) return new Ctor(x);

    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);

    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);

    if (maxD == null) {

      // d is 10**e, the minimum max-denominator needed.
      maxD = e > 0 ? d : n1;
    } else {
      n = new Ctor(maxD);
      if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
      maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
    }

    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;

    for (;;)  {
      q = divide(n, d, 0, 1, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.cmp(maxD) == 1) break;
      d0 = d1;
      d1 = d2;
      d2 = n1;
      n1 = n0.plus(q.times(d2));
      n0 = d2;
      d2 = d;
      d = n.minus(q.times(d2));
      n = d2;
    }

    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;

    // Determine which fraction is closer to x, n0/d0 or n1/d1?
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1
        ? [n1, d1] : [n0, d0];

    Ctor.precision = pr;
    external = true;

    return r;
  };


  /*
   * Return a string representing the value of this Decimal in base 16, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toHexadecimal = P.toHex = function (sd, rm) {
    return toStringBinary(this, 16, sd, rm);
  };


  /*
   * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
   * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
   *
   * The return value will always have the same sign as this Decimal, unless either this Decimal
   * or `y` is NaN, in which case the return value will be also be NaN.
   *
   * The return value is not affected by the value of `precision`.
   *
   * y {number|string|Decimal} The magnitude to round to a multiple of.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toNearest() rounding mode not an integer: {rm}'
   * 'toNearest() rounding mode out of range: {rm}'
   *
   */
  P.toNearest = function (y, rm) {
    var x = this,
      Ctor = x.constructor;

    x = new Ctor(x);

    if (y == null) {

      // If x is not finite, return x.
      if (!x.d) return x;

      y = new Ctor(1);
      rm = Ctor.rounding;
    } else {
      y = new Ctor(y);
      if (rm === void 0) {
        rm = Ctor.rounding;
      } else {
        checkInt32(rm, 0, 8);
      }

      // If x is not finite, return x if y is not NaN, else NaN.
      if (!x.d) return y.s ? x : y;

      // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
      if (!y.d) {
        if (y.s) y.s = x.s;
        return y;
      }
    }

    // If y is not zero, calculate the nearest multiple of y to x.
    if (y.d[0]) {
      external = false;
      x = divide(x, y, 0, rm, 1).times(y);
      external = true;
      finalise(x);

    // If y is zero, return zero with the sign of x.
    } else {
      y.s = x.s;
      x = y;
    }

    return x;
  };


  /*
   * Return the value of this Decimal converted to a number primitive.
   * Zero keeps its sign.
   *
   */
  P.toNumber = function () {
    return +this;
  };


  /*
   * Return a string representing the value of this Decimal in base 8, round to `sd` significant
   * digits using rounding mode `rm`.
   *
   * If the optional `sd` argument is present then return binary exponential notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toOctal = function (sd, rm) {
    return toStringBinary(this, 8, sd, rm);
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
   * to `precision` significant digits using rounding mode `rounding`.
   *
   * ECMAScript compliant.
   *
   *   pow(x, NaN)                           = NaN
   *   pow(x, ±0)                            = 1

   *   pow(NaN, non-zero)                    = NaN
   *   pow(abs(x) > 1, +Infinity)            = +Infinity
   *   pow(abs(x) > 1, -Infinity)            = +0
   *   pow(abs(x) == 1, ±Infinity)           = NaN
   *   pow(abs(x) < 1, +Infinity)            = +0
   *   pow(abs(x) < 1, -Infinity)            = +Infinity
   *   pow(+Infinity, y > 0)                 = +Infinity
   *   pow(+Infinity, y < 0)                 = +0
   *   pow(-Infinity, odd integer > 0)       = -Infinity
   *   pow(-Infinity, even integer > 0)      = +Infinity
   *   pow(-Infinity, odd integer < 0)       = -0
   *   pow(-Infinity, even integer < 0)      = +0
   *   pow(+0, y > 0)                        = +0
   *   pow(+0, y < 0)                        = +Infinity
   *   pow(-0, odd integer > 0)              = -0
   *   pow(-0, even integer > 0)             = +0
   *   pow(-0, odd integer < 0)              = -Infinity
   *   pow(-0, even integer < 0)             = +Infinity
   *   pow(finite x < 0, finite non-integer) = NaN
   *
   * For non-integer or very large exponents pow(x, y) is calculated using
   *
   *   x^y = exp(y*ln(x))
   *
   * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
   * probability of an incorrectly rounded result
   * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
   * i.e. 1 in 250,000,000,000,000
   *
   * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
   *
   * y {number|string|Decimal} The power to which to raise this Decimal.
   *
   */
  P.toPower = P.pow = function (y) {
    var e, k, pr, r, rm, s,
      x = this,
      Ctor = x.constructor,
      yn = +(y = new Ctor(y));

    // Either ±Infinity, NaN or ±0?
    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));

    x = new Ctor(x);

    if (x.eq(1)) return x;

    pr = Ctor.precision;
    rm = Ctor.rounding;

    if (y.eq(1)) return finalise(x, pr, rm);

    // y exponent
    e = mathfloor(y.e / LOG_BASE);

    // If y is a small integer use the 'exponentiation by squaring' algorithm.
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = intPow(Ctor, x, k, pr);
      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }

    s = x.s;

    // if x is negative
    if (s < 0) {

      // if y is not an integer
      if (e < y.d.length - 1) return new Ctor(NaN);

      // Result is positive if x is negative and the last digit of integer y is even.
      if ((y.d[e] & 1) == 0) s = 1;

      // if x.eq(-1)
      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
        x.s = s;
        return x;
      }
    }

    // Estimate result exponent.
    // x^y = 10^e,  where e = y * log10(x)
    // log10(x) = log10(x_significand) + x_exponent
    // log10(x_significand) = ln(x_significand) / ln(10)
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k)
      ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))
      : new Ctor(k + '').e;

    // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.

    // Overflow/underflow?
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);

    external = false;
    Ctor.rounding = x.s = 1;

    // Estimate the extra guard digits needed to ensure five correct rounding digits from
    // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
    // new Decimal(2.32456).pow('2087987436534566.46411')
    // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
    k = Math.min(12, (e + '').length);

    // r = x^y = exp(y*ln(x))
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);

    // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
    if (r.d) {

      // Truncate to the required precision plus five rounding digits.
      r = finalise(r, pr + 5, 1);

      // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
      // the result.
      if (checkRoundingDigits(r.d, pr, rm)) {
        e = pr + 10;

        // Truncate to the increased precision plus five rounding digits.
        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);

        // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
          r = finalise(r, pr + 1, 0);
        }
      }
    }

    r.s = s;
    external = true;
    Ctor.rounding = rm;

    return finalise(r, pr, rm);
  };


  /*
   * Return a string representing the value of this Decimal rounded to `sd` significant digits
   * using rounding mode `rounding`.
   *
   * Return exponential notation if `sd` is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   */
  P.toPrecision = function (sd, rm) {
    var str,
      x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);

      x = finalise(new Ctor(x), sd, rm);
      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
   * omitted.
   *
   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
   *
   * 'toSD() digits out of range: {sd}'
   * 'toSD() digits not an integer: {sd}'
   * 'toSD() rounding mode not an integer: {rm}'
   * 'toSD() rounding mode out of range: {rm}'
   *
   */
  P.toSignificantDigits = P.toSD = function (sd, rm) {
    var x = this,
      Ctor = x.constructor;

    if (sd === void 0) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS);

      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    }

    return finalise(new Ctor(x), sd, rm);
  };


  /*
   * Return a string representing the value of this Decimal.
   *
   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
   *
   */
  P.toString = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() && !x.isZero() ? '-' + str : str;
  };


  /*
   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
   *
   */
  P.truncated = P.trunc = function () {
    return finalise(new this.constructor(this), this.e + 1, 1);
  };


  /*
   * Return a string representing the value of this Decimal.
   * Unlike `toString`, negative zero will include the minus sign.
   *
   */
  P.valueOf = P.toJSON = function () {
    var x = this,
      Ctor = x.constructor,
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

    return x.isNeg() ? '-' + str : str;
  };


  /*
  // Add aliases to match BigDecimal method names.
  // P.add = P.plus;
  P.subtract = P.minus;
  P.multiply = P.times;
  P.divide = P.div;
  P.remainder = P.mod;
  P.compareTo = P.cmp;
  P.negate = P.neg;
   */


  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


  /*
   *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
   *                           finiteToString, naturalExponential, naturalLogarithm
   *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
   *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
   *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
   *  convertBase              toStringBinary, parseOther
   *  cos                      P.cos
   *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
   *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
   *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
   *                           taylorSeries, atan2, parseOther
   *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
   *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
   *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
   *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
   *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
   *                           P.truncated, divide, getLn10, getPi, naturalExponential,
   *                           naturalLogarithm, ceil, floor, round, trunc
   *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
   *                           toStringBinary
   *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
   *  getLn10                  P.logarithm, naturalLogarithm
   *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
   *  getPrecision             P.precision, P.toFraction
   *  getZeroString            digitsToString, finiteToString
   *  intPow                   P.toPower, parseOther
   *  isOdd                    toLessThanHalfPi
   *  maxOrMin                 max, min
   *  naturalExponential       P.naturalExponential, P.toPower
   *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
   *                           P.toPower, naturalExponential
   *  nonFiniteToString        finiteToString, toStringBinary
   *  parseDecimal             Decimal
   *  parseOther               Decimal
   *  sin                      P.sin
   *  taylorSeries             P.cosh, P.sinh, cos, sin
   *  toLessThanHalfPi         P.cos, P.sin
   *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
   *  truncate                 intPow
   *
   *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
   *                           naturalLogarithm, config, parseOther, random, Decimal
   */


  function digitsToString(d) {
    var i, k, ws,
      indexOfLastWord = d.length - 1,
      str = '',
      w = d[0];

    if (indexOfLastWord > 0) {
      str += w;
      for (i = 1; i < indexOfLastWord; i++) {
        ws = d[i] + '';
        k = LOG_BASE - ws.length;
        if (k) str += getZeroString(k);
        str += ws;
      }

      w = d[i];
      ws = w + '';
      k = LOG_BASE - ws.length;
      if (k) str += getZeroString(k);
    } else if (w === 0) {
      return '0';
    }

    // Remove trailing zeros of last w.
    for (; w % 10 === 0;) w /= 10;

    return str + w;
  }


  function checkInt32(i, min, max) {
    if (i !== ~~i || i < min || i > max) {
      throw Error(invalidArgument + i);
    }
  }


  /*
   * Check 5 rounding digits if `repeating` is null, 4 otherwise.
   * `repeating == null` if caller is `log` or `pow`,
   * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
   */
  function checkRoundingDigits(d, i, rm, repeating) {
    var di, k, r, rd;

    // Get the length of the first word of the array d.
    for (k = d[0]; k >= 10; k /= 10) --i;

    // Is the rounding digit in the first word of d?
    if (--i < 0) {
      i += LOG_BASE;
      di = 0;
    } else {
      di = Math.ceil((i + 1) / LOG_BASE);
      i %= LOG_BASE;
    }

    // i is the index (0 - 6) of the rounding digit.
    // E.g. if within the word 3487563 the first rounding digit is 5,
    // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
    k = mathpow(10, LOG_BASE - i);
    rd = d[di] % k | 0;

    if (repeating == null) {
      if (i < 3) {
        if (i == 0) rd = rd / 100 | 0;
        else if (i == 1) rd = rd / 10 | 0;
        r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
      } else {
        r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&
          (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||
            (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
      }
    } else {
      if (i < 4) {
        if (i == 0) rd = rd / 1000 | 0;
        else if (i == 1) rd = rd / 100 | 0;
        else if (i == 2) rd = rd / 10 | 0;
        r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
      } else {
        r = ((repeating || rm < 4) && rd + 1 == k ||
        (!repeating && rm > 3) && rd + 1 == k / 2) &&
          (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
      }
    }

    return r;
  }


  // Convert string of `baseIn` to an array of numbers of `baseOut`.
  // Eg. convertBase('255', 10, 16) returns [15, 15].
  // Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
  function convertBase(str, baseIn, baseOut) {
    var j,
      arr = [0],
      arrL,
      i = 0,
      strL = str.length;

    for (; i < strL;) {
      for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
      arr[0] += NUMERALS.indexOf(str.charAt(i++));
      for (j = 0; j < arr.length; j++) {
        if (arr[j] > baseOut - 1) {
          if (arr[j + 1] === void 0) arr[j + 1] = 0;
          arr[j + 1] += arr[j] / baseOut | 0;
          arr[j] %= baseOut;
        }
      }
    }

    return arr.reverse();
  }


  /*
   * cos(x) = 1 - x^2/2! + x^4/4! - ...
   * |x| < pi/2
   *
   */
  function cosine(Ctor, x) {
    var k, y,
      len = x.d.length;

    // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
    // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1

    // Estimate the optimum number of times to use the argument reduction.
    if (len < 32) {
      k = Math.ceil(len / 3);
      y = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      y = '2.3283064365386962890625e-10';
    }

    Ctor.precision += k;

    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));

    // Reverse argument reduction
    for (var i = k; i--;) {
      var cos2x = x.times(x);
      x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
    }

    Ctor.precision -= k;

    return x;
  }


  /*
   * Perform division in the specified base.
   */
  var divide = (function () {

    // Assumes non-zero x and k, and hence non-zero result.
    function multiplyInteger(x, k, base) {
      var temp,
        carry = 0,
        i = x.length;

      for (x = x.slice(); i--;) {
        temp = x[i] * k + carry;
        x[i] = temp % base | 0;
        carry = temp / base | 0;
      }

      if (carry) x.unshift(carry);

      return x;
    }

    function compare(a, b, aL, bL) {
      var i, r;

      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0; i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }

      return r;
    }

    function subtract(a, b, aL, base) {
      var i = 0;

      // Subtract b from a.
      for (; aL--;) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }

      // Remove leading zeros.
      for (; !a[0] && a.length > 1;) a.shift();
    }

    return function (x, y, pr, rm, dp, base) {
      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,
        yL, yz,
        Ctor = x.constructor,
        sign = x.s == y.s ? 1 : -1,
        xd = x.d,
        yd = y.d;

      // Either NaN, Infinity or 0?
      if (!xd || !xd[0] || !yd || !yd[0]) {

        return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
          !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :

          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
      }

      if (base) {
        logBase = 1;
        e = x.e - y.e;
      } else {
        base = BASE;
        logBase = LOG_BASE;
        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
      }

      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign);
      qd = q.d = [];

      // Result exponent may be one less than e.
      // The digit array of a Decimal from toStringBinary may have trailing zeros.
      for (i = 0; yd[i] == (xd[i] || 0); i++);

      if (yd[i] > (xd[i] || 0)) e--;

      if (pr == null) {
        sd = pr = Ctor.precision;
        rm = Ctor.rounding;
      } else if (dp) {
        sd = pr + (x.e - y.e) + 1;
      } else {
        sd = pr;
      }

      if (sd < 0) {
        qd.push(1);
        more = true;
      } else {

        // Convert precision in number of base 10 digits to base 1e7 digits.
        sd = sd / logBase + 2 | 0;
        i = 0;

        // divisor < 1e7
        if (yL == 1) {
          k = 0;
          yd = yd[0];
          sd++;

          // k is the carry.
          for (; (i < xL || k) && sd--; i++) {
            t = k * base + (xd[i] || 0);
            qd[i] = t / yd | 0;
            k = t % yd | 0;
          }

          more = k || i < xL;

        // divisor >= 1e7
        } else {

          // Normalise xd and yd so highest order digit of yd is >= base/2
          k = base / (yd[0] + 1) | 0;

          if (k > 1) {
            yd = multiplyInteger(yd, k, base);
            xd = multiplyInteger(xd, k, base);
            yL = yd.length;
            xL = xd.length;
          }

          xi = yL;
          rem = xd.slice(0, yL);
          remL = rem.length;

          // Add zeros to make remainder as long as divisor.
          for (; remL < yL;) rem[remL++] = 0;

          yz = yd.slice();
          yz.unshift(0);
          yd0 = yd[0];

          if (yd[1] >= base / 2) ++yd0;

          do {
            k = 0;

            // Compare divisor and remainder.
            cmp = compare(yd, rem, yL, remL);

            // If divisor < remainder.
            if (cmp < 0) {

              // Calculate trial digit, k.
              rem0 = rem[0];
              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

              // k will be how many times the divisor goes into the current remainder.
              k = rem0 / yd0 | 0;

              //  Algorithm:
              //  1. product = divisor * trial digit (k)
              //  2. if product > remainder: product -= divisor, k--
              //  3. remainder -= product
              //  4. if product was < remainder at 2:
              //    5. compare new remainder and divisor
              //    6. If remainder > divisor: remainder -= divisor, k++

              if (k > 1) {
                if (k >= base) k = base - 1;

                // product = divisor * trial digit.
                prod = multiplyInteger(yd, k, base);
                prodL = prod.length;
                remL = rem.length;

                // Compare product and remainder.
                cmp = compare(prod, rem, prodL, remL);

                // product > remainder.
                if (cmp == 1) {
                  k--;

                  // Subtract divisor from product.
                  subtract(prod, yL < prodL ? yz : yd, prodL, base);
                }
              } else {

                // cmp is -1.
                // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
                // to avoid it. If k is 1 there is a need to compare yd and rem again below.
                if (k == 0) cmp = k = 1;
                prod = yd.slice();
              }

              prodL = prod.length;
              if (prodL < remL) prod.unshift(0);

              // Subtract product from remainder.
              subtract(rem, prod, remL, base);

              // If product was < previous remainder.
              if (cmp == -1) {
                remL = rem.length;

                // Compare divisor and new remainder.
                cmp = compare(yd, rem, yL, remL);

                // If divisor < new remainder, subtract divisor from remainder.
                if (cmp < 1) {
                  k++;

                  // Subtract divisor from remainder.
                  subtract(rem, yL < remL ? yz : yd, remL, base);
                }
              }

              remL = rem.length;
            } else if (cmp === 0) {
              k++;
              rem = [0];
            }    // if cmp === 1, k will be 0

            // Add the next digit, k, to the result array.
            qd[i++] = k;

            // Update the remainder.
            if (cmp && rem[0]) {
              rem[remL++] = xd[xi] || 0;
            } else {
              rem = [xd[xi]];
              remL = 1;
            }

          } while ((xi++ < xL || rem[0] !== void 0) && sd--);

          more = rem[0] !== void 0;
        }

        // Leading zero?
        if (!qd[0]) qd.shift();
      }

      // logBase is 1 when divide is being used for base conversion.
      if (logBase == 1) {
        q.e = e;
        inexact = more;
      } else {

        // To calculate q.e, first get the number of digits of qd[0].
        for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
        q.e = i + e * logBase - 1;

        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
      }

      return q;
    };
  })();


  /*
   * Round `x` to `sd` significant digits using rounding mode `rm`.
   * Check for over/under-flow.
   */
   function finalise(x, sd, rm, isTruncated) {
    var digits, i, j, k, rd, roundUp, w, xd, xdi,
      Ctor = x.constructor;

    // Don't round if sd is null or undefined.
    out: if (sd != null) {
      xd = x.d;

      // Infinity/NaN.
      if (!xd) return x;

      // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
      // w: the word of xd containing rd, a base 1e7 number.
      // xdi: the index of w within xd.
      // digits: the number of digits of w.
      // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
      // they had leading zeros)
      // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

      // Get the length of the first word of the digits array xd.
      for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
      i = sd - digits;

      // Is the rounding digit in the first word of xd?
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];

        // Get the rounding digit at index j of w.
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {

            // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
            for (; k++ <= xdi;) xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];

          // Get the number of digits of w.
          for (digits = 1; k >= 10; k /= 10) digits++;

          // Get the index of rd within w.
          i %= LOG_BASE;

          // Get the index of rd within w, adjusted for leading zeros.
          // The number of leading zeros of w is given by LOG_BASE - digits.
          j = i - LOG_BASE + digits;

          // Get the rounding digit at index j of w.
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }

      // Are there any non-zero digits after the rounding digit?
      isTruncated = isTruncated || sd < 0 ||
        xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));

      // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
      // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
      // will give 714.

      roundUp = rm < 4
        ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
        : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&

          // Check whether the digit to the left of the rounding digit is odd.
          ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
            rm == (x.s < 0 ? 8 : 7));

      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {

          // Convert sd to decimal places.
          sd -= x.e + 1;

          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {

          // Zero.
          xd[0] = x.e = 0;
        }

        return x;
      }

      // Remove excess digits.
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);

        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
        // j > 0 means i > number of leading zeros of w.
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }

      if (roundUp) {
        for (;;) {

          // Is the digit to be rounded up in the first word of xd?
          if (xdi == 0) {

            // i will be the length of xd[0] before k is added.
            for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10) k++;

            // if i != k the length has increased.
            if (i != k) {
              x.e++;
              if (xd[0] == BASE) xd[0] = 1;
            }

            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE) break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }

      // Remove trailing zeros.
      for (i = xd.length; xd[--i] === 0;) xd.pop();
    }

    if (external) {

      // Overflow?
      if (x.e > Ctor.maxE) {

        // Infinity.
        x.d = null;
        x.e = NaN;

      // Underflow?
      } else if (x.e < Ctor.minE) {

        // Zero.
        x.e = 0;
        x.d = [0];
        // Ctor.underflow = true;
      } // else Ctor.underflow = false;
    }

    return x;
  }


  function finiteToString(x, isExp, sd) {
    if (!x.isFinite()) return nonFiniteToString(x);
    var k,
      e = x.e,
      str = digitsToString(x.d),
      len = str.length;

    if (isExp) {
      if (sd && (k = sd - len) > 0) {
        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
      } else if (len > 1) {
        str = str.charAt(0) + '.' + str.slice(1);
      }

      str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
    } else if (e < 0) {
      str = '0.' + getZeroString(-e - 1) + str;
      if (sd && (k = sd - len) > 0) str += getZeroString(k);
    } else if (e >= len) {
      str += getZeroString(e + 1 - len);
      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
    } else {
      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
      if (sd && (k = sd - len) > 0) {
        if (e + 1 === len) str += '.';
        str += getZeroString(k);
      }
    }

    return str;
  }


  // Calculate the base 10 exponent from the base 1e7 exponent.
  function getBase10Exponent(digits, e) {
    var w = digits[0];

    // Add the number of digits of the first word of the digits array.
    for ( e *= LOG_BASE; w >= 10; w /= 10) e++;
    return e;
  }


  function getLn10(Ctor, sd, pr) {
    if (sd > LN10_PRECISION) {

      // Reset global state in case the exception is caught.
      external = true;
      if (pr) Ctor.precision = pr;
      throw Error(precisionLimitExceeded);
    }
    return finalise(new Ctor(LN10), sd, 1, true);
  }


  function getPi(Ctor, sd, rm) {
    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
    return finalise(new Ctor(PI), sd, rm, true);
  }


  function getPrecision(digits) {
    var w = digits.length - 1,
      len = w * LOG_BASE + 1;

    w = digits[w];

    // If non-zero...
    if (w) {

      // Subtract the number of trailing zeros of the last word.
      for (; w % 10 == 0; w /= 10) len--;

      // Add the number of digits of the first word.
      for (w = digits[0]; w >= 10; w /= 10) len++;
    }

    return len;
  }


  function getZeroString(k) {
    var zs = '';
    for (; k--;) zs += '0';
    return zs;
  }


  /*
   * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
   * integer of type number.
   *
   * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
   *
   */
  function intPow(Ctor, x, n, pr) {
    var isTruncated,
      r = new Ctor(1),

      // Max n of 9007199254740991 takes 53 loop iterations.
      // Maximum digits array length; leaves [28, 34] guard digits.
      k = Math.ceil(pr / LOG_BASE + 4);

    external = false;

    for (;;) {
      if (n % 2) {
        r = r.times(x);
        if (truncate(r.d, k)) isTruncated = true;
      }

      n = mathfloor(n / 2);
      if (n === 0) {

        // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
        n = r.d.length - 1;
        if (isTruncated && r.d[n] === 0) ++r.d[n];
        break;
      }

      x = x.times(x);
      truncate(x.d, k);
    }

    external = true;

    return r;
  }


  function isOdd(n) {
    return n.d[n.d.length - 1] & 1;
  }


  /*
   * Handle `max` and `min`. `ltgt` is 'lt' or 'gt'.
   */
  function maxOrMin(Ctor, args, ltgt) {
    var y,
      x = new Ctor(args[0]),
      i = 0;

    for (; ++i < args.length;) {
      y = new Ctor(args[i]);
      if (!y.s) {
        x = y;
        break;
      } else if (x[ltgt](y)) {
        x = y;
      }
    }

    return x;
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
   * digits.
   *
   * Taylor/Maclaurin series.
   *
   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
   *
   * Argument reduction:
   *   Repeat x = x / 32, k += 5, until |x| < 0.1
   *   exp(x) = exp(x / 2^k)^(2^k)
   *
   * Previously, the argument was initially reduced by
   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
   * found to be slower than just dividing repeatedly by 32 as above.
   *
   * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
   * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
   *
   *  exp(Infinity)  = Infinity
   *  exp(-Infinity) = 0
   *  exp(NaN)       = NaN
   *  exp(±0)        = 1
   *
   *  exp(x) is non-terminating for any finite, non-zero x.
   *
   *  The result will always be correctly rounded.
   *
   */
  function naturalExponential(x, sd) {
    var denominator, guard, j, pow, sum, t, wpr,
      rep = 0,
      i = 0,
      k = 0,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // 0/NaN/Infinity?
    if (!x.d || !x.d[0] || x.e > 17) {

      return new Ctor(x.d
        ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0
        : x.s ? x.s < 0 ? 0 : x : 0 / 0);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    t = new Ctor(0.03125);

    // while abs(x) >= 0.1
    while (x.e > -2) {

      // x = x / 2^5
      x = x.times(t);
      k += 5;
    }

    // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
    // necessary to ensure the first 4 rounding digits are correct.
    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
    wpr += guard;
    denominator = pow = sum = new Ctor(1);
    Ctor.precision = wpr;

    for (;;) {
      pow = finalise(pow.times(x), wpr, 1);
      denominator = denominator.times(++i);
      t = sum.plus(divide(pow, denominator, wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        j = k;
        while (j--) sum = finalise(sum.times(sum), wpr, 1);

        // Check to see if the first 4 rounding digits are [49]999.
        // If so, repeat the summation with a higher precision, otherwise
        // e.g. with precision: 18, rounding: 1
        // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {

          if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += 10;
            denominator = pow = t = new Ctor(1);
            i = 0;
            rep++;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
    }
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
   * digits.
   *
   *  ln(-n)        = NaN
   *  ln(0)         = -Infinity
   *  ln(-0)        = -Infinity
   *  ln(1)         = 0
   *  ln(Infinity)  = Infinity
   *  ln(-Infinity) = NaN
   *  ln(NaN)       = NaN
   *
   *  ln(n) (n != 1) is non-terminating.
   *
   */
  function naturalLogarithm(y, sd) {
    var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,
      n = 1,
      guard = 10,
      x = y,
      xd = x.d,
      Ctor = x.constructor,
      rm = Ctor.rounding,
      pr = Ctor.precision;

    // Is x negative or Infinity, NaN, 0 or 1?
    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
      return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
    }

    if (sd == null) {
      external = false;
      wpr = pr;
    } else {
      wpr = sd;
    }

    Ctor.precision = wpr += guard;
    c = digitsToString(xd);
    c0 = c.charAt(0);

    if (Math.abs(e = x.e) < 1.5e15) {

      // Argument reduction.
      // The series converges faster the closer the argument is to 1, so using
      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
      // later be divided by this number, then separate out the power of 10 using
      // ln(a*10^b) = ln(a) + b*ln(10).

      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
      // max n is 6 (gives 0.7 - 1.3)
      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
        x = x.times(y);
        c = digitsToString(x.d);
        c0 = c.charAt(0);
        n++;
      }

      e = x.e;

      if (c0 > 1) {
        x = new Ctor('0.' + c);
        e++;
      } else {
        x = new Ctor(c0 + '.' + c.slice(1));
      }
    } else {

      // The argument reduction method above may result in overflow if the argument y is a massive
      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
      // function using ln(x*10^e) = ln(x) + e*ln(10).
      t = getLn10(Ctor, wpr + 2, pr).times(e + '');
      x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
      Ctor.precision = pr;

      return sd == null ? finalise(x, pr, rm, external = true) : x;
    }

    // x1 is x reduced to a value near 1.
    x1 = x;

    // Taylor series.
    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
    // where x = (y - 1)/(y + 1)    (|x| < 1)
    sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
    x2 = finalise(x.times(x), wpr, 1);
    denominator = 3;

    for (;;) {
      numerator = finalise(numerator.times(x2), wpr, 1);
      t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));

      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
        sum = sum.times(2);

        // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
        // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
        sum = divide(sum, new Ctor(n), wpr, 1);

        // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
        // been repeated previously) and the first 4 rounding digits 9999?
        // If so, restart the summation with a higher precision, otherwise
        // e.g. with precision: 12, rounding: 1
        // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
        // `wpr - guard` is the index of first rounding digit.
        if (sd == null) {
          if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
            Ctor.precision = wpr += guard;
            t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
            x2 = finalise(x.times(x), wpr, 1);
            denominator = rep = 1;
          } else {
            return finalise(sum, Ctor.precision = pr, rm, external = true);
          }
        } else {
          Ctor.precision = pr;
          return sum;
        }
      }

      sum = t;
      denominator += 2;
    }
  }


  // ±Infinity, NaN.
  function nonFiniteToString(x) {
    // Unsigned.
    return String(x.s * x.s / 0);
  }


  /*
   * Parse the value of a new Decimal `x` from string `str`.
   */
  function parseDecimal(x, str) {
    var e, i, len;

    // Decimal point?
    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

    // Exponential form?
    if ((i = str.search(/e/i)) > 0) {

      // Determine exponent.
      if (e < 0) e = i;
      e += +str.slice(i + 1);
      str = str.substring(0, i);
    } else if (e < 0) {

      // Integer.
      e = str.length;
    }

    // Determine leading zeros.
    for (i = 0; str.charCodeAt(i) === 48; i++);

    // Determine trailing zeros.
    for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
    str = str.slice(i, len);

    if (str) {
      len -= i;
      x.e = e = e - i - 1;
      x.d = [];

      // Transform base

      // e is the base 10 exponent.
      // i is where to slice str to get the first word of the digits array.
      i = (e + 1) % LOG_BASE;
      if (e < 0) i += LOG_BASE;

      if (i < len) {
        if (i) x.d.push(+str.slice(0, i));
        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
        str = str.slice(i);
        i = LOG_BASE - str.length;
      } else {
        i -= len;
      }

      for (; i--;) str += '0';
      x.d.push(+str);

      if (external) {

        // Overflow?
        if (x.e > x.constructor.maxE) {

          // Infinity.
          x.d = null;
          x.e = NaN;

        // Underflow?
        } else if (x.e < x.constructor.minE) {

          // Zero.
          x.e = 0;
          x.d = [0];
          // x.constructor.underflow = true;
        } // else x.constructor.underflow = false;
      }
    } else {

      // Zero.
      x.e = 0;
      x.d = [0];
    }

    return x;
  }


  /*
   * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
   */
  function parseOther(x, str) {
    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;

    if (str === 'Infinity' || str === 'NaN') {
      if (!+str) x.s = NaN;
      x.e = NaN;
      x.d = null;
      return x;
    }

    if (isHex.test(str))  {
      base = 16;
      str = str.toLowerCase();
    } else if (isBinary.test(str))  {
      base = 2;
    } else if (isOctal.test(str))  {
      base = 8;
    } else {
      throw Error(invalidArgument + str);
    }

    // Is there a binary exponent part?
    i = str.search(/p/i);

    if (i > 0) {
      p = +str.slice(i + 1);
      str = str.substring(2, i);
    } else {
      str = str.slice(2);
    }

    // Convert `str` as an integer then divide the result by `base` raised to a power such that the
    // fraction part will be restored.
    i = str.indexOf('.');
    isFloat = i >= 0;
    Ctor = x.constructor;

    if (isFloat) {
      str = str.replace('.', '');
      len = str.length;
      i = len - i;

      // log[10](16) = 1.2041... , log[10](88) = 1.9444....
      divisor = intPow(Ctor, new Ctor(base), i, i * 2);
    }

    xd = convertBase(str, base, BASE);
    xe = xd.length - 1;

    // Remove trailing zeros.
    for (i = xe; xd[i] === 0; --i) xd.pop();
    if (i < 0) return new Ctor(x.s * 0);
    x.e = getBase10Exponent(xd, xe);
    x.d = xd;
    external = false;

    // At what precision to perform the division to ensure exact conversion?
    // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
    // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
    // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
    // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
    // Therefore using 4 * the number of digits of str will always be enough.
    if (isFloat) x = divide(x, divisor, len * 4);

    // Multiply by the binary exponent part if present.
    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
    external = true;

    return x;
  }


  /*
   * sin(x) = x - x^3/3! + x^5/5! - ...
   * |x| < pi/2
   *
   */
  function sine(Ctor, x) {
    var k,
      len = x.d.length;

    if (len < 3) return taylorSeries(Ctor, 2, x, x);

    // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
    // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
    // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))

    // Estimate the optimum number of times to use the argument reduction.
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;

    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x);

    // Reverse argument reduction
    var sin2_x,
      d5 = new Ctor(5),
      d16 = new Ctor(16),
      d20 = new Ctor(20);
    for (; k--;) {
      sin2_x = x.times(x);
      x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
    }

    return x;
  }


  // Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
  function taylorSeries(Ctor, n, x, y, isHyperbolic) {
    var j, t, u, x2,
      i = 1,
      pr = Ctor.precision,
      k = Math.ceil(pr / LOG_BASE);

    external = false;
    x2 = x.times(x);
    u = new Ctor(y);

    for (;;) {
      t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
      u = isHyperbolic ? y.plus(t) : y.minus(t);
      y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
      t = u.plus(y);

      if (t.d[k] !== void 0) {
        for (j = k; t.d[j] === u.d[j] && j--;);
        if (j == -1) break;
      }

      j = u;
      u = y;
      y = t;
      t = j;
      i++;
    }

    external = true;
    t.d.length = k + 1;

    return t;
  }


  // Exponent e must be positive and non-zero.
  function tinyPow(b, e) {
    var n = b;
    while (--e) n *= b;
    return n;
  }


  // Return the absolute value of `x` reduced to less than or equal to half pi.
  function toLessThanHalfPi(Ctor, x) {
    var t,
      isNeg = x.s < 0,
      pi = getPi(Ctor, Ctor.precision, 1),
      halfPi = pi.times(0.5);

    x = x.abs();

    if (x.lte(halfPi)) {
      quadrant = isNeg ? 4 : 1;
      return x;
    }

    t = x.divToInt(pi);

    if (t.isZero()) {
      quadrant = isNeg ? 3 : 2;
    } else {
      x = x.minus(t.times(pi));

      // 0 <= x < pi
      if (x.lte(halfPi)) {
        quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
        return x;
      }

      quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
    }

    return x.minus(pi).abs();
  }


  /*
   * Return the value of Decimal `x` as a string in base `baseOut`.
   *
   * If the optional `sd` argument is present include a binary exponent suffix.
   */
  function toStringBinary(x, baseOut, sd, rm) {
    var base, e, i, k, len, roundUp, str, xd, y,
      Ctor = x.constructor,
      isExp = sd !== void 0;

    if (isExp) {
      checkInt32(sd, 1, MAX_DIGITS);
      if (rm === void 0) rm = Ctor.rounding;
      else checkInt32(rm, 0, 8);
    } else {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    }

    if (!x.isFinite()) {
      str = nonFiniteToString(x);
    } else {
      str = finiteToString(x);
      i = str.indexOf('.');

      // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
      // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
      // minBinaryExponent = floor(decimalExponent * log[2](10))
      // log[2](10) = 3.321928094887362347870319429489390175864

      if (isExp) {
        base = 2;
        if (baseOut == 16) {
          sd = sd * 4 - 3;
        } else if (baseOut == 8) {
          sd = sd * 3 - 2;
        }
      } else {
        base = baseOut;
      }

      // Convert the number as an integer then divide the result by its base raised to a power such
      // that the fraction part will be restored.

      // Non-integer.
      if (i >= 0) {
        str = str.replace('.', '');
        y = new Ctor(1);
        y.e = str.length - i;
        y.d = convertBase(finiteToString(y), 10, base);
        y.e = y.d.length;
      }

      xd = convertBase(str, 10, base);
      e = len = xd.length;

      // Remove trailing zeros.
      for (; xd[--len] == 0;) xd.pop();

      if (!xd[0]) {
        str = isExp ? '0p+0' : '0';
      } else {
        if (i < 0) {
          e--;
        } else {
          x = new Ctor(x);
          x.d = xd;
          x.e = e;
          x = divide(x, y, sd, rm, 0, base);
          xd = x.d;
          e = x.e;
          roundUp = inexact;
        }

        // The rounding digit, i.e. the digit after the digit that may be rounded up.
        i = xd[sd];
        k = base / 2;
        roundUp = roundUp || xd[sd + 1] !== void 0;

        roundUp = rm < 4
          ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))
          : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||
            rm === (x.s < 0 ? 8 : 7));

        xd.length = sd;

        if (roundUp) {

          // Rounding up may mean the previous digit has to be rounded up and so on.
          for (; ++xd[--sd] > base - 1;) {
            xd[sd] = 0;
            if (!sd) {
              ++e;
              xd.unshift(1);
            }
          }
        }

        // Determine trailing zeros.
        for (len = xd.length; !xd[len - 1]; --len);

        // E.g. [4, 11, 15] becomes 4bf.
        for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);

        // Add binary exponent suffix?
        if (isExp) {
          if (len > 1) {
            if (baseOut == 16 || baseOut == 8) {
              i = baseOut == 16 ? 4 : 3;
              for (--len; len % i; len++) str += '0';
              xd = convertBase(str, base, baseOut);
              for (len = xd.length; !xd[len - 1]; --len);

              // xd[0] will always be be 1
              for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);
            } else {
              str = str.charAt(0) + '.' + str.slice(1);
            }
          }

          str =  str + (e < 0 ? 'p' : 'p+') + e;
        } else if (e < 0) {
          for (; ++e;) str = '0' + str;
          str = '0.' + str;
        } else {
          if (++e > len) for (e -= len; e-- ;) str += '0';
          else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
        }
      }

      str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
    }

    return x.s < 0 ? '-' + str : str;
  }


  // Does not strip trailing zeros.
  function truncate(arr, len) {
    if (arr.length > len) {
      arr.length = len;
      return true;
    }
  }


  // Decimal methods


  /*
   *  abs
   *  acos
   *  acosh
   *  add
   *  asin
   *  asinh
   *  atan
   *  atanh
   *  atan2
   *  cbrt
   *  ceil
   *  clone
   *  config
   *  cos
   *  cosh
   *  div
   *  exp
   *  floor
   *  hypot
   *  ln
   *  log
   *  log2
   *  log10
   *  max
   *  min
   *  mod
   *  mul
   *  pow
   *  random
   *  round
   *  set
   *  sign
   *  sin
   *  sinh
   *  sqrt
   *  sub
   *  tan
   *  tanh
   *  trunc
   */


  /*
   * Return a new Decimal whose value is the absolute value of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function abs(x) {
    return new this(x).abs();
  }


  /*
   * Return a new Decimal whose value is the arccosine in radians of `x`.
   *
   * x {number|string|Decimal}
   *
   */
  function acos(x) {
    return new this(x).acos();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function acosh(x) {
    return new this(x).acosh();
  }


  /*
   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function add(x, y) {
    return new this(x).plus(y);
  }


  /*
   * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function asin(x) {
    return new this(x).asin();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function asinh(x) {
    return new this(x).asinh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function atan(x) {
    return new this(x).atan();
  }


  /*
   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
   * `precision` significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function atanh(x) {
    return new this(x).atanh();
  }


  /*
   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * Domain: [-Infinity, Infinity]
   * Range: [-pi, pi]
   *
   * y {number|string|Decimal} The y-coordinate.
   * x {number|string|Decimal} The x-coordinate.
   *
   * atan2(±0, -0)               = ±pi
   * atan2(±0, +0)               = ±0
   * atan2(±0, -x)               = ±pi for x > 0
   * atan2(±0, x)                = ±0 for x > 0
   * atan2(-y, ±0)               = -pi/2 for y > 0
   * atan2(y, ±0)                = pi/2 for y > 0
   * atan2(±y, -Infinity)        = ±pi for finite y > 0
   * atan2(±y, +Infinity)        = ±0 for finite y > 0
   * atan2(±Infinity, x)         = ±pi/2 for finite x
   * atan2(±Infinity, -Infinity) = ±3*pi/4
   * atan2(±Infinity, +Infinity) = ±pi/4
   * atan2(NaN, x) = NaN
   * atan2(y, NaN) = NaN
   *
   */
  function atan2(y, x) {
    y = new this(y);
    x = new this(x);
    var r,
      pr = this.precision,
      rm = this.rounding,
      wpr = pr + 4;

    // Either NaN
    if (!y.s || !x.s) {
      r = new this(NaN);

    // Both ±Infinity
    } else if (!y.d && !x.d) {
      r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
      r.s = y.s;

    // x is ±Infinity or y is ±0
    } else if (!x.d || y.isZero()) {
      r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
      r.s = y.s;

    // y is ±Infinity or x is ±0
    } else if (!y.d || x.isZero()) {
      r = getPi(this, wpr, 1).times(0.5);
      r.s = y.s;

    // Both non-zero and finite
    } else if (x.s < 0) {
      this.precision = wpr;
      this.rounding = 1;
      r = this.atan(divide(y, x, wpr, 1));
      x = getPi(this, wpr, 1);
      this.precision = pr;
      this.rounding = rm;
      r = y.s < 0 ? r.minus(x) : r.plus(x);
    } else {
      r = this.atan(divide(y, x, wpr, 1));
    }

    return r;
  }


  /*
   * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function cbrt(x) {
    return new this(x).cbrt();
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
   *
   * x {number|string|Decimal}
   *
   */
  function ceil(x) {
    return finalise(x = new this(x), x.e + 1, 2);
  }


  /*
   * Configure global settings for a Decimal constructor.
   *
   * `obj` is an object with one or more of the following properties,
   *
   *   precision  {number}
   *   rounding   {number}
   *   toExpNeg   {number}
   *   toExpPos   {number}
   *   maxE       {number}
   *   minE       {number}
   *   modulo     {number}
   *   crypto     {boolean|number}
   *   defaults   {true}
   *
   * E.g. Decimal.config({ precision: 20, rounding: 4 })
   *
   */
  function config(obj) {
    if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
    var i, p, v,
      useDefaults = obj.defaults === true,
      ps = [
        'precision', 1, MAX_DIGITS,
        'rounding', 0, 8,
        'toExpNeg', -EXP_LIMIT, 0,
        'toExpPos', 0, EXP_LIMIT,
        'maxE', 0, EXP_LIMIT,
        'minE', -EXP_LIMIT, 0,
        'modulo', 0, 9
      ];

    for (i = 0; i < ps.length; i += 3) {
      if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
      if ((v = obj[p]) !== void 0) {
        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
        else throw Error(invalidArgument + p + ': ' + v);
      }
    }

    if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== void 0) {
      if (v === true || v === false || v === 0 || v === 1) {
        if (v) {
          if (typeof crypto != 'undefined' && crypto &&
            (crypto.getRandomValues || crypto.randomBytes)) {
            this[p] = true;
          } else {
            throw Error(cryptoUnavailable);
          }
        } else {
          this[p] = false;
        }
      } else {
        throw Error(invalidArgument + p + ': ' + v);
      }
    }

    return this;
  }


  /*
   * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cos(x) {
    return new this(x).cos();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function cosh(x) {
    return new this(x).cosh();
  }


  /*
   * Create and return a Decimal constructor with the same configuration properties as this Decimal
   * constructor.
   *
   */
  function clone(obj) {
    var i, p, ps;

    /*
     * The Decimal constructor and exported function.
     * Return a new Decimal instance.
     *
     * v {number|string|Decimal} A numeric value.
     *
     */
    function Decimal(v) {
      var e, i, t,
        x = this;

      // Decimal called without new.
      if (!(x instanceof Decimal)) return new Decimal(v);

      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
      // which points to Object.
      x.constructor = Decimal;

      // Duplicate.
      if (v instanceof Decimal) {
        x.s = v.s;

        if (external) {
          if (!v.d || v.e > Decimal.maxE) {

            // Infinity.
            x.e = NaN;
            x.d = null;
          } else if (v.e < Decimal.minE) {

            // Zero.
            x.e = 0;
            x.d = [0];
          } else {
            x.e = v.e;
            x.d = v.d.slice();
          }
        } else {
          x.e = v.e;
          x.d = v.d ? v.d.slice() : v.d;
        }

        return;
      }

      t = typeof v;

      if (t === 'number') {
        if (v === 0) {
          x.s = 1 / v < 0 ? -1 : 1;
          x.e = 0;
          x.d = [0];
          return;
        }

        if (v < 0) {
          v = -v;
          x.s = -1;
        } else {
          x.s = 1;
        }

        // Fast path for small integers.
        if (v === ~~v && v < 1e7) {
          for (e = 0, i = v; i >= 10; i /= 10) e++;

          if (external) {
            if (e > Decimal.maxE) {
              x.e = NaN;
              x.d = null;
            } else if (e < Decimal.minE) {
              x.e = 0;
              x.d = [0];
            } else {
              x.e = e;
              x.d = [v];
            }
          } else {
            x.e = e;
            x.d = [v];
          }

          return;

        // Infinity, NaN.
        } else if (v * 0 !== 0) {
          if (!v) x.s = NaN;
          x.e = NaN;
          x.d = null;
          return;
        }

        return parseDecimal(x, v.toString());

      } else if (t !== 'string') {
        throw Error(invalidArgument + v);
      }

      // Minus sign?
      if ((i = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        // Plus sign?
        if (i === 43) v = v.slice(1);
        x.s = 1;
      }

      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }

    Decimal.prototype = P;

    Decimal.ROUND_UP = 0;
    Decimal.ROUND_DOWN = 1;
    Decimal.ROUND_CEIL = 2;
    Decimal.ROUND_FLOOR = 3;
    Decimal.ROUND_HALF_UP = 4;
    Decimal.ROUND_HALF_DOWN = 5;
    Decimal.ROUND_HALF_EVEN = 6;
    Decimal.ROUND_HALF_CEIL = 7;
    Decimal.ROUND_HALF_FLOOR = 8;
    Decimal.EUCLID = 9;

    Decimal.config = Decimal.set = config;
    Decimal.clone = clone;
    Decimal.isDecimal = isDecimalInstance;

    Decimal.abs = abs;
    Decimal.acos = acos;
    Decimal.acosh = acosh;        // ES6
    Decimal.add = add;
    Decimal.asin = asin;
    Decimal.asinh = asinh;        // ES6
    Decimal.atan = atan;
    Decimal.atanh = atanh;        // ES6
    Decimal.atan2 = atan2;
    Decimal.cbrt = cbrt;          // ES6
    Decimal.ceil = ceil;
    Decimal.cos = cos;
    Decimal.cosh = cosh;          // ES6
    Decimal.div = div;
    Decimal.exp = exp;
    Decimal.floor = floor;
    Decimal.hypot = hypot;        // ES6
    Decimal.ln = ln;
    Decimal.log = log;
    Decimal.log10 = log10;        // ES6
    Decimal.log2 = log2;          // ES6
    Decimal.max = max;
    Decimal.min = min;
    Decimal.mod = mod;
    Decimal.mul = mul;
    Decimal.pow = pow;
    Decimal.random = random;
    Decimal.round = round;
    Decimal.sign = sign;          // ES6
    Decimal.sin = sin;
    Decimal.sinh = sinh;          // ES6
    Decimal.sqrt = sqrt;
    Decimal.sub = sub;
    Decimal.tan = tan;
    Decimal.tanh = tanh;          // ES6
    Decimal.trunc = trunc;        // ES6

    if (obj === void 0) obj = {};
    if (obj) {
      if (obj.defaults !== true) {
        ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
        for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
      }
    }

    Decimal.config(obj);

    return Decimal;
  }


  /*
   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function div(x, y) {
    return new this(x).div(y);
  }


  /*
   * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The power to which to raise the base of the natural log.
   *
   */
  function exp(x) {
    return new this(x).exp();
  }


  /*
   * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
   *
   * x {number|string|Decimal}
   *
   */
  function floor(x) {
    return finalise(x = new this(x), x.e + 1, 3);
  }


  /*
   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
   * rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
   *
   * arguments {number|string|Decimal}
   *
   */
  function hypot() {
    var i, n,
      t = new this(0);

    external = false;

    for (i = 0; i < arguments.length;) {
      n = new this(arguments[i++]);
      if (!n.d) {
        if (n.s) {
          external = true;
          return new this(1 / 0);
        }
        t = n;
      } else if (t.d) {
        t = t.plus(n.times(n));
      }
    }

    external = true;

    return t.sqrt();
  }


  /*
   * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
   * otherwise return false.
   *
   */
  function isDecimalInstance(obj) {
    return obj instanceof Decimal || obj && obj.name === '[object Decimal]' || false;
  }


  /*
   * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function ln(x) {
    return new this(x).ln();
  }


  /*
   * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
   * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
   *
   * log[y](x)
   *
   * x {number|string|Decimal} The argument of the logarithm.
   * y {number|string|Decimal} The base of the logarithm.
   *
   */
  function log(x, y) {
    return new this(x).log(y);
  }


  /*
   * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log2(x) {
    return new this(x).log(2);
  }


  /*
   * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function log10(x) {
    return new this(x).log(10);
  }


  /*
   * Return a new Decimal whose value is the maximum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function max() {
    return maxOrMin(this, arguments, 'lt');
  }


  /*
   * Return a new Decimal whose value is the minimum of the arguments.
   *
   * arguments {number|string|Decimal}
   *
   */
  function min() {
    return maxOrMin(this, arguments, 'gt');
  }


  /*
   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mod(x, y) {
    return new this(x).mod(y);
  }


  /*
   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function mul(x, y) {
    return new this(x).mul(y);
  }


  /*
   * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} The base.
   * y {number|string|Decimal} The exponent.
   *
   */
  function pow(x, y) {
    return new this(x).pow(y);
  }


  /*
   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
   * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
   * are produced).
   *
   * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
   *
   */
  function random(sd) {
    var d, e, k, n,
      i = 0,
      r = new this(1),
      rd = [];

    if (sd === void 0) sd = this.precision;
    else checkInt32(sd, 1, MAX_DIGITS);

    k = Math.ceil(sd / LOG_BASE);

    if (!this.crypto) {
      for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;

    // Browsers supporting crypto.getRandomValues.
    } else if (crypto.getRandomValues) {
      d = crypto.getRandomValues(new Uint32Array(k));

      for (; i < k;) {
        n = d[i];

        // 0 <= n < 4294967296
        // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
        if (n >= 4.29e9) {
          d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
        } else {

          // 0 <= n <= 4289999999
          // 0 <= (n % 1e7) <= 9999999
          rd[i++] = n % 1e7;
        }
      }

    // Node.js supporting crypto.randomBytes.
    } else if (crypto.randomBytes) {

      // buffer
      d = crypto.randomBytes(k *= 4);

      for (; i < k;) {

        // 0 <= n < 2147483648
        n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);

        // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
        if (n >= 2.14e9) {
          crypto.randomBytes(4).copy(d, i);
        } else {

          // 0 <= n <= 2139999999
          // 0 <= (n % 1e7) <= 9999999
          rd.push(n % 1e7);
          i += 4;
        }
      }

      i = k / 4;
    } else {
      throw Error(cryptoUnavailable);
    }

    k = rd[--i];
    sd %= LOG_BASE;

    // Convert trailing digits to zeros according to sd.
    if (k && sd) {
      n = mathpow(10, LOG_BASE - sd);
      rd[i] = (k / n | 0) * n;
    }

    // Remove trailing words which are zero.
    for (; rd[i] === 0; i--) rd.pop();

    // Zero?
    if (i < 0) {
      e = 0;
      rd = [0];
    } else {
      e = -1;

      // Remove leading words which are zero and adjust exponent accordingly.
      for (; rd[0] === 0; e -= LOG_BASE) rd.shift();

      // Count the digits of the first word of rd to determine leading zeros.
      for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;

      // Adjust the exponent for leading zeros of the first word of rd.
      if (k < LOG_BASE) e -= LOG_BASE - k;
    }

    r.e = e;
    r.d = rd;

    return r;
  }


  /*
   * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
   *
   * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
   *
   * x {number|string|Decimal}
   *
   */
  function round(x) {
    return finalise(x = new this(x), x.e + 1, this.rounding);
  }


  /*
   * Return
   *   1    if x > 0,
   *  -1    if x < 0,
   *   0    if x is 0,
   *  -0    if x is -0,
   *   NaN  otherwise
   *
   * x {number|string|Decimal}
   *
   */
  function sign(x) {
    x = new this(x);
    return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
  }


  /*
   * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sin(x) {
    return new this(x).sin();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function sinh(x) {
    return new this(x).sinh();
  }


  /*
   * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   *
   */
  function sqrt(x) {
    return new this(x).sqrt();
  }


  /*
   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
   * using rounding mode `rounding`.
   *
   * x {number|string|Decimal}
   * y {number|string|Decimal}
   *
   */
  function sub(x, y) {
    return new this(x).sub(y);
  }


  /*
   * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
   * digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tan(x) {
    return new this(x).tan();
  }


  /*
   * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
   * significant digits using rounding mode `rounding`.
   *
   * x {number|string|Decimal} A value in radians.
   *
   */
  function tanh(x) {
    return new this(x).tanh();
  }


  /*
   * Return a new Decimal whose value is `x` truncated to an integer.
   *
   * x {number|string|Decimal}
   *
   */
  function trunc(x) {
    return finalise(x = new this(x), x.e + 1, 1);
  }


  // Create and configure initial Decimal constructor.
  Decimal = clone(DEFAULTS);

  Decimal['default'] = Decimal.Decimal = Decimal;

  // Create the internal constants from their string values.
  LN10 = new Decimal(LN10);
  PI = new Decimal(PI);


  // Export.


  // AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Decimal;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Node and other environments that support module.exports.
  } else {}
})(this);


/***/ }),

/***/ 3715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var hash = exports;

hash.utils = __webpack_require__(6436);
hash.common = __webpack_require__(5772);
hash.sha = __webpack_require__(9041);
hash.ripemd = __webpack_require__(2949);
hash.hmac = __webpack_require__(2344);

// Proxy hash functions to the main object
hash.sha1 = hash.sha.sha1;
hash.sha256 = hash.sha.sha256;
hash.sha224 = hash.sha.sha224;
hash.sha384 = hash.sha.sha384;
hash.sha512 = hash.sha.sha512;
hash.ripemd160 = hash.ripemd.ripemd160;


/***/ }),

/***/ 5772:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var assert = __webpack_require__(9746);

function BlockHash() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';

  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}
exports.BlockHash = BlockHash;

BlockHash.prototype.update = function update(msg, enc) {
  // Convert message to array, pad it, and join into 32bit blocks
  msg = utils.toArray(msg, enc);
  if (!this.pending)
    this.pending = msg;
  else
    this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length;

  // Enough data, try updating
  if (this.pending.length >= this._delta8) {
    msg = this.pending;

    // Process pending data in blocks
    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0)
      this.pending = null;

    msg = utils.join32(msg, 0, msg.length - r, this.endian);
    for (var i = 0; i < msg.length; i += this._delta32)
      this._update(msg, i, i + this._delta32);
  }

  return this;
};

BlockHash.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert(this.pending === null);

  return this._digest(enc);
};

BlockHash.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - ((len + this.padLength) % bytes);
  var res = new Array(k + this.padLength);
  res[0] = 0x80;
  for (var i = 1; i < k; i++)
    res[i] = 0;

  // Append length
  len <<= 3;
  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (t = 8; t < this.padLength; t++)
      res[i++] = 0;
  }

  return res;
};


/***/ }),

/***/ 2344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var assert = __webpack_require__(9746);

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac))
    return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils.toArray(key, enc));
}
module.exports = Hmac;

Hmac.prototype._init = function init(key) {
  // Shorten key, if needed
  if (key.length > this.blockSize)
    key = new this.Hash().update(key).digest();
  assert(key.length <= this.blockSize);

  // Add padding to key
  for (var i = key.length; i < this.blockSize; i++)
    key.push(0);

  for (i = 0; i < key.length; i++)
    key[i] ^= 0x36;
  this.inner = new this.Hash().update(key);

  // 0x36 ^ 0x5c = 0x6a
  for (i = 0; i < key.length; i++)
    key[i] ^= 0x6a;
  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};


/***/ }),

/***/ 2949:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var common = __webpack_require__(5772);

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_3 = utils.sum32_3;
var sum32_4 = utils.sum32_4;
var BlockHash = common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160))
    return new RIPEMD160();

  BlockHash.call(this);

  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];
  this.endian = 'little';
}
utils.inherits(RIPEMD160, BlockHash);
exports.ripemd160 = RIPEMD160;

RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;
  for (var j = 0; j < 80; j++) {
    var T = sum32(
      rotl32(
        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
        s[j]),
      E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(
      rotl32(
        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
        sh[j]),
      Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }
  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'little');
  else
    return utils.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15)
    return x ^ y ^ z;
  else if (j <= 31)
    return (x & y) | ((~x) & z);
  else if (j <= 47)
    return (x | (~y)) ^ z;
  else if (j <= 63)
    return (x & z) | (y & (~z));
  else
    return x ^ (y | (~z));
}

function K(j) {
  if (j <= 15)
    return 0x00000000;
  else if (j <= 31)
    return 0x5a827999;
  else if (j <= 47)
    return 0x6ed9eba1;
  else if (j <= 63)
    return 0x8f1bbcdc;
  else
    return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15)
    return 0x50a28be6;
  else if (j <= 31)
    return 0x5c4dd124;
  else if (j <= 47)
    return 0x6d703ef3;
  else if (j <= 63)
    return 0x7a6d76e9;
  else
    return 0x00000000;
}

var r = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
];

var rh = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
];

var s = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
];

var sh = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
];


/***/ }),

/***/ 9041:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.sha1 = __webpack_require__(4761);
exports.sha224 = __webpack_require__(799);
exports.sha256 = __webpack_require__(9344);
exports.sha384 = __webpack_require__(772);
exports.sha512 = __webpack_require__(5900);


/***/ }),

/***/ 4761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var common = __webpack_require__(5772);
var shaCommon = __webpack_require__(7038);

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_5 = utils.sum32_5;
var ft_1 = shaCommon.ft_1;
var BlockHash = common.BlockHash;

var sha1_K = [
  0x5A827999, 0x6ED9EBA1,
  0x8F1BBCDC, 0xCA62C1D6
];

function SHA1() {
  if (!(this instanceof SHA1))
    return new SHA1();

  BlockHash.call(this);
  this.h = [
    0x67452301, 0xefcdab89, 0x98badcfe,
    0x10325476, 0xc3d2e1f0 ];
  this.W = new Array(80);
}

utils.inherits(SHA1, BlockHash);
module.exports = SHA1;

SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];

  for(; i < W.length; i++)
    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};


/***/ }),

/***/ 799:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var SHA256 = __webpack_require__(9344);

function SHA224() {
  if (!(this instanceof SHA224))
    return new SHA224();

  SHA256.call(this);
  this.h = [
    0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
    0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4 ];
}
utils.inherits(SHA224, SHA256);
module.exports = SHA224;

SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  // Just truncate output
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 7), 'big');
  else
    return utils.split32(this.h.slice(0, 7), 'big');
};



/***/ }),

/***/ 9344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var common = __webpack_require__(5772);
var shaCommon = __webpack_require__(7038);
var assert = __webpack_require__(9746);

var sum32 = utils.sum32;
var sum32_4 = utils.sum32_4;
var sum32_5 = utils.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;

var BlockHash = common.BlockHash;

var sha256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

function SHA256() {
  if (!(this instanceof SHA256))
    return new SHA256();

  BlockHash.call(this);
  this.h = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ];
  this.k = sha256_K;
  this.W = new Array(64);
}
utils.inherits(SHA256, BlockHash);
module.exports = SHA256;

SHA256.blockSize = 512;
SHA256.outSize = 256;
SHA256.hmacStrength = 192;
SHA256.padLength = 64;

SHA256.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i++)
    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];

  assert(this.k.length === W.length);
  for (i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32(T1, T2);
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
  this.h[5] = sum32(this.h[5], f);
  this.h[6] = sum32(this.h[6], g);
  this.h[7] = sum32(this.h[7], h);
};

SHA256.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};


/***/ }),

/***/ 772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);

var SHA512 = __webpack_require__(5900);

function SHA384() {
  if (!(this instanceof SHA384))
    return new SHA384();

  SHA512.call(this);
  this.h = [
    0xcbbb9d5d, 0xc1059ed8,
    0x629a292a, 0x367cd507,
    0x9159015a, 0x3070dd17,
    0x152fecd8, 0xf70e5939,
    0x67332667, 0xffc00b31,
    0x8eb44a87, 0x68581511,
    0xdb0c2e0d, 0x64f98fa7,
    0x47b5481d, 0xbefa4fa4 ];
}
utils.inherits(SHA384, SHA512);
module.exports = SHA384;

SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 12), 'big');
  else
    return utils.split32(this.h.slice(0, 12), 'big');
};


/***/ }),

/***/ 5900:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var common = __webpack_require__(5772);
var assert = __webpack_require__(9746);

var rotr64_hi = utils.rotr64_hi;
var rotr64_lo = utils.rotr64_lo;
var shr64_hi = utils.shr64_hi;
var shr64_lo = utils.shr64_lo;
var sum64 = utils.sum64;
var sum64_hi = utils.sum64_hi;
var sum64_lo = utils.sum64_lo;
var sum64_4_hi = utils.sum64_4_hi;
var sum64_4_lo = utils.sum64_4_lo;
var sum64_5_hi = utils.sum64_5_hi;
var sum64_5_lo = utils.sum64_5_lo;

var BlockHash = common.BlockHash;

var sha512_K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function SHA512() {
  if (!(this instanceof SHA512))
    return new SHA512();

  BlockHash.call(this);
  this.h = [
    0x6a09e667, 0xf3bcc908,
    0xbb67ae85, 0x84caa73b,
    0x3c6ef372, 0xfe94f82b,
    0xa54ff53a, 0x5f1d36f1,
    0x510e527f, 0xade682d1,
    0x9b05688c, 0x2b3e6c1f,
    0x1f83d9ab, 0xfb41bd6b,
    0x5be0cd19, 0x137e2179 ];
  this.k = sha512_K;
  this.W = new Array(160);
}
utils.inherits(SHA512, BlockHash);
module.exports = SHA512;

SHA512.blockSize = 1024;
SHA512.outSize = 512;
SHA512.hmacStrength = 192;
SHA512.padLength = 128;

SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W;

  // 32 x 32bit words
  for (var i = 0; i < 32; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);  // i - 2
    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14];  // i - 7
    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);  // i - 15
    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32];  // i - 16
    var c3_lo = W[i - 31];

    W[i] = sum64_4_hi(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo);
  }
};

SHA512.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;

  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];

  assert(this.k.length === W.length);
  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];

    var T1_hi = sum64_5_hi(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo,
      c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo,
      c4_hi, c4_lo);

    c0_hi = s0_512_hi(ah, al);
    c0_lo = s0_512_lo(ah, al);
    c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

    hh = gh;
    hl = gl;

    gh = fh;
    gl = fl;

    fh = eh;
    fl = el;

    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);

    dh = ch;
    dl = cl;

    ch = bh;
    cl = bl;

    bh = ah;
    bl = al;

    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function ch64_hi(xh, xl, yh, yl, zh) {
  var r = (xh & yh) ^ ((~xh) & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ ((~xl) & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh) {
  var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2);  // 34
  var c2_hi = rotr64_hi(xl, xh, 7);  // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2);  // 34
  var c2_lo = rotr64_lo(xl, xh, 7);  // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9);  // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9);  // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29);  // 61
  var c2_hi = shr64_hi(xh, xl, 6);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29);  // 61
  var c2_lo = shr64_lo(xh, xl, 6);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}


/***/ }),

/***/ 7038:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(6436);
var rotr32 = utils.rotr32;

function ft_1(s, x, y, z) {
  if (s === 0)
    return ch32(x, y, z);
  if (s === 1 || s === 3)
    return p32(x, y, z);
  if (s === 2)
    return maj32(x, y, z);
}
exports.ft_1 = ft_1;

function ch32(x, y, z) {
  return (x & y) ^ ((~x) & z);
}
exports.ch32 = ch32;

function maj32(x, y, z) {
  return (x & y) ^ (x & z) ^ (y & z);
}
exports.maj32 = maj32;

function p32(x, y, z) {
  return x ^ y ^ z;
}
exports.p32 = p32;

function s0_256(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}
exports.s0_256 = s0_256;

function s1_256(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}
exports.s1_256 = s1_256;

function g0_256(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
}
exports.g0_256 = g0_256;

function g1_256(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
}
exports.g1_256 = g1_256;


/***/ }),

/***/ 6436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var assert = __webpack_require__(9746);
var inherits = __webpack_require__(5717);

exports.inherits = inherits;

function isSurrogatePair(msg, i) {
  if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {
    return false;
  }
  if (i < 0 || i + 1 >= msg.length) {
    return false;
  }
  return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
}

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === 'string') {
    if (!enc) {
      // Inspired by stringToUtf8ByteArray() in closure-library by Google
      // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
      // Apache License 2.0
      // https://github.com/google/closure-library/blob/master/LICENSE
      var p = 0;
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        if (c < 128) {
          res[p++] = c;
        } else if (c < 2048) {
          res[p++] = (c >> 6) | 192;
          res[p++] = (c & 63) | 128;
        } else if (isSurrogatePair(msg, i)) {
          c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
          res[p++] = (c >> 18) | 240;
          res[p++] = ((c >> 12) & 63) | 128;
          res[p++] = ((c >> 6) & 63) | 128;
          res[p++] = (c & 63) | 128;
        } else {
          res[p++] = (c >> 12) | 224;
          res[p++] = ((c >> 6) & 63) | 128;
          res[p++] = (c & 63) | 128;
        }
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0)
        msg = '0' + msg;
      for (i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
  }
  return res;
}
exports.toArray = toArray;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
exports.toHex = toHex;

function htonl(w) {
  var res = (w >>> 24) |
            ((w >>> 8) & 0xff00) |
            ((w << 8) & 0xff0000) |
            ((w & 0xff) << 24);
  return res >>> 0;
}
exports.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little')
      w = htonl(w);
    res += zero8(w.toString(16));
  }
  return res;
}
exports.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
exports.zero2 = zero2;

function zero8(word) {
  if (word.length === 7)
    return '0' + word;
  else if (word.length === 6)
    return '00' + word;
  else if (word.length === 5)
    return '000' + word;
  else if (word.length === 4)
    return '0000' + word;
  else if (word.length === 3)
    return '00000' + word;
  else if (word.length === 2)
    return '000000' + word;
  else if (word.length === 1)
    return '0000000' + word;
  else
    return word;
}
exports.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert(len % 4 === 0);
  var res = new Array(len / 4);
  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big')
      w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
    else
      w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
    res[i] = w >>> 0;
  }
  return res;
}
exports.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);
  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];
    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = (m >>> 16) & 0xff;
      res[k + 2] = (m >>> 8) & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = (m >>> 16) & 0xff;
      res[k + 1] = (m >>> 8) & 0xff;
      res[k] = m & 0xff;
    }
  }
  return res;
}
exports.split32 = split32;

function rotr32(w, b) {
  return (w >>> b) | (w << (32 - b));
}
exports.rotr32 = rotr32;

function rotl32(w, b) {
  return (w << b) | (w >>> (32 - b));
}
exports.rotl32 = rotl32;

function sum32(a, b) {
  return (a + b) >>> 0;
}
exports.sum32 = sum32;

function sum32_3(a, b, c) {
  return (a + b + c) >>> 0;
}
exports.sum32_3 = sum32_3;

function sum32_4(a, b, c, d) {
  return (a + b + c + d) >>> 0;
}
exports.sum32_4 = sum32_4;

function sum32_5(a, b, c, d, e) {
  return (a + b + c + d + e) >>> 0;
}
exports.sum32_5 = sum32_5;

function sum64(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];

  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}
exports.sum64 = sum64;

function sum64_hi(ah, al, bh, bl) {
  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
}
exports.sum64_hi = sum64_hi;

function sum64_lo(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
}
exports.sum64_lo = sum64_lo;

function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;

  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
}
exports.sum64_4_hi = sum64_4_hi;

function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
}
exports.sum64_4_lo = sum64_4_lo;

function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = (lo + el) >>> 0;
  carry += lo < el ? 1 : 0;

  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
}
exports.sum64_5_hi = sum64_5_hi;

function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;

  return lo >>> 0;
}
exports.sum64_5_lo = sum64_5_lo;

function rotr64_hi(ah, al, num) {
  var r = (al << (32 - num)) | (ah >>> num);
  return r >>> 0;
}
exports.rotr64_hi = rotr64_hi;

function rotr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
}
exports.rotr64_lo = rotr64_lo;

function shr64_hi(ah, al, num) {
  return ah >>> num;
}
exports.shr64_hi = shr64_hi;

function shr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
}
exports.shr64_lo = shr64_lo;


/***/ }),

/***/ 3393:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level :  false || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ 5717:
/***/ ((module) => {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),

/***/ 4970:
/***/ ((module) => {

"use strict";


const isStream = stream =>
	stream !== null &&
	typeof stream === 'object' &&
	typeof stream.pipe === 'function';

isStream.writable = stream =>
	isStream(stream) &&
	stream.writable !== false &&
	typeof stream._write === 'function' &&
	typeof stream._writableState === 'object';

isStream.readable = stream =>
	isStream(stream) &&
	stream.readable !== false &&
	typeof stream._read === 'function' &&
	typeof stream._readableState === 'object';

isStream.duplex = stream =>
	isStream.writable(stream) &&
	isStream.readable(stream);

isStream.transform = stream =>
	isStream.duplex(stream) &&
	typeof stream._transform === 'function' &&
	typeof stream._transformState === 'object';

module.exports = isStream;


/***/ }),

/***/ 5920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The comparator is invoked with
 * two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  return (array && array.length)
    ? baseUniq(array, undefined, comparator)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = uniqWith;


/***/ }),

/***/ 9593:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(4411)

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ 9746:
/***/ ((module) => {

module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r)
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};


/***/ }),

/***/ 2086:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.termToString = exports.stringToTerm = exports.stringQuadToQuad = exports.quadToStringQuad = exports.getLiteralValue = exports.getLiteralType = exports.getLiteralLanguage = void 0;
const TermUtil_1 = __webpack_require__(5121);
Object.defineProperty(exports, "getLiteralLanguage", ({ enumerable: true, get: function () { return TermUtil_1.getLiteralLanguage; } }));
Object.defineProperty(exports, "getLiteralType", ({ enumerable: true, get: function () { return TermUtil_1.getLiteralType; } }));
Object.defineProperty(exports, "getLiteralValue", ({ enumerable: true, get: function () { return TermUtil_1.getLiteralValue; } }));
Object.defineProperty(exports, "quadToStringQuad", ({ enumerable: true, get: function () { return TermUtil_1.quadToStringQuad; } }));
Object.defineProperty(exports, "stringQuadToQuad", ({ enumerable: true, get: function () { return TermUtil_1.stringQuadToQuad; } }));
Object.defineProperty(exports, "stringToTerm", ({ enumerable: true, get: function () { return TermUtil_1.stringToTerm; } }));
Object.defineProperty(exports, "termToString", ({ enumerable: true, get: function () { return TermUtil_1.termToString; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 5121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringQuadToQuad = exports.quadToStringQuad = exports.stringToTerm = exports.getLiteralLanguage = exports.getLiteralType = exports.getLiteralValue = exports.termToString = void 0;
const rdf_data_factory_1 = __webpack_require__(3623);
const FACTORY = new rdf_data_factory_1.DataFactory();
/**
 * Utility methods for converting between string-based RDF representations and RDFJS objects.
 *
 * RDF Terms are represented as follows:
 * * Blank nodes: '_:myBlankNode'
 * * Variables:   '?myVariable'
 * * Literals:    '"myString"', '"myLanguageString"@en-us', '"3"^^xsd:number'
 * * URIs:        'http://example.org'
 *
 * Quads/triples are represented as hashes with 'subject', 'predicate', 'object' and 'graph' (optional)
 * as keys, and string-based RDF terms as values.
 */
/**
 * Convert an RDFJS term to a string-based representation.
 * @param {RDF.Term} term An RDFJS term.
 * @return {string} A string-based term representation.
 */
function termToString(term) {
    // TODO: remove nasty any casts when this TS bug has been fixed: https://github.com/microsoft/TypeScript/issues/26933
    if (!term) {
        return undefined;
    }
    switch (term.termType) {
        case 'NamedNode': return term.value;
        case 'BlankNode': return ('_:' + term.value);
        case 'Literal':
            const literalValue = term;
            return ('"' + literalValue.value + '"' +
                (literalValue.datatype &&
                    literalValue.datatype.value !== 'http://www.w3.org/2001/XMLSchema#string' &&
                    literalValue.datatype.value !== 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString' ?
                    '^^' + literalValue.datatype.value : '') +
                (literalValue.language ? '@' + literalValue.language : ''));
        case 'Quad': return `<<${termToString(term.subject)} ${termToString(term.predicate)} ${termToString(term.object)}${term.graph.termType === 'DefaultGraph' ? '' : ' ' + termToString(term.graph)}>>`;
        case 'Variable': return ('?' + term.value);
        case 'DefaultGraph': return term.value;
    }
}
exports.termToString = termToString;
/**
 * Get the string value of a literal.
 * @param {string} literalValue An RDF literal enclosed by '"'.
 * @return {string} The literal value inside the '"'.
 */
function getLiteralValue(literalValue) {
    const match = /^"([^]*)"/.exec(literalValue);
    if (!match) {
        throw new Error(literalValue + ' is not a literal');
    }
    return match[1];
}
exports.getLiteralValue = getLiteralValue;
/**
 * Get the datatype of the given literal.
 * @param {string} literalValue An RDF literal.
 * @return {string} The datatype of the literal.
 */
function getLiteralType(literalValue) {
    const match = /^"[^]*"(?:\^\^([^"]+)|(@)[^@"]+)?$/.exec(literalValue);
    if (!match) {
        throw new Error(literalValue + ' is not a literal');
    }
    return match[1] || (match[2]
        ? 'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString' : 'http://www.w3.org/2001/XMLSchema#string');
}
exports.getLiteralType = getLiteralType;
/**
 * Get the language of the given literal.
 * @param {string} literalValue An RDF literal.
 * @return {string} The language of the literal.
 */
function getLiteralLanguage(literalValue) {
    const match = /^"[^]*"(?:@([^@"]+)|\^\^[^"]+)?$/.exec(literalValue);
    if (!match) {
        throw new Error(literalValue + ' is not a literal');
    }
    return match[1] ? match[1].toLowerCase() : '';
}
exports.getLiteralLanguage = getLiteralLanguage;
/**
 * Transform a string-based RDF term to an RDFJS term.
 * @param {string} value A string-based RDF-term.
 * @param {RDF.DataFactory} dataFactory An optional datafactory to create terms with.
 * @return {RDF.Term} An RDF-JS term.
 */
function stringToTerm(value, dataFactory) {
    dataFactory = dataFactory || FACTORY;
    if (!value || !value.length) {
        return dataFactory.defaultGraph();
    }
    switch (value[0]) {
        case '_': return dataFactory.blankNode(value.substr(2));
        case '?':
            if (!dataFactory.variable) {
                throw new Error(`Missing 'variable()' method on the given DataFactory`);
            }
            return dataFactory.variable(value.substr(1));
        case '"':
            const language = getLiteralLanguage(value);
            const type = dataFactory.namedNode(getLiteralType(value));
            return dataFactory.literal(getLiteralValue(value), language || type);
        case '<':
        default:
            if (value.startsWith('<<') && value.endsWith('>>')) {
                // Iterate character-by-character to detect spaces that are *not* wrapped in <<>>
                const terms = value.slice(2, -2);
                const stringTerms = [];
                let ignoreTags = 0;
                let lastIndex = 0;
                for (let i = 0; i < terms.length; i++) {
                    const char = terms[i];
                    if (char === '<')
                        ignoreTags++;
                    if (char === '>') {
                        if (ignoreTags === 0) {
                            throw new Error('Found closing tag without opening tag in ' + value);
                        }
                        else {
                            ignoreTags--;
                        }
                    }
                    if (char === ' ' && ignoreTags === 0) {
                        stringTerms.push(terms.slice(lastIndex, i));
                        lastIndex = i + 1;
                    }
                }
                if (ignoreTags !== 0) {
                    throw new Error('Found opening tag without closing tag in ' + value);
                }
                stringTerms.push(terms.slice(lastIndex, terms.length));
                // We require 3 or 4 components
                if (stringTerms.length !== 3 && stringTerms.length !== 4) {
                    throw new Error('Nested quad syntax error ' + value);
                }
                return dataFactory.quad(stringToTerm(stringTerms[0]), stringToTerm(stringTerms[1]), stringToTerm(stringTerms[2]), stringTerms[3] ? stringToTerm(stringTerms[3]) : undefined);
            }
            return dataFactory.namedNode(value);
    }
}
exports.stringToTerm = stringToTerm;
/**
 * Convert an RDFJS quad to a string-based quad representation.
 * @param {Quad} q An RDFJS quad.
 * @return {IStringQuad} A hash with string-based quad terms.
 * @template Q The type of quad, defaults to RDF.Quad.
 */
function quadToStringQuad(q) {
    // tslint:disable:object-literal-sort-keys
    return {
        subject: termToString(q.subject),
        predicate: termToString(q.predicate),
        object: termToString(q.object),
        graph: termToString(q.graph),
    };
    // tslint:enable:object-literal-sort-keys
}
exports.quadToStringQuad = quadToStringQuad;
/**
 * Convert a string-based quad representation to an RDFJS quad.
 * @param {IStringQuad} stringQuad A hash with string-based quad terms.
 * @param {RDF.DataFactory} dataFactory An optional datafactory to create terms with.
 * @return {Q} An RDFJS quad.
 * @template Q The type of quad, defaults to RDF.Quad.
 */
function stringQuadToQuad(stringQuad, dataFactory) {
    dataFactory = dataFactory || FACTORY;
    return dataFactory.quad(stringToTerm(stringQuad.subject, dataFactory), stringToTerm(stringQuad.predicate, dataFactory), stringToTerm(stringQuad.object, dataFactory), stringToTerm(stringQuad.graph, dataFactory));
}
exports.stringQuadToQuad = stringQuadToQuad;
//# sourceMappingURL=TermUtil.js.map

/***/ }),

/***/ 1234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const QuadTermUtil_1 = __webpack_require__(2682);
exports.collectNamedTerms = QuadTermUtil_1.collectNamedTerms;
exports.everyTerms = QuadTermUtil_1.everyTerms;
exports.filterQuadTermNames = QuadTermUtil_1.filterQuadTermNames;
exports.filterTerms = QuadTermUtil_1.filterTerms;
exports.forEachTerms = QuadTermUtil_1.forEachTerms;
exports.getNamedTerms = QuadTermUtil_1.getNamedTerms;
exports.getTerms = QuadTermUtil_1.getTerms;
exports.getTermsNested = QuadTermUtil_1.getTermsNested;
exports.mapTerms = QuadTermUtil_1.mapTerms;
exports.matchPattern = QuadTermUtil_1.matchPattern;
exports.matchPatternComplete = QuadTermUtil_1.matchPatternComplete;
exports.QUAD_TERM_NAMES = QuadTermUtil_1.QUAD_TERM_NAMES;
exports.reduceTerms = QuadTermUtil_1.reduceTerms;
exports.someTerms = QuadTermUtil_1.someTerms;
exports.TRIPLE_TERM_NAMES = QuadTermUtil_1.TRIPLE_TERM_NAMES;
const TermUtil_1 = __webpack_require__(462);
exports.getBlankNodes = TermUtil_1.getBlankNodes;
exports.getDefaultGraphs = TermUtil_1.getDefaultGraphs;
exports.getLiterals = TermUtil_1.getLiterals;
exports.getNamedNodes = TermUtil_1.getNamedNodes;
exports.getTermsOfType = TermUtil_1.getTermsOfType;
exports.getVariables = TermUtil_1.getVariables;
exports.TERM_TYPES = TermUtil_1.TERM_TYPES;
exports.uniqTerms = TermUtil_1.uniqTerms;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const rdf_data_factory_1 = __webpack_require__(3623);
const DF = new rdf_data_factory_1.DataFactory();
/**
 * All available quad term names.
 * @type {[string , string , string , string]}
 */
exports.QUAD_TERM_NAMES = ['subject', 'predicate', 'object', 'graph'];
/**
 * All available triple term names.
 * @type {[string , string , string]}
 */
exports.TRIPLE_TERM_NAMES = ['subject', 'predicate', 'object'];
/**
 * Get all terms in the given quad.
 * @param {BaseQuad} quad An RDFJS quad.
 * @param {boolean} ignoreDefaultGraph If true and the quad has the default graph as graph,
 *                                     this term will not be returned in the array.
 *                                     (default: false)
 * @return {Term[]} The available terms in the quad.
 */
function getTerms(quad, ignoreDefaultGraph) {
    if (ignoreDefaultGraph && quad.graph.termType === 'DefaultGraph') {
        return [quad.subject, quad.predicate, quad.object];
    }
    return [quad.subject, quad.predicate, quad.object, quad.graph];
}
exports.getTerms = getTerms;
/**
 * Get all terms in the given quad, including nested quads.
 * @param {BaseQuad} quad An RDFJS quad.
 * @param {boolean} ignoreDefaultGraph If true and the quad has the default graph as graph,
 *                                     this term will not be returned in the array.
 *                                     (default: false)
 * @return {Term[]} The available terms in the nested quad, excluding quad terms.
 */
function getTermsNested(quad, ignoreDefaultGraph) {
    const terms = [];
    for (const term of getTerms(quad, ignoreDefaultGraph)) {
        if (term.termType === 'Quad') {
            getTermsNested(term, ignoreDefaultGraph).forEach(subTerm => terms.push(subTerm));
        }
        else {
            terms.push(term);
        }
    }
    return terms;
}
exports.getTermsNested = getTermsNested;
/**
 * Convert the given quad to an array of named terms.
 * This is the reverse operation of {@link collectNamedTerms}.
 * @param {BaseQuad} quad An RDFJS quad.
 * @return {INamedTerm[]} An array of named terms.
 */
function getNamedTerms(quad) {
    return [
        { key: 'subject', value: quad.subject },
        { key: 'predicate', value: quad.predicate },
        { key: 'object', value: quad.object },
        { key: 'graph', value: quad.graph },
    ];
}
exports.getNamedTerms = getNamedTerms;
/**
 * Convert an array of named terms to an RDFJS quad.
 * This is the reverse operation of {@link getNamedTerms}.
 * @param {INamedTerm[]} namedTerms An array of named terms.
 * @param {(termName: QuadTermName) => Term} defaultCb An optional callback for when
 *                                                     certain terms are not available in the array.
 * @param {RDF.DataFactory} dataFactory A custom data factory to create quads.
 * @return {Q} The resulting RDFJS quad.
 * @template Q The type of quad to output, defaults to RDF.Quad.
 */
function collectNamedTerms(namedTerms, defaultCb, dataFactory) {
    const elements = {};
    namedTerms.forEach((namedTerm) => elements[namedTerm.key] = namedTerm.value);
    if (defaultCb) {
        elements.subject = elements.subject || defaultCb('subject');
        elements.predicate = elements.predicate || defaultCb('predicate');
        elements.object = elements.object || defaultCb('object');
        elements.graph = elements.graph || defaultCb('graph');
    }
    return (dataFactory || DF).quad(elements.subject, elements.predicate, elements.object, elements.graph);
}
exports.collectNamedTerms = collectNamedTerms;
/**
 * Iterats over each term.
 * @param {BaseQuad} quad An RDFJS quad.
 * @param {(value: Term, key: QuadTermName} cb A callback function.
 */
function forEachTerms(quad, cb) {
    cb(quad.subject, 'subject');
    cb(quad.predicate, 'predicate');
    cb(quad.object, 'object');
    cb(quad.graph, 'graph');
}
exports.forEachTerms = forEachTerms;
/**
 * Get all terms in the given quad that return true on the given filter function.
 * @param {BaseQuad} quad A quad.
 * @param {(value: Term, key: QuadTermName) => boolean} filter A filter callback.
 * @return {Term[]} The list of matching terms.
 */
function filterTerms(quad, filter) {
    const terms = [];
    if (filter(quad.subject, 'subject')) {
        terms.push(quad.subject);
    }
    if (filter(quad.predicate, 'predicate')) {
        terms.push(quad.predicate);
    }
    if (filter(quad.object, 'object')) {
        terms.push(quad.object);
    }
    if (filter(quad.graph, 'graph')) {
        terms.push(quad.graph);
    }
    return terms;
}
exports.filterTerms = filterTerms;
/**
 * Get all quad term names in the given quad that return true on the given filter function.
 * @param {BaseQuad} quad A quad.
 * @param {(value: Term, key: QuadTermName, all: INamedTerm[]) => boolean} filter A filter callback.
 * @return {QuadTermName[]} The list of matching quad term names.
 */
function filterQuadTermNames(quad, filter) {
    const names = [];
    if (filter(quad.subject, 'subject')) {
        names.push('subject');
    }
    if (filter(quad.predicate, 'predicate')) {
        names.push('predicate');
    }
    if (filter(quad.object, 'object')) {
        names.push('object');
    }
    if (filter(quad.graph, 'graph')) {
        names.push('graph');
    }
    return names;
}
exports.filterQuadTermNames = filterQuadTermNames;
/**
 * Map all terms of a quad.
 * @param {Quad} quad An RDFJS quad.
 * @param {(value: Term, key: QuadTermName) => Term} mapper A mapper function.
 * @param {RDF.DataFactory} dataFactory A custom data factory to create quads.
 * @return {Quad} A new RDFJS quad.
 * @template Q The type of quad, defaults to RDF.Quad.
 */
function mapTerms(quad, mapper, dataFactory) {
    return (dataFactory || DF).quad(mapper(quad.subject, 'subject'), mapper(quad.predicate, 'predicate'), mapper(quad.object, 'object'), mapper(quad.graph, 'graph'));
}
exports.mapTerms = mapTerms;
/**
 * Reduce all terms of a quad.
 * @param {BaseQuad} quad An RDFJS quad.
 * @param {(previousValue: U, currentValue: Term, key: QuadTermName) => U} reducer A reduce function.
 * @param {U} initialValue The initial value.
 * @return {U} The final value.
 */
function reduceTerms(quad, reducer, initialValue) {
    let value = initialValue;
    value = reducer(value, quad.subject, 'subject');
    value = reducer(value, quad.predicate, 'predicate');
    value = reducer(value, quad.object, 'object');
    return reducer(value, quad.graph, 'graph');
}
exports.reduceTerms = reduceTerms;
/**
 * Determines whether all terms satisfy the specified test.
 * @param {BaseQuad} quad An RDFJS quad.
 * @param {(value: Term, key: QuadTermName} checker A checker function.
 * @return {boolean} If all terms satisfy the specified test.
 */
function everyTerms(quad, checker) {
    return checker(quad.subject, 'subject')
        && checker(quad.predicate, 'predicate')
        && checker(quad.object, 'object')
        && checker(quad.graph, 'graph');
}
exports.everyTerms = everyTerms;
/**
 * Determines whether at least one term satisfies the specified test.
 * @param {BaseQuad} quad An RDFJS quad.
 * @param {(value: Term, key: QuadTermName} checker A checker function.
 * @return {boolean} If at least one term satisfies the specified test.
 */
function someTerms(quad, checker) {
    return checker(quad.subject, 'subject')
        || checker(quad.predicate, 'predicate')
        || checker(quad.object, 'object')
        || checker(quad.graph, 'graph');
}
exports.someTerms = someTerms;
/**
 * Check if the given terms match.
 *
 * At least one of the following must be true:
 * * Term B is undefined.
 * * Term B is a variable.
 * * Term A and B are quads, and return true for `matchPatternComplete`.
 * * Quad term and term are equal (`termB.equals(termA)` return true)
 *
 * @param termA A term.
 * @param termB An optional term.
 */
function matchTerm(termA, termB) {
    return !termB
        || termB.termType === 'Variable'
        || (termB.termType === 'Quad' && termA.termType === 'Quad' && matchPatternComplete(termA, termB))
        || termB.equals(termA);
}
exports.matchTerm = matchTerm;
/**
 * Check if the given quad matches with the given quad terms.
 *
 * Each term must match at least one of the following:
 * * Term is undefined.
 * * Term is a variable.
 * * Quad term and term are both quads, and return true for `matchPatternComplete`.
 * * Quad term and term are equal (`quadTerm.equals(term)` return true)
 *
 * @param {BaseQuad} quad A quad to match with (can not contain variables).
 * @param {Term} subject An optional subject.
 * @param {Term} predicate An optional predicate.
 * @param {Term} object An optional object.
 * @param {Term} graph An optional graph.
 * @return {boolean} If the quad matches with the quad terms.
 */
function matchPattern(quad, subject, predicate, object, graph) {
    return matchTerm(quad.subject, subject)
        && matchTerm(quad.predicate, predicate)
        && matchTerm(quad.object, object)
        && matchTerm(quad.graph, graph);
}
exports.matchPattern = matchPattern;
/**
 * Check if the first quad matches with all terms from the second quad.
 *
 * Each term must match at least one of the following:
 * * Quad2 term is a variable.
 * * Quad1 term and Quad2 term are equal (`term1.equals(term2)` return true)
 *
 * @param {BaseQuad} quad A quad (can not contain variables).
 * @param {BaseQuad} pattern A quad pattern (can contain variables).
 * @return {boolean} If the quad terms match.
 */
function matchPatternComplete(quad, pattern) {
    return matchPattern(quad, pattern.subject, pattern.predicate, pattern.object, pattern.graph);
}
exports.matchPatternComplete = matchPatternComplete;
//# sourceMappingURL=QuadTermUtil.js.map

/***/ }),

/***/ 462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * All known term types.
 * @see RDF.Term
 * @type {[string , string , string , string , string, string]}
 */
exports.TERM_TYPES = ['NamedNode', 'BlankNode', 'Literal', 'Variable', 'DefaultGraph', 'Quad'];
/*
 * Utility methods for handling RDFJS terms.
 */
/**
 * Create an array of unique terms from the given array.
 * @param {T[]} terms An array of RDFJS terms.
 * @return {T[]} A new array of unique RDFJS terms.
 */
function uniqTerms(terms) {
    return __webpack_require__(5920)(terms, (termA, termB) => termA.equals(termB));
}
exports.uniqTerms = uniqTerms;
/**
 * Find all terms of the given type in the given array.
 * @param {Term[]} terms An array of RDFJS terms.
 * @param {"NamedNode" | "BlankNode" | "Literal" | "Variable" | "DefaultGraph" | "Quad"} termType A term type.
 * @return {Term[]} A new array with elements from the given array only containing elements of the given type.
 */
function getTermsOfType(terms, termType) {
    return terms.filter((term) => term.termType === termType);
}
exports.getTermsOfType = getTermsOfType;
/**
 * Find all named nodes in the given array.
 * @param {Term[]} terms An array of RDFJS terms.
 * @return {NamedNode[]} A new array with elements from the given array only containing named nodes.
 */
function getNamedNodes(terms) {
    return getTermsOfType(terms, 'NamedNode');
}
exports.getNamedNodes = getNamedNodes;
/**
 * Find all blank nodes in the given array.
 * @param {Term[]} terms An array of RDFJS terms.
 * @return {BlankNode[]} A new array with elements from the given array only containing blank nodes.
 */
function getBlankNodes(terms) {
    return getTermsOfType(terms, 'BlankNode');
}
exports.getBlankNodes = getBlankNodes;
/**
 * Find all literals in the given array.
 * @param {Term[]} terms An array of RDFJS terms.
 * @return {Literal[]} A new array with elements from the given array only containing literals.
 */
function getLiterals(terms) {
    return getTermsOfType(terms, 'Literal');
}
exports.getLiterals = getLiterals;
/**
 * Find all variables in the given array.
 * @param {Term[]} terms An array of RDFJS terms.
 * @return {Variable[]} A new array with elements from the given array only containing variables.
 */
function getVariables(terms) {
    return getTermsOfType(terms, 'Variable');
}
exports.getVariables = getVariables;
/**
 * Find all default graphs in the given array.
 * @param {Term[]} terms An array of RDFJS terms.
 * @return {DefaultGraph[]} A new array with elements from the given array only containing default graphs.
 */
function getDefaultGraphs(terms) {
    return getTermsOfType(terms, 'DefaultGraph');
}
exports.getDefaultGraphs = getDefaultGraphs;
/**
 * Find all quads in the given array.
 * @param {Term[]} terms An array of RDFJS terms.
 * @return {BaseQuad[]} A new array with elements from the given array only containing quads.
 */
function getQuads(terms) {
    return getTermsOfType(terms, 'Quad');
}
exports.getQuads = getQuads;
//# sourceMappingURL=TermUtil.js.map

/***/ }),

/***/ 8912:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(9336));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9336:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Convert the given relative IRI to an absolute IRI
 * by taking into account the given optional baseIRI.
 *
 * @param {string} relativeIRI The relative IRI to convert to an absolute IRI.
 * @param {string} baseIRI The optional base IRI.
 * @return {string} an absolute IRI.
 */
function resolve(relativeIRI, baseIRI) {
    baseIRI = baseIRI || '';
    const baseFragmentPos = baseIRI.indexOf('#');
    // Ignore any fragments in the base IRI
    if (baseFragmentPos > 0) {
        baseIRI = baseIRI.substr(0, baseFragmentPos);
    }
    // Convert empty value directly to base IRI
    if (!relativeIRI.length) {
        // At this point, the baseIRI MUST be absolute, otherwise we error
        if (baseIRI.indexOf(':') < 0) {
            throw new Error(`Found invalid baseIRI '${baseIRI}' for value '${relativeIRI}'`);
        }
        return baseIRI;
    }
    // If the value starts with a query character, concat directly (but strip the existing query)
    if (relativeIRI.startsWith('?')) {
        const baseQueryPos = baseIRI.indexOf('?');
        if (baseQueryPos > 0) {
            baseIRI = baseIRI.substr(0, baseQueryPos);
        }
        return baseIRI + relativeIRI;
    }
    // If the value starts with a fragment character, concat directly
    if (relativeIRI.startsWith('#')) {
        return baseIRI + relativeIRI;
    }
    // Ignore baseIRI if it is empty
    if (!baseIRI.length) {
        const relativeColonPos = relativeIRI.indexOf(':');
        if (relativeColonPos < 0) {
            throw new Error(`Found invalid relative IRI '${relativeIRI}' for a missing baseIRI`);
        }
        return removeDotSegmentsOfPath(relativeIRI, relativeColonPos);
    }
    // Ignore baseIRI if the value is absolute
    const valueColonPos = relativeIRI.indexOf(':');
    if (valueColonPos >= 0) {
        return removeDotSegmentsOfPath(relativeIRI, valueColonPos);
    }
    // At this point, the baseIRI MUST be absolute, otherwise we error
    const baseColonPos = baseIRI.indexOf(':');
    if (baseColonPos < 0) {
        throw new Error(`Found invalid baseIRI '${baseIRI}' for value '${relativeIRI}'`);
    }
    const baseIRIScheme = baseIRI.substr(0, baseColonPos + 1);
    // Inherit the baseIRI scheme if the value starts with '//'
    if (relativeIRI.indexOf('//') === 0) {
        return baseIRIScheme + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
    }
    // Check cases where '://' occurs in the baseIRI, and where there is no '/' after a ':' anymore.
    let baseSlashAfterColonPos;
    if (baseIRI.indexOf('//', baseColonPos) === baseColonPos + 1) {
        // If there is no additional '/' after the '//'.
        baseSlashAfterColonPos = baseIRI.indexOf('/', baseColonPos + 3);
        if (baseSlashAfterColonPos < 0) {
            // If something other than a '/' follows the '://', append the value after a '/',
            // otherwise, prefix the value with only the baseIRI scheme.
            if (baseIRI.length > baseColonPos + 3) {
                return baseIRI + '/' + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
            }
            else {
                return baseIRIScheme + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
            }
        }
    }
    else {
        // If there is not even a single '/' after the ':'
        baseSlashAfterColonPos = baseIRI.indexOf('/', baseColonPos + 1);
        if (baseSlashAfterColonPos < 0) {
            // If we don't have a '/' after the ':',
            // prefix the value with only the baseIRI scheme.
            return baseIRIScheme + removeDotSegmentsOfPath(relativeIRI, valueColonPos);
        }
    }
    // If the value starts with a '/', then prefix it with everything before the first effective slash of the base IRI.
    if (relativeIRI.indexOf('/') === 0) {
        return baseIRI.substr(0, baseSlashAfterColonPos) + removeDotSegments(relativeIRI);
    }
    let baseIRIPath = baseIRI.substr(baseSlashAfterColonPos);
    const baseIRILastSlashPos = baseIRIPath.lastIndexOf('/');
    // Ignore everything after the last '/' in the baseIRI path
    if (baseIRILastSlashPos >= 0 && baseIRILastSlashPos < baseIRIPath.length - 1) {
        baseIRIPath = baseIRIPath.substr(0, baseIRILastSlashPos + 1);
        // Also remove the first character of the relative path if it starts with '.' (and not '..' or './')
        // This change is only allowed if there is something else following the path
        if (relativeIRI[0] === '.' && relativeIRI[1] !== '.' && relativeIRI[1] !== '/' && relativeIRI[2]) {
            relativeIRI = relativeIRI.substr(1);
        }
    }
    // Prefix the value with the baseIRI path where
    relativeIRI = baseIRIPath + relativeIRI;
    // Remove dot segment from the IRI
    relativeIRI = removeDotSegments(relativeIRI);
    // Prefix our transformed value with the part of the baseIRI until the first '/' after the first ':'.
    return baseIRI.substr(0, baseSlashAfterColonPos) + relativeIRI;
}
exports.resolve = resolve;
/**
 * Remove dot segments from the given path,
 * as described in https://www.ietf.org/rfc/rfc3986.txt (page 32).
 * @param {string} path An IRI path.
 * @return {string} A path, will always start with a '/'.
 */
function removeDotSegments(path) {
    // Prepare a buffer with segments between each '/.
    // Each segment represents an array of characters.
    const segmentBuffers = [];
    let i = 0;
    while (i < path.length) {
        // Remove '/.' or '/..'
        switch (path[i]) {
            case '/':
                if (path[i + 1] === '.') {
                    if (path[i + 2] === '.') {
                        // Start a new segment if we find an invalid character after the '.'
                        if (!isCharacterAllowedAfterRelativePathSegment(path[i + 3])) {
                            segmentBuffers.push([]);
                            i++;
                            break;
                        }
                        // Go to parent directory,
                        // so we remove a parent segment
                        segmentBuffers.pop();
                        // Ensure that we end with a slash if there is a trailing '/..'
                        if (!path[i + 3]) {
                            segmentBuffers.push([]);
                        }
                        i += 3;
                    }
                    else {
                        // Start a new segment if we find an invalid character after the '.'
                        if (!isCharacterAllowedAfterRelativePathSegment(path[i + 2])) {
                            segmentBuffers.push([]);
                            i++;
                            break;
                        }
                        // Ensure that we end with a slash if there is a trailing '/.'
                        if (!path[i + 2]) {
                            segmentBuffers.push([]);
                        }
                        // Go to the current directory,
                        // so we do nothing
                        i += 2;
                    }
                }
                else {
                    // Start a new segment
                    segmentBuffers.push([]);
                    i++;
                }
                break;
            case '#':
            case '?':
                // Query and fragment string should be appended unchanged
                if (!segmentBuffers.length) {
                    segmentBuffers.push([]);
                }
                segmentBuffers[segmentBuffers.length - 1].push(path.substr(i));
                // Break the while loop
                i = path.length;
                break;
            default:
                // Not a special character, just append it to our buffer
                if (!segmentBuffers.length) {
                    segmentBuffers.push([]);
                }
                segmentBuffers[segmentBuffers.length - 1].push(path[i]);
                i++;
                break;
        }
    }
    return '/' + segmentBuffers.map((buffer) => buffer.join('')).join('/');
}
exports.removeDotSegments = removeDotSegments;
/**
 * Removes dot segments of the given IRI.
 * @param {string} iri An IRI (or part of IRI).
 * @param {number} colonPosition The position of the first ':' in the IRI.
 * @return {string} The IRI where dot segments were removed.
 */
function removeDotSegmentsOfPath(iri, colonPosition) {
    // Determine where we should start looking for the first '/' that indicates the start of the path
    let searchOffset = colonPosition + 1;
    if (colonPosition >= 0) {
        if (iri[colonPosition + 1] === '/' && iri[colonPosition + 2] === '/') {
            searchOffset = colonPosition + 3;
        }
    }
    else {
        if (iri[0] === '/' && iri[1] === '/') {
            searchOffset = 2;
        }
    }
    // Determine the path
    const pathSeparator = iri.indexOf('/', searchOffset);
    if (pathSeparator < 0) {
        return iri;
    }
    const base = iri.substr(0, pathSeparator);
    const path = iri.substr(pathSeparator);
    // Remove dot segments from the path
    return base + removeDotSegments(path);
}
exports.removeDotSegmentsOfPath = removeDotSegmentsOfPath;
function isCharacterAllowedAfterRelativePathSegment(character) {
    return !character || character === '#' || character === '?' || character === '/';
}
//# sourceMappingURL=Resolve.js.map

/***/ }),

/***/ 8322:
/***/ ((module) => {

(function (factory) {
    if (true) {
        // Node/CommonJS
        module.exports = factory();
    } else { var glob; }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice()
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} [raw] True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} [raw]     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     [raw] True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));


/***/ }),

/***/ 390:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.orderTypes = exports.isExpressionError = exports.ExpressionError = exports.AggregateEvaluator = exports.SyncEvaluator = exports.AsyncEvaluator = void 0;
var AsyncEvaluator_1 = __webpack_require__(4790);
Object.defineProperty(exports, "AsyncEvaluator", ({ enumerable: true, get: function () { return AsyncEvaluator_1.AsyncEvaluator; } }));
var SyncEvaluator_1 = __webpack_require__(3709);
Object.defineProperty(exports, "SyncEvaluator", ({ enumerable: true, get: function () { return SyncEvaluator_1.SyncEvaluator; } }));
var AggregateEvaluator_1 = __webpack_require__(2378);
Object.defineProperty(exports, "AggregateEvaluator", ({ enumerable: true, get: function () { return AggregateEvaluator_1.AggregateEvaluator; } }));
var Errors_1 = __webpack_require__(7731);
Object.defineProperty(exports, "ExpressionError", ({ enumerable: true, get: function () { return Errors_1.ExpressionError; } }));
Object.defineProperty(exports, "isExpressionError", ({ enumerable: true, get: function () { return Errors_1.isExpressionError; } }));
var Ordering_1 = __webpack_require__(8468);
Object.defineProperty(exports, "orderTypes", ({ enumerable: true, get: function () { return Ordering_1.orderTypes; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7138:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformExistence = exports.transformAggregate = exports.transformNamed = exports.transformLiteral = exports.transformRDFTermUnsafe = exports.transformAlgebra = void 0;
const RDFString = __webpack_require__(2086);
const sparqlalgebrajs_1 = __webpack_require__(6609);
const E = __webpack_require__(6538);
const C = __webpack_require__(8952);
const Err = __webpack_require__(7731);
const P = __webpack_require__(9286);
const functions_1 = __webpack_require__(9415);
const Consts_1 = __webpack_require__(8952);
function transformAlgebra(expr) {
    if (!expr) {
        throw new Err.InvalidExpression(expr);
    }
    const types = sparqlalgebrajs_1.Algebra.expressionTypes;
    switch (expr.expressionType) {
        case types.TERM:
            return transformTerm(expr);
        case types.OPERATOR:
            return transformOperator(expr);
        case types.NAMED:
            return transformNamed(expr);
        case types.EXISTENCE:
            return transformExistence(expr);
        case types.AGGREGATE:
            return transformAggregate(expr);
        case types.WILDCARD:
            return transformWildcard(expr);
        default: throw new Err.InvalidExpressionType(expr);
    }
}
exports.transformAlgebra = transformAlgebra;
/**
 * Transforms an RDF term to the internal representation of a term,
 * assuming it is not a variable, which would be an expression (internally).
 *
 * @param term RDF term to transform into internal representation of a term
 */
function transformRDFTermUnsafe(term) {
    return transformTerm({
        term,
        type: 'expression',
        expressionType: 'term',
    });
}
exports.transformRDFTermUnsafe = transformRDFTermUnsafe;
function transformTerm(term) {
    if (!term.term) {
        throw new Err.InvalidExpression(term);
    }
    switch (term.term.termType) {
        case 'Variable': return new E.Variable(RDFString.termToString(term.term));
        case 'Literal': return transformLiteral(term.term);
        case 'NamedNode': return new E.NamedNode(term.term.value);
        case 'BlankNode': return new E.BlankNode(term.term.value);
        default: throw new Err.InvalidTermType(term);
    }
}
function transformWildcard(term) {
    if (!term.wildcard) {
        throw new Err.InvalidExpression(term);
    }
    return new E.NamedNode(term.wildcard.value);
}
// TODO: Maybe do this with a map?
// tslint:disable-next-line:no-any
function transformLiteral(lit) {
    if (!lit.datatype) {
        return (lit.language)
            ? new E.LangStringLiteral(lit.value, lit.language)
            : new E.StringLiteral(lit.value);
    }
    switch (lit.datatype.value) {
        case null:
        case undefined:
        case '': {
            return (lit.language)
                ? new E.LangStringLiteral(lit.value, lit.language)
                : new E.StringLiteral(lit.value);
        }
        case Consts_1.TypeURL.XSD_STRING:
            return new E.StringLiteral(lit.value);
        case Consts_1.TypeURL.RDF_LANG_STRING:
            return new E.LangStringLiteral(lit.value, lit.language);
        case Consts_1.TypeURL.XSD_DATE_TIME:
        case Consts_1.TypeURL.XSD_DATE: {
            const val = new Date(lit.value);
            if (isNaN(val.getTime())) {
                return new E.NonLexicalLiteral(undefined, lit.datatype, lit.value);
            }
            return new E.DateTimeLiteral(new Date(lit.value), lit.value);
        }
        case Consts_1.TypeURL.XSD_BOOLEAN: {
            if (lit.value !== 'true' && lit.value !== 'false' && lit.value !== '1' && lit.value !== '0') {
                return new E.NonLexicalLiteral(undefined, lit.datatype, lit.value);
            }
            return new E.BooleanLiteral(lit.value === 'true' || lit.value === '1', lit.value);
        }
        case Consts_1.TypeURL.XSD_INTEGER:
        case Consts_1.TypeURL.XSD_DECIMAL:
        case Consts_1.TypeURL.XSD_NEGATIVE_INTEGER:
        case Consts_1.TypeURL.XSD_NON_NEGATIVE_INTEGER:
        case Consts_1.TypeURL.XSD_NON_POSITIVE_INTEGER:
        case Consts_1.TypeURL.XSD_POSITIVE_INTEGER:
        case Consts_1.TypeURL.XSD_LONG:
        case Consts_1.TypeURL.XSD_SHORT:
        case Consts_1.TypeURL.XSD_BYTE:
        case Consts_1.TypeURL.XSD_UNSIGNED_LONG:
        case Consts_1.TypeURL.XSD_UNSIGNED_INT:
        case Consts_1.TypeURL.XSD_UNSIGNED_SHORT:
        case Consts_1.TypeURL.XSD_UNSIGNED_BYTE:
        case Consts_1.TypeURL.XSD_INT: {
            const val = P.parseXSDDecimal(lit.value);
            if (val === undefined) {
                return new E.NonLexicalLiteral(undefined, lit.datatype, lit.value);
            }
            return new E.NumericLiteral(val, lit.datatype, lit.value);
        }
        case Consts_1.TypeURL.XSD_FLOAT:
        case Consts_1.TypeURL.XSD_DOUBLE: {
            const val = P.parseXSDFloat(lit.value);
            if (val === undefined) {
                return new E.NonLexicalLiteral(undefined, lit.datatype, lit.value);
            }
            return new E.NumericLiteral(val, lit.datatype, lit.value);
        }
        default: return new E.Literal(lit.value, lit.datatype, lit.value);
    }
}
exports.transformLiteral = transformLiteral;
function transformOperator(expr) {
    if (C.SpecialOperators.contains(expr.operator)) {
        const op = expr.operator;
        const args = expr.args.map((a) => transformAlgebra(a));
        const func = functions_1.specialFunctions.get(op);
        if (!func.checkArity(args)) {
            throw new Err.InvalidArity(args, op);
        }
        return new E.SpecialOperator(args, func.applyAsync, func.applySync);
    }
    else {
        if (!C.Operators.contains(expr.operator)) {
            throw new Err.UnknownOperator(expr.operator);
        }
        const op = expr.operator;
        const args = expr.args.map((a) => transformAlgebra(a));
        const func = functions_1.regularFunctions.get(op);
        if (!hasCorrectArity(args, func.arity)) {
            throw new Err.InvalidArity(args, op);
        }
        return new E.Operator(args, func.apply);
    }
}
// TODO: Support passing functions to override default behaviour;
function transformNamed(expr) {
    const funcName = expr.name.value;
    if (!C.NamedOperators.contains(funcName)) {
        throw new Err.UnknownNamedOperator(expr.name.value);
    }
    // tslint:disable-next-line:no-any
    const op = expr.name.value;
    const args = expr.args.map((a) => transformAlgebra(a));
    const func = functions_1.namedFunctions.get(op);
    return new E.Named(expr.name, args, func.apply);
}
exports.transformNamed = transformNamed;
function hasCorrectArity(args, arity) {
    // Infinity is used to represent var-args, so it's always correct.
    if (arity === Infinity) {
        return true;
    }
    // If the function has overloaded arity, the actual arity needs to be present.
    if (Array.isArray(arity)) {
        return arity.indexOf(args.length) >= 0;
    }
    return args.length === arity;
}
function transformAggregate(expr) {
    const name = expr.aggregator;
    return new E.Aggregate(name, expr);
}
exports.transformAggregate = transformAggregate;
function transformExistence(expr) {
    return new E.Existence(expr);
}
exports.transformExistence = transformExistence;
//# sourceMappingURL=Transformation.js.map

/***/ }),

/***/ 2378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// tslint:disable:object-literal-sort-keys
// tslint:disable:max-classes-per-file
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.aggregators = exports.AggregateEvaluator = void 0;
const rdf_data_factory_1 = __webpack_require__(3623);
const E = __webpack_require__(6538);
const C = __webpack_require__(8952);
const Err = __webpack_require__(7731);
const functions_1 = __webpack_require__(9415);
const Helpers_1 = __webpack_require__(1731);
const Parsing_1 = __webpack_require__(9286);
const Consts_1 = __webpack_require__(8952);
const SyncEvaluator_1 = __webpack_require__(3709);
const Transformation_1 = __webpack_require__(7138);
const DF = new rdf_data_factory_1.DataFactory();
// TODO: Support hooks
class AggregateEvaluator {
    constructor(expr, config, throwError) {
        this.throwError = false;
        this.expression = expr;
        this.evaluator = new SyncEvaluator_1.SyncEvaluator(expr.expression, config);
        this.aggregator = new exports.aggregators[expr.aggregator](expr);
        this.throwError = throwError;
    }
    /**
     * The spec says to throw an error when a set function is called on an empty
     * set (unless explicitly mentioned otherwise like COUNT).
     * However, aggregate error handling says to not bind the result in case of an
     * error. So to simplify logic in the caller, we return undefined by default.
     *
     * @param throwError wether this function should respect the spec and throw an error if no empty value is defined
     */
    static emptyValue(expr, throwError = false) {
        const val = exports.aggregators[expr.aggregator].emptyValue();
        if (val === undefined && throwError) {
            throw new Err.EmptyAggregateError();
        }
        return val;
    }
    /**
     * Put a binding from the result stream in the aggregate state.
     *
     * If any binding evaluation errors, the corresponding aggregate variable should be unbound.
     * If this happens, calling @see result() will return @constant undefined
     *
     * @param bindings the bindings to pass to the expression
     */
    put(bindings) {
        this.init(bindings);
        if (this.state) {
            this.put = this.__put;
            this.result = this.__result;
        }
    }
    result() {
        return this.aggregator.constructor.emptyValue();
    }
    /**
     * The actual put method. When the first binding has been given, and the state
     * of the evaluators initialised. The .put API function will be replaced with this
     * function, which implements the behaviour we want.
     *
     * @param bindings the bindings to pass to the expression
     */
    __put(bindings) {
        try {
            const term = this.evaluator.evaluate(bindings);
            this.state = this.aggregator.put(this.state, term);
        }
        catch (err) {
            this.safeThrow(err);
        }
    }
    /**
     * The actual result method. When the first binding has been given, and the state
     * of the evaluators initialised. The .result API function will be replaced with this
     * function, which implements the behaviour we want.
     *
     * @param bindings the bindings to pass to the expression
     */
    __result() {
        return this.aggregator.result(this.state);
    }
    init(start) {
        try {
            const startTerm = this.evaluator.evaluate(start);
            this.state = this.aggregator.init(startTerm);
        }
        catch (err) {
            this.safeThrow(err);
        }
    }
    safeThrow(err) {
        if (this.throwError) {
            throw err;
        }
        else {
            this.put = () => { return; };
            this.result = () => undefined;
        }
    }
}
exports.AggregateEvaluator = AggregateEvaluator;
class BaseAggregator {
    constructor(expr) {
        this.distinct = expr.distinct;
        this.separator = expr.separator || ' ';
    }
    static emptyValue() {
        return undefined;
    }
}
class Count extends BaseAggregator {
    static emptyValue() {
        return Helpers_1.number(0, Consts_1.TypeURL.XSD_INTEGER).toRDF();
    }
    init(start) {
        return 1;
    }
    put(state, term) {
        return state + 1;
    }
    result(state) {
        return Helpers_1.number(state, Consts_1.TypeURL.XSD_INTEGER).toRDF();
    }
}
class Sum extends BaseAggregator {
    constructor() {
        super(...arguments);
        this.summer = functions_1.regularFunctions.get(C.RegularOperator.ADDITION);
    }
    static emptyValue() {
        return Helpers_1.number(0, Consts_1.TypeURL.XSD_INTEGER).toRDF();
    }
    init(start) {
        const { value, type } = extractNumericValueAndTypeOrError(start);
        return new E.NumericLiteral(value, DF.namedNode(type));
    }
    put(state, term) {
        const { value, type } = extractNumericValueAndTypeOrError(term);
        const internalTerm = new E.NumericLiteral(value, DF.namedNode(type));
        const sum = this.summer.apply([state, internalTerm]);
        return sum;
    }
    result(state) {
        return state.toRDF();
    }
}
class Min extends BaseAggregator {
    init(start) {
        const { value } = extractValue(null, start);
        if (start.termType === 'Literal') {
            return { extremeValue: value, term: start };
        }
    }
    put(state, term) {
        const extracted = extractValue(state.term, term);
        if (extracted.value < state.extremeValue && term.termType === 'Literal') {
            return {
                extremeValue: extracted.value,
                term,
            };
        }
        return state;
    }
    result(state) {
        return state.term;
    }
}
class Max extends BaseAggregator {
    init(start) {
        const { value } = extractValue(null, start);
        if (start.termType === 'Literal') {
            return { extremeValue: value, term: start };
        }
    }
    put(state, term) {
        const extracted = extractValue(state.term, term);
        if (extracted.value > state.extremeValue && term.termType === 'Literal') {
            return {
                extremeValue: extracted.value,
                term,
            };
        }
        return state;
    }
    result(state) {
        return state.term;
    }
}
class Average extends BaseAggregator {
    constructor() {
        super(...arguments);
        this.summer = functions_1.regularFunctions.get(C.RegularOperator.ADDITION);
        this.divider = functions_1.regularFunctions.get(C.RegularOperator.DIVISION);
    }
    static emptyValue() {
        return Helpers_1.number(0, Consts_1.TypeURL.XSD_INTEGER).toRDF();
    }
    init(start) {
        const { value, type } = extractNumericValueAndTypeOrError(start);
        const sum = new E.NumericLiteral(value, DF.namedNode(type));
        return { sum, count: 1 };
    }
    put(state, term) {
        const { value, type } = extractNumericValueAndTypeOrError(term);
        const internalTerm = new E.NumericLiteral(value, DF.namedNode(type));
        const sum = this.summer.apply([state.sum, internalTerm]);
        return {
            sum,
            count: state.count + 1,
        };
    }
    result(state) {
        const count = new E.NumericLiteral(state.count, DF.namedNode(C.TypeURL.XSD_INTEGER));
        const result = this.divider.apply([state.sum, count]);
        return result.toRDF();
    }
}
class GroupConcat extends BaseAggregator {
    static emptyValue() {
        return Helpers_1.string('').toRDF();
    }
    init(start) {
        return start.value;
    }
    put(state, term) {
        return state + this.separator + term.value;
    }
    result(state) {
        return Helpers_1.string(state).toRDF();
    }
}
class Sample extends BaseAggregator {
    init(start) {
        return start;
    }
    put(state, term) {
        return state; // First value is our sample
    }
    result(state) {
        return state;
    }
}
exports.aggregators = {
    count: Count,
    sum: Sum,
    min: Min,
    max: Max,
    avg: Average,
    group_concat: GroupConcat,
    sample: Sample,
};
function extractNumericValueAndTypeOrError(term) {
    // TODO: Check behaviour
    if (term.termType !== 'Literal') {
        throw new Error('Term with value ' + term.value + ' has type ' + term.termType + ' and is not a numeric literal');
    }
    else if (!C.NumericTypeURLs.contains(term.datatype.value)) {
        throw new Error('Term datatype ' + term.datatype.value + ' with value ' + term.value + ' has type ' + term.termType + ' and is not a numeric literal');
    }
    const type = term.datatype.value;
    const value = Parsing_1.parseXSDFloat(term.value);
    return { type, value };
}
function extractValue(extremeTerm, term) {
    if (term.termType !== 'Literal') {
        throw new Error('Term with value ' + term.value + ' has type ' + term.termType + ' and is not a literal');
    }
    const transformedLit = Transformation_1.transformLiteral(term);
    return { type: transformedLit.typeURL.value, value: transformedLit.typedValue };
}
//# sourceMappingURL=AggregateEvaluator.js.map

/***/ }),

/***/ 4790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AsyncEvaluator = void 0;
const Transformation_1 = __webpack_require__(7138);
const RecursiveExpressionEvaluator_1 = __webpack_require__(8867);
class AsyncEvaluator {
    constructor(algExpr, config = {}) {
        this.algExpr = algExpr;
        this.config = config;
        this.expr = Transformation_1.transformAlgebra(algExpr);
        const context = {
            now: config.now || new Date(Date.now()),
            baseIRI: config.baseIRI || undefined,
            exists: config.exists,
            aggregate: config.aggregate,
        };
        this.evaluator = new RecursiveExpressionEvaluator_1.AsyncRecursiveEvaluator(context);
    }
    async evaluate(mapping) {
        const result = await this.evaluator.evaluate(this.expr, mapping);
        return log(result).toRDF();
    }
    async evaluateAsEBV(mapping) {
        const result = await this.evaluator.evaluate(this.expr, mapping);
        return log(result).coerceEBV();
    }
    async evaluateAsInternal(mapping) {
        const result = await this.evaluator.evaluate(this.expr, mapping);
        return log(result);
    }
}
exports.AsyncEvaluator = AsyncEvaluator;
function log(val) {
    // console.log(val);
    return val;
}
//# sourceMappingURL=AsyncEvaluator.js.map

/***/ }),

/***/ 8867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnsupportedOperation = exports.SyncRecursiveEvaluator = exports.AsyncRecursiveEvaluator = void 0;
const E = __webpack_require__(6538);
const Err = __webpack_require__(7731);
const Transformation_1 = __webpack_require__(7138);
const sharedEvaluators = {
    term(expr, mapping) {
        return expr;
    },
    variable(expr, mapping) {
        const term = mapping.get(expr.name);
        if (!term) {
            throw new Err.UnboundVariableError(expr.name, mapping);
        }
        return Transformation_1.transformRDFTermUnsafe(term);
    },
};
class AsyncRecursiveEvaluator {
    constructor(context) {
        this.context = context;
        this.subEvaluators = {
            // Shared
            [E.ExpressionType.Term]: sharedEvaluators.term,
            [E.ExpressionType.Variable]: sharedEvaluators.variable,
            // Async
            [E.ExpressionType.Operator]: this.evalOperator,
            [E.ExpressionType.SpecialOperator]: this.evalSpecialOperator,
            [E.ExpressionType.Named]: this.evalNamed,
            [E.ExpressionType.Existence]: this.evalExistence,
            [E.ExpressionType.Aggregate]: this.evalAggregate,
        };
    }
    async evaluate(expr, mapping) {
        const evaluator = this.subEvaluators[expr.expressionType];
        if (!evaluator) {
            throw new Err.InvalidExpressionType(expr);
        }
        return evaluator.bind(this)(expr, mapping);
    }
    async evalOperator(expr, mapping) {
        const argPromises = expr.args.map((arg) => this.evaluate(arg, mapping));
        const argResults = await Promise.all(argPromises);
        return expr.apply(argResults);
    }
    async evalSpecialOperator(expr, mapping) {
        const evaluate = this.evaluate.bind(this);
        const context = {
            args: expr.args,
            mapping,
            evaluate,
            context: {
                now: this.context.now,
                baseIRI: this.context.baseIRI,
                bnode: this.context.bnode,
            },
        };
        return expr.applyAsync(context);
    }
    async evalNamed(expr, mapping) {
        const argPromises = expr.args.map((arg) => this.evaluate(arg, mapping));
        const argResults = await Promise.all(argPromises);
        return expr.apply(argResults);
    }
    async evalExistence(expr, mapping) {
        if (!this.context.exists) {
            throw new Err.NoExistenceHook();
        }
        return new E.BooleanLiteral(await this
            .context
            .exists(expr.expression, mapping));
    }
    // TODO: Remove?
    async evalAggregate(expr, _mapping) {
        if (!this.context.aggregate) {
            throw new Err.NoExistenceHook();
        }
        return Transformation_1.transformRDFTermUnsafe(await this
            .context
            .aggregate(expr.expression));
    }
}
exports.AsyncRecursiveEvaluator = AsyncRecursiveEvaluator;
class SyncRecursiveEvaluator {
    constructor(context) {
        this.context = context;
        this.subEvaluators = {
            // Shared
            [E.ExpressionType.Term]: sharedEvaluators.term,
            [E.ExpressionType.Variable]: sharedEvaluators.variable,
            // Sync
            [E.ExpressionType.Operator]: this.evalOperator,
            [E.ExpressionType.SpecialOperator]: this.evalSpecialOperator,
            [E.ExpressionType.Named]: this.evalNamed,
            [E.ExpressionType.Existence]: this.evalExistence,
            [E.ExpressionType.Aggregate]: this.evalAggregate,
        };
    }
    evaluate(expr, mapping) {
        const evaluator = this.subEvaluators[expr.expressionType];
        if (!evaluator) {
            throw new Err.InvalidExpressionType(expr);
        }
        return evaluator.bind(this)(expr, mapping);
    }
    evalOperator(expr, mapping) {
        const args = expr.args.map((arg) => this.evaluate(arg, mapping));
        return expr.apply(args);
    }
    evalSpecialOperator(expr, mapping) {
        const evaluate = this.evaluate.bind(this);
        const context = {
            args: expr.args,
            mapping,
            evaluate,
            context: {
                now: this.context.now,
                baseIRI: this.context.baseIRI,
                bnode: this.context.bnode,
            },
        };
        return expr.applySync(context);
    }
    evalNamed(expr, mapping) {
        const args = expr.args.map((arg) => this.evaluate(arg, mapping));
        return expr.apply(args);
    }
    evalExistence(expr, mapping) {
        if (!this.context.exists) {
            throw new Err.NoExistenceHook();
        }
        return new E.BooleanLiteral(this
            .context
            .exists(expr.expression, mapping));
    }
    evalAggregate(expr, mapping) {
        if (!this.context.aggregate) {
            throw new Err.NoAggregator();
        }
        return Transformation_1.transformRDFTermUnsafe(this
            .context
            .aggregate(expr.expression));
    }
}
exports.SyncRecursiveEvaluator = SyncRecursiveEvaluator;
class UnsupportedOperation extends Error {
    constructor(operation) {
        super(`Operation '${operation}' is unsupported in SimpleEvaluator`);
    }
}
exports.UnsupportedOperation = UnsupportedOperation;
//# sourceMappingURL=RecursiveExpressionEvaluator.js.map

/***/ }),

/***/ 3709:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyncEvaluator = void 0;
const Transformation_1 = __webpack_require__(7138);
const RecursiveExpressionEvaluator_1 = __webpack_require__(8867);
class SyncEvaluator {
    constructor(algExpr, config = {}) {
        this.algExpr = algExpr;
        this.config = config;
        this.expr = Transformation_1.transformAlgebra(algExpr);
        const context = {
            now: config.now || new Date(Date.now()),
            baseIRI: config.baseIRI || undefined,
            exists: config.exists,
            aggregate: config.aggregate,
        };
        this.evaluator = new RecursiveExpressionEvaluator_1.SyncRecursiveEvaluator(context);
    }
    evaluate(mapping) {
        const result = this.evaluator.evaluate(this.expr, mapping);
        return log(result).toRDF();
    }
    evaluateAsEBV(mapping) {
        const result = this.evaluator.evaluate(this.expr, mapping);
        return log(result).coerceEBV();
    }
    evaluateAsInternal(mapping) {
        const result = this.evaluator.evaluate(this.expr, mapping);
        return log(result);
    }
}
exports.SyncEvaluator = SyncEvaluator;
function log(val) {
    // console.log(val);
    return val;
}
//# sourceMappingURL=SyncEvaluator.js.map

/***/ }),

/***/ 6826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Aggregate = void 0;
const Expressions_1 = __webpack_require__(1143);
class Aggregate {
    constructor(name, expression) {
        this.name = name;
        this.expression = expression;
        this.expressionType = Expressions_1.ExpressionType.Aggregate;
    }
}
exports.Aggregate = Aggregate;
//# sourceMappingURL=Aggregate.js.map

/***/ }),

/***/ 5366:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Existence = void 0;
const Expressions_1 = __webpack_require__(1143);
class Existence {
    constructor(expression) {
        this.expression = expression;
        this.expressionType = Expressions_1.ExpressionType.Existence;
    }
}
exports.Existence = Existence;
//# sourceMappingURL=Existence.js.map

/***/ }),

/***/ 1143:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExpressionType = void 0;
var ExpressionType;
(function (ExpressionType) {
    ExpressionType["Aggregate"] = "aggregate";
    ExpressionType["Existence"] = "existence";
    ExpressionType["Named"] = "named";
    ExpressionType["Operator"] = "operator";
    ExpressionType["SpecialOperator"] = "specialOperator";
    ExpressionType["Term"] = "term";
    ExpressionType["Variable"] = "variable";
})(ExpressionType = exports.ExpressionType || (exports.ExpressionType = {}));
//# sourceMappingURL=Expressions.js.map

/***/ }),

/***/ 9432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Named = void 0;
const Expressions_1 = __webpack_require__(1143);
class Named {
    constructor(name, args, apply) {
        this.name = name;
        this.args = args;
        this.apply = apply;
        this.expressionType = Expressions_1.ExpressionType.Named;
    }
}
exports.Named = Named;
//# sourceMappingURL=Named.js.map

/***/ }),

/***/ 7732:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Operator = void 0;
const Expressions_1 = __webpack_require__(1143);
class Operator {
    constructor(args, apply) {
        this.args = args;
        this.apply = apply;
        this.expressionType = Expressions_1.ExpressionType.Operator;
    }
}
exports.Operator = Operator;
//# sourceMappingURL=Operator.js.map

/***/ }),

/***/ 1219:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpecialOperator = void 0;
const Expressions_1 = __webpack_require__(1143);
class SpecialOperator {
    constructor(args, applyAsync, applySync) {
        this.args = args;
        this.applyAsync = applyAsync;
        this.applySync = applySync;
        this.expressionType = Expressions_1.ExpressionType.SpecialOperator;
    }
}
exports.SpecialOperator = SpecialOperator;
//# sourceMappingURL=SpecialOperator.js.map

/***/ }),

/***/ 2441:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NonLexicalLiteral = exports.StringLiteral = exports.LangStringLiteral = exports.DateTimeLiteral = exports.BooleanLiteral = exports.NumericLiteral = exports.Literal = exports.BlankNode = exports.NamedNode = exports.Term = void 0;
const rdf_data_factory_1 = __webpack_require__(3623);
const Expressions_1 = __webpack_require__(1143);
const C = __webpack_require__(8952);
const Err = __webpack_require__(7731);
const DF = new rdf_data_factory_1.DataFactory();
class Term {
    constructor() {
        this.expressionType = Expressions_1.ExpressionType.Term;
    }
    str() {
        throw new Err.InvalidArgumentTypes([this], C.RegularOperator.STR);
    }
    coerceEBV() {
        throw new Err.EBVCoercionError(this);
    }
}
exports.Term = Term;
// NamedNodes -----------------------------------------------------------------
class NamedNode extends Term {
    constructor(value) {
        super();
        this.value = value;
        this.termType = 'namedNode';
    }
    toRDF() {
        return DF.namedNode(this.value);
    }
    str() {
        return this.value;
    }
}
exports.NamedNode = NamedNode;
// BlankNodes -----------------------------------------------------------------
class BlankNode extends Term {
    constructor(value) {
        super();
        this.value = value;
        this.termType = 'blankNode';
        this.value = value;
    }
    static nextID() {
        BlankNode._nextID += 1;
        return BlankNode.nextID.toString();
    }
    toRDF() {
        return DF.blankNode(this.value);
    }
}
exports.BlankNode = BlankNode;
BlankNode._nextID = 0;
// Literals-- -----------------------------------------------------------------
class Literal extends Term {
    constructor(typedValue, typeURL, strValue, language) {
        super();
        this.typedValue = typedValue;
        this.typeURL = typeURL;
        this.strValue = strValue;
        this.language = language;
        this.termType = 'literal';
        this.type = C.type(typeURL.value);
    }
    toRDF() {
        return DF.literal(this.strValue || this.str(), this.language || this.typeURL);
    }
    str() {
        return this.strValue || this.typedValue.toString();
    }
}
exports.Literal = Literal;
class NumericLiteral extends Literal {
    coerceEBV() {
        return !!this.typedValue;
    }
    toRDF() {
        const term = super.toRDF();
        if (!isFinite(this.typedValue)) {
            term.value = term.value.replace('Infinity', 'INF');
        }
        return term;
    }
    str() {
        return this.strValue
            || NumericLiteral.specificFormatters[this.type](this.typedValue);
    }
}
exports.NumericLiteral = NumericLiteral;
NumericLiteral.specificFormatters = {
    integer: (value) => value.toFixed(),
    float: (value) => value.toString(),
    decimal: (value) => value.toString(),
    // // Be consistent with float
    // decimal: (value) => {
    //   const jsDecimal = value.toString();
    //   return jsDecimal.match(/\./)
    //     ? jsDecimal
    //     : jsDecimal + '.0';
    // },
    // https://www.w3.org/TR/xmlschema-2/#double
    double: (value) => {
        const jsExponential = value.toExponential();
        const [jsMantisse, jsExponent] = jsExponential.split('e');
        // leading + must be removed for integer
        // https://www.w3.org/TR/xmlschema-2/#integer
        const exponent = jsExponent.replace(/\+/, '');
        // SPARQL test suite prefers trailing zero's
        const mantisse = jsMantisse.match(/\./)
            ? jsMantisse
            : jsMantisse + '.0';
        return `${mantisse}E${exponent}`;
    },
};
class BooleanLiteral extends Literal {
    constructor(typedValue, strValue) {
        super(typedValue, C.make(C.TypeURL.XSD_BOOLEAN), strValue);
        this.typedValue = typedValue;
        this.strValue = strValue;
    }
    coerceEBV() {
        return !!this.typedValue;
    }
}
exports.BooleanLiteral = BooleanLiteral;
class DateTimeLiteral extends Literal {
    // strValue is mandatory here because toISOString will always add
    // milliseconds, even if they were not present.
    constructor(typedValue, strValue) {
        super(typedValue, C.make(C.TypeURL.XSD_DATE_TIME), strValue);
        this.typedValue = typedValue;
        this.strValue = strValue;
    }
}
exports.DateTimeLiteral = DateTimeLiteral;
class LangStringLiteral extends Literal {
    constructor(typedValue, language) {
        super(typedValue, C.make(C.TypeURL.RDF_LANG_STRING), typedValue, language);
        this.typedValue = typedValue;
        this.language = language;
    }
    coerceEBV() {
        return this.strValue.length !== 0;
    }
}
exports.LangStringLiteral = LangStringLiteral;
// https://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#dfn-plain-literal
// https://www.w3.org/TR/sparql11-query/#defn_SimpleLiteral
// https://www.w3.org/TR/sparql11-query/#func-strings
// This does not include language tagged literals
class StringLiteral extends Literal {
    constructor(typedValue) {
        super(typedValue, C.make(C.TypeURL.XSD_STRING), typedValue);
        this.typedValue = typedValue;
    }
    coerceEBV() {
        return this.strValue.length !== 0;
    }
}
exports.StringLiteral = StringLiteral;
/*
 * This class is used when a literal is parsed, and it's value is
 * an invalid lexical form for it's datatype. The spec defines value with
 * invalid lexical form are still valid terms, and as such we can not error
 * immediately. This class makes sure that the typedValue will remain undefined,
 * and the category 'nonlexical'. This way, only when operators apply to the
 * 'nonlexical' category, they will keep working, otherwise they will throw a
 * type error.
 * This seems to match the spec, except maybe for functions that accept
 * non-lexical values for their datatype.
 *
 * See:
 *  - https://www.w3.org/TR/xquery/#dt-type-error
 *  - https://www.w3.org/TR/rdf-concepts/#section-Literal-Value
 *  - https://www.w3.org/TR/xquery/#dt-ebv
 *  - ... some other more precise thing i can't find...
 */
class NonLexicalLiteral extends Literal {
    constructor(typedValue, typeURL, strValue, language) {
        super(typedValue, typeURL, strValue, language);
        this.typedValue = undefined;
        this.type = 'nonlexical';
        this.shouldBeCategory = C.type(typeURL.value);
    }
    coerceEBV() {
        const isNumericOrBool = C.PrimitiveNumericTypes.contains(this.shouldBeCategory)
            || this.shouldBeCategory === 'boolean';
        if (isNumericOrBool) {
            return false;
        }
        throw new Err.EBVCoercionError(this);
    }
}
exports.NonLexicalLiteral = NonLexicalLiteral;
//# sourceMappingURL=Term.js.map

/***/ }),

/***/ 2493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Variable = void 0;
const Expressions_1 = __webpack_require__(1143);
class Variable {
    constructor(name) {
        this.expressionType = Expressions_1.ExpressionType.Variable;
        this.name = name;
    }
}
exports.Variable = Variable;
//# sourceMappingURL=Variable.js.map

/***/ }),

/***/ 6538:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1143), exports);
__exportStar(__webpack_require__(2493), exports);
__exportStar(__webpack_require__(2441), exports);
__exportStar(__webpack_require__(7732), exports);
__exportStar(__webpack_require__(1219), exports);
__exportStar(__webpack_require__(9432), exports);
__exportStar(__webpack_require__(6826), exports);
__exportStar(__webpack_require__(5366), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.promote = exports.SpecialFunction = exports.NamedFunction = exports.RegularFunction = exports.BaseFunction = void 0;
const immutable_1 = __webpack_require__(3393);
const Err = __webpack_require__(7731);
class BaseFunction {
    constructor(operator, definition) {
        this.operator = operator;
        /**
         * A function application works by monomorphing the function to a specific
         * instance depending on the runtime types. We then just apply this function
         * to the args.
         */
        this.apply = (args) => {
            const concreteFunction = this.monomorph(args) || this.handleInvalidTypes(args);
            return concreteFunction(args);
        };
        this.arity = definition.arity;
        this.overloads = definition.overloads;
    }
    /**
     * We monomorph by checking the map of overloads for keys corresponding
     * to the runtime types. We start by checking for an implementation for the
     * most concrete types (integer, string, date, IRI), if we find none,
     * we consider their term types (literal, blank, IRI), and lastly we consider
     * all arguments as generic terms.
     *
     * Another option would be to populate the overloads with an implementation
     * for every concrete type when the function is generic over termtypes or
     * terms.
     */
    monomorph(args) {
        return ( false
            // TODO: Maybe use non primitive types first?
            || this.overloads.get(Typer.asConcreteTypes(args))
            || this.overloads.get(Typer.asTermTypes(args))
            || this.overloads.get(Typer.asGenericTerms(args)));
    }
}
exports.BaseFunction = BaseFunction;
class Typer {
    static asConcreteTypes(args) {
        // tslint:disable-next-line:no-any
        return immutable_1.List(args.map((a) => a.type || a.termType));
    }
    static asTermTypes(args) {
        return immutable_1.List(args.map((a) => a.termType));
    }
    static asGenericTerms(args) {
        return immutable_1.List(Array(args.length).fill('term'));
    }
}
// Regular Functions ----------------------------------------------------------
/**
 * Varying kinds of functions take arguments of different types on which the
 * specific behaviour is dependant. Although their behaviour is often varying,
 * it is always relatively simple, and better suited for synced behaviour.
 * The types of their arguments are always terms, but might differ in
 * their term-type (eg: iri, literal),
 * their specific literal type (eg: string, integer),
 * their arity (see BNODE),
 * or even their specific numeric type (eg: integer, float).
 *
 * Examples include:
 *  - Arithmetic operations such as: *, -, /, +
 *  - Bool operators such as: =, !=, <=, <, ...
 *  - Functions such as: str, IRI
 *
 * See also: https://www.w3.org/TR/sparql11-query/#func-rdfTerms
 * and https://www.w3.org/TR/sparql11-query/#OperatorMapping
 */
class RegularFunction extends BaseFunction {
    constructor(op, definition) {
        super(op, definition);
        this.functionClass = 'regular';
    }
    handleInvalidTypes(args) {
        throw new Err.InvalidArgumentTypes(args, this.operator);
    }
}
exports.RegularFunction = RegularFunction;
// Named Functions ------------------------------------------------------------
class NamedFunction extends BaseFunction {
    constructor(op, definition) {
        super(op, definition);
        this.functionClass = 'named';
    }
    handleInvalidTypes(args) {
        throw new Err.InvalidArgumentTypes(args, this.operator);
    }
}
exports.NamedFunction = NamedFunction;
// Special Functions ----------------------------------------------------------
/*
 * Special Functions are those that don't really fit in sensible categories and
 * have extremely heterogeneous signatures that make them impossible to abstract
 * over. They are small in number, and their behaviour is often complex and open
 * for multiple correct implementations with different trade-offs.
 *
 * Due to their varying nature, they need all available information present
 * during evaluation. This reflects in the signature of the apply() method.
 *
 * They need access to an evaluator to be able to even implement their logic.
 * Especially relevant for IF, and the logical connectives.
 *
 * They can have both sync and async implementations, and both would make sense
 * in some contexts.
 */
class SpecialFunction {
    constructor(operator, definition) {
        this.operator = operator;
        this.functionClass = 'special';
        this.arity = definition.arity;
        this.applySync = definition.applySync;
        this.applyAsync = definition.applyAsync;
        this.checkArity = definition.checkArity || defaultArityCheck(this.arity);
    }
}
exports.SpecialFunction = SpecialFunction;
function defaultArityCheck(arity) {
    return (args) => {
        // Infinity is used to represent var-args, so it's always correct.
        if (arity === Infinity) {
            return true;
        }
        // If the function has overloaded arity, the actual arity needs to be present.
        if (Array.isArray(arity)) {
            return arity.indexOf(args.length) >= 0;
        }
        return args.length === arity;
    };
}
// Type Promotion -------------------------------------------------------------
const _promote = {
    integer: {
        integer: 'integer',
        decimal: 'decimal',
        float: 'float',
        double: 'double',
    },
    decimal: {
        integer: 'decimal',
        decimal: 'decimal',
        float: 'float',
        double: 'double',
    },
    float: {
        integer: 'float',
        decimal: 'float',
        float: 'float',
        double: 'double',
    },
    double: {
        integer: 'double',
        decimal: 'double',
        float: 'double',
        double: 'double',
    },
};
function promote(left, right) {
    return _promote[left][right];
}
exports.promote = promote;
//# sourceMappingURL=Core.js.map

/***/ }),

/***/ 1731:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * These helpers provide a (albeit inflexible) DSL for writing function
 * definitions for the SPARQL functions.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeCheckLit = exports.log = exports.dateTime = exports.langString = exports.string = exports.numberFromString = exports.number = exports.bool = exports.map = exports.Impl = exports.Builder = exports.declare = void 0;
const immutable_1 = __webpack_require__(3393);
const E = __webpack_require__(6538);
const C = __webpack_require__(8952);
const Err = __webpack_require__(7731);
const Consts_1 = __webpack_require__(8952);
const Core_1 = __webpack_require__(8249);
function declare() {
    return new Builder();
}
exports.declare = declare;
class Builder {
    constructor() {
        this.implementations = [];
    }
    collect() {
        return map(this.implementations);
    }
    log() {
        // tslint:disable-next-line:no-console
        console.log(this.implementations);
        return this;
    }
    add(impl) {
        this.implementations.push(impl);
        return this;
    }
    set(argTypes, func) {
        const types = immutable_1.List(argTypes);
        return this.add(new Impl({ types, func }));
    }
    copy({ from, to }) {
        const last = this.implementations.length - 1;
        const _from = immutable_1.List(from);
        for (let i = last; i >= 0; i--) {
            const impl = this.implementations[i];
            if (impl.get('types').equals(_from)) {
                return this.set(to, impl.get('func'));
            }
        }
        throw new Err.UnexpectedError('Tried to copy implementation, but types not found', { from, to });
    }
    onUnary(type, op) {
        return this.set([type], ([val]) => {
            return op(val);
        });
    }
    onUnaryTyped(type, op) {
        return this.set([type], ([val]) => {
            return op(val.typedValue);
        });
    }
    onBinary(types, op) {
        return this.set(types, ([left, right]) => {
            return op(left, right);
        });
    }
    onBinaryTyped(types, op) {
        return this.set(types, ([left, right]) => {
            return op(left.typedValue, right.typedValue);
        });
    }
    onTernaryTyped(types, op) {
        return this.set(types, ([a1, a2, a3]) => {
            return op(a1.typedValue, a2.typedValue, a3.typedValue);
        });
    }
    onTernary(types, op) {
        return this.set(types, ([a1, a2, a3]) => {
            return op(a1, a2, a3);
        });
    }
    onQuaternaryTyped(types, op) {
        return this.set(types, ([a1, a2, a3, a4]) => {
            return op(a1.typedValue, a2.typedValue, a3.typedValue, a4.typedValue);
        });
    }
    unimplemented(msg) {
        for (let arity = 0; arity <= 5; arity++) {
            const types = Array(arity).fill('term');
            const func = (_args) => { throw new Err.UnimplementedError(msg); };
            this.set(types, func);
        }
        return this;
    }
    onTerm1(op) {
        return this.set(['term'], ([term]) => op(term));
    }
    onLiteral1(op) {
        return this.set(['literal'], ([term]) => op(term));
    }
    onBoolean1(op) {
        return this
            .set(['boolean'], ([lit]) => op(lit));
    }
    onBoolean1Typed(op) {
        return this
            .set(['boolean'], ([lit]) => op(lit.typedValue));
    }
    onString1(op) {
        return this
            .set(['string'], ([lit]) => op(lit));
    }
    onString1Typed(op) {
        return this
            .set(['string'], ([lit]) => op(lit.typedValue));
    }
    onLangString1(op) {
        return this
            .set(['langString'], ([lit]) => op(lit));
    }
    onStringly1(op) {
        return this
            .set(['string'], ([lit]) => op(lit))
            .set(['langString'], ([lit]) => op(lit));
    }
    onStringly1Typed(op) {
        return this
            .set(['string'], ([lit]) => op(lit.typedValue))
            .set(['langString'], ([lit]) => op(lit.typedValue));
    }
    onNumeric1(op) {
        return this
            .set(['integer'], ([val]) => op(val))
            .set(['decimal'], ([val]) => op(val))
            .set(['float'], ([val]) => op(val))
            .set(['double'], ([val]) => op(val))
            .invalidLexicalForm(['nonlexical'], 1);
    }
    onDateTime1(op) {
        return this
            .set(['date'], ([val]) => op(val))
            .invalidLexicalForm(['nonlexical'], 1);
    }
    /**
     * Arithmetic operators take 2 numeric arguments, and return a single numerical
     * value. The type of the return value is heavily dependant on the types of the
     * input arguments. In JS everything is a double, but in SPARQL it is not.
     *
     * {@link https://www.w3.org/TR/sparql11-query/#OperatorMapping}
     * {@link https://www.w3.org/TR/xpath-functions/#op.numeric}
     *
     * @param op the (simple) binary mathematical operator that
     */
    arithmetic(op) {
        return this.numeric(([left, right]) => {
            const promotionType = Core_1.promote(left.type, right.type);
            const resultType = C.decategorize(promotionType);
            return number(op(left.typedValue, right.typedValue), resultType);
        });
    }
    numberTest(test) {
        return this.numeric(([left, right]) => {
            const result = test(left.typedValue, right.typedValue);
            return bool(result);
        });
    }
    stringTest(test) {
        return this
            .set(['string', 'string'], ([left, right]) => {
            const result = test(left.typedValue, right.typedValue);
            return bool(result);
        })
            .invalidLexicalForm(['nonlexical', 'string'], 1)
            .invalidLexicalForm(['string', 'nonlexical'], 2);
    }
    booleanTest(test) {
        return this
            .set(['boolean', 'boolean'], ([left, right]) => {
            const result = test(left.typedValue, right.typedValue);
            return bool(result);
        })
            .invalidLexicalForm(['nonlexical', 'boolean'], 1)
            .invalidLexicalForm(['boolean', 'nonlexical'], 2);
    }
    dateTimeTest(test) {
        return this
            .set(['date', 'date'], ([left, right]) => {
            const result = test(left.typedValue, right.typedValue);
            return bool(result);
        })
            .invalidLexicalForm(['nonlexical', 'date'], 1)
            .invalidLexicalForm(['date', 'nonlexical'], 2);
    }
    numeric(op) {
        return this
            .set(['integer', 'integer'], op)
            .set(['integer', 'decimal'], op)
            .set(['integer', 'float'], op)
            .set(['integer', 'double'], op)
            .invalidLexicalForm(['integer', 'nonlexical'], 2)
            .set(['decimal', 'integer'], op)
            .set(['decimal', 'decimal'], op)
            .set(['decimal', 'float'], op)
            .set(['decimal', 'double'], op)
            .invalidLexicalForm(['decimal', 'nonlexical'], 2)
            .set(['float', 'integer'], op)
            .set(['float', 'decimal'], op)
            .set(['float', 'float'], op)
            .set(['float', 'double'], op)
            .invalidLexicalForm(['float', 'nonlexical'], 2)
            .set(['double', 'integer'], op)
            .set(['double', 'decimal'], op)
            .set(['double', 'float'], op)
            .set(['double', 'double'], op)
            .invalidLexicalForm(['double', 'nonlexical'], 2)
            .invalidLexicalForm(['nonlexical', 'integer'], 1)
            .invalidLexicalForm(['nonlexical', 'decimal'], 1)
            .invalidLexicalForm(['nonlexical', 'float'], 1)
            .invalidLexicalForm(['nonlexical', 'double'], 1);
    }
    invalidLexicalForm(types, index) {
        return this.set(types, (args) => {
            throw new Err.InvalidLexicalForm(args[index - 1].toRDF());
        });
    }
    chain(impls) {
        this.implementations = this.implementations.concat(impls);
        return this;
    }
}
exports.Builder = Builder;
const implDefaults = {
    types: [],
    func() {
        const msg = 'Implementation not set yet declared as implemented';
        throw new Err.UnexpectedError(msg);
    },
};
class Impl extends immutable_1.Record(implDefaults) {
    constructor(params) { super(params); }
    get(value) {
        return super.get(value);
    }
    toPair() {
        return [this.get('types'), this.get('func')];
    }
}
exports.Impl = Impl;
function map(implementations) {
    const typeImplPair = implementations.map((i) => i.toPair());
    return immutable_1.Map(typeImplPair);
}
exports.map = map;
// ----------------------------------------------------------------------------
// Literal Construction helpers
// ----------------------------------------------------------------------------
function bool(val) {
    return new E.BooleanLiteral(val);
}
exports.bool = bool;
function number(num, dt) {
    return new E.NumericLiteral(num, C.make(dt || Consts_1.TypeURL.XSD_FLOAT), undefined);
}
exports.number = number;
function numberFromString(str, dt) {
    const num = Number(str);
    return new E.NumericLiteral(num, C.make(dt || Consts_1.TypeURL.XSD_FLOAT), undefined);
}
exports.numberFromString = numberFromString;
function string(s) {
    return new E.StringLiteral(s);
}
exports.string = string;
function langString(s, lang) {
    return new E.LangStringLiteral(s, lang);
}
exports.langString = langString;
function dateTime(date, str) {
    return new E.DateTimeLiteral(date, str);
}
exports.dateTime = dateTime;
// ----------------------------------------------------------------------------
// Util
// ----------------------------------------------------------------------------
// tslint:disable-next-line:no-any
function log(val, ...args) {
    // tslint:disable-next-line:no-console
    console.log(val, args);
    return val;
}
exports.log = log;
function typeCheckLit(term, allowed, args, op) {
    if (term.termType !== 'literal') {
        throw new Err.InvalidArgumentTypes(args, op);
    }
    // tslint:disable-next-line:no-any
    const lit = term;
    if (!allowed.includes(lit.type)) {
        throw new Err.InvalidArgumentTypes(args, op);
    }
    return lit;
}
exports.typeCheckLit = typeCheckLit;
//# sourceMappingURL=Helpers.js.map

/***/ }),

/***/ 2904:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.namedDefinitions = void 0;
const immutable_1 = __webpack_require__(3393);
const Err = __webpack_require__(7731);
const Consts_1 = __webpack_require__(8952);
const Parsing_1 = __webpack_require__(9286);
const Helpers_1 = __webpack_require__(1731);
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Begin definitions.
// ----------------------------------------------------------------------------
// XPath Constructor functions
// https://www.w3.org/TR/sparql11-query/#
// https://www.w3.org/TR/xpath-functions/#casting-from-primitive-to-primitive
// ----------------------------------------------------------------------------
const toString = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((val) => Helpers_1.string(Helpers_1.number(val.typedValue).str()))
        .onBoolean1Typed((val) => Helpers_1.string(Helpers_1.bool(val).str()))
        .onTerm1((val) => Helpers_1.string(val.str()))
        .collect(),
};
const toFloat = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((val) => Helpers_1.number(val.typedValue))
        .onBoolean1Typed((val) => Helpers_1.number(val ? 1 : 0))
        .onUnary('string', (val) => {
        const result = Parsing_1.parseXSDFloat(val.str());
        if (result === undefined) {
            throw new Err.CastError(val, Consts_1.TypeURL.XSD_FLOAT);
        }
        return Helpers_1.number(result);
    })
        .copy({ from: ['string'], to: ['nonlexical'] })
        .collect(),
};
const toDouble = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((val) => Helpers_1.number(val.typedValue, Consts_1.TypeURL.XSD_DOUBLE))
        .onBoolean1Typed((val) => Helpers_1.number(val ? 1 : 0, Consts_1.TypeURL.XSD_DOUBLE))
        .onUnary('string', (val) => {
        const result = Parsing_1.parseXSDFloat(val.str());
        if (result === undefined) {
            throw new Err.CastError(val, Consts_1.TypeURL.XSD_DOUBLE);
        }
        return Helpers_1.number(result, Consts_1.TypeURL.XSD_DOUBLE);
    })
        .copy({ from: ['string'], to: ['nonlexical'] })
        .collect(),
};
const toDecimal = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((val) => {
        const result = Parsing_1.parseXSDDecimal(val.str());
        if (result === undefined) {
            throw new Err.CastError(val, Consts_1.TypeURL.XSD_DECIMAL);
        }
        return Helpers_1.number(result, Consts_1.TypeURL.XSD_DECIMAL);
    })
        .onString1((val) => {
        const str = val.str();
        const result = /^(\-|\+)?([0-9]+(\.[0-9]+)?)$/.test(str) ? Parsing_1.parseXSDDecimal(str) : undefined;
        if (result === undefined) {
            throw new Err.CastError(val, Consts_1.TypeURL.XSD_DECIMAL);
        }
        return Helpers_1.number(result, Consts_1.TypeURL.XSD_DECIMAL);
    })
        .copy({ from: ['string'], to: ['nonlexical'] })
        .onBoolean1Typed((val) => Helpers_1.number(val ? 1 : 0, Consts_1.TypeURL.XSD_DECIMAL))
        .collect(),
};
const toInteger = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onBoolean1Typed((val) => Helpers_1.number(val ? 1 : 0, Consts_1.TypeURL.XSD_INTEGER))
        .onNumeric1((val) => {
        const result = Parsing_1.parseXSDInteger(val.str());
        if (result === undefined) {
            throw new Err.CastError(val, Consts_1.TypeURL.XSD_INTEGER);
        }
        return Helpers_1.number(result, Consts_1.TypeURL.XSD_INTEGER);
    })
        .onString1((val) => {
        const str = val.str();
        const result = /^[0-9]+$/.test(str) ? Parsing_1.parseXSDInteger(str) : undefined;
        if (result === undefined) {
            throw new Err.CastError(val, Consts_1.TypeURL.XSD_INTEGER);
        }
        return Helpers_1.number(result, Consts_1.TypeURL.XSD_INTEGER);
    })
        .copy({ from: ['integer'], to: ['nonlexical'] })
        .collect(),
};
const toDatetime = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onUnary('date', (val) => val)
        .onUnary('string', (val) => {
        const date = new Date(val.str());
        if (isNaN(date.getTime())) {
            throw new Err.CastError(val, Consts_1.TypeURL.XSD_DATE_TIME);
        }
        return Helpers_1.dateTime(date, val.str());
    })
        .copy({ from: ['string'], to: ['nonlexical'] })
        .collect(),
};
const toBoolean = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((val) => Helpers_1.bool(val.coerceEBV()))
        .onUnary('boolean', (val) => Helpers_1.bool(val.coerceEBV()))
        .onUnary('string', (val) => {
        switch (val.str()) {
            case 'true':
                return Helpers_1.bool(true);
            case 'false':
                return Helpers_1.bool(false);
            case '1':
                return Helpers_1.bool(true);
            case '0':
                return Helpers_1.bool(false);
            default:
                throw new Err.CastError(val, Consts_1.TypeURL.XSD_BOOLEAN);
        }
    })
        .copy({ from: ['string'], to: ['nonlexical'] })
        .collect(),
};
// End definitions.
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
const _definitions = {
    // --------------------------------------------------------------------------
    // XPath Constructor functions
    // https://www.w3.org/TR/sparql11-query/#FunctionMapping
    // --------------------------------------------------------------------------
    [Consts_1.TypeURL.XSD_STRING]: toString,
    [Consts_1.TypeURL.XSD_FLOAT]: toFloat,
    [Consts_1.TypeURL.XSD_DOUBLE]: toDouble,
    [Consts_1.TypeURL.XSD_DECIMAL]: toDecimal,
    [Consts_1.TypeURL.XSD_INTEGER]: toInteger,
    [Consts_1.TypeURL.XSD_DATE_TIME]: toDatetime,
    [Consts_1.TypeURL.XSD_DATE]: toDatetime,
    [Consts_1.TypeURL.XSD_BOOLEAN]: toBoolean,
};
exports.namedDefinitions = immutable_1.Map(_definitions);
//# sourceMappingURL=NamedFunctions.js.map

/***/ }),

/***/ 8620:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.definitions = void 0;
const rdf_data_factory_1 = __webpack_require__(3623);
const hash_js_1 = __webpack_require__(3715);
const spark_md5_1 = __webpack_require__(8322);
const decimal_js_1 = __webpack_require__(3776);
const uuid = __webpack_require__(1614);
const immutable_1 = __webpack_require__(3393);
const E = __webpack_require__(6538);
const C = __webpack_require__(8952);
const Err = __webpack_require__(7731);
const P = __webpack_require__(9286);
const X = __webpack_require__(3207);
const Consts_1 = __webpack_require__(8952);
const Transformation_1 = __webpack_require__(7138);
const Helpers_1 = __webpack_require__(1731);
const DF = new rdf_data_factory_1.DataFactory();
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// Begin definitions
// ----------------------------------------------------------------------------
// Operator Mapping
// https://www.w3.org/TR/sparql11-query/#OperatorMapping
// ----------------------------------------------------------------------------
const not = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onTerm1((val) => Helpers_1.bool(!val.coerceEBV()))
        .collect(),
};
const unaryPlus = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((val) => Helpers_1.number(val.typedValue, val.typeURL.value))
        .collect(),
};
const unaryMinus = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((val) => Helpers_1.number(-val.typedValue, val.typeURL.value))
        .collect(),
};
const multiplication = {
    arity: 2,
    overloads: Helpers_1.declare()
        .arithmetic((left, right) => decimal_js_1.Decimal.mul(left, right).toNumber())
        .collect(),
};
const division = {
    arity: 2,
    overloads: Helpers_1.declare()
        .arithmetic((left, right) => decimal_js_1.Decimal.div(left, right).toNumber())
        .onBinaryTyped(['integer', 'integer'], (left, right) => {
        if (right === 0) {
            throw new Err.ExpressionError('Integer division by 0');
        }
        return Helpers_1.number(decimal_js_1.Decimal.div(left, right).toNumber(), Consts_1.TypeURL.XSD_DECIMAL);
    })
        .collect(),
};
const addition = {
    arity: 2,
    overloads: Helpers_1.declare()
        .arithmetic((left, right) => decimal_js_1.Decimal.add(left, right).toNumber())
        .collect(),
};
const subtraction = {
    arity: 2,
    overloads: Helpers_1.declare()
        .arithmetic((left, right) => decimal_js_1.Decimal.sub(left, right).toNumber())
        .collect(),
};
// https://www.w3.org/TR/sparql11-query/#func-RDFterm-equal
const equality = {
    arity: 2,
    overloads: Helpers_1.declare()
        .numberTest((left, right) => left === right)
        .stringTest((left, right) => left.localeCompare(right) === 0)
        .booleanTest((left, right) => left === right)
        .dateTimeTest((left, right) => left.getTime() === right.getTime())
        .set(['term', 'term'], ([left, right]) => Helpers_1.bool(RDFTermEqual(left, right)))
        .collect(),
};
function RDFTermEqual(_left, _right) {
    const left = _left.toRDF();
    const right = _right.toRDF();
    const val = left.equals(right);
    if ((left.termType === 'Literal') && (right.termType === 'Literal')) {
        throw new Err.RDFEqualTypeError([_left, _right]);
    }
    return val;
}
const inequality = {
    arity: 2,
    overloads: Helpers_1.declare()
        .numberTest((left, right) => left !== right)
        .stringTest((left, right) => left.localeCompare(right) !== 0)
        .booleanTest((left, right) => left !== right)
        .dateTimeTest((left, right) => left.getTime() !== right.getTime())
        .set(['term', 'term'], ([left, right]) => Helpers_1.bool(!RDFTermEqual(left, right)))
        .collect(),
};
const lesserThan = {
    arity: 2,
    overloads: Helpers_1.declare()
        .numberTest((left, right) => left < right)
        .stringTest((left, right) => left.localeCompare(right) === -1)
        .booleanTest((left, right) => left < right)
        .dateTimeTest((left, right) => left.getTime() < right.getTime())
        .collect(),
};
const greaterThan = {
    arity: 2,
    overloads: Helpers_1.declare()
        .numberTest((left, right) => left > right)
        .stringTest((left, right) => left.localeCompare(right) === 1)
        .booleanTest((left, right) => left > right)
        .dateTimeTest((left, right) => left.getTime() > right.getTime())
        .collect(),
};
const lesserThanEqual = {
    arity: 2,
    overloads: Helpers_1.declare()
        .numberTest((left, right) => left <= right)
        .stringTest((left, right) => left.localeCompare(right) !== 1)
        .booleanTest((left, right) => left <= right)
        .dateTimeTest((left, right) => left.getTime() <= right.getTime())
        .collect(),
};
const greaterThanEqual = {
    arity: 2,
    overloads: Helpers_1.declare()
        .numberTest((left, right) => left >= right)
        .stringTest((left, right) => left.localeCompare(right) !== -1)
        .booleanTest((left, right) => left >= right)
        .dateTimeTest((left, right) => left.getTime() >= right.getTime())
        .collect(),
};
// ----------------------------------------------------------------------------
// Functions on RDF Terms
// https://www.w3.org/TR/sparql11-query/#func-rdfTerms
// ----------------------------------------------------------------------------
const isIRI = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onTerm1((term) => Helpers_1.bool(term.termType === 'namedNode'))
        .collect(),
};
const isBlank = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onTerm1((term) => Helpers_1.bool(term.termType === 'blankNode'))
        .collect(),
};
const isLiteral = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onTerm1((term) => Helpers_1.bool(term.termType === 'literal'))
        .collect(),
};
const isNumeric = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((term) => Helpers_1.bool(true))
        .onTerm1((term) => Helpers_1.bool(false))
        .collect(),
};
const toString = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onTerm1((term) => Helpers_1.string(term.str()))
        .collect(),
};
const lang = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onLiteral1((lit) => Helpers_1.string(lit.language || ''))
        .collect(),
};
const datatype = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onLiteral1((lit) => new E.NamedNode(lit.typeURL.value))
        .collect(),
};
// See special operators
// const IRI = {};
// See special functions
// const BNODE = {};
const STRDT = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinary(['string', 'namedNode'], (str, iri) => {
        const lit = DF.literal(str.typedValue, DF.namedNode(iri.value));
        return Transformation_1.transformLiteral(lit);
    })
        .collect(),
};
const STRLANG = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], (val, language) => new E.LangStringLiteral(val, language.toLowerCase()))
        .collect(),
};
const UUID = {
    arity: 0,
    overloads: Helpers_1.declare()
        .set([], () => new E.NamedNode(`urn:uuid:${uuid.v4()}`))
        .collect(),
};
const STRUUID = {
    arity: 0,
    overloads: Helpers_1.declare()
        .set([], () => Helpers_1.string(uuid.v4()))
        .collect(),
};
// ----------------------------------------------------------------------------
// Functions on strings
// https://www.w3.org/TR/sparql11-query/#func-forms
// ----------------------------------------------------------------------------
const STRLEN = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onStringly1((str) => Helpers_1.number([...str.typedValue].length, Consts_1.TypeURL.XSD_INTEGER))
        .collect(),
};
const SUBSTR = {
    arity: [2, 3],
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'integer'], (source, startingLoc) => {
        return Helpers_1.string([...source].slice(startingLoc - 1).join(''));
    })
        .onBinary(['langString', 'integer'], (source, startingLoc) => {
        const sub = [...source.typedValue].slice(startingLoc.typedValue - 1).join('');
        return Helpers_1.langString(sub, source.language);
    })
        .onTernaryTyped(['string', 'integer', 'integer'], (source, startingLoc, length) => {
        return Helpers_1.string([...source].slice(startingLoc - 1, length).join(''));
    })
        .onTernary(['langString', 'integer', 'integer'], (source, startingLoc, length) => {
        const sub = [...source.typedValue].slice(startingLoc.typedValue - 1, length.typedValue).join('');
        return Helpers_1.langString(sub, source.language);
    })
        .collect(),
};
const UCASE = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onString1Typed((lit) => Helpers_1.string(lit.toUpperCase()))
        .onLangString1((lit) => Helpers_1.langString(lit.typedValue.toUpperCase(), lit.language))
        .collect(),
};
const LCASE = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onString1Typed((lit) => Helpers_1.string(lit.toLowerCase()))
        .onLangString1((lit) => Helpers_1.langString(lit.typedValue.toLowerCase(), lit.language))
        .collect(),
};
const STRSTARTS = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], (arg1, arg2) => Helpers_1.bool(arg1.startsWith(arg2)))
        .onBinaryTyped(['langString', 'string'], (arg1, arg2) => Helpers_1.bool(arg1.startsWith(arg2)))
        .onBinary(['langString', 'langString'], (arg1, arg2) => {
        if (arg1.language !== arg2.language) {
            throw new Err.IncompatibleLanguageOperation(arg1, arg2);
        }
        return Helpers_1.bool(arg1.typedValue.startsWith(arg2.typedValue));
    })
        .collect(),
};
const STRENDS = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], (arg1, arg2) => Helpers_1.bool(arg1.endsWith(arg2)))
        .onBinaryTyped(['langString', 'string'], (arg1, arg2) => Helpers_1.bool(arg1.endsWith(arg2)))
        .onBinary(['langString', 'langString'], (arg1, arg2) => {
        if (arg1.language !== arg2.language) {
            throw new Err.IncompatibleLanguageOperation(arg1, arg2);
        }
        return Helpers_1.bool(arg1.typedValue.endsWith(arg2.typedValue));
    })
        .collect(),
};
const CONTAINS = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], (arg1, arg2) => Helpers_1.bool(arg1.includes(arg2)))
        .onBinaryTyped(['langString', 'string'], (arg1, arg2) => Helpers_1.bool(arg1.includes(arg2)))
        .onBinary(['langString', 'langString'], (arg1, arg2) => {
        if (arg1.language !== arg2.language) {
            throw new Err.IncompatibleLanguageOperation(arg1, arg2);
        }
        return Helpers_1.bool(arg1.typedValue.includes(arg2.typedValue));
    })
        .collect(),
};
const STRBEFORE = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], (arg1, arg2) => Helpers_1.string(arg1.substr(0, arg1.indexOf(arg2))))
        .onBinary(['langString', 'string'], (arg1, arg2) => {
        const [a1, a2] = [arg1.typedValue, arg2.typedValue];
        const sub = arg1.typedValue.substr(0, a1.indexOf(a2));
        return (sub || !a2) ? Helpers_1.langString(sub, arg1.language) : Helpers_1.string(sub);
    })
        .onBinary(['langString', 'langString'], (arg1, arg2) => {
        if (arg1.language !== arg2.language) {
            throw new Err.IncompatibleLanguageOperation(arg1, arg2);
        }
        const [a1, a2] = [arg1.typedValue, arg2.typedValue];
        const sub = arg1.typedValue.substr(0, a1.indexOf(a2));
        return (sub || !a2) ? Helpers_1.langString(sub, arg1.language) : Helpers_1.string(sub);
    })
        .collect(),
};
const STRAFTER = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], (arg1, arg2) => Helpers_1.string(arg1.substr(arg1.indexOf(arg2)).substr(arg2.length)))
        .onBinary(['langString', 'string'], (arg1, arg2) => {
        const [a1, a2] = [arg1.typedValue, arg2.typedValue];
        const sub = a1.substr(a1.indexOf(a2)).substr(a2.length);
        return (sub || !a2) ? Helpers_1.langString(sub, arg1.language) : Helpers_1.string(sub);
    })
        .onBinary(['langString', 'langString'], (arg1, arg2) => {
        if (arg1.language !== arg2.language) {
            throw new Err.IncompatibleLanguageOperation(arg1, arg2);
        }
        const [a1, a2] = [arg1.typedValue, arg2.typedValue];
        const sub = a1.substr(a1.indexOf(a2)).substr(a2.length);
        return (sub || !a2) ? Helpers_1.langString(sub, arg1.language) : Helpers_1.string(sub);
    })
        .collect(),
};
const ENCODE_FOR_URI = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onStringly1Typed((val) => Helpers_1.string(encodeURI(val))).collect(),
};
// See special operators
// const CONCAT = {}
const langmatches = {
    arity: 2,
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], (tag, range) => Helpers_1.bool(X.langMatches(tag, range))).collect(),
};
const regex2 = (text, pattern) => Helpers_1.bool(X.matches(text, pattern));
const regex3 = (text, pattern, flags) => Helpers_1.bool(X.matches(text, pattern, flags));
const REGEX = {
    arity: [2, 3],
    overloads: Helpers_1.declare()
        .onBinaryTyped(['string', 'string'], regex2)
        .onBinaryTyped(['langString', 'string'], regex2)
        .onTernaryTyped(['string', 'string', 'string'], regex3)
        .onTernaryTyped(['langString', 'string', 'string'], regex3)
        .collect(),
};
const REPLACE = {
    arity: [3, 4],
    overloads: Helpers_1.declare()
        .onTernaryTyped(['string', 'string', 'string'], (arg, pattern, replacement) => Helpers_1.string(X.replace(arg, pattern, replacement)))
        .set(['langString', 'string', 'string'], ([arg, pattern, replacement]) => {
        const result = X.replace(arg.typedValue, pattern.typedValue, replacement.typedValue);
        return Helpers_1.langString(result, arg.language);
    })
        .onQuaternaryTyped(['string', 'string', 'string', 'string'], (arg, pattern, replacement, flags) => Helpers_1.string(X.replace(arg, pattern, replacement, flags)))
        .set(['langString', 'string', 'string', 'string'], ([arg, pattern, replacement, flags]) => {
        const result = X.replace(arg.typedValue, pattern.typedValue, replacement.typedValue, flags.typedValue);
        return Helpers_1.langString(result, arg.language);
    })
        .collect(),
};
// ----------------------------------------------------------------------------
// Functions on numerics
// https://www.w3.org/TR/sparql11-query/#func-numerics
// ----------------------------------------------------------------------------
const abs = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((num) => Helpers_1.number(Math.abs(num.typedValue), num.typeURL.value))
        .collect(),
};
const round = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((num) => Helpers_1.number(Math.round(num.typedValue), num.typeURL.value))
        .collect(),
};
const ceil = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((num) => Helpers_1.number(Math.ceil(num.typedValue), num.typeURL.value))
        .collect(),
};
const floor = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onNumeric1((num) => Helpers_1.number(Math.floor(num.typedValue), num.typeURL.value))
        .collect(),
};
const rand = {
    arity: 0,
    overloads: Helpers_1.declare()
        .set([], () => Helpers_1.number(Math.random(), Consts_1.TypeURL.XSD_DOUBLE))
        .collect(),
};
// ----------------------------------------------------------------------------
// Functions on Dates and Times
// https://www.w3.org/TR/sparql11-query/#func-date-time
// ----------------------------------------------------------------------------
function parseDate(dateLit) {
    return P.parseXSDDateTime(dateLit.str());
}
// See special operators
// const now = {};
const year = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => Helpers_1.number(Number(parseDate(date).year), Consts_1.TypeURL.XSD_INTEGER))
        .collect(),
};
const month = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => Helpers_1.number(Number(parseDate(date).month), Consts_1.TypeURL.XSD_INTEGER))
        .collect(),
};
const day = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => Helpers_1.number(Number(parseDate(date).day), Consts_1.TypeURL.XSD_INTEGER))
        .collect(),
};
const hours = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => Helpers_1.number(Number(parseDate(date).hours), Consts_1.TypeURL.XSD_INTEGER))
        .collect(),
};
const minutes = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => Helpers_1.number(Number(parseDate(date).minutes), Consts_1.TypeURL.XSD_INTEGER))
        .collect(),
};
const seconds = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => Helpers_1.number(Number(parseDate(date).seconds), Consts_1.TypeURL.XSD_DECIMAL))
        .collect(),
};
const timezone = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => {
        const duration = X.formatDayTimeDuration(parseDate(date).timezone);
        if (!duration) {
            throw new Err.InvalidTimezoneCall(date.strValue);
        }
        return new E.Literal(duration, C.make(Consts_1.TypeURL.XSD_DAYTIME_DURATION), duration);
    })
        .collect(),
};
const tz = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onDateTime1((date) => Helpers_1.string(parseDate(date).timezone))
        .collect(),
};
// ----------------------------------------------------------------------------
// Hash functions
// https://www.w3.org/TR/sparql11-query/#func-hash
// ----------------------------------------------------------------------------
const MD5 = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onString1Typed((str) => Helpers_1.string(spark_md5_1.hash(str)))
        .collect(),
};
const SHA1 = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onString1Typed((str) => Helpers_1.string(hash_js_1.sha1().update(str).digest('hex')))
        .collect(),
};
const SHA256 = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onString1Typed((str) => Helpers_1.string(hash_js_1.sha256().update(str).digest('hex')))
        .collect(),
};
const SHA384 = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onString1Typed((str) => Helpers_1.string(hash_js_1.sha384().update(str).digest('hex')))
        .collect(),
};
const SHA512 = {
    arity: 1,
    overloads: Helpers_1.declare()
        .onString1Typed((str) => Helpers_1.string(hash_js_1.sha512().update(str).digest('hex')))
        .collect(),
};
// End definitions.
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
/*
 * Collect all the definitions from above into an object
 */
const _definitions = {
    // --------------------------------------------------------------------------
    // Operator Mapping
    // https://www.w3.org/TR/sparql11-query/#OperatorMapping
    // --------------------------------------------------------------------------
    '!': not,
    'UPLUS': unaryPlus,
    'UMINUS': unaryMinus,
    '*': multiplication,
    '/': division,
    '+': addition,
    '-': subtraction,
    '=': equality,
    '!=': inequality,
    '<': lesserThan,
    '>': greaterThan,
    '<=': lesserThanEqual,
    '>=': greaterThanEqual,
    // --------------------------------------------------------------------------
    // Functions on RDF Terms
    // https://www.w3.org/TR/sparql11-query/#func-rdfTerms
    // --------------------------------------------------------------------------
    'isiri': isIRI,
    'isblank': isBlank,
    'isliteral': isLiteral,
    'isnumeric': isNumeric,
    'str': toString,
    'lang': lang,
    'datatype': datatype,
    // 'iri': IRI (see special operators),
    // 'uri': IRI (see special operators),
    // 'BNODE': BNODE (see special operators),
    'strdt': STRDT,
    'strlang': STRLANG,
    'uuid': UUID,
    'struuid': STRUUID,
    // --------------------------------------------------------------------------
    // Functions on strings
    // https://www.w3.org/TR/sparql11-query/#func-forms
    // --------------------------------------------------------------------------
    'strlen': STRLEN,
    'substr': SUBSTR,
    'ucase': UCASE,
    'lcase': LCASE,
    'strstarts': STRSTARTS,
    'strends': STRENDS,
    'contains': CONTAINS,
    'strbefore': STRBEFORE,
    'strafter': STRAFTER,
    'encode_for_uri': ENCODE_FOR_URI,
    // 'concat': CONCAT (see special operators)
    'langmatches': langmatches,
    'regex': REGEX,
    'replace': REPLACE,
    // --------------------------------------------------------------------------
    // Functions on numerics
    // https://www.w3.org/TR/sparql11-query/#func-numerics
    // --------------------------------------------------------------------------
    'abs': abs,
    'round': round,
    'ceil': ceil,
    'floor': floor,
    'rand': rand,
    // --------------------------------------------------------------------------
    // Functions on Dates and Times
    // https://www.w3.org/TR/sparql11-query/#func-date-time
    // --------------------------------------------------------------------------
    // 'now': now (see special operators),
    'year': year,
    'month': month,
    'day': day,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
    'timezone': timezone,
    'tz': tz,
    // --------------------------------------------------------------------------
    // Hash functions
    // https://www.w3.org/TR/sparql11-query/#func-hash
    // --------------------------------------------------------------------------
    'md5': MD5,
    'sha1': SHA1,
    'sha256': SHA256,
    'sha384': SHA384,
    'sha512': SHA512,
};
exports.definitions = immutable_1.Map(_definitions);
//# sourceMappingURL=RegularFunctions.js.map

/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.specialDefinitions = void 0;
const immutable_1 = __webpack_require__(3393);
const relative_to_absolute_iri_1 = __webpack_require__(8912);
const uuid = __webpack_require__(1614);
const E = __webpack_require__(6538);
const C = __webpack_require__(8952);
const Err = __webpack_require__(7731);
const Helpers_1 = __webpack_require__(1731);
const index_1 = __webpack_require__(9415);
// ----------------------------------------------------------------------------
// Functional forms
// ----------------------------------------------------------------------------
function _bound({ args, mapping }) {
    const variable = args[0];
    if (variable.expressionType !== E.ExpressionType.Variable) {
        throw new Err.InvalidArgumentTypes(args, C.SpecialOperator.BOUND);
    }
    const val = mapping.has(variable.name) && !!mapping.get(variable.name);
    return Helpers_1.bool(val);
}
// BOUND ----------------------------------------------------------------------
const bound = {
    arity: 1,
    async applyAsync({ args, mapping }) {
        return _bound({ args, mapping });
    },
    applySync({ args, mapping }) {
        return _bound({ args, mapping });
    },
};
// IF -------------------------------------------------------------------------
const ifSPARQL = {
    arity: 3,
    async applyAsync({ args, mapping, evaluate }) {
        const valFirst = await evaluate(args[0], mapping);
        const ebv = valFirst.coerceEBV();
        return (ebv)
            ? evaluate(args[1], mapping)
            : evaluate(args[2], mapping);
    },
    applySync({ args, mapping, evaluate }) {
        const valFirst = evaluate(args[0], mapping);
        const ebv = valFirst.coerceEBV();
        return (ebv)
            ? evaluate(args[1], mapping)
            : evaluate(args[2], mapping);
    },
};
// COALESCE -------------------------------------------------------------------
const coalesce = {
    arity: Infinity,
    async applyAsync({ args, mapping, evaluate }) {
        const errors = [];
        for (const expr of args) {
            try {
                return await evaluate(expr, mapping);
            }
            catch (err) {
                errors.push(err);
            }
        }
        throw new Err.CoalesceError(errors);
    },
    applySync({ args, mapping, evaluate }) {
        const errors = [];
        for (const expr of args) {
            try {
                return evaluate(expr, mapping);
            }
            catch (err) {
                errors.push(err);
            }
        }
        throw new Err.CoalesceError(errors);
    },
};
// logical-or (||) ------------------------------------------------------------
// https://www.w3.org/TR/sparql11-query/#func-logical-or
const logicalOr = {
    arity: 2,
    async applyAsync({ args, mapping, evaluate }) {
        const [leftExpr, rightExpr] = args;
        try {
            const leftTerm = await evaluate(leftExpr, mapping);
            const left = leftTerm.coerceEBV();
            if (left) {
                return Helpers_1.bool(true);
            }
            const rightTerm = await evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            return Helpers_1.bool(right);
        }
        catch (leftErr) {
            const rightTerm = await evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            if (!right) {
                throw leftErr;
            }
            return Helpers_1.bool(true);
        }
    },
    applySync({ args, mapping, evaluate }) {
        const [leftExpr, rightExpr] = args;
        try {
            const leftTerm = evaluate(leftExpr, mapping);
            const left = leftTerm.coerceEBV();
            if (left) {
                return Helpers_1.bool(true);
            }
            const rightTerm = evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            return Helpers_1.bool(right);
        }
        catch (leftErr) {
            const rightTerm = evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            if (!right) {
                throw leftErr;
            }
            return Helpers_1.bool(true);
        }
    },
};
// logical-and (&&) -----------------------------------------------------------
// https://www.w3.org/TR/sparql11-query/#func-logical-and
const logicalAnd = {
    arity: 2,
    async applyAsync({ args, mapping, evaluate }) {
        const [leftExpr, rightExpr] = args;
        try {
            const leftTerm = await evaluate(leftExpr, mapping);
            const left = leftTerm.coerceEBV();
            if (!left) {
                return Helpers_1.bool(false);
            }
            const rightTerm = await evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            return Helpers_1.bool(right);
        }
        catch (leftErr) {
            const rightTerm = await evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            if (right) {
                throw leftErr;
            }
            return Helpers_1.bool(false);
        }
    },
    applySync({ args, mapping, evaluate }) {
        const [leftExpr, rightExpr] = args;
        try {
            const leftTerm = evaluate(leftExpr, mapping);
            const left = leftTerm.coerceEBV();
            if (!left) {
                return Helpers_1.bool(false);
            }
            const rightTerm = evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            return Helpers_1.bool(right);
        }
        catch (leftErr) {
            const rightTerm = evaluate(rightExpr, mapping);
            const right = rightTerm.coerceEBV();
            if (right) {
                throw leftErr;
            }
            return Helpers_1.bool(false);
        }
    },
};
// sameTerm -------------------------------------------------------------------
const sameTerm = {
    arity: 2,
    async applyAsync({ args, mapping, evaluate }) {
        const [leftExpr, rightExpr] = args.map((a) => evaluate(a, mapping));
        const left = await leftExpr;
        const right = await rightExpr;
        return Helpers_1.bool(left.toRDF().equals(right.toRDF()));
    },
    applySync({ args, mapping, evaluate }) {
        const [left, right] = args.map((a) => evaluate(a, mapping));
        return Helpers_1.bool(left.toRDF().equals(right.toRDF()));
    },
};
// IN -------------------------------------------------------------------------
const inSPARQL = {
    arity: Infinity,
    checkArity(args) { return args.length >= 1; },
    async applyAsync({ args, mapping, evaluate, context }) {
        const [leftExpr, ...remaining] = args;
        const left = await evaluate(leftExpr, mapping);
        return inRecursiveAsync(left, { args: remaining, mapping, evaluate, context }, []);
    },
    applySync({ args, mapping, evaluate, context }) {
        const [leftExpr, ...remaining] = args;
        const left = evaluate(leftExpr, mapping);
        return inRecursiveSync(left, { args: remaining, mapping, evaluate, context }, []);
    },
};
async function inRecursiveAsync(needle, { args, mapping, evaluate, context }, results) {
    if (args.length === 0) {
        const noErrors = results.every((v) => !v);
        return (noErrors) ? Helpers_1.bool(false) : Promise.reject(new Err.InError(results));
    }
    try {
        const next = await evaluate(args.shift(), mapping);
        const isEqual = index_1.regularFunctions.get(C.RegularOperator.EQUAL);
        if (isEqual.apply([needle, next]).typedValue === true) {
            return Helpers_1.bool(true);
        }
        else {
            return inRecursiveAsync(needle, { args, mapping, evaluate, context }, [...results, false]);
        }
    }
    catch (err) {
        return inRecursiveAsync(needle, { args, mapping, evaluate, context }, [...results, err]);
    }
}
function inRecursiveSync(needle, { args, mapping, evaluate, context }, results) {
    if (args.length === 0) {
        const noErrors = results.every((v) => !v);
        if (noErrors) {
            Helpers_1.bool(false);
        }
        else {
            throw new Err.InError(results);
        }
    }
    try {
        const next = evaluate(args.shift(), mapping);
        const isEqual = index_1.regularFunctions.get(C.RegularOperator.EQUAL);
        if (isEqual.apply([needle, next]).typedValue === true) {
            return Helpers_1.bool(true);
        }
        else {
            return inRecursiveSync(needle, { args, mapping, evaluate, context }, [...results, false]);
        }
    }
    catch (err) {
        return inRecursiveSync(needle, { args, mapping, evaluate, context }, [...results, err]);
    }
}
// NOT IN ---------------------------------------------------------------------
const notInSPARQL = {
    arity: Infinity,
    checkArity(args) { return args.length >= 1; },
    async applyAsync(context) {
        const _in = index_1.specialFunctions.get(C.SpecialOperator.IN);
        const isIn = await _in.applyAsync(context);
        return Helpers_1.bool(!isIn.typedValue);
    },
    applySync(context) {
        const _in = index_1.specialFunctions.get(C.SpecialOperator.IN);
        const isIn = _in.applySync(context);
        return Helpers_1.bool(!isIn.typedValue);
    },
};
// ----------------------------------------------------------------------------
// Annoying functions
// ----------------------------------------------------------------------------
// CONCAT
const concat = {
    arity: Infinity,
    async applyAsync({ args, evaluate, mapping }) {
        const pLits = args
            .map(async (expr) => evaluate(expr, mapping))
            .map(async (pTerm) => Helpers_1.typeCheckLit(await pTerm, ['string', 'langString'], args, C.SpecialOperator.CONCAT));
        const lits = await Promise.all(pLits);
        const strings = lits.map((lit) => lit.typedValue);
        const joined = strings.join('');
        const lang = langAllEqual(lits) ? lits[0].language : undefined;
        return (lang) ? Helpers_1.langString(joined, lang) : Helpers_1.string(joined);
    },
    applySync({ args, evaluate, mapping }) {
        const lits = args
            .map((expr) => evaluate(expr, mapping))
            .map((pTerm) => Helpers_1.typeCheckLit(pTerm, ['string', 'langString'], args, C.SpecialOperator.CONCAT));
        const strings = lits.map((lit) => lit.typedValue);
        const joined = strings.join('');
        const lang = langAllEqual(lits) ? lits[0].language : undefined;
        return (lang) ? Helpers_1.langString(joined, lang) : Helpers_1.string(joined);
    },
};
function langAllEqual(lits) {
    return lits.length > 0 && lits.every((lit) => lit.language === lits[0].language);
}
// ----------------------------------------------------------------------------
// Context dependant functions
// ----------------------------------------------------------------------------
const now = {
    arity: 0,
    async applyAsync({ context }) {
        return new E.DateTimeLiteral(context.now, context.now.toISOString());
    },
    applySync({ context }) {
        return new E.DateTimeLiteral(context.now, context.now.toISOString());
    },
};
// https://www.w3.org/TR/sparql11-query/#func-iri
const IRI = {
    arity: 1,
    async applyAsync({ args, evaluate, mapping, context }) {
        const input = await evaluate(args[0], mapping);
        return IRI_(input, context.baseIRI, args);
    },
    applySync({ args, evaluate, mapping, context }) {
        const input = evaluate(args[0], mapping);
        return IRI_(input, context.baseIRI, args);
    },
};
function IRI_(input, baseIRI, args) {
    const lit = (input.termType !== 'namedNode')
        ? Helpers_1.typeCheckLit(input, ['string'], args, C.SpecialOperator.IRI)
        : input;
    const iri = relative_to_absolute_iri_1.resolve(lit.str(), baseIRI || '');
    return new E.NamedNode(iri);
}
// https://www.w3.org/TR/sparql11-query/#func-bnode
// id has to be distinct over all id's in dataset
const BNODE = {
    arity: Infinity,
    checkArity(args) { return args.length === 0 || args.length === 1; },
    async applyAsync({ args, evaluate, mapping, context }) {
        const input = (args.length === 1)
            ? await evaluate(args[0], mapping)
            : undefined;
        const strInput = (input)
            ? Helpers_1.typeCheckLit(input, ['string'], args, C.SpecialOperator.BNODE).str()
            : undefined;
        if (context.bnode) {
            const bnode = await context.bnode(strInput);
            return new E.BlankNode(bnode.value);
        }
        return BNODE_(strInput);
    },
    applySync({ args, evaluate, mapping, context }) {
        const input = (args.length === 1)
            ? evaluate(args[0], mapping)
            : undefined;
        const strInput = (input)
            ? Helpers_1.typeCheckLit(input, ['string'], args, C.SpecialOperator.BNODE).str()
            : undefined;
        if (context.bnode) {
            const bnode = context.bnode(strInput);
            return new E.BlankNode(bnode.value);
        }
        return BNODE_(strInput);
    },
};
function BNODE_(input) {
    return new E.BlankNode(input || uuid.v4());
}
const _specialDefinitions = {
    // --------------------------------------------------------------------------
    // Functional Forms
    // https://www.w3.org/TR/sparql11-query/#func-forms
    // --------------------------------------------------------------------------
    'bound': bound,
    'if': ifSPARQL,
    'coalesce': coalesce,
    '&&': logicalAnd,
    '||': logicalOr,
    'sameterm': sameTerm,
    'in': inSPARQL,
    'notin': notInSPARQL,
    // Annoying functions
    'concat': concat,
    // Context dependent functions
    'now': now,
    'iri': IRI,
    'uri': IRI,
    'BNODE': BNODE,
};
exports.specialDefinitions = immutable_1.Map(_specialDefinitions);
//# sourceMappingURL=SpecialFunctions.js.map

/***/ }),

/***/ 3207:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.formatDayTimeDuration = exports.langMatches = exports.replace = exports.matches = void 0;
// https://www.w3.org/TR/xpath-functions/#func-matches
// https://www.w3.org/TR/xpath-functions/#flags
function matches(text, pattern, flags) {
    // TODO: Only flags 'i' and 'm' match between XPath and JS.
    // 's', 'x', 'q', would need proper implementation.
    const reg = new RegExp(pattern, flags);
    return reg.test(text);
}
exports.matches = matches;
// TODO: Fix flags
// https://www.w3.org/TR/xpath-functions/#func-replace
function replace(arg, pattern, replacement, flags) {
    let reg = new RegExp(pattern, flags);
    if (!reg.global) {
        const flags_ = flags || '';
        reg = new RegExp(pattern, flags_ + 'g');
    }
    return arg.replace(reg, replacement);
}
exports.replace = replace;
// TODO: Not an XPath function
// TODO: Publish as package
// https://www.ietf.org/rfc/rfc4647.txt
// https://www.w3.org/TR/sparql11-query/#func-langMatches
function langMatches(tag, range) {
    const langTags = tag.split('-');
    const rangeTags = range.split('-');
    if (!_matchLangTag(rangeTags[0], langTags[0])
        && !_isWildCard(langTags[0])) {
        return false;
    }
    let lI = 1;
    let rI = 1;
    while (rI < rangeTags.length) {
        if (_isWildCard(rangeTags[rI])) {
            rI++;
            continue;
        }
        if (lI === langTags.length) {
            return false;
        }
        if (_matchLangTag(rangeTags[rI], langTags[lI])) {
            lI++;
            rI++;
            continue;
        }
        if (langTags[lI].length === 1) {
            return false;
        }
        lI++;
    }
    return true;
}
exports.langMatches = langMatches;
function _isWildCard(tag) {
    return tag === '*';
}
function _matchLangTag(left, right) {
    const matchInitial = new RegExp(`/${left}/`, 'i');
    return matchInitial.test(`/${right}/`);
}
/**
 * Formats a timezone string into a XML DayTimeDuration
 *
 * TODO: Test
 * Used in fn:timezone
 * http://www.datypic.com/sc/xsd/t-xsd_dayTimeDuration.html
 */
function formatDayTimeDuration(timezone) {
    if (!timezone) {
        return undefined;
    }
    if (timezone[0] === 'Z') {
        return 'PT0S';
    }
    else {
        // Split string
        const [sign, h1Raw, h2Raw, _, m1Raw, m2Raw] = timezone;
        // Cut of leading zero, set to empty string if 0, and append H;
        const h1 = (h1Raw !== '0') ? h1Raw : '';
        const h2 = (h1 || h2Raw !== '0') ? h2Raw : '';
        const hours = (h1 + h2) ? h1 + h2 + 'H' : '';
        // Same as in hours
        const m1 = (m1Raw !== '0') ? m1Raw : '';
        const m2 = (m1 || m2Raw !== '0') ? m2Raw : '';
        const minutes = (m1 + m2) ? m1 + m2 + 'M' : '';
        // Concat sign and time and mandatory separators
        const time = `${hours}${minutes}`;
        const signNoPlus = (sign === '-') ? '-' : '';
        return `${signNoPlus}PT${time}`;
    }
}
exports.formatDayTimeDuration = formatDayTimeDuration;
//# sourceMappingURL=XPathFunctions.js.map

/***/ }),

/***/ 9415:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.namedFunctions = exports.specialFunctions = exports.regularFunctions = void 0;
const Core_1 = __webpack_require__(8249);
const NamedFunctions_1 = __webpack_require__(2904);
const RegularFunctions_1 = __webpack_require__(8620);
const SpecialFunctions_1 = __webpack_require__(2093);
__exportStar(__webpack_require__(8249), exports);
exports.regularFunctions = RegularFunctions_1.definitions
    .map((def, op) => new Core_1.RegularFunction(op, def))
    .toMap();
exports.specialFunctions = SpecialFunctions_1.specialDefinitions
    .map((def, op) => new Core_1.SpecialFunction(op, def))
    .toMap();
exports.namedFunctions = NamedFunctions_1.namedDefinitions
    .map((def, op) => new Core_1.NamedFunction(op, def))
    .toMap();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NamedOperators = exports.SetFunctions = exports.SetFunction = exports.Operators = exports.SpecialOperators = exports.RegularOperators = exports.SpecialOperator = exports.RegularOperator = exports.decategorize = exports.type = exports.PrimitiveNumericTypes = exports.commonTerms = exports.DerivedIntegerTypeURLs = exports.NumericTypeURLs = exports.DerivedIntegerTypeURL = exports.NumericTypeURL = exports.make = exports.TypeURL = exports.EVB_ERR_STR = exports.FALSE_STR = exports.TRUE_STR = void 0;
// tslint:disable:variable-name
const rdf_data_factory_1 = __webpack_require__(3623);
const immutable_1 = __webpack_require__(3393);
const DF = new rdf_data_factory_1.DataFactory();
exports.TRUE_STR = '"true"^^xsd:boolean';
exports.FALSE_STR = '"false"^^xsd:boolean';
exports.EVB_ERR_STR = '"not an dateTime"^^xsd:dateTime';
// TODO: Consider inlining all with 'const enum'
var TypeURL;
(function (TypeURL) {
    TypeURL["XSD_ANY_URI"] = "http://www.w3.org/2001/XMLSchema#anyURI";
    TypeURL["XSD_STRING"] = "http://www.w3.org/2001/XMLSchema#string";
    TypeURL["RDF_LANG_STRING"] = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString";
    TypeURL["XSD_BOOLEAN"] = "http://www.w3.org/2001/XMLSchema#boolean";
    TypeURL["XSD_DATE_TIME"] = "http://www.w3.org/2001/XMLSchema#dateTime";
    TypeURL["XSD_DATE"] = "http://www.w3.org/2001/XMLSchema#date";
    // Numeric types
    TypeURL["XSD_INTEGER"] = "http://www.w3.org/2001/XMLSchema#integer";
    TypeURL["XSD_DECIMAL"] = "http://www.w3.org/2001/XMLSchema#decimal";
    TypeURL["XSD_FLOAT"] = "http://www.w3.org/2001/XMLSchema#float";
    TypeURL["XSD_DOUBLE"] = "http://www.w3.org/2001/XMLSchema#double";
    // Derived numeric types
    TypeURL["XSD_NON_POSITIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#nonPositiveInteger";
    TypeURL["XSD_NEGATIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#negativeInteger";
    TypeURL["XSD_LONG"] = "http://www.w3.org/2001/XMLSchema#long";
    TypeURL["XSD_INT"] = "http://www.w3.org/2001/XMLSchema#int";
    TypeURL["XSD_SHORT"] = "http://www.w3.org/2001/XMLSchema#short";
    TypeURL["XSD_BYTE"] = "http://www.w3.org/2001/XMLSchema#byte";
    TypeURL["XSD_NON_NEGATIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#nonNegativeInteger";
    TypeURL["XSD_UNSIGNED_LONG"] = "http://www.w3.org/2001/XMLSchema#unsignedLong";
    TypeURL["XSD_UNSIGNED_INT"] = "http://www.w3.org/2001/XMLSchema#unsignedInt";
    TypeURL["XSD_UNSIGNED_SHORT"] = "http://www.w3.org/2001/XMLSchema#unsignedShort";
    TypeURL["XSD_UNSIGNED_BYTE"] = "http://www.w3.org/2001/XMLSchema#unsignedByte";
    TypeURL["XSD_POSITIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#positiveInteger";
    // Other types
    TypeURL["XSD_DAYTIME_DURATION"] = "http://www.w3.org/2001/XMLSchema#dayTimeDuration";
})(TypeURL = exports.TypeURL || (exports.TypeURL = {}));
function make(dt) {
    return DF.namedNode(dt);
}
exports.make = make;
// https://www.w3.org/TR/sparql11-query/#operandDataTypes
var NumericTypeURL;
(function (NumericTypeURL) {
    // Numeric types
    NumericTypeURL["XSD_INTEGER"] = "http://www.w3.org/2001/XMLSchema#integer";
    NumericTypeURL["XSD_DECIMAL"] = "http://www.w3.org/2001/XMLSchema#decimal";
    NumericTypeURL["XSD_FLOAT"] = "http://www.w3.org/2001/XMLSchema#float";
    NumericTypeURL["XSD_DOUBLE"] = "http://www.w3.org/2001/XMLSchema#double";
    // Derived numeric types
    NumericTypeURL["XSD_NON_POSITIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#nonPositiveInteger";
    NumericTypeURL["XSD_NEGATIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#negativeInteger";
    NumericTypeURL["XSD_LONG"] = "http://www.w3.org/2001/XMLSchema#long";
    NumericTypeURL["XSD_INT"] = "http://www.w3.org/2001/XMLSchema#int";
    NumericTypeURL["XSD_SHORT"] = "http://www.w3.org/2001/XMLSchema#short";
    NumericTypeURL["XSD_BYTE"] = "http://www.w3.org/2001/XMLSchema#byte";
    NumericTypeURL["XSD_NON_NEGATIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#nonNegativeInteger";
    NumericTypeURL["XSD_UNSIGNED_LONG"] = "http://www.w3.org/2001/XMLSchema#unsignedLong";
    NumericTypeURL["XSD_UNSIGNED_INT"] = "http://www.w3.org/2001/XMLSchema#unsignedInt";
    NumericTypeURL["XSD_UNSIGNED_SHORT"] = "http://www.w3.org/2001/XMLSchema#unsignedShort";
    NumericTypeURL["XSD_UNSIGNED_BYTE"] = "http://www.w3.org/2001/XMLSchema#unsignedByte";
    NumericTypeURL["XSD_POSITIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#positiveInteger";
})(NumericTypeURL = exports.NumericTypeURL || (exports.NumericTypeURL = {}));
var DerivedIntegerTypeURL;
(function (DerivedIntegerTypeURL) {
    DerivedIntegerTypeURL["XSD_NON_POSITIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#nonPositiveInteger";
    DerivedIntegerTypeURL["XSD_NEGATIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#negativeInteger";
    DerivedIntegerTypeURL["XSD_LONG"] = "http://www.w3.org/2001/XMLSchema#long";
    DerivedIntegerTypeURL["XSD_INT"] = "http://www.w3.org/2001/XMLSchema#int";
    DerivedIntegerTypeURL["XSD_SHORT"] = "http://www.w3.org/2001/XMLSchema#short";
    DerivedIntegerTypeURL["XSD_BYTE"] = "http://www.w3.org/2001/XMLSchema#byte";
    DerivedIntegerTypeURL["XSD_NON_NEGATIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#nonNegativeInteger";
    DerivedIntegerTypeURL["XSD_UNSIGNED_LONG"] = "http://www.w3.org/2001/XMLSchema#unsignedLong";
    DerivedIntegerTypeURL["XSD_UNSIGNED_INT"] = "http://www.w3.org/2001/XMLSchema#unsignedInt";
    DerivedIntegerTypeURL["XSD_UNSIGNED_SHORT"] = "http://www.w3.org/2001/XMLSchema#unsignedShort";
    DerivedIntegerTypeURL["XSD_UNSIGNED_BYTE"] = "http://www.w3.org/2001/XMLSchema#unsignedByte";
    DerivedIntegerTypeURL["XSD_POSITIVE_INTEGER"] = "http://www.w3.org/2001/XMLSchema#positiveInteger";
})(DerivedIntegerTypeURL = exports.DerivedIntegerTypeURL || (exports.DerivedIntegerTypeURL = {}));
exports.NumericTypeURLs = immutable_1.Set(Object.values(NumericTypeURL));
exports.DerivedIntegerTypeURLs = immutable_1.Set(Object.values(DerivedIntegerTypeURL));
exports.commonTerms = {
    true: DF.literal('true', DF.namedNode(TypeURL.XSD_BOOLEAN)),
    false: DF.literal('false', DF.namedNode(TypeURL.XSD_BOOLEAN)),
};
exports.PrimitiveNumericTypes = immutable_1.Set(['integer', 'decimal', 'float', 'double']);
function type(typeURL) {
    switch (typeURL) {
        case null:
        case undefined:
        case '':
        case TypeURL.XSD_ANY_URI: return 'string';
        case TypeURL.XSD_STRING: return 'string';
        case TypeURL.RDF_LANG_STRING: return 'langString';
        case TypeURL.XSD_DATE_TIME: return 'date';
        case TypeURL.XSD_BOOLEAN: return 'boolean';
        case TypeURL.XSD_DECIMAL: return 'decimal';
        case TypeURL.XSD_FLOAT: return 'float';
        case TypeURL.XSD_DOUBLE: return 'double';
        case TypeURL.XSD_INTEGER:
        case TypeURL.XSD_NON_POSITIVE_INTEGER:
        case TypeURL.XSD_NEGATIVE_INTEGER:
        case TypeURL.XSD_LONG:
        case TypeURL.XSD_INT:
        case TypeURL.XSD_SHORT:
        case TypeURL.XSD_BYTE:
        case TypeURL.XSD_NON_NEGATIVE_INTEGER:
        case TypeURL.XSD_UNSIGNED_LONG:
        case TypeURL.XSD_UNSIGNED_INT:
        case TypeURL.XSD_UNSIGNED_SHORT:
        case TypeURL.XSD_UNSIGNED_BYTE:
        case TypeURL.XSD_POSITIVE_INTEGER: return 'integer';
        default: return 'other';
    }
}
exports.type = type;
// If datatypes get lost or lose specificity during operations, we can insert a
// concrete type, since categories should remain the same. This mostly (only)
// relevant for integer subtypes.
const _decategorize = immutable_1.Map([
    ['integer', TypeURL.XSD_INTEGER],
    ['float', TypeURL.XSD_FLOAT],
    ['double', TypeURL.XSD_DOUBLE],
    ['decimal', TypeURL.XSD_DECIMAL],
]);
function decategorize(cat) {
    return _decategorize.get(cat);
}
exports.decategorize = decategorize;
// TODO: Remove unneeded double typing
var RegularOperator;
(function (RegularOperator) {
    // Operator mapping
    // https://www.w3.org/TR/sparql11-query/#OperatorMapping
    RegularOperator["NOT"] = "!";
    RegularOperator["UMINUS"] = "UMINUS";
    RegularOperator["UPLUS"] = "UPLUS";
    // LOGICAL_AND // See SpecialOperators
    // LOGICAL_OR  // See SpecialOperators
    RegularOperator["EQUAL"] = "=";
    RegularOperator["NOT_EQUAL"] = "!=";
    RegularOperator["LT"] = "<";
    RegularOperator["GT"] = ">";
    RegularOperator["LTE"] = "<=";
    RegularOperator["GTE"] = ">=";
    RegularOperator["MULTIPLICATION"] = "*";
    RegularOperator["DIVISION"] = "/";
    RegularOperator["ADDITION"] = "+";
    RegularOperator["SUBTRACTION"] = "-";
    // Functional Forms
    // https://www.w3.org/TR/sparql11-query/#func-forms
    // See SpecialOperators
    // Functions on RDF Terms
    // https://www.w3.org/TR/sparql11-query/#func-rdfTerms
    RegularOperator["IS_IRI"] = "isiri";
    RegularOperator["IS_BLANK"] = "isblank";
    RegularOperator["IS_LITERAL"] = "isliteral";
    RegularOperator["IS_NUMERIC"] = "isnumeric";
    RegularOperator["STR"] = "str";
    RegularOperator["LANG"] = "lang";
    RegularOperator["DATATYPE"] = "datatype";
    // IRI = 'iri', (see special operators)
    // URI = 'uri', (see special operators)
    // BNODE = 'BNODE', (see special operators)
    RegularOperator["STRDT"] = "strdt";
    RegularOperator["STRLANG"] = "strlang";
    RegularOperator["UUID"] = "uuid";
    RegularOperator["STRUUID"] = "struuid";
    // Functions on strings
    // https://www.w3.org/TR/sparql11-query/#func-strings
    RegularOperator["STRLEN"] = "strlen";
    RegularOperator["SUBSTR"] = "substr";
    RegularOperator["UCASE"] = "ucase";
    RegularOperator["LCASE"] = "lcase";
    RegularOperator["STRSTARTS"] = "strstarts";
    RegularOperator["STRENDS"] = "strends";
    RegularOperator["CONTAINS"] = "contains";
    RegularOperator["STRBEFORE"] = "strbefore";
    RegularOperator["STRAFTER"] = "strafter";
    RegularOperator["ENCODE_FOR_URI"] = "encode_for_uri";
    // CONCAT = 'concat' (see special operators)
    RegularOperator["LANG_MATCHES"] = "langmatches";
    RegularOperator["REGEX"] = "regex";
    RegularOperator["REPLACE"] = "replace";
    // Functions on numerics
    // https://www.w3.org/TR/sparql11-query/#func-numerics
    RegularOperator["ABS"] = "abs";
    RegularOperator["ROUND"] = "round";
    RegularOperator["CEIL"] = "ceil";
    RegularOperator["FLOOR"] = "floor";
    RegularOperator["RAND"] = "rand";
    // Functions on Dates and Times
    // https://www.w3.org/TR/sparql11-query/#func-date-time
    // NOW = 'now' (see special operators)
    RegularOperator["YEAR"] = "year";
    RegularOperator["MONTH"] = "month";
    RegularOperator["DAY"] = "day";
    RegularOperator["HOURS"] = "hours";
    RegularOperator["MINUTES"] = "minutes";
    RegularOperator["SECONDS"] = "seconds";
    RegularOperator["TIMEZONE"] = "timezone";
    RegularOperator["TZ"] = "tz";
    // Hash functions
    // https://www.w3.org/TR/sparql11-query/#func-hash
    RegularOperator["MD5"] = "md5";
    RegularOperator["SHA1"] = "sha1";
    RegularOperator["SHA256"] = "sha256";
    RegularOperator["SHA384"] = "sha384";
    RegularOperator["SHA512"] = "sha512";
    // XPath Constructor functions
    // https://www.w3.org/TR/sparql11-query/#FunctionMapping
    // See Named Operators
})(RegularOperator = exports.RegularOperator || (exports.RegularOperator = {}));
var SpecialOperator;
(function (SpecialOperator) {
    // Functional Forms
    // https://www.w3.org/TR/sparql11-query/#func-forms
    SpecialOperator["BOUND"] = "bound";
    SpecialOperator["IF"] = "if";
    SpecialOperator["COALESCE"] = "coalesce";
    // EXISTENCE = 'existence',
    SpecialOperator["LOGICAL_OR"] = "||";
    SpecialOperator["LOGICAL_AND"] = "&&";
    // EQUAL = '=', // See RegularOperators
    SpecialOperator["SAME_TERM"] = "sameterm";
    SpecialOperator["IN"] = "in";
    SpecialOperator["NOT_IN"] = "notin";
    // Annoying functions
    SpecialOperator["CONCAT"] = "concat";
    // Context dependant functions
    SpecialOperator["NOW"] = "now";
    SpecialOperator["IRI"] = "iri";
    SpecialOperator["URI"] = "uri";
    SpecialOperator["BNODE"] = "BNODE";
})(SpecialOperator = exports.SpecialOperator || (exports.SpecialOperator = {}));
exports.RegularOperators = immutable_1.Set(Object.values(RegularOperator));
exports.SpecialOperators = immutable_1.Set(Object.values(SpecialOperator));
exports.Operators = exports.RegularOperators.union(exports.SpecialOperators);
var SetFunction;
(function (SetFunction) {
    SetFunction["COUNT"] = "count";
    SetFunction["SUM"] = "sum";
    SetFunction["MIN"] = "min";
    SetFunction["MAX"] = "max";
    SetFunction["AVG"] = "avg";
    SetFunction["GROUP_CONCAT"] = "group_concat";
    SetFunction["SAMPLE"] = "sample";
})(SetFunction = exports.SetFunction || (exports.SetFunction = {}));
exports.SetFunctions = immutable_1.Set(Object.values(SetFunction));
exports.NamedOperators = immutable_1.Set([
    TypeURL.XSD_STRING,
    TypeURL.XSD_FLOAT,
    TypeURL.XSD_DOUBLE,
    TypeURL.XSD_DECIMAL,
    TypeURL.XSD_INTEGER,
    TypeURL.XSD_DATE_TIME,
    TypeURL.XSD_DATE,
    TypeURL.XSD_BOOLEAN,
]);
//# sourceMappingURL=Consts.js.map

/***/ }),

/***/ 7731:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoExistenceHook = exports.NoAggregator = exports.UnknownNamedOperator = exports.UnknownOperator = exports.InvalidTermType = exports.InvalidExpressionType = exports.InvalidExpression = exports.InvalidArity = exports.UnimplementedError = exports.UnexpectedError = exports.EmptyAggregateError = exports.IncompatibleLanguageOperation = exports.InvalidTimezoneCall = exports.CastError = exports.InvalidArgumentTypes = exports.InError = exports.CoalesceError = exports.RDFEqualTypeError = exports.EBVCoercionError = exports.UnboundVariableError = exports.InvalidLexicalForm = exports.isExpressionError = exports.ExpressionError = void 0;
/**
 * This class of error will be thrown when an expression errors.
 * Various reasons this could happen are:
 *   - invalid types for the given operator
 *   - unbound variables
 *   - invalid lexical forms
 *   - ...
 *
 * The distinction is made so that one can catch this specific type
 * and handle it accordingly to the SPARQL spec (relevant for e.g. FILTER, EXTEND),
 * while others (programming errors) can be re-thrown.
 *
 * @see isExpressionError
 */
class ExpressionError extends Error {
}
exports.ExpressionError = ExpressionError;
/**
 * Checks whether a given error is an {@link ExpressionError}.
 * Also useful for mocking in tests for covering all branches.
 *
 * @see ExpressionError
 */
function isExpressionError(error) {
    return error instanceof ExpressionError;
}
exports.isExpressionError = isExpressionError;
/**
 * A literal has an invalid lexical form for the datatype it is accompanied by.
 * This error is only thrown when the term is as function argument that requires
 * a valid lexical form.
 */
class InvalidLexicalForm extends ExpressionError {
    constructor(arg) {
        super(`Invalid lexical form '${pp(arg)}'`);
        this.arg = arg;
    }
}
exports.InvalidLexicalForm = InvalidLexicalForm;
/**
 * A variable in the expression was not bound.
 */
class UnboundVariableError extends ExpressionError {
    constructor(variable, bindings) {
        super(`Unbound variable '${pp(variable)}'`);
        this.variable = variable;
        this.bindings = bindings;
    }
}
exports.UnboundVariableError = UnboundVariableError;
/**
 * An invalid term was being coerced to an Effective Boolean Value.
 *
 * See the {@link https://www.w3.org/TR/sparql11-query/#ebv | SPARQL docs}
 * on EBVs.
 */
class EBVCoercionError extends ExpressionError {
    constructor(arg) {
        super(`Cannot coerce term to EBV '${pp(arg)}'`);
        this.arg = arg;
    }
}
exports.EBVCoercionError = EBVCoercionError;
/**
 * An equality test was done on literals with unsupported datatypes.
 *
 * See {@link https://www.w3.org/TR/sparql11-query/#func-RDFterm-equal | term equality spec}.
 */
class RDFEqualTypeError extends ExpressionError {
    constructor(args) {
        super('Equality test for literals with unsupported datatypes');
        this.args = args;
    }
}
exports.RDFEqualTypeError = RDFEqualTypeError;
/**
 * All the expressions in a COALESCE call threw errors.
 */
class CoalesceError extends ExpressionError {
    constructor(errors) {
        super('All COALESCE arguments threw errors');
        this.errors = errors;
    }
}
exports.CoalesceError = CoalesceError;
/**
 * No arguments to an IN call where equal, and at least one threw an error.
 */
class InError extends ExpressionError {
    constructor(errors) {
        super('Some argument to IN errorred and none where equal. ' +
            errors.map((err) => `(${err.toString()}) `).join('and '));
        this.errors = errors;
    }
}
exports.InError = InError;
/**
 * Literals were passed to an operator that doesn't support their datatypes.
 */
class InvalidArgumentTypes extends ExpressionError {
    constructor(args, op) {
        super(`Argument types not valid for operator: '${pp(op)}' with '${pp(args)}`);
        this.args = args;
        this.op = op;
    }
}
exports.InvalidArgumentTypes = InvalidArgumentTypes;
/**
 * An invalid typecast happened.
 */
class CastError extends ExpressionError {
    constructor(arg, cast) {
        super(`Invalid cast: '${pp(arg)}' to '${pp(cast)}'`);
        this.arg = arg;
    }
}
exports.CastError = CastError;
class InvalidTimezoneCall extends ExpressionError {
    constructor(dateString) {
        super(`TIMEZONE call on ${dateString} which has no timezone`);
        this.dateString = dateString;
    }
}
exports.InvalidTimezoneCall = InvalidTimezoneCall;
class IncompatibleLanguageOperation extends ExpressionError {
    constructor(arg1, arg2) {
        super(`Operation on incompatible language literals '${pp(arg1)}' and '${pp(arg2)}'`);
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
}
exports.IncompatibleLanguageOperation = IncompatibleLanguageOperation;
class EmptyAggregateError extends ExpressionError {
    constructor() {
        super('Empty aggregate expression');
    }
}
exports.EmptyAggregateError = EmptyAggregateError;
// Non Expression Errors ------------------------------------------------------
/**
 * An error that arises when we detect a 'should-be-impossible' state.
 * Given that this error is thrown, it clearly wasn't impossible, and some
 * mistake has been made.
 */
class UnexpectedError extends Error {
    constructor(message, payload) {
        super(`Programmer Error '${message}'`);
        this.payload = payload;
    }
}
exports.UnexpectedError = UnexpectedError;
/**
 * An Error that signals a feature or function is yet unimplemented.
 */
class UnimplementedError extends Error {
    constructor(feature) {
        super(`Unimplemented feature '${feature}!'`);
    }
}
exports.UnimplementedError = UnimplementedError;
class InvalidArity extends Error {
    constructor(args, op) {
        super(`The number of args does not match the arity of the operator '${pp(op)}'.`);
        this.args = args;
        this.op = op;
    }
}
exports.InvalidArity = InvalidArity;
class InvalidExpression extends Error {
    constructor(expr) {
        super(`Invalid SPARQL Expression '${pp(expr)}'`);
    }
}
exports.InvalidExpression = InvalidExpression;
class InvalidExpressionType extends Error {
    constructor(expr) {
        super(`Invalid expression type for SPARQL Expression '${pp(expr)}'`);
        this.expr = expr;
    }
}
exports.InvalidExpressionType = InvalidExpressionType;
class InvalidTermType extends Error {
    constructor(term) {
        super(`Invalid term type for term '${pp(term)}'`);
        this.term = term;
    }
}
exports.InvalidTermType = InvalidTermType;
class UnknownOperator extends Error {
    constructor(name) {
        super(`Unknown operator: '${pp(name)}`);
    }
}
exports.UnknownOperator = UnknownOperator;
class UnknownNamedOperator extends Error {
    constructor(name) {
        super(`Unknown named operator: '${pp(name)}'`);
    }
}
exports.UnknownNamedOperator = UnknownNamedOperator;
class NoAggregator extends Error {
    constructor(name) {
        super(`Aggregate expression ${pp(name)} found, but no aggregate hook provided.`);
    }
}
exports.NoAggregator = NoAggregator;
class NoExistenceHook extends Error {
    constructor() {
        super('EXISTS found, but no existence hook provided.');
    }
}
exports.NoExistenceHook = NoExistenceHook;
function pp(o) {
    return JSON.stringify(o);
}
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ 8468:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.order = exports.orderTypes = void 0;
const Transformation_1 = __webpack_require__(7138);
// Determine the relative numerical order of the two given terms.
function orderTypes(litA, litB, isAscending) {
    if (litA && litA.termType === 'Literal' && litB && litB.termType === 'Literal') {
        const a = Transformation_1.transformLiteral(litA);
        const b = Transformation_1.transformLiteral(litB);
        return order(a, b, isAscending);
    }
    else {
        return 0;
    }
}
exports.orderTypes = orderTypes;
// Effective ordering
function order(orderA, orderB, isAscending) {
    if (orderA.typedValue === orderB.typedValue) {
        return 0;
    }
    return orderA.typedValue > orderB.typedValue === isAscending ? 1 : -1;
}
exports.order = order;
//# sourceMappingURL=Ordering.js.map

/***/ }),

/***/ 9286:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// TODO: Find a library for this
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseXSDDateTime = exports.parseXSDInteger = exports.parseXSDDecimal = exports.parseXSDFloat = void 0;
/**
 * TODO: Fix decently
 * Parses float datatypes (double, float).
 *
 * All invalid lexical values return undefined.
 *
 * @param value the string to interpret as a number
 */
function parseXSDFloat(value) {
    const numb = Number(value);
    if (isNaN(numb)) {
        if (value === 'NaN') {
            return NaN;
        }
        if (value === 'INF') {
            return Infinity;
        }
        if (value === '-INF') {
            return -Infinity;
        }
        return undefined;
    }
    return numb;
}
exports.parseXSDFloat = parseXSDFloat;
/**
 * Parses decimal datatypes (decimal, int, byte, nonPositiveInteger, etc...).
 *
 * All other values, including NaN, INF, and floating point numbers all
 * return undefined;
 *
 * @param value the string to interpret as a number
 */
function parseXSDDecimal(value) {
    const numb = Number(value);
    return (isNaN(numb)) ? undefined : numb;
}
exports.parseXSDDecimal = parseXSDDecimal;
/**
 * Parses integer datatypes (decimal, int, byte, nonPositiveInteger, etc...).
 *
 * All other values, including NaN, INF, and floating point numbers all
 * return undefined;
 *
 * @param value the string to interpret as a number
 */
function parseXSDInteger(value) {
    const numb = parseInt(value, 10);
    return (isNaN(numb)) ? undefined : numb;
}
exports.parseXSDInteger = parseXSDInteger;
/**
 * Parses ISO date or date time strings into it's parts.
 * I found no lib providing this functionality online, but it's needed heavily
 * by the spec (functions on dates), using any form of JS DateTime will lose the
 * original timezone notation.
 *
 * Example strings:
 *  - "2011-01-10T14:45:13.815-05:00"
 *  - "2011-01-10T14:45:13.815Z"
 *  - "2011-01-10T14:45:13Z"
 *  - "2011-01-10"
 * @param value the ISO date time string
 */
function parseXSDDateTime(value) {
    const posT = value.indexOf('T');
    const date = posT >= 0 ? value.substr(0, posT) : value;
    const [year, month, day] = date.split('-');
    let hours = '';
    let minutes = '';
    let seconds = '';
    let timezone = '';
    if (posT >= 0) {
        const timeAndTimeZone = value.substr(posT + 1);
        const [time, _timeZoneChopped] = timeAndTimeZone.split(/[\+\-Z]/);
        [hours, minutes, seconds] = time.split(':');
        const timezoneOrNull = new RegExp(/([\+\-Z].*)/).exec(timeAndTimeZone);
        timezone = (timezoneOrNull) ? timezoneOrNull[0] : '';
    }
    else {
        hours = '00';
        minutes = '00';
        seconds = '00';
        timezone = '';
    }
    return { year, month, day, hours, minutes, seconds, timezone };
}
exports.parseXSDDateTime = parseXSDDateTime;
//# sourceMappingURL=Parsing.js.map

/***/ }),

/***/ 1614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NIL": () => /* reexport */ nil,
  "parse": () => /* reexport */ esm_browser_parse,
  "stringify": () => /* reexport */ esm_browser_stringify,
  "v1": () => /* reexport */ esm_browser_v1,
  "v3": () => /* reexport */ esm_browser_v3,
  "v4": () => /* reexport */ esm_browser_v4,
  "v5": () => /* reexport */ esm_browser_v5,
  "validate": () => /* reexport */ esm_browser_validate,
  "version": () => /* reexport */ esm_browser_version
});

// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js
;

function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v1.js
;
 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_browser_stringify(b);
}

/* harmony default export */ const esm_browser_v1 = (v1);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/parse.js
;

function parse(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_browser_parse = (parse);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v35.js
;


function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_browser_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_browser_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/md5.js
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ const esm_browser_md5 = (md5);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v3.js
;

var v3 = v35('v3', 0x30, esm_browser_md5);
/* harmony default export */ const esm_browser_v3 = (v3);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js
;


function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/sha1.js
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ const esm_browser_sha1 = (sha1);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v5.js
;

var v5 = v35('v5', 0x50, esm_browser_sha1);
/* harmony default export */ const esm_browser_v5 = (v5);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/version.js
;

function version(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const esm_browser_version = (version);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/index.js










/***/ }),

/***/ 9602:
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ 4411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(9602)(Yallist)
} catch (er) {}


/***/ }),

/***/ 3938:
/***/ (() => {



/***/ }),

/***/ 7400:
/***/ ((module) => {

"use strict";
module.exports = require("asynciterator");;

/***/ }),

/***/ 3623:
/***/ ((module) => {

"use strict";
module.exports = require("rdf-data-factory");;

/***/ }),

/***/ 6609:
/***/ ((module) => {

"use strict";
module.exports = require("sparqlalgebrajs");;

/***/ }),

/***/ 5585:
/***/ ((module) => {

"use strict";
module.exports = require("sparqljs");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(6010);
/******/ })()
;