/** --------------------------------------------------------
    gulpfile.js
    --------------------------------------------------------
    @author Keenan Staffieri
    @version 0.5.0
    GulpJS build tasks for kplate.
    -------------------------------------------------------- */

/**
    Required Modules
*/
var gutil      = require('gulp-util'),
    requireDir = require('require-dir');

gutil.log(
    gutil.colors.bgCyan('----------------- kplate STARTED -----------------')
);

/**
    Include gulp tasks
    ------------------
    ./tasks/commands.js
    ./tasks/dev-watch.js
    ./tasks/dev.js
    ./tasks/prod-watch.js
    ./tasks/prod.js
*/
var dir = requireDir('./tasks');
