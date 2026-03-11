// Importieren der Fächer-Definitionen
import { subjects } from "./subjects.js";

// DOM-Elemente für alle Screens
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const vocabScreen = document.getElementById("vocab-screen");
const resultScreen = document.getElementById("result-screen");

// Allgemeine UI-Elemente
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const retryIncorrectBtn = document.getElementById("retry-incorrect-btn");
const subjectSelect = document.getElementById("subject-select");
const difficultySelect = document.getElementById("difficulty-select");
const difficultyLabel = document.getElementById("difficulty-label");
const finalScoreText = document.getElementById("final-score");
const themeToggle = document.getElementById("theme-toggle");

// Quiz-spezifische UI-Elemente
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const endBtn = document.getElementById("end-btn");
const scoreDisplayText = document.getElementById("score-display");
const questionsPlayedText = document.getElementById("questions-played");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackContainer = document.getElementById("feedback-container");
const feedbackText = document.getElementById("feedback-text");
const explanationText = document.getElementById("explanation-text");
const mcQuitBtn = document.getElementById("mc-quit-btn");

// Vokabel-spezifische UI-Elemente
const vocabCard = document.getElementById("vocab-card");
const vocabTerm = document.getElementById("vocab-term");
const vocabTranslation = document.getElementById("vocab-translation");
const vocabExample = document.getElementById("vocab-example");
const vocabScoreDisplay = document.getElementById("vocab-score-display");
const vocabPlayedDisplay = document.getElementById("vocab-played-display");
const vocabFeedback = document.getElementById("vocab-feedback");
const vocabBtnYes = document.getElementById("vocab-btn-yes");
const vocabBtnNo = document.getElementById("vocab-btn-no");
const vocabQuitBtn = document.getElementById("vocab-quit-btn");

let allQuestionsOfSubject = [];
let currentItems = [];
let incorrectItems = [];
let playedCount = 0;
let score = 0;
let currentItem;
let selectedAnswers = [];
let isVocabTransitioning = false;

// --- VIEWPORT FIX FÜR MOBILE BROWSER ---
function setViewportHeight() {
  // Holt die echte, sichtbare innere Höhe in Pixeln und teilt sie durch 100
  let vh = window.innerHeight * 0.01;
  // Setzt eine CSS-Variable '--vh', die wir in der style.css nutzen
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
// Einmal beim Start ausführen und bei jeder Änderung der Fenstergröße
window.addEventListener("resize", setViewportHeight);
setViewportHeight();

// --- DARK MODE LOGIK ---
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.checked = false;
  }
}

function handleThemeToggle() {
  const newTheme = themeToggle.checked ? "dark" : "light";
  localStorage.setItem("wi_trainer_theme", newTheme);
  applyTheme(newTheme);
}
// --- INITIALISIERUNG & UI-UPDATES ---

// Füllt die Fächerauswahl beim Start
function populateSubjects() {
  subjectSelect.innerHTML = "";
  subjects.forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject.id;
    option.textContent = subject.name;
    subjectSelect.appendChild(option);
  });

  // Gespeichertes Fach laden
  const savedSubject = localStorage.getItem("wi_trainer_subject");
  if (savedSubject && subjects.some((s) => s.id === savedSubject)) {
    subjectSelect.value = savedSubject;
  }

  updateDifficultySelector();
}

//Passt die zweite Auswahlbox (Schwierigkeit/Units) an das gewählte Fach an
async function updateDifficultySelector() {
  const selectedSubjectId = subjectSelect.value;
  difficultyLabel.style.opacity = 0; // Fade out

  // Fach speichern
  localStorage.setItem("wi_trainer_subject", selectedSubjectId);

  if (selectedSubjectId.startsWith("english_vocab")) {
    difficultyLabel.textContent = "Unit auswählen:";
    const selectedSubject = subjects.find((s) => s.id === selectedSubjectId);
    try {
      const module = await import(`./questions/${selectedSubjectId}.js`);
      const units = [...new Set(module.questions.map((q) => q.unit))].sort(
        (a, b) => a - b,
      );

      difficultySelect.innerHTML = '<option value="alle">Alle Units</option>';
      units.forEach((unit) => {
        difficultySelect.innerHTML += `<option value="${unit}">Unit ${unit}</option>`;
      });
    } catch (e) {
      difficultySelect.innerHTML = '<option value="alle">Alle Units</option>';
    }
  } else {
    difficultyLabel.textContent = "Schwierigkeit:";
    difficultySelect.innerHTML = `
            <option value="alle">Alle gemischt</option>
            <option value="leicht">Leicht</option>
            <option value="mittel">Mittel</option>
            <option value="schwer">Schwer</option>
        `;
  }

  // Gespeicherte Schwierigkeit laden
  const savedDifficulty = localStorage.getItem("wi_trainer_difficulty");
  const optionExists = Array.from(difficultySelect.options).some(
    (opt) => opt.value === savedDifficulty,
  );

  if (savedDifficulty && optionExists) {
    difficultySelect.value = savedDifficulty;
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

  const selectedSubject = subjects.find((s) => s.id === selectedSubjectId);
  if (!selectedSubject) {
    alert("Bitte ein gültiges Fach auswählen.");
    return;
  }

  try {
    const module = await import(`./questions/${selectedSubjectId}.js`);
    allQuestionsOfSubject = module.questions;
  } catch (error) {
    console.error("Fragen konnten nicht geladen werden:", error);
    alert(`Für das Fach "${selectedSubject.name}" gibt es noch keine Fragen.`);
    return;
  }

  // Filter anwenden (entweder nach Schwierigkeit oder nach Unit)
  if (selectedSubjectId.startsWith("english_vocab")) {
    currentItems = allQuestionsOfSubject.filter(
      (item) => selectedFilter === "alle" || item.unit == selectedFilter,
    );
  } else {
    currentItems = allQuestionsOfSubject.filter(
      (item) =>
        selectedFilter === "alle" || item.schwierigkeit === selectedFilter,
    );
  }

  if (currentItems.length === 0) {
    alert(
      "Für diese Auswahl gibt es keine Einträge. Bitte wähle etwas anderes.",
    );
    return;
  }

  currentItems = shuffleArray(currentItems);
  playedCount = 0;
  score = 0;
  incorrectItems = [];
  startScreen.classList.add("hidden");

  // Weiche: Welcher Modus wird gestartet?
  if (selectedSubjectId.startsWith("english_vocab")) {
    vocabScreen.classList.remove("hidden");
    loadNextVocab(null);
  } else {
    quizScreen.classList.remove("hidden");
    loadNextQuestion();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  vocabScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScoreText.innerText = `Du hast ${score} von ${playedCount} möglichen Punkten erreicht!`;

  if (incorrectItems.length > 0) {
    retryIncorrectBtn.classList.remove("hidden");
    retryIncorrectBtn.innerText = `Falsche wiederholen (${incorrectItems.length})`;
  } else {
    retryIncorrectBtn.classList.add("hidden");
  }
}

function retryIncorrect() {
  currentItems = shuffleArray([...incorrectItems]); // Die falschen werden die neuen aktuellen
  incorrectItems = []; // Für den zweiten Durchlauf wieder zurücksetzen
  playedCount = 0;
  score = 0;

  resultScreen.classList.add("hidden");

  if (subjectSelect.value.startsWith("english_vocab")) {
    vocabScreen.classList.remove("hidden");
    loadNextVocab(null);
  } else {
    quizScreen.classList.remove("hidden");
    loadNextQuestion();
  }
}

function resetApp() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
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
  feedbackContainer.classList.add("hidden");
  checkBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
  checkBtn.disabled = true;
  checkBtn.style.opacity = "0.5";
  optionsContainer.innerHTML = "";

  scoreDisplayText.innerText = `Punkte: ${score}`;
  questionsPlayedText.innerText = `Frage: ${playedCount + 1} / ${currentItems.length}`;
  questionText.innerText = currentItem.question;

  // Logik zum Ein- und Ausblenden der Beenden-Buttons
  mcQuitBtn.classList.remove("hidden"); // Den "Beenden"-Button vor der Antwort anzeigen
  
  let shuffledOptions = currentItem.options.map((text, index) => {
      return { text: text, originalIndex: index };
  });

  shuffledOptions = shuffleArray(shuffledOptions);
  // Die gemischten Antworten rendern
  shuffledOptions.forEach((optionObj) => {
    const button = document.createElement("button");
    button.innerText = optionObj.text;
    button.classList.add("option-btn");
    // Den Original-Index im HTML-Element speichern, damit wir ihn später prüfen können
    button.dataset.originalIndex = optionObj.originalIndex;
    button.addEventListener("click", () =>
      toggleSelection(button, optionObj.originalIndex),
    );
    optionsContainer.appendChild(button);
  });
}

// Logik zum Auswählen einer Option
function toggleSelection(button, index) {
  const answerPos = selectedAnswers.indexOf(index);
  if (answerPos === -1) {
    selectedAnswers.push(index);
    button.classList.add("selected");
  } else {
    selectedAnswers.splice(answerPos, 1);
    button.classList.remove("selected");
  }

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

  const correctAnswers = currentItem.correct || [];
  const sortedSelected = [...selectedAnswers].sort();
  const sortedCorrect = [...correctAnswers].sort();
  const isCorrect =
    sortedSelected.length === sortedCorrect.length &&
    sortedSelected.every((val, index) => val === sortedCorrect[index]);

  document.querySelectorAll(".option-btn").forEach((btn, index) => {
    btn.disabled = true;
    // Wir lesen den Original-Index aus dem Button aus anstatt die DOM-Reihenfolge zu nutzen
    const originalIndex = parseInt(btn.dataset.originalIndex, 10);

    const isSelected = selectedAnswers.includes(originalIndex);
    const isActuallyCorrect = correctAnswers.includes(originalIndex);

    if (isActuallyCorrect) {
      btn.classList.add("correct");
    } else if (isSelected && !isActuallyCorrect) {
      btn.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score++;
    feedbackText.textContent = "Richtig!";
  } else {
    feedbackText.textContent = "Leider falsch.";
    incorrectItems.push(currentItem);
  }

  explanationText.textContent = currentItem.explanation || "";
  scoreDisplayText.innerText = `Punkte: ${score}`;
  questionsPlayedText.innerText = `Frage: ${playedCount} / ${currentItems.length}`;

  feedbackContainer.classList.remove("hidden");
  checkBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");

  mcQuitBtn.classList.add("hidden");
  endBtn.classList.remove("hidden");
}

// --- VOKABELTRAINER: SPEZIFISCHE FUNKTIONEN ---

function loadNextVocab(knewIt) {
  if (isVocabTransitioning) return;
  isVocabTransitioning = true;

  if (knewIt === true) score++;
  if (knewIt !== null) playedCount++;

  if (playedCount >= currentItems.length && knewIt !== null) {
    showResult();
    isVocabTransitioning = false;
    return;
  }

  vocabCard.style.opacity = "0";
  vocabFeedback.classList.add("hidden");

  setTimeout(() => {
    vocabCard.style.transition = "none";
    vocabCard.classList.remove("flipped");

    currentItem = currentItems[playedCount];
    vocabTerm.textContent = currentItem.english;
    vocabTranslation.textContent = currentItem.german;
    vocabExample.textContent = currentItem.example || "";

    vocabScoreDisplay.innerText = `Gelernt: ${score}`;
    vocabPlayedDisplay.innerText = `Fortschritt: ${playedCount} / ${currentItems.length}`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        vocabCard.style.transition = "";
        vocabCard.style.opacity = "1";
        isVocabTransitioning = false;
      });
    });
  }, 250);
}

function handleVocabAnswer(knewIt) {
  if (knewIt === false) {
    incorrectItems.push(currentItems[playedCount]);
  }
  loadNextVocab(knewIt);
}

// --- EVENT LISTENER ---

document.addEventListener("DOMContentLoaded", () => {
  populateSubjects();
  const savedTheme = localStorage.getItem("wi_trainer_theme") || "light";
  applyTheme(savedTheme);
});

subjectSelect.addEventListener("change", updateDifficultySelector);
difficultySelect.addEventListener("change", () => {
  localStorage.setItem("wi_trainer_difficulty", difficultySelect.value);
});

startBtn.addEventListener("click", start);
restartBtn.addEventListener("click", resetApp);
themeToggle.addEventListener("change", handleThemeToggle);
retryIncorrectBtn.addEventListener("click", retryIncorrect);

// Quiz-Listener
checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", loadNextQuestion);
mcQuitBtn.addEventListener("click", showResult);

// Vokabel-Listener
vocabCard.addEventListener("click", () => {
  if (!vocabCard.classList.contains("flipped")) {
    vocabCard.classList.add("flipped");
    vocabFeedback.classList.remove("hidden");
  }
});
vocabBtnYes.addEventListener("click", () => handleVocabAnswer(true));
vocabBtnNo.addEventListener("click", () => handleVocabAnswer(false));
vocabQuitBtn.addEventListener("click", showResult);

// --- DARK MODE LISTENER & INITIALISIERUNG ---
themeToggle.addEventListener("change", handleThemeToggle);
// Beim Laden der Seite das gespeicherte Theme anwenden
const savedTheme = localStorage.getItem("wi_trainer_theme") || "light";
applyTheme(savedTheme);
