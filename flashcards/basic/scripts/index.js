// Declaration for the class question
class question {
    // Each question object has a question and an answer
    constructor(q, a) {
        this.question = q;
        this.answer = a;
      }
}

// Our array of question objects
let myFlashcards = [new question("What is the name of this course?", "Intro to Web Programming"), 
    new question("What kind of file stores the structure of a webpage?", "HTML"), 
    new question("What kind of file stores the logic behind a webpage?", "JavaScript")];

// The counter to follow the index of question should be shown
let counter = 0;
// The flag to track whether it is question be shown currently
let flagQ = true;
// Get the html element to display the content
let flashcard = document.getElementById("flashcard");
// Connect the html element to the function 
flashcard.onclick = clicked;
flashcard.onmouseover = displayAnswer;
flashcard.onmouseleave = displayQuestion;
// Get the html element to display the hint
let hint = document.getElementById("hint");

let i = 0;
while(i < myFlashcards.length){
    console.log(myFlashcards[i]);
    i ++;
}

// Loop through the list and display the question
function displayQuestion(){
    flashcard.innerHTML = myFlashcards[counter].question;
}

function displayAnswer(){
    flashcard.innerHTML = myFlashcards[counter].answer;
}

function clicked(){
    if(flagQ){
        flashcard.innerHTML = myFlashcards[counter].answer;
        hint.innerHTML = "Click the card to go to next question";
        flashcard.onmouseleave = displayAnswer;
        flagQ = false;
    }else{
        if (counter === 2) {
            counter = 0;
        } else {
            counter += 1;
        }
        flashcard.innerHTML = myFlashcards[counter].question;
        hint.innerHTML = "Hover over or click to get the answer";
        flashcard.onmouseleave = displayQuestion;
        flagQ = true;
    }
    
}

displayQuestion();
