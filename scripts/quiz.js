
/*Framework*/

/*
    Instantiate a Quiz class that outlines structure for the input fields
Need class to create new object for 'Add question' section
Declare empty array to hold objects(generated from class) which can be called on by subject using filter
    Create logic for correct answer and reported result
*/


const masterArray = [];


class Question {
    constructor(subject, question, a, b, c, d, correct_answer) {
        this.subject = subject;
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c; 
        this.d = d;
        this.correct_answer = correct_answer; 
    }
    correctAnswer (answer){
        if(answer === this.correct_answer){ /*need to assign answer to clicked option upon submission*/
            return  `You are correct!`;
        } else {
            return 'Your answer is incorrect'
        }
    } 
}


let correctCounter = 0;
let totalCounter = 0;

function updateScore (answer1,correct_answer){ 
    totalCounter += 1;
    if(answer1 === correct_answer){
        correctCounter += 1;
    }
    return `Your score is ${correctCounter}/${totalCounter}`;
};

function calculateFinalScore (correctCounter, totalCounter) {
    let finalScore = (correctCounter / totalCounter) * 100;
    return `Your score is ${finalScore}%!`
}

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit-button').addEventListener('click', function (){
        let selectedOption = document.querySelector('input[name="option"]:checked');
        let answer = selectedOption ? selectedOption.value : null;

        let currentQuestion = masterArray[currentQuestionIndex]; 
        let result = currentQuestion.correctAnswer(answer);
        updateScore(answer, currentQuestion.correct_answer);
        currentQuestionIndex++;
    });
});


let practiceQuestion = new Question('JavaScript', 'This is a sample question', 'testA', 'testB','testC','testD', 'D')

console.log(practiceQuestion.correctAnswer('D')); // This should return "You are correct!"
console.log(practiceQuestion.correctAnswer('A')); // This should return "Your answer is incorrect"