function startQuiz () {
    $('.startQuiz').on('click', '.startButton', function (event) {
      $('.startQuiz').remove();
      $('.questionAnswerForm').css('display', 'block');
      //$('.questionNum').text(1);
  });
  }
  
  function generateQuestion (){
    return `<div class="question">
      <h1>Question1</h1>
    </div>
    <div class="answer">
      <h3>Option1</h3>
    </div>
    <div class="answer">
      <h3>Option2</h3>
    </div>
    <div class="answer">
      <h3>Option3</h3>
    </div>
    <div class="answer">
      <h3>Option4</h3>
    </div>
  
    <button type="button" class="nextButton">NEXT</button>`
  }
  function renderQuestion () {
    $('.questionAnswerForm').html(generateQuestion());
  }
  
  function createQuiz () {
    startQuiz();
    renderQuestion();
    //userSelectAnswer();
    //renderNextQuestion();
  }
  
  $(createQuiz);
  