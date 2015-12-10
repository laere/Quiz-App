//Use an array to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. 
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
  }

];

//index of array
var index = 0;
var correctAnswer = 0;

var grabQuestion = document.getElementById('question');
var nextButton = document.getElementById('btnNext');
var backButton = document.getElementById('btnBack');
var score = document.getElementById('score');


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
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'button');
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
  if (index < questions.length) {
    index++;
    addQuizQuestion(questions[index].question);
    addQuizAnswers(questions[index].choices);
  }
}, false);

//When user clicks radio button
//Determine of answers is correct or not
//correctAnswer ++ if correct
var determineScore = function() {
  var radioButtons = document.getElementsByTagName('input');
  radioButtons.addEventListener('click', function, false);

}


  







//When back button is clicked, return previous quesiton.



