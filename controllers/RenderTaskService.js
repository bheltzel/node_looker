'use strict';

exports.createDashboardRenderTask = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (Long)
  * resultFormat (String)
  * body (CreateDashboardRenderTask)
  * width (Long)
  * height (Long)
  * fields (String)
  * pdfPaperSize (String)
  * pdfLandscape (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "finalized_at" : "aeiou",
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "query_id" : 123456789,
  "created_at" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "result_format" : "aeiou",
  "query_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "status_detail" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "dashboard_style" : "aeiou",
  "user_id" : 123456789,
  "width" : 123456789,
  "id" : "aeiou",
  "render_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "dashboard_id" : 123456789,
  "height" : 123456789,
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

exports.createLookRenderTask = function(args, res, next) {
  /**
   * parameters expected in the args:
  * lookId (Long)
  * resultFormat (String)
  * width (Long)
  * height (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "finalized_at" : "aeiou",
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "query_id" : 123456789,
  "created_at" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "result_format" : "aeiou",
  "query_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "status_detail" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "dashboard_style" : "aeiou",
  "user_id" : 123456789,
  "width" : 123456789,
  "id" : "aeiou",
  "render_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "dashboard_id" : 123456789,
  "height" : 123456789,
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

exports.createLookmlDashboardRenderTask = function(args, res, next) {
  /**
   * parameters expected in the args:
  * dashboardId (String)
  * resultFormat (String)
  * body (CreateDashboardRenderTask)
  * width (Long)
  * height (Long)
  * fields (String)
  * pdfPaperSize (String)
  * pdfLandscape (Boolean)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "finalized_at" : "aeiou",
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "query_id" : 123456789,
  "created_at" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "result_format" : "aeiou",
  "query_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "status_detail" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "dashboard_style" : "aeiou",
  "user_id" : 123456789,
  "width" : 123456789,
  "id" : "aeiou",
  "render_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "dashboard_id" : 123456789,
  "height" : 123456789,
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

exports.createQueryRenderTask = function(args, res, next) {
  /**
   * parameters expected in the args:
  * queryId (Long)
  * resultFormat (String)
  * width (Long)
  * height (Long)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "finalized_at" : "aeiou",
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "query_id" : 123456789,
  "created_at" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "result_format" : "aeiou",
  "query_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "status_detail" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "dashboard_style" : "aeiou",
  "user_id" : 123456789,
  "width" : 123456789,
  "id" : "aeiou",
  "render_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "dashboard_id" : 123456789,
  "height" : 123456789,
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

exports.renderTask = function(args, res, next) {
  /**
   * parameters expected in the args:
  * renderTaskId (String)
  * fields (String)
  **/
  
  
  var examples = {};
  examples['application/json'] = {
  "finalized_at" : "aeiou",
  "dashboard_filters" : "aeiou",
  "look_id" : 123456789,
  "query_id" : 123456789,
  "created_at" : "aeiou",
  "runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "result_format" : "aeiou",
  "query_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "status_detail" : "aeiou",
  "lookml_dashboard_id" : "aeiou",
  "can" : {
    "key" : true
  },
  "dashboard_style" : "aeiou",
  "user_id" : 123456789,
  "width" : 123456789,
  "id" : "aeiou",
  "render_runtime" : 1.3579000000000001069366817318950779736042022705078125,
  "dashboard_id" : 123456789,
  "height" : 123456789,
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

exports.renderTaskResults = function(args, res, next) {
  /**
   * parameters expected in the args:
  * renderTaskId (String)
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

