'use strict';

exports.allConnections = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "query_timezone" : "aeiou",
  "schema" : "aeiou",
  "jdbc_additional_params" : "aeiou",
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
  "certificate" : "aeiou",
  "created_at" : "aeiou",
  "after_connect_statements" : "aeiou",
  "db_timezone" : "aeiou",
  "ssl" : true,
  "example" : true,
  "can" : {
    "key" : true
  },
  "password" : "aeiou",
  "database" : "aeiou",
  "user_db_credentials" : true,
  "last_reap_at" : "aeiou",
  "snippets" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "label" : "aeiou",
    "sql" : "aeiou"
  } ],
  "file_type" : "aeiou",
  "user_attribute_fields" : [ "aeiou" ],
  "host" : "aeiou",
  "last_regen_at" : "aeiou",
  "dialect_name" : "aeiou",
  "max_billing_gigabytes" : "aeiou",
  "max_connections" : 123456789,
  "pool_timeout" : 123456789,
  "sql_runner_precache_tables" : true,
  "verify_ssl" : true,
  "port" : "aeiou",
  "user_id" : "aeiou",
  "name" : "aeiou",
  "tmp_db_name" : "aeiou",
  "maintenance_cron" : "aeiou",
  "username" : "aeiou",
  "pdt_context_override" : {
    "schema" : "aeiou",
    "jdbc_additional_params" : "aeiou",
    "certificate" : "aeiou",
    "after_connect_statements" : "aeiou",
    "can" : {
      "key" : true
    },
    "password" : "aeiou",
    "database" : "aeiou",
    "port" : "aeiou",
    "file_type" : "aeiou",
    "context" : "aeiou",
    "host" : "aeiou",
    "username" : "aeiou",
    "has_password" : true
  }
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allDialectInfos = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "installed" : true,
  "can" : {
    "key" : true
  },
  "default_port" : "aeiou",
  "name" : "aeiou",
  "label_for_database_equivalent" : "aeiou",
  "supported_options" : {
    "schema" : true,
    "can" : {
      "key" : true
    },
    "username_required" : true,
    "auth" : true,
    "timezone" : true,
    "oauth_credentials" : true,
    "host" : true,
    "project_name" : true,
    "ssl" : true,
    "additional_params" : true,
    "tmp_table" : true
  },
  "label" : "aeiou",
  "default_max_connections" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.connection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * connectionName (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "schema" : "aeiou",
  "jdbc_additional_params" : "aeiou",
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
  "certificate" : "aeiou",
  "created_at" : "aeiou",
  "after_connect_statements" : "aeiou",
  "db_timezone" : "aeiou",
  "ssl" : true,
  "example" : true,
  "can" : {
    "key" : true
  },
  "password" : "aeiou",
  "database" : "aeiou",
  "user_db_credentials" : true,
  "last_reap_at" : "aeiou",
  "snippets" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "label" : "aeiou",
    "sql" : "aeiou"
  } ],
  "file_type" : "aeiou",
  "user_attribute_fields" : [ "aeiou" ],
  "host" : "aeiou",
  "last_regen_at" : "aeiou",
  "dialect_name" : "aeiou",
  "max_billing_gigabytes" : "aeiou",
  "max_connections" : 123456789,
  "pool_timeout" : 123456789,
  "sql_runner_precache_tables" : true,
  "verify_ssl" : true,
  "port" : "aeiou",
  "user_id" : "aeiou",
  "name" : "aeiou",
  "tmp_db_name" : "aeiou",
  "maintenance_cron" : "aeiou",
  "username" : "aeiou",
  "pdt_context_override" : {
    "schema" : "aeiou",
    "jdbc_additional_params" : "aeiou",
    "certificate" : "aeiou",
    "after_connect_statements" : "aeiou",
    "can" : {
      "key" : true
    },
    "password" : "aeiou",
    "database" : "aeiou",
    "port" : "aeiou",
    "file_type" : "aeiou",
    "context" : "aeiou",
    "host" : "aeiou",
    "username" : "aeiou",
    "has_password" : true
  }
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createConnection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (DBConnection)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "schema" : "aeiou",
  "jdbc_additional_params" : "aeiou",
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
  "certificate" : "aeiou",
  "created_at" : "aeiou",
  "after_connect_statements" : "aeiou",
  "db_timezone" : "aeiou",
  "ssl" : true,
  "example" : true,
  "can" : {
    "key" : true
  },
  "password" : "aeiou",
  "database" : "aeiou",
  "user_db_credentials" : true,
  "last_reap_at" : "aeiou",
  "snippets" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "label" : "aeiou",
    "sql" : "aeiou"
  } ],
  "file_type" : "aeiou",
  "user_attribute_fields" : [ "aeiou" ],
  "host" : "aeiou",
  "last_regen_at" : "aeiou",
  "dialect_name" : "aeiou",
  "max_billing_gigabytes" : "aeiou",
  "max_connections" : 123456789,
  "pool_timeout" : 123456789,
  "sql_runner_precache_tables" : true,
  "verify_ssl" : true,
  "port" : "aeiou",
  "user_id" : "aeiou",
  "name" : "aeiou",
  "tmp_db_name" : "aeiou",
  "maintenance_cron" : "aeiou",
  "username" : "aeiou",
  "pdt_context_override" : {
    "schema" : "aeiou",
    "jdbc_additional_params" : "aeiou",
    "certificate" : "aeiou",
    "after_connect_statements" : "aeiou",
    "can" : {
      "key" : true
    },
    "password" : "aeiou",
    "database" : "aeiou",
    "port" : "aeiou",
    "file_type" : "aeiou",
    "context" : "aeiou",
    "host" : "aeiou",
    "username" : "aeiou",
    "has_password" : true
  }
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteConnection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * connectionName (String)
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

exports.deleteConnectionOverride = function(args, res, next) {
  /**
   * parameters expected in the args:
  * connectionName (String)
  * overrideContext (String)
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

exports.testConnection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * connectionName (String)
  * tests (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "name" : "aeiou",
  "message" : "aeiou",
  "connection_string" : "aeiou",
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

exports.testConnectionConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (DBConnection)
  * tests (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "name" : "aeiou",
  "message" : "aeiou",
  "connection_string" : "aeiou",
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

exports.updateConnection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * connectionName (String)
  * body (DBConnection)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "schema" : "aeiou",
  "jdbc_additional_params" : "aeiou",
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
  "certificate" : "aeiou",
  "created_at" : "aeiou",
  "after_connect_statements" : "aeiou",
  "db_timezone" : "aeiou",
  "ssl" : true,
  "example" : true,
  "can" : {
    "key" : true
  },
  "password" : "aeiou",
  "database" : "aeiou",
  "user_db_credentials" : true,
  "last_reap_at" : "aeiou",
  "snippets" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "label" : "aeiou",
    "sql" : "aeiou"
  } ],
  "file_type" : "aeiou",
  "user_attribute_fields" : [ "aeiou" ],
  "host" : "aeiou",
  "last_regen_at" : "aeiou",
  "dialect_name" : "aeiou",
  "max_billing_gigabytes" : "aeiou",
  "max_connections" : 123456789,
  "pool_timeout" : 123456789,
  "sql_runner_precache_tables" : true,
  "verify_ssl" : true,
  "port" : "aeiou",
  "user_id" : "aeiou",
  "name" : "aeiou",
  "tmp_db_name" : "aeiou",
  "maintenance_cron" : "aeiou",
  "username" : "aeiou",
  "pdt_context_override" : {
    "schema" : "aeiou",
    "jdbc_additional_params" : "aeiou",
    "certificate" : "aeiou",
    "after_connect_statements" : "aeiou",
    "can" : {
      "key" : true
    },
    "password" : "aeiou",
    "database" : "aeiou",
    "port" : "aeiou",
    "file_type" : "aeiou",
    "context" : "aeiou",
    "host" : "aeiou",
    "username" : "aeiou",
    "has_password" : true
  }
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

