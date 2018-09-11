console.log("config配置文件加载了！");

//配置文件的作用就是简化麻烦的路径
requirejs.config({
    baseUrl:"localhost:8888",
    paths:{
        "jquery":"https://cdn.bootcss.com/jquery/2.2.4/jquery",//不用再加.js了，配置文件默认添加
        // jq"uery-hover":"/js/myframework",
        "animate":"/js/animate/animate"
    }
});




