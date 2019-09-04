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
  },
  {
    question: 'What is the record for the second most points scored by a player in an official NBA game and by whom?',
    answers: [
      '100-Wilt Chamberlain',
      '82-LeBron James',
      '81-Kobe Bryant',
      '92-Michael Jordan'
    ]
  },
  {
    question: 'The NBAs development league is sponsored by ______ ?',
    answers: [
      'Nike',
      'Adidas',
      'Spalding',
      'Gatorade'
    ]
  },
  {
    question: 'Whose silhouette is used as the leagues official logo??',
    answers: [
      'Jerry West',
      'Larry O Brien',
      'Earvin "Magic" Johnson',
      'Michael Jordan'
    ]
  }
];
//test
//test
let questionNumber = 0;
function startQuiz (){ 
  $('.startQuiz').on('click', '.startButton', function (event) {
    $('.startQuiz').remove();
    $('.quizForm').css('display', 'block');
    //$('.questionNumber').text(1);
});
}

function generateQuestion(){
  if (questionNumber < 5){
      return `<div class="question">
        ${STORE[questionNumber].question}
      </div></br>
      
      <div class="answers">

        <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required> 
        <span>${STORE[questionNumber].answers[0]}</span></br>
        <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
        <span>${STORE[questionNumber].answers[1]}</span></br>
        <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required> 
        <span>${STORE[questionNumber].answers[2]}</span></br>
        <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required> 
        <span>${STORE[questionNumber].answers[3]}</span></br>
        </br>
        <button type="submit" class="nextButton">Next</button>
      
      </div>`
   } else{
     renderResults();
   }
}

function generateResults(){
  return `<div id="feedback"style="border: 1px solid grey;">
            <h2>Here's some feedback:</h2>
              <div id="correct" style="border: 10px solid green;">What you know (correct answers)</div>
              <div id="incorrect" style="border: 10px solid red;">What you don't (incorrect answers)</div>
            </div>
            <button type="button" class="nextButton"><a href="results.html">NEXT(Results)</a></button>`
}

function renderResults(){
  $('.quizForm').html(generateResults());
}

function renderQuestion(){
  $('.quizForm').html(generateQuestion());
}


function incrementQuestionNumber(){
  questionNumber++;
  $('.question').text(questionNumber);
  //return questionNumber;
}

function renderNextQuestion(){
  $('main').on('click', '.nextButton', function (event) {
    incrementQuestionNumber();
    renderQuestion();
    //userSelectAnswer();
  });
}

/*function generateNextQuestion(){
  incrementQuestionNumber();
  generateQuestion();
}
*/
function createQuiz(){
  startQuiz();
  renderQuestion();
  //incrementQuestionNumber();
  //generateNextQuestion();
  renderNextQuestion();
  //userSelectAnswer();
  //renderNextQuestion();
}

$(createQuiz);