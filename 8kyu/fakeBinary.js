//https://www.codewars.com/kata/57eae65a4321032ce000002d/javascript
//Given a string of digits, you should replace any digit below 5 with '0' 
//and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    return x
    .replace(/[1234]/g,'0')
    .replace(/[56789]/g,'1');
  }
  