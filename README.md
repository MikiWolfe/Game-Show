# Game-Show
JavaScript code game 

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

 <div>
        <h2>What country produces the most coffee?</h2>
        <button>Vietnam</button>
        <button>Brazil</button> <!--answer-->
        <button>Indonesia</button>
        <button>Colombia</button>
    </div>
    <div>
        <h2>What country consumes the most coffee on a per-person basis?</h2>
        <button>Canada</button>
        <button>Iceland</button>
        <button>Denmark</button>
        <button>Finland</button> <!--answer-->
    </div>
    <div>
        <h2>What US city drinks the most coffee?</h2>
        <button>Seattle</button>
        <button>New York City</button> <!--answer-->
        <button>Portland</button>
        <button>Los Angles</button>
    </div>
    <div>
        <h2>How many cups of coffee does the adverage American drink a day?</h2>
        <button>3.7</button>
        <button>1.5</button>
        <button>2.6</button>
        <button>3.1</button> <!--answer-->
    </div>
    <div>
        <h2>What country consumes the most tea?</h2>
        <button>United Kingdom</button>
        <button>New Zealand</button>
        <button>Turkey</button> <!--answer-->
        <button>Ireland</button>
    </div