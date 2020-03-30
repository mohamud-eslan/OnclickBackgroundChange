const colorBtn = document.querySelector('.colorBtn');
const bodybcg = document.querySelector('body');

const colors = ['blue', 'green', 'red', 'yellow'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
      bodybcg.style.backgroundColor = colors['2'];
      let random = Math.floor(Math.random()*colors.length)
      bodybcg.style.backgroundColor = colors[random];
}