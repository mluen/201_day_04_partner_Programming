var user = prompt('Welcome, please enter a name: ');
console.log('User name input:  ' + user);
alert('Welcome ' + user);

var counterCorrect = 0;
var counterTotal = 0;
var summary;

var answer1 = prompt('Question 1:  True or False, Ben was born in Seattle, Washington?');
console.log('User response to Question 1:  ' + answer1);
counterTotal++;
if (answer1.toLowerCase() == 'false') {
  alert('Correct, ' + user + '!  Ben was born in Tucson, Arizona.');
  counterCorrect++;
} else {
  alert('Sorry ' + user + ',  Ben was not born in Seattle.');
}

// accept Y/y/Yes/yes as valid input
var answer2 = prompt('Question 2:  Does Ben like food? (Enter "Y" or "N")');
console.log('User response to Question 2:  ' + answer2);
counterTotal++;
if ((answer2.toLowerCase() === "y") || (answer2.toLowerCase() === "yes")) {
  alert('Correct, ' + user + '!  Ben does indeed like food.');
  counterCorrect++;
} else {
  alert('Sorry ' + user + ', Ben actually does like food.');
}


var answer3 = prompt('Question 3:  What was Ben\'s first Pet? (Enter "Dog", "Cat", "Bird", "Fish", "Velociraptor")')
console.log('User resonse to Question 3:  ' + answer3);
counterTotal++;
if (answer3.toLowerCase() == "fish") {
  alert('Correct, ' + user + '!  Ben\'s first pet was a fish.');
  counterCorrect++;
} else {
  alert('Sorry ' + user + ', as much as Ben wanted a ' + answer3 + ' his parents wouldn\'t allow something like that.');
}

var answer4 = prompt('Question 4:  Pick a number between 1 and 10:');
while ((isNaN(answer4)) || (answer4 < 1) || (answer4 > 10)) {
  answer4 = prompt('Invalid response.\nQuestion 4:  Pick a number between 1 and 10:');
}
console.log('User number:  ' + answer4);
counterTotal++;
if (answer4 == 5) {
  alert('Congratulations ' + user + ', you have guessed the number!');
  counterCorrect++;
} else if (answer4 > 5) {
  alert('Sorry ' + user + ', your guess was too high.');
} else {
  alert('Sorry ' + user + ', your guess was too low.');
}

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
alert('Congratuilations ' + user + '!  You guessed the number!');
counterCorrect++;

summary = (counterCorrect / counterTotal) * 100;
alert('User Summary:\n\nTotal Correct:  ' + counterCorrect + '\nTotal Questions:  ' + counterTotal + '\nScore:  ' + summary + '%');
