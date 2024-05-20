let randomnumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const user_input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playgame = true;
let numberguess = 0;

if (playgame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(user_input.value);
        console.log(guess);
        validateguess(guess);
    })
}

function validateguess(guess){
    if (NaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1) {
        alert('please enter a number greater than zero');
    }else if(guess>100) {
        alert('please enter a number less than 100');
    }
    else {
        if (numberguess > 10) {
            displaymessage(`Game Over. Random number was ${randomnumber}`);
            endgame();
        }else{
            displayguess(guess);
            checkguess(guess);
        }
    }

}

function checkguess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
      } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
      } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}
function displayguess(guess) {
    user_input.value = '';
    guessSlot.innerHTML += `${guess}`;
    numberguess ++;
    remaining.innerHTML += `${10-numberguess}, `;
}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
    user_input.value = '';
    user_input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newgame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    numberguess = 0;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${10 - numberguess} `;
    user_input.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });

}