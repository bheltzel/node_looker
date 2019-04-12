'use strict';

exports.addGroupGroup = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * body (GroupIdForGroupInclusion)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.addGroupUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * body (GroupIdForGroupUserInclusion)
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

exports.allGroupGroups = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
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

exports.allGroupUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * fields (String)
  * page (Long)
  * perPage (Long)
  * sorts (String)
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

exports.allGroups = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * page (Long)
  * perPage (Long)
  * sorts (String)
  * ids (List)
  * contentMetadataId (Long)
  * canAddToContentMetadata (Boolean)
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

exports.createGroup = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Group)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteGroup = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
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

exports.deleteGroupFromGroup = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * deletingGroupId (Long)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.deleteGroupUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * userId (Long)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.deleteUserAttributeGroupValue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * userAttributeId (Long)
  **/
  // no response value expected for this operation
  
  
  res.end();
}

exports.group = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateGroup = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * body (Group)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
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
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateUserAttributeGroupValue = function(args, res, next) {
  /**
   * parameters expected in the args:
  * groupId (Long)
  * userAttributeId (Long)
  * body (UserAttributeGroupValue)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "group_id" : 123456789,
  "user_attribute_id" : 123456789,
  "value_is_hidden" : true,
  "rank" : 123456789,
  "id" : 123456789,
  "value" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

