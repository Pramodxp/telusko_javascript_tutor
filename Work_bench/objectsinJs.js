/* 
--literal way of creating object in JS.----->similar to ananomus inner class in JAVA.
*/
// var car = { // this denotes the car variable is an object.
//     car_brand :"Tesla",
//     car_model :"model 3",
//     price : 35000,

//     //creating a function for reuse.
//     teslaAutoPoilet : function()
//     {
//        return "<h1>this car is a auto poilet</h1>";
//     }

// }


//we can use object and call the functions and use the variables.

// document.writeln("<h1>"+car.car_brand+"</h1>");
// document.writeln("<h1>"+car.teslaAutoPoilet()+"</h1>");


/* 
2 - creating templete  using  constructor function.
*/

function car(car_brand, car_model, price){
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;

    this.teslaAutoPoilet = function(){
        return "<h1>this car is a auto poilet</h1></br>"; 
    }
}

//if we want to add any thing extra for the car object like variables. can be added out side
    car.fueltype="petrol";

    //we can delete the property using the delete keyword
    delete car.price;


// creating objects of cars using 

var car1 = new car("hundai","2019",2000010);
var car2 = new car("Omini", "1996", 20000);

document.writeln(car1.car_brand+"</br>");
document.writeln(car1.car_model+"</br>");
document.writeln(car1.price+"</br>");
document.writeln(car.fueltype+"</br>");

car1.teslaAutoPoilet();

//car 2 details

document.writeln(car2.car_brand+"</br>");
document.writeln(car2.car_model+"</br>");
document.writeln(car2.price+"</br>");

car2.teslaAutoPoilet();