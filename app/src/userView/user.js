'use strict';

angular.module('footyApp.userView', ['ngRoute', 'underscore'])
.controller('UserController', UserController);

function UserController( $scope,
                         $route,
                         $routeParams
                        ) {
  $scope.params = $routeParams;
};