'use strict';

// karma: test runner configuration
module.exports = {
  options: {
    configFile: 'karma.conf.js'
  },
  dev: {
    reporters: [
      'progress'
    ]
  },
  reports: {
    reporters: [
      'progress',
      'coverage',
      'junit',
      'threshold'
    ],
    preprocessors: {
      'app/scripts/**/!(*.test)+(.js)': 'coverage'
    },
    coverageReporter: {
      dir: 'reports/coverage',
      reporters: [{
        type: 'html',
        subdir: '.'
      }, {
        type: 'clover',
        subdir: '.'
      }, {
        type: 'text',
        subdir: '.'
      }]
    },
    junitReporter: {
      outputFile: 'reports/tests/tests-result.xml'
    },
    thresholdReporter: {
      thresholds: {
        controller: 75,
        directive: 55,
        service: 76,
        filter: 100,
        router: 100
      },
      pmdXML: 'reports/violation/threshold-reporter.xml'
    }
  },
  watch: {
    port: 9490,
    runnerPort: 9499,
    autoWatch: true,
    singleRun: false
  }
};
