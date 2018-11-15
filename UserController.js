(function() {

  var practiceApp = angular.module("AngularPractice");

  practiceApp.controller("UserController", function($scope, userService, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      userService.getRepos($scope.user).then(onRepos, OnError);
    };
    
    var onError = function(error) {
      alert(error);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var OnError = function(reason) {
      $scope.error = reason;
      //alert($scope.error);
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    //alert($scope.username);
    userService.getUser($scope.username).then(onUserComplete, onError);
  });

}());