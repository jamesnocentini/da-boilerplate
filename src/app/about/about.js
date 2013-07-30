/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module('da-about', [
        'da-directive-hello'
])
/**
 * Each section or module of the site can also have its own routes.
 * AngularJS will ensure they are all available at run-time, but
 * splitting it this way makes each module more 'self-contained'.
 */
.config(function config($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'about/about.tpl.html',
        controller: 'AboutCtrl'
    });
})
/**
 * We define a controller for our route.
 * But don't forget to declare it the html
 * template too
 */
.controller('AboutCtrl', function AboutCtrl($scope) {
        $scope.name = 'James';
});

