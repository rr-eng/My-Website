//定义全局变量
//定义两个二维数组square和result存放16个方格状态
var square = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var result = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var score = 0;
var documentWidth = window.screen.availWidth / 2;
var squareContainerWidth = 0.92 * documentWidth;
var squareCellWidth = 0.14 * documentWidth;//方格定位变量
var squareCellSpace = 0.04 * documentWidth;//第一个方格的top值和left值

$(document).ready(function(){
    prepare();
    newGame();
});

//prepare函数  设置初始的界面样式
var prepare = function(){
    if(documentWidth > 500){
        squareContainerWidth = 500;
        squareCellWidth = 100;
        squareCellSpace = 20;
    }
    $("#square-container").css({
        "width" :  squareContainerWidth - 2 * squareCellSpace,
        "height" : squareContainerWidth - 2 * squareCellSpace,
        "padding" : squareCellSpace,
        "border-radius" : 0.02 * squareContainerWidth
    });
    $(".square_cell").css({
        "width" : squareCellWidth,
        "border-radius" : 0.02 * squareCellWidth
    });
};

//New Game
var newGame = function(){
    //初始化
    init();
    //在随机的两个格子里生成数字
    putOneNewNumber();
    putOneNewNumber();
};

//初始化init()
var init = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 0;j < 4;j++){
            var squareCell = $("#square-cell-" + i + "-" + j);
            squareCell.css("top",getPosTop(i,j));
            squareCell.css("left",getPosLeft(i,j));
        }
    }
    //将界面清空
    square = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    result = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    update();
    updateScore(0);
};

//update() 若非第一次进入游戏，生成newGame时，需要将之前状态清除
var update = function(){
    $(".number-cell").remove();
    for(var i = 0;i < 4;i++){
        for(var j = 0;j < 4;j++){
            $("#square-container").append('<div class="number-cell" id="number-cell-'+ i + '-' + j + '"></div>');
            var theNumberCell = $("#number-cell-" + i + "-" + j);
            if(square[i][j] == 0){
                theNumberCell.css({
                    'width' : '0px',
                    'height' : '0px',
                    'top' : getPosTop(i,j),
                    'left' : getPosLeft(i,j)
                });
            }
            //方格中存在数字，则显示数字
            else{
                showNumber(i,j,square[i][j]);
            }
            result[i][j] = 0;
        }
    }
};


//更新分数
var updateScore = function(){
    $("#score").text(score);
};


//putOneNewNumber() 在一个随机的位置放置一个随机数
var putOneNewNumber = function(){
    //需要先判断是否还有空位，如果没有空位,则返回false。
    if(noSpace(square)){
        return false;
    }
    //产生一个随机的位置
    //randomX和randomY两个变量可确定16个方格中坐标
    var randomX = 0,randomY = 0,randomTimes = 0;
    while(randomTimes < 50){
        randomX = parseInt(Math.floor(Math.random()*4));
        randomY = parseInt(Math.floor(Math.random()*4));
        if(square[randomX][randomY] == 0){
            break;
        }
        randomTimes++;
    }
    if(randomTimes >= 50){
        for(var i = 0;i < 4;i++){
            for(var j = 0;j < 4;j++){
                if(square[i][j] == 0){
                    randomX = i;
                    randomY = j;
                    break;
                }
            }
            if(square[randomX][randomY] == 0){
                break;
            }
        }
    }
    //随机产生一个2或4
    var randomNumber = Math.random() < 0.5 ? 2 : 4;
    square[randomX][randomY] = randomNumber;
    showNumber(randomX, randomY, randomNumber);
    return true;
};


//设置键盘监听事件，监听用户的键盘输入
$(document).keydown(function(event){
    event.preventDefault();//阻止默认事件
    switch(event.keyCode){
        case 37://用户按下左键
            if(canMoveLeft(square)){
                moveLeft();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        case 38://用户按下上键 
            if(canMoveUp(square)){
                moveUp();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        case 39://用户按下右键
            if(canMoveRight(square)){
                moveRight();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        case 40://用户按下下键
            if(canMoveDown(square)){
                moveDown();
                setTimeout("putOneNewNumber()",300);
                setTimeout("isGameOver()",300);
            }
            break;
        default:break;
    }
});
