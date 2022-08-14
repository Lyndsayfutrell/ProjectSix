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
const randomPhrase = getRandomPhrase();
const ul = document.getElementById('phrase');




// Functions 

// function createLI(text) {
//     function createElement(elementName, property, value) {
//       const element = document.createElement(elementName);  
//       element[property] = value; 
//       return element;
//     }
// }

// function appendToUL(elementName, property, value) {
//     const element = createElement(elementName, property, value);     
//     ul.appendChild(element); 
//     return element;
//   }

function getRandomPhrase () {
    const number = phrases.length;
    const randomNumber = Math.floor(Math.random() * number);
    const randomPhrase = phrases[randomNumber];
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

buttonReset.addEventListener ('click', (e) => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = "none";
    getRandomPhrase();
    addPhraseToDisplay();
});




