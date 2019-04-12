'use strict';

exports.allDatagroups = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "model_name" : "aeiou",
  "stale_before" : 123456789,
  "trigger_check_at" : 123456789,
  "name" : "aeiou",
  "triggered_at" : 123456789,
  "created_at" : 123456789,
  "trigger_value" : "aeiou",
  "trigger_error" : "aeiou",
  "id" : 123456789
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.datagroup = function(args, res, next) {
  /**
   * parameters expected in the args:
  * datagroupId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "model_name" : "aeiou",
  "stale_before" : 123456789,
  "trigger_check_at" : 123456789,
  "name" : "aeiou",
  "triggered_at" : 123456789,
  "created_at" : 123456789,
  "trigger_value" : "aeiou",
  "trigger_error" : "aeiou",
  "id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateDatagroup = function(args, res, next) {
  /**
   * parameters expected in the args:
  * datagroupId (String)
  * body (Datagroup)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "model_name" : "aeiou",
  "stale_before" : 123456789,
  "trigger_check_at" : 123456789,
  "name" : "aeiou",
  "triggered_at" : 123456789,
  "created_at" : 123456789,
  "trigger_value" : "aeiou",
  "trigger_error" : "aeiou",
  "id" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

