const questionBlocks = document.querySelectorAll('.section--q-question');
const answerBlocks = document.querySelectorAll('.section--a-text');
let activeQuestionIndex = 0;
const questionBlocksArr = [...questionBlocks];

// console.log(questionBlocks);
// console.log(answerBlocks);

const activateQuestion = (e) => {
    // console.log(e.target);
    questionBlocks[activeQuestionIndex].classList.remove('active-question');
    answerBlocks[activeQuestionIndex].classList.remove('active-answer');
    let element;
    e.target.classList.contains('section--q-question') ? element = e.target : element = e.target.closest('.section--q-question');
    console.log(element);
    activeQuestionIndex = questionBlocksArr.indexOf(element);
    questionBlocks[activeQuestionIndex].classList.add('active-question');
    answerBlocks[activeQuestionIndex].classList.add('active-answer');
}

questionBlocks.forEach(function(question){
    question.addEventListener('click', activateQuestion)
});