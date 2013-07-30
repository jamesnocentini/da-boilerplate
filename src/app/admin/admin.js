angular.module('da-admin', [
])

.config(function config($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'admin/admin.tpl.html',
        controller: 'AdminCtrl'
    });
})

.controller('AdminCtrl', function AdminCtrl($scope) {
        $scope.name = 'James';
        $scope.name = 'James';
});