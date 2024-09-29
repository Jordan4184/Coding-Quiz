
/*Framework*/

/*
Rendering Questions: Create functions to render the current question, including displaying the question text and multiple-choice options.*/
function updateQuestionUI(question){
    document.getElementById('question-topic-header').innerHTML = question.subject;
    document.getElementById('topic-question').innerHTML = question.question;
    document.querySelector('label[for="choice-1"]').innerHTML = question.a;
    document.querySelector('label[for="choice-2"]').innerHTML = question.b;
    document.querySelector('label[for="choice-3"]').innerHTML = question.c;
    document.querySelector('label[for="choice-4"]').innerHTML = question.d;
};

document.getElementById('next-question').addEventListener('click', function (){
    currentQuestionIndex++;
    if(currentQuestionIndex < masterArray.length)
        updateQuestionUI(masterArray[currentQuestionIndex]);
});

updateQuestionUI(masterArray[currentQuestionIndex]);


/* Handling User Input: Add event listeners to capture when a user selects an answer or submits a response.
Displaying Feedback: Handle the display of feedback (correct/incorrect answers) and progress indicators after each question.
Form for New Questions: Manage the form for adding new questions. Ensure the user can input the question, options, categories, and time limit, and that the form is reset after submission.
*/