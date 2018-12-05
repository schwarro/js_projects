var questions = [
  {
    prompt: "What colour are apples?\n(a) Red/Green\n(b) Purple\n(c) Orange",
    answer: "a"
  },
  {
    prompt: "What colour are bananas?\n(a) Teal\n(b) Purple\n(c) Yellow",
    answer: "c"
  },
  {
    prompt: "What colour are oranges?\n(a) Orange\n(b) Red\n(c) Green",
    answer: "a"
  }
]

var score = 0;

for(var i=0; i < questions.length; i++) {
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
    score++;
    alert("Correct");
  } else {
    alert("Incorrect");
  }
}
alert("You got " + score + "/" + questions.length);
