'use strict';

exports.login = function(args, res, next) {
  /**
   * parameters expected in the args:
  * clientId (String)
  * clientSecret (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "access_token" : "aeiou",
  "token_type" : "aeiou",
  "expires_in" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.loginUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "access_token" : "aeiou",
  "token_type" : "aeiou",
  "expires_in" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.logout = function(args, res, next) {
  /**
   * parameters expected in the args:
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

