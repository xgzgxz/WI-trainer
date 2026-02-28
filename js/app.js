const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const endBtn = document.getElementById('end-btn'); // NEU
const restartBtn = document.getElementById('restart-btn');

const subjectSelect = document.getElementById('subject-select');
const difficultySelect = document.getElementById('difficulty-select');

const scoreDisplayText = document.getElementById('score-display');
const questionsPlayedText = document.getElementById('questions-played'); // NEU
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const explanationText = document.getElementById('explanation-text');
const finalScoreText = document.getElementById('final-score');

let currentQuestions = [];
let playedCount = 0; // NEU: Zählt, wie viele Fragen beantwortet wurden
let score = 0;
let selectedOptions = [];
let currentQuestion; // Speichert das aktuelle Frage-Objekt

// Event-Listener
startBtn.addEventListener('click', startQuiz);
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', loadNextQuestion);
endBtn.addEventListener('click', showResult); // NEU
restartBtn.addEventListener('click', resetQuiz);

// Hilfsfunktion: Array zufällig mischen (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const selectedSubject = subjectSelect.value;
    const selectedDifficulty = difficultySelect.value;

    // Fragen filtern
    currentQuestions = alleQuizFragen.filter(
        q => q.fach === selectedSubject && q.schwierigkeit === selectedDifficulty
    );

    if (currentQuestions.length === 0) {
        alert("Für dieses Fach und diesen Schwierigkeitsgrad gibt es noch keine Fragen. Bitte wähle etwas anderes.");
        return;
    }

    // NEU: Fragen mischen!
    currentQuestions = shuffleArray(currentQuestions);

    playedCount = 0;
    score = 0;

    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    loadNextQuestion();
}

function loadNextQuestion() {
    // Wenn alle Fragen durch sind, mischen wir sie einfach neu und fangen von vorne an (Endlos-Loop)
    if (playedCount > 0 && playedCount % currentQuestions.length === 0) {
        currentQuestions = shuffleArray(currentQuestions);
    }
    
    // Die aktuelle Frage wird basierend auf der Anzahl der gespielten Fragen (modulo Array-Länge) ausgewählt
    currentQuestion = currentQuestions[playedCount % currentQuestions.length];

    // UI zurücksetzen
    feedbackContainer.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    checkBtn.disabled = true;
    checkBtn.style.opacity = "0.5";
    optionsContainer.innerHTML = '';
    selectedOptions = [];

    // Texte aktualisieren
    scoreDisplayText.innerText = `Punkte: ${score}`;
    questionsPlayedText.innerText = `Gespielt: ${playedCount}`;
    questionText.innerText = currentQuestion.question;

    // Buttons generieren
    currentQuestion.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.innerText = optionText;
        button.classList.add('option-btn');
        button.addEventListener('click', () => toggleSelection(button, index));
        optionsContainer.appendChild(button);
    });
}

function toggleSelection(button, index) {
    if (!checkBtn.classList.contains('hidden') === false) return;

    const indexInArray = selectedOptions.indexOf(index);
    if (indexInArray > -1) {
        selectedOptions.splice(indexInArray, 1);
        button.classList.remove('selected');
    } else {
        selectedOptions.push(index);
        button.classList.add('selected');
    }

    if (selectedOptions.length > 0) {
        checkBtn.disabled = false;
        checkBtn.style.opacity = "1";
    } else {
        checkBtn.disabled = true;
        checkBtn.style.opacity = "0.5";
    }
}

function checkAnswer() {
    const correctOptions = currentQuestion.correct;
    
    const sortedSelected = [...selectedOptions].sort();
    const sortedCorrect = [...correctOptions].sort();
    
    const isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect);

    if (isCorrect) {
        score++;
        feedbackText.innerText = "Richtig! 🎉";
        feedbackText.style.color = "#27ae60";
    } else {
        feedbackText.innerText = "Leider falsch! 😕";
        feedbackText.style.color = "#e74c3c";
    }

    playedCount++; // Frage wurde beantwortet
    explanationText.innerText = currentQuestion.explanation;

    const allButtons = optionsContainer.children;
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.pointerEvents = "none";
        
        if (correctOptions.includes(i)) {
            allButtons[i].classList.add('correct');
        } else if (selectedOptions.includes(i)) {
            allButtons[i].classList.add('wrong');
        }
    }

    scoreDisplayText.innerText = `Punkte: ${score}`;
    questionsPlayedText.innerText = `Gespielt: ${playedCount}`;
    checkBtn.classList.add('hidden');
    feedbackContainer.classList.remove('hidden');
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    finalScoreText.innerText = `Du hast ${score} Punkte bei ${playedCount} gespielten Fragen erreicht!`;
}

function resetQuiz() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}