var app = angular.module("app", []);
app.controller("Controller", function($scope){
  $scope.postsData = [];
  $scope.submitForm = function(post){
    $scope.post.votes = 0;
    $scope.post.comments = [];
    $scope.postsData.push(angular.copy($scope.post));
    $scope.post = {};
    $scope.errors = [];
  }
  $scope.upVote = function(){
    this.elem.votes++;
  }
  $scope.downVote = function(){
    this.elem.votes--;
  }
  $scope.commentsData = [];

  $scope.submitComment = function(sentComment){
    console.log($scope);
    console.log($scope.cname)
    console.log($scope.ccomment)
    console.log($scope.currComment);
    $scope.commentsData.push(angular.copy(sentComment));
    $scope.currComment = {};
    console.log($scope.currComment);
  }
})
