

/*
**1->print multiplication table of 5
**2->print first 5 even numbers
**for loop is used when the number or iterations are known in advance
** entry controled loop
*/

/*
for(init;condition;increment/decrement){

}
*/
var x=1;

for(; x <= 10; x++){
    document.writeln("<h2>5 * " +(x)+" = "+(5*x)+"</h2>")
}

x=2;

//x=2 --> x=x+2
for(; x <= 10; x+=2){
    document.writeln("<h2>"+(x)+"<h2>");
}