'use strict';

angular
  .module('grunt-template-app.characters')
  .controller('CharactersController', function (Characters, MarvelImage) {
    var self = this;

    Characters.query(function (characters) {
      self.characters = characters;
    });

    self.getImage = function (character) {
      return MarvelImage.portrait_small(character.thumbnail);
    };
  });
