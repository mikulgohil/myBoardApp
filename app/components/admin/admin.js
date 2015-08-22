
angular.module('myBoard.admin', ['firebase','ui.router'])

    // .config(function($stateProvider){
    // $stateProvider
    //     .state('admin',{
    //         url:'/admin',
    //         templateUrl: 'components/admin/admin.html',
    //         controller : 'adminCtrl'
    //     })
    //     .state('edit', {
    //         url: "/edit",
    //         views: {
    //             "view": {
    //                 template: "Working fine for now EDIT"
    //             }
    //         }
    //     })
    //     .state('admin.add', {
    //         url: "/add",
    //         views: {
    //             "view": {
    //                 template: "This si addd"
    //             }
    //         }
    //     })
    // })



.controller('adminCtrl', ['$scope', '$location', '$firebaseAuth',
    function($scope, $location, $firebaseAuth) {
    	console.log("Hello I am fine");

}]);
