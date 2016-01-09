var res1 = document.getElementById('result1');
var res2 = document.getElementById('result2');
var res3 = document.getElementById('result3');
var res4 = document.getElementById('result4');
var res5 = document.getElementById('result5');
var res6 = document.getElementById('result6');
var total1 = document.getElementById('total1');
var total2 = document.getElementById('total2');
var total3 = document.getElementById('total3');

var counterCorrect = 0;
var counterTotal = 0;
var summary;

var user = prompt('Welcome, please enter a name: ');
console.log('User name input:  ' + user);
alert('Welcome ' + user);

var question1 = [
  'Question 1:  True or False, Ben was born in Seattle, Washington?',
  '',
  right1 = [false],
  wrong1 = [true],
  'Correct, ' + user + '!  Ben was born in Tucson, Arizona.',
  'Sorry ' + user + ',  Ben was not born in Seattle.',
  res1
];

var question2 = [
  'Question 2:  Does Ben like food? (Enter "Y" or "N")',
  '',
  right2 = ['y', 'yes'],
  wrong2 = ['n', 'no'],
  'Correct, ' + user + '!  Ben does indeed like food.',
  'Sorry ' + user + ', Ben actually does like food.',
  res2
];
var question3 = [
    'Question 3:  What was Ben\'s first Pet? (Enter "Dog", "Cat", "Bird", "Fish", "Velociraptor")',
    '',
    right3 = ['fish'],
    wrong3 = ['dog', 'cat', 'bird', 'velociraptor'],
    'Correct, ' + user + '!  Ben\'s first pet was a fish.',
    'Sorry ' + user + ' his parents wouldn\'t allow something like that.',
    res3
  ];

  var questionData = [question1, question2, question3];


for (i = 0; i < questionData.length; i++) {

  questionData[i][1] = prompt(questionData[i][0]).toLowerCase();
  console.log('User response to Question 1:  ' + questionData[i][1]);
  counterTotal++;
  console.log(counterTotal);
  if ((questionData[i][1] === questionData[i][2][0]) || (questionData[i][1] === questionData[i][2][1])) {
    questionData[i][6].textContent = questionData[i][4];
    counterCorrect++;
    questionData[i][6].className = 'correct';
  } else {
    questionData[i][6].textContent = questionData[i][5];
    questionData[i][6].className = 'incorrect';
  }
}

questionFour();
questionFive();
questionSix();

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


function questionSix() {
  var answer6 = prompt('Question 6: Name a planet in the Solar System:').toLowerCase();
  console.log('User planet:' + answer6);
  counterTotal++;
  var planets = [
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune',
    'pluto'
  ];
  var yeahPlanet = false;
  for (i = 0; i < planets.length; i++) {
    if (answer6 == planets[i]) {
      res6.textContent = 'Correct, ' + user + '!  ' + answer6 + ' is a planet.';
      i = planets.length;  // exit loop
      counterCorrect++;
      yeahPlanet = true;
    }
    if (yeahPlanet == false) {
      res6.textContent = 'Sorry, ' + user + ', ' + answer6 + ' is not a planet.';
    }
  }

  summary = (counterCorrect / counterTotal) * 100;
  total1.textContent = 'Total Correct:  ' + counterCorrect;
  total2.textContent = ' Total Questions:  ' + counterTotal;
  total3.textContent = 'Score:  ' + summary + '%';
}
