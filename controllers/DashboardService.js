'use strict';

exports.allDashboards = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "query_timezone" : "aeiou",
  "refresh_interval" : "aeiou",
  "hidden" : true,
  "description" : "aeiou",
  "refresh_interval_to_i" : 123456789,
  "title" : "aeiou",
  "space" : {
    "is_embed" : true,
    "child_count" : 123456789,
    "external_id" : "aeiou",
    "is_users_root" : true,
    "is_root" : true,
    "is_personal" : true,
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "is_embed_users_root" : true,
    "parent_id" : "aeiou",
    "is_shared_root" : true,
    "is_user_root" : true,
    "creator_id" : 123456789,
    "name" : "aeiou",
    "is_embed_shared_root" : true,
    "is_personal_descendant" : true,
    "id" : "aeiou"
  },
  "content_favorite_id" : 123456789,
  "can" : {
    "key" : true
  },
  "content_metadata_id" : 123456789,
  "readonly" : true,
  "user_id" : 123456789,
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "id" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createDashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Dashboard)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "lookml_link_id" : "aeiou",
  "hidden" : true,
  "description" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "tile_text_color" : "aeiou",
  "refresh_interval_to_i" : 123456789,
  "title" : "aeiou",
  "tile_background_color" : "aeiou",
  "space" : {
    "is_embed" : true,
    "child_count" : 123456789,
    "external_id" : "aeiou",
    "is_users_root" : true,
    "is_root" : true,
    "is_personal" : true,
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "is_embed_users_root" : true,
    "parent_id" : "aeiou",
    "is_shared_root" : true,
    "is_user_root" : true,
    "creator_id" : 123456789,
    "name" : "aeiou",
    "is_embed_shared_root" : true,
    "is_personal_descendant" : true,
    "id" : "aeiou"
  },
  "content_favorite_id" : 123456789,
  "can" : {
    "key" : true
  },
  "readonly" : true,
  "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
  "slug" : "aeiou",
  "show_filters_bar" : true,
  "dashboard_filters" : [ {
    "explore" : "aeiou",
    "allow_multiple_values" : true,
    "default_value" : "aeiou",
    "title" : "aeiou",
    "type" : "aeiou",
    "required" : true,
    "can" : {
      "key" : true
    },
    "field" : {
      "key" : "aeiou"
    },
    "name" : "aeiou",
    "model" : "aeiou",
    "id" : "aeiou",
    "row" : 123456789,
    "listens_to_filters" : [ "aeiou" ],
    "dimension" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "refresh_interval" : "aeiou",
  "text_tile_text_color" : "aeiou",
  "title_color" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "content_metadata_id" : 123456789,
  "deleted" : true,
  "load_configuration" : "aeiou",
  "background_color" : "aeiou",
  "user_id" : 123456789,
  "dashboard_elements" : [ {
    "look_id" : "aeiou",
    "refresh_interval" : "aeiou",
    "query_id" : 123456789,
    "body_text" : "aeiou",
    "query" : "",
    "refresh_interval_to_i" : 123456789,
    "title" : "aeiou",
    "type" : "aeiou",
    "look" : {
      "embed_url" : "aeiou",
      "query_id" : 123456789,
      "created_at" : "2000-01-23T04:56:07.000+0000",
      "deleter_id" : 123456789,
      "description" : "aeiou",
      "title" : "aeiou",
      "space" : "",
      "short_url" : "aeiou",
      "public_url" : "aeiou",
      "content_favorite_id" : 123456789,
      "can" : {
        "key" : true
      },
      "excel_file_url" : "aeiou",
      "public" : true,
      "updated_at" : "2000-01-23T04:56:07.000+0000",
      "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
      "favorite_count" : 123456789,
      "model" : "",
      "id" : 123456789,
      "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
      "public_slug" : "aeiou",
      "last_updater_id" : 123456789,
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
      "is_run_on_load" : true,
      "deleted_at" : "2000-01-23T04:56:07.000+0000",
      "url" : "aeiou",
      "content_metadata_id" : 123456789,
      "deleted" : true,
      "user_id" : 123456789,
      "image_embed_url" : "aeiou",
      "google_spreadsheet_formula" : "aeiou",
      "space_id" : "aeiou",
      "user" : {
        "id" : 123456789
      },
      "view_count" : 123456789
    },
    "body_text_as_html" : "aeiou",
    "note_display" : "aeiou",
    "merge_result_id" : "aeiou",
    "subtitle_text" : "aeiou",
    "can" : {
      "key" : true
    },
    "result_maker" : {
      "merge_result_id" : "aeiou",
      "total" : true,
      "vis_config" : "aeiou",
      "query_id" : 123456789,
      "dynamic_fields" : "aeiou",
      "query" : "",
      "filterables" : [ {
        "view" : "aeiou",
        "name" : "aeiou",
        "model" : "aeiou",
        "listen" : [ {
          "field" : "aeiou",
          "dashboard_filter_name" : "aeiou"
        } ]
      } ],
      "id" : 123456789,
      "sorts" : "aeiou"
    },
    "edit_uri" : "aeiou",
    "note_text_as_html" : "aeiou",
    "title_hidden" : true,
    "title_text" : "aeiou",
    "result_maker_id" : 123456789,
    "id" : "aeiou",
    "note_state" : "aeiou",
    "note_text" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "edit_uri" : "aeiou",
  "show_title" : true,
  "dashboard_layouts" : [ {
    "can" : {
      "key" : true
    },
    "deleted" : true,
    "dashboard_title" : "aeiou",
    "width" : 123456789,
    "active" : true,
    "dashboard_layout_components" : [ {
      "can" : {
        "key" : true
      },
      "element_title" : "aeiou",
      "deleted" : true,
      "element_title_hidden" : true,
      "column" : 123456789,
      "width" : 123456789,
      "id" : "aeiou",
      "row" : 123456789,
      "dashboard_element_id" : "aeiou",
      "vis_type" : "aeiou",
      "dashboard_layout_id" : "aeiou",
      "height" : 123456789
    } ],
    "column_width" : 123456789,
    "id" : "aeiou",
    "type" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "space_id" : "aeiou",
  "view_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createDashboardPrefetch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (String)
  * body (PrefetchDashboardRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "dashboard_filters" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "value" : "aeiou"
  } ],
  "can" : {
    "key" : true
  },
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "hit_count" : 123456789,
  "ttl" : 123456789,
  "value" : {
    "key" : "aeiou"
  },
  "result_size_bytes" : 123456789,
  "access_filters" : [ {
    "can" : {
      "key" : true
    },
    "field" : "aeiou",
    "model" : "aeiou",
    "value" : "aeiou"
  } ],
  "computation_time" : 1.3579000000000001069366817318950779736042022705078125,
  "touched_at" : "2000-01-23T04:56:07.000+0000"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.dashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "lookml_link_id" : "aeiou",
  "hidden" : true,
  "description" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "tile_text_color" : "aeiou",
  "refresh_interval_to_i" : 123456789,
  "title" : "aeiou",
  "tile_background_color" : "aeiou",
  "space" : {
    "is_embed" : true,
    "child_count" : 123456789,
    "external_id" : "aeiou",
    "is_users_root" : true,
    "is_root" : true,
    "is_personal" : true,
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "is_embed_users_root" : true,
    "parent_id" : "aeiou",
    "is_shared_root" : true,
    "is_user_root" : true,
    "creator_id" : 123456789,
    "name" : "aeiou",
    "is_embed_shared_root" : true,
    "is_personal_descendant" : true,
    "id" : "aeiou"
  },
  "content_favorite_id" : 123456789,
  "can" : {
    "key" : true
  },
  "readonly" : true,
  "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
  "slug" : "aeiou",
  "show_filters_bar" : true,
  "dashboard_filters" : [ {
    "explore" : "aeiou",
    "allow_multiple_values" : true,
    "default_value" : "aeiou",
    "title" : "aeiou",
    "type" : "aeiou",
    "required" : true,
    "can" : {
      "key" : true
    },
    "field" : {
      "key" : "aeiou"
    },
    "name" : "aeiou",
    "model" : "aeiou",
    "id" : "aeiou",
    "row" : 123456789,
    "listens_to_filters" : [ "aeiou" ],
    "dimension" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "refresh_interval" : "aeiou",
  "text_tile_text_color" : "aeiou",
  "title_color" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "content_metadata_id" : 123456789,
  "deleted" : true,
  "load_configuration" : "aeiou",
  "background_color" : "aeiou",
  "user_id" : 123456789,
  "dashboard_elements" : [ {
    "look_id" : "aeiou",
    "refresh_interval" : "aeiou",
    "query_id" : 123456789,
    "body_text" : "aeiou",
    "query" : "",
    "refresh_interval_to_i" : 123456789,
    "title" : "aeiou",
    "type" : "aeiou",
    "look" : {
      "embed_url" : "aeiou",
      "query_id" : 123456789,
      "created_at" : "2000-01-23T04:56:07.000+0000",
      "deleter_id" : 123456789,
      "description" : "aeiou",
      "title" : "aeiou",
      "space" : "",
      "short_url" : "aeiou",
      "public_url" : "aeiou",
      "content_favorite_id" : 123456789,
      "can" : {
        "key" : true
      },
      "excel_file_url" : "aeiou",
      "public" : true,
      "updated_at" : "2000-01-23T04:56:07.000+0000",
      "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
      "favorite_count" : 123456789,
      "model" : "",
      "id" : 123456789,
      "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
      "public_slug" : "aeiou",
      "last_updater_id" : 123456789,
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
      "is_run_on_load" : true,
      "deleted_at" : "2000-01-23T04:56:07.000+0000",
      "url" : "aeiou",
      "content_metadata_id" : 123456789,
      "deleted" : true,
      "user_id" : 123456789,
      "image_embed_url" : "aeiou",
      "google_spreadsheet_formula" : "aeiou",
      "space_id" : "aeiou",
      "user" : {
        "id" : 123456789
      },
      "view_count" : 123456789
    },
    "body_text_as_html" : "aeiou",
    "note_display" : "aeiou",
    "merge_result_id" : "aeiou",
    "subtitle_text" : "aeiou",
    "can" : {
      "key" : true
    },
    "result_maker" : {
      "merge_result_id" : "aeiou",
      "total" : true,
      "vis_config" : "aeiou",
      "query_id" : 123456789,
      "dynamic_fields" : "aeiou",
      "query" : "",
      "filterables" : [ {
        "view" : "aeiou",
        "name" : "aeiou",
        "model" : "aeiou",
        "listen" : [ {
          "field" : "aeiou",
          "dashboard_filter_name" : "aeiou"
        } ]
      } ],
      "id" : 123456789,
      "sorts" : "aeiou"
    },
    "edit_uri" : "aeiou",
    "note_text_as_html" : "aeiou",
    "title_hidden" : true,
    "title_text" : "aeiou",
    "result_maker_id" : 123456789,
    "id" : "aeiou",
    "note_state" : "aeiou",
    "note_text" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "edit_uri" : "aeiou",
  "show_title" : true,
  "dashboard_layouts" : [ {
    "can" : {
      "key" : true
    },
    "deleted" : true,
    "dashboard_title" : "aeiou",
    "width" : 123456789,
    "active" : true,
    "dashboard_layout_components" : [ {
      "can" : {
        "key" : true
      },
      "element_title" : "aeiou",
      "deleted" : true,
      "element_title_hidden" : true,
      "column" : 123456789,
      "width" : 123456789,
      "id" : "aeiou",
      "row" : 123456789,
      "dashboard_element_id" : "aeiou",
      "vis_type" : "aeiou",
      "dashboard_layout_id" : "aeiou",
      "height" : 123456789
    } ],
    "column_width" : 123456789,
    "id" : "aeiou",
    "type" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "space_id" : "aeiou",
  "view_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.dashboardPrefetch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (String)
  * dashboardFilters (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "hit_count" : 123456789,
  "ttl" : 123456789,
  "value" : {
    "key" : "aeiou"
  },
  "result_size_bytes" : 123456789,
  "computation_time" : 1.3579000000000001069366817318950779736042022705078125,
  "touched_at" : "2000-01-23T04:56:07.000+0000"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteDashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (String)
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

exports.importLookmlDashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookmlDashboardId (String)
  * spaceId (String)
  * body (Dashboard)
  * rawLocale (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "lookml_link_id" : "aeiou",
  "hidden" : true,
  "description" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "tile_text_color" : "aeiou",
  "refresh_interval_to_i" : 123456789,
  "title" : "aeiou",
  "tile_background_color" : "aeiou",
  "space" : {
    "is_embed" : true,
    "child_count" : 123456789,
    "external_id" : "aeiou",
    "is_users_root" : true,
    "is_root" : true,
    "is_personal" : true,
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "is_embed_users_root" : true,
    "parent_id" : "aeiou",
    "is_shared_root" : true,
    "is_user_root" : true,
    "creator_id" : 123456789,
    "name" : "aeiou",
    "is_embed_shared_root" : true,
    "is_personal_descendant" : true,
    "id" : "aeiou"
  },
  "content_favorite_id" : 123456789,
  "can" : {
    "key" : true
  },
  "readonly" : true,
  "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
  "slug" : "aeiou",
  "show_filters_bar" : true,
  "dashboard_filters" : [ {
    "explore" : "aeiou",
    "allow_multiple_values" : true,
    "default_value" : "aeiou",
    "title" : "aeiou",
    "type" : "aeiou",
    "required" : true,
    "can" : {
      "key" : true
    },
    "field" : {
      "key" : "aeiou"
    },
    "name" : "aeiou",
    "model" : "aeiou",
    "id" : "aeiou",
    "row" : 123456789,
    "listens_to_filters" : [ "aeiou" ],
    "dimension" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "refresh_interval" : "aeiou",
  "text_tile_text_color" : "aeiou",
  "title_color" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "content_metadata_id" : 123456789,
  "deleted" : true,
  "load_configuration" : "aeiou",
  "background_color" : "aeiou",
  "user_id" : 123456789,
  "dashboard_elements" : [ {
    "look_id" : "aeiou",
    "refresh_interval" : "aeiou",
    "query_id" : 123456789,
    "body_text" : "aeiou",
    "query" : "",
    "refresh_interval_to_i" : 123456789,
    "title" : "aeiou",
    "type" : "aeiou",
    "look" : {
      "embed_url" : "aeiou",
      "query_id" : 123456789,
      "created_at" : "2000-01-23T04:56:07.000+0000",
      "deleter_id" : 123456789,
      "description" : "aeiou",
      "title" : "aeiou",
      "space" : "",
      "short_url" : "aeiou",
      "public_url" : "aeiou",
      "content_favorite_id" : 123456789,
      "can" : {
        "key" : true
      },
      "excel_file_url" : "aeiou",
      "public" : true,
      "updated_at" : "2000-01-23T04:56:07.000+0000",
      "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
      "favorite_count" : 123456789,
      "model" : "",
      "id" : 123456789,
      "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
      "public_slug" : "aeiou",
      "last_updater_id" : 123456789,
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
      "is_run_on_load" : true,
      "deleted_at" : "2000-01-23T04:56:07.000+0000",
      "url" : "aeiou",
      "content_metadata_id" : 123456789,
      "deleted" : true,
      "user_id" : 123456789,
      "image_embed_url" : "aeiou",
      "google_spreadsheet_formula" : "aeiou",
      "space_id" : "aeiou",
      "user" : {
        "id" : 123456789
      },
      "view_count" : 123456789
    },
    "body_text_as_html" : "aeiou",
    "note_display" : "aeiou",
    "merge_result_id" : "aeiou",
    "subtitle_text" : "aeiou",
    "can" : {
      "key" : true
    },
    "result_maker" : {
      "merge_result_id" : "aeiou",
      "total" : true,
      "vis_config" : "aeiou",
      "query_id" : 123456789,
      "dynamic_fields" : "aeiou",
      "query" : "",
      "filterables" : [ {
        "view" : "aeiou",
        "name" : "aeiou",
        "model" : "aeiou",
        "listen" : [ {
          "field" : "aeiou",
          "dashboard_filter_name" : "aeiou"
        } ]
      } ],
      "id" : 123456789,
      "sorts" : "aeiou"
    },
    "edit_uri" : "aeiou",
    "note_text_as_html" : "aeiou",
    "title_hidden" : true,
    "title_text" : "aeiou",
    "result_maker_id" : 123456789,
    "id" : "aeiou",
    "note_state" : "aeiou",
    "note_text" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "edit_uri" : "aeiou",
  "show_title" : true,
  "dashboard_layouts" : [ {
    "can" : {
      "key" : true
    },
    "deleted" : true,
    "dashboard_title" : "aeiou",
    "width" : 123456789,
    "active" : true,
    "dashboard_layout_components" : [ {
      "can" : {
        "key" : true
      },
      "element_title" : "aeiou",
      "deleted" : true,
      "element_title_hidden" : true,
      "column" : 123456789,
      "width" : 123456789,
      "id" : "aeiou",
      "row" : 123456789,
      "dashboard_element_id" : "aeiou",
      "vis_type" : "aeiou",
      "dashboard_layout_id" : "aeiou",
      "height" : 123456789
    } ],
    "column_width" : 123456789,
    "id" : "aeiou",
    "type" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "space_id" : "aeiou",
  "view_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.searchDashboards = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * id (Long)
  * slug (String)
  * page (Long)
  * perPage (Long)
  * limit (Long)
  * offset (Long)
  * sorts (String)
  * title (String)
  * description (String)
  * contentFavoriteId (Long)
  * spaceId (String)
  * deleted (String)
  * userId (String)
  * viewCount (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "query_timezone" : "aeiou",
  "lookml_link_id" : "aeiou",
  "hidden" : true,
  "description" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "tile_text_color" : "aeiou",
  "refresh_interval_to_i" : 123456789,
  "title" : "aeiou",
  "tile_background_color" : "aeiou",
  "space" : {
    "is_embed" : true,
    "child_count" : 123456789,
    "external_id" : "aeiou",
    "is_users_root" : true,
    "is_root" : true,
    "is_personal" : true,
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "is_embed_users_root" : true,
    "parent_id" : "aeiou",
    "is_shared_root" : true,
    "is_user_root" : true,
    "creator_id" : 123456789,
    "name" : "aeiou",
    "is_embed_shared_root" : true,
    "is_personal_descendant" : true,
    "id" : "aeiou"
  },
  "content_favorite_id" : 123456789,
  "can" : {
    "key" : true
  },
  "readonly" : true,
  "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
  "slug" : "aeiou",
  "show_filters_bar" : true,
  "dashboard_filters" : [ {
    "explore" : "aeiou",
    "allow_multiple_values" : true,
    "default_value" : "aeiou",
    "title" : "aeiou",
    "type" : "aeiou",
    "required" : true,
    "can" : {
      "key" : true
    },
    "field" : {
      "key" : "aeiou"
    },
    "name" : "aeiou",
    "model" : "aeiou",
    "id" : "aeiou",
    "row" : 123456789,
    "listens_to_filters" : [ "aeiou" ],
    "dimension" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "refresh_interval" : "aeiou",
  "text_tile_text_color" : "aeiou",
  "title_color" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "content_metadata_id" : 123456789,
  "deleted" : true,
  "load_configuration" : "aeiou",
  "background_color" : "aeiou",
  "user_id" : 123456789,
  "dashboard_elements" : [ {
    "look_id" : "aeiou",
    "refresh_interval" : "aeiou",
    "query_id" : 123456789,
    "body_text" : "aeiou",
    "query" : "",
    "refresh_interval_to_i" : 123456789,
    "title" : "aeiou",
    "type" : "aeiou",
    "look" : {
      "embed_url" : "aeiou",
      "query_id" : 123456789,
      "created_at" : "2000-01-23T04:56:07.000+0000",
      "deleter_id" : 123456789,
      "description" : "aeiou",
      "title" : "aeiou",
      "space" : "",
      "short_url" : "aeiou",
      "public_url" : "aeiou",
      "content_favorite_id" : 123456789,
      "can" : {
        "key" : true
      },
      "excel_file_url" : "aeiou",
      "public" : true,
      "updated_at" : "2000-01-23T04:56:07.000+0000",
      "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
      "favorite_count" : 123456789,
      "model" : "",
      "id" : 123456789,
      "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
      "public_slug" : "aeiou",
      "last_updater_id" : 123456789,
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
      "is_run_on_load" : true,
      "deleted_at" : "2000-01-23T04:56:07.000+0000",
      "url" : "aeiou",
      "content_metadata_id" : 123456789,
      "deleted" : true,
      "user_id" : 123456789,
      "image_embed_url" : "aeiou",
      "google_spreadsheet_formula" : "aeiou",
      "space_id" : "aeiou",
      "user" : {
        "id" : 123456789
      },
      "view_count" : 123456789
    },
    "body_text_as_html" : "aeiou",
    "note_display" : "aeiou",
    "merge_result_id" : "aeiou",
    "subtitle_text" : "aeiou",
    "can" : {
      "key" : true
    },
    "result_maker" : {
      "merge_result_id" : "aeiou",
      "total" : true,
      "vis_config" : "aeiou",
      "query_id" : 123456789,
      "dynamic_fields" : "aeiou",
      "query" : "",
      "filterables" : [ {
        "view" : "aeiou",
        "name" : "aeiou",
        "model" : "aeiou",
        "listen" : [ {
          "field" : "aeiou",
          "dashboard_filter_name" : "aeiou"
        } ]
      } ],
      "id" : 123456789,
      "sorts" : "aeiou"
    },
    "edit_uri" : "aeiou",
    "note_text_as_html" : "aeiou",
    "title_hidden" : true,
    "title_text" : "aeiou",
    "result_maker_id" : 123456789,
    "id" : "aeiou",
    "note_state" : "aeiou",
    "note_text" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "edit_uri" : "aeiou",
  "show_title" : true,
  "dashboard_layouts" : [ {
    "can" : {
      "key" : true
    },
    "deleted" : true,
    "dashboard_title" : "aeiou",
    "width" : 123456789,
    "active" : true,
    "dashboard_layout_components" : [ {
      "can" : {
        "key" : true
      },
      "element_title" : "aeiou",
      "deleted" : true,
      "element_title_hidden" : true,
      "column" : 123456789,
      "width" : 123456789,
      "id" : "aeiou",
      "row" : 123456789,
      "dashboard_element_id" : "aeiou",
      "vis_type" : "aeiou",
      "dashboard_layout_id" : "aeiou",
      "height" : 123456789
    } ],
    "column_width" : 123456789,
    "id" : "aeiou",
    "type" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "space_id" : "aeiou",
  "view_count" : 123456789
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.syncLookmlDashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookmlDashboardId (String)
  * body (Dashboard)
  * rawLocale (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ 123456789 ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateDashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (String)
  * body (Dashboard)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "query_timezone" : "aeiou",
  "lookml_link_id" : "aeiou",
  "hidden" : true,
  "description" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "tile_text_color" : "aeiou",
  "refresh_interval_to_i" : 123456789,
  "title" : "aeiou",
  "tile_background_color" : "aeiou",
  "space" : {
    "is_embed" : true,
    "child_count" : 123456789,
    "external_id" : "aeiou",
    "is_users_root" : true,
    "is_root" : true,
    "is_personal" : true,
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "is_embed_users_root" : true,
    "parent_id" : "aeiou",
    "is_shared_root" : true,
    "is_user_root" : true,
    "creator_id" : 123456789,
    "name" : "aeiou",
    "is_embed_shared_root" : true,
    "is_personal_descendant" : true,
    "id" : "aeiou"
  },
  "content_favorite_id" : 123456789,
  "can" : {
    "key" : true
  },
  "readonly" : true,
  "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
  "slug" : "aeiou",
  "show_filters_bar" : true,
  "dashboard_filters" : [ {
    "explore" : "aeiou",
    "allow_multiple_values" : true,
    "default_value" : "aeiou",
    "title" : "aeiou",
    "type" : "aeiou",
    "required" : true,
    "can" : {
      "key" : true
    },
    "field" : {
      "key" : "aeiou"
    },
    "name" : "aeiou",
    "model" : "aeiou",
    "id" : "aeiou",
    "row" : 123456789,
    "listens_to_filters" : [ "aeiou" ],
    "dimension" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "refresh_interval" : "aeiou",
  "text_tile_text_color" : "aeiou",
  "title_color" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "content_metadata_id" : 123456789,
  "deleted" : true,
  "load_configuration" : "aeiou",
  "background_color" : "aeiou",
  "user_id" : 123456789,
  "dashboard_elements" : [ {
    "look_id" : "aeiou",
    "refresh_interval" : "aeiou",
    "query_id" : 123456789,
    "body_text" : "aeiou",
    "query" : "",
    "refresh_interval_to_i" : 123456789,
    "title" : "aeiou",
    "type" : "aeiou",
    "look" : {
      "embed_url" : "aeiou",
      "query_id" : 123456789,
      "created_at" : "2000-01-23T04:56:07.000+0000",
      "deleter_id" : 123456789,
      "description" : "aeiou",
      "title" : "aeiou",
      "space" : "",
      "short_url" : "aeiou",
      "public_url" : "aeiou",
      "content_favorite_id" : 123456789,
      "can" : {
        "key" : true
      },
      "excel_file_url" : "aeiou",
      "public" : true,
      "updated_at" : "2000-01-23T04:56:07.000+0000",
      "last_viewed_at" : "2000-01-23T04:56:07.000+0000",
      "favorite_count" : 123456789,
      "model" : "",
      "id" : 123456789,
      "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
      "public_slug" : "aeiou",
      "last_updater_id" : 123456789,
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
      "is_run_on_load" : true,
      "deleted_at" : "2000-01-23T04:56:07.000+0000",
      "url" : "aeiou",
      "content_metadata_id" : 123456789,
      "deleted" : true,
      "user_id" : 123456789,
      "image_embed_url" : "aeiou",
      "google_spreadsheet_formula" : "aeiou",
      "space_id" : "aeiou",
      "user" : {
        "id" : 123456789
      },
      "view_count" : 123456789
    },
    "body_text_as_html" : "aeiou",
    "note_display" : "aeiou",
    "merge_result_id" : "aeiou",
    "subtitle_text" : "aeiou",
    "can" : {
      "key" : true
    },
    "result_maker" : {
      "merge_result_id" : "aeiou",
      "total" : true,
      "vis_config" : "aeiou",
      "query_id" : 123456789,
      "dynamic_fields" : "aeiou",
      "query" : "",
      "filterables" : [ {
        "view" : "aeiou",
        "name" : "aeiou",
        "model" : "aeiou",
        "listen" : [ {
          "field" : "aeiou",
          "dashboard_filter_name" : "aeiou"
        } ]
      } ],
      "id" : 123456789,
      "sorts" : "aeiou"
    },
    "edit_uri" : "aeiou",
    "note_text_as_html" : "aeiou",
    "title_hidden" : true,
    "title_text" : "aeiou",
    "result_maker_id" : 123456789,
    "id" : "aeiou",
    "note_state" : "aeiou",
    "note_text" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "edit_uri" : "aeiou",
  "show_title" : true,
  "dashboard_layouts" : [ {
    "can" : {
      "key" : true
    },
    "deleted" : true,
    "dashboard_title" : "aeiou",
    "width" : 123456789,
    "active" : true,
    "dashboard_layout_components" : [ {
      "can" : {
        "key" : true
      },
      "element_title" : "aeiou",
      "deleted" : true,
      "element_title_hidden" : true,
      "column" : 123456789,
      "width" : 123456789,
      "id" : "aeiou",
      "row" : 123456789,
      "dashboard_element_id" : "aeiou",
      "vis_type" : "aeiou",
      "dashboard_layout_id" : "aeiou",
      "height" : 123456789
    } ],
    "column_width" : 123456789,
    "id" : "aeiou",
    "type" : "aeiou",
    "dashboard_id" : "aeiou"
  } ],
  "space_id" : "aeiou",
  "view_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

