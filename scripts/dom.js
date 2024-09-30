
/*Framework*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit-button').addEventListener('click', function (event){
        // Prevent the form from being submitted
        event.preventDefault();

        if(quiz.currentQuestionIndex >= masterArray.length){
            alert('No more questions');
            return;
        }

        let currentQuestion = masterArray[quiz.currentQuestionIndex]; 

        let selectedOption = document.querySelector('input[name="option"]:checked');
        let answer = selectedOption ? selectedOption.value : null;
        
        if (!answer) {
            alert('Please select an answer before submitting.');
            return;
        }

        let score = quiz.updateScore(answer, currentQuestion.correct_answer);
        let result = currentQuestion.correctAnswer(answer);

        console.log('answer:', answer);
        console.log('correct answer:', currentQuestion.correct_answer);

        document.getElementById('result').innerHTML = result;
        document.getElementById('score').innerHTML = score;

        document.querySelector('#submit-button').disabled = true;
        document.querySelectorAll('input[name="option"]').forEach(option => option.disabled = true);
        // Resets radio buttons so a new answer isnt accidentally set
        document.querySelector('input[name="option"]:checked').checked = false;
    });
});

// This function is used to update the UI with the current question details
function updateQuestionUI(question){
    document.getElementById('question-topic-header').innerHTML = question.subject;
    document.getElementById('topic-question').innerHTML = question.question;
    document.querySelector('label[for="choice-1"]').innerHTML = question.a;
    document.querySelector('label[for="choice-2"]').innerHTML = question.b;
    document.querySelector('label[for="choice-3"]').innerHTML = question.c;
    document.querySelector('label[for="choice-4"]').innerHTML = question.d;
};

// Add an event listener to the 'next-question' button
document.getElementById('next-question').addEventListener('click', function (){
    quiz.currentQuestionIndex++;

    if (quiz.currentQuestionIndex < masterArray.length) {
        updateQuestionUI(masterArray[quiz.currentQuestionIndex]);

        // Reset the result display
        document.getElementById('result').innerHTML = '';
        
        // Reset the selected option
        document.querySelectorAll('input[name="option"]').forEach(option => {
            option.checked = false;
            option.disabled = false;
        });

        // Re-enable the submit button
        document.querySelector('#submit-button').disabled = false;
    } else {
        alert('Quiz complete! ' + quiz.calculateFinalScore());
        
        // Optionally, disable the next question button
        document.getElementById('next-question').disabled = true;
    }
});

// Update the UI with the first question when the page loads
updateQuestionUI(masterArray[quiz.currentQuestionIndex]);

/* 
Handling User Input: Add event listeners to capture when a user selects an answer or submits a response.
Displaying Feedback: Handle the display of feedback (correct/incorrect answers) and progress indicators after each question.
Form for New Questions: Manage the form for adding new questions. Ensure the user can input the question, options, categories, and that the form is reset after submission
*/