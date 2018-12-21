//Examine the document object
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);

//////////////////////////////////////////////////


//SELECTORS//

// getelementbyid
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

// getelemntsbyclassname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = 'salmon';
// };

//Get Element by Tag Name
// let li = document.getElementsByTagName('li');
// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = 'green';
// }
// console.log(li);

//QuerySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px grey';
//
// var input = document.querySelector('input');
// input.value = "Hello World";
//
// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";
//
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

//QuerySelectorAll
// let titles = document.querySelectorAll('.title');
// titles[0].textContent = 'Hello';
//
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = 'blue';
// }



//////////////////////////////////////////////

// Traversing the DOM
// var itemList = document.querySelector('#items');

// parent node property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parent element property
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// child node property
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// first child
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// last child
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color= 'green';

// create Element

// create a div
// var newDiv = document.createElement('div');
//
// newDiv.className = 'helloClass';
// newDiv.id = 'helloId';
// newDiv.setAttribute('title', 'Hello Attribute');
//
// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);
//
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
//
// newDiv.style.fontSize = '30px';
//
// container.insertBefore(newDiv, h1);

//////////////////////////////////////////////

//Events//

// var button = document.getElementById('button').addEventListener('click', function(){
//   console.log(123);
// })

// var button = document.getElementById('button');
// var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);


// function buttonClick(e){
  // console.log('Button clicked');
  // document.getElementById('header-title').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  // var output = document.getElementById('output');
  // output.innerHTML = '<h3>'+e.target.id+'</h3';
  // console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.shiftKey);
// }

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// var select = document.querySelector('select');
//
// select.addEventListener('change', runEvent);

// form.addEventListener('submit', runEvent);
//
// function runEvent(e){
//   e.preventDefault();
//   console.log('EVENT TYPE: '+e.type);
//
//   console.log(e.target.value);

  // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

  // box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',50)';
// }

/////////////////////////////////////////////////////////////

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  //get input value
  var newItem =document.getElementById('item').value;

  //create new li Element
  var li = document.createElement('li');
  //add class
  li.className = 'list-group-item';
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create del button Element
  var deleteBtn = document.createElement('button');

  //add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //append button to li
  li.appendChild(deleteBtn);

  //append li to list
  itemList.appendChild(li);
}

//remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e){
  //convert to lower case
  var text = e.target.value.toLowerCase();
  //get list
  var items = itemList.getElementsByTagName('li');
  //convert array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
