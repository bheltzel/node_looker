'use strict';

exports.allRunningQueries = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "query_task_id" : "aeiou",
  "dialect" : "aeiou",
  "query_id" : "aeiou",
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
  "created_at" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "source" : "aeiou",
  "message" : "aeiou",
  "look" : {
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "id" : 123456789,
    "title" : "aeiou"
  },
  "sql" : "aeiou",
  "connection_name" : "aeiou",
  "completed_at" : "aeiou",
  "can" : {
    "key" : true
  },
  "connection_id" : "aeiou",
  "sql_query" : {
    "can" : {
      "key" : true
    },
    "last_run_at" : "aeiou",
    "creator" : "",
    "last_runtime" : 1.3579000000000001069366817318950779736042022705078125,
    "model_name" : "aeiou",
    "connection" : {
      "can" : {
        "key" : true
      },
      "dialect" : {
        "supports_upload_tables" : true,
        "persistent_table_distkey" : "aeiou",
        "can" : {
          "key" : true
        },
        "supports_cost_estimate" : true,
        "connection_tests" : [ "aeiou" ],
        "name" : "aeiou",
        "persistent_table_indexes" : "aeiou",
        "label" : "aeiou",
        "supports_streaming" : true,
        "persistent_table_sortkeys" : "aeiou",
        "automatically_run_sql_runner_snippets" : true
      },
      "snippets" : [ {
        "can" : {
          "key" : true
        },
        "name" : "aeiou",
        "label" : "aeiou",
        "sql" : "aeiou"
      } ],
      "name" : "aeiou"
    },
    "plaintext" : true,
    "explore_url" : "aeiou",
    "slug" : "aeiou",
    "run_count" : 123456789,
    "browser_limit" : 123456789,
    "sql" : "aeiou"
  },
  "id" : 123456789,
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "slug" : "aeiou",
  "node_id" : "aeiou",
  "status" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.killQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * queryTaskId (String)
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

