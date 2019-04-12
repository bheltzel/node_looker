'use strict';

exports.createSqlQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (SqlQueryCreate)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "last_run_at" : "aeiou",
  "creator" : {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.sqlQuery = function(args, res, next) {
  /**
   * parameters expected in the args:
  * slug (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "last_run_at" : "aeiou",
  "creator" : {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

