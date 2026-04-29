import '../css/style.css';
import goblin from '../pic/goblin.png';

const game = document.getElementById('game');
const cells = [];
for(let i = 0; i < 16; i++) {
const cell = document.createElement('div');
cell.classList.add('cell');
game.appendChild(cell);
cells.push(cell);
}


const hero = document.createElement('img');
hero.src = goblin;
let currentIndex = 0;
cells[currentIndex].appendChild(hero);

setInterval(() => {
  let newIndex = currentIndex;

while (newIndex === currentIndex) {
  newIndex = Math.floor(Math.random() * 16);
}
currentIndex = newIndex;

  cells[currentIndex].appendChild(hero);
}, 1000);
