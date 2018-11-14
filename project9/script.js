const celcius = document.querySelector("#celcius > input");
const fahrenheit = document.querySelector("#fahrenheit > input");
const kelvin = document.querySelector("#kelvin > input");

function roundNum(num){
  return Math.round(num*100)/100;
}

celcius.addEventListener('input', function(){
  const cTemp = parseFloat(celcius.value);
  const fTemp = (cTemp * (9/5)) + 32;
  const kTemp = cTemp + 273.15
  fahrenheit.value = roundNum(fTemp);
  kelvin.value = roundNum(kTemp);
});

fahrenheit.addEventListener('input', function(){
  const fTemp = parseFloat(fahrenheit.value);
  const cTemp = (fTemp - 32) * (5/9);
  const kTemp = cTemp + 273.15;
  celcius.value = roundNum(cTemp);
  kelvin.value = roundNum(kTemp);
});

kelvin.addEventListener('input', function(){
  const kTemp = parseFloat(kelvin.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (cTemp * (9/5)) + 32;
  celcius.value = roundNum(cTemp);
  fahrenheit.value = roundNum(fTemp);
});
