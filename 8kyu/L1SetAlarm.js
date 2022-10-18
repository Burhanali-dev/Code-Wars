//https://www.codewars.com/kata/568dcc3c7f12767a62000038/javascript

//Write a function named setAlarm which receives two parameters. The first parameter, employed, 
//is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

function setAlarm(employed, vacation){

    if (employed == true && vacation == true){
      return false
    }
    if (employed == false && vacation == true){
      return false
    } 
    if (employed == false && vacation == false){
      return false
    }
    if (employed == true && vacation == false){
      return true
    }
      
  }

//** */