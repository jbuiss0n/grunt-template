'use strict';

angular
  .module('grunt-template-app.comics')
  .controller('ComicsController', function (Comics, MarvelImage) {
    var self = this;

    Comics.query(function (comics) {
      self.comics = comics;
    });

    self.getImage = function (comic) {
      return MarvelImage.portrait_small(comic.thumbnail);
    };
  });
