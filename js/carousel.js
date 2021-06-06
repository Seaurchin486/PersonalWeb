$(".carousel ul").css({ "width": "8000px" })
let bodywidth = $(window).width();

console.log("body宽度：" + bodywidth)
// 1207
$(".carousel ul").css({ "margin-left": bodywidth / 2 - 800 - 540 + "px" })
function aa() {
    let index = $(".carousel img.center-img").parent().index();
    // console.log("index:"+index)
    $(".carousel ul li").eq(index).children().removeClass("center-img")
    index++
    if (index >= $(".carousel ul li").length) {
        index = 0;
    }
    $(".carousel ul li").eq(index).children().addClass("center-img")
    let value = bodywidth / 2 - index * 800 - 540;
    // console.log(value)
    $(".carousel ul").css({ "margin-left": value + "px" })
}
let carousel = setInterval(aa, 2500)
// let flag=true
$(".carousel ul li img").click(function () {
    $(this).addClass("center-img")
    $(this).parent().siblings().children().removeClass("center-img")
    let index = $(this).parent().index();
    // console.log(index)
    let value = bodywidth / 2 - index * 800 - 540;
    // console.log(value)
    $(this).parent().parent().css({ "margin-left": value + "px" })
    // clearInterval(carousel);
    // if(flag){
    //     flag=false
    //     setTimeout(function(){
    //         carousel = setInterval( aa,3000)
    //         flag=true;
    //     },2000);
    // }
})
$(".carousel ul li img").mouseover(function () {
    clearInterval(carousel);//关闭自动轮播
}).mouseout(function () {
    carousel = setInterval(aa, 2500)//鼠标移走 启动定时器
})