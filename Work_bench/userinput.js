function printAlertName(){
    var str = document.getElementById("txt1").value;
    var str1 = document.getElementById("pwd").value;
    if(str == pwd){
        alert("the user name and pasword matches");
    }else{
    alert("the entered credentials are not proper");
    }
}