const questions = [
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Delhi", correct: false },
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "New York", correct: false },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Mahatma Gandhi", correct: false },
      { text: "Leonardo De Caprio", correct: false },
      { text: "Albert Einstein", correct: false },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Uranus", correct: false },
      { text: "Earth", correct: false },
    ],
  },
  {
    question: " In which year did India declare its independence?",
    answers: [
      { text: "1996", correct: false },
      { text: "1946", correct: false },
      { text: "1862", correct: false },
      { text: "1947", correct: true },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "O2", correct: false },
      { text: "BaNaNa", correct: false },
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Shaktiman", correct: false },
      { text: "Elvis", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Leonardo De Caprio", correct: false },
    ],
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Avocado", correct: true },
      { text: "Banana", correct: false },
      { text: "Apple", correct: false },
      { text: "Brinjal", correct: false },
    ],
  },
  {
    question: "Which famous scientist developed the theory of relativity?",
    answers: [
      { text: "APJ Abdul Kalam Azad", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Gautam Buddha", correct: false },
      { text: "Albert Einstien", correct: false },
    ],
  },
  {
    question: "In what year did the Titanic sink?",
    answers: [
      { text: "1913", correct: false },
      { text: "1914", correct: false },
      { text: "1911", correct: false },
      { text: "1912", correct: true },
    ],
  },
  {
    question: "What is the currency of Japan?",
    answers: [
      { text: "Japanese Peso", correct: false },
      { text: "Japanese Yen", correct: true },
      { text: "Japanese Dollar", correct: false },
      { text: "Japanese Rupee", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Displaying answers
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct ==="true"){
        button.classList.add("correct");

    }
    button.disabled=true;
  });
  nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

// call the startQuiz function
startQuiz();
