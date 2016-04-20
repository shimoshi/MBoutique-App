var app = angular.module('myApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');

    $stateProvider

        .state('welcome', {
            url: '/welcome',
            templateUrl: 'templates/welcome.html'
        })

        .state('our_macarons', {
            url: '/our_macarons',
            templateUrl: 'templates/our_macarons.html'
        })

        .state('gifts&parties', {
            url: '/gifts&parties',
            templateUrl: 'templates/gifts&parties.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        })

});