let counter = 0;
let secretNumber = 0;
let secretNumberList = [];
let maxNumber = 10

function addTextQuery(tag, text) {
    let elementText = document.querySelector(tag);
    elementText.innerHTML = text;
}

function getSecretNumber() {
    secretNumber = Math.floor(Math.random()*maxNumber+1);

    if (secretNumberList.length == maxNumber) {
        addTextQuery('p', 'There are not more possible numbers')
    } else {
        if (secretNumberList.includes(secretNumber)) {
            return getSecretNumber();
        } else {
            secretNumberList.push(secretNumber);
            return secretNumber;
        }
    }
}

function cleanBox() {
    let boxValue = document.querySelector('input').value = '';
}

function initialConditions(){
    addTextQuery('h1', 'Numbers Game');
    addTextQuery('p', `Find the number between 1 to ${maxNumber}`);
    addTextQuery('#play', 'Play');
    addTextQuery('#new_game', 'New Game');
    secretNumber = getSecretNumber();
    counter = 1;
}

function verifyUserNumber() {
    let userNumber = parseInt(document.querySelector('input').value);
    if (userNumber === secretNumber) {
        addTextQuery('p', `You got it in ${counter} ${counter === 1 ? 'try' : 'tries'}`);
        document.querySelector('#new_game').removeAttribute('disabled')
    } else {
        if (userNumber > secretNumber) {
            addTextQuery('p', 'The secret number is lower');
        } else {
            addTextQuery('p', 'The secret number is higher');
        }
        cleanBox()
        counter++;
    }
}

function restartGame(){
    cleanBox();
    initialConditions();
    document.querySelector('#new_game').setAttribute('disabled', 'true')
}

// Values of the game

initialConditions();

