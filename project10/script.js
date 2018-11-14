function pick() {
  var computer = ["Rock", "Paper", "Scissors"];
  var userSelection = document.querySelector('#operator').value;
  var computerSelection = computer[Math.floor(Math.random()*computer.length)];
  var button = document.getElementById("button");
  var result;


  if (userSelection == "Rock" && computerSelection == "Rock") {
    result = "Try Again";
  } else if (userSelection == "Rock" && computerSelection == "Paper") {
    result = "You Lose" ;
  } else if (userSelection == "Rock" && computerSelection == "Scissors") {
    result = "You Win";
  } else if (userSelection == "Paper" && computerSelection == "Rock") {
    result = "You Win";
  } else if (userSelection == "Paper" && computerSelection == "Paper") {
    result = "Try Again";
  } else if (userSelection == "Paper" && computerSelection == "Scissors") {
    result = "You Lose";
  } else if (userSelection == "Scissors" && computerSelection == "Rock") {
    result = "You Lose";
  } else if (userSelection == "Scissors" && computerSelection == "Scissors") {
    result = "Try Again";
  } else if (userSelection == "Scissors" && computerSelection == "Paper") {
    result = "You Win";
  }
  document.querySelector("#results").innerHTML = result;
  document.querySelector("#placeholder").innerHTML = computerSelection;

}
