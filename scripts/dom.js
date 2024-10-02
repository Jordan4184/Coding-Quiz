// DOMContentLoaded stalls so that the HTML and styling can be parsed first
document.addEventListener('DOMContentLoaded', function() {
    // 'submit-button' event listener
    document.querySelector('#submit-button').addEventListener('click', function (event){
        // Prevent the form from being submitted blank
        event.preventDefault();

        // Ensures the quiz stops taking input if there are no more questions
        if (quiz.currentQuestionIndex >= masterArray.length) {
            alert('No more questions');
            return;
        }

        // Selects the current question via index from masterArray
        let currentQuestion = masterArray[quiz.currentQuestionIndex]; 

        // Query for the selected option
        let selectedOption = document.querySelector('input[name="option"]:checked');
        let answer = selectedOption ? selectedOption.value : null;
        
        if (!answer) {
            alert('Please select an answer before submitting.');
            return;
        }

        // Updates score and gets the result
        let score = quiz.updateScore(answer, currentQuestion.correct_answer);
        let result = currentQuestion.correctAnswer(answer);

        // Logs for debugging
        console.log('answer:', answer);
        console.log('correct answer:', currentQuestion.correct_answer);

        // Updates the DOM with the result and score
        document.getElementById('result').innerHTML = result;
        document.getElementById('score').innerHTML = score;

        // Disables the submit button and options after submission
        document.querySelector('#submit-button').disabled = true;
        document.querySelectorAll('input[name="option"]').forEach(option => option.disabled = true);
    });

    // 'next-question' event listener
    document.getElementById('next-question').addEventListener('click', function (){
        quiz.currentQuestionIndex++;

        // If question is available, update to the next question
        if (quiz.currentQuestionIndex < masterArray.length) {
            updateQuestionUI(masterArray[quiz.currentQuestionIndex]);

            // Reset the result display
            document.getElementById('result').innerHTML = '';
            
            // Reset the selected options and enable them
            document.querySelectorAll('input[name="option"]').forEach(option => {
                option.checked = false;
                option.disabled = false;
            });

            // Re-enable the submit button
            document.querySelector('#submit-button').disabled = false;
        } else {
            alert('Quiz complete! You scored ' + quiz.calculateFinalScore());

            // Disable the next question button
            document.getElementById('next-question').disabled = true;

            // Optionally, reset the quiz or provide options to restart
        }
    });

    // Update the UI with the first question when the page loads
    updateQuestionUI(masterArray[quiz.currentQuestionIndex]);
});

// This function is used to update the UI with the current question details by accessing Question class
function updateQuestionUI(question){
    document.getElementById('question-topic-header').innerHTML = question.subject;
    document.getElementById('topic-question').innerHTML = question.question;
    document.querySelector('label[for="choice-1"]').innerHTML = question.a;
    document.querySelector('label[for="choice-2"]').innerHTML = question.b;
    document.querySelector('label[for="choice-3"]').innerHTML = question.c;
    document.querySelector('label[for="choice-4"]').innerHTML = question.d;

    // Reset radio buttons in case they were previously disabled
    document.querySelectorAll('input[name="option"]').forEach(option => {
        option.checked = false;
        option.disabled = false;
    });

    // Ensure the submit button is enabled
    document.querySelector('#submit-button').disabled = false;
}