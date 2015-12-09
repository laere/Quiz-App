//Use an array to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. 
var allQuestions = [{
    question: 'Who was the president that never told a lie?',
    choices: ['George Washington', 'Zachary Taylor', 'George Bush', 'Abraham Lincoln'],
    correctAnswer: 4
  }, {
    question: 'On what piece of territory was the Battle of Bunker Hill fought?',
    choices: ['The Mississippi River', 'Breeds Hill', 'Fort William Henry', 'Fort Niagra'],
    correctAnswer: 2
  }, {
    question: 'Who was the Assistant Secretary of State for Inter-American Affairs from 1985 to 1989 who allegedly solicited $10 million from the Sultan of Brunei to purchase arms for the Contras?',
    choices: ['Eliot Abrams', 'John Hancock', 'Barack Obama', 'Cooper Bradly'],
    correctAnswer: 0
  }

];

var grabQuestion = document.getElementById('question');
var nextButton = document.getElementById('btnNext');
var backButton = document.getElementById('btnBack');
var correctAnswer = 0;


//Add first question to the page
var addQuizQuestion = function() {
  var storeQuestion = allQuestions[0].question;
  grabQuestion.innerHTML = storeQuestion; 
}
addQuizQuestion();

//When next button is clicked
//the current question is replaced by the next
nextButton.onclick = function() {
  
}


//create a function to add answers from the array and to the DOM.
//Add answers of first question to page
var addQuizAnswers = function() {
  //store choices of question one
  var storeAnswers = allQuestions[0].choices;
  //loop through the choices
  for (var i = 0; i < storeAnswers.length; i++ ) {
    //store reference of UL.
    var grabUl = document.getElementById('answers');
    //dynamically create radio button
    var radio =  document.createElement('input');
    radio.setAttribute('type', 'radio');
    //dynamically create a li element
    var createLi = document.createElement('li');
    //append radio button to li element
    createLi.appendChild(radio);
    //append li element to ul
    grabUl.appendChild(createLi);

 
  }  
}



//add validation to make sure the user picks an answer

//verify whether each users answer is right
//if right the user gets +1 to their score

//total score displayed on last page




