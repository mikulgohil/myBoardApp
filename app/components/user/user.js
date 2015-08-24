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
        logOut : function(){
            console.log("logout");
            $location.path('/home');
            
        }
    };

}]);