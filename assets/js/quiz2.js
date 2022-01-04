const javaBtn = document.getElementById("javaBtn");
const timerTwo = document.getElementById("timerTwo")
const updateTwo = document.getElementById("updateTwo")
const mainTwo = document.getElementById("mainTwo")

const startTime = 50;
let current = 0;

let questions = [
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
    timerTwo.textContent = startTime + "seconds remaining";

  }, 1000)
}

