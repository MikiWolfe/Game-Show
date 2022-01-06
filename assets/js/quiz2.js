let javaBtn = document.getElementById("javaBtn");
let timerTwo = document.getElementById("timerTwo")
let updateTwo = document.getElementById("updateTwo")
let mainTwo = document.getElementById("mainTwo")
const scoreElTwo = document.getElementById("scoreTwo")

let storedScoresTwo = JSON.parse(localStorage.getItem("pastScoresTwo")) || []

if (javaBtn) {javaBtn.addEventListener("click", start)};

let startTimeTwo = 50;
let currentTwo = 0;
let correctAnswersTwo = 0 
const questionsTwo = [
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
    startTimeTwo--;
    timerTwo.textContent = startTimeTwo + "  seconds remaining";

  }, 1000)
}

if (startTimeTwo < 0) {
  timerTwo.style.display ="none"
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
  let currentQuestion = questionsTwo[questionToShow];
  javaHeader.innerHTML =currentQuestion["question"];
  java.appendChild(javaHeader);

  for (let i= 0; i < currentQuestion["answers"].length; i++){
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
  correctAnswersTwo++
} else {
  startTimeTwo = startTimeTwo - 10;
  updateTwo.innerHTML = "❌" + "Incorrect" + "❌"
}
hideCurrent();
if (currentTwo < questionsTwo.length - 1) {
  currentTwo++;
  displayQuestion(currentTwo) }
    else {
      let initials = prompt("Please enter your initials for scores");
      if (initials)
      {
        document.getElementById("first").innerHTML +=
        "You got" + correctAnswersTwo + " questions right!";
        let top = document.getElementById("first");
        top.style.display = "block"
        timerTwo.style.display = "none"

        storeHighScore(initials)
      }
      else {
        alert("Please enter your initials")
      }
    }
  }

function storeHighScore(initials) {
  let storedScoresObj ={
    initial: '',
    score: '',
  } 
storedScoresObj.initial = initials
storedScoresObj.score = correctAnswersTwo

storedScoresTwo.push(storedScoresObj)
localStorage.setItem("pastScoresTwo", JSON.stringify(storedScoresTwo))

}

function displayHighScore(){
for (let i=0; i < storedScoresTwo.length; i++){
  const {score , initial} = storedScoresTwo[i]
  console.log(score)
  console.log(initial)
  let displayScore = storedScoresTwo[i].score;
  let displayInitial = storedScoresTwo[i].initial;

  let scoreRow = document.createElement("tr");
  let colScore = document.createElement("td");
  let colInitial = document.createElement("td")

colScore.innerHTML = displayScore
colInitial.innerHTML = displayInitial
scoreRow.append(colInitial, colScore)
if(scoreElTwo){scoreElTwo.append(scoreRow)}
else(console.log`scoreElTwo is ${scoreElTwo}`)
}
}
