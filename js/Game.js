class Game {
  passwords = ['krowa', 'myszka', 'wydra', 'kurczak'];
  visibleLetter = ['a'];
  constructor({ word, letter }) {
    this.word = word;
    this.letter = letter;
  }

  getWord() {
    const randomWord = Math.floor(Math.random() * this.passwords.length);
    this.word.innerHTML = this.passwords[randomWord];
    console.log('wylosowane słowo: ' + this.passwords[randomWord]);
    const randomPassword = this.passwords[randomWord];
  }

  getLetter() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const btn = document.createElement('button');
      btn.innerHTML = label;
      this.letter.appendChild(btn);

      btn.addEventListener('click', (e) => {
        e.target.disabled = true;
        console.log(label);
      });
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
