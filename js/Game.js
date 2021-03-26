class Game {
  passwords = [
    {
      text: 'krowa',
      tips: 'daję mleko',
    },
    {
      text: 'myszka',
      tips: 'zjadam ser',
    },
    {
      text: 'rybka',
      tips: 'pływam w akwarium',
    },
    {
      text: 'wydra',
      tips: 'pływam na plecech',
    },
  ];
  currentPassword;
  visibleLetter = [];
  life = 3;
  time = 500;

  constructor({ word, letter, stats, wins, category }) {
    this.word = word;
    this.letter = letter;
    this.stats = stats;
    this.wins = wins;
    this.category = category;
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
    } else {
      this.life--;
    }
  }

  getWord() {
    const randomWord = Math.floor(Math.random() * this.passwords.length);
    this.currentPassword = this.passwords[randomWord].text;
    this.category.innerHTML = this.passwords[randomWord].tips;
    // console.log(this.currentPassword);
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
        this.winner();
      });
    }
  }
  createReloadBtn() {
    const btn = document.createElement('button');
    const i = document.createElement('i');
    btn.textContent = 'reload ';
    i.className = 'fas fa-redo';
    btn.appendChild(i);

    this.wins.appendChild(btn);
    btn.addEventListener('click', () => {
      window.location.reload();
    });
  }

  winner() {
    this.currentInnerHtml = this.word.innerHTML;
    console.log(this.currentInnerHtml);

    if (this.currentInnerHtml.includes('_')) {
      if (this.life <= 0) {
        console.log('you lost');
        setTimeout(() => {
          this.wins.style.color = 'crimson';
          this.wins.style.visibility = 'visible';
          this.wins.innerHTML = 'przegrałeś';
          this.createReloadBtn();
        }, this.time);
      }
      this.stats.innerHTML = this.life;
    } else {
      console.log('win');
      setTimeout(() => {
        this.wins.style.color = 'green';
        this.wins.style.visibility = 'visible';
        this.wins.innerHTML = 'wygrałeś';
        this.createReloadBtn();
      }, this.time);
    }
  }

  start() {
    console.log('start game');
    this.getWord();
    this.getLetter();
    this.drawPassword();

    this.stats.innerHTML = this.life;
  }
}

const game = new Game({
  word: document.querySelector('div.word'),
  letter: document.querySelector('div.letter'),
  stats: document.querySelector('div.stats span'),
  wins: document.querySelector('div.winner'),
  category: document.querySelector('div.category span'),
});
game.start();
