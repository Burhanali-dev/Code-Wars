//https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript
//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
//but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(" ");
    }