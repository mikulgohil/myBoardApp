angular.module('myBoard.notification', ['ui-notification'])

.service('notificationCtrl', ['$scope','Notification', function($scope, Notification){
	$scope.primary = function() {
                    Notification('Primary notification');
                };

                $scope.error = function() {
                    Notification.error('Error notification');
                };

                $scope.success = function() {
                    Notification.success('Success notification');
                };

                $scope.info = function() {
                    Notification.info('Information notification');
                };

                $scope.warning = function() {
                    Notification.warning('Warning notification');
                };

                // ==
}])