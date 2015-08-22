(function() {
    
    angular.module('myBoard', [
    	'ui.router',
    	'myBoard.login',
    	'myBoard.register',
    	'myBoard.admin',
    	'myBoard.add'
        // 'myBoard.register',
        
        // 
        // 'myBoard.home'
        // 'myBoard.admin',
         

    ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/home.html',
            controller : 'homeCtrl'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.html',
            controller : 'loginCtrl'
        })
        .state('register',{
        	url:'/register',
        	templateUrl: 'components/register/register.html',
        	controller : 'registerCtrl'
        }).state('admin',{
             url:'/admin',
             templateUrl: 'components/admin/admin.html',
             controller : 'adminCtrl'
         })
        .state('add',{
             url:'/add',
             templateUrl: 'components/add/add.html',
             controller : 'addCtrl'
         })
        
        
        ;

    });

})();