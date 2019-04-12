'use strict';

exports.session = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "workspace_id" : "aeiou",
  "can" : {
    "key" : true
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

exports.updateSession = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (ApiSession)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "workspace_id" : "aeiou",
  "can" : {
    "key" : true
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

