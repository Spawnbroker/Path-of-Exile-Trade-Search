var TradeSearch = angular.module('TradeSearch', ['ngRoute', 'ui.bootstrap']);

TradeSearch.controller('LandingPageController', LandingPageController);
TradeSearch.controller('LoginController', LoginController);
TradeSearch.controller('RegisterController', RegisterController);

TradeSearch.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
TradeSearch.factory('LoginFactory', LoginFactory);
TradeSearch.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: 'Account/Register',
            controller: RegisterController
        })

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];

TradeSearch.config(configFunction);