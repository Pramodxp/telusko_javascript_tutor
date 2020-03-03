/* 
--scope of varibles in java script.
--local and global
-- depending up on where you create the variable
*/

//in java script global variables can be created in side the function, when they are not using var for declaring they are global variables.

function caller(){
    var1 = "pramod"; //this becomes a global variale by default, even it is not declared out side, if it is declared  with out "var" keyword it is global

    var b =5; //local variable, which is declared inside the function, is available only inside the finction we cant accessout side the function 
    document.writeln("<h1>"+b+"</h1>");

}

var a= 10; //global variable , are declared at the document level and available all over the document.

caller();
document.writeln("<h1>"+a+"</h1>");
document.writeln("<h1>"+var1+"</h1>");


