/**
 * Created by Asus on 2017/9/9.
 */

window.onload = function(){
    getPosition();
    submitMessage();
};
//1.线条移动
function getPosition(){
    var oUl = document.getElementsByClassName("li_list")[0];
    var liList = oUl.getElementsByTagName("li");
    var moveLine = document.getElementsByClassName("move_line")[0];
    for(var i = 0;i < liList.length;i++){
        liList[i].onmouseover = function(){
            moveLine.style.display = "block";
            var startPos = parseInt(getCurrentStyle(moveLine,"left"));
            var endPos = parseInt(this.offsetLeft);
            lineMove(startPos,endPos);
        };
        liList[i].onmouseout = function(){
            moveLine.style.display = "none";
            var left = getCurrentStyle(moveLine,"left");
            var top = getCurrentStyle(moveLine,"top");
            moveLine.style.left = left + "px";
            moveLine.style.top = top + "px";
        }
    }
}
//获取样式函数
function getCurrentStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle.name;
    }
    else{
        return getComputedStyle(obj,false)[name];
    }
}
//线条运动
function lineMove(start,end){
    var moveLine = document.getElementsByClassName("move_line")[0];
    var timer = null;
    clearInterval(timer);
    timer = setInterval(function(){
        var speed = (end - start) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        start = start + speed;
        if(start == end){
            clearInterval(timer);
        }
        else{
            moveLine.style.left = start + "px";
        }
    },10);
}

//2.提交信息
function submitMessage(){
    var messageTxt = document.getElementById("message");
    var submitBtn = document.getElementById("button");
    submitBtn.onclick = function(){
        if(messageTxt.value == ""){
            alert("当前留言信息为空，请输入您的留言信息！");
        }
        else{
            var LStorage = window.localStorage;
            LStorage.setItem("message",messageTxt.value);
            alert("你的留言信息已保存！");
        }
        messageTxt.value = "";
    }
}


