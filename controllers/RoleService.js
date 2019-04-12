'use strict';

exports.allModelSets = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "models" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allPermissionSets = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "permissions" : [ "aeiou" ],
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allPermissions = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "parent" : "aeiou",
  "can" : {
    "key" : true
  },
  "description" : "aeiou",
  "permission" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allRoles = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * ids (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "permission_set_id" : 123456789,
  "model_set_id" : 123456789,
  "model_set" : {
    "models" : [ "aeiou" ],
    "can" : {
      "key" : true
    },
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
  },
  "can" : {
    "key" : true
  },
  "users_url" : "aeiou",
  "name" : "aeiou",
  "id" : 123456789,
  "url" : "aeiou",
  "permission_set" : {
    "can" : {
      "key" : true
    },
    "permissions" : [ "aeiou" ],
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
  }
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createModelSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (ModelSet)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "models" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createPermissionSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (PermissionSet)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "permissions" : [ "aeiou" ],
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createRole = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Role)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "permission_set_id" : 123456789,
  "model_set_id" : 123456789,
  "model_set" : {
    "models" : [ "aeiou" ],
    "can" : {
      "key" : true
    },
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
  },
  "can" : {
    "key" : true
  },
  "users_url" : "aeiou",
  "name" : "aeiou",
  "id" : 123456789,
  "url" : "aeiou",
  "permission_set" : {
    "can" : {
      "key" : true
    },
    "permissions" : [ "aeiou" ],
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
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

exports.deleteModelSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modelSetId (Long)
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

exports.deletePermissionSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * permissionSetId (Long)
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

exports.deleteRole = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
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

exports.modelSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modelSetId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "models" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.permissionSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * permissionSetId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "permissions" : [ "aeiou" ],
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.role = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "permission_set_id" : 123456789,
  "model_set_id" : 123456789,
  "model_set" : {
    "models" : [ "aeiou" ],
    "can" : {
      "key" : true
    },
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
  },
  "can" : {
    "key" : true
  },
  "users_url" : "aeiou",
  "name" : "aeiou",
  "id" : 123456789,
  "url" : "aeiou",
  "permission_set" : {
    "can" : {
      "key" : true
    },
    "permissions" : [ "aeiou" ],
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
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

exports.roleGroups = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "can_add_to_content_metadata" : true,
  "user_count" : 123456789,
  "include_by_default" : true,
  "externally_managed" : true,
  "name" : "aeiou",
  "external_group_id" : "aeiou",
  "contains_current_user" : true,
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

exports.roleUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
  * fields (String)
  * directAssociationOnly (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "credentials_email" : {
    "can" : {
      "key" : true
    },
    "password_reset_url" : "aeiou",
    "is_disabled" : true,
    "user_url" : "aeiou",
    "created_at" : "aeiou",
    "type" : "aeiou",
    "forced_password_reset_at_next_login" : true,
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "embed_group_space_id" : 123456789,
  "locale" : "aeiou",
  "credentials_embed" : [ {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "external_group_id" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "url" : "aeiou",
    "external_user_id" : "aeiou"
  } ],
  "role_ids" : [ 123456789 ],
  "can" : {
    "key" : true
  },
  "credentials_google" : {
    "can" : {
      "key" : true
    },
    "google_user_id" : "aeiou",
    "domain" : "aeiou",
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "credentials_ldap" : {
    "can" : {
      "key" : true
    },
    "ldap_dn" : "aeiou",
    "ldap_id" : "aeiou",
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "group_ids" : [ 123456789 ],
  "ui_state" : {
    "key" : "aeiou"
  },
  "id" : 123456789,
  "credentials_oidc" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "oidc_user_id" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "first_name" : "aeiou",
  "home_space_id" : "aeiou",
  "email" : "aeiou",
  "access_filters" : [ {
    "can" : {
      "key" : true
    },
    "field" : "aeiou",
    "model" : "aeiou",
    "id" : 123456789,
    "value" : "aeiou",
    "url" : "aeiou"
  } ],
  "sessions" : [ {
    "country" : "aeiou",
    "sudo_user_id" : 123456789,
    "city" : "aeiou",
    "extended_at" : "aeiou",
    "created_at" : "aeiou",
    "ip_address" : "aeiou",
    "url" : "aeiou",
    "extended_count" : 123456789,
    "can" : {
      "key" : true
    },
    "expires_at" : "aeiou",
    "browser" : "aeiou",
    "operating_system" : "aeiou",
    "id" : 123456789,
    "state" : "aeiou",
    "credentials_type" : "aeiou"
  } ],
  "looker_versions" : [ "aeiou" ],
  "credentials_api3" : [ {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "client_id" : "aeiou",
    "url" : "aeiou"
  } ],
  "presumed_looker_employee" : true,
  "is_disabled" : true,
  "models_dir_validated" : true,
  "last_name" : "aeiou",
  "display_name" : "aeiou",
  "url" : "aeiou",
  "credentials_saml" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "saml_user_id" : "aeiou",
    "url" : "aeiou"
  },
  "avatar_url" : "aeiou",
  "credentials_api" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou",
    "token" : "aeiou"
  },
  "credentials_looker_openid" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "user_url" : "aeiou",
    "created_at" : "aeiou",
    "logged_in_ip" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "verified_looker_employee" : true,
  "credentials_totp" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "verified" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou"
  },
  "personal_space_id" : 123456789
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.setRoleGroups = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
  * body (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "can_add_to_content_metadata" : true,
  "user_count" : 123456789,
  "include_by_default" : true,
  "externally_managed" : true,
  "name" : "aeiou",
  "external_group_id" : "aeiou",
  "contains_current_user" : true,
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

exports.setRoleUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
  * body (List)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "credentials_email" : {
    "can" : {
      "key" : true
    },
    "password_reset_url" : "aeiou",
    "is_disabled" : true,
    "user_url" : "aeiou",
    "created_at" : "aeiou",
    "type" : "aeiou",
    "forced_password_reset_at_next_login" : true,
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "embed_group_space_id" : 123456789,
  "locale" : "aeiou",
  "credentials_embed" : [ {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "external_group_id" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "url" : "aeiou",
    "external_user_id" : "aeiou"
  } ],
  "role_ids" : [ 123456789 ],
  "can" : {
    "key" : true
  },
  "credentials_google" : {
    "can" : {
      "key" : true
    },
    "google_user_id" : "aeiou",
    "domain" : "aeiou",
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "credentials_ldap" : {
    "can" : {
      "key" : true
    },
    "ldap_dn" : "aeiou",
    "ldap_id" : "aeiou",
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "group_ids" : [ 123456789 ],
  "ui_state" : {
    "key" : "aeiou"
  },
  "id" : 123456789,
  "credentials_oidc" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "oidc_user_id" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "first_name" : "aeiou",
  "home_space_id" : "aeiou",
  "email" : "aeiou",
  "access_filters" : [ {
    "can" : {
      "key" : true
    },
    "field" : "aeiou",
    "model" : "aeiou",
    "id" : 123456789,
    "value" : "aeiou",
    "url" : "aeiou"
  } ],
  "sessions" : [ {
    "country" : "aeiou",
    "sudo_user_id" : 123456789,
    "city" : "aeiou",
    "extended_at" : "aeiou",
    "created_at" : "aeiou",
    "ip_address" : "aeiou",
    "url" : "aeiou",
    "extended_count" : 123456789,
    "can" : {
      "key" : true
    },
    "expires_at" : "aeiou",
    "browser" : "aeiou",
    "operating_system" : "aeiou",
    "id" : 123456789,
    "state" : "aeiou",
    "credentials_type" : "aeiou"
  } ],
  "looker_versions" : [ "aeiou" ],
  "credentials_api3" : [ {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "client_id" : "aeiou",
    "url" : "aeiou"
  } ],
  "presumed_looker_employee" : true,
  "is_disabled" : true,
  "models_dir_validated" : true,
  "last_name" : "aeiou",
  "display_name" : "aeiou",
  "url" : "aeiou",
  "credentials_saml" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "saml_user_id" : "aeiou",
    "url" : "aeiou"
  },
  "avatar_url" : "aeiou",
  "credentials_api" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou",
    "token" : "aeiou"
  },
  "credentials_looker_openid" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "user_url" : "aeiou",
    "created_at" : "aeiou",
    "logged_in_ip" : "aeiou",
    "type" : "aeiou",
    "logged_in_at" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "verified_looker_employee" : true,
  "credentials_totp" : {
    "can" : {
      "key" : true
    },
    "is_disabled" : true,
    "verified" : true,
    "created_at" : "aeiou",
    "type" : "aeiou",
    "url" : "aeiou"
  },
  "personal_space_id" : 123456789
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateModelSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modelSetId (Long)
  * body (ModelSet)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "models" : [ "aeiou" ],
  "can" : {
    "key" : true
  },
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updatePermissionSet = function(args, res, next) {
  /**
   * parameters expected in the args:
  * permissionSetId (Long)
  * body (PermissionSet)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "permissions" : [ "aeiou" ],
  "built_in" : true,
  "name" : "aeiou",
  "all_access" : true,
  "id" : 123456789,
  "url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateRole = function(args, res, next) {
  /**
   * parameters expected in the args:
  * roleId (Long)
  * body (Role)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "permission_set_id" : 123456789,
  "model_set_id" : 123456789,
  "model_set" : {
    "models" : [ "aeiou" ],
    "can" : {
      "key" : true
    },
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
  },
  "can" : {
    "key" : true
  },
  "users_url" : "aeiou",
  "name" : "aeiou",
  "id" : 123456789,
  "url" : "aeiou",
  "permission_set" : {
    "can" : {
      "key" : true
    },
    "permissions" : [ "aeiou" ],
    "built_in" : true,
    "name" : "aeiou",
    "all_access" : true,
    "id" : 123456789,
    "url" : "aeiou"
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

