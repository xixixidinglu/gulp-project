let gulp = require("gulp");
let uglify = require("gulp-uglify");
let minifyJS = require("gulp-babel-minify");
let minifyCSS = require("gulp-clean-css");
let connect = require("gulp-connect");

//添加的文件需要上传时同步上去
gulp.task("build", () => {
    //压缩js
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"));
    // gulp.src("./src/index.html").pipe(gulp.dest("./dist"));
    //复制html
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"));
    //压缩css
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())//压缩处理
        .pipe(gulp.dest("./dist"));
})

//热加载
gulp.task("refreshHtml", () => {
    gulp.src("./src/**/*.html")//读取修改的目录的HTML文件
        .pipe(gulp.dest("./dist"))//在复制到dist下
        .pipe(connect.reload());//再给dist下的服务器做处理
})
gulp.task("refreshCss", () => {
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))

})
gulp.task("refreshJs", () => {
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))

})

gulp.task("server", () => {//创建在dist目录上的服务器
    connect.server({
        root: "dist",//服务器放在哪个目录
        port: 8888,
        livereload: true//热加载，即时更新页面
    })
    gulp.watch("./src/**/*.html", ["refreshHtml"]);//监听这这个html页面，有变化就调refreshHtml
    gulp.watch("./src/**/*.css", ["refreshCss", "refreshHtml"]);//因为css改了，也要更新html页面
    gulp.watch("./src/**/*.js", ["refreshJs", "refreshHtml"]);//同理
})