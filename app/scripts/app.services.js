'use strict';

angular
  .module('grunt-template-app')
  .factory('MarvelImage', [function () {
    var path = function (type, thumbnail) {
      if (!thumbnail) return;
      return thumbnail.path + '/' + type + '.' + thumbnail.extension;
    };

    return {
      detail: path.bind(null, 'detail'),
      portrait_incredible: path.bind(null, 'portrait_incredible'),
      portrait_medium: path.bind(null, 'portrait_medium'),
      portrait_small: path.bind(null, 'portrait_small'),
    };
  }]);