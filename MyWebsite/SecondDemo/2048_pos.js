//初始化时获取每个方格的top值和left值
var getPosTop = function(i,j){
    return squareCellSpace + i * (squareCellWidth + squareCellSpace);
};
var getPosLeft = function(i,j){
    return squareCellSpace + j * (squareCellWidth + squareCellSpace);
};

//showNumber() 出现数字
var showNumber = function(x,y,number){
    var numberCell = $("#number-cell-" + x + "-" + y);
    numberCell.css({
        'width' : squareCellWidth,
        'height' : squareCellWidth,
        'top' : getPosTop(x,y),
        'left' : getPosLeft(x,y),
        'line-height' : squareCellWidth + "px",
        'font-size' : 50 + "px",
        'background-color' : getNumberBackgroundColor(number),
        'color' : getNumberColor(number)
    });
    if(number >= 1024){
        number.css("font-size","40px");
    }
    numberCell.text(number);
};

//getNumberBackgroundColor() 得到数字方格的背景色
var getNumberBackgroundColor = function(number){
    var color = ["","#eff0c8","#efe4da","#f2bc79",
        "#f59563","#f67c5f","#f65e3b",
        "#edcf72","#98cd01","#33b5e5",
        "#0f98cd","#ab56cd","#983451"];
    var x = 0; for(x=0; number-1>0; ++x,number/=2);
    return color[x];
};


//getNumberColor()  得到数字的颜色
var getNumberColor = function(number){
    if(number <= 4){
        return "#666";
    }
    else{
        return "#fff";
    }
};

//判断当前情况是否还有空位,有空位返回false,没有空位则返回true。
var noSpace = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 0;j < 4;j++){
            if(square[i][j] == 0){
                return false;
            }
        }
    }
    return true;
};

//判断游戏是否结束，如果没有空位并且不能移动，则游戏结束。
var isGameOver = function(){
    if(noSpace(square) && !canMove(square)){
        gameOver();
    }
};

//游戏结束
var gameOver = function(){
    alert("Game Over!");
};