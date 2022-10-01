//https://www.codewars.com/kata/5715eaedb436cf5606000381
//Sum of positive

function positiveSum(arr) {
    return arr.filter(item => item > 0).reduce((a,b)=> a+b,0)
  }