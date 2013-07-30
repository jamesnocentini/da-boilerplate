/**
 * Bootstrapping file for the angular app. Always remember that the
 * execution context of this file is in the browser, thus we need to call the templates-main module
 * that contains all the templates we need
 */
angular.module( 'main', [
        'templates-app',
        'da-about',
        'da-users',
        'da-admin',
        'templates-common'
    ])

    .config( function myAppConfig ( ) {

    })

    .run( function run (  ) {

    })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

        d3.select('body')
            .append('h1')
            .text('Hey Thet')
            .style('color', 'red')

    })
;