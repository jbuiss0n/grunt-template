'use strict';

// Save hashmap of versionned filed created by the `filerev` task on which the `cssurlrev` task operates
module.exports = {
  build: {
    options: {
      dest: '.build/filerev.json',
      cwd: '.build/'
    }
  }
};
