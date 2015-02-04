'use strict';

angular
  .module('grunt-template-app.characters')
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
  });
