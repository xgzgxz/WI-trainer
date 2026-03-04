// Importieren der Fächer-Definitionen
import { subjects } from './subjects.js';

// DOM-Elemente für alle Screens
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const vocabScreen = document.getElementById('vocab-screen');
const resultScreen = document.getElementById('result-screen');

// Allgemeine UI-Elemente
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const subjectSelect = document.getElementById('subject-select');
const difficultySelect = document.getElementById('difficulty-select');
const difficultyLabel = document.getElementById('difficulty-label');
const finalScoreText = document.getElementById('final-score');

// Quiz-spezifische UI-Elemente
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const endBtn = document.getElementById('end-btn');
const scoreDisplayText = document.getElementById('score-display');
const questionsPlayedText = document.getElementById('questions-played');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const explanationText = document.getElementById('explanation-text');

// Vokabel-spezifische UI-Elemente
const vocabCard = document.getElementById('vocab-card');
const vocabTerm = document.getElementById('vocab-term');
const vocabTranslation = document.getElementById('vocab-translation');
const vocabExample = document.getElementById('vocab-example');
const vocabScoreDisplay = document.getElementById('vocab-score-display');
const vocabPlayedDisplay = document.getElementById('vocab-played-display');
const vocabFeedback = document.getElementById('vocab-feedback');
const vocabBtnYes = document.getElementById('vocab-btn-yes');
const vocabBtnNo = document.getElementById('vocab-btn-no');

let allQuestionsOfSubject = [];
let currentItems = [];
let playedCount = 0;
let score = 0;
let currentItem;
let selectedAnswers = [];
let isVocabTransitioning = false; 

// --- INITIALISIERUNG & UI-UPDATES ---

// Füllt die Fächerauswahl beim Start
function populateSubjects() {
    subjectSelect.innerHTML = '';
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject.id;
        option.textContent = subject.name;
        subjectSelect.appendChild(option);
    });
    updateDifficultySelector(); // Direkt beim ersten Mal aufrufen
}

//Passt die zweite Auswahlbox (Schwierigkeit/Units) an das gewählte Fach an
async function updateDifficultySelector() {
    const selectedSubjectId = subjectSelect.value;
    difficultyLabel.style.opacity = 0; // Fade out

    if (selectedSubjectId === 'english_vocab') {
        difficultyLabel.textContent = 'Unit auswählen:';
        const selectedSubject = subjects.find(s => s.id === selectedSubjectId);
        try {
            const module = await import(`./${selectedSubject.questionFile}`);
            const units = [...new Set(module.questions.map(q => q.unit))].sort((a,b) => a - b);
            
            difficultySelect.innerHTML = '<option value="alle">Alle Units</option>';
            units.forEach(unit => {
                difficultySelect.innerHTML += `<option value="${unit}">Unit ${unit}</option>`;
            });
        } catch (e) {
            difficultySelect.innerHTML = '<option value="alle">Alle Units</option>';
        }
    } else {
        difficultyLabel.textContent = 'Schwierigkeit:';
        difficultySelect.innerHTML = `
            <option value="alle">Alle gemischt</option>
            <option value="leicht">Leicht</option>
            <option value="mittel">Mittel</option>
            <option value="schwer">Schwer</option>
        `;
    }
    difficultyLabel.style.opacity = 1; // Fade in
}


// --- QUIZ-LOGIK (ALLGEMEIN) ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Startet den passenden Modus (Quiz oder Vokabeltrainer)
async function start() {
    const selectedSubjectId = subjectSelect.value;
    const selectedFilter = difficultySelect.value;

    const selectedSubject = subjects.find(s => s.id === selectedSubjectId);
    if (!selectedSubject) {
        alert("Bitte ein gültiges Fach auswählen.");
        return;
    }

    try {
        const module = await import(`./${selectedSubject.questionFile}`);
        allQuestionsOfSubject = module.questions;
    } catch (error) {
        console.error("Fragen konnten nicht geladen werden:", error);
        alert(`Für das Fach "${selectedSubject.name}" gibt es noch keine Fragen.`);
        return;
    }
    
    // Filter anwenden (entweder nach Schwierigkeit oder nach Unit)
    if (selectedSubjectId === 'english_vocab') {
        currentItems = allQuestionsOfSubject.filter(
            item => selectedFilter === 'alle' || item.unit == selectedFilter
        );
    } else {
        currentItems = allQuestionsOfSubject.filter(
            item => selectedFilter === 'alle' || item.schwierigkeit === selectedFilter
        );
    }

    if (currentItems.length === 0) {
        alert("Für diese Auswahl gibt es keine Einträge. Bitte wähle etwas anderes.");
        return;
    }

    currentItems = shuffleArray(currentItems);
    playedCount = 0;
    score = 0;
    startScreen.classList.add('hidden');

    // Weiche: Welcher Modus wird gestartet?
    if (selectedSubjectId === 'english_vocab') {
        vocabScreen.classList.remove('hidden');
        loadNextVocab(null);
    } else {
        quizScreen.classList.remove('hidden');
        loadNextQuestion();
    }
}

function showResult() {
    quizScreen.classList.add('hidden');
    vocabScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    finalScoreText.innerText = `Du hast ${score} von ${playedCount} möglichen Punkten erreicht!`;
}

function resetApp() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    populateSubjects(); // Fächer und Schwierigkeiten neu laden
}

// --- MULTIPLE CHOICE QUIZ: SPEZIFISCHE FUNKTIONEN ---

function loadNextQuestion() {
    if (playedCount >= currentItems.length) {
        showResult();
        return;
    }
    currentItem = currentItems[playedCount];

    selectedAnswers = [];
    feedbackContainer.classList.add('hidden');
    checkBtn.classList.remove('hidden');
    checkBtn.disabled = true;
    checkBtn.style.opacity = "0.5";
    optionsContainer.innerHTML = '';
    
    scoreDisplayText.innerText = `Punkte: ${score}`;
    questionsPlayedText.innerText = `Frage: ${playedCount + 1} / ${currentItems.length}`;
    questionText.innerText = currentItem.question;

    currentItem.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.innerText = optionText;
        button.classList.add('option-btn');
        button.addEventListener('click', () => toggleSelection(button, index));
        optionsContainer.appendChild(button);
    });
}

// WIEDERHERGESTELLT: Logik zum Auswählen einer Option
function toggleSelection(button, index) {
    const answerPos = selectedAnswers.indexOf(index);
   if (answerPos === -1) {
        // Noch nicht ausgewählt -> hinzufügen
        selectedAnswers.push(index);
        button.classList.add('selected');
    } else {
        // Bereits ausgewählt -> wieder entfernen (Toggle)
        selectedAnswers.splice(answerPos, 1);
        button.classList.remove('selected');
    }

    // Prüfen-Button nur aktivieren, wenn mindestens eine Option gewählt ist
    if (selectedAnswers.length > 0) {
        checkBtn.disabled = false;
        checkBtn.style.opacity = "1";
    } else {
        checkBtn.disabled = true;
        checkBtn.style.opacity = "0.5";
    }
}

function checkAnswer() {
    playedCount++;
    
    // Die richtigen Antworten aus dem Fragen-Objekt laden (heißt "correct", nicht "answer")
    const correctAnswers = currentItem.correct || [];

    // Arrays sortieren und vergleichen, um zu prüfen, ob exakt die richtigen gewählt wurden
    const sortedSelected = [...selectedAnswers].sort();
    const sortedCorrect = [...correctAnswers].sort();
    
    const isCorrect = sortedSelected.length === sortedCorrect.length && 
                      sortedSelected.every((val, index) => val === sortedCorrect[index]);

    document.querySelectorAll('.option-btn').forEach((btn, index) => {
        btn.disabled = true; // Buttons deaktivieren nach der Antwort
        
        const isSelected = selectedAnswers.includes(index);
        const isActuallyCorrect = correctAnswers.includes(index);
        
        if (isActuallyCorrect) {
            btn.classList.add('correct'); // Richtige Antwort immer markieren
        } else if (isSelected && !isActuallyCorrect) {
            btn.classList.add('wrong'); // Falsche Auswahl rot markieren
        }
    });

    if (isCorrect) {
        score++;
        feedbackText.textContent = "Richtig!";
    } else {
        feedbackText.textContent = "Leider falsch.";
    }
    
    explanationText.textContent = currentItem.explanation || '';
    scoreDisplayText.innerText = `Punkte: ${score}`;
    questionsPlayedText.innerText = `Frage: ${playedCount} / ${currentItems.length}`;

    feedbackContainer.classList.remove('hidden');
    checkBtn.classList.add('hidden');
}


// --- VOKABELTRAINER: SPEZIFISCHE FUNKTIONEN ---

function loadNextVocab(knewIt) {
    if (isVocabTransitioning) return; // Verhindert schnelle Doppelklicks
    isVocabTransitioning = true;

    // 1. Punktzahl aktualisieren (falls eine Antwort gegeben wurde)
    if (knewIt === true) {
        score++;
    }
    if (knewIt !== null) { // null bedeutet, es ist die allererste Karte
        playedCount++;
    }

    // 2. Prüfen, ob das Quiz vorbei ist
    if (playedCount >= currentItems.length && knewIt !== null) {
        showResult();
        isVocabTransitioning = false;
        return;
    }

    // 3. Karte ausblenden
    vocabCard.style.opacity = '0';
    vocabFeedback.classList.add('hidden');

    // 4. Warten, bis die Ausblend-Animation abgeschlossen ist (250ms)
    setTimeout(() => {
        
        // 5. Animationen KOMPLETT deaktivieren
        vocabCard.style.transition = 'none';
        
        // 6. Karte sofort und ohne Animation zurückdrehen
        vocabCard.classList.remove('flipped');
        
        // 7. Neuen Inhalt in die unsichtbare Karte laden
        currentItem = currentItems[playedCount];
        vocabTerm.textContent = currentItem.english;
        vocabTranslation.textContent = currentItem.german;
        vocabExample.textContent = currentItem.example || '';
        
        // 8. Punktestand aktualisieren
        vocabScoreDisplay.innerText = `Gelernt: ${score}`;
        vocabPlayedDisplay.innerText = `Fortschritt: ${playedCount} / ${currentItems.length}`;

        // 9. Der bulletproof-Trick: Wir warten genau 2 Bildschirm-Frames ab.
        // Das garantiert, dass die un-animierte Karte im Hintergrund fest registriert wurde.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                
                // Animationen wieder einschalten (leerer String holt die Regeln aus der style.css)
                vocabCard.style.transition = ''; 
                
                // Karte sanft wieder einblenden
                vocabCard.style.opacity = '1';
                
                // Klicks wieder erlauben
                isVocabTransitioning = false; 
                
            });
        });

    }, 250); 
}

function handleVocabAnswer(knewIt) {
    loadNextVocab(knewIt); // Ruft die Ladefunktion mit dem Ergebnis auf
}

// --- EVENT LISTENER ---

document.addEventListener('DOMContentLoaded', populateSubjects);
subjectSelect.addEventListener('change', updateDifficultySelector);
startBtn.addEventListener('click', start);
restartBtn.addEventListener('click', resetApp);

// Quiz-Listener
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', loadNextQuestion);
endBtn.addEventListener('click', showResult);

// Vokabel-Listener
vocabCard.addEventListener('click', () => {
    if (!vocabCard.classList.contains('flipped')) {
        vocabCard.classList.add('flipped');
        vocabFeedback.classList.remove('hidden');
    }
});
vocabBtnYes.addEventListener('click', () => handleVocabAnswer(true));
vocabBtnNo.addEventListener('click', () => handleVocabAnswer(false));