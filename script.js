const STORE = [
  {
    question: 'What year was the BAA renamed to the NBA?',
    answers: [
      '1949',
      '1959',
      '1969',
      '1979'
    ],
    correctAnswer: '1949'
  },
  {
    question: 'Whom was the Commissioner before Adam Silver?',
    answers: [
      'Jerry West',
      'Larry O Brien',
      'David Stern',
      'No one'
    ],
    correctAnswer: 'David Stern'
  },
  {
    question: 'What is the record for the second most points scored by a player in an official NBA game and by whom?',
    answers: [
      '100-Wilt Chamberlain',
      '82-LeBron James',
      '81-Kobe Bryant',
      '92-Michael Jordan'
    ],
    correctAnswer: '81-Kobe Bryant'
  },
  {
    question: 'The NBAs development league is sponsored by ______ ?',
    answers: [
      'Nike',
      'Adidas',
      'Spalding',
      'Gatorade'
    ],
    correctAnswer: 'Gatorade'
  },
  {
    question: 'Whose silhouette is used as the leagues official logo??',
    answers: [
      'Jerry West',
      'Larry O Brien',
      'Earvin "Magic" Johnson',
      'Michael Jordan'
    ],
    correctAnswer: 'Jerry West'
  }
];

let numberCorrect = 0;
let numberIncorrect = 0;
let questionNumber = 0;
function startQuiz (){ 
  $('.startQuiz').on('click', '.startButton', function (event) {
    $('.startQuiz').remove();
    $('.quizForm').css('display', 'block');
    //$('.questionNumber').text(1);
    console.log(questionNumber);
    
  });
}

function generateQuestion() {
  if (questionNumber < 5) {
    return `<div class="question">
        ${STORE[questionNumber].question}
      </br>
      <form>
      <div class="answers">
        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required> 
        <label>${STORE[questionNumber].answers[0]}</label></br>
        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
        <label>${STORE[questionNumber].answers[1]}</label></br>
        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required> 
        <label>${STORE[questionNumber].answers[2]}</label></br>
        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required> 
        <label>${STORE[questionNumber].answers[3]}</label></br>
        </br>
        <button type="submit" class="submitButton">Submit</button>
      </div>
      </form>
      </div>`
  } else {
    renderResults();
  }
}

function ifCorrect(){
  numberCorrect++;
  //console.log(numberCorrect);
  userFeedbackForCorrectAnswers();
  //console.log("correct!");
}

function ifIncorrect(){
  numberIncorrect++;
  //console.log(numberIncorrect);
  renderIncorrectFeedback();
  //console.log("wrong!");
}

function userFeedbackForCorrectAnswers(){
  $('.quizForm').html(`<div class="correctFeedback">
    <h2>Correct!</h2>
    <button type="button" class="nextButton">Next</button>
  </div>`);
}

/*function userFeedbackForIncorrectAnswers(){
  let correctAnswer
}*/

function assignEventListenerToFormSubmitionClick() {
  //console.log("assign event listener");
    $('form').on('submit', function(event) {
      event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      ifCorrect();
      //console.log('correct!');
    } else {
      //console.log('wrong!');
      ifIncorrect();
    }
    renderNextQuestion();
  });
}
/*
function validateAnswer(){
  console.log("validate answer");
  event.preventDefault();
  let selected = $('input:checked');
  let answer = selected.val();
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  if (answer === correctAnswer) {
    ifCorrect();
    //console.log('correct!');
  } else {
    //console.log('wrong!');
    ifIncorrect();
  }

}
*/
function generateIncorrectFeedback(){
  return `<div id="incorrectFeedback">
            <h2>Wrong!</h2>
            <h4>The correct answer is ...</4>
            </div>`
}

function renderIncorrectFeedback(){
  $('.quizForm').html(generateIncorrectFeedback());
}

function generateResults(){
  return `<div id="feedback">
            <h2>Here's some feedback:</h2>
              <div id="correct" style="border: 10px solid green;">What you know (correct answers)</div>
              <div id="incorrect" style="border: 10px solid red;">What you don't (incorrect answers)</div>
            </div>
            <button type="button" class="submitButton"><a href="results.html">NEXT(Results)</a></button>`
}

function renderResults(){
  $('.quizForm').html(generateResults());
}

function renderQuestion(){
  $('.quizForm').html(generateQuestion());
  //$(document.body).append(generateQuestion());

}

function incrementQuestionNumber(){
  questionNumber++;
  $('.question').text(questionNumber+1);
  //console.log(questionNumber);
  //return questionNumber;
}

function renderNextQuestion(){
  $('main').on('click', '.nextButton', function (event) {
    incrementQuestionNumber();
    renderQuestion();
    assignEventListenerToFormSubmitionClick();
  });
}


function createQuiz(){
  startQuiz();
  renderQuestion();
  assignEventListenerToFormSubmitionClick();
  renderNextQuestion();
  //generateIncorrectFeedback();
}

$(createQuiz);