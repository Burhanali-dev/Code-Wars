//https://www.codewars.com/kata/5861d28f124b35723e00005e
//Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump;
  };