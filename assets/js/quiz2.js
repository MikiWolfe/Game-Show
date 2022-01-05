const javaBtn = document.getElementById("javaBtn");
const timerTwo = document.getElementById("timerTwo")
const updateTwo = document.getElementById("updateTwo")
const mainTwo = document.getElementById("mainTwo")
if (javaBtn) {javaBtn.addEventListener("click", start)};

let startTime = 50;
let current = 0;
let correctAnswers = 0 
const questions = [
  {
    question: "What two U.S. states produce coffee?",
    answers: [
      { answer: "California and Hawaii", correct: true },

      {
        answer: "Hawaii and Washington",
      },

      { answer: "Oregon and Hawaii" },

      { answer: "Hawaii and Louisiana" },
    ],
  },
  {
    question: "How much is the worlds most expensive coffee per pound? (in U.S. dollars)",
    answers: [
      { answer: "900" },

      { answer: "750" },

      { answer: "475" },

      {
        answer: "600", 
        correct: true,
      },
    ],
  },
  {
    question: "How many cups of coffee is a lethal amount of caffeine?",
    answers: [
      {
        answer: "20",
      },
      {
        answer: "30",
        correct: true,
      },
      {
        answer: "27",
      },
      { answer: "33" },
    ],
  },
  {
    question:
      "The Guiness World Record set in 2012 for largest cup of coffee was how many gallons?",
    answers: [
      {
        answer: "1,569",
      },
      {
        answer: "6,584",
      },
      { answer: "3,487", correct: true },
      {
        answer: "4,971",
      },
    ],
  },
  {
    question: "How many different ways can you order coffee and Dunkin?",
    answers: [
      {
        answer: "25,000",
        correct: true,
      },
      {
        answer: "36,000",
      },
      { answer: "12" },
      {
        answer: "150",
      },
    ],
  },
];

function hide () {
  let first = document.getElementById("first");
  if (first.style.display === "none"){
   first.style.dispay ="block";
  }
  else{
    first.style.display ="none";
  }
}

function time() {
  let timer =setInterval(function(){
    startTime--;
    timerTwo.textContent = startTime + "  seconds remaining";

  }, 1000)
}
if (startTime < 0) {
  timerTwo.textContent = ""
}

function start(){
  hide()
  displayQuestion(0);
  time();
};

function hideCurrent(){
  mainTwo.innerHTML = ""
}

function displayQuestion(questionToShow){
  let java =document.createElement("div");
  let javaHeader =document.createElement("h2");
  let currentQuestion = questions[questionToShow];
  javaHeader.innerHTML =currentQuestion["question"];
  java.appendChild(javaHeader);

  for (let i= 0; i<currentQuestion["answers"].length; i++){
    const element = currentQuestion[i];
    let answer = document.createElement("button");
    answer.innerHTML = currentQuestion["answers"][i]["answer"]
    answer.value = currentQuestion["answers"][i]["correct"]

answer.setAttribute(
  "onClick",
  "answerLog(this.value)"
);
java.appendChild(answer)
  }
  mainTwo.appendChild(java)
};

function answerLog(correct){
if (correct === "true"){
  updateTwo.innerHTML = "☕" +  "Correct!" +  "☕"
  correctAnswers++
} else {
  startTime = startTime - 10;
  updateTwo.innerHTML = "❌" + "Incorrect" + "❌"
}
}
