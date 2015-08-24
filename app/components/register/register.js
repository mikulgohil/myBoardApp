
angular.module('myBoard.register', ['firebase'])

.controller('registerCtrl', ['$scope', '$location', '$firebaseAuth',
    function($scope, $location, $firebaseAuth) {


        var firebaseObj = new Firebase("https://mikul-board.firebaseio.com");
        var auth = $firebaseAuth(firebaseObj);

        var login = {};
        $scope.login = login;

        //console.log($scope.user);

        $scope.signUp = function() {
            if (!$scope.regForm.$invalid) {
                var email = $scope.user.email;
                var password = $scope.user.password1;

                if (email && password) {
                    
                    auth.$createUser({
                      email: email,
                      password: password
                    })
                        .then(function() {
                            // do things if success
                            console.log('User creation success');
                            $location.path('/admin');
                        }, function(error) {
                            // do things if failure
                            console.log(error);
                            $scope.regError = true;
                            $scope.regErrorMessage = error.message;
                        });
                }
            }
        };
    }
]);