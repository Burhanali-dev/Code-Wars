//https://www.codewars.com/kata/582cb0224e56e068d800003c

// He drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return 
//the number of litres Nathan will drink, 
//rounded to the smallest value.

function litres(time) {
    let litres = .5
    return Math.floor( litres *time);
  }
  //**
