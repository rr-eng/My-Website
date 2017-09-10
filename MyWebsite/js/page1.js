/**
 * Created by katty on 2017/7/23.
 */
window.onload = function(){
    getPosition();
    collapseMenu();
    toNewWindow();
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

//3.折叠菜单
function collapseMenu(){
    var summeryTitle = document.getElementsByClassName("summery_title");
    var demoList = document.getElementsByClassName("demo_list");
    var boolean = true;
    //列表初始状态设为显示状态
    for(var i = 0;i < demoList.length;i++){
        demoList[i].style.display = "block";
    }
    for(var j = 0;j < summeryTitle.length;j++){
        summeryTitle[j].index = j;
        summeryTitle[j].onclick = function(){
            if( boolean == true){
                demoList[this.index].style.display = "none";
                boolean = false;
            }
            else{
                demoList[this.index].style.display = "block";
                boolean = true;
            }
        }
    }
}

//4.主体内容点击图片链接到新的网址
function toNewWindow(){
    var demo1 = document.getElementsByClassName("demo1")[0];
    var demo2 = document.getElementsByClassName("demo2")[0];
    var demo3 = document.getElementsByClassName("demo3")[0];
    var demo4 = document.getElementsByClassName("demo4")[0];
    var demo5 = document.getElementsByClassName("demo5")[0];
    var demo6 = document.getElementsByClassName("demo6")[0];
    var demo7 = document.getElementsByClassName("demo7")[0];
    var demo8 = document.getElementsByClassName("demo8")[0];
    demo1.onclick = function(){
        window.open("FirstDemo/index.html","_blank");
    };
    demo2.onclick = function(){
        window.open("SecondDemo/2048.html","_blank");
    };
    demo3.onclick = function(){
        window.open("ThirdDemo/waterfall.html","_blank");
    };
    demo4.onclick = function(){
        window.open("ForthDemo/scroll.html","_blank");
    };
    demo5.onclick = function(){
        window.open("FifthDemo/sin.html","_blank");
    };
    demo6.onclick = function(){
        window.open("SixthDemo/QQ__logo.html","_blank");
    };
    demo7.onclick = function(){
        window.open("SeventhDemo/sin.html","_blank");
    };
    demo8.onclick = function(){
        window.open("EigthDemo/canvas.html");
    }
}


