'use strict';

angular
  .module('grunt-template-app.comics', [
    'ui.router'
  ])

  .factory('Comics', function ($http, config) {
    return {
      query: function (callback) {
        $http({
          url: 'http://gateway.marvel.com/v1/public/comics',
          method: 'GET',
          params: { apikey: config.MARVEL_API_KEY }
        }).then(function (result) {
          callback(result.data.data.results);
        });
      }
    };
  })

  .controller('ComicsController', function (Comics, MarvelImage) {
    var self = this;

    Comics.query(function (comics) {
      self.comics = comics;
    });

    self.getImage = function (comic) {
      return MarvelImage.portrait_small(comic.thumbnail);
    };
  })

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('comics', {
        url: '/comics',
        templateUrl: 'views/comics.html',
        controller: 'ComicsController as controller',
      });
  }]);
