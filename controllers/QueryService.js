'use strict';

exports.createQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Query)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "vis_config" : {
    "key" : "aeiou"
  },
  "filter_expression" : "aeiou",
  "has_table_calculations" : true,
  "row_total" : "aeiou",
  "expanded_share_url" : "aeiou",
  "client_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "view" : "aeiou",
  "total" : true,
  "visible_ui_sections" : "aeiou",
  "dynamic_fields" : [ "aeiou" ],
  "limit" : "aeiou",
  "model" : "aeiou",
  "id" : 123456789,
  "sorts" : [ "aeiou" ],
  "slug" : "aeiou",
  "filter_config" : {
    "key" : "aeiou"
  },
  "subtotals" : [ "aeiou" ],
  "fill_fields" : [ "aeiou" ],
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "filters" : {
    "key" : "aeiou"
  },
  "pivots" : [ "aeiou" ],
  "url" : "aeiou",
  "share_url" : "aeiou",
  "fields" : [ "aeiou" ],
  "column_limit" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createQueryTask = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (CreateQueryTask)
  * limit (Long)
  * applyFormatting (Boolean)
  * applyVis (Boolean)
  * cache (Boolean)
  * imageWidth (Long)
  * imageHeight (Long)
  * generateDrillLinks (Boolean)
  * forceProduction (Boolean)
  * cacheOnly (Boolean)
  * pathPrefix (String)
  * rebuildPdts (Boolean)
  * serverTableCalcs (Boolean)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "cache" : true,
  "look_id" : 123456789,
  "query_id" : 123456789,
  "query" : {
    "query_timezone" : "aeiou",
    "vis_config" : {
      "key" : "aeiou"
    },
    "filter_expression" : "aeiou",
    "has_table_calculations" : true,
    "row_total" : "aeiou",
    "expanded_share_url" : "aeiou",
    "client_id" : "aeiou",
    "can" : {
      "key" : true
    },
    "view" : "aeiou",
    "total" : true,
    "visible_ui_sections" : "aeiou",
    "dynamic_fields" : [ "aeiou" ],
    "limit" : "aeiou",
    "model" : "aeiou",
    "id" : 123456789,
    "sorts" : [ "aeiou" ],
    "slug" : "aeiou",
    "filter_config" : {
      "key" : "aeiou"
    },
    "subtotals" : [ "aeiou" ],
    "fill_fields" : [ "aeiou" ],
    "runtime" : 1.3579000000000001069366817318950779736042022705078125,
    "filters" : {
      "key" : "aeiou"
    },
    "pivots" : [ "aeiou" ],
    "url" : "aeiou",
    "share_url" : "aeiou",
    "fields" : [ "aeiou" ],
    "column_limit" : "aeiou"
  },
  "cache_key" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "result_format" : "aeiou",
  "source" : "aeiou",
  "force_production" : true,
  "path_prefix" : "aeiou",
  "cache_only" : true,
  "can" : {
    "key" : true
  },
  "generate_links" : true,
  "server_table_calcs" : true,
  "id" : "aeiou",
  "rebuild_pdts" : true,
  "result_source" : "aeiou",
  "status" : "aeiou",
  "dashboard_id" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.query = function(args, res, next) {
  /**
   * parameters expected in the args:
  * queryId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "vis_config" : {
    "key" : "aeiou"
  },
  "filter_expression" : "aeiou",
  "has_table_calculations" : true,
  "row_total" : "aeiou",
  "expanded_share_url" : "aeiou",
  "client_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "view" : "aeiou",
  "total" : true,
  "visible_ui_sections" : "aeiou",
  "dynamic_fields" : [ "aeiou" ],
  "limit" : "aeiou",
  "model" : "aeiou",
  "id" : 123456789,
  "sorts" : [ "aeiou" ],
  "slug" : "aeiou",
  "filter_config" : {
    "key" : "aeiou"
  },
  "subtotals" : [ "aeiou" ],
  "fill_fields" : [ "aeiou" ],
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "filters" : {
    "key" : "aeiou"
  },
  "pivots" : [ "aeiou" ],
  "url" : "aeiou",
  "share_url" : "aeiou",
  "fields" : [ "aeiou" ],
  "column_limit" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.queryForSlug = function(args, res, next) {
  /**
   * parameters expected in the args:
  * slug (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "vis_config" : {
    "key" : "aeiou"
  },
  "filter_expression" : "aeiou",
  "has_table_calculations" : true,
  "row_total" : "aeiou",
  "expanded_share_url" : "aeiou",
  "client_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "view" : "aeiou",
  "total" : true,
  "visible_ui_sections" : "aeiou",
  "dynamic_fields" : [ "aeiou" ],
  "limit" : "aeiou",
  "model" : "aeiou",
  "id" : 123456789,
  "sorts" : [ "aeiou" ],
  "slug" : "aeiou",
  "filter_config" : {
    "key" : "aeiou"
  },
  "subtotals" : [ "aeiou" ],
  "fill_fields" : [ "aeiou" ],
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "filters" : {
    "key" : "aeiou"
  },
  "pivots" : [ "aeiou" ],
  "url" : "aeiou",
  "share_url" : "aeiou",
  "fields" : [ "aeiou" ],
  "column_limit" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.queryTask = function(args, res, next) {
  /**
   * parameters expected in the args:
  * queryTaskId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "cache" : true,
  "look_id" : 123456789,
  "query_id" : 123456789,
  "query" : {
    "query_timezone" : "aeiou",
    "vis_config" : {
      "key" : "aeiou"
    },
    "filter_expression" : "aeiou",
    "has_table_calculations" : true,
    "row_total" : "aeiou",
    "expanded_share_url" : "aeiou",
    "client_id" : "aeiou",
    "can" : {
      "key" : true
    },
    "view" : "aeiou",
    "total" : true,
    "visible_ui_sections" : "aeiou",
    "dynamic_fields" : [ "aeiou" ],
    "limit" : "aeiou",
    "model" : "aeiou",
    "id" : 123456789,
    "sorts" : [ "aeiou" ],
    "slug" : "aeiou",
    "filter_config" : {
      "key" : "aeiou"
    },
    "subtotals" : [ "aeiou" ],
    "fill_fields" : [ "aeiou" ],
    "runtime" : 1.3579000000000001069366817318950779736042022705078125,
    "filters" : {
      "key" : "aeiou"
    },
    "pivots" : [ "aeiou" ],
    "url" : "aeiou",
    "share_url" : "aeiou",
    "fields" : [ "aeiou" ],
    "column_limit" : "aeiou"
  },
  "cache_key" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "result_format" : "aeiou",
  "source" : "aeiou",
  "force_production" : true,
  "path_prefix" : "aeiou",
  "cache_only" : true,
  "can" : {
    "key" : true
  },
  "generate_links" : true,
  "server_table_calcs" : true,
  "id" : "aeiou",
  "rebuild_pdts" : true,
  "result_source" : "aeiou",
  "status" : "aeiou",
  "dashboard_id" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.queryTaskMultiResults = function(args, res, next) {
  /**
   * parameters expected in the args:
  * queryTaskIds (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "key" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.queryTaskResults = function(args, res, next) {
  /**
   * parameters expected in the args:
  * queryTaskId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "key" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.runInlineQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * resultFormat (String)
  * body (Query)
  * limit (Long)
  * applyFormatting (Boolean)
  * applyVis (Boolean)
  * cache (Boolean)
  * imageWidth (Long)
  * imageHeight (Long)
  * generateDrillLinks (Boolean)
  * forceProduction (Boolean)
  * cacheOnly (Boolean)
  * pathPrefix (String)
  * rebuildPdts (Boolean)
  * serverTableCalcs (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = "aeiou";
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.runQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * queryId (Long)
  * resultFormat (String)
  * limit (Long)
  * applyFormatting (Boolean)
  * applyVis (Boolean)
  * cache (Boolean)
  * imageWidth (Long)
  * imageHeight (Long)
  * generateDrillLinks (Boolean)
  * forceProduction (Boolean)
  * cacheOnly (Boolean)
  * pathPrefix (String)
  * rebuildPdts (Boolean)
  * serverTableCalcs (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = "aeiou";
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.runUrlEncodedQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modelName (String)
  * viewName (String)
  * resultFormat (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = "aeiou";
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

