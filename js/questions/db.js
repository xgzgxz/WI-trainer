export const questions = [
 {
        
        schwierigkeit: "leicht",
        question: "Welche SQL-Befehle gehören zur DML (Data Manipulation Language)?",
        options: ["SELECT", "INSERT", "CREATE TABLE", "UPDATE"],
        correct: [0, 1, 3],
        explanation: "SELECT, INSERT, UPDATE und DELETE manipulieren oder lesen Daten (DML). 'CREATE TABLE' ist Strukturänderung und gehört zur DDL (Data Definition Language)."
    },
    {
        
        schwierigkeit: "leicht",
        question: "Wofür steht die Abkürzung 'SQL'?",
        options: ["Standard Query Logic", "Structured Query Language", "Simple Question Language", "Systematic Query List"],
        correct: [1],
        explanation: "SQL steht für 'Structured Query Language' (strukturierte Abfragesprache)."
    },

    // --- DB: Mittel ---
    {
        
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
    },
    {
        
        schwierigkeit: "mittel",
        question: "Was ist ein 'Fremdschlüssel' (Foreign Key) in einer relationalen Datenbank?",
        options: [
            "Ein Schlüssel, der von außerhalb des Netzwerks importiert wird.",
            "Ein Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist.",
            "Er stellt Beziehungen (Relationen) zwischen Tabellen her.",
            "Er muss in seiner Tabelle immer eindeutig (unique) sein."
        ],
        correct: [1, 2],
        explanation: "Ein Fremdschlüssel verweist auf einen Primärschlüssel einer anderen Tabelle, um Verknüpfungen herzustellen. Er muss in seiner eigenen Tabelle nicht zwingend eindeutig sein (1:n Beziehung)."
    },

    // --- DB: Schwer ---
    {
        
        schwierigkeit: "schwer",
        question: "Welche Aussagen zur Normalisierung von Datenbanken sind korrekt?",
        options: [
            "Die 1. Normalform erfordert, dass alle Attribute atomar sind.",
            "Ein Ziel der Normalisierung ist die Vermeidung von Redundanzen (Datenwiederholungen).",
            "In der 3. Normalform dürfen keine transitiven Abhängigkeiten von Nicht-Schlüssel-Attributen zum Primärschlüssel existieren.",
            "Denormalisierung wird oft aus Performance-Gründen (schnellere Lesezugriffe) durchgeführt."
        ],
        correct: [0, 1, 2, 3],
        explanation: "Alle Aussagen sind absolut korrekt! Normalisierung reduziert Redundanzen (1NF: atomar, 2NF: voll funktional abhängig, 3NF: keine transitiven Abhängigkeiten). Denormalisierung (z.B. Data Warehouse) bricht diese Regeln bewusst für mehr Geschwindigkeit beim Lesen."
    },
    {
        
        schwierigkeit: "schwer",
        question: "Was ist der Unterschied zwischen einem INNER JOIN und einem LEFT OUTER JOIN in SQL?",
        options: [
            "Es gibt keinen Unterschied, die Syntax ist nur anders.",
            "Ein INNER JOIN liefert nur die Datensätze, die in beiden Tabellen eine Übereinstimmung haben.",
            "Ein LEFT OUTER JOIN liefert alle Datensätze der linken Tabelle, auch wenn es rechts keine Übereinstimmung gibt.",
            "Ein LEFT OUTER JOIN liefert bei fehlenden Übereinstimmungen auf der rechten Seite NULL-Werte."
        ],
        correct: [1, 2, 3],
        explanation: "INNER JOIN braucht zwingend Matches auf beiden Seiten. LEFT OUTER JOIN behält alle linken Datensätze und füllt die rechten Spalten mit NULL auf, wenn kein passender Datensatz in der rechten Tabelle gefunden wird."
    }
];