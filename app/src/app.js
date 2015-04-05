'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});

// Declare app level module which depends on views, and components
angular.module('footyApp', [
  'ngRoute',
  'footyApp.loginView',
  'footyApp.userView'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'loginView/login.html',
    controller: 'LoginController'
  })
  .when('/user/:pseudo', {
    templateUrl: 'userView/user.html',
    controller: 'UserController'
  })
  .otherwise({redirectTo: '/login'});
}]).
factory('UserService', function(){
  var logged = "false";
  return {
      isLogged: function () {
          return logged;
      },
      setLogged: function(value) {
          logged = value;
      }
  };
}).
controller('footyController', ['$scope', '$rootScope', 'UserService', function($scope, $rootScope, UserService) {
  // App variable ?
}]).
run(['$rootScope', 'UserService', function($rootScope, UserService) {
    $rootScope.logged = UserService.isLogged();
}]);
