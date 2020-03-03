document.write("<h1>If Else Statements control statements</h1>");
var num = 9;

//even or odd
if(num%2 == 0){
    document.write("the number is even")
}else{
    document.write("the number is Odd")
}

//positive or negetive
if(num > 0){
    document.write("</br></br>the number is positive");
}else if(num < 0){
    document.write("the number is negative");
}else{
    document.write("the number is 0");
}


//positive or even

if(num > 0){
    document.write("</br></br>the number is positive");
    if(num%2 == 0){
        document.write("the number is even")
    }else{
        document.write("the number is Odd")
    }
}else if(num < 0){
    document.write("the number is negative");
}else{
    document.write("the number is 0");
}