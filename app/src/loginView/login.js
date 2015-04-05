'use strict';

angular.module('footyApp.loginView', ['ngRoute', 'underscore'])
.controller('LoginController', LoginController);

function LoginController( $scope,
                          $location,
                          $http,
                          UserService,
                          _) {

  // Instantiate persistant object
  $scope.master = {};

  var findUser = function( users, user ){
    var userLogin = _.find(users, function(thisUser){
      return thisUser.pseudo === user.name
    });
    $location.path('/user/'+userLogin.pseudo);
  };

  // Copy input into master
  $scope.update = function(user) {

    $scope.master = angular.copy(user);

    //  TODO
    // Check login
    // Simple GET request example :
    $http.get('/data/users.json').
          success( function(data, status, headers, config){

              findUser( data.users, user );
          }).
          error( function(data, status, headers, config) {
              console.log("ERROR");
          });


/*
    if( user.name === "admin" && user.email === "admin"){
      // Set loggedIn variable => Session?
      UserService.setLogged('true');
      console.log("isLogged = ", UserService.isLogged);

      // Redirect to user page
      $location.path('/user/admin');
    }else{
      // Display error
    }*/
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