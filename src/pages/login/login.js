console.log("login.js执行了，接下来，准备加载配置文件！");

require(["../../js/config"],function(){//先加载配置文件。不用再加.js后缀
    require(["jquery","animate"],function($){ //依赖谁就传入谁,而且谁传入了才会加载谁
        console.log($);             //aaa就是传入的整个jquery对象
        console.log('loading login.js');//js代码
        // var div=document.getElementById("div");
        
        // animate(div, {left:500});

    })
})

// {/* <script> */}
    
     //$(function(){
    //     console.log("ok");
    //     // console.log($.fn.hover);
    // })

       // //node.js模块化
    // let $=require("jquery");
    // module.exports = {
    //     print:function(){
    //         $.each();
    //     }
    // }
    // //es6
    // import $ from "jquery";
    // export default {
    //     print : function(){
    //         $.each();
    //    }
    // }
    // //框架
    // define(["jquery"],function(){//引入需要用的模块
    //     return {
    //         print :function(){//对外暴露一个借口
    //             $.each();
    //         }
    //     }
    // })
// </script>


