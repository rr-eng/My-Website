window.onload = function(){
    getImgNumber();
    var imgData = {
        "data":[
            {"src":"img2.jpg"},
            {"src":"img5.jpg"},
            {"src":"img15.jpg"},
            {"src":"img16.jpg"},
            {"src":"img17.jpg"},
            {"src":"img19.jpg"},
            {"src":"img20.jpg"},
            {"src":"img21.jpg"},
            {"src":"img22.jpg"},
            {"src":"img23.jpg"},
            {"src":"img24.jpg"},
            {"src":"img25.jpg"},
            {"src":"img26.jpg"},
            {"src":"img27.jpg"},
            {"src":"img28.jpg"}
        ]
    };
    //1.窗口滚动时，添加图片时需要创建新的DOM元素。
    window.onscroll = function(){
        if(loadImg()) {
                var wrapper = document.getElementById("wrapper");

                for(var i = 0;i < imgData.data.length;i++){
                    var box = document.createElement("div");
                    box.className = "box";
                    wrapper.appendChild(box);

                    var box_img = document.createElement("div");
                    box_img.className = "box_img";
                    box.appendChild(box_img);

                    var img = document.createElement("img");
                    var p1 = document.createElement("p");
                    var hr = document.createElement("hr");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    p1.className = "title";
                    p2.className = "text";
                    p3.className = "foot";
                    switch(i){
                        case 0:{
                            p1.innerHTML = "Battle Field";
                            p2.innerHTML = "Battle Field for you....";
                        }
                            break;
                        case 1:{
                            p1.innerHTML = "Beach";
                            p2.innerHTML = "Relaxing on Beach...";
                        }
                            break;
                        case 2:{
                            p1.innerHTML = "Autumn";
                            p2.innerHTML = "The Trees in tht Antumn...";
                        }
                            break;
                        case 3:{
                            p1.innerHTML = "Yellow Cloudy";
                            p2.innerHTML = "Yellow Cloudy Just For You...";
                        }
                            break;
                        case 4:{
                            p1.innerHTML = "Light";
                            p2.innerHTML = "The Only Shinning Light...";
                        }
                            break;
                        case 5:{
                            p1.innerHTML = "Sun Flower";
                            p2.innerHTML = "Good SunShine for Flowers...";
                        }
                            break;
                        case 6:{
                            p1.innerHTML = "Alone";
                            p2.innerHTML = "Lonely Plant...";
                        }
                            break;
                        case 7:{
                            p1.innerHTML = "Autumn Light";
                            p2.innerHTML = "Sun Shinning into Forest...";
                        }
                            break;
                        case 8:{
                            p1.innerHTML = "Rooters' Ranch";
                            p2.innerHTML = "One Mysterious Place...";
                        }
                            break;
                        case 9:{
                            p1.innerHTML = "Winter Whisper";
                            p2.innerHTML = "One Felling of Winter Whisper...";
                        }
                            break;
                        case 10:{
                            p1.innerHTML = "Sundays Sunset";
                            p2.innerHTML = "Sunset in The Beach...";
                        }
                            break;
                        case 11:{
                            p1.innerHTML = "Flowers";
                            p2.innerHTML = "Colorful Flowers...";
                        }
                            break;
                        case 12:{
                            p1.innerHTML = "Bridge to Heaven";
                            p2.innerHTML = "Where The Bridge Lead To...";
                        }
                            break;
                        case 13:{
                            p1.innerHTML = "Sunset Lake";
                            p2.innerHTML = "A Peaceful Sunset Lake...";
                        }
                            break;
                        case 14:{
                            p1.innerHTML = "Herringfleet Mill";
                            p2.innerHTML = "Just A Good Place -- Herringfleet Mill...";
                        }
                            break;
                    }
                    p3.innerHTML = "From Katty";
                    img.src = "image/" + imgData.data[i].src;
                    box_img.appendChild(img);
                    box_img.appendChild(p1);
                    box_img.appendChild(hr);
                    box_img.appendChild(p2);
                    box_img.appendChild(p3);
                }
            }
            getImgNumber();
    };
};
//2.对wrapper设置css样式，进行瀑布流布局
function getImgNumber(){
    var wrapper = document.getElementById("wrapper");
    var allBox = wrapper.getElementsByClassName("box");

    //对div，wrapper设置样式
    var boxWidth = allBox[0].offsetWidth;
    var cols = parseInt(document.documentElement.clientWidth / boxWidth);
    wrapper.style.width = boxWidth * cols + "px";
    wrapper.style.margin = "50px auto";

    //进行瀑布流布局
    var boxHeightArr = [];
    for(var i = 0;i <allBox.length;i++){
        if(i < cols){
            boxHeightArr[i] = allBox[i].offsetHeight;
        }
        else{
            var minHeight = Math.min.apply(null,boxHeightArr);
            var index = getBoxMinHeight(boxHeightArr,minHeight);
            allBox[i].style.position = "absolute";
            allBox[i].style.top = minHeight + "px";
            allBox[i].style.left = allBox[index].offsetLeft + "px";
            boxHeightArr[index] = boxHeightArr[index] + allBox[i].offsetHeight;
        }
    }
}

//3.得到boxHeightArr中box最小的高度
function getBoxMinHeight(boxHeightArr,minHeight){
    for(var j in boxHeightArr){
        if(boxHeightArr[j] == minHeight){
            return j;
        }
    }
}

//4.加载图片
function loadImg(){
    var wrapper = document.getElementById("wrapper");
    var allBox = wrapper.getElementsByClassName("box");
    //最后一张图片距离顶部的位置
    var lastImgTop = allBox[allBox.length - 1].offsetTop;
    //滚动的top值
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //当前页面高度
    var pageTop = document.documentElement.clientHeight || document.body.clientHeight;
    if(scrollTop + pageTop > lastImgTop){
        return true;
    }
}