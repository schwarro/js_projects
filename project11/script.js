const grams = document.querySelector("#grams > input");
const ounces = document.querySelector("#ounces > input")

function roundNum(num){
  return Math.round(num*100)/100;
}

grams.addEventListener('input', function(){
  const gWeight = parseFloat(grams.value);
  const ozWeight = gWeight * 0.035274;
  ounces.value = roundNum(ozWeight);
});

ounces.addEventListener('input', function(){
  const ozWeight = parseFloat(ounces.value);
  const gWeight = ozWeight * 28.35;
  grams.value = roundNum(gWeight);
})
