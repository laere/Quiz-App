//Use an array to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. //
var usersGuess = -1;
var userScore = 0;
var usersAnswers = [];
var questions = [{
    question: 'Who was the president that never told a lie?',
    choices: ['George Washington', 'Zachary Taylor', 'George Bush', 'Abraham Lincoln'],
    correctAnswer: 3
  }, {
    question: 'On what piece of territory was the Battle of Bunker Hill fought?',
    choices: ['The Mississippi River', 'Breeds Hill', 'Fort William Henry', 'Fort Niagra'],
    correctAnswer: 1
  }, {
    question: 'Who was the Assistant Secretary of State for Inter-American Affairs from 1985 to 1989 who allegedly solicited $10 million from the Sultan of Brunei to purchase arms for the Contras?',
    choices: ['Eliot Abrams', 'John Hancock', 'Barack Obama', 'Cooper Bradly'],
    correctAnswer: 0
  }, {
    question: 'What does the Greek word "nosis" mean?',
    choices: ['Faith', 'Knowledge', 'Noble', 'Power'],
    correctAnswer: 1
  }, {
    question: 'If feline is cat-like what is ranine?',
    choices: ['Dog-like', 'Bird-like', 'Fish-like', 'Frog-like'],
    correctAnswer: 3
  },

];

//index of array
var index = 0;
var grabQuestion = document.getElementById('question');
var nextButton = document.getElementById('btnNext');
var backButton = document.getElementById('btnBack');
/*var warning = document.getElementById('warning');*/

//Add first question to the page
var addQuizQuestion = function(question) {
  grabQuestion.innerHTML = question;
}
//create a function to add answers from the array and to the DOM.
//Add answers of first question to page
var addQuizAnswers = function(answers) {
  //store reference of UL.
  var grabUl = document.getElementById('answers');
  grabUl.innerHTML = '';
  //loop through the choices
  for (var i = 0; i < answers.length; i++) {
    //dynamically create radio button
    var radio = document.createElement('input');
   /* if (usersAnswers[index]) {
      if (i==usersAnswers[index]) 
      radio.setAttribute('checked', 'true');*/
    }
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'button');
    radio.setAttribute('id', i);
    radio.addEventListener('click', function() {
      //turn users guess from id to integer
      var guessId = parseInt(this.getAttribute('id'));
      console.log(guessId);
      //equate the id of the guess to usersGuess
      usersGuess = guessId;
    })

    //dynamically create a li element
    var createLi = document.createElement('li');
    //append radio button to li element
    createLi.appendChild(radio);
    //create text node that has answers of question one
    var answerText = document.createTextNode(answers[i]);
    //append answers to li element
    createLi.appendChild(answerText);
    //append li element to ul
    grabUl.appendChild(createLi);
  }
}
addQuizQuestion(questions[index].question);
addQuizAnswers(questions[index].choices);

//next question and choices appear when next button is clicked
nextButton.addEventListener('click', function() {
  //prevent user from skipping questions
  if (usersGuess === -1) {
    console.log(usersGuess);
    alert('You must choose an answer!');    
  } else {
    //if users guess is the id of the correct answer, add one
    if (usersGuess == questions[index].correctAnswer) {
      userScore += 1;
      console.log(userScore);
    }
    //store previous user answers into an array
    usersAnswers.push(usersGuess);
    if (index + 1 < questions.length) {
      index++;
      addQuizQuestion(questions[index].question);
      addQuizAnswers(questions[index].choices);
    } else {
      alert('You scored a ' + getPercent() + '%!');  
    }
  }
}, false);

//When back button is clicked, return previous quesiton.
backButton.addEventListener('click', function() {
  if (index > 0) {
    index--;
    usersGuess = usersAnswers[index];
    userScore--;
    addQuizQuestion(questions[index].question);
    addQuizAnswers(questions[index].choices);
  }
}, false);

function getPercent() {
  return parseInt(100 * (userScore / questions.length));
}


