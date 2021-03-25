class Game {
  passwords = ['krowa', 'myszka', 'wydra', 'kurczak'];
  visibleLetter = [];
  constructor({ word, letter }) {
    this.word = word;
    this.letter = letter;
    this.currentPassword;
  }

  drawPassword() {
    this.word.innerHTML = '';
    for (const char of this.currentPassword) {
      if (char === ' ' || this.visibleLetter.includes(char)) {
        this.word.innerHTML += char;
      } else {
        this.word.innerHTML += '_';
      }
    }
  }

  checkLetter(letter) {
    if (this.currentPassword.includes(letter)) {
      this.visibleLetter.push(letter);
    }
  }

  getWord() {
    const randomWord = Math.floor(Math.random() * this.passwords.length);
    this.currentPassword = this.passwords[randomWord];
    console.log(this.currentPassword);
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

        this.checkLetter(label);
        console.log(this.visibleLetter);
        this.drawPassword();
      });
    }
  }
  start() {
    console.log('start game');
    this.getWord();
    this.getLetter();
    this.drawPassword();
  }
}

const game = new Game({ word: document.querySelector('div.word'), letter: document.querySelector('div.letter') });
game.start();
