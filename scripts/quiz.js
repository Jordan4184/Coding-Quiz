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

    correctAnswer(answer) {
        if (answer === this.correct_answer) { 
            return  `You are correct!`;
        } else {
            return 'Your answer is incorrect';
        }
    } 
}

class Quiz {
    constructor(correctCounter, totalCounter, currentQuestionIndex){
        this.correctCounter = correctCounter;
        this.totalCounter = totalCounter; 
        this.currentQuestionIndex = currentQuestionIndex;
        this.answersLog = []; // Array to store question, selected answer, and result
    }

    updateScore(answer1, questionObj) {
        this.totalCounter += 1;

        let isCorrect = answer1 === questionObj.correct_answer;
        if (isCorrect) {
            this.correctCounter += 1;
        }

        let logEntry = {
            question: questionObj.question, 
            correctAnswer: questionObj.correct_answer,  
            selectedAnswer: answer1,
            isCorrect: isCorrect
        };

        this.answersLog.push(logEntry);

        return `Your score is ${this.correctCounter}/${this.totalCounter} questions`;
    }

    calculateFinalScore() {
        let finalScore = (this.correctCounter / this.totalCounter) * 100;
        return `Your final score is ${finalScore}%`;
    }
}

// Instantiated a quiz
let quiz = new Quiz(0, 0, 0);

// Created a question object
let practiceQuestion1 = new Question('Math', 'What is 2 + 2?', '2', '3', '4', '5', 'c');

// Simulated answering the question
let selectedAnswer = 'c'; 
console.log(quiz.updateScore(selectedAnswer, practiceQuestion1)); 

console.log(quiz.answersLog);