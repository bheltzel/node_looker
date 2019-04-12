'use strict';

exports.allGitBranches = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "owner_name" : "aeiou",
  "commit_at" : 123456789,
  "is_remote" : true,
  "is_production" : true,
  "personal" : true,
  "remote" : "aeiou",
  "error" : "aeiou",
  "message" : "aeiou",
  "remote_ref" : "aeiou",
  "can" : {
    "key" : true
  },
  "ref" : "aeiou",
  "ahead_count" : 123456789,
  "readonly" : true,
  "remote_name" : "aeiou",
  "name" : "aeiou",
  "is_local" : true,
  "behind_count" : 123456789
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allGitConnectionTests = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * remoteUrl (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "description" : "aeiou",
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

exports.allProjectFiles = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "path" : "aeiou",
  "can" : {
    "key" : true
  },
  "extension" : "aeiou",
  "mime_type" : "aeiou",
  "id" : "aeiou",
  "git_status" : {
    "can" : {
      "key" : true
    },
    "revertable" : true,
    "action" : "aeiou",
    "text" : "aeiou",
    "conflict" : true
  },
  "title" : "aeiou",
  "type" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allProjects = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
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
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createGitBranch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * body (GitBranch)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "owner_name" : "aeiou",
  "commit_at" : 123456789,
  "is_remote" : true,
  "is_production" : true,
  "personal" : true,
  "remote" : "aeiou",
  "error" : "aeiou",
  "message" : "aeiou",
  "remote_ref" : "aeiou",
  "can" : {
    "key" : true
  },
  "ref" : "aeiou",
  "ahead_count" : 123456789,
  "readonly" : true,
  "remote_name" : "aeiou",
  "name" : "aeiou",
  "is_local" : true,
  "behind_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createGitDeployKey = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Project)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteGitBranch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * branchName (String)
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

exports.deployToProduction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
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

exports.findGitBranch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * branchName (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "owner_name" : "aeiou",
  "commit_at" : 123456789,
  "is_remote" : true,
  "is_production" : true,
  "personal" : true,
  "remote" : "aeiou",
  "error" : "aeiou",
  "message" : "aeiou",
  "remote_ref" : "aeiou",
  "can" : {
    "key" : true
  },
  "ref" : "aeiou",
  "ahead_count" : 123456789,
  "readonly" : true,
  "remote_name" : "aeiou",
  "name" : "aeiou",
  "is_local" : true,
  "behind_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.gitBranch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "owner_name" : "aeiou",
  "commit_at" : 123456789,
  "is_remote" : true,
  "is_production" : true,
  "personal" : true,
  "remote" : "aeiou",
  "error" : "aeiou",
  "message" : "aeiou",
  "remote_ref" : "aeiou",
  "can" : {
    "key" : true
  },
  "ref" : "aeiou",
  "ahead_count" : 123456789,
  "readonly" : true,
  "remote_name" : "aeiou",
  "name" : "aeiou",
  "is_local" : true,
  "behind_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.gitDeployKey = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  **/
  
  
  var examples = {};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.manifest = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "imports" : [ {
    "can" : {
      "key" : true
    },
    "ref" : "aeiou",
    "name" : "aeiou",
    "is_remote" : true,
    "url" : "aeiou"
  } ],
  "name" : "aeiou",
  "localization_settings" : {
    "can" : {
      "key" : true
    },
    "default_locale" : "aeiou",
    "localization_level" : "aeiou"
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

exports.project = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.projectFile = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * fileId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "path" : "aeiou",
  "can" : {
    "key" : true
  },
  "extension" : "aeiou",
  "mime_type" : "aeiou",
  "id" : "aeiou",
  "git_status" : {
    "can" : {
      "key" : true
    },
    "revertable" : true,
    "action" : "aeiou",
    "text" : "aeiou",
    "conflict" : true
  },
  "title" : "aeiou",
  "type" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.projectValidationResults = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "stale" : true,
  "project_digest" : "aeiou",
  "models_not_validated" : [ {
    "project_file_id" : "aeiou",
    "name" : "aeiou"
  } ],
  "errors" : [ {
    "severity" : "aeiou",
    "file_path" : "aeiou",
    "code" : "aeiou",
    "help_url" : "aeiou",
    "explore" : "aeiou",
    "kind" : "aeiou",
    "line_number" : 123456789,
    "sanitized_message" : "aeiou",
    "model_id" : "aeiou",
    "message" : "aeiou",
    "params" : {
      "key" : "aeiou"
    },
    "field_name" : "aeiou"
  } ],
  "computation_time" : 1.3579000000000001069366817318950779736042022705078125
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.projectWorkspace = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "workspace_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "project_id" : "aeiou",
  "git_head" : "aeiou",
  "git_branch" : {
    "owner_name" : "aeiou",
    "commit_at" : 123456789,
    "is_remote" : true,
    "is_production" : true,
    "personal" : true,
    "remote" : "aeiou",
    "error" : "aeiou",
    "message" : "aeiou",
    "remote_ref" : "aeiou",
    "can" : {
      "key" : true
    },
    "ref" : "aeiou",
    "ahead_count" : 123456789,
    "readonly" : true,
    "remote_name" : "aeiou",
    "name" : "aeiou",
    "is_local" : true,
    "behind_count" : 123456789
  },
  "lookml_type" : "aeiou",
  "git_status" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.resetProjectToProduction = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
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

exports.resetProjectToRemote = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
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

exports.runGitConnectionTest = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * testId (String)
  * remoteUrl (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "id" : "aeiou",
  "message" : "aeiou",
  "status" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateGitBranch = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * body (GitBranch)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "owner_name" : "aeiou",
  "commit_at" : 123456789,
  "is_remote" : true,
  "is_production" : true,
  "personal" : true,
  "remote" : "aeiou",
  "error" : "aeiou",
  "message" : "aeiou",
  "remote_ref" : "aeiou",
  "can" : {
    "key" : true
  },
  "ref" : "aeiou",
  "ahead_count" : 123456789,
  "readonly" : true,
  "remote_name" : "aeiou",
  "name" : "aeiou",
  "is_local" : true,
  "behind_count" : 123456789
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * body (Project)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.validateProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projectId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "project_digest" : "aeiou",
  "models_not_validated" : [ {
    "project_file_id" : "aeiou",
    "name" : "aeiou"
  } ],
  "errors" : [ {
    "severity" : "aeiou",
    "file_path" : "aeiou",
    "code" : "aeiou",
    "help_url" : "aeiou",
    "explore" : "aeiou",
    "kind" : "aeiou",
    "line_number" : 123456789,
    "sanitized_message" : "aeiou",
    "model_id" : "aeiou",
    "message" : "aeiou",
    "params" : {
      "key" : "aeiou"
    },
    "field_name" : "aeiou"
  } ],
  "computation_time" : 1.3579000000000001069366817318950779736042022705078125
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

