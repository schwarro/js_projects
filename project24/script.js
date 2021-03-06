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

//var, let and const
function start(){
  for(var i = 0; i < 5; i++){
    if (true) {
      let color = 'red';
    }
  }
  console.log(color);
}
start();

var color = 'blue';
let age = 30;

console.log('break');

//array.reduce
const numbers = [1, 2, 3, 4];

let sum = 0;
for (let n of numbers){
  sum += n;
}
console.log(sum);

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

const totals = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);
console.log(totals);

//array.filter
//value, index, array
const filtered = numbers.filter(n  => n  >= 3);
console.log(filtered);

//array.map
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);
const item = filtered.map(n => {
  const obj = {value: n };
  return obj;
});
console.log(item);

//this
//method -> obj
// const video = {
//   title: 'a',
//   play() {
//     console.log(this);
//   }
// };
//
// video.stop = function() {
//   console.log(this);
// };
//
// video.play();

//function -> global
const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('a');
const c = new Video('d');
