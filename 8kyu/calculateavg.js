//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions
//Write a function which calculates the average of the numbers in a given list.
function find_average(array) {
    return array.length>0 ?
      array.reduce((a,b)=>a+b)/array.length : 0
  }

  