(function() {
    angular.module('myBoard', [
    	'ui.router',    
    	'myBoard.login',   // login folder
    	'myBoard.register',  // register folder
    	'myBoard.admin',  // admin folder
    	'myBoard.addBoard' // addBoard folder
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        // Home page router
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller : 'homeCtrl'
        })
        // Login page router
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.html',
            controller : 'loginCtrl'
        })
        // Register page router
        .state('register',{
        	url:'/register',
        	templateUrl: 'components/register/register.html',
        	controller : 'registerCtrl'
        })
        // Admin page router
        .state('admin',{
             url:'/admin',
             templateUrl: 'components/admin/admin.html',
             controller : 'adminCtrl'
         })
        // Add post page router
        .state('add',{
             url:'/addBoard',
             templateUrl: 'components/addBoard/addBoard.html',
             controller : 'addBoardCtrl'
         });

    });

})();