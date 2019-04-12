'use strict';

exports.allLegacyFeatures = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "has_disabled_on_upgrade" : true,
  "disallowed_as_of_version" : "aeiou",
  "approximate_end_of_life_date" : "2000-01-23T04:56:07.000+0000",
  "description" : "aeiou",
  "enabled_locally" : true,
  "disable_on_upgrade_to_version" : "aeiou",
  "documentation_url" : "aeiou",
  "enabled" : true,
  "can" : {
    "key" : true
  },
  "end_of_life_version" : "aeiou",
  "approximate_disable_date" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
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

exports.allTimezones = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "label" : "aeiou",
  "value" : "aeiou",
  "group" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.backupConfiguration = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "custom_s3_bucket" : "aeiou",
  "custom_s3_key" : "aeiou",
  "type" : "aeiou",
  "custom_s3_secret" : "aeiou",
  "custom_s3_bucket_region" : "aeiou",
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

exports.legacyFeature = function(args, res, next) {
  /**
   * parameters expected in the args:
  * legacyFeatureId (Long)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "has_disabled_on_upgrade" : true,
  "disallowed_as_of_version" : "aeiou",
  "approximate_end_of_life_date" : "2000-01-23T04:56:07.000+0000",
  "description" : "aeiou",
  "enabled_locally" : true,
  "disable_on_upgrade_to_version" : "aeiou",
  "documentation_url" : "aeiou",
  "enabled" : true,
  "can" : {
    "key" : true
  },
  "end_of_life_version" : "aeiou",
  "approximate_disable_date" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
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

exports.updateBackupConfiguration = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (BackupConfiguration)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "custom_s3_bucket" : "aeiou",
  "custom_s3_key" : "aeiou",
  "type" : "aeiou",
  "custom_s3_secret" : "aeiou",
  "custom_s3_bucket_region" : "aeiou",
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

exports.updateLegacyFeature = function(args, res, next) {
  /**
   * parameters expected in the args:
  * legacyFeatureId (Long)
  * body (LegacyFeature)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "has_disabled_on_upgrade" : true,
  "disallowed_as_of_version" : "aeiou",
  "approximate_end_of_life_date" : "2000-01-23T04:56:07.000+0000",
  "description" : "aeiou",
  "enabled_locally" : true,
  "disable_on_upgrade_to_version" : "aeiou",
  "documentation_url" : "aeiou",
  "enabled" : true,
  "can" : {
    "key" : true
  },
  "end_of_life_version" : "aeiou",
  "approximate_disable_date" : "2000-01-23T04:56:07.000+0000",
  "name" : "aeiou",
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

exports.updateWhitelabelConfiguration = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (WhitelabelConfiguration)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "favicon_url" : "aeiou",
  "allow_looker_links" : true,
  "favicon_file" : "aeiou",
  "logo_url" : "aeiou",
  "allow_looker_mentions" : true,
  "show_email_sub_options" : true,
  "logo_file" : "aeiou",
  "default_title" : "aeiou",
  "id" : 123456789,
  "show_docs" : true,
  "show_help_menu" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.versions = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "supported_versions" : [ "" ],
  "current_version" : {
    "full_version" : "aeiou",
    "version" : "aeiou",
    "status" : "aeiou",
    "swagger_url" : "aeiou"
  },
  "looker_release_version" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.whitelabelConfiguration = function(args, res, next) {
  /**
   * parameters expected in the args:
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "can" : {
    "key" : true
  },
  "favicon_url" : "aeiou",
  "allow_looker_links" : true,
  "favicon_file" : "aeiou",
  "logo_url" : "aeiou",
  "allow_looker_mentions" : true,
  "show_email_sub_options" : true,
  "logo_file" : "aeiou",
  "default_title" : "aeiou",
  "id" : 123456789,
  "show_docs" : true,
  "show_help_menu" : true
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

