# Game-Show
JavaScript quiz game 

## Description 
We are tasked with building a quiz game for this application.  We are using vanilla JavaScript to build a multiple choice quiz game with the goal to store the high scores to be accessed later. The quiz we are building is about coffee and ideally the timer would decrease by 10 seconds every time an answer was marked as incorrect.  We have constructed a five question multiple choice quiz about the other java, coffee and with each click from the user we are logging the correct answer and then showing the next question.  We then have created a separate HTML document to store our high scores.    


## Things I learned 
    -There are many ways to do things using JavaScript and as long as it works, they are not wrong.
    -To make a timer is easy.
    -The rest of it is very hard. 
    -a little bit of styling never hurt anyone. 

## Screenshot of finished work
to be added when work is completed 

## Link to finished work
to be added when work is completed
-------------------------------------------------------------------------------

# what does my application need to run?
- questions and answers. 
array list for series of questions
each question is going to be an object

multipleChoiceOptions: [
    "string", "boolean"
]

correct: "stored matching value"

- timer / score 
- timer interval var interval

# what kinds of actions does my application need to do 

-start game
function startGame () {...}
function startTimer (  {...})

-hide welcome function hideWelcome () {...}

-display next question 

- start the countdown timer

- clicking the button and displaying the next question

- if answer is wrong, decrease time from the timer 

- end the game 
    - clear interval function - to stop the counter from counting down 