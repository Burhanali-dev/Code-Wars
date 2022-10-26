//https://www.codewars.com/kata/52fba66badcd10859f00097e/javascript
//Your task is to write a function that takes a string and 
//return a new string with all vowels removed.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi,'')
  }