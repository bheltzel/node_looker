'use strict';

exports.allContentMetadataAccesss = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentMetadataId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "content_metadata_id" : "aeiou",
  "permission_type" : "aeiou",
  "group_id" : 123456789,
  "user_id" : 123456789,
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

exports.allContentMetadatas = function(args, res, next) {
  /**
   * parameters expected in the args:
  * parentId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "look_id" : 123456789,
  "content_type" : "aeiou",
  "inheriting_id" : 123456789,
  "parent_id" : 123456789,
  "name" : "aeiou",
  "id" : 123456789,
  "space_id" : "aeiou",
  "inherits" : true,
  "slug" : "aeiou",
  "dashboard_id" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contentFavorite = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentFavoriteId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "content_metadata_id" : 123456789,
  "look_id" : 123456789,
  "user_id" : 123456789,
  "id" : 123456789,
  "look" : {
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "id" : 123456789,
    "title" : "aeiou"
  },
  "dashboard" : {
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
  },
  "dashboard_id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.contentMetadata = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentMetadataId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "look_id" : 123456789,
  "content_type" : "aeiou",
  "inheriting_id" : 123456789,
  "parent_id" : 123456789,
  "name" : "aeiou",
  "id" : 123456789,
  "space_id" : "aeiou",
  "inherits" : true,
  "slug" : "aeiou",
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

exports.createContentFavorite = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (ContentFavorite)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "content_metadata_id" : 123456789,
  "look_id" : 123456789,
  "user_id" : 123456789,
  "id" : 123456789,
  "look" : {
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "id" : 123456789,
    "title" : "aeiou"
  },
  "dashboard" : {
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
  },
  "dashboard_id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createContentMetadataAccess = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (ContentMetaGroupUser)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "content_metadata_id" : "aeiou",
  "permission_type" : "aeiou",
  "group_id" : 123456789,
  "user_id" : 123456789,
  "id" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteContentFavorite = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentFavoriteId (Long)
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

exports.deleteContentMetadataAccess = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentMetadataAccessId (Long)
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

exports.searchContentFavorites = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * limit (Long)
  * offset (Long)
  * sorts (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "content_metadata_id" : 123456789,
  "look_id" : 123456789,
  "user_id" : 123456789,
  "id" : 123456789,
  "look" : {
    "can" : {
      "key" : true
    },
    "content_metadata_id" : 123456789,
    "id" : 123456789,
    "title" : "aeiou"
  },
  "dashboard" : {
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
  },
  "dashboard_id" : 123456789
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.searchContentViews = function(args, res, next) {
  /**
   * parameters expected in the args:
  * viewCount (Long)
  * groupId (Long)
  * lookId (String)
  * dashboardId (String)
  * contentMetadataId (Long)
  * startOfWeekDate (String)
  * allTime (Boolean)
  * userId (Long)
  * limit (Long)
  * offset (Long)
  * sorts (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "look_id" : 123456789,
  "content_metadata_id" : 123456789,
  "start_of_week_date" : "aeiou",
  "user_id" : 123456789,
  "group_id" : 123456789,
  "last_viewed_at" : "aeiou",
  "favorite_count" : 123456789,
  "id" : 123456789,
  "view_count" : 123456789,
  "dashboard_id" : 123456789
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateContentMetadata = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentMetadataId (Long)
  * body (ContentMeta)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "look_id" : 123456789,
  "content_type" : "aeiou",
  "inheriting_id" : 123456789,
  "parent_id" : 123456789,
  "name" : "aeiou",
  "id" : 123456789,
  "space_id" : "aeiou",
  "inherits" : true,
  "slug" : "aeiou",
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

exports.updateContentMetadataAccess = function(args, res, next) {
  /**
   * parameters expected in the args:
  * contentMetadataAccessId (Long)
  * body (ContentMetaGroupUser)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "content_metadata_id" : "aeiou",
  "permission_type" : "aeiou",
  "group_id" : 123456789,
  "user_id" : 123456789,
  "id" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

