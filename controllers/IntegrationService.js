'use strict';

exports.acceptIntegrationHubLegalAgreement = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationHubId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "has_authorization_token" : true,
  "authorization_token" : "aeiou",
  "legal_agreement_text" : "aeiou",
  "official" : true,
  "id" : 123456789,
  "label" : "aeiou",
  "legal_agreement_signed" : true,
  "url" : "aeiou",
  "fetch_error_message" : "aeiou",
  "legal_agreement_required" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allIntegrationHubs = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "can" : {
    "key" : true
  },
  "has_authorization_token" : true,
  "authorization_token" : "aeiou",
  "legal_agreement_text" : "aeiou",
  "official" : true,
  "id" : 123456789,
  "label" : "aeiou",
  "legal_agreement_signed" : true,
  "url" : "aeiou",
  "fetch_error_message" : "aeiou",
  "legal_agreement_required" : true
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.allIntegrations = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  * integrationHubId (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "icon_url" : "aeiou",
  "supported_download_settings" : [ "aeiou" ],
  "supported_formats" : [ "aeiou" ],
  "integration_hub_id" : 123456789,
  "supported_action_types" : [ "aeiou" ],
  "description" : "aeiou",
  "supported_visualization_formattings" : [ "aeiou" ],
  "label" : "aeiou",
  "params" : [ {
    "user_attribute_name" : "aeiou",
    "name" : "aeiou",
    "has_value" : true,
    "description" : "aeiou",
    "label" : "aeiou",
    "sensitive" : true,
    "value" : "aeiou",
    "required" : true,
    "per_user" : true
  } ],
  "enabled" : true,
  "required_fields" : [ {
    "any_tag" : [ "aeiou" ],
    "all_tags" : [ "aeiou" ],
    "tag" : "aeiou"
  } ],
  "can" : {
    "key" : true
  },
  "id" : "aeiou",
  "uses_oauth" : true,
  "supported_formattings" : [ "aeiou" ]
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createIntegrationHub = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (IntegrationHub)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "has_authorization_token" : true,
  "authorization_token" : "aeiou",
  "legal_agreement_text" : "aeiou",
  "official" : true,
  "id" : 123456789,
  "label" : "aeiou",
  "legal_agreement_signed" : true,
  "url" : "aeiou",
  "fetch_error_message" : "aeiou",
  "legal_agreement_required" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteIntegrationHub = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationHubId (Long)
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

exports.fetchIntegrationForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "state" : {
    "data" : "aeiou",
    "refresh_time" : 123456789
  },
  "fields" : [ {
    "default" : "aeiou",
    "name" : "aeiou",
    "oauth_url" : "aeiou",
    "options" : [ {
      "name" : "aeiou",
      "label" : "aeiou"
    } ],
    "description" : "aeiou",
    "label" : "aeiou",
    "type" : "aeiou",
    "required" : true
  } ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.integration = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "icon_url" : "aeiou",
  "supported_download_settings" : [ "aeiou" ],
  "supported_formats" : [ "aeiou" ],
  "integration_hub_id" : 123456789,
  "supported_action_types" : [ "aeiou" ],
  "description" : "aeiou",
  "supported_visualization_formattings" : [ "aeiou" ],
  "label" : "aeiou",
  "params" : [ {
    "user_attribute_name" : "aeiou",
    "name" : "aeiou",
    "has_value" : true,
    "description" : "aeiou",
    "label" : "aeiou",
    "sensitive" : true,
    "value" : "aeiou",
    "required" : true,
    "per_user" : true
  } ],
  "enabled" : true,
  "required_fields" : [ {
    "any_tag" : [ "aeiou" ],
    "all_tags" : [ "aeiou" ],
    "tag" : "aeiou"
  } ],
  "can" : {
    "key" : true
  },
  "id" : "aeiou",
  "uses_oauth" : true,
  "supported_formattings" : [ "aeiou" ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.integrationHub = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationHubId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "has_authorization_token" : true,
  "authorization_token" : "aeiou",
  "legal_agreement_text" : "aeiou",
  "official" : true,
  "id" : 123456789,
  "label" : "aeiou",
  "legal_agreement_signed" : true,
  "url" : "aeiou",
  "fetch_error_message" : "aeiou",
  "legal_agreement_required" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.testIntegration = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "success" : true,
  "message" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateIntegration = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationId (Long)
  * body (Integration)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "icon_url" : "aeiou",
  "supported_download_settings" : [ "aeiou" ],
  "supported_formats" : [ "aeiou" ],
  "integration_hub_id" : 123456789,
  "supported_action_types" : [ "aeiou" ],
  "description" : "aeiou",
  "supported_visualization_formattings" : [ "aeiou" ],
  "label" : "aeiou",
  "params" : [ {
    "user_attribute_name" : "aeiou",
    "name" : "aeiou",
    "has_value" : true,
    "description" : "aeiou",
    "label" : "aeiou",
    "sensitive" : true,
    "value" : "aeiou",
    "required" : true,
    "per_user" : true
  } ],
  "enabled" : true,
  "required_fields" : [ {
    "any_tag" : [ "aeiou" ],
    "all_tags" : [ "aeiou" ],
    "tag" : "aeiou"
  } ],
  "can" : {
    "key" : true
  },
  "id" : "aeiou",
  "uses_oauth" : true,
  "supported_formattings" : [ "aeiou" ]
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateIntegrationHub = function(args, res, next) {
  /**
   * parameters expected in the args:
  * integrationHubId (Long)
  * body (IntegrationHub)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "has_authorization_token" : true,
  "authorization_token" : "aeiou",
  "legal_agreement_text" : "aeiou",
  "official" : true,
  "id" : 123456789,
  "label" : "aeiou",
  "legal_agreement_signed" : true,
  "url" : "aeiou",
  "fetch_error_message" : "aeiou",
  "legal_agreement_required" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

