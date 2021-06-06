$(function(){
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var week = myDate.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    $("#data").text(year + "年" + mon + "月" + date + "日"  );
    $("#week").text(weeks[week]);
})
function gettime(){
    var myDate = new Date;
    var hour = myDate.getHours();//获取当前小时数(0-23)
    var min = myDate.getMinutes();//获取当前分钟数(0-59)
    var sec = myDate.getSeconds();//获取当前秒
    var value = ""
    if(min<10){
        value = hour+":"+ "0" + min+":";
    }else{
        value = hour+":"+min+":";
    }
    if(sec<10){
        value +="0" + sec;
    }else{
        value += sec;
    }
    $("#time").text(value)
}
setInterval(gettime,1000)

function weather(){

}