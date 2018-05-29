var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    shell = require('gulp-shell')

gulp.task('exec',
    // 'nrm use midea': 使用私有源
    shell.task(['nrm use midea', 'npm publish'])
)

gulp.task('publish', gulpSequence('exec'))
