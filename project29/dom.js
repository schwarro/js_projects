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
var itemList = document.querySelector('#items');

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
