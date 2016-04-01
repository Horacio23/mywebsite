var gulp = require('gulp');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('inject', function(){
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/**/*.css', './public/js/**/*.js', './public/fonts/**/*.css'], {read: false}); //Read false because we only need their names, not their content
    var injectOptions = {
      ignorePath: '/public'
    };

    return gulp.src('./src/views/**/*.ejs')
            .pipe(inject(injectSrc, injectOptions))
            .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['inject'], function(){
    var nodemon = require('gulp-nodemon');

    var nodemonOptions = {
      script: 'server.js',
      delayTime: 1,
      env: {
          'PORT': 5000
      },
      watch: jsFiles
    }

    return nodemon(nodemonOptions).on('restart', function(ev){
        console.log('Restarting...');
    })
});
