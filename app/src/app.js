'use strict';

// Declare app level module which depends on views, and components
angular.module('footyApp', [
  'ngRoute',
  'footyApp.view1',
  'footyApp.view2',
  'footyApp.view3'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  })
  .when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  })
  .otherwise({redirectTo: '/view1'});
}]);
