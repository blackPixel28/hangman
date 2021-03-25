class Game {
  constructor({ word, letter }) {
    this.word = word;
    this.letter = letter;
  }

  getLetter(e) {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const btn = document.createElement('button');
      btn.innerHTML = label;
      this.letter.appendChild(btn);
    }
  }
  start() {
    console.log('start game');
    this.getLetter();
  }
}

const game = new Game({ word: document.querySelector('div.word'), letter: document.querySelector('div.letter') });
game.start();
