//https://www.codewars.com/kata/5601409514fc93442500010b/javascript
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!


function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }