//https://www.codewars.com/kata/5513795bd3fafb56c200049e/javascript

//Create a function with two arguments that will return an array of the first n multiples of x.

//Assume both the given number and the number of times to count will be positive numbers greater than 0.

//Return the results as an array or list ( depending on language ).

// x = the number I am incresing by
// n = the number of times I am incresing x 
// add x the 

function countBy(x, n) {
    let z = [];
    let y=x
    
    for (let i=1;i<=n;i++){
      z.push(y)
      y = y+x
    }
    return z;
  }
  console.log(countBy(1,10))