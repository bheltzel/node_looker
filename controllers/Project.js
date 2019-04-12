'use strict';

var url = require('url');


var Project = require('./ProjectService');


module.exports.allGitBranches = function allGitBranches (req, res, next) {
  Project.allGitBranches(req.swagger.params, res, next);
};

module.exports.allGitConnectionTests = function allGitConnectionTests (req, res, next) {
  Project.allGitConnectionTests(req.swagger.params, res, next);
};

module.exports.allProjectFiles = function allProjectFiles (req, res, next) {
  Project.allProjectFiles(req.swagger.params, res, next);
};

module.exports.allProjects = function allProjects (req, res, next) {
  Project.allProjects(req.swagger.params, res, next);
};

module.exports.createGitBranch = function createGitBranch (req, res, next) {
  Project.createGitBranch(req.swagger.params, res, next);
};

module.exports.createGitDeployKey = function createGitDeployKey (req, res, next) {
  Project.createGitDeployKey(req.swagger.params, res, next);
};

module.exports.createProject = function createProject (req, res, next) {
  Project.createProject(req.swagger.params, res, next);
};

module.exports.deleteGitBranch = function deleteGitBranch (req, res, next) {
  Project.deleteGitBranch(req.swagger.params, res, next);
};

module.exports.deployToProduction = function deployToProduction (req, res, next) {
  Project.deployToProduction(req.swagger.params, res, next);
};

module.exports.findGitBranch = function findGitBranch (req, res, next) {
  Project.findGitBranch(req.swagger.params, res, next);
};

module.exports.gitBranch = function gitBranch (req, res, next) {
  Project.gitBranch(req.swagger.params, res, next);
};

module.exports.gitDeployKey = function gitDeployKey (req, res, next) {
  Project.gitDeployKey(req.swagger.params, res, next);
};

module.exports.manifest = function manifest (req, res, next) {
  Project.manifest(req.swagger.params, res, next);
};

module.exports.project = function project (req, res, next) {
  Project.project(req.swagger.params, res, next);
};

module.exports.projectFile = function projectFile (req, res, next) {
  Project.projectFile(req.swagger.params, res, next);
};

module.exports.projectValidationResults = function projectValidationResults (req, res, next) {
  Project.projectValidationResults(req.swagger.params, res, next);
};

module.exports.projectWorkspace = function projectWorkspace (req, res, next) {
  Project.projectWorkspace(req.swagger.params, res, next);
};

module.exports.resetProjectToProduction = function resetProjectToProduction (req, res, next) {
  Project.resetProjectToProduction(req.swagger.params, res, next);
};

module.exports.resetProjectToRemote = function resetProjectToRemote (req, res, next) {
  Project.resetProjectToRemote(req.swagger.params, res, next);
};

module.exports.runGitConnectionTest = function runGitConnectionTest (req, res, next) {
  Project.runGitConnectionTest(req.swagger.params, res, next);
};

module.exports.updateGitBranch = function updateGitBranch (req, res, next) {
  Project.updateGitBranch(req.swagger.params, res, next);
};

module.exports.updateProject = function updateProject (req, res, next) {
  Project.updateProject(req.swagger.params, res, next);
};

module.exports.validateProject = function validateProject (req, res, next) {
  Project.validateProject(req.swagger.params, res, next);
};
