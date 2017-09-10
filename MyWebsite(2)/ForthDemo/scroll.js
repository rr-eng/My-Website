window.onload = function(){
    //1.定义全局变量
    var container = document.getElementById("container");
    var imgList = document.getElementsByClassName("imgList")[0];
    var numberList = document.getElementsByClassName("numberList")[0];
    var oLi1 = imgList.getElementsByTagName("li");
    var oLi2 = numberList.getElementsByTagName("li");
    var left = document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];
    //2.鼠标移入移出,执行运动函数,轮播暂停
    container.onmouseover = function(){
        left.style.display = "block";
        right.style.display = "block";
        leftMove(0);
        rightMove(760);
        clearInterval(timer);
    };
    container.onmouseout = function(){
        left.style.display = "none";
        right.style.display = "none";
        left.style.left = -40 + "px";
        right.style.right = -40 + "px";
        timer = setInterval(scrollRight,2000);
    };
    //3.运动函数move
    function leftMove(){
        var timer = null;
        clearInterval(timer);
        timer = setInterval(function(){
            var speed = 1;
            var opacity = 0.5;
            if(left.offsetLeft == 0){
                clearInterval(timer);
            }
            else{
                left.style.left = left.offsetLeft + speed + "px";
                left.style.opacity = opacity;
            }
        },15);
    }
    function rightMove(target){
        var timer = null;
        clearInterval(timer);
        timer = setInterval(function(){
            var speed = 1;
            var opacity = 0.5;
            if(right.offsetLeft == target){
                clearInterval(timer);
            }
            else{
                right.style.right = left.offsetLeft + speed + "px";
                right.style.opacity = opacity;
            }
        },15);
    }
    //4.图片向右滚动轮播
    var index = 0;
    oLi1[0].style.display = "block";
    oLi2[0].style.background = "#88dbdb";
    function scrollRight(){
        index++;
        if(index > 4){
            index = 0;
            oLi1[4].style.display = "none";
            oLi1[0].style.display = "block";
            oLi2[4].style.background = "#ddd";
            oLi2[0].style.background = "#88dbdb";
        }
        else{
            oLi1[index - 1].style.display = "none";
            oLi1[index].style.display = "block";
            oLi2[index - 1].style.background = "#ddd";
            oLi2[index].style.background = "#88dbdb";
        }
    }
    var timer = setInterval(scrollRight,2000);
    //5.图片向左滚动轮播
    function scrollLeft(){
        index--;
        if(index == -1){
            index = 4;
            oLi1[0].style.display = "none";
            oLi1[4].style.display = "block";
            oLi2[0].style.background = "#ddd";
            oLi2[4].style.background = "#88dbdb";
        }
        else{
            oLi1[index + 1].style.display = "none";
            oLi1[index].style.display = "block";
            oLi2[index + 1].style.background = "#ddd";
            oLi2[index].style.background = "#88dbdb";
        }
    }
    //6.鼠标移入圆点，显示对应图片
   function show(){
       for(var i = 0;i < oLi2.length;i++){
           oLi2[i].index = i;
           oLi2[i].onmouseover = function(){
               for(var j = 0;j < oLi2.length;j++){
                   oLi1[j].style.display = "none";
                   oLi2[j].style.background = "#ddd";
               }
               oLi1[this.index].style.display = "block";
               oLi2[this.index].style.background = "#88dbdb";
           }
       }
   }
    //6.向左，向右按钮控制轮播,鼠标移入圆点，显示对应图片
    left.onclick = scrollLeft;
    right.onclick = scrollRight;
    show();
};