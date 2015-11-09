var app = angular.module("app", []);
app.controller("Controller", function($scope){
  $scope.postsData = [];
  $scope.submitForm = function(post){
    post.votes = 0;
    post.comments = [];
    post.timeSubmitted = moment().calendar();
    $scope.postsData.push(angular.copy(post));
    $scope.post = {};
  }
  $scope.upVote = function(){
    this.elem.votes++;
  }
  $scope.downVote = function(){
    this.elem.votes--;
  }

})
app.controller("Comments-Controller", function($scope){
  $scope.commentsData = [];
  $scope.submitComment = function(comment){
    $scope.commentsData.push(angular.copy(comment));
    $scope.comment = {};
  }
})
