function login(){
    var text=document.getElementById("name");
    var password=document.getElementById("password");
    var button=document.getElementById("button");
    if(!(text.value=="1301550100"&&password.value=="1996zy1996")){
        alert("请输入正确的用户名和密码");
    }
    else{
        window.open("../../HTML/Homework/Myself.html");
    }
}