import '../css/style.css';
import goblin from '../pic/goblin.png';

const game = document.getElementById('game');
const boardSize = 16;
const cells = [];
for (let i = 0; i < boardSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  game.appendChild(cell);
  cells.push(cell);
}

const hero = document.createElement('img');
hero.alt = 'goblin';
hero.src = goblin;
let currentIndex = 0;
cells[currentIndex].append(hero);

setInterval(() => {
  let newIndex = currentIndex;

  while (newIndex === currentIndex) {
    newIndex = Math.floor(Math.random() * boardSize);
  }
  currentIndex = newIndex;

  cells[currentIndex].append(hero);
}, 1000);
