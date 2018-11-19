console.log('hello');

let sliderImages = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#arrow-right');
let arrowLeft = document.querySelector('#arrow-left');
let current = 0;


// Will clear all images
function reset() {
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

// Starts Slider
function startSlide(){
  reset();
  sliderImages[0].style.display = 'block';
}

//Show Previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

//Show Next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current ++;
}

//Left Arrow Click
arrowLeft.addEventListener('click', function() {
  if(current === 0){
    current = sliderImages.length;
  }
  slideLeft();
});

//Right Arrow Click
arrowRight.addEventListener('click', function() {
  if(current === sliderImages.length - 1){
    current = -1;
  }
  slideRight();
});

startSlide();
