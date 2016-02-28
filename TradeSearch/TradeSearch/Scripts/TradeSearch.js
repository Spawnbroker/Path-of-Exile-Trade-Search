var TradeSearch = angular.module('TradeSearch', ['ngRoute']);

TradeSearch.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return 'routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        });
}
configFunction.$inject = ['$routeProvider'];

TradeSearch.config(configFunction);