
var { src , dest , series , parallel , watch } = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var fileInclude = require('gulp-file-include');
var webserver = require('gulp-webserver');

//清理dist文件
function cleanTask(){
    return src('./dist',{ allowEmpty : true})
            .pipe(clean());
}

//html文件的处理
function htmlTask(){
    return src('./src/view/*.html')
        .pipe(fileInclude({
            prefix : '@',
            basepath : './src/view/templates'
        }))
        .pipe(dest('./dist/view'));
}
//static静态资源的处理
function staticTask(){
    return src('./src/static/**')
            .pipe(dest('./dist/static'));
}

//sass的处理
function sassTask(){
    return src('./src/css/*.scss')
            .pipe(sass())
            .pipe(dest('./dist/css'))
}

//js文件的处理
function jsTask(){
    return src('./src/js/**')
            .pipe(dest('./dist/js'));
}

//lib文件的处理
function libTask(){
    return src('./src/lib/**')
            .pipe(dest('./dist/lib'));
}
//api文件的处理
function apiTask(){
    return src('./src/api/**')
            .pipe(dest('./dist/api'));
}

//监听文件
function watchTask(){
    watch('./src/view/**' , htmlTask);
    watch('./src/staic/**' , staticTask);
    watch('./src/css/**' , sassTask);
}

//gulp启动web服务器
function webTask(){
    return src('./dist').
            pipe(webserver({
                host : 'localhost',
                port : 3000,
                open : './view/index.html',   
                livereload : true      
            }));
}

//接口
module.exports = {
    // 开发调用的命令
    dev : series(cleanTask , parallel(htmlTask , staticTask , sassTask) , parallel(watchTask,webTask) ),
    // 生产调用的命令
    build : series(cleanTask)
};