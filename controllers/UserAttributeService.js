'use strict';

exports.allUserAttributeGroupValues = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userAttributeId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "group_id" : 123456789,
  "user_attribute_id" : 123456789,
  "value_is_hidden" : true,
  "rank" : 123456789,
  "id" : 123456789,
  "value" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allUserAttributes = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * sorts (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "is_system" : true,
  "can" : {
    "key" : true
  },
  "user_can_view" : true,
  "value_is_hidden" : true,
  "hidden_value_domain_whitelist" : "aeiou",
  "name" : "aeiou",
  "default_value" : "aeiou",
  "id" : 123456789,
  "label" : "aeiou",
  "type" : "aeiou",
  "user_can_edit" : true
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createUserAttribute = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (UserAttribute)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "is_system" : true,
  "can" : {
    "key" : true
  },
  "user_can_view" : true,
  "value_is_hidden" : true,
  "hidden_value_domain_whitelist" : "aeiou",
  "name" : "aeiou",
  "default_value" : "aeiou",
  "id" : 123456789,
  "label" : "aeiou",
  "type" : "aeiou",
  "user_can_edit" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteUserAttribute = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userAttributeId (Long)
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

exports.setUserAttributeGroupValues = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userAttributeId (Long)
  * body (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "group_id" : 123456789,
  "user_attribute_id" : 123456789,
  "value_is_hidden" : true,
  "rank" : 123456789,
  "id" : 123456789,
  "value" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateUserAttribute = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userAttributeId (Long)
  * body (UserAttribute)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "is_system" : true,
  "can" : {
    "key" : true
  },
  "user_can_view" : true,
  "value_is_hidden" : true,
  "hidden_value_domain_whitelist" : "aeiou",
  "name" : "aeiou",
  "default_value" : "aeiou",
  "id" : 123456789,
  "label" : "aeiou",
  "type" : "aeiou",
  "user_can_edit" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userAttribute = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userAttributeId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "is_system" : true,
  "can" : {
    "key" : true
  },
  "user_can_view" : true,
  "value_is_hidden" : true,
  "hidden_value_domain_whitelist" : "aeiou",
  "name" : "aeiou",
  "default_value" : "aeiou",
  "id" : 123456789,
  "label" : "aeiou",
  "type" : "aeiou",
  "user_can_edit" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

