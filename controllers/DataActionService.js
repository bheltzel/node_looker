'use strict';

exports.fetchRemoteDataActionForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Object)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "state" : {
    "data" : "aeiou",
    "refresh_time" : 123456789
  },
  "fields" : [ {
    "default" : "aeiou",
    "name" : "aeiou",
    "oauth_url" : "aeiou",
    "options" : [ {
      "name" : "aeiou",
      "label" : "aeiou"
    } ],
    "description" : "aeiou",
    "label" : "aeiou",
    "type" : "aeiou",
    "required" : true
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

exports.performDataAction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (DataActionRequest)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "webhook_id" : "aeiou",
  "success" : true,
  "refresh_query" : true,
  "validation_errors" : {
    "message" : "aeiou",
    "documentation_url" : "aeiou",
    "errors" : [ {
      "code" : "aeiou",
      "field" : "aeiou",
      "message" : "aeiou",
      "documentation_url" : "aeiou"
    } ]
  },
  "message" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

