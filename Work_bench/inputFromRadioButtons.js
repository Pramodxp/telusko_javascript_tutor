function selectRadioBTN(){
   var rd1 = document.getElementById("rd1");
   var rd2 = document.getElementById("rd2");
   var rd3 = document.getElementById("rd3");
   var rd4 = document.getElementById("rd4");
   if(rd1.checked == true)
       alert("selected is "+rd1.value);
    else if(rd2.checked == true)
       alert("selected is "+rd2.value);
    else if(rd3.checked == true)
       alert("selected is "+rd3.value);
    else if(rd4.checked == true)
       alert("selected is "+rd4.value);
}
