// java script code for quiz

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Example: Check answers and display results
    const answers = {
        q1: 'B', 
        q2: 'C',
        q3: 'A',
        q4: 'A',
        q5: 'D'// Correct answer for question 1
        // Add more answers similarly
    };

    let score = 0;

    // Check each question
    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[`q${i}`]) {
                score++;
            }
        }
    }

    // Display results
    const quizResults = document.getElementById('quiz-results');
    quizResults.innerHTML = `<h2>Your Quiz Results:</h2>
                             <p>You scored ${score} out of ${Object.keys(answers).length}.</p>`;
});