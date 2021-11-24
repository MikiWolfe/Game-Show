var timeEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
document.getElementById("start").addEventListener("click", start);

var startTime = 100; //for timer
var userInput = [""]; //to store and compare user answers
var current = 0;
var questions = [
  {
    question: "What country produces the most coffee?",
    answers: [
      { answer: "Vietnam", correct: "false" },

      {
        answer: "Brazil", //right answer
        correct: "true",
      },

      { answer: "Indonesia", correct: "false" },

      { answer: "Colombia", correct: "false" },
    ],
  },
  {
    question: "What country consumes the most coffee on a per-person basis?",
    answers: [
      { answer: "Canada", correct: "false" },

      { answer: "Iceland", correct: "false" },

      { answer: "Denmark", correct: "false" },

      {
        answer: "Finland", //right answer
        correct: "true",
      },
    ],
  },
  {
    question: "What US city drinks the most coffee?",
    answers: [
      { answer: "Seattle", correct: "false" },

      {
        answer: "New York City", //right answer
        correct: "true",
      },

      { answer: "Portland", correct: "false" },

      { answer: "Los Angeles", correct: "false" },
    ],
  },
  {
    question: "How many cups of coffee does the average American drink a day?",
    answers: [
      {
        answer: "3.1", //right answer
        correct: "true",
      },

      { answer: "1.5", correct: "false" },

      { answer: "2.6", correct: "false" },

      { answer: "3.7", correct: "false" },
    ],
  },
  {
    question: "What country consumes the most tea?",
    answers: [
      { answer: "United Kingdom", correct: "false" },

      { answer: "New Zealand", correct: "false" },

      {
        answer: "Turkey", //right answer
        correct: "true",
      },

      { answer: "Ireland", correct: "false" },
    ],
  },
];
function hide() {
  var top = document.getElementById("head");
  if (top.style.display === "none") {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}

function time() {
  var timer = setInterval(function () {
    startTime--;
    timeEl.textContent = startTime + " seconds remaining";

    if (startTime === 0) {
      clearInterval(timer);
      alert("You are out of time!");
    }
  }, 1000);
}

function start() {
  displayQuestion(0);
  time();
}

function displayQuestion(questionToShow) {
  var coffee = document.createElement("div");
  var header = document.createElement("h2");
  var currentQuestion = questions[questionToShow];
  header.innerHTML = currentQuestion["question"];
  coffee.appendChild(header);

  for (let index = 0; index < currentQuestion["answers"].length; index++) {
    const element = currentQuestion[index];
    var answer = document.createElement("button");
    answer.innerHTML = currentQuestion["answers"][index]["answer"];
    coffee.appendChild(answer);
  }

  mainEl.appendChild(coffee);
}
{
  function hideCurrent() {
    mainEl.innerHTML = "";
  }
}

// event listener on click to show next question
mainEl.addEventListener("click", function (event) {
  hideCurrent();
  current++;
  displayQuestion(current);
});
