//get modal elements and buttons

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementById('closeBtn');


//for opening
modalBtn.addEventListener('click', openModal);

function openModal(){
  modal.style.display = 'block';
}

//for closing
closeBtn.addEventListener('click', closeModal);

function closeModal(){
  modal.style.display = 'none';
}

//outside Click
window.addEventListener('click', clickOutside);

function clickOutside(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
