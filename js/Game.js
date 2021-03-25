class Game {
  words = ['krowa', 'myszka', 'wydra', 'kurczak'];

  constructor({ word, letter }) {
    this.word = word;
    this.letter = letter;
  }

  getWord() {
    const randomWord = Math.floor(Math.random() * this.words.length);
    this.word.innerHTML = this.words[randomWord];
    return console.log(this.words[randomWord]);
  }

  getLetter() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const btn = document.createElement('button');
      btn.innerHTML = label;
      this.letter.appendChild(btn);
    }
  }
  start() {
    console.log('start game');
    this.getWord();
    this.getLetter();
  }
}

const game = new Game({ word: document.querySelector('div.word'), letter: document.querySelector('div.letter') });
game.start();
