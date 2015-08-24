angular.module('myBoard.login', ['firebase'])

.controller('loginCtrl', ['$scope', '$location', 'UserProps', '$firebaseAuth',
    function($scope, $location, UserProps, $firebaseAuth) {
        var firebaseObj = new Firebase("https://mikul-board.firebaseio.com");
        var loginObj = $firebaseAuth(firebaseObj);



        // Login with Github
        $scope.loginGitHub = function() {
            var usersRef = new Firebase('https://mikul-board.firebaseio.com/users');
            var usersRef = $firebaseAuth(usersRef);

            usersRef.$authWithOAuthPopup('github').then(function(authData) {
                $location.path('/admin');
            }).catch(function(error) {
                console.log("Error: ", error);
            });
        }


        $scope.user = {};
        // SingIn method
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
                    UserProps.setUser(user.password.email);
                    $location.path('/admin');
                }, function(error) {
                    //Failure callback
                    console.log(error + 'Authentication failure');
                });
        }
    }
])
