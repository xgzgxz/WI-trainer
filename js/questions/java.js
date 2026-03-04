export const questions = [
 {
        schwierigkeit: "leicht",
        question: "Welche der folgenden Datentypen sind primitive Datentypen in Java?",
        options: ["int", "String", "boolean", "Double"],
        correct: [0, 2],
        explanation: "'int' und 'boolean' sind primitive Datentypen. 'String' und 'Double' (mit großem D) sind Klassen (Referenztypen)."
    },
    {
        schwierigkeit: "leicht",
        question: "Wie deklariert man eine Konstante in Java, die nach der Initialisierung nicht mehr geändert werden kann?",
        options: ["const", "final", "static", "immutable"],
        correct: [1],
        explanation: "In Java wird das Schlüsselwort 'final' verwendet, um eine Variable zu einer Konstante zu machen."
    },

    // --- JAVA: Mittel ---
    {
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
    }
];