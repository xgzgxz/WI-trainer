export const questions = [
    // === WOCHE 1: GRUNDLAGEN (S/4HANA, FIORI, STRUKTUREN) ===
    {
        schwierigkeit: "leicht",
        question: "Wie lautet der offizielle Name für die Kernlösungen von SAP S/4HANA?",
        options: [
            "Enterprise Resource Management",
            "Enterprise Management",
            "Enterprise Central Component",
            "Enterprise Line of Business (LoB)"
        ],
        correct: [1],
        explanation: "SAP S/4HANA wird offiziell als 'Enterprise Management'-Lösung bezeichnet, da sie alle Kerngeschäftsprozesse in Echtzeit integriert. 'Line of Business' (LoB) bezieht sich auf einzelne Module."
    },
    {
        schwierigkeit: "leicht",
        question: "Was ist SAP Fiori primär?",
        options: [
            "Eine Mobile Technologie",
            "Das Designsystem und die User Experience (UX)",
            "Ein neues Datenmodell",
            "Ein Reporting-Tool"
        ],
        correct: [1],
        explanation: "SAP Fiori ist das Designsystem und die User Experience (UX) von SAP. Es sorgt für eine intuitive, rollenbasierte und konsistente Benutzeroberfläche."
    },
    {
        schwierigkeit: "mittel",
        question: "Bei welcher Edition sind umfangreiche, tiefgreifende Kundenänderungen (Erweiterungen) möglich?",
        options: [
            "SAP S/4HANA (On-Premise)",
            "SAP S/4HANA Cloud"
        ],
        correct: [0],
        explanation: "Die On-Premise-Edition bietet die größte Flexibilität für Systemanpassungen, da das Unternehmen die volle Kontrolle über die Infrastruktur hat. Die Cloud ist stärker standardisiert."
    },
    {
        schwierigkeit: "leicht",
        question: "Was bedeutet das Wort 'Fiori' (italienisch)?",
        options: ["Feuer", "Blume", "Furie", "Schnell"],
        correct: [1],
        explanation: "'Fiori' ist das italienische Wort für 'Blumen'. SAP wählte diesen Namen, um die Einfachheit und das angenehme Benutzererlebnis zu symbolisieren."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche Trends sorgten dafür, dass die Business Suite für die digitale Welt neu aufgebaut werden musste? (Mehrfachauswahl)",
        options: [
            "Zunahme der Gerätevernetzung (IoT)",
            "Benutzer übernehmen immer mehr technische IT-Aufgaben",
            "Zunehmende Verbreitung von mobilen Geräten",
            "Einzug des Cloud Computing"
        ],
        correct: [0, 2, 3],
        explanation: "Die digitale Transformation wird durch IoT, mobile Geräte und Cloud Computing vorangetrieben. Diese erforderten ein ERP-System, das agiler und datenzentrierter ist."
    },
    {
        schwierigkeit: "schwer",
        question: "Warum wurde der Anwendungscode für SAP S/4HANA weitestgehend neu geschrieben?",
        options: [
            "Der alte ABAP-Code würde mit S/4HANA gar nicht funktionieren.",
            "Um das massiv vereinfachte Datenmodell von HANA vollständig zu nutzen.",
            "SAP S/4HANA wird nun primär in Java geschrieben.",
            "Um sicherzustellen, dass der Code für In-Memory (SAP HANA) optimiert ist."
        ],
        correct: [1, 3],
        explanation: "Der Hauptgrund war die Nutzung des vereinfachten Datenmodells von SAP HANA (ohne Aggregate). Die Programmiersprache im Backend bleibt primär ABAP."
    },
    {
        schwierigkeit: "leicht",
        question: "Was ist die Kernaufgabe von SAP Fiori als Designsystem?",
        options: [
            "Den Benutzern helfen, ihre Arbeit einfacher auf jedem Gerät zu erledigen.",
            "Ausschließlich die Performance der Datenbank zu verbessern.",
            "Nur für Entwickler neue Programmierschnittstellen bereitzustellen.",
            "Die Serverkosten für Unternehmen zu reduzieren."
        ],
        correct: [0],
        explanation: "SAP Fiori ist das Designsystem mit dem Ziel, eine angenehme Benutzererfahrung zu schaffen und die Arbeit einfacher zu machen."
    },
    {
        schwierigkeit: "leicht",
        question: "Welches Programm wird klassischerweise verwendet, um eine Liste der verfügbaren SAP-Systeme anzuzeigen und eine Verbindung herzustellen?",
        options: ["SAP GUI", "SAP Logon", "SAP Fiori Launchpad", "SAP BTP Cockpit"],
        correct: [1],
        explanation: "Das SAP Logon ist ein eigenständiges Programm, das eine Liste der verfügbaren SAP-Systeme anzeigt und dann das SAP GUI startet."
    },
    {
        schwierigkeit: "leicht",
        question: "Welches Oberflächenelement im SAP GUI enthält allgemeine Informationen über das SAP-System (z.B. Mandant) und die aktuelle Transaktion?",
        options: ["Statusleiste", "Menüpfad", "Rollenleiste", "Anwendungsfunktionsleiste"],
        correct: [0],
        explanation: "Die Statusleiste (am unteren Rand des SAP GUI) zeigt wichtige Systeminformationen wie System-ID, Mandant und Transaktionscode an."
    },
    {
        schwierigkeit: "mittel",
        question: "Im Menü 'SAP Easy Access' können Favoriten angelegt werden. Was kann dort verknüpft werden? (Mehrfachauswahl)",
        options: ["Internetadressen (Weblinks)", "Transaktionen", "Verknüpfungen zu lokalen Dateien"],
        correct: [0, 1, 2],
        explanation: "Die Favoritenliste im SAP Easy Access ist sehr flexibel. Man kann dort Transaktionen, Weblinks und sogar Verknüpfungen zu lokalen Dateien ablegen."
    },
    {
        schwierigkeit: "leicht",
        question: "Welche Funktionstaste verwenden Sie standardmäßig, um die Hilfe zu einem bestimmten Feld (inkl. Parameter-ID) aufzurufen?",
        options: ["F1", "F4", "F8", "F11"],
        correct: [0],
        explanation: "Die F1-Hilfe (Feldhilfe) öffnet ein Fenster mit technischen und inhaltlichen Informationen zum ausgewählten Feld."
    },
    {
        schwierigkeit: "leicht",
        question: "Welches ist die höchste Ebene aller Organisationseinheiten im SAP, die das Unternehmen oder die Konzernzentrale darstellt?",
        options: ["Werk", "Lagerort", "Buchungskreis", "Mandant"],
        correct: [3],
        explanation: "Der Mandant ist die höchste Organisationseinheit im SAP-System. Alle anderen Organisationseinheiten sind dem Mandanten untergeordnet."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche der folgenden Aussagen über Stammdaten treffen zu? (Mehrfachauswahl)",
        options: [
            "Sie werden zentral angelegt und sind für alle berechtigten Anwendungen verfügbar.",
            "Stammdaten senken die Datenredundanz.",
            "Stammdaten sind in Sichten (Views) gegliedert, die Organisationselementen zugeordnet sind.",
            "Stammdaten ändern sich täglich und dokumentieren den laufenden Geschäftsbetrieb."
        ],
        correct: [0, 1, 2],
        explanation: "Stammdaten werden zentral gepflegt (verhindert Redundanz) und haben oft Sichten (z.B. Vertriebssicht). Sie ändern sich selten, im Gegensatz zu Bewegungsdaten (Belegen)."
    },
    {
        schwierigkeit: "mittel",
        question: "Was ist ein 'Beleg' im SAP-Kontext?",
        options: [
            "Ein Papierausdruck aus dem Drucker.",
            "Ein elektronischer Datensatz, der einen Geschäftsvorfall dokumentiert und Infos aus Stamm- und Bewegungsdaten vereint.",
            "Eine physische Wareneingangsquittung.",
            "Ein Report zur Datenauswertung."
        ],
        correct: [1],
        explanation: "Ein Beleg ist ein elektronisches Dokument im System, das bei Transaktionen erzeugt wird (z.B. Materialbeleg, Buchhaltungsbeleg)."
    },

    // === WOCHE 2: BESCHAFFUNG (MM) ===
    {
        schwierigkeit: "leicht",
        question: "Welche Anforderungen haben 'gelegentliche Benutzer' (Occasional Users) normalerweise an ihre Benutzeroberfläche? (Mehrfachauswahl)",
        options: [
            "Sie sollte browser-basiert sein.",
            "Sie sollte stark backend-orientiert sein.",
            "Sie sollte einfach und intuitiv sein.",
            "Sie sollte extrem viele Detail-Funktionen haben."
        ],
        correct: [0, 2],
        explanation: "Gelegentliche Benutzer benötigen einfache, browser-orientierte Anwendungen (wie Fiori-Apps), keine komplexen Experten-Werkzeuge."
    },
    {
        schwierigkeit: "mittel",
        question: "Wie sind die wichtigsten logistischen Organisationsebenen in einem Unternehmen von oben nach unten strukturiert?",
        options: [
            "Buchungskreis – Mandant – Werk – Lagerort",
            "Mandant – Buchungskreis – Lagerort",
            "Mandant – Buchungskreis – Werk – Lagerort",
            "Werk – Mandant – Buchungskreis – Lagerort"
        ],
        correct: [2],
        explanation: "Die Hierarchie lautet: Mandant (Konzern) -> Buchungskreis (Firma) -> Werk (Standort) -> Lagerort (Bestandsführung)."
    },
    {
        schwierigkeit: "schwer",
        question: "Eine Einkaufsorganisation kann nur für Werke innerhalb eines einzigen Buchungskreises verantwortlich sein. Richtig oder Falsch?",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Falsch. Eine Einkaufsorganisation kann buchungskreisübergreifend agieren und für Werke verschiedener Buchungskreise einkaufen (Konzern-Einkauf)."
    },
    {
        schwierigkeit: "mittel",
        question: "Auf welche Belege können Sie sich beim Anlegen einer neuen Bestellung direkt beziehen? (Mehrfachauswahl)",
        options: ["Fertigungsauftrag", "Bestellung (alte)", "Lieferantenrechnung", "Kontrakt"],
        correct: [1, 3],
        explanation: "Man kann Bestellungen u.a. mit Bezug auf eine Bestellanforderung, ein Angebot, einen Kontrakt oder eine andere Bestellung anlegen."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche Belege werden zwingend angelegt, wenn Sie einen bewerteten Wareneingang für Lagermaterial buchen? (Mehrfachauswahl)",
        options: ["Rückmeldebeleg", "Materialbeleg", "Buchhaltungsbeleg", "Stornobeleg"],
        correct: [1, 2],
        explanation: "Beim bewerteten Wareneingang wird die Bestandsmenge erhöht (Materialbeleg) und der Bestandswert im Hauptbuch verbucht (Buchhaltungsbeleg)."
    },
    {
        schwierigkeit: "leicht",
        question: "Für die Buchung einer Warenbewegung ist im SAP-System immer eine 'Bewegungsart' (Movement Type) erforderlich.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Richtig. Die Bewegungsart ist essenziell, um zu steuern, was genau passiert (Wareneingang, Warenausgang, Umlagerung etc.) und welche Konten bebucht werden."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche der folgenden Objekte werden in S/4HANA als 'Geschäftspartner' (Business Partner) angelegt? (Mehrfachauswahl)",
        options: ["Dispositionsbereich", "Lieferant (Kreditor)", "Lagerort", "Kunde (Debitor)"],
        correct: [1, 3],
        explanation: "In S/4HANA ist das Geschäftspartner-Konzept verpflichtend. Lieferanten und Kunden werden zentral als Geschäftspartner in verschiedenen Rollen angelegt."
    },
    {
        schwierigkeit: "schwer",
        question: "Was steuert die 'Materialart' (z.B. ROH, HAWA) beim Anlegen eines Materialstammsatzes? (Mehrfachauswahl)",
        options: [
            "Die Art der Nummernvergabe",
            "Die zulässige Länge des Materialkurztextes",
            "Ob ein Material intern oder extern beschafft wird",
            "Welche Sichten (Views) gepflegt werden können"
        ],
        correct: [0, 2, 3],
        explanation: "Die Materialart steuert tiefgreifende Eigenschaften wie Beschaffungsart, Sichten-Auswahl und Nummernkreise. Die Kurztextlänge ist systemweit starr vorgegeben."
    },
    {
        schwierigkeit: "schwer",
        question: "Sie buchen einen Wareneingang für ein Material, das zum 'Standardpreis' (Preissteuerung S) bewertet wird. Was passiert, wenn der Bestellpreis vom Standardpreis abweicht?",
        options: [
            "Der Standardpreis im Materialstamm wird sofort an den Bestellpreis angepasst.",
            "Die Bestandsbuchung erfolgt zu dem im Materialstammsatz hinterlegten Standardpreis.",
            "Die Preisdifferenz wird direkt auf ein Preisdifferenzenkonto in der FiBu gebucht.",
            "Der Wareneingang wird vom System mit einer Fehlermeldung abgelehnt."
        ],
        correct: [1, 2],
        explanation: "Beim Standardpreis bleibt der Wert im Materialstamm konstant. Abweichende Beschaffungskosten werden auf ein spezielles Preisdifferenzenkonto gebucht."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche der folgenden Daten müssen zwingend in einer Bestellposition vorhanden sein, wenn Sie Material direkt für den Verbrauch (z.B. Büromaterial) einkaufen? (Mehrfachauswahl)",
        options: ["Kontierungstyp", "Materialstammnummer", "Sachkonto (Kostenkonto)", "Materialkurztext"],
        correct: [0, 2, 3],
        explanation: "Für Verbrauchsmaterial braucht man keinen Materialstamm. Man benötigt aber zwingend einen Kurztext, einen Kontierungstyp (z.B. Kostenstelle) und das zu bebuchende Sachkonto."
    },
    {
        schwierigkeit: "mittel",
        question: "Was geben Sie über den 'Aufriss' in der Belegübersicht (Transaktion ME21N) an?",
        options: [
            "Die Werte für die Selektion der Belege",
            "Nach welchen Kriterien die ausgewählten Belege hierarchisch sortiert/gruppiert werden sollen",
            "Die Detaildaten eines Belegs"
        ],
        correct: [1],
        explanation: "Der Aufriss (Layout) bestimmt die Gruppierung und Sortierung (z.B. erst nach Lieferant, dann nach Bestellnummer)."
    },

    // === WOCHE 3: VERTRIEB (SD) ===
    {
        schwierigkeit: "mittel",
        question: "Ein Vertriebsbeleg (z.B. Kundenauftrag) ist genau einem Vertriebsbereich zugeordnet. Kann diese Zuordnung nach dem Sichern des Kopfes noch geändert werden?",
        options: ["Ja", "Nein"],
        correct: [1],
        explanation: "Nein. Die Zuordnung zu Verkaufsorganisation, Vertriebsweg und Sparte (Vertriebsbereich) erfolgt auf Kopfebene und ist nach Anlage bindend."
    },
    {
        schwierigkeit: "mittel",
        question: "Welcher der folgenden Belege ist der erste, zentrale Schritt des reinen Versandprozesses in SAP S/4HANA?",
        options: [
            "Kundenauftrag",
            "Fakturierung",
            "Auslieferungserstellung",
            "Kommissionierung"
        ],
        correct: [2],
        explanation: "Der Versandprozess beginnt technisch mit der Erstellung der Auslieferung, die als Basis für Kommissionierung und Warenausgang dient."
    },
    {
        schwierigkeit: "mittel",
        question: "Auf welcher Strukturebene innerhalb eines Verkaufsbelegs befinden sich konkrete Liefermengen und Liefertermine (z.B. für Teillieferungen)?",
        options: ["Kopfebene", "Positionsebene", "Einteilungsebene"],
        correct: [2],
        explanation: "Liefertermine und -mengen liegen auf der Einteilungsebene. Eine Position kann mehrere Einteilungen (Teillieferungen zu verschiedenen Daten) besitzen."
    },
    {
        schwierigkeit: "schwer",
        question: "Welche der folgenden Partnerrollen definiert standardmäßig, an welche Adresse die Rechnung (Faktura) geschickt wird?",
        options: ["Auftraggeber (AG)", "Warenempfänger (WE)", "Rechnungsempfänger (RE)", "Regulierer (RG)"],
        correct: [2],
        explanation: "Der Rechnungsempfänger (RE) erhält das physische oder elektronische Dokument. Der Regulierer (RG) ist derjenige, der letztendlich die Zahlung ausführt."
    },
    {
        schwierigkeit: "schwer",
        question: "In welcher Reihenfolge greift das System bei der automatischen Suche nach dem Standardauslieferungswerk in einem Kundenauftrag auf die Stammdaten zu?",
        options: [
            "1. Materialstamm -> 2. Kundenstamm -> 3. Kunden-Material-Infosatz",
            "1. Kunden-Material-Infosatz -> 2. Kundenstamm (Warenempfänger) -> 3. Materialstamm",
            "1. Kundenstamm (Auftraggeber) -> 2. Materialstamm -> 3. Kunden-Material-Infosatz"
        ],
        correct: [1],
        explanation: "Das System sucht immer von der spezifischsten zur allgemeinsten Info: Zuerst im Kunden-Material-Infosatz, dann im Kundenstamm des Warenempfängers, zuletzt im Materialstamm."
    },
    {
        schwierigkeit: "leicht",
        question: "Um den Prozess des Abrechnens zu beschleunigen, können Sie über den Fakturavorrat (Sammelverarbeitung) mehrere Fakturen gleichzeitig anlegen lassen.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Richtig. Die Sammelbearbeitung (Transaktion VF04) wird genutzt, um hunderte von Auslieferungen in einem Lauf automatisch zu fakturieren."
    },
    {
        schwierigkeit: "schwer",
        question: "Bringen Sie den Ablauf der Kundeneinzelfertigung (Make-to-Order) in die richtige Reihenfolge.",
        options: [
            "1. Kundenauftrag erzeugt Bedarf -> 2. Materialbedarfsplanung (MRP) plant -> 3. Fertigungsauftrag wird erstellt -> 4. Termine fließen zurück in Kundenauftrag",
            "1. Fertigungsauftrag wird erstellt -> 2. MRP plant -> 3. Kundenauftrag wird geschrieben",
            "1. MRP plant -> 2. Fertigungsauftrag wird erstellt -> 3. Kundenauftrag wird geschrieben"
        ],
        correct: [0],
        explanation: "Bei Einzelfertigung ist der Auslöser der Kundenauftrag. Dieser erzeugt den Bedarf für MRP, MRP erzeugt Planaufträge, die zu Fertigungsaufträgen werden."
    },
    {
        schwierigkeit: "mittel",
        question: "Beim Stornieren einer Faktura werden automatisch eine Stornofaktura und ein neuer (stornierender) Buchhaltungsbeleg erzeugt.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Richtig. Die Stornofaktura neutralisiert das Dokument im SD, und der zugehörige Buchhaltungsbeleg storniert die offenen Posten und Erlöse im FI."
    },
    {
        schwierigkeit: "mittel",
        question: "Was ermöglichen Core Data Services (CDS) in SAP S/4HANA Embedded Analytics?",
        options: [
            "Die physikalische Replikation von Daten in ein Data Warehouse.",
            "Das Verbinden von Transaktionen und Analysen über virtuelle Datenmodelle für Echtzeit-Reporting.",
            "Die Programmierung von Java-Apps im Backend."
        ],
        correct: [1],
        explanation: "CDS-Views definieren virtuelle Datenmodelle direkt auf der In-Memory-Datenbank. Dadurch entfällt Datenreplikation und Echtzeit-Auswertungen sind möglich."
    },

    // === WOCHE 4: PRODUKTIONSPLANUNG (PP) ===
    {
        schwierigkeit: "mittel",
        question: "Welche der folgenden Elemente gehören zu den Produktionsstammdaten in SAP S/4HANA? (Mehrfachauswahl)",
        options: [
            "Arbeitsplatz",
            "Kostenstelle",
            "Stückliste (BOM)",
            "Fertigungsauftrag"
        ],
        correct: [0, 2],
        explanation: "Stückliste, Arbeitsplatz und Arbeitsplan sind die klassischen PP-Stammdaten. Ein Fertigungsauftrag ist ein Beleg (Bewegungsdaten)."
    },
    {
        schwierigkeit: "schwer",
        question: "Was bedeutet das Prinzip der 'Rückwärtsverrechnung' (Verrechnungsmodus 1) in der Programmplanung (Demand Management)?",
        options: [
            "Kundenaufträge reduzieren den Bestand rückwirkend in der Finanzbuchhaltung.",
            "Kundenaufträge werden mit Planprimärbedarfen verrechnet, die zeitlich VOR dem Kundenbedarf liegen.",
            "Kundenaufträge werden mit Planprimärbedarfen verrechnet, die zeitlich NACH dem Kundenbedarf liegen."
        ],
        correct: [1],
        explanation: "Bei der Rückwärtsverrechnung sucht das System ausgehend vom Datum des Kundenauftrags in der Vergangenheit nach offenen Planprimärbedarfen, um diese aufzubrauchen."
    },
    {
        schwierigkeit: "schwer",
        question: "Was bedeutet das 'Einzelbedarfskennzeichen' in der Materialbedarfsplanung?",
        options: [
            "Das Material wird speziell für einen bestimmten Kundenauftrag oder ein Projekt gefertigt/beschafft und in einem eigenen Dispo-Segment geführt.",
            "Das Material wird für verschiedene Bedarfe gesammelt gefertigt (anonyme Lagerfertigung)."
        ],
        correct: [0],
        explanation: "Einzelbedarf bedeutet Kundeneinzelfertigung/projektbezogene Fertigung. Der Bestand ist hart an den verursachenden Kundenauftrag gebunden."
    },
    {
        schwierigkeit: "mittel",
        question: "Welches Objekt müssen Sie in S/4HANA per CIF (Core Interface) aus dem ERP an das SAP SCM/PP-DS übertragen, um dort eine 'Ressource' zu generieren?",
        options: ["Werk", "Material", "Arbeitsplatzkapazität", "Lagerort"],
        correct: [2],
        explanation: "Die Arbeitsplatzkapazität des SAP ERP wird in der erweiterten Planung (PP/DS) als 'Ressource' abgebildet."
    },
    {
        schwierigkeit: "schwer",
        question: "Wie betrachtet die Materialbedarfsplanung (MRP) den 'Sicherheitsbestand' technisch?",
        options: [
            "Als frei verwendbaren Bestand",
            "Als Bedarfselement (Anforderung)",
            "Als Zugangselement",
            "Als gesperrten Bestand"
        ],
        correct: [1],
        explanation: "MRP behandelt den Sicherheitsbestand als künstlichen Bedarf (Bedarfselement). Wenn der Bestand auf null fällt, drängt MRP darauf, zuerst den Sicherheitsbestand wieder 'aufzufüllen'."
    },
    {
        schwierigkeit: "schwer",
        question: "Was ist eine 'Heuristik' in SAP PP/DS?",
        options: [
            "Ein einfacher Report zur Anzeige von Kapazitäten.",
            "Ein parametrisierter Funktionsbaustein, der komplexe Planungsalgorithmen für ausgewählte Objekte ausführt.",
            "Eine Fiori-App für maschinelles Lernen."
        ],
        correct: [1],
        explanation: "Eine Heuristik ist ein technischer Planungsalgorithmus (Funktionsbaustein), der für spezifische Planungsprobleme (z.B. Losgrößenbildung, Terminierung) eingesetzt wird."
    },
    {
        schwierigkeit: "schwer",
        question: "Was ist die Hauptaufgabe des Optimierers im PP/DS?",
        options: [
            "Er maximiert den ROI (Return on Investment).",
            "Er minimiert eine mathematische Zielfunktion basierend auf Rüstkosten, Verspätungskosten etc.",
            "Er berechnet die günstigsten Einkaufspreise bei Lieferanten."
        ],
        correct: [1],
        explanation: "Der PP/DS-Optimierer ist ein Solver, der versucht, einen idealen Produktionsplan zu finden, indem er eine durch Strafkosten definierte Zielfunktion minimiert."
    },
    {
        schwierigkeit: "schwer",
        question: "Wie ist der korrekte Ablauf der Methodik bei 'Demand-Driven MRP' (DDMRP)?",
        options: [
            "1. Puffer festlegen -> 2. Pufferprofile einrichten -> 3. Puffergrößen anpassen -> 4. Nachschubaufträge erstellen -> 5. Aufträge priorisieren",
            "1. Nachschub erstellen -> 2. Puffer festlegen -> 3. Aufträge priorisieren",
            "1. Pufferprofile einrichten -> 2. Puffer festlegen -> 3. Aufträge priorisieren"
        ],
        correct: [0],
        explanation: "Die DDMRP-Methodik ist streng strukturiert: Positionierung (Puffer festlegen), Profile & Level (einrichten/anpassen) und schließlich Ausführung (Nachschub/Priorisierung)."
    }
];