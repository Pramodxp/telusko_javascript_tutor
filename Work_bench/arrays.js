 
/* 
Arrays in JS
-- arrays are dynamic in nature in JS.
--arrays can have different data type of values.
--arrays in java scripts are indexed.
*/

var cars = ["BMW", "Volvo", "Audi", "Lamborgini"];
cars.push("mercedis");
cars.push(283)
document.write("<h1>"+cars+"</h1></br>");
document.write("<h1>"+cars[1]+"</h1>")

/*
loop over array 
 */
for(var i=0; i<cars.length;i++)
{
    document.write("<h1>"+cars[i]+"</h1>")
}

//creating array using new keyword
document.write("<h1>creating array using new keyword</h1></br>")
var arr1 = new Array("hai", "hello", "how", "are", "you");
arr1.push("mercedis");
arr1.push(12);
for(var i=0; i<arr1.length;i++)
{
    document.write("<h1>"+arr1[i]+"</h1>")
}

/* 
--arrays can be increased and decreased dynamically in JS
*/
