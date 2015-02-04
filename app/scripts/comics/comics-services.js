'use strict';

angular
  .module('grunt-template-app.comics')
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
  });
