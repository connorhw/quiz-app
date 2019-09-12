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
    restartQuiz ();
  }
}

function ifCorrect(){
  numberCorrect++;
  userFeedbackForCorrectAnswers();
}

function ifIncorrect(){
  numberIncorrect++;
  userFeedbackForIncorrectAnswers();
}

function userFeedbackForCorrectAnswers(){
  $('.quizForm').html(`<div class="correctFeedback">
    <h2>Correct!</h2>
    <button type="button" class="nextButton">Next</button>
  </div>`);
}

function userFeedbackForIncorrectAnswers(){
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.quizForm').html(`<div class="incorrectFeedback">
    <h2>Wrong!</h2>
    <button type="button" class="nextButton">Next</button>
  </div>`);
}

function assignEventListenerToFormSubmitionClick() {
  //console.log("assign event listener");
    $('form').on('submit', function(event) {
      event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      ifCorrect();
    } else {
      ifIncorrect();
    }
  });
}

function generateResultsPage(){
  return `<div id="feedback">
            <h2>You scored:</h2>
              <div id="correct" style="border: 10px solid green;">What you know (correct answers)</div>
              <div id="incorrect" style="border: 10px solid red;">What you don't (incorrect answers)</div>
            </div>
            <button type="button" class="restartButton">Restart Quiz</button>`
}

function renderResults(){
  $('.quizForm').html(generateResultsPage());
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

function restartQuiz(){
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
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
}

$(createQuiz);