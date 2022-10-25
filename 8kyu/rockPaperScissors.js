//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript

//Let's play! You have to return which player won! In case of a draw return Draw!.



const rps = (p1, p2) => {
    if (p1==="scissors"&& p2=== "paper"){
      return "Player 1 won!"
    }
    else if (p1==="scissors"&& p2 === "rock"){
      return "Player 2 won!"
    }
    else if (p1==="scissors"&& p2 === "scissors"){
      return "Draw!"
    }
    if (p1==="rock"&& p2=== "paper"){
      return "Player 2 won!"
    }
    else if (p1==="rock"&& p2 === "rock"){
      return "Draw!"
    }
    else if (p1==="rock"&& p2 === "scissors"){
      return "Player 1 won!"
    }
      if (p1==="paper"&& p2=== "paper"){
      return "Draw!"
    }
    else if (p1==="paper"&& p2 === "rock"){
      return "Player 1 won!"
    }
    else if (p1==="paper"&& p2 === "scissors"){
      return "Player 2 won!"
    }
    
  };