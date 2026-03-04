export const questions = [
{
        
        schwierigkeit: "leicht",
        question: "Welche Anweisungen werden in ABAP für Datendeklarationen verwendet? (Wähle alle richtigen)",
        options: ["DATA", "TYPES", "DECLARE", "CONSTANTS"],
        correct: [0, 1, 3], 
        explanation: "DATA (für Variablen), TYPES (für eigene Datentypen) und CONSTANTS (für Konstanten) sind korrekte Deklarationen in ABAP. 'DECLARE' gibt es in ABAP so nicht."
    },
    {
        
        schwierigkeit: "leicht",
        question: "Womit endet jede korrekte Anweisung im ABAP-Code?",
        options: ["Semikolon (;)", "Doppelpunkt (:)", "Punkt (.)", "Komma (,)"],
        correct: [2],
        explanation: "In ABAP wird jede Anweisung zwingend mit einem Punkt (.) abgeschlossen."
    },

    // --- ABAP: Mittel ---
    {
        
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
    {
        
        schwierigkeit: "mittel",
        question: "Welche der folgenden ABAP-Dictionary-Objekte können in der SE11 angelegt werden?",
        options: ["Domänen", "Datenelemente", "Reports", "Datenbanktabellen"],
        correct: [0, 1, 3],
        explanation: "Domänen, Datenelemente und Tabellen werden in der SE11 (Data Dictionary) angelegt. Reports werden in der SE38 oder SE80 programmiert."
    },

    // --- ABAP: Schwer ---
    {
        
        schwierigkeit: "schwer",
        question: "Was ist der Unterschied zwischen FIELD-SYMBOLS und Datenreferenzen (Data References) in ABAP?",
        options: [
            "Field-Symbols arbeiten ähnlich wie Dereferenzierungen von Zeigern in C, während Datenreferenzen echte Referenzvariablen sind.",
            "Datenreferenzen können nur auf elementare Typen zeigen, Field-Symbols auf alle.",
            "Field-Symbols müssen mit ASSIGN zugewiesen werden.",
            "Datenreferenzen werden mit CREATE DATA erzeugt oder mit GET REFERENCE zugewiesen."
        ],
        correct: [0, 2, 3],
        explanation: "Field-Symbols verhalten sich wie dereferenzierte Pointer (Zuweisung via ASSIGN). Datenreferenzen sind Variablen, die die Adresse speichern (Zuweisung via GET REFERENCE oder Erzeugung via CREATE DATA)."
    },
    {
        
        schwierigkeit: "schwer",
        question: "Welche Systemfelder (SY-...) werden nach einem erfolgreichen SELECT-Statement standardmäßig gefüllt?",
        options: ["SY-SUBRC", "SY-DBCNT", "SY-TABIX", "SY-DATUM"],
        correct: [0, 1],
        explanation: "SY-SUBRC liefert 0, wenn Daten gefunden wurden. SY-DBCNT enthält die Anzahl der gelesenen/verarbeiteten Zeilen. SY-TABIX ist für interne Tabellen relevant, nicht für Datenbank-SELECTs."
    }
];