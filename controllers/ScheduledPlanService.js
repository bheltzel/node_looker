'use strict';

exports.allScheduledPlans = function(args, res, next) {
  /**
   * parameters expected in the args:
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.createScheduledPlan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (ScheduledPlan)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.deleteScheduledPlan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * scheduledPlanId (Long)
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

exports.scheduledPlan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * scheduledPlanId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.scheduledPlanRunOnce = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (ScheduledPlan)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.scheduledPlansForDashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (Long)
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.scheduledPlansForLook = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookId (Long)
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.scheduledPlansForLookmlDashboard = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookmlDashboardId (Long)
  * userId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.scheduledPlansForSpace = function(args, res, next) {
  /**
   * parameters expected in the args:
  * spaceId (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = [ {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
} ];
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

exports.updateScheduledPlan = function(args, res, next) {
  /**
   * parameters expected in the args:
  * scheduledPlanId (Long)
  * body (ScheduledPlan)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "last_run_at" : "2000-01-23T04:56:07.000+0000",
  "next_run_at" : "2000-01-23T04:56:07.000+0000",
  "query_id" : "aeiou",
  "timezone" : "aeiou",
  "created_at" : "2000-01-23T04:56:07.000+0000",
  "title" : "aeiou",
  "enabled" : true,
  "require_change" : true,
  "can" : {
    "key" : true
  },
  "datagroup" : "aeiou",
  "updated_at" : "2000-01-23T04:56:07.000+0000",
  "run_as_recipient" : true,
  "run_once" : true,
  "id" : 123456789,
  "filters_string" : "aeiou",
  "embed" : true,
  "scheduled_plan_destination" : [ {
    "can" : {
      "key" : true
    },
    "apply_vis" : true,
    "address" : "aeiou",
    "scheduled_plan_id" : 123456789,
    "apply_formatting" : true,
    "secret_parameters" : "aeiou",
    "format" : "aeiou",
    "id" : 123456789,
    "type" : "aeiou",
    "message" : "aeiou",
    "looker_recipient" : true,
    "parameters" : "aeiou"
  } ],
  "send_all_results" : true,
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "require_results" : true,
  "crontab" : "aeiou",
  "color_theme" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "require_no_results" : true,
  "include_links" : true,
  "pdf_landscape" : true,
  "long_tables" : true,
  "user_id" : 123456789,
  "name" : "aeiou",
  "user" : {
    "can" : {
      "key" : true
    },
    "avatar_url" : "aeiou",
    "last_name" : "aeiou",
    "id" : 123456789,
    "display_name" : "aeiou",
    "first_name" : "aeiou",
    "url" : "aeiou"
  },
  "dashboard_id" : 123456789,
  "pdf_paper_size" : "aeiou"
};
  
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
  
}

