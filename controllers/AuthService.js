'use strict';

exports.createOidcTestConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (OIDCConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true
  } ],
  "secret" : "aeiou",
  "enabled" : true,
  "issuer" : "aeiou",
  "authorization_endpoint" : "aeiou",
  "groups_with_role_ids" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "role_ids" : [ 123456789 ]
  } ],
  "test_slug" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "modified_at" : "aeiou",
  "user_attribute_map_last_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "token_endpoint" : "aeiou",
  "identifier" : "aeiou",
  "audience" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "required" : true
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "userinfo_endpoint" : "aeiou",
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "scopes" : [ "aeiou" ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createSamlTestConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (SamlConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "idp_issuer" : "aeiou",
  "groups_member_value" : "aeiou",
  "bypass_login_page" : true,
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true,
    "url" : "aeiou"
  } ],
  "enabled" : true,
  "idp_url" : "aeiou",
  "groups_with_role_ids" : [ {
    "name" : "aeiou",
    "role_ids" : [ 123456789 ],
    "url" : "aeiou"
  } ],
  "test_slug" : "aeiou",
  "groups_finder_type" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "user_attribute_map_last_name" : "aeiou",
  "modified_at" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou",
    "url" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "name" : "aeiou",
    "required" : true,
    "url" : "aeiou"
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "idp_audience" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "allowed_clock_drift" : 123456789,
  "idp_cert" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteOidcTestConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * testSlug (String)
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

exports.deleteSamlTestConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * testSlug (String)
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

exports.fetchAndParseSamlIdpMetadata = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "idp_issuer" : "aeiou",
  "idp_cert" : "aeiou",
  "idp_url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.ldapConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user_attribute_map_ldap_id" : "aeiou",
  "test_ldap_password" : "aeiou",
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true,
    "url" : "aeiou"
  } ],
  "has_auth_password" : true,
  "user_id_attribute_names" : "aeiou",
  "enabled" : true,
  "groups_with_role_ids" : [ {
    "name" : "aeiou",
    "role_ids" : [ 123456789 ],
    "url" : "aeiou"
  } ],
  "groups_finder_type" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "auth_username" : "aeiou",
  "set_roles_from_groups" : true,
  "user_bind_base_dn" : "aeiou",
  "modified_at" : "aeiou",
  "user_attribute_map_last_name" : "aeiou",
  "connection_tls_no_verify" : true,
  "user_attribute_map_first_name" : "aeiou",
  "connection_port" : "aeiou",
  "connection_tls" : true,
  "groups_member_attribute" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "auth_password" : "aeiou",
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou",
    "url" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "name" : "aeiou",
    "required" : true,
    "url" : "aeiou"
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "url" : "aeiou",
  "auth_requires_role" : true,
  "groups_user_attribute" : "aeiou",
  "connection_host" : "aeiou",
  "groups_base_dn" : "aeiou",
  "user_objectclass" : "aeiou",
  "groups_objectclasses" : "aeiou",
  "user_attribute_map_email" : "aeiou",
  "merge_new_users_by_email" : true,
  "force_no_page" : true,
  "test_ldap_user" : "aeiou",
  "modified_by" : "aeiou",
  "user_custom_filter" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.oidcConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true
  } ],
  "secret" : "aeiou",
  "enabled" : true,
  "issuer" : "aeiou",
  "authorization_endpoint" : "aeiou",
  "groups_with_role_ids" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "role_ids" : [ 123456789 ]
  } ],
  "test_slug" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "modified_at" : "aeiou",
  "user_attribute_map_last_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "token_endpoint" : "aeiou",
  "identifier" : "aeiou",
  "audience" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "required" : true
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "userinfo_endpoint" : "aeiou",
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "scopes" : [ "aeiou" ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.oidcTestConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * testSlug (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true
  } ],
  "secret" : "aeiou",
  "enabled" : true,
  "issuer" : "aeiou",
  "authorization_endpoint" : "aeiou",
  "groups_with_role_ids" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "role_ids" : [ 123456789 ]
  } ],
  "test_slug" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "modified_at" : "aeiou",
  "user_attribute_map_last_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "token_endpoint" : "aeiou",
  "identifier" : "aeiou",
  "audience" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "required" : true
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "userinfo_endpoint" : "aeiou",
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "scopes" : [ "aeiou" ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.parseSamlIdpMetadata = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "idp_issuer" : "aeiou",
  "idp_cert" : "aeiou",
  "idp_url" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.samlConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "idp_issuer" : "aeiou",
  "groups_member_value" : "aeiou",
  "bypass_login_page" : true,
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true,
    "url" : "aeiou"
  } ],
  "enabled" : true,
  "idp_url" : "aeiou",
  "groups_with_role_ids" : [ {
    "name" : "aeiou",
    "role_ids" : [ 123456789 ],
    "url" : "aeiou"
  } ],
  "test_slug" : "aeiou",
  "groups_finder_type" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "user_attribute_map_last_name" : "aeiou",
  "modified_at" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou",
    "url" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "name" : "aeiou",
    "required" : true,
    "url" : "aeiou"
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "idp_audience" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "allowed_clock_drift" : 123456789,
  "idp_cert" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.samlTestConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * testSlug (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "idp_issuer" : "aeiou",
  "groups_member_value" : "aeiou",
  "bypass_login_page" : true,
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true,
    "url" : "aeiou"
  } ],
  "enabled" : true,
  "idp_url" : "aeiou",
  "groups_with_role_ids" : [ {
    "name" : "aeiou",
    "role_ids" : [ 123456789 ],
    "url" : "aeiou"
  } ],
  "test_slug" : "aeiou",
  "groups_finder_type" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "user_attribute_map_last_name" : "aeiou",
  "modified_at" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou",
    "url" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "name" : "aeiou",
    "required" : true,
    "url" : "aeiou"
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "idp_audience" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "allowed_clock_drift" : 123456789,
  "idp_cert" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.testLdapConfigAuth = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (LDAPConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "trace" : "aeiou",
  "details" : "aeiou",
  "message" : "aeiou",
  "issues" : [ {
    "severity" : "aeiou",
    "can" : {
      "key" : true
    },
    "message" : "aeiou"
  } ],
  "user" : {
    "can" : {
      "key" : true
    },
    "ldap_dn" : "aeiou",
    "ldap_id" : "aeiou",
    "roles" : [ "aeiou" ],
    "groups" : [ "aeiou" ],
    "last_name" : "aeiou",
    "attributes" : {
      "key" : "aeiou"
    },
    "all_emails" : [ "aeiou" ],
    "first_name" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "url" : "aeiou",
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

exports.testLdapConfigConnection = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (LDAPConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "trace" : "aeiou",
  "details" : "aeiou",
  "message" : "aeiou",
  "issues" : [ {
    "severity" : "aeiou",
    "can" : {
      "key" : true
    },
    "message" : "aeiou"
  } ],
  "user" : {
    "can" : {
      "key" : true
    },
    "ldap_dn" : "aeiou",
    "ldap_id" : "aeiou",
    "roles" : [ "aeiou" ],
    "groups" : [ "aeiou" ],
    "last_name" : "aeiou",
    "attributes" : {
      "key" : "aeiou"
    },
    "all_emails" : [ "aeiou" ],
    "first_name" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "url" : "aeiou",
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

exports.testLdapConfigUserAuth = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (LDAPConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "trace" : "aeiou",
  "details" : "aeiou",
  "message" : "aeiou",
  "issues" : [ {
    "severity" : "aeiou",
    "can" : {
      "key" : true
    },
    "message" : "aeiou"
  } ],
  "user" : {
    "can" : {
      "key" : true
    },
    "ldap_dn" : "aeiou",
    "ldap_id" : "aeiou",
    "roles" : [ "aeiou" ],
    "groups" : [ "aeiou" ],
    "last_name" : "aeiou",
    "attributes" : {
      "key" : "aeiou"
    },
    "all_emails" : [ "aeiou" ],
    "first_name" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "url" : "aeiou",
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

exports.testLdapConfigUserInfo = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (LDAPConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "trace" : "aeiou",
  "details" : "aeiou",
  "message" : "aeiou",
  "issues" : [ {
    "severity" : "aeiou",
    "can" : {
      "key" : true
    },
    "message" : "aeiou"
  } ],
  "user" : {
    "can" : {
      "key" : true
    },
    "ldap_dn" : "aeiou",
    "ldap_id" : "aeiou",
    "roles" : [ "aeiou" ],
    "groups" : [ "aeiou" ],
    "last_name" : "aeiou",
    "attributes" : {
      "key" : "aeiou"
    },
    "all_emails" : [ "aeiou" ],
    "first_name" : "aeiou",
    "email" : "aeiou",
    "url" : "aeiou"
  },
  "url" : "aeiou",
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

exports.updateLdapConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (LDAPConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "user_attribute_map_ldap_id" : "aeiou",
  "test_ldap_password" : "aeiou",
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true,
    "url" : "aeiou"
  } ],
  "has_auth_password" : true,
  "user_id_attribute_names" : "aeiou",
  "enabled" : true,
  "groups_with_role_ids" : [ {
    "name" : "aeiou",
    "role_ids" : [ 123456789 ],
    "url" : "aeiou"
  } ],
  "groups_finder_type" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "auth_username" : "aeiou",
  "set_roles_from_groups" : true,
  "user_bind_base_dn" : "aeiou",
  "modified_at" : "aeiou",
  "user_attribute_map_last_name" : "aeiou",
  "connection_tls_no_verify" : true,
  "user_attribute_map_first_name" : "aeiou",
  "connection_port" : "aeiou",
  "connection_tls" : true,
  "groups_member_attribute" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "auth_password" : "aeiou",
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou",
    "url" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "name" : "aeiou",
    "required" : true,
    "url" : "aeiou"
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "url" : "aeiou",
  "auth_requires_role" : true,
  "groups_user_attribute" : "aeiou",
  "connection_host" : "aeiou",
  "groups_base_dn" : "aeiou",
  "user_objectclass" : "aeiou",
  "groups_objectclasses" : "aeiou",
  "user_attribute_map_email" : "aeiou",
  "merge_new_users_by_email" : true,
  "force_no_page" : true,
  "test_ldap_user" : "aeiou",
  "modified_by" : "aeiou",
  "user_custom_filter" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateOidcConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (OIDCConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true
  } ],
  "secret" : "aeiou",
  "enabled" : true,
  "issuer" : "aeiou",
  "authorization_endpoint" : "aeiou",
  "groups_with_role_ids" : [ {
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "role_ids" : [ 123456789 ]
  } ],
  "test_slug" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "modified_at" : "aeiou",
  "user_attribute_map_last_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "token_endpoint" : "aeiou",
  "identifier" : "aeiou",
  "audience" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "can" : {
      "key" : true
    },
    "name" : "aeiou",
    "required" : true
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "userinfo_endpoint" : "aeiou",
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "scopes" : [ "aeiou" ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateSamlConfig = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (SamlConfig)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "idp_issuer" : "aeiou",
  "groups_member_value" : "aeiou",
  "bypass_login_page" : true,
  "alternate_email_login_allowed" : true,
  "default_new_user_group_ids" : [ 123456789 ],
  "user_attributes" : [ {
    "name" : "aeiou",
    "user_attributes" : [ {
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
    } ],
    "required" : true,
    "url" : "aeiou"
  } ],
  "enabled" : true,
  "idp_url" : "aeiou",
  "groups_with_role_ids" : [ {
    "name" : "aeiou",
    "role_ids" : [ 123456789 ],
    "url" : "aeiou"
  } ],
  "test_slug" : "aeiou",
  "groups_finder_type" : "aeiou",
  "can" : {
    "key" : true
  },
  "default_new_user_groups" : [ {
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
  } ],
  "set_roles_from_groups" : true,
  "user_attribute_map_last_name" : "aeiou",
  "modified_at" : "aeiou",
  "user_attribute_map_first_name" : "aeiou",
  "groups_attribute" : "aeiou",
  "default_new_user_roles" : [ {
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
  } ],
  "groups" : [ {
    "roles" : [ "" ],
    "name" : "aeiou",
    "url" : "aeiou"
  } ],
  "user_attributes_with_ids" : [ {
    "user_attribute_ids" : [ 123456789 ],
    "name" : "aeiou",
    "required" : true,
    "url" : "aeiou"
  } ],
  "default_new_user_role_ids" : [ 123456789 ],
  "new_user_migration_types" : "aeiou",
  "idp_audience" : "aeiou",
  "url" : "aeiou",
  "auth_requires_role" : true,
  "user_attribute_map_email" : "aeiou",
  "modified_by" : "aeiou",
  "allowed_clock_drift" : 123456789,
  "idp_cert" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

