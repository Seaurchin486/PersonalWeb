$(".totop").hide()
console.log("事件载入")
$(window).scroll(function(){
        var scrolltop = $(document).scrollTop();
        if(scrolltop > 200){
            $(".totop").show()
        }else{
            $(".totop").hide()
        }
})