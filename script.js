'use strict';

/*
//*      DOM and DOM Manipulation        */ //////////////////
// console.log(document.querySelector('.message').textContent); // way of selecting an element in javascript // It is a DOM manipulation

// document.querySelector('.message') will return the selected element and the .textContent (which is a property) will return the text message

// /*      Selecting and Manipulating Elements       */ ////////////////
// document.querySelector('.message').textContent = '💃 Correct Number!'; // changing the text content
// here we manipulated the text content of one of the DOM nodes

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.qmark').textContent = 13;
// document.querySelector('.score').textContent = 90;

// document.querySelector('.number-box').value = 23;
// console.log(document.querySelector('.number-box').value);

/*    Handling Clicking Events      */ //////////////////

// this score variable is called state variable because it is part of the so-called application state i.e. all the data that is relevant to the application

const startMessage = `Start guessing...`;
const highGuessMessage = `Too High 🎡`;
const lowGuessMessage = `Too low 👇`;
const noNumberMessage = `😡 No Number`;
const lostMessage = `You have lost the Game 😒`;
const correctNumberMessage = `🏆 Correct Number!`;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeQMarkWidth = function (width) {
  document.querySelector('.qmark').style.width = width;
};

const changeQMarkContent = function (content) {
  document.querySelector('.qmark').textContent = content;
};

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1; // to get a number between 1 and 20
};

let secretNumber = generateRandomNumber();

let highscore = 0; // initially player's highscore is zero

let score = Number(document.querySelector('.score').textContent); // holds the actual data of the application

document.querySelector('.check-btn').addEventListener('click', function () {
  const numberBox = Number(document.querySelector('.number-box').value);

  // if nothing is entered then .value will return string that will be converted to 0 with typecasting with number

  // when player didn't enter any number
  if (!numberBox) {
    displayMessage(noNumberMessage);

    // score needs to be greater than zero in order to play the game
  } else if (score > 0) {
    // when player wins
    if (numberBox == secretNumber) {
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      displayMessage(correctNumberMessage);
      changeQMarkContent(secretNumber);

      changeBodyColor('#60b347');

      changeQMarkWidth('19.8rem');

      // when player guess a higher number or a lower number
    } else {
      displayMessage(
        numberBox > secretNumber ? highGuessMessage : lowGuessMessage
      );
      score--;
    }
  }

  // when score becomes zero display the lost message
  if (score == 0) {
    displayMessage(lostMessage);
  }

  // update the score on every click
  changeScore(score);
}); // we passed a function expression

document.querySelector('.again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = generateRandomNumber();

  changeScore(score);

  changeBodyColor('rgb(36, 36, 36)');
  changeQMarkWidth('9.9rem');
  changeQMarkContent('?');
  displayMessage(startMessage);
  document.querySelector('.number-box').value = null;
});
