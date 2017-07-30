window.onload = function(){
    //1.全局变量
    var timer = null;
    //1.检验用户名
    function checkUserName(){
        var userName = document.form.userName;
        var userName_Info = document.getElementById("userName_Info");
        var reg = new RegExp("^[a-zA-Z0-9]{4,16}$");
        if(reg.test(userName.value) == false){
            userName_Info.innerHTML = "用户名的长度为4--16个字符，且只能为字母，数字和下划线";
            // timer = setInterval(function(){
            //     userName_Info.innerHTML = "";
            // },2000);
            userName.focus();
            return false;
        }
        userName_Info.innerHTML = "OK";
        return true;
    }
    //2.检验密码
    function checkPassword1(){
        var password1 = document.form.password1;
        var password1_Info = document.getElementById("password1_Info");
        var reg = new RegExp("^\\w{6,12}$");
        if(reg.test(password1.value) == false){
            password1_Info.innerHTML = "密码长度为6--12个字符";
            // timer = setInterval(function(){
            //     password1_Info.innerHTML = "";
            // },3000);
            password1.focus();
            return false;
        }
        password1_Info.innerHTML = "OK";
        return true;
    }
    //3.再次确认密码
    function checkPassword2(){
        var password1 = document.form.password1;
        var password2 = document.form.password2;
        var password2_Info = document.getElementById("password2_Info");
        if(password2.value == ""){
            password2_Info.innerHTML = "请输入确认密码！";
            password2.focus();
            return false;
        }
        else if(password1.value != password2.value){
            password2_Info.innerHTML = "两次输入密码不一致！";
            password2.focus();
            return false;
        }
        else{
            password2_Info.innerHTML = "OK";
            return true;
        }
    }
    //4出生日期下拉列表三级级联
    var year = document.form.select_year;
    var month = document.form.select_month;
    var day = document.form.select_day;
    var date = new Date();
    //年
    for(var i = 1980;i < date.getFullYear();i++){
        var newOptionYear = new Option(i,i);
        year.appendChild(newOptionYear);
    }
    //月
    for(var j = 1;j < 13;j++){
        var newOptionMonth  = new Option(j,j);
        month.appendChild(newOptionMonth);
    }
    //日
    for(var k = 1;k <= 31;k++){
        var newOptionDay = new Option(k,k);
        day.appendChild(newOptionDay);
    }
    function select_change(){
        var days1 = [31,28,31,30,31,30,31,31,30,31,30,31];
        var days2 = [31,29,31,30,31,30,31,31,30,31,30,31];
        var days = [];
        if((year.value%4 == 0 && year.value%100 != 0) || (year.value%400 == 0)){
            days = days2;
        }
        else{
            days = days1;
        }
        for(var k = 1;k <= days[month.value - 1];k++){
            var newOptionDay = new Option(k,k);
            day.appendChild(newOptionDay);
        }
    }
    year.onchange = function(){
        select_change();
    };
    month.onchange = function(){
        select_change();
    };
    //5.检验身份证号
    function checkIdNumber(){
        var idNumber = document.form.idNumber;
        var idNumber_Info = document.getElementById("idNumber_Info");
        var reg = /^(\d{15})$ |^(\d{17}[0-9])$/;
        if(reg.test(idNumber.value) == false){
            idNumber_Info.innerHTML = "身份证格式不正确！";
            idNumber.focus();
            return false;
        }
        idNumber_Info.innerHTML = "OK";
        return true;
    }
    //6.检验手机号码
    function checkPhoneNumber(){
        var phoneNumber = document.form.phoneNumber;
        var phoneNumber_Info = document.getElementById("phoneNumber_Info");
        var reg = /^1[34578](\d{9}$)/;
        if(reg.test(phoneNumber.value) == false){
            phoneNumber_Info.innerHTML = "手机号码格式不正确！";
            phoneNumber.focus();
            return false;
        }
        phoneNumber_Info.innerHTML = "OK";
        return true;
    }
    //7.检验电子邮箱
    function checkEmail(){
        var email = document.form.email;
        var email_Info = document.getElementById("email_Info");
        var reg = /^\w+@(\w+\.)+\w+$/;
        if(reg.test(email.value) == false){
            email_Info.innerHTML = "电子邮箱格式不正确！";
            email.focus();
            return false;
        }
        email_Info.innerHTML = "OK";
        return true;
    }
    //8.检验复选按钮
    function checkAgree(){
        var agreeBtn = document.form.agreeBtn;
        var agreeBtn_Info = document.getElementById("agreeBtn_Info");
        if(agreeBtn_Info.checked){
            agreeBtn_Info.innerHTML = "OK";
        }
        else{
            agreeBtn_Info.innerHTML = "请先阅读注册条款！";
        }
    }
    //表单提交
    var btn_submit = document.getElementById("submit");
    btn_submit.onclick = function(){
        checkUserName();
        checkPassword1();
        checkPassword2();
        checkIdNumber();
        checkPhoneNumber();
        checkEmail();
        checkAgree();
    };
};
