
document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-button");
    const retryButton = document.getElementById("retry-button");
    const nextButton = document.getElementById("next-button");
    const feedback = document.getElementById("feedback");

    submitButton.addEventListener("click", () => {
        const answer = document.querySelector('input[name="quiz"]:checked');
        if (!answer) {
            feedback.textContent = "Por favor, selecciona una respuesta.";
            feedback.style.color = "red";
            return;
        }

        if (answer.value === "Lactobacillus") {
            feedback.textContent = "¡Correcto! Puedes avanzar a la siguiente etapa.";
            feedback.style.color = "green";
            submitButton.style.display = "none";
            retryButton.style.display = "none";
            nextButton.style.display = "inline-block";
        } else {
            feedback.textContent = "Incorrecto. Intenta de nuevo.";
            feedback.style.color = "red";
            submitButton.style.display = "none";
            retryButton.style.display = "inline-block";
        }
    });

    retryButton.addEventListener("click", () => {
        const answers = document.querySelectorAll('input[name="quiz"]');
        answers.forEach(answer => answer.checked = false);
        feedback.textContent = "";
        submitButton.style.display = "inline-block";
        retryButton.style.display = "none";
        nextButton.style.display = "none";
    });
});
