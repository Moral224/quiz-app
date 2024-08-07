// const quizData = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//         correct: 2
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Saturn"],
//         correct: 1
//     },
//     {
//         question: "What is the largest ocean on Earth?",
//         options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//         correct: 3
//     }
// ];

// let currentQuestionIndex = 0;
// let userAnswers = Array(quizData.length).fill(null);

// const questionEl = document.getElementById('question');
// const optionsEl = document.getElementById('options');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
// const submitBtn = document.getElementById('submit-btn');
// const scoreContainer = document.getElementById('score-container').querySelector('table');
// const questionContainer = document.getElementById('question-container');

// function loadQuestion(index) {
//     const currentQuestion = quizData[index];
//     questionEl.innerText = currentQuestion.question;
//     optionsEl.innerHTML = '';

//     currentQuestion.options.forEach((option, i) => {
//         const label = document.createElement('label');
//         const input = document.createElement('input');
//         input.type = 'radio';
//         input.name = 'option';
//         input.value = i;
//         if (userAnswers[index] === i) {
//             input.checked = true;
//         }
//         label.appendChild(input);
//         label.appendChild(document.createTextNode(option));
//         optionsEl.appendChild(label);
//     });

//     prevBtn.disabled = index === 0;
//     nextBtn.style.display = index === quizData.length - 1 ? 'none' : 'inline';
//     submitBtn.style.display = index === quizData.length - 1 ? 'inline' : 'none';
// }

// function saveAnswer() {
//     const selectedOption = document.querySelector('input[name="option"]:checked');
//     if (selectedOption) {
//         userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
//     }
// }

// function showScore() {
//     document.getElementById('score-container').style.display = 'block';
//     questionContainer.style.display = 'none'; // Hide the question container
//     scoreContainer.innerHTML = `
//         <tr>
//             <th>Question</th>
//             <th>Your Answer</th>
//             <th>Correct Answer</th>
//         </tr>
//     `;

//     quizData.forEach((question, index) => {
//         const row = scoreContainer.insertRow();
//         row.insertCell(0).innerText = question.question;
//         row.insertCell(1).innerText = question.options[userAnswers[index]];
//         row.insertCell(2).innerText = question.options[question.correct];
//     });

//     const score = userAnswers.reduce((score, answer, index) => score + (answer === quizData[index].correct ? 1 : 0), 0);
//     const scoreRow = scoreContainer.insertRow();
//     const scoreCell = scoreRow.insertCell(0);
//     scoreCell.colSpan = 3;
//     scoreCell.innerText = `Your Score: ${score} / ${quizData.length}`;
// }

// prevBtn.addEventListener('click', () => {
//     saveAnswer();
//     currentQuestionIndex--;
//     loadQuestion(currentQuestionIndex);
// });

// nextBtn.addEventListener('click', () => {
//     saveAnswer();
//     currentQuestionIndex++;
//     loadQuestion(currentQuestionIndex);
// });

// submitBtn.addEventListener('click', () => {
//     saveAnswer();
//     showScore();
// });

// loadQuestion(currentQuestionIndex);

// const quizData = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//         correct: 2
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Saturn"],
//         correct: 1
//     },
//     {
//         question: "What is the largest ocean on Earth?",
//         options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//         correct: 3
//     }
// ];

// let currentQuestionIndex = 0;
// let userAnswers = Array(quizData.length).fill(null);

// const questionEl = document.getElementById('question');
// const optionsEl = document.getElementById('options');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
// const submitBtn = document.getElementById('submit-btn');
// const scoreContainer = document.getElementById('score-container').querySelector('table');
// const questionContainer = document.getElementById('question-container');

// function loadQuestion(index) {
//     const currentQuestion = quizData[index];
//     questionEl.innerText = currentQuestion.question;
//     optionsEl.innerHTML = '';

//     currentQuestion.options.forEach((option, i) => {
//         const label = document.createElement('label');
//         const input = document.createElement('input');
//         input.type = 'radio';
//         input.name = 'option';
//         input.value = i;
//         if (userAnswers[index] === i) {
//             input.checked = true;
//         }
//         label.appendChild(input);
//         label.appendChild(document.createTextNode(option));
//         optionsEl.appendChild(label);
//     });

//     prevBtn.disabled = index === 0;
//     nextBtn.style.display = index === quizData.length - 1 ? 'none' : 'inline';
//     submitBtn.style.display = index === quizData.length - 1 ? 'inline' : 'none';
// }

// function saveAnswer() {
//     const selectedOption = document.querySelector('input[name="option"]:checked');
//     if (selectedOption) {
//         userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
//     }
// }

// function showScore() {
//     document.getElementById('score-container').style.display = 'block';
//     questionContainer.style.display = 'none'; // Hide the question container
//     scoreContainer.innerHTML = `
//         <tr>
//             <th>Question</th>
//             <th>Your Answer</th>
//             <th>Correct Answer</th>
//         </tr>
//     `;

//     quizData.forEach((question, index) => {
//         const row = scoreContainer.insertRow();
//         row.insertCell(0).innerText = question.question;
//         row.insertCell(1).innerText = question.options[userAnswers[index]];
//         row.insertCell(2).innerText = question.options[question.correct];
//     });

//     const score = userAnswers.reduce((score, answer, index) => score + (answer === quizData[index].correct ? 1 : 0), 0);
//     const scoreRow = scoreContainer.insertRow();
//     const scoreCell = scoreRow.insertCell(0);
//     scoreCell.colSpan = 3;
//     scoreCell.innerText = `Your Score: ${score} / ${quizData.length}`;
// }

// prevBtn.addEventListener('click', () => {
//     saveAnswer();
//     currentQuestionIndex--;
//     loadQuestion(currentQuestionIndex);
// });

// nextBtn.addEventListener('click', () => {
//     saveAnswer();
//     if (userAnswers[currentQuestionIndex] !== null) {
//         currentQuestionIndex++;
//         loadQuestion(currentQuestionIndex);
//     } else {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Please answer the question before proceeding.",
            
//           });
//     }
// });

// submitBtn.addEventListener('click', () => {
//     saveAnswer();
//     showScore();
// });

// loadQuestion(currentQuestionIndex);


const quizData = [
    {
        question: "According to book titled managing your emotion: How many types of personalities do we have?",
        options: ["2", "6", "4", "8"],
        correct: 2
    },
    {
        question: "Tying times are ________ times?",
        options: ["Failing times", "Learning times", "Managing times", "Praying times"],
        correct: 1
    },
    {
        question: "Joyce Meyer suggests that which of the following can help manage negative emotions?",
        options: ["Constantly thinking about past mistakes", "Ignoring negative thoughts", "Isolating yourself from others", "Engaging in regular physical exercise"],
        correct: 3
    },
    {
        question: "Which emotion does Meyer specifically address as needing careful management to prevent it from becoming destructive?",
        options: ["Happiness", "Contentment", "Anger", "Excitment"],
        correct: 2
    },
    {
        question: "What does Meyer recommend as a daily practice to maintain emotional balance?",
        options: ["Maintaining a gratitude journal", "Dwelling on negative experiences", "Avoiding all social interactions", "Keeping emotions bottled up"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let userAnswers = Array(quizData.length).fill(null);

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreContainer = document.getElementById('score-container').querySelector('table');
const questionContainer = document.getElementById('question-container');

function loadQuestion(index) {
    const currentQuestion = quizData[index];
    questionEl.innerText = currentQuestion.question;
    optionsEl.innerHTML = '';

    currentQuestion.options.forEach((option, i) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = i;
        if (userAnswers[index] === i) {
            input.checked = true;
        }
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsEl.appendChild(label);
    });

    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === quizData.length - 1 ? 'none' : 'inline';
    submitBtn.style.display = index === quizData.length - 1 ? 'inline' : 'none';
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
    }
}

function showScore() {
    document.getElementById('score-container').style.display = 'block';
    questionContainer.style.display = 'none'; // Hide the question container
    scoreContainer.innerHTML = `
        <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
        </tr>
    `;

    quizData.forEach((question, index) => {
        const row = scoreContainer.insertRow();
        row.insertCell(0).innerText = question.question;
        row.insertCell(1).innerText = question.options[userAnswers[index]];
        row.insertCell(2).innerText = question.options[question.correct];
    });

    const score = userAnswers.reduce((score, answer, index) => score + (answer === quizData[index].correct ? 1 : 0), 0);
    const scoreRow = scoreContainer.insertRow();
    const scoreCell = scoreRow.insertCell(0);
    scoreCell.colSpan = 3;
    scoreCell.innerText = `Your Score: ${score} / ${quizData.length}`;
}

prevBtn.addEventListener('click', () => {
    saveAnswer();
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
});

nextBtn.addEventListener('click', () => {
    saveAnswer();
    if (userAnswers[currentQuestionIndex] !== null) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please answer the question before proceeding.",
          });
    }
});

submitBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to submit?")) {
        saveAnswer();
        showScore();
    }
});

loadQuestion(currentQuestionIndex);
