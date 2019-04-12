'use strict';

exports.allWorkspaces = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "projects" : [ {
    "git_service_name" : "aeiou",
    "is_example" : true,
    "unset_deploy_secret" : true,
    "pull_request_mode" : "aeiou",
    "allow_warnings" : true,
    "git_remote_url" : "aeiou",
    "uses_git" : true,
    "git_password_user_attribute" : "aeiou",
    "can" : {
      "key" : true
    },
    "validation_required" : true,
    "git_password" : "aeiou",
    "name" : "aeiou",
    "id" : "aeiou",
    "git_username_user_attribute" : "aeiou",
    "deploy_secret" : "aeiou",
    "git_username" : "aeiou"
  } ],
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

exports.workspace = function(args, res, next) {
  /**
   * parameters expected in the args:
  * workspaceId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "projects" : [ {
    "git_service_name" : "aeiou",
    "is_example" : true,
    "unset_deploy_secret" : true,
    "pull_request_mode" : "aeiou",
    "allow_warnings" : true,
    "git_remote_url" : "aeiou",
    "uses_git" : true,
    "git_password_user_attribute" : "aeiou",
    "can" : {
      "key" : true
    },
    "validation_required" : true,
    "git_password" : "aeiou",
    "name" : "aeiou",
    "id" : "aeiou",
    "git_username_user_attribute" : "aeiou",
    "deploy_secret" : "aeiou",
    "git_username" : "aeiou"
  } ],
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

