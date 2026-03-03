// Diese Datei enthält alle Fragen für die App.
// Format: 
// { fach: "...", schwierigkeit: "...", question: "...", options: ["..."], correct: [...], explanation: "..." }

const alleQuizFragen = [
    // ==========================================
    // SUBJECT: ENGLISH (Business Communication)
    // ==========================================

    // --- ENGLISH: Easy ---
    {
        fach: "english",
        schwierigkeit: "leicht",
        question: "According to the document, what is the general tone of business apologies?",
        options: [
            "They are always fairly formal.",
            "They should be very informal to build trust.",
            "They are strictly legal and written by lawyers.",
            "They should be casual and brief."
        ],
        correct: [0],
        explanation: "The document explicitly states right at the beginning: 'Please keep in mind that apologies are always fairly formal.'"
    },
    {
        fach: "english",
        schwierigkeit: "leicht",
        question: "Which of the following phrases belong to the 'Apologize' category? (Select all that apply)",
        options: [
            "Please accept my sincere / our deepest apologies for…",
            "The error was due to…",
            "I would like to express my deep regrets for…",
            "I can promise you that the highest quality standards will be met…"
        ],
        correct: [0, 2],
        explanation: "'Please accept my sincere... apologies' and 'I would like to express my deep regrets for...' are listed under the 'Apologize' section. 'The error was due to...' is an 'Explain' phrase, and 'I can promise you...' is a 'Promise' phrase."
    },
    {
        fach: "english",
        schwierigkeit: "leicht",
        question: "If you need to apologize for an omission or something you forgot to do, which phrase from the 'Apologize' list is the most appropriate?",
        options: [
            "I apologize for my failure to…",
            "I can appreciate that.",
            "I see your point.",
            "Thank you for pointing that out."
        ],
        correct: [0],
        explanation: "'I apologize for my failure to…' is explicitly listed under 'Apologize' and is perfectly suited for an omission."
    },
    {
        fach: "english",
        schwierigkeit: "leicht",
        question: "Which of these phrases is the correct way to apologize on behalf of your entire organization?",
        options: [
            "My bad for the company.",
            "I would like to apologize on behalf of our company.",
            "The company is fairly formal.",
            "We are convinced that the changes we have implemented..."
        ],
        correct: [1],
        explanation: "The exact phrase provided in the document for this situation is 'I would like to apologize on behalf of our company.'"
    },

    // --- ENGLISH: Medium ---
    {
        fach: "english",
        schwierigkeit: "mittel",
        question: "Which of the following elements are required for a 'perfect business apology' according to the text? (Select all that apply)",
        options: [
            "Blame external factors for the issue",
            "Take responsibility",
            "Provide a form of restitution (if possible)",
            "Keep the account of the situation as brief as possible"
        ],
        correct: [1, 2],
        explanation: "A perfect business apology includes 'take responsibility' and 'provide a form of restitution (if possible)'. It also states you should give a 'detailed account' (not brief) and 'recognize your/the company’s role' (instead of blaming external factors)."
    },
    {
        fach: "english",
        schwierigkeit: "mittel",
        question: "Which phrase should you use if you want to 'Acknowledge/recognize' the impact of your actions on the other party?",
        options: [
            "In our efforts to optimize our distribution process, we overlooked…",
            "I understand that our actions meant…",
            "We will be increasing our efforts when it comes to…",
            "Please allow me to apologize for…"
        ],
        correct: [1],
        explanation: "'I understand that our actions meant…' is categorized specifically under 'Acknowledge/recognize' to validate the other party's experience."
    },
    {
        fach: "english",
        schwierigkeit: "mittel",
        question: "To properly 'Explain' what went wrong without making it sound like a cheap excuse, which phrasing does the document suggest?",
        options: [
            "I am particularly sorry for…",
            "We appreciate that this caused you inconvenience…",
            "In our efforts to optimize our distribution process, we overlooked…",
            "I will let my manager know how you feel…"
        ],
        correct: [2],
        explanation: "'In our efforts to optimize our distribution process, we overlooked…' is listed under the 'Explain' category to professionally state how the error occurred."
    },
    {
        fach: "english",
        schwierigkeit: "mittel",
        question: "According to the bullet points of a perfect apology, what should you do regarding your involvement in the problem?",
        options: [
            "Deny any involvement if possible.",
            "Recognize your/the company’s role in the situation.",
            "Wait for the customer to prove your involvement.",
            "State that your role was minor."
        ],
        correct: [1],
        explanation: "One of the key bullet points for a perfect apology is to 'recognize your/the company’s role in the situation'."
    },
    {
        fach: "english",
        schwierigkeit: "mittel",
        question: "Which phrase demonstrates that you did not realize the consequences of your actions beforehand?",
        options: [
            "I am sorry. I did not mean to..",
            "I can imagine that you felt like…",
            "(I am) sorry. I did not realize the impact of…",
            "I am / we are terribly sorry about that."
        ],
        correct: [2],
        explanation: "The phrase '(I am) sorry. I did not realize the impact of…' from the 'Apologize' section specifically addresses a lack of prior awareness regarding the consequences."
    },

    // --- ENGLISH: Hard ---
    {
        fach: "english",
        schwierigkeit: "schwer",
        question: "How do phrases from the 'Explain' category differ from the 'Promise' category based on the provided text?",
        options: [
            "'Explain' phrases offer financial compensation, while 'Promise' phrases focus on past events.",
            "'Explain' phrases describe the cause of the issue (e.g., 'The defect was caused by...'), while 'Promise' phrases focus on future improvements and solutions.",
            "'Explain' phrases are informal, while 'Promise' phrases are highly formal.",
            "There is no difference; they can be used interchangeably in the apology."
        ],
        correct: [1],
        explanation: "'Explain' phrases like 'The defect was caused by...' deal with the reasons behind an error. 'Promise' phrases like 'In the future, our focus will be...' or 'We have increased our efforts to ensure that...' deal with preventing recurrence and finding solutions."
    },
    {
        fach: "english",
        schwierigkeit: "schwer",
        question: "Providing 'a form of restitution' is part of a perfect apology. Which of the following phrases from the 'Promise' category are practical examples of offering restitution or a direct solution to the affected party? (Select all that apply)",
        options: [
            "Here are some vouchers for lunch for any trouble we may have caused you.",
            "We are convinced that the changes we have implemented will prevent this...",
            "I am going to see how we can make this better for you.",
            "I am / we are terribly sorry about that."
        ],
        correct: [0, 2],
        explanation: "Offering vouchers ('Here are some vouchers...') and actively looking for ways to improve the customer's specific situation ('I am going to see how we can make this better...') are concrete forms of restitution and solution-finding listed under the 'Promise' section."
    },
    {
        fach: "english",
        schwierigkeit: "schwer",
        question: "In the context of the document, which category does the phrase 'As a result of our decision, our relationship was affected…' belong to, and what is its purpose?",
        options: [
            "Apologize: It serves to formally ask for forgiveness.",
            "Promise: It guarantees that relationships will not be damaged in the future.",
            "Explain: It provides a technical reason for a distribution failure.",
            "Acknowledge/recognize: It validates the negative impact the company's actions had on the business relationship."
        ],
        correct: [3],
        explanation: "This phrase is listed under 'Acknowledge/recognize'. Its purpose is to show the other party that you understand the emotional or professional damage caused by your decisions."
    },
    {
        fach: "english",
        schwierigkeit: "schwer",
        question: "If a customer is very upset and you need to escalate the issue internally while assuring the customer you are taking it seriously, which 'Promise' phrase is best?",
        options: [
            "I will let my manager know how you feel, and let’s see if we can find a solution.",
            "We see that our actions impacted you unnecessarily…",
            "In the future, our focus will be on…, so that this situation will not repeat itself.",
            "I am going to see how we can make this better for you."
        ],
        correct: [0],
        explanation: "The phrase 'I will let my manager know how you feel, and let’s see if we can find a solution.' directly involves escalating the emotional impact to management to seek a resolution, as listed under the 'Promise' category."
    },
    {
        fach: "english",
        schwierigkeit: "schwer",
        question: "Which of these combinations correctly pairs a bullet point from 'The perfect apology' checklist with an appropriate matching phrase from the document?",
        options: [
            "'give a detailed account of the situation' -> 'Thank you for pointing that out.'",
            "'acknowledge the hurt or damage done' -> 'I can imagine that you felt like…'",
            "'promise that it won’t happen again' -> 'The error was due to…'",
            "'provide a form of restitution' -> 'Please accept my apologies.'"
        ],
        correct: [1],
        explanation: "The phrase 'I can imagine that you felt like…' matches the checklist item 'acknowledge the hurt or damage done' by validating the other person's emotional response. The other pairings mismatch the checklist intent with the phrase's category."
    },

    // ==========================================
    // FACH: ABAP mit SAP (abap)
    // ==========================================
    
    // --- ABAP: Leicht ---
    {
        fach: "abap",
        schwierigkeit: "leicht",
        question: "Welche Anweisungen werden in ABAP für Datendeklarationen verwendet? (Wähle alle richtigen)",
        options: ["DATA", "TYPES", "DECLARE", "CONSTANTS"],
        correct: [0, 1, 3], 
        explanation: "DATA (für Variablen), TYPES (für eigene Datentypen) und CONSTANTS (für Konstanten) sind korrekte Deklarationen in ABAP. 'DECLARE' gibt es in ABAP so nicht."
    },
    {
        fach: "abap",
        schwierigkeit: "leicht",
        question: "Womit endet jede korrekte Anweisung im ABAP-Code?",
        options: ["Semikolon (;)", "Doppelpunkt (:)", "Punkt (.)", "Komma (,)"],
        correct: [2],
        explanation: "In ABAP wird jede Anweisung zwingend mit einem Punkt (.) abgeschlossen."
    },

    // --- ABAP: Mittel ---
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
    {
        fach: "abap",
        schwierigkeit: "mittel",
        question: "Welche der folgenden ABAP-Dictionary-Objekte können in der SE11 angelegt werden?",
        options: ["Domänen", "Datenelemente", "Reports", "Datenbanktabellen"],
        correct: [0, 1, 3],
        explanation: "Domänen, Datenelemente und Tabellen werden in der SE11 (Data Dictionary) angelegt. Reports werden in der SE38 oder SE80 programmiert."
    },

    // --- ABAP: Schwer ---
    {
        fach: "abap",
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
        fach: "abap",
        schwierigkeit: "schwer",
        question: "Welche Systemfelder (SY-...) werden nach einem erfolgreichen SELECT-Statement standardmäßig gefüllt?",
        options: ["SY-SUBRC", "SY-DBCNT", "SY-TABIX", "SY-DATUM"],
        correct: [0, 1],
        explanation: "SY-SUBRC liefert 0, wenn Daten gefunden wurden. SY-DBCNT enthält die Anzahl der gelesenen/verarbeiteten Zeilen. SY-TABIX ist für interne Tabellen relevant, nicht für Datenbank-SELECTs."
    },

    // ==========================================
    // FACH: JAVA (java)
    // ==========================================

    // --- JAVA: Leicht ---
    {
        fach: "java",
        schwierigkeit: "leicht",
        question: "Welche der folgenden Datentypen sind primitive Datentypen in Java?",
        options: ["int", "String", "boolean", "Double"],
        correct: [0, 2],
        explanation: "'int' und 'boolean' sind primitive Datentypen. 'String' und 'Double' (mit großem D) sind Klassen (Referenztypen)."
    },
    {
        fach: "java",
        schwierigkeit: "leicht",
        question: "Wie deklariert man eine Konstante in Java, die nach der Initialisierung nicht mehr geändert werden kann?",
        options: ["const", "final", "static", "immutable"],
        correct: [1],
        explanation: "In Java wird das Schlüsselwort 'final' verwendet, um eine Variable zu einer Konstante zu machen."
    },

    // --- JAVA: Mittel ---
    {
        fach: "java",
        schwierigkeit: "mittel",
        question: "Welche Aussagen zu Interfaces in Java (ab Java 8) sind korrekt?",
        options: [
            "Eine Klasse kann mehrere Interfaces implementieren.",
            "Interfaces dürfen keine Methodenkörper (Implementierungen) enthalten.",
            "Interfaces können default-Methoden mit Implementierung enthalten.",
            "Man kann von einem Interface direkt ein Objekt mit 'new' erzeugen."
        ],
        correct: [0, 2],
        explanation: "Klassen können viele Interfaces implementieren. Seit Java 8 dürfen Interfaces 'default'-Methoden mit Code enthalten. Man kann Interfaces niemals direkt instanziieren (kein 'new')."
    },
    {
        fach: "java",
        schwierigkeit: "mittel",
        question: "Was bewirkt das Schlüsselwort 'static' bei einer Methode?",
        options: [
            "Die Methode kann nicht überschrieben werden.",
            "Die Methode gehört zur Klasse selbst, nicht zu einer bestimmten Instanz (Objekt).",
            "Die Methode kann aufgerufen werden, ohne dass ein Objekt der Klasse existiert.",
            "Die Methode kann nur von anderen static-Methoden aufgerufen werden."
        ],
        correct: [1, 2],
        explanation: "'static' bedeutet, dass die Methode klassengebunden ist. Man kann sie über den Klassennamen aufrufen (z.B. Math.random()), ohne ein Objekt zu erzeugen."
    },

    // --- JAVA: Schwer ---
    {
        fach: "java",
        schwierigkeit: "schwer",
        question: "Welche Aussagen zum Thema 'Vererbung' (Inheritance) in Java treffen zu?",
        options: [
            "Eine Klasse kann von mehreren Klassen gleichzeitig erben.",
            "Konstruktoren werden nicht an Unterklassen vererbt.",
            "Das Schlüsselwort für Vererbung lautet 'extends'.",
            "Eine Subklasse kann die private-Methoden der Superklasse direkt aufrufen."
        ],
        correct: [1, 2],
        explanation: "Java erlaubt keine Mehrfachvererbung bei Klassen. 'extends' ist das Schlüsselwort. Konstruktoren werden nicht vererbt (müssen via super() gerufen werden) und private-Elemente sind für Subklassen unsichtbar."
    },
    {
        fach: "java",
        schwierigkeit: "schwer",
        question: "Was passiert, wenn eine Exception vom Typ 'RuntimeException' (Unchecked Exception) geworfen wird?",
        options: [
            "Der Compiler zwingt den Programmierer, einen try-catch-Block zu schreiben.",
            "Die Methode muss 'throws RuntimeException' in der Signatur deklarieren.",
            "Das Programm kann kompilieren, auch wenn sie nicht explizit behandelt wird.",
            "Das Programm stürzt ab, wenn sie zur Laufzeit auftritt und nirgends gefangen wird."
        ],
        correct: [2, 3],
        explanation: "RuntimeExceptions (Unchecked) müssen im Gegensatz zu Checked Exceptions nicht zwingend abgefangen oder deklariert werden. Werden sie geworfen und nicht gefangen, bricht das Programm ab."
    },
    {
        fach: "java",
        schwierigkeit: "mittel",
        question: "Was bedeutet das Single Responsibility Principle (SRP) in der Praxis?",
        options: [
            "Eine Klasse sollte nur eine einzige Instanz zur Laufzeit haben.",
            "Eine Klasse sollte exakt einen klar definierten Verantwortungsbereich haben.",
            "Eine Methode darf nur eine einzige Aufgabe ausführen, Klassen dürfen jedoch mehrere haben.",
            "Eine Klasse sollte nur einen einzigen Grund zur Änderung aufweisen."
        ],
        correct: [1, 3],
        explanation: "Das SRP besagt, dass eine Klasse genau einen Verantwortungsbereich und damit nur einen Grund zur Änderung haben darf. Die Beschränkung auf eine Instanz beschreibt das Singleton-Pattern, nicht SRP."
    },
    {
        fach: "java",
        schwierigkeit: "schwer",
        question: "Welche architektonischen Aussagen treffen auf das Liskovsche Substitutionsprinzip (LSP) zu?",
        options: [
            "Objekte einer Basisklasse müssen durch Objekte ihrer Kindklassen ersetzbar sein, ohne unerwartetes Verhalten auszulösen.",
            "Tiefe Vererbungshierarchien sollten stets durch Interfaces ersetzt werden.",
            "Die Kindklasse muss den 'Vertrag' der Elternklasse vollständig erfüllen.",
            "Eine Kindklasse darf geerbte Methoden ignorieren (z.B. durch leere Rümpfe), wenn sie diese funktional nicht benötigt."
        ],
        correct: [0, 2],
        explanation: "Das LSP fordert, dass abgeleitete Klassen ihre Basisklassen fehlerfrei ersetzen können. Werden geerbte Methoden ignoriert oder nicht vertragstreu implementiert, wird dieses Prinzip und damit die Polymorphie gebrochen."
    },
    {
        fach: "java",
        schwierigkeit: "leicht",
        question: "Welche Eigenschaften zeichnen den Datentyp 'Record' in Java aus?",
        options: [
            "Records generieren im Hintergrund automatisch Konstruktoren sowie Getter und Setter.",
            "Records sind nach der Instanziierung strikt unveränderlich (immutable).",
            "Records eignen sich primär als reine Datenträger und eliminieren Boilerplate-Code.",
            "Records können durch Vererbung beliebig erweitert werden."
        ],
        correct: [1, 2],
        explanation: "Records sind immutable. Der Compiler generiert Konstruktor, Lesezugriffsmethoden (ohne 'get'-Präfix), equals(), hashCode() und toString(). Sie generieren ausdrücklich keine Setter."
    },
    {
        fach: "java",
        schwierigkeit: "mittel",
        question: "Welche Prinzipien und Eigenschaften kennzeichnen eine REST-API korrekt?",
        options: [
            "REST ist ein zustandsloses Architektur-Paradigma, kein eigenständiges Protokoll.",
            "Ein GET-Request wird genutzt, um serverseitige Zustände sicher zu verändern.",
            "Die Schnittstelle erzwingt eine strikte Trennung von Benutzeroberfläche (Client) und Datenspeicherung (Server).",
            "REST-APIs erfordern zwingend das Datenaustauschformat XML."
        ],
        correct: [0, 2],
        explanation: "REST entkoppelt Client und Server und speichert keine Sitzungszustände (Statelessness). GET-Requests dürfen keine Ressourcen verändern. Standard ist heute JSON, XML ist nicht zwingend."
    },
    {
        fach: "java",
        schwierigkeit: "mittel",
        question: "Wie grenzen sich GET- und POST-Requests konzeptionell voneinander ab?",
        options: [
            "GET-Requests dienen ausschließlich dem Abrufen von Ressourcen und sind 'safe'.",
            "POST-Requests übertragen ihre Nutzdaten offen im Query-String der URL.",
            "POST-Requests dienen dem Senden neuer Daten an den Server.",
            "GET-Requests übertragen den Payload versteckt im Body des HTTP-Requests."
        ],
        correct: [0, 2],
        explanation: "GET liest Daten via URL-Parameter und ändert keinen Zustand. POST schreibt Daten und überträgt die Nutzlast (Payload) im unsichtbaren Body des HTTP-Requests."
    },
    {
        fach: "java",
        schwierigkeit: "schwer",
        question: "Wie wird das Entwurfsmuster 'Command' architektonisch eingesetzt?",
        options: [
            "Es informiert abhängige Objekte automatisch über Zustandsänderungen.",
            "Es trennt den Aufrufer (Invoker) vom Empfänger (Receiver).",
            "Es lagert spezifische Algorithmen aus, um diese zur Laufzeit austauschen zu können.",
            "Es kapselt einen Befehl vollständig als eigenständiges Objekt und ermöglicht so Undo-Operationen."
        ],
        correct: [1, 3],
        explanation: "Das Command-Pattern kapselt Befehle als Objekte, was Warteschlangen oder Historien (Undo) erlaubt. Das Informieren von Objekten gehört zum Observer-Pattern, das Auslagern von Algorithmen zum Strategy-Pattern."
    },
    {
        fach: "java",
        schwierigkeit: "mittel",
        question: "Was ist der definierte Zweck des Factory-Patterns?",
        options: [
            "Es garantiert, dass systemweit nur eine einzige Instanz einer Klasse existiert.",
            "Es entkoppelt den Aufrufer von der konkreten Implementierung der zu erstellenden Objekte.",
            "Es delegiert die direkte Instanziierung (new-Operator) an eine spezielle Fabrikmethode.",
            "Es schaltet sich transparent vor eine Klasse, um zur Laufzeit neues Verhalten hinzuzufügen."
        ],
        correct: [1, 2],
        explanation: "Die Factory übernimmt die Erzeugung von Objekten und vermeidet direkte new-Aufrufe im Client-Code. Eine einzige Instanz ist das Singleton-Pattern, das Vorschalten zur Laufzeit das Decorator-Pattern."
    },
    {
        fach: "java",
        schwierigkeit: "mittel",
        question: "Was adressiert das Prinzip 'Composition Over Inheritance'?",
        options: [
            "Es löst das 'Fragile Base Class Problem' bei tiefen Vererbungshierarchien.",
            "Es besagt, dass Code-Duplikate in Basisklassen ausgelagert werden müssen (DRY).",
            "Es fordert, komplexes Verhalten durch die Zusammensetzung von Objekten zu erreichen, anstatt Klassen abzuleiten.",
            "Es erzwingt die Verwendung abstrakter Klassen anstelle von Interfaces."
        ],
        correct: [0, 2],
        explanation: "Vererbung führt oft zu extrem starrer Kopplung. Komposition nutzt Delegation an Teilobjekte, was flexibler ist und Seiteneffekte in tiefen Hierarchien ('Fragile Base Class') verhindert."
    },
    {
        fach: "java",
        schwierigkeit: "leicht",
        question: "Welche Aussagen zu Datenaustauschformaten im Kontext von REST-Schnittstellen sind zutreffend?",
        options: [
            "JSON nutzt ein textbasiertes Schlüssel-Wert-System (Key-Value-Pairs).",
            "XML ist leichtgewichtiger und benötigt weniger Overhead beim Parsen als JSON.",
            "JSON ist heute das primär genutzte Datenaustauschformat für moderne REST-APIs.",
            "XML speichert Daten binär ab, um Bandbreite zu sparen."
        ],
        correct: [0, 2],
        explanation: "JSON ist das vorherrschende Format, da es textbasiert (Key-Value) und extrem leichtgewichtig ist. XML nutzt Tags, ist 'gesprächiger' (mehr Overhead) und rein textbasiert, nicht binär."
    },
    {
        fach: "java",
        schwierigkeit: "leicht",
        question: "Wofür wird das Entwurfsmuster 'Singleton' verwendet?",
        options: [
            "Um sicherzustellen, dass von einer Klasse systemweit exakt eine einzige Instanz existiert.",
            "Um einen globalen Zugriffspunkt auf diese Instanz bereitzustellen.",
            "Um Klassen zur Laufzeit dynamisch um neue Funktionen zu dekorieren.",
            "Um Datentransferobjekte (DTOs) ohne Boilerplate-Code zu generieren."
        ],
        correct: [0, 1],
        explanation: "Singleton ist ein Erzeugungsmuster, das über einen privaten Konstruktor und eine statische getInstance()-Methode eine globale, einzigartige Instanz erzwingt."
    },

    // ==========================================
    // FACH: BWL (bwl)
    // ==========================================

    // --- BWL: Leicht ---
    {
        fach: "bwl",
        schwierigkeit: "leicht",
        question: "Welche der folgenden Faktoren gehören zu den klassischen Produktionsfaktoren in der VWL/BWL?",
        options: ["Arbeit", "Boden (Natur)", "Kapital", "Internet"],
        correct: [0, 1, 2],
        explanation: "Die klassischen Produktionsfaktoren sind Arbeit, Boden und Kapital. 'Internet' gehört nicht zu dieser traditionellen Einteilung."
    },
    {
        fach: "bwl",
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
    {
        fach: "bwl",
        schwierigkeit: "mittel",
        question: "Welche Rechtsformen gehören zu den Personengesellschaften?",
        options: ["GmbH (Gesellschaft mit beschränkter Haftung)", "OHG (Offene Handelsgesellschaft)", "KG (Kommanditgesellschaft)", "AG (Aktiengesellschaft)"],
        correct: [1, 2],
        explanation: "OHG und KG sind Personengesellschaften. GmbH und AG sind Kapitalgesellschaften."
    },

    // --- BWL: Schwer ---
    {
        fach: "bwl",
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
        fach: "bwl",
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
    },

    // ==========================================
    // FACH: DATENBANKEN (db)
    // ==========================================

    // --- DB: Leicht ---
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
        schwierigkeit: "leicht",
        question: "Wofür steht die Abkürzung 'SQL'?",
        options: ["Standard Query Logic", "Structured Query Language", "Simple Question Language", "Systematic Query List"],
        correct: [1],
        explanation: "SQL steht für 'Structured Query Language' (strukturierte Abfragesprache)."
    },

    // --- DB: Mittel ---
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
    },
    {
        fach: "db",
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
        fach: "db",
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
        fach: "db",
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