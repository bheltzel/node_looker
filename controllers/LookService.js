'use strict';

exports.allLooks = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "embed_url" : "aeiou",
  "query_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "description" : "aeiou",
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
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "id" : 123456789,
  "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
  "public_slug" : "aeiou",
  "last_updater_id" : 123456789,
  "is_run_on_load" : true,
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
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
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createLook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (LookWithQuery)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "embed_url" : "aeiou",
  "query_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "description" : "aeiou",
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
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteLook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookId (Long)
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

exports.look = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "embed_url" : "aeiou",
  "query_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "description" : "aeiou",
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
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.runLook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookId (Long)
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

exports.searchLooks = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * page (Long)
  * perPage (Long)
  * limit (Long)
  * offset (Long)
  * sorts (String)
  * title (String)
  * description (String)
  * contentFavoriteId (Long)
  * spaceId (String)
  * userId (String)
  * viewCount (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "embed_url" : "aeiou",
  "query_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "description" : "aeiou",
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
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
  "id" : 123456789,
  "last_accessed_at" : "2000-01-23T04:56:07.000+0000",
  "public_slug" : "aeiou",
  "last_updater_id" : 123456789,
  "is_run_on_load" : true,
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
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
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateLook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookId (Long)
  * body (LookWithQuery)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "embed_url" : "aeiou",
  "query_id" : 123456789,
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "deleter_id" : 123456789,
  "description" : "aeiou",
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
  "model" : {
    "id" : "aeiou",
    "label" : "aeiou"
  },
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

