
angular.module('myBoard.admin',[])

.controller('adminCtrl', ['$scope', '$location','$firebaseArray','$firebaseObject','$firebaseAuth','UserProps',
    function($scope, $location,$firebaseArray, $firebaseObject,$firebaseAuth,UserProps) {

        
    	console.log("I am in Admin");
        
        var refArray = new Firebase("https://mikul-board.firebaseio.com");

        var messagesRef = refArray.child("board");
        //var query = messagesRef.orderByChild("emailId").limitToLast(10);
        var list = $firebaseArray(messagesRef);

        $scope.authUser = UserProps.getUser();


        $scope.viewBoard = function(index){
            $scope.viewTitle =  list[index].title;
            $scope.viewDetail =  list[index].detail;
            $('#ViewModal').modal();
        }

         
        // Edit board method
        $scope.edit = function(index){

            var editArray = new Firebase("https://mikul-board.firebaseio.com/board/"+ index);
            var getIndex = $firebaseObject(editArray);
            //$scope.myD = getIndex;
            //getIndex.title = "This is great working finr";
            
            var getTitle = getIndex;
             //$scope.detail = getIndex.detail;
             //console.log(getIndex);

             $('#editModal').modal();
             $scope.save = function(){
                getIndex.title = $scope.title;
                getIndex.detail = $scope.detail;

                getIndex.$save().then(function(ref) {
                  ref.key() === getIndex.$id;
                }, function(error) {
                  console.log("Error: ", error);
                });
             }
            
              
        }

        // Wait for data to load
        list.$loaded()
          .then(function(x) {
            $scope.myData = list;
          })
          .catch(function(error) {
            console.log("Error:", error);
          });
        
        // Remove method  
        $scope.remove = function(index){
            list.$remove(index).then(function(ref) {
                console.log("remove");
            });
        }

        $scope.logOut = function(){
            console.log("logout");
            UserProps.logOut();
        }
}])

