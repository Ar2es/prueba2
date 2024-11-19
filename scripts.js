
let currentStage = 1;

function startQuiz() {
    document.getElementById('quiz-section').classList.remove('hidden');
}

function checkAnswer() {
    const answer = document.getElementById('quiz-answer').value;
    const feedback = document.getElementById('feedback');
    const retryButton = document.getElementById('retry');
    const nextStageButton = document.getElementById('next-stage');

    if (answer === "4") {
        feedback.textContent = "Correct! You can now proceed to the next stage.";
        nextStageButton.classList.remove('hidden');
        retryButton.classList.add('hidden');
    } else {
        feedback.textContent = "Incorrect. Try again by clicking Retry.";
        retryButton.classList.remove('hidden');
        nextStageButton.classList.add('hidden');
    }
}

function retryQuiz() {
    document.getElementById('quiz-answer').value = "";
    document.getElementById('feedback').textContent = "";
    document.getElementById('retry').classList.add('hidden');
}

function unlockNextStage() {
    document.getElementById(`stage${currentStage}`).classList.add('locked');
    document.getElementById(`stage${currentStage}`).classList.remove('unlocked');
    currentStage++;
    if (document.getElementById(`stage${currentStage}`)) {
        document.getElementById(`stage${currentStage}`).classList.add('unlocked');
        document.getElementById(`stage${currentStage}`).classList.remove('locked');
    }
    document.getElementById('quiz-section').classList.add('hidden');
}
