/* 
**functions are one of the fundemental building blocks in javascript.
**functions are set of statements that performs a task or calculate a value.
**javascript functions are block of code that are used to perform a perticular task.
** javascripts functions are executed when something invokes it.
--> write a program to add 2 numbers and print the result.
*/

function add2numbers(a, b){//parameters
    // var a = 5;
    // var b = 6;
    var total = a+b;
    // document.writeln("total is = "+total);
    return total;
}

document.writeln("total is = "+add2numbers(10,20)); //function call