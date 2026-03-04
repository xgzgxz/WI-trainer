export const questions = [
{
        
        schwierigkeit: "leicht",
        question: "Welche der folgenden Faktoren gehören zu den klassischen Produktionsfaktoren in der VWL/BWL?",
        options: ["Arbeit", "Boden (Natur)", "Kapital", "Internet"],
        correct: [0, 1, 2],
        explanation: "Die klassischen Produktionsfaktoren sind Arbeit, Boden und Kapital. 'Internet' gehört nicht zu dieser traditionellen Einteilung."
    },
    {
        
        schwierigkeit: "leicht",
        question: "Was versteht man unter dem 'Maximalprinzip' (Ökonomisches Prinzip)?",
        options: [
            "Mit minimalem Aufwand ein gegebenes Ziel erreichen.",
            "Mit gegebenen Mitteln den größtmöglichen Erfolg erzielen.",
            "Mit maximalem Aufwand den maximalen Erfolg erzielen.",
            "Den Gewinn um jeden Preis maximieren."
        ],
        correct: [1],
        explanation: "Das Maximalprinzip bedeutet: Die Mittel (Input) sind fest vorgegeben. Damit soll ein maximaler Ertrag (Output) erzielt werden."
    },

    // --- BWL: Mittel ---
    {
        
        schwierigkeit: "mittel",
        question: "Was kennzeichnet einen 'Käufermarkt'?",
        options: [
            "Das Angebot ist größer als die Nachfrage.",
            "Die Nachfrage ist größer als das Angebot.",
            "Die Verkäufer haben die stärkere Verhandlungsposition.",
            "Die Käufer haben die stärkere Verhandlungsposition."
        ],
        correct: [0, 3],
        explanation: "Auf einem Käufermarkt gibt es einen Angebotsüberhang (Angebot > Nachfrage), weshalb die Käufer die Bedingungen diktieren können."
    },
    {
        
        schwierigkeit: "mittel",
        question: "Welche Rechtsformen gehören zu den Personengesellschaften?",
        options: ["GmbH (Gesellschaft mit beschränkter Haftung)", "OHG (Offene Handelsgesellschaft)", "KG (Kommanditgesellschaft)", "AG (Aktiengesellschaft)"],
        correct: [1, 2],
        explanation: "OHG und KG sind Personengesellschaften. GmbH und AG sind Kapitalgesellschaften."
    },

    // --- BWL: Schwer ---
    {
        
        schwierigkeit: "schwer",
        question: "Welche Aussagen zur Break-Even-Analyse (Gewinnschwelle) sind richtig?",
        options: [
            "Am Break-Even-Point ist der Gewinn exakt null.",
            "Am Break-Even-Point deckt der Deckungsbeitrag genau die fixen Kosten.",
            "Die Break-Even-Menge berechnet sich durch Fixkosten geteilt durch variable Stückkosten.",
            "Wenn die verkaufte Menge unter dem Break-Even-Point liegt, macht das Unternehmen Verlust."
        ],
        correct: [0, 1, 3],
        explanation: "Am Break-Even-Point sind Erlöse und Kosten gleich (Gewinn=0). Der Deckungsbeitrag entspricht den Fixkosten. Die Formel ist aber: Fixkosten / (Stückpreis - variable Stückkosten) = Fixkosten / Stückdeckungsbeitrag."
    },
    {
        
        schwierigkeit: "schwer",
        question: "Was besagt der 'Leverage-Effekt' (Hebeleffekt) in der Finanzierung?",
        options: [
            "Die Eigenkapitalrentabilität steigt, wenn Fremdkapital aufgenommen wird, solange die Gesamtkapitalrentabilität größer ist als der Fremdkapitalzins.",
            "Fremdkapital ist immer günstiger als Eigenkapital.",
            "Je mehr Fremdkapital, desto geringer das Risiko für das Unternehmen.",
            "Er beschreibt das Hebeln von Aktienkursen durch Leerverkäufe."
        ],
        correct: [0],
        explanation: "Der Leverage-Effekt beschreibt die Hebelwirkung des Fremdkapitals auf die Eigenkapitalrentabilität. Voraussetzung: Die Investition bringt prozentual mehr ein (Gesamtkapitalrendite), als die Zinsen für das Darlehen kosten."
    }
];