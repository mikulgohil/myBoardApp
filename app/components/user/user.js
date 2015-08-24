angular.module('myBoard.user',[])
.service('UserProps',['$location', function($location) {
    var user = '';
    var auth = '';
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        },
        setAuth : function(obj){
            auth = obj;
        },
        getAuth: function(){
            return auth;
        },
        logOut : function(){
            console.log("logout");
            Auth.$unauth();
            $location.path('/home');
            
        }
    };

}]);