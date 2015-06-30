'use strict';

/* global module, require */

module.exports = function(gulp) {

    var config = {
        PATHS: {
            src: 'app',
            dist: 'dist',
            test: 'test'

        },
        AUTOPREFIXER_BROWSERS: [
            'ie >= 10',
            'ie_mob >= 10',
            'ff >= 30',
            'chrome >= 34',
            'safari >= 7',
            'opera >= 23',
            'ios >= 7',
            'android >= 4.4',
            'bb >= 10'
        ]
    };

    // Load tasks
    require('./tasks/default')(gulp, config);
    require('./tasks/deploy')(gulp, config);
    require('./tasks/release')(gulp);
    require('./tasks/testing')(gulp, config);
    require('./tasks/server')(gulp, config);
    require('./tasks/dist')(gulp, config);
};