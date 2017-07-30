/**
 * Created by katty on 2017/7/23.
 */

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

window.onload = function() {
    getPosition();
    collapseMenu();
    toNewWindow();
    //2.轮播图
    //1.定义变量
    var container = document.getElementsByClassName("container")[0];
    var oUl1 = document.getElementsByClassName("img_list")[0];
    var imgList = oUl1.getElementsByTagName("li");
    var oUl2 = document.getElementsByClassName("number_list")[0];
    var numberList = oUl2.getElementsByTagName("li");
    var left = document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];

    //2./*图片向右轮播*/
    var i = 0;
    imgList[0].style.display = "block";
    numberList[0].style.background = "#ecccff";
    function scrollRight(){
        i++;
        if(i > 5){
            i = 0;
            imgList[imgList.length - 1].style.display = "none";
            numberList[numberList.length - 1].style.background = "#eeffc2";
            imgList[0].style.display = "block";
            numberList[0].style.background = "#ecccff";
        }
        else{
            imgList[i - 1].style.display = "none";
            numberList[i - 1].style.background = "#eeffc2";
            imgList[i].style.display = "block";
            numberList[i].style.background = "#ecccff";
        }
    }
    var timer = setInterval(scrollRight,2000);

    //3./*图片向左轮播*/
    function scrollLeft(){
        i--;
        if(i < 0 ){
            i = 5;
            imgList[0].style.display = "none";
            numberList[0].style.background = "#eeffc2";
            imgList[imgList.length - 1].style.display = "block";
            numberList[numberList.length - 1].style.background = "#ecccff";
        }
        else{
            imgList[i + 1].style.display = "none";
            numberList[i + 1].style.background = "#eeffc2";
            imgList[i].style.display = "block";
            numberList[i].style.background = "#ecccff";
        }
    }

    //4./*左按钮运动*/
    function leftMove(target){
        var timer = null;
        clearInterval(timer);
        var speed = 0;
        var distance = parseInt(left.style.left);
        if(distance < target){
            speed = 1;
        }
        else{
            speed = -1;
        }
        timer = setInterval(function(){
            if(distance == target){
                clearInterval(timer);
            }
            else{
                left.style.display = "block";
                distance = distance + speed;
                left.style.left = distance + "px";
            }
        },12);
    }

    //5./*右按钮运动*/
    function rightMove(target){
        var timer = null;
        clearInterval(timer);
        var speed = 0;
        var distance = parseInt(right.style.right);
        if(distance < target){
            speed = 1;
        }
        else{
            speed = -1;
        }
        timer = setInterval(function(){
            if(distance == target){
                clearInterval(timer);
            }
            else{
                right.style.display = "block";
                distance = distance + speed;
                right.style.right = distance + "px";
            }
        },12);
    }

    //6./*鼠标移入移出*/
    function mouseControl(){
        for(var i = 0;i < numberList.length;i++){
            numberList[i].index = i;
            numberList[i].onmouseover = function(){
                for(var j = 0;j < numberList.length;j++){
                    imgList[j].style.display = "none";
                    numberList[j].style.background = "#eeffc2";
                }
                imgList[this.index].style.display = "block";
                numberList[this.index].style.background = "#ecccff";
            };
            numberList[i].onmouseout = function(){
                numberList[this.index].style.background = "#eeffc2";
            }
        }
    }

    //7./*左右按钮运动*/
    left.style.left = -50 + "px";
    right.style.right = -50 + "px";
    left.style.display = "none";
    right.style.display = "none";
    container.onmouseover = function(){
        leftMove(0);
        rightMove(0);
        clearInterval(timer);
    };
    container.onmouseout = function(){
        timer = setInterval(scrollRight,2000);
        leftMove(-50);
        rightMove(-50);
    };
    left.onclick = scrollLeft;
    right.onclick = scrollRight;
    mouseControl();
};

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
    var demo9 = document.getElementsByClassName("demo9")[0];
    var demo10 = document.getElementsByClassName("demo10")[0];
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
        window.open("FourthDemo/Log_in.html","_blank");
    };
    demo5.onclick = function(){
        window.open("FifthDemo/scroll.html","_blank");
    };
    demo6.onclick = function(){
        window.open("SixthDemo/sin.html","_blank");
    };
    demo7.onclick = function(){
        window.open("SeventhDemo/QQ__logo.html","_blank");
    };
    demo8.onclick = function(){
        window.open("EighthDemo/sin.html","_blank");
    };
    demo9.onclick = function(){
        window.open("NinthDemo/canvas.html","_blank");
    };
    demo10.onclick = function(){
        window.open("TenthDemo/canvas.html","_blank");
    };
}

