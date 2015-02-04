'use strict';

angular
  .module('grunt-template-app', [
    'grunt-template-app.config',
    'grunt-template-app.templates',
    'grunt-template-app.comics',
    'grunt-template-app.characters',
    'ui.router'
  ])

  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
      });
  }]);
