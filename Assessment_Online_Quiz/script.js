const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the red planet?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correct: 2
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["NaCl", "O2", "CO2", "H2O"],
        correct: 3
    },
    {
        question: "What is the chemical symbol for salt?",
        options: ["O2", "H2O", "NaCl", "H2O"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.querySelector("#question p");
const optionLabels = Array.from(document.querySelectorAll("#question label"));
const optionInputs = Array.from(document.querySelectorAll("#question input"));
const nextButton = document.getElementById("nxt");
const previousButton = document.getElementById("pre");
const submitButton = document.getElementById("submit");
const Score = document.createElement("h4") 
const bton = document.querySelector("#btn")
const updateQuestion = () => {
    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;

    optionLabels.forEach((label, index) => {
        label.textContent = questionData.options[index];
        optionInputs[index].checked = false;
    });

    bton.appendChild(submitButton);
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? "Block" : "none";
    submitButton.style.backgroundColor = "red";
};

const checkAnswer = () => {
    const selectedOptionIndex = optionInputs.findIndex(input => input.checked);
    if (selectedOptionIndex === questions[currentQuestionIndex].correct) {
        score++;
    }
};

nextButton.addEventListener("click", () => {
    checkAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
});

previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
    submitButton.style.display='none'
    bton.removeChild(Score)
});

submitButton.addEventListener("click", () => {
    checkAnswer();
    Score.textContent=`Quiz Completed! Your score is ${score} out of ${questions.length}.`;
    bton.appendChild(Score)
    submitButton.style.display='block'
});
updateQuestion();

