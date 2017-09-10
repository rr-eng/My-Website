/**
 * Created by Asus on 2017/9/10.
 */

/*背景音乐播放*/

window.onload = function(){
    var audio = document.getElementById("audio");
    var toggle = document.getElementById("music");
    var boolean = true;
    //页面加载时自动播放
    audio.play();
    toggle.onclick = function(){
        if(boolean == true){
            audio.pause();
            toggle.style.animation = "none";
            boolean = false;
        }
        else if(boolean == false){
            audio.play();
            toggle.style.animation = "Music 2s infinite linear";
            boolean = true;
        }
    };
};