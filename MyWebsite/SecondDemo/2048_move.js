//判断当前情况是否能向左移动
var canMoveLeft = function(square){
    for(var i = 0;i < 4;i++){
        for(var j = 1;j < 4;j++){
            if(square[i][j] != 0 && (square[i][j-1] == 0 || square[i][j-1] == square[i][j])){
                return true;
            }
        }
    }
    return false;
};

//向左移动
var moveLeft = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 1;j < 4;j++){
            if(square[i][j] != 0){
                for(var k = 0;k < j;k++){
                    if(square[i][k] == 0 && noSquareHorizontal(i,j,k,square)){
                        //move
                        moveAnimate(i,j,i,k);
                        //add
                        square[i][k] = square[i][j];
                        square[i][j] = 0;
                        continue;
                    }
                    else if(square[i][k] == square[i][j] && noSquareHorizontal(i,j,k,square) && result[i][k] == 0){
                        //move
                        moveAnimate(i,j,i,k);
                        //add
                        square[i][k] += square[i][j];
                        square[i][j] = 0;
                        //add score
                        score += square[i][k];
                        updateScore(score);
                        
                        result[i][k] = 1;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("update()",200);
};

//判断当前情况是否能向上移动
var canMoveUp = function(square){
    for(var j = 0;j < 4;j++){
        for(var i = 1;i < 4;i++){
            if(square[i][j] != 0 && (square[i-1][j] == 0 || square[i-1][j] == square[i][j])){
                return true;
            }
        }
    }
    return false;
};

//向上移动
var moveUp = function(){
    for(var j = 0;j < 4;j++){
        for(var i = 1;i < 4;i++){
            if(square[i][j] != 0){
                for(var k = 0;k < i;k++){
                    if(square[k][j] == 0 && noSquareVertical(j,i,k,square)){
                        //move
                        moveAnimate(i,j,k,j);
                        square[k][j] = square[i][j];
                        square[i][j] = 0;
                        continue;
                    }
                    else if(square[k][j] == square[i][j] && noSquareVertical(j,i,k,square) && result[k][j] == 0){
                        //move
                        moveAnimate(i,j,k,j);
                        //add
                        square[k][j] += square[i][j];
                        square[i][j] = 0;
                        //add Score
                        score += square[k][j];
                        updateScore(score);

                        result[k][j] = 1;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("update()",200);
};

//判断当前情况是否能向右移动
var canMoveRight = function(square){
    for(var i = 0;i < 4;i++){
        for(var j = 2;j >= 0;j--){
            if(square[i][j] != 0 && (square[i][j+1] == 0 || square[i][j+1] == square[i][j])){
                return true;
            }
        }
    }
    return false;
};

//向右移动
var moveRight = function(){
    for(var i = 0;i < 4;i++){
        for(var j = 2;j >= 0;j--){
            if(square[i][j] != 0){
                for(var k = 3;k > j;k--){
                    if(square[i][k] == 0 && noSquareHorizontal(i,k,j,square)){
                        //move
                        moveAnimate(i,j,i,k);
                        square[i][k] = square[i][j];
                        square[i][j] = 0;
                        continue;
                    }
                    else if(square[i][k] == square[i][j] && noSquareHorizontal(i,k,j,square) && result[i][k] == 0){
                        //move
                        moveAnimate(i,j,i,k);
                        //add
                        square[i][k] += square[i][j];
                        square[i][j] = 0;
                        //add score
                        score += square[i][k];
                        updateScore(score);

                        result[i][k] = 1;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("update()",200);
};


//判断当前情况是否能向下移动
var canMoveDown = function(square){
    for(var j = 0;j < 4;j++){
        for(var i = 2;i >= 0;i--){
            if(square[i][j] != 0 && (square[i+1][j] == 0 || square[i+1][j] == square[i][j])){
                return true;
            }
        }
    }
    return false;
};

//向下移动
var moveDown = function(){
    for(var j = 0;j < 4;j++){
        for(var i = 2;i >= 0;i--){
            if(square[i][j] != 0){
                for(var k = 3;k > i;k--){
                    if(square[k][j] == 0 && noSquareVertical(j,k,i,square)){
                        //move
                        moveAnimate(i,j,k,j);
                        square[k][j] = square[i][j];
                        square[i][j] = 0;
                        continue;
                    }
                    else if(square[k][j] == square[i][j] && noSquareVertical(j,k,i,square) && result[k][j] == 0){
                        //move
                        moveAnimate(i,j,k,j);
                        //add
                        square[k][j] += square[i][j];
                        square[i][j] = 0;
                        //add Score
                        score += square[i][k];
                        updateScore(score);

                        result[k][j] = 1;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("update()",200);
};

//判断当前情况是否能向四个方向移动，
var canMove = function(square){
    if(canMoveLeft(square) || canMoveUp(square) || canMoveRight(square) || canMoveDown(square)){
        return true;
    }
    return false;
};

//判断某一行中的某点到另一点之间是否有空格
var noSquareHorizontal = function(row,col1,col2,sqaure){
    for(var col = col2 + 1;col < col1;col++){
        if(square[row][col] != 0){
            return false;
        }
    }
    return true;
};

//判断某一列中的某点到另一点之间是否有空格
var noSquareVertical = function(col,row1,row2,square){
    for(var row = row2 + 1;row < row1;row++){
        if(square[row][col] != 0){
            return false;
        }
    }
    return true;
};

//移动函数 (fx,fy)位初始位置， (tx,ty)为移动后的位置
var moveAnimate = function(fx,fy,tx,ty){
    var numberCell = $("#number-cell-" + fx + "-" + fy);
    numberCell.animate({
        top : getPosTop(tx,ty),
        left : getPosLeft(tx,ty)
    },200);
};


