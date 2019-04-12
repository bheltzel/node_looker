'use strict';

exports.allHomepageItems = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * sorts (String)
  * homepageSectionId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "content_updated_at" : "aeiou",
  "homepage_section_id" : "aeiou",
  "description" : "aeiou",
  "title" : "aeiou",
  "content_favorite_id" : 123456789,
  "use_custom_image" : true,
  "can" : {
    "key" : true
  },
  "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
  "custom_title" : "aeiou",
  "use_custom_description" : true,
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "custom_url" : "aeiou",
  "order" : 123456789,
  "look_id" : 123456789,
  "image_url" : "aeiou",
  "use_custom_title" : true,
  "content_created_by" : "aeiou",
  "custom_image_data_base64" : "aeiou",
  "url" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "content_metadata_id" : 123456789,
  "use_custom_url" : true,
  "location" : "aeiou",
  "custom_description" : "aeiou",
  "custom_image_url" : "aeiou",
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

exports.allHomepageSections = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * sorts (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "homepage_items" : [ {
    "content_updated_at" : "aeiou",
    "homepage_section_id" : "aeiou",
    "description" : "aeiou",
    "title" : "aeiou",
    "content_favorite_id" : 123456789,
    "use_custom_image" : true,
    "can" : {
      "key" : true
    },
    "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
    "custom_title" : "aeiou",
    "use_custom_description" : true,
    "favorite_count" : 123456789,
    "id" : "aeiou",
    "custom_url" : "aeiou",
    "order" : 123456789,
    "look_id" : 123456789,
    "image_url" : "aeiou",
    "use_custom_title" : true,
    "content_created_by" : "aeiou",
    "custom_image_data_base64" : "aeiou",
    "url" : "aeiou",
    "lookml_dashboard_id" : "aeiou",
    "content_metadata_id" : 123456789,
    "use_custom_url" : true,
    "location" : "aeiou",
    "custom_description" : "aeiou",
    "custom_image_url" : "aeiou",
    "view_count" : 123456789,
    "dashboard_id" : 123456789
  } ],
  "detail_url" : "aeiou",
  "can" : {
    "key" : true
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "homepage_id" : 123456789,
  "id" : "aeiou",
  "title" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "is_header" : true,
  "item_order" : [ 123456789 ]
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createHomepageItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (HomepageItem)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "content_updated_at" : "aeiou",
  "homepage_section_id" : "aeiou",
  "description" : "aeiou",
  "title" : "aeiou",
  "content_favorite_id" : 123456789,
  "use_custom_image" : true,
  "can" : {
    "key" : true
  },
  "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
  "custom_title" : "aeiou",
  "use_custom_description" : true,
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "custom_url" : "aeiou",
  "order" : 123456789,
  "look_id" : 123456789,
  "image_url" : "aeiou",
  "use_custom_title" : true,
  "content_created_by" : "aeiou",
  "custom_image_data_base64" : "aeiou",
  "url" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "content_metadata_id" : 123456789,
  "use_custom_url" : true,
  "location" : "aeiou",
  "custom_description" : "aeiou",
  "custom_image_url" : "aeiou",
  "view_count" : 123456789,
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

exports.createHomepageSection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (HomepageSection)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "homepage_items" : [ {
    "content_updated_at" : "aeiou",
    "homepage_section_id" : "aeiou",
    "description" : "aeiou",
    "title" : "aeiou",
    "content_favorite_id" : 123456789,
    "use_custom_image" : true,
    "can" : {
      "key" : true
    },
    "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
    "custom_title" : "aeiou",
    "use_custom_description" : true,
    "favorite_count" : 123456789,
    "id" : "aeiou",
    "custom_url" : "aeiou",
    "order" : 123456789,
    "look_id" : 123456789,
    "image_url" : "aeiou",
    "use_custom_title" : true,
    "content_created_by" : "aeiou",
    "custom_image_data_base64" : "aeiou",
    "url" : "aeiou",
    "lookml_dashboard_id" : "aeiou",
    "content_metadata_id" : 123456789,
    "use_custom_url" : true,
    "location" : "aeiou",
    "custom_description" : "aeiou",
    "custom_image_url" : "aeiou",
    "view_count" : 123456789,
    "dashboard_id" : 123456789
  } ],
  "detail_url" : "aeiou",
  "can" : {
    "key" : true
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "homepage_id" : 123456789,
  "id" : "aeiou",
  "title" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "is_header" : true,
  "item_order" : [ 123456789 ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteHomepageItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * homepageItemId (Long)
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

exports.deleteHomepageSection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * homepageSectionId (Long)
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

exports.homepageItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * homepageItemId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "content_updated_at" : "aeiou",
  "homepage_section_id" : "aeiou",
  "description" : "aeiou",
  "title" : "aeiou",
  "content_favorite_id" : 123456789,
  "use_custom_image" : true,
  "can" : {
    "key" : true
  },
  "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
  "custom_title" : "aeiou",
  "use_custom_description" : true,
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "custom_url" : "aeiou",
  "order" : 123456789,
  "look_id" : 123456789,
  "image_url" : "aeiou",
  "use_custom_title" : true,
  "content_created_by" : "aeiou",
  "custom_image_data_base64" : "aeiou",
  "url" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "content_metadata_id" : 123456789,
  "use_custom_url" : true,
  "location" : "aeiou",
  "custom_description" : "aeiou",
  "custom_image_url" : "aeiou",
  "view_count" : 123456789,
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

exports.homepageSection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * homepageSectionId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "homepage_items" : [ {
    "content_updated_at" : "aeiou",
    "homepage_section_id" : "aeiou",
    "description" : "aeiou",
    "title" : "aeiou",
    "content_favorite_id" : 123456789,
    "use_custom_image" : true,
    "can" : {
      "key" : true
    },
    "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
    "custom_title" : "aeiou",
    "use_custom_description" : true,
    "favorite_count" : 123456789,
    "id" : "aeiou",
    "custom_url" : "aeiou",
    "order" : 123456789,
    "look_id" : 123456789,
    "image_url" : "aeiou",
    "use_custom_title" : true,
    "content_created_by" : "aeiou",
    "custom_image_data_base64" : "aeiou",
    "url" : "aeiou",
    "lookml_dashboard_id" : "aeiou",
    "content_metadata_id" : 123456789,
    "use_custom_url" : true,
    "location" : "aeiou",
    "custom_description" : "aeiou",
    "custom_image_url" : "aeiou",
    "view_count" : 123456789,
    "dashboard_id" : 123456789
  } ],
  "detail_url" : "aeiou",
  "can" : {
    "key" : true
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "homepage_id" : 123456789,
  "id" : "aeiou",
  "title" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "is_header" : true,
  "item_order" : [ 123456789 ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateHomepageItem = function(args, res, next) {
  /**
   * parameters expected in the args:
  * homepageItemId (Long)
  * body (HomepageItem)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "content_updated_at" : "aeiou",
  "homepage_section_id" : "aeiou",
  "description" : "aeiou",
  "title" : "aeiou",
  "content_favorite_id" : 123456789,
  "use_custom_image" : true,
  "can" : {
    "key" : true
  },
  "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
  "custom_title" : "aeiou",
  "use_custom_description" : true,
  "favorite_count" : 123456789,
  "id" : "aeiou",
  "custom_url" : "aeiou",
  "order" : 123456789,
  "look_id" : 123456789,
  "image_url" : "aeiou",
  "use_custom_title" : true,
  "content_created_by" : "aeiou",
  "custom_image_data_base64" : "aeiou",
  "url" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "content_metadata_id" : 123456789,
  "use_custom_url" : true,
  "location" : "aeiou",
  "custom_description" : "aeiou",
  "custom_image_url" : "aeiou",
  "view_count" : 123456789,
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

exports.updateHomepageSection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * homepageSectionId (Long)
  * body (HomepageSection)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "homepage_items" : [ {
    "content_updated_at" : "aeiou",
    "homepage_section_id" : "aeiou",
    "description" : "aeiou",
    "title" : "aeiou",
    "content_favorite_id" : 123456789,
    "use_custom_image" : true,
    "can" : {
      "key" : true
    },
    "section_fetch_time" : 1.3579000000000001069366817318950779736042022705078125,
    "custom_title" : "aeiou",
    "use_custom_description" : true,
    "favorite_count" : 123456789,
    "id" : "aeiou",
    "custom_url" : "aeiou",
    "order" : 123456789,
    "look_id" : 123456789,
    "image_url" : "aeiou",
    "use_custom_title" : true,
    "content_created_by" : "aeiou",
    "custom_image_data_base64" : "aeiou",
    "url" : "aeiou",
    "lookml_dashboard_id" : "aeiou",
    "content_metadata_id" : 123456789,
    "use_custom_url" : true,
    "location" : "aeiou",
    "custom_description" : "aeiou",
    "custom_image_url" : "aeiou",
    "view_count" : 123456789,
    "dashboard_id" : 123456789
  } ],
  "detail_url" : "aeiou",
  "can" : {
    "key" : true
  },
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "homepage_id" : 123456789,
  "id" : "aeiou",
  "title" : "aeiou",
  "deleted_at" : "2000-01-23T04:56:07.000+0000",
  "is_header" : true,
  "item_order" : [ 123456789 ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

