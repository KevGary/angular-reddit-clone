var app = angular.module("app", []);
app.controller("Controller", function($scope){
  $scope.postsData = [];
  $scope.submitForm = function(){
    $scope.postsData.push(angular.copy($scope.post));
    $scope.post = {};
  }
})