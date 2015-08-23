var ref = new Firebase("https://mikul-board.firebaseio.com");
        $scope.authObj = $firebaseAuth(ref);

        var authData = $scope.authObj.$getAuth();
        if (authData) {
            $location.path('/');
          console.log("Logged in as:", authData.uid);
        } else {
          console.log("Logged out");
        }