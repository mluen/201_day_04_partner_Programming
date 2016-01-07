var res1 = document.getElementById('result1');
var res2 = document.getElementById('result2');
var res3 = document.getElementById('result3');
var res4 = document.getElementById('result4');
var res5 = document.getElementById('result5');
var total = document.getElementById('total');
var total1 = document.getElementById('total1');
var total2 = document.getElementById('total2');

var user = prompt('Welcome, please enter a name: ');
console.log('User name input:  ' + user);
alert('Welcome ' + user);

var counterCorrect = 0;
var counterTotal = 0;
var summary;

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();

function questionOne() {
  var answer1 = prompt('Question 1:  True or False, Ben was born in Seattle, Washington?');
  console.log('User response to Question 1:  ' + answer1);
  counterTotal++;
  if (answer1.toLowerCase() == 'false') {
    res1.textContent = 'Correct, ' + user + '!  Ben was born in Tucson, Arizona.';
    counterCorrect++;
  } else {
    res1.textContent = 'Sorry ' + user + ',  Ben was not born in Seattle.';
  }
}



function questionTwo() {
  // accept Y/y/Yes/yes as valid input
  var answer2 = prompt('Question 2:  Does Ben like food? (Enter "Y" or "N")');
  console.log('User response to Question 2:  ' + answer2);
  counterTotal++;
  if ((answer2.toLowerCase() === "y") || (answer2.toLowerCase() === "yes")) {
    res2.textContent = 'Correct, ' + user + '!  Ben does indeed like food.';
    counterCorrect++;
  } else {
    res2.textContent = 'Sorry ' + user + ', Ben actually does like food.';
  }
}

function questionThree() {
  var answer3 = prompt('Question 3:  What was Ben\'s first Pet? (Enter "Dog", "Cat", "Bird", "Fish", "Velociraptor")')
  console.log('User resonse to Question 3:  ' + answer3);
  counterTotal++;
  if (answer3.toLowerCase() == "fish") {
    res3.textContent = 'Correct, ' + user + '!  Ben\'s first pet was a fish.';
    counterCorrect++;
  } else {
    res3.textContent = 'Sorry ' + user + ', as much as Ben wanted a ' + answer3 + ' his parents wouldn\'t allow something like that.';
  }
}
function questionFour() {
  var answer4 = prompt('Question 4:  Pick a number between 1 and 10:');
  while ((isNaN(answer4)) || (answer4 < 1) || (answer4 > 10)) {
    answer4 = prompt('Invalid response.\nQuestion 4:  Pick a number between 1 and 10:');
  }
  console.log('User number:  ' + answer4);
  counterTotal++;
  if (answer4 == 5) {
    res4.textContent = 'Congratulations ' + user + ', you have guessed the number!';
    counterCorrect++;
  } else if (answer4 > 5) {
    res4.textContent = 'Sorry ' + user + ', your guess was too high.';
  } else {
    res4.textContent = 'Sorry ' + user + ', your guess was too low.';
  }
}
function questionFive() {
  var answer5 = prompt('Question 5:  Pick a number between 1 and 10:');
  counterTotal++;
  while(answer5 < 3 || answer5 > 3) {
    while ((isNaN(answer5)) || (answer5 < 1) || (answer5 > 10)) {
      answer5 = prompt('Invalid response.\nQuestion 5:  Pick a number between 1 and 10:');
    }
    if (answer5 < 3) {
      answer5 = prompt('Sorry, ' + user + ', your guess was to low.\nEnter a new number between 1 and 10:');
    } else {
      answer5 = prompt('Sorry, ' + user + ', your guess was to high.\nEnter a new number between 1 and 10:');
    }
    console.log('exiting loop');
  }
  console.log('User number:  ' + answer5);
  res5.textContent = 'Congratuilations ' + user + '!  You guessed the number!';
  counterCorrect++;
}

summary = (counterCorrect / counterTotal) * 100;
total.textContent = 'Total Correct:  ' + counterCorrect;
total1.textContent = ' Total Questions:  ' + counterTotal;
total2.textContent = 'Score:  ' + summary + '%';
