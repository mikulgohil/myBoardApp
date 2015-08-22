angular.module('myBoard.login', ['firebase'])

.controller('loginCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
 var firebaseObj = new Firebase("https://mikul-board.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
  
  $scope.user = {};

  $scope.SignIn = function(e) {

    e.preventDefault();
    var username = $scope.user.email;
    var password = $scope.user.password;
    loginObj.$authWithPassword({
            email: username,
            password: password
        })
        .then(function(user) {
            //Success callback
		
            console.log('Authentication successful');
	CommonProp.setUser(user.password.email);
		$location.path('/admin');
        }, function(error) {
            //Failure callback
		
            console.log(error + 'Authentication failure');
        });
}
}])
.service('CommonProp', function() {
    var user = '';
 
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
})
