const masterArray = [];

/*Class handles all Question related information*/
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
        if(answer === this.correct_answer){ 
            return  `You are correct!`;
        } else {
            return 'Your answer is incorrect'
        }
    } 
}

/*Class handles all quiz related calculations*/
class Quiz {
    constructor(correctCounter, totalCounter, currentQuestionIndex){
        this.correctCounter = correctCounter;
        this.totalCounter = totalCounter; 
        this.currentQuestionIndex = currentQuestionIndex;
    }
    updateScore(answer1, correct_answer) {
        this.totalCounter +=1;
        if(answer1 === correct_answer){
            this.correctCounter += 1;
        }
        return `Your score is ${this.correctCounter}/${this.totalCounter} questions`;
    }
    calculateFinalScore (){
        let finalScore = (this.correctCounter / this.totalCounter) * 100;
        return `Your score is ${finalScore}%`;
    }
}

/*Question class practice calls*/
let practiceQuestion1 = new Question('Question1', 'This is a sample question...', 'testA', 'testB', 'testC', 'testD', 'd');
let practiceQuestion2 = new Question('Question2', 'This is a sample question 2', 'testA', 'testB', 'testC', 'testD', 'b');

masterArray.push(practiceQuestion1, practiceQuestion2);

/*Istantiation of Quiz class*/
const quiz = new Quiz(0 , 0, 0);