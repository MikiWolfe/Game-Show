var timeEl =document.getElementById('timer');
var mainEl  = document.getElementById("main");
document.getElementById('start').addEventListener("click",start);

var startTime = 100;

const questions = [
{
    'question' : 'What country produces the most coffee',
    'answers' : [ 
       
    {'answer' : 'Vietnam', 
    'correct': 'false'},

    {'answer':'Brazil',
    'correct': 'true'},

    {'answer':'Indonesia',
    'correct': 'false'},

    {'answer':'Colombia',
    'correct':'false'}
]
}
// ,{}
]
;


function time() {
var timer = setInterval(function() {
    startTime--;
    timeEl.textContent = startTime + " seconds remaining";

if(startTime === 0) {
clearInterval(timer); sendMessage(message) = "You are out of time!"
}
},1000)};

function start() {
    displayQuestion(0); time();
}

function displayQuestion (questionToShow){
    var coffee = document.createElement("div");
    var header =document.createElement("h2");
    var currentQuestion = questions[questionToShow];
    header.innerHTML= currentQuestion["question"];
    coffee.appendChild(header);


    for (let index = 0; index < currentQuestion["answers"].length; index++) {
        const element = currentQuestion[index];
        var answer= document.createElement("button");
        answer.innerHTML=currentQuestion["answers"][index]["answer"];
        coffee.appendChild(answer);
    }

    document.getElementById('main').appendChild(coffee);
    
}
;


//add on click on to the answer that will click on to the next question
