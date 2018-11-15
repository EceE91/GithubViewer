(function() {

  var practiceApp = angular.module("AngularPractice");

  practiceApp.controller("MainController", function($scope, $interval, $location) {
    $scope.username = "odetocode";
    $scope.countDown = 5;

    var decrementCountDown = function() {
      $scope.countDown -= 1;
      if ($scope.countDown < 1) {
        $scope.searchUser($scope.username);
      }
    };

    var countDownInterval = null;
    countDownInterval = $interval(decrementCountDown, 1000, $scope.countDown);

    $scope.searchUser = function(username) {
      if (countDownInterval) {
        $interval.cancel(countDownInterval);
        $scope.countDown = null;
      }
      $location.path("/user/"+ username);
    };

  });

}());