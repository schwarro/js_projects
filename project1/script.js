const colorBTN = document.querySelector('.colorBTN');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','blue'];

colorBTN.addEventListener('click',changeColor);

function changeColor (){
  // bodyBcg.style.backgroundColor = colors[0];
  let random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.background = colors[random];
}
