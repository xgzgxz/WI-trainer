// Diese Datei enthält alle Fragen für die App.
// Du kannst später einfach neue Objekte in dieses Array kopieren.

const alleQuizFragen = [
    // --- ABAP ---
    {
        fach: "abap",
        schwierigkeit: "leicht",
        question: "Welche Anweisungen werden in ABAP für Datendeklarationen verwendet? (Wähle alle richtigen)",
        options: ["DATA", "TYPES", "DECLARE", "CONSTANTS"],
        correct: [0, 1, 3], // Index 0 (DATA), 1 (TYPES) und 3 (CONSTANTS) sind richtig
        explanation: "DATA (für Variablen), TYPES (für eigene Datentypen) und CONSTANTS (für Konstanten) sind korrekte Deklarationen in ABAP. 'DECLARE' gibt es in ABAP so nicht."
    },
    {
        fach: "abap",
        schwierigkeit: "mittel",
        question: "Welche Aussagen zu internen Tabellen in ABAP sind korrekt?",
        options: [
            "Sie existieren nur zur Laufzeit des Programms.",
            "Sie werden dauerhaft auf der Datenbank gespeichert.",
            "Man kann mit LOOP AT über sie iterieren.",
            "Sie können keinen Kopfzeilenbereich (Header Line) mehr in modernen OO-Kontexten haben."
        ],
        correct: [0, 2, 3],
        explanation: "Interne Tabellen existieren nur im Arbeitsspeicher (Laufzeit). Man iteriert mit LOOP AT. Kopfzeilen (Header Lines) sind im modernen ABAP Objects verboten."
    },

    // --- JAVA ---
    {
        fach: "java",
        schwierigkeit: "leicht",
        question: "Welche der folgenden Datentypen sind primitive Datentypen in Java?",
        options: ["int", "String", "boolean", "Double"],
        correct: [0, 2],
        explanation: "'int' und 'boolean' sind primitive Datentypen. 'String' und 'Double' (großes D) sind Klassen (Referenztypen)."
    },
    {
        fach: "java",
        schwierigkeit: "schwer",
        question: "Welche Aussagen zum Thema 'Vererbung' (Inheritance) in Java treffen zu?",
        options: [
            "Eine Klasse kann von mehreren Klassen gleichzeitig erben (Multiple Inheritance of State).",
            "Eine Klasse kann mehrere Interfaces implementieren.",
            "Das Schlüsselwort für Vererbung lautet 'extends'.",
            "Konstruktoren werden automatisch mitvererbt."
        ],
        correct: [1, 2],
        explanation: "Java erlaubt keine Mehrfachvererbung von Klassen, aber die Implementierung mehrerer Interfaces. Das Schlüsselwort ist 'extends'. Konstruktoren werden *nicht* vererbt."
    },

    // --- BWL ---
    {
        fach: "bwl",
        schwierigkeit: "leicht",
        question: "Welche der folgenden Faktoren gehören zu den klassischen Produktionsfaktoren in der BWL?",
        options: ["Arbeit", "Boden (Natur)", "Kapital", "Internet"],
        correct: [0, 1, 2],
        explanation: "Die klassischen Produktionsfaktoren sind Arbeit, Boden und Kapital. 'Internet' gehört nicht zu dieser traditionellen Einteilung."
    },
    {
        fach: "bwl",
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

    // --- DATENBANKEN ---
    {
        fach: "db",
        schwierigkeit: "leicht",
        question: "Welche SQL-Befehle gehören zur DML (Data Manipulation Language)?",
        options: ["SELECT", "INSERT", "CREATE TABLE", "UPDATE"],
        correct: [0, 1, 3],
        explanation: "SELECT, INSERT, UPDATE und DELETE manipulieren oder lesen Daten (DML). 'CREATE TABLE' ist Strukturänderung und gehört zur DDL (Data Definition Language)."
    },
    {
        fach: "db",
        schwierigkeit: "mittel",
        question: "Was sind Eigenschaften einer relationalen Datenbank (ACID-Prinzip)?",
        options: [
            "Atomicity (Atomarität)",
            "Consistency (Konsistenz)",
            "Isolation (Isolation)",
            "Durability (Dauerhaftigkeit)"
        ],
        correct: [0, 1, 2, 3],
        explanation: "Das ACID-Prinzip umfasst genau diese vier Eigenschaften, um die Zuverlässigkeit von Datenbanktransaktionen zu garantieren."
    }
];