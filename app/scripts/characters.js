'use strict';

angular
  .module('grunt-template-app.characters', [
    'ui.router'
  ])

  .factory('Characters', function ($http, config) {
    return {
      query: function (callback) {
        $http({
          url: 'http://gateway.marvel.com/v1/public/characters',
          method: 'GET',
          params: { apikey: config.MARVEL_API_KEY }
        }).then(function (result) {
          callback(result.data.data.results);
        });
      }
    };
  })

  .controller('CharactersController', function (Characters, MarvelImage) {
    var self = this;

    Characters.query(function (characters) {
      self.characters = characters;
    });

    self.getImage = function (character) {
      return MarvelImage.portrait_small(character.thumbnail);
    };
  })

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('characters', {
        url: '/characters',
        templateUrl: 'views/characters.html',
        controller: 'CharactersController as controller',
      });
  }]);
