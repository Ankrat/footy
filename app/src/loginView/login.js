'use strict';

angular.module('footyApp.loginView', ['ngRoute'])
.controller('LoginController', LoginController);

function LoginController($scope, $rootScope, $location, UserService) {

  // Instantiate persistant object
  $scope.master = {};
  // Copy input into master
  $scope.update = function(user) {

    $scope.master = angular.copy(user);

    if( user.name === "admin" && user.email === "admin"){
      UserService.setLogged('true');
      $rootScope.logged = UserService.isLogged();

      $location.path('/user');
    }else{

    }
  };

  // Empty $scope.user
  $scope.reset = function() {
    $scope.user = {};

    // Reset master ??
    // $scope.master = {};

    // Or keep logs
    // push master to an array???
  };

  // empty $scope.user on load
  $scope.reset();
};