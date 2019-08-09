function startQuiz () {
    $('.startQuiz').on('click', '.startButton', function (event) {
      $('.startQuiz').remove();
      $('.questionAnswerForm').css('display', 'block');
      //$('.questionNum').text(1);
  });
  }
  
  function generateQuestion (){
    return `<div class="question">
      <h2>Question1</h2>
    </div>`
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
  