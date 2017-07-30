/**
 * Created by Katty on 2017/7/26.*
 **/

//1.用户点击导航About Me时执行的函数
function aboutMe(){
    alert("该部分功能尚未完成！");
}

//2.page3.html用户提交留言部分
function submitMessage(){
    var messageTxt = document.getElementById("message");
    var submitBtn = document.getElementById("button");
    submitBtn.onclick = function(){
        if(messageTxt.value == ""){
            alert("当前留言信息为空，请输入您的留言信息！");
        }
        else{
            alert("你的留言信息已提交！");
        }
        messageTxt.value = "";
    }
}
submitMessage();