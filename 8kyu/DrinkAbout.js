//https://www.codewars.com/kata/56170e844da7c6f647000063/javascript
//Make a function that receive age, and return what they drink.

function peopleWithAgeDrink(old) {

    if (old < 14){
      return 'drink toddy'
    }
    if (old < 18){
      return 'drink coke'
    }
    if(old < 21){
      return 'drink beer'
    }
    if (old >= 21){
      return 'drink whisky'
    }
  };

//** 