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
let scoreRight = -1;
let scoreWrong = -1;
let questionNumberOnTop = 0;

function startQuiz (){ 
  $('.startQuiz').on('click', '.startButton', function (event) {
    $('.startQuiz').remove();
    $('.quizForm').css('display', 'block');
    console.log(questionNumber);
    renderAndIncrementCorrectScore();
    renderAndIncrementWrongScore();
    
  });
}

function questionNumberTop(){
  questionNumberOnTop++
  $('.number').html(`Question: `+ questionNumberOnTop + ` of 5`);
}

function renderAndIncrementCorrectScore(){
  scoreRight++;
  $('.score').html(`Correct: `+ scoreRight);
}

function renderAndIncrementWrongScore(){
  scoreWrong++;
  $('.score2').html(`Wrong: `+ scoreWrong);
}


function generateQuestion() {
  if (questionNumber < 5) {
    return `
      <div class="question">
        ${STORE[questionNumber].question}
      </br>
      </br>
      <form>
      <div class="answers">
      
        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required> 
        <label>${STORE[questionNumber].answers[0]}</label>
        </label>

        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
        <label>${STORE[questionNumber].answers[1]}</label>
        </label>

        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required> 
        <label>${STORE[questionNumber].answers[2]}</label>
        </label>

        <label class="answerOption">
        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required> 
        <label>${STORE[questionNumber].answers[3]}</label>
        </label>

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
    <div>The correct answer is: ` + correctAnswer + `</div>
    </br>
    <button type="button" class="nextButton">Next</button>
  </div>`);
}

function assignEventListenerToFormSubmitionClick() {
  if(questionNumberOnTop < 5){
    questionNumberTop();
  }
    $('form').on('submit', function(event) {
      event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      ifCorrect();
      renderAndIncrementCorrectScore();
    } else {
      ifIncorrect();
     renderAndIncrementWrongScore();
    }
  });
}

function generateResultsPage(){
  return `<div id="feedback">
            <h2>You scored:</h2>
            <div>`+ numberCorrect +` out of 5</div>
            </br>
            <button type="button" class="restartButton">Restart Quiz</button>
          </div>`
}

function renderResults(){
  $('.quizForm').html(generateResultsPage());
}

function renderQuestion(){
  $('.quizForm').html(generateQuestion());
}

function incrementQuestionNumber(){
  questionNumber++;
  $('.question').text(questionNumber+1);
}

function renderQuestNumber(){

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