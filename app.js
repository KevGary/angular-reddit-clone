var app = angular.module("app", []);
app.controller("Controller", function($scope){
  // $scope.name = "yo, world"
  $scope.postsData = [];
  $scope.submitForm = function(post){
    $scope.postsData.push(post);
    console.log($scope.postsData);
  }
})