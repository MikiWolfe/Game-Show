var timeEl =document.querySelector('timer');
var mainEl  = document.getElementById("main");
document.getElementById('start').addEventListener("click",time())

var startTime = 100;

function time() {
var timer = setInterval(function() {
    startTime--;
    timeEl.textContent = startTime + " seconds remaining";

if(startTime === 0) {
clearInterval(timer); sendMessage() = " You are out of time! "
}
})};

