//create some variable references to the important elements on the page:
const playerHand = document.getElementById('playerHand');
const computerHand = document.getElementById('computerHand');
const resultinfo = document.getElementById('result');
const scorePlaceholder = document.getElementById('scorePlaceholder');
let computerScore = 0;
let playerScore = 0;

function game(playerChoice) {

    const randomResult = Math.random();
    const flooredResult = Math.floor(randomResult * 3);

    playerHand.classList.add('shakeIt');
    computerHand.classList.add('shakeIt');
    playerHand.src = 'rock.png';
    computerHand.src = 'rock.png';
    const computerChoiceArray = ['rock', 'paper', 'scissors'];
    const selectedComputerHand = computerChoiceArray[flooredResult];

    computerHand.addEventListener('animationend', function reveal() {
        computerHand.removeEventListener('animationend', reveal)

        playerHand.src = playerChoice + '.png';
        computerHand.src = selectedComputerHand + '.png';

        if (playerChoice == selectedComputerHand) {
            resultinfo.textContent = 'This round was a draw';
        } else if (
            (playerChoice == 'rock' && selectedComputerHand == 'scissors') ||
            (playerChoice == 'scissors' && selectedComputerHand == 'paper') ||
            (playerChoice == 'paper' && selectedComputerHand == 'rock')
        ) {
            resultinfo.textContent = 'You win!';
            playerScore++;
        } else {
            resultinfo.textContent = 'Computer wins';
            computerScore++;
        }

        playerHand.classList.remove('shakeIt');
        computerHand.classList.remove('shakeIt');

        scorePlaceholder.textContent = 'Player ' +playerScore+ ' - ' + computerScore+ ' Computer';
    })

}