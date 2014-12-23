'use strict';

module.exports = function (grunt) {
  grunt.registerTask(
    'pack',
    'package the application as a node-webkit desktop application',
    function () {
      grunt.task.run([
        'build',
        'nodewebkit'
      ]);
    });
};
