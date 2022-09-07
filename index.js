const readlineSync = require('readline-sync');
const chalk = require('chalk');

//Defined constants
const yes = chalk.bold.green;
const no = chalk.bold.red;
const nameBg = chalk.greenBright;
const newGameBg = chalk.bold.yellowBright;
const buttonBg = chalk.bgGreen.white;
const log = console.log;

//Function to capitalize first letter of a string
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//Function to check leap year
function isLeapYear(year, name) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    log(`\n${yes(`Yes ${name}, you were born on a leap year. You should share it on your social handles.`)}`);
  } else {
    log(`\n${no(`No ${name}, you were not born on a leap year.`)}`);
  }
}

//Function to take input values
function welcome() {
  let inputName = capitalizeFirstLetter(readlineSync.question('\nEnter your name: ', { defaultInput: 'nobody' }));
  let inputYear = readlineSync.questionInt(`\n Hello ${nameBg(inputName)}, enter your year of birth: `);
  isLeapYear(inputYear, inputName);
}

//Function to play the game again
function playAgain() {
  let answer = readlineSync.keyInYN('\nDo you wish to play again?');
  if (answer) {
    welcome();
    playAgain();
  }
  else {
    log(`\n${newGameBg(`If you wish to play again go to the top right corner of the screen and click on the ${buttonBg('Run')} button or you can simply just reload the page. Thank you!`)}`);
  }
}

welcome();
playAgain();
