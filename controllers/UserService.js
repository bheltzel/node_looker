'use strict';

exports.allUserAccessFilters = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "field" : "aeiou",
  "model" : "aeiou",
  "id" : 123456789,
  "value" : "aeiou",
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

exports.allUserCredentialsApi3s = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "is_disabled" : true,
  "created_at" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "client_id" : "aeiou",
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

exports.allUserCredentialsEmbeds = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
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
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allUserSessions = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
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
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * page (Long)
  * perPage (Long)
  * sorts (String)
  * ids (List)
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

exports.createUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (User)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createUserAccessFilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (AccessFilter)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "field" : "aeiou",
  "model" : "aeiou",
  "id" : 123456789,
  "value" : "aeiou",
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

exports.createUserCredentialsApi = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (CredentialsApi)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "is_disabled" : true,
  "created_at" : "aeiou",
  "type" : "aeiou",
  "url" : "aeiou",
  "token" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createUserCredentialsApi3 = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (CredentialsApi3)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "is_disabled" : true,
  "created_at" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "client_id" : "aeiou",
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

exports.createUserCredentialsEmail = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (CredentialsEmail)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createUserCredentialsEmailPasswordReset = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * expires (Boolean)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createUserCredentialsTotp = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (CredentialsTotp)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "is_disabled" : true,
  "verified" : true,
  "created_at" : "aeiou",
  "type" : "aeiou",
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

exports.deleteUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserAccessFilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * accessFilterId (Long)
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

exports.deleteUserAttributeUserValue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * userAttributeId (Long)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.deleteUserCredentialsApi = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserCredentialsApi3 = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * credentialsApi3Id (Long)
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

exports.deleteUserCredentialsEmail = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserCredentialsEmbed = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * credentialsEmbedId (Long)
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

exports.deleteUserCredentialsGoogle = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserCredentialsLdap = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserCredentialsLookerOpenid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserCredentialsOidc = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserCredentialsSaml = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserCredentialsTotp = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
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

exports.deleteUserSession = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * sessionId (Long)
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

exports.me = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.searchUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * page (Long)
  * perPage (Long)
  * sorts (String)
  * id (Long)
  * firstName (String)
  * lastName (String)
  * verifiedLookerEmployee (Boolean)
  * email (String)
  * isDisabled (Boolean)
  * filterOr (Boolean)
  * contentMetadataId (Long)
  * groupId (Long)
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

exports.searchUsersNames = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pattern (String)
  * fields (String)
  * page (Long)
  * perPage (Long)
  * sorts (String)
  * id (Long)
  * firstName (String)
  * lastName (String)
  * verifiedLookerEmployee (Boolean)
  * email (String)
  * isDisabled (Boolean)
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

exports.setUserAttributeUserValue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * userAttributeId (Long)
  * body (UserAttributeWithValue)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "user_id" : 123456789,
  "value_is_hidden" : true,
  "user_attribute_id" : 123456789,
  "hidden_value_domain_whitelist" : "aeiou",
  "name" : "aeiou",
  "rank" : 123456789,
  "label" : "aeiou",
  "source" : "aeiou",
  "value" : "aeiou",
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

exports.setUserRoles = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (List)
  * fields (String)
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

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (User)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateUserAccessFilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * accessFilterId (Long)
  * body (AccessFilter)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "field" : "aeiou",
  "model" : "aeiou",
  "id" : 123456789,
  "value" : "aeiou",
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

exports.updateUserCredentialsEmail = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * body (CredentialsEmail)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.user = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userAccessFilter = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * accessFilterId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "field" : "aeiou",
  "model" : "aeiou",
  "id" : 123456789,
  "value" : "aeiou",
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

exports.userAttributeUserValues = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  * userAttributeIds (List)
  * allValues (Boolean)
  * includeUnset (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "user_id" : 123456789,
  "value_is_hidden" : true,
  "user_attribute_id" : 123456789,
  "hidden_value_domain_whitelist" : "aeiou",
  "name" : "aeiou",
  "rank" : 123456789,
  "label" : "aeiou",
  "source" : "aeiou",
  "value" : "aeiou",
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

exports.userCredentialsApi = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "is_disabled" : true,
  "created_at" : "aeiou",
  "type" : "aeiou",
  "url" : "aeiou",
  "token" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsApi3 = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * credentialsApi3Id (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "is_disabled" : true,
  "created_at" : "aeiou",
  "id" : 123456789,
  "type" : "aeiou",
  "client_id" : "aeiou",
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

exports.userCredentialsEmail = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsEmbed = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * credentialsEmbedId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsGoogle = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsLdap = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsLookerOpenid = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsOidc = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsSaml = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userCredentialsTotp = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "is_disabled" : true,
  "verified" : true,
  "created_at" : "aeiou",
  "type" : "aeiou",
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

exports.userForCredential = function(args, res, next) {
  /**
   * parameters expected in the args:
  * credentialType (String)
  * credentialId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.userRoles = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  * directAssociationOnly (Boolean)
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

exports.userSession = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * sessionId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

