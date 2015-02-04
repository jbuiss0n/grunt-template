'use strict';

angular
  .module('grunt-template-app.characters', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('characters', {
        url: '/characters',
        templateUrl: 'views/characters.html',
        controller: 'CharactersController as controller',
      });
  }]);
