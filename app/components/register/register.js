
angular.module('myBoard.register', ['firebase'])

.controller('registerCtrl', ['$scope', '$location', '$firebaseAuth',
    function($scope, $location, $firebaseAuth) {


        var firebaseObj = new Firebase("https://mikul-board.firebaseio.com");
        var auth = $firebaseAuth(firebaseObj);

        var login = {};
        $scope.login = login;

        $scope.signUp = function() {
            if (!$scope.regForm.$invalid) {
                var email = $scope.user.email;
                var password = $scope.user.password;
                if (email && password) {
                    login.loading = true;
                    auth.$createUser(email, password)
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