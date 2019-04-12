'use strict';

exports.allLookmlModels = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "allowed_db_connection_names" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "unlimited_db_connections" : true,
  "has_content" : true,
  "explores" : [ {
    "can" : {
      "key" : true
    },
    "hidden" : true,
    "group_label" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "label" : "aeiou"
  } ],
  "name" : "aeiou",
  "label" : "aeiou",
  "project_name" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createLookmlModel = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (LookmlModel)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "allowed_db_connection_names" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "unlimited_db_connections" : true,
  "has_content" : true,
  "explores" : [ {
    "can" : {
      "key" : true
    },
    "hidden" : true,
    "group_label" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "label" : "aeiou"
  } ],
  "name" : "aeiou",
  "label" : "aeiou",
  "project_name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteLookmlModel = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookmlModelName (String)
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

exports.lookmlModel = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookmlModelName (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "allowed_db_connection_names" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "unlimited_db_connections" : true,
  "has_content" : true,
  "explores" : [ {
    "can" : {
      "key" : true
    },
    "hidden" : true,
    "group_label" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "label" : "aeiou"
  } ],
  "name" : "aeiou",
  "label" : "aeiou",
  "project_name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.lookmlModelExplore = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookmlModelName (String)
  * exploreName (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "joins" : [ {
    "required_joins" : [ "aeiou" ],
    "outer_only" : true,
    "foreign_key" : "aeiou",
    "type" : "aeiou",
    "sql_table_name" : "aeiou",
    "dependent_fields" : [ "aeiou" ],
    "name" : "aeiou",
    "sql_on" : "aeiou",
    "view_label" : "aeiou",
    "from" : "aeiou",
    "fields" : [ "aeiou" ],
    "relationship" : "aeiou",
    "sql_foreign_key" : "aeiou"
  } ],
  "aliases" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ],
  "hidden" : true,
  "description" : "aeiou",
  "project_name" : "aeiou",
  "can_pivot_in_db" : true,
  "source_file" : "aeiou",
  "connection_name" : "aeiou",
  "index_fields" : [ "aeiou" ],
  "can_subtotal" : true,
  "model_name" : "aeiou",
  "supported_measure_types" : [ {
    "dimension_type" : "aeiou",
    "measure_types" : [ "aeiou" ]
  } ],
  "always_filter" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ],
  "id" : "aeiou",
  "access_filter_fields" : [ "aeiou" ],
  "access_filters" : [ {
    "field" : "aeiou",
    "user_attribute" : "aeiou"
  } ],
  "view_name" : "aeiou",
  "conditionally_filter" : [ {
    "name" : "aeiou",
    "value" : "aeiou"
  } ],
  "supports_cost_estimate" : true,
  "sets" : [ {
    "name" : "aeiou",
    "value" : [ "aeiou" ]
  } ],
  "null_sort_treatment" : "aeiou",
  "label" : "aeiou",
  "has_timezone_support" : true,
  "sql_table_name" : "aeiou",
  "group_label" : "aeiou",
  "name" : "aeiou",
  "files" : [ "aeiou" ],
  "can_save" : true,
  "scopes" : [ "aeiou" ],
  "can_total" : true,
  "can_explain" : true,
  "fields" : {
    "measures" : [ "" ],
    "filters" : [ "" ],
    "parameters" : [ "" ],
    "dimensions" : [ {
      "is_timeframe" : true,
      "enumerations" : [ {
        "label" : "aeiou",
        "value" : "aeiou"
      } ],
      "align" : "aeiou",
      "project_name" : "aeiou",
      "type" : "aeiou",
      "time_interval" : {
        "name" : "aeiou",
        "count" : 123456789
      },
      "requires_refresh_on_sort" : true,
      "view" : "aeiou",
      "user_attribute_filter_types" : [ "aeiou" ],
      "dynamic" : true,
      "is_filter" : true,
      "default_filter_value" : "aeiou",
      "tags" : [ "aeiou" ],
      "has_allowed_values" : true,
      "measure" : true,
      "field_group_variant" : "aeiou",
      "name" : "aeiou",
      "suggest_explore" : "aeiou",
      "hidden" : true,
      "map_layer" : {
        "extents_json_url" : "aeiou",
        "min_zoom_level" : 123456789,
        "name" : "aeiou",
        "property_key" : "aeiou",
        "format" : "aeiou",
        "max_zoom_level" : 123456789,
        "property_label_key" : "aeiou",
        "feature_key" : "aeiou",
        "projection" : "aeiou",
        "url" : "aeiou"
      },
      "lookml_link" : "aeiou",
      "is_fiscal" : true,
      "can_filter" : true,
      "description" : "aeiou",
      "is_numeric" : true,
      "error" : "aeiou",
      "source_file" : "aeiou",
      "sql" : "aeiou",
      "suggestable" : true,
      "fiscal_month_offset" : 123456789,
      "parameter" : true,
      "scope" : "aeiou",
      "view_label" : "aeiou",
      "week_start_day" : "aeiou",
      "fill_style" : "aeiou",
      "label_short" : "aeiou",
      "label" : "aeiou",
      "sortable" : true,
      "field_group_label" : "aeiou",
      "primary_key" : true,
      "suggest_dimension" : "aeiou",
      "source_file_path" : "aeiou",
      "can_time_filter" : true,
      "permanent" : true,
      "value_format" : "aeiou",
      "label_from_parameter" : "aeiou",
      "sql_case" : [ {
        "condition" : "aeiou",
        "value" : "aeiou"
      } ],
      "suggestions" : [ "aeiou" ],
      "category" : "aeiou"
    } ]
  },
  "errors" : [ {
    "error_pos" : "aeiou",
    "details" : "aeiou",
    "message" : "aeiou",
    "field_error" : true
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateLookmlModel = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookmlModelName (String)
  * body (LookmlModel)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "allowed_db_connection_names" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "unlimited_db_connections" : true,
  "has_content" : true,
  "explores" : [ {
    "can" : {
      "key" : true
    },
    "hidden" : true,
    "group_label" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "label" : "aeiou"
  } ],
  "name" : "aeiou",
  "label" : "aeiou",
  "project_name" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

