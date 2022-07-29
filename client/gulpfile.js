//Dependencies
const {src, dest, series, watch} = require('gulp');
const terser = require('gulp-terser');
const ttf2woff2 = require('gulp-ttf2woff2');

//JavaScript Terser
function jsmin(){
    return src('src/assets/dev/js/*.js')
    .pipe(terser())
    .pipe(dest('src/assets/prod/js'))
}

//TTF to WOFF2
function ttfwoff(){
    return src('src/assets/dev/fonts/*.ttf')
    .pipe(ttf2woff2())
    .pipe(dest('src/assets/prod/fonts'))
}

//WatchTask Functions
function watchTask(){
    watch('src/assets/dev/js/*.js', jsmin);
}

//Default Gulp Tasks
exports.default = series(jsmin,watchTask);

//Default Terser Task *similar to default
exports.terser = series(jsmin,watchTask);

//Conver TTF to WOFF2
exports.ttf2woff = ttfwoff;