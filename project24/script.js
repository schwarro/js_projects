// Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

//if else
// if (condition) {
//   statement
// }
// else if (another condition) {
//   statement
// }
// else {  ===> if none of the conditions are true
//   statement
// }

let hour = 19

if (hour >= 6 && hour < 12) {
  console.log('Good Morning!');
} else if (hour >= 12 && hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Evening!');
}

//loops
//for loop
for (let x = 1; x <= 5; x++) {
  if (x % 2 !== 0) console.log(x);
}

console.log('break');

for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}