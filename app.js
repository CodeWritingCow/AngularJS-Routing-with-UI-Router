var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS
    .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
    })

    // nested list with custom controller
    .state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html',
        controller: function ($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    // nested list with random string data
    .state('home.paragraph', {
        url: '/paragraph',
        template: 'Moo? Moo!'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS
    .state('about', {
        url: '/about',
        views: {
            
            // Main template (relatively named)
            '': { templateUrl: 'partial-about.html' },

            // Child views defined here (absolutely named)
            'columnOne@about': { template: 'Look, I am a column!' },

            // Define separate controller for column two
            'columnTwo@about': {
                templateUrl: 'table-data.html',
                controller: 'scotchController'
            }
        }

    });

}); // Closes $routerApp.config()

// Define scotch controller that gets called in the about state
routerApp.controller('scotchController', function ($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});