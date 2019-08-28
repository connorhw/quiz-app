const STORE = [
  {
    question: 'What year was the BAA renamed to the NBA?',
    answers: [
      '1949',
      '1959',
      '1969',
      '1979'
    ]
  },
  {
    question: 'Whom was the Commissioner before Adam Silver?',
    answers: [
      'Jerry West',
      'Larry O Brien',
      'David Stern',
      'No one'
    ]
  }
];
let questionNumber = 0;
function startQuiz (){ 
  $('.startQuiz').on('click', '.startButton', function (event) {
    $('.startQuiz').remove();
    $('.quizForm').css('display', 'block');
    //$('.questionNumber').text(1);
});
}

function generateQuestion(){

  return `<div class="question">
    ${STORE[questionNumber].question}
  </div></br>
  <div class="answers">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required> 
    <span>${STORE[questionNumber].answers[questionNumber]}</span></br>
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span></br>
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required> 
    <span>${STORE[questionNumber].answers[2]}</span></br>
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required> 
    <span>${STORE[questionNumber].answers[3]}</span></br>
    </br>
    <button type="submit" class="nextButton">Next</button>
  </div>`
}

function renderQuestion(){
  $('.quizForm').html(generateQuestion());
}

function createQuiz () {
  startQuiz();
  renderQuestion();
  //userSelectAnswer();
  //renderNextQuestion();
}

$(createQuiz);