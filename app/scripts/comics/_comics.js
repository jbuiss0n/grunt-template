'use strict';

angular
  .module('grunt-template-app.comics', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('comics', {
        url: '/comics',
        templateUrl: 'views/comics.html',
        controller: 'ComicsController as controller',
      });
  }]);
