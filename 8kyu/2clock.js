//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/javascript

//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    return h * 3600000 + m * 60000 + s * 1000
 }
 