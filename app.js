// 5 phrases in an array
// random phrase is chosen
// 5 wrong guesses "lose" guess right wins
// Button added to lose and win overlay to reset the game

// Variables

const phrase = document.getElementById('phrase');
const qwerty = document.getElementById('qwerty');
const buttonReset = document.querySelector('.btn__reset');
let missed = 0;
const phrases = 
['got your back',
'how are you',
'let it go',
'never give up',
'good vibes only'];
let randomPhrase = '';
const ul = document.getElementById('phrase');
const hearts = document.querySelectorAll('img');
const letter = document.getElementsByClassName('letter');
const overlay = document.getElementById('overlay');
const h2 = document.querySelector('.title');
const img = document.querySelectorAll('IMG');


// Functions 


function getRandomPhrase () {
    const number = phrases.length;
    const randomNumber = Math.floor(Math.random() * number);
    randomPhrase = phrases[randomNumber];
    return randomPhrase;
}



function addPhraseToDisplay () {
    for (let i = 0; i < randomPhrase.length; i++) {
        const letter = randomPhrase.charAt(i); 
        const li = document.createElement('li');
        if (letter !== ' ') {
            li.textContent = letter;
            li.className = 'letter';
            ul.appendChild(li);

        } else {
            li.textContent = letter;
            li.className = 'space';
            ul.appendChild(li);

        }
    };
}

function checkWin () {
    const hidden = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    if (hidden.length === show.length) {
        h2.innerHTML = 'YOU WIN!!'
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        buttonReset.textContent = 'reset game';
        resetGame();

    }

}

buttonReset.addEventListener ('click', (e) => {
    getRandomPhrase();
    addPhraseToDisplay();
    overlay.style.display = "none";
    overlay.classList.remove('win');
    overlay.classList.remove('lose');

});

function checkLetter (button) {
    let match = null;
    for (i = 0; i < letter.length; i++) {
        if (letter[i].textContent === button) {
        match = button;
        letter[i].classList.add('show')
        }
        };
    return match;
}

function checkLoss () {
    if (missed > 4) {
        h2.innerHTML = 'GAME OVER'
        overlay.classList.add('lose');
        overlay.style.display = 'flex';
        buttonReset.textContent = 'play again';
        resetGame();
    };
}

function resetGame () {
    ul.innerHTML = '';
    const button = document.querySelectorAll('button');
    for (i = 0; i < button.length; i++) {
        button[i].classList.remove('chosen');
    }
    missed = 0;
    for (i= 0; i<hearts.length; i++) {
        img[i].src = 'images/liveHeart.png';
    }
}

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON' && e.target.className !== 'chosen') {
        const match = checkLetter(e.target.textContent);
        e.target.classList.add('chosen');
        checkWin();

        if (match === null) {
            hearts[missed].src = 'images/lostHeart.png';
            missed ++;;
            checkLoss();
        }
    }
});

