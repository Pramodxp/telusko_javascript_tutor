/*
find the week by day by accepting the number
ex: 1-> sunday 2->monday    
*/

var num = 4;
//can accept numbers,strings,booleans
switch(num)
{
    case 1:
        document.writeln("<h1>sunday</h1>");
        break;
    case 2:
        document.writeln("<h1>monday</h1>");
        break;
    case 3:
        document.writeln("<h1>tuesday</h1>");
        break;
    case 4:
        document.writeln("<h1>wednsday</h1>");
        break;
    case 5:
        document.writeln("<h1>thursday</h1>");
        break; 
    case 6:
        document.writeln("<h1>friday</h1>");
        break;
    case 7:
        document.write("<h1>saturday</h1>");
        break;
    default:
        document.writeln("<h1>wrong day</h1>");
}

var name = "pramod"
// we can use string as well as we can concatinate the string in switch case
switch(name + " kumar")
{
    case "pramod kumar":
        document.writeln("<h1>this is my name</h1>");
        break;
    default:
        document.writeln("this is not your name");

}

var flag = true;

switch(flag){
case true:
    document.writeln("<h1>value is true</h1>");
    break;
case true:
    document.writeln("<h1>value is true</h1>");
    break;
}