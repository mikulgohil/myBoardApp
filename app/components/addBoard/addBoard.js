angular.module('myBoard.addBoard', ['firebase', 'ui.router'])

.controller('addBoardCtrl', ['$scope','$location','$firebaseArray', '$firebaseAuth','UserProps',
    function($scope, $location, $firebaseArray, $firebaseAuth,UserProps) {
        
        var login = {};
        $scope.login = login;



        $scope.AddBoard = function() {
            var user = UserProps.getUser();

            console.log(user);

            login.loading = true;
            var title = $scope.title;
            var detail = $scope.detail;
            var user = user;


            var messageListRef = new Firebase('https://mikul-board.firebaseio.com/board');
            var newMessageRef = messageListRef.push();

            newMessageRef.set({
                title: title,
                detail: detail,
                emailId: user,
                '.priority': user
            });
            console.log("Board Added");
            $location.path('/admin');

        }

        $scope.cancle = function(){
            $location.path('/admin');
        }

    }
]);
