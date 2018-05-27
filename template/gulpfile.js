var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    shell = require('gulp-shell')

gulp.task('exec',
    shell.task(['nrm use midea', 'npm publish'])
)

gulp.task('publish', gulpSequence('exec'))
