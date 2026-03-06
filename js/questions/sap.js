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
    },
    {
    // === WOCHE 5: S4F10 - KAPITEL 1 ===
    schwierigkeit: "mittel",
    question: "Wie können Sie SAP S/4HANA so einrichten, dass Sie alle Softwareaktualisierungen automatisch erhalten?",
    options: ["On-Premise", "Cloud", "Central Finance", "Virtuell"],
    correct: [1],
    explanation: "In der SAP S/4HANA Cloud Edition werden Softwareaktualisierungen automatisch von SAP bereitgestellt, um sicherzustellen, dass das System immer auf dem neuesten Stand ist. Dies ist ein wesentliches Merkmal des Cloud-Modells. (Kapitel 1, Link: /module?id=s4f10#l1-1)"
},
{
    schwierigkeit: "mittel",
    question: "Welche Faktoren sollten Sie bei der Entscheidung, welche SAP-S/4HANA-Implementierungsoption für Ihr Unternehmen am besten geeignet ist, berücksichtigen? (Mehrfachauswahl)",
    options: ["Geschäftsfunktionen, gesetzliche und regionale Anforderungen", "Ausschließlich die Vorlieben der IT-Abteilung", "IT-Strategie und Innovationszyklen", "Implementierungszeiten", "Anzahl der verwendeten SAP-GUI-Themes"],
    correct: [0, 2, 3],
    explanation: "Die Wahl der richtigen SAP S/4HANA-Implementierungsoption hängt von verschiedenen Faktoren ab. Dazu gehören die benötigten Geschäftsfunktionen, gesetzliche und regionale Anforderungen, die IT-Strategie und Innovationszyklen des Unternehmens sowie die geplante Implementierungszeit. Die Vorlieben der IT-Abteilung allein oder die Anzahl der GUI-Themes sind keine entscheidenden Kriterien. (Kapitel 1, Link: /module?id=s4f10#l1-1)"
},
{
    schwierigkeit: "mittel",
    question: "Welche verschiedenen Typen von SAP-Fiori-Apps können verwendet werden? (Mehrfachauswahl)",
    options: ["Transaktionale Apps", "Analytische Apps", "Administrative Background-Apps", "Infoblätter (Factsheets)"],
    correct: [0, 1, 3],
    explanation: "SAP Fiori bietet verschiedene App-Typen für unterschiedliche Anwendungsfälle. 'Transaktionale Apps' werden für Geschäftsvorfälle wie das Anlegen von Bestellungen verwendet. 'Analytische Apps' bieten Einblicke und Visualisierungen von Geschäftsdaten. 'Infoblätter (Factsheets)' zeigen zentrale Informationen zu Geschäftsobjekten auf einen Blick. (Kapitel 1, Link: /module?id=s4f10#l1-1)"
},
{
    schwierigkeit: "leicht",
    question: "Auf dem SAP Fiori Launchpad können Benutzer Personalisierungsoptionen auswählen. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Das SAP Fiori Launchpad ist stark personalisierbar. Benutzer können Kacheln hinzufügen, entfernen, gruppieren und das Erscheinungsbild an ihre Bedürfnisse anpassen, um ihre tägliche Arbeit effizienter zu gestalten. (Kapitel 1, Link: /module?id=s4f10#l1-1)"
},
{
    // === WOCHE 5: S4F10 - KAPITEL 2 ===
    schwierigkeit: "mittel",
    question: "Nennen Sie mindestens drei Komponenten der Finanzbuchhaltung in SAP S/4HANA. (Mehrere Antworten möglich)",
    options: ["FI-GL (Hauptbuchhaltung)", "FI-AP (Kreditorenbuchhaltung)", "FI-AR (Debitorenbuchhaltung)", "FI-AA (Anlagenbuchhaltung)", "FI-BL (Bankbuchhaltung)", "CO-OM (Gemeinkostencontrolling)", "MM-PUR (Einkauf)"],
    correct: [0, 1, 2, 3, 4],
    explanation: "Die Finanzbuchhaltung (FI) in SAP S/4HANA besteht aus mehreren Kernkomponenten. Dazu gehören die Hauptbuchhaltung (FI-GL), die Kreditorenbuchhaltung (FI-AP), die Debitorenbuchhaltung (FI-AR), die Anlagenbuchhaltung (FI-AA) und die Bankbuchhaltung (FI-BL). CO-OM und MM-PUR gehören zu anderen Modulen (Controlling bzw. Materialwirtschaft). (Kapitel 2, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "In Nebenbüchern wie Kreditorenbuchhaltung und Debitorenbuchhaltung vorgenommene Buchungen werden gleichzeitig im Hauptbuch aufgezeichnet. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Dies ist das Prinzip der integrierten Buchhaltung in SAP. Jede Buchung auf einem Nebenbuchkonto (z.B. für einen bestimmten Kreditor) führt dank der Abstimmkontentechnik automatisch zu einer entsprechenden Buchung im Hauptbuch (FI-GL). (Kapitel 2, Link: /module?id=s4f10)"
},
{
    // === WOCHE 5: S4F10 - KAPITEL 3 ===
    schwierigkeit: "leicht",
    question: "Wie wird in SAP ein Unternehmen (selbständig bilanzierende Einheit) abgebildet?",
    options: ["Buchungskreis", "Kostenrechnungskreis", "Mandant", "Geschäftsbereich"],
    correct: [0],
    explanation: "Eine rechtlich selbstständige und bilanzierende Einheit wird in SAP als 'Buchungskreis' abgebildet. Der Mandant ist die höchste Organisationsebene, während der Kostenrechnungskreis für das interne Rechnungswesen dient. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "Einem Kostenrechnungskreis können mehrere Buchungskreise zugeordnet werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Dies ermöglicht ein buchungskreisübergreifendes Controlling. Voraussetzung ist, dass alle zugeordneten Buchungskreise denselben operativen Kontenplan und dasselbe Geschäftsjahr verwenden. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Welcher Kontenplan muss einem Buchungskreis zugeordnet werden, damit Buchungen vorgenommen werden können?",
    options: ["Gruppe", "Land", "Operativ", "Keine der genannten Möglichkeiten", "Alle genannten Möglichkeiten"],
    correct: [2],
    explanation: "Der 'operative Kontenplan' ist zwingend erforderlich und enthält die Konten, die in der täglichen Buchhaltung im Buchungskreis verwendet werden. Ein Gruppenkontenplan dient der Konzernkonsolidierung, ein Landeskontenplan spezifischen rechtlichen Anforderungen. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "Welches sind die zwei Bestandteile eines Sachkontos?",
    options: ["Kontenplansegment", "Buchungskreissegment", "Einkaufsorganisationssegment", "Vertriebsbereichssegment"],
    correct: [0, 1],
    explanation: "Ein Sachkontenstammsatz besteht aus dem 'Kontenplansegment', das allgemeine Informationen wie Kontonummer und Bezeichnung enthält, und dem 'Buchungskreissegment', das buchungskreisspezifische Steuerungsdaten wie Währung und Feldstatusgruppe festlegt. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Was ist einem Nummernbereich zugeordnet und steuert, wie das Buchungskreissegment eines Sachkontos auf einem Bildschirmbild dargestellt wird?",
    options: ["Kontengruppe", "Feldstatusvariante", "Kontoart", "Belegart"],
    correct: [0],
    explanation: "Die 'Kontengruppe' steuert wichtige Eigenschaften eines Sachkontos. Sie legt den Nummernkreis für das Konto fest und bestimmt über die zugeordnete Feldstatusvariante, welche Felder im Buchungskreissegment des Stammsatzes angezeigt werden (z.B. als Muss- oder Kann-Feld). (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Abstimmkonten können direkt bebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Abstimmkonten dienen der Verbindung zwischen Nebenbüchern (Debitoren, Kreditoren, Anlagen) und dem Hauptbuch. Sie werden ausschließlich indirekt über Buchungen auf die Nebenbuchkonten bebucht, um die Konsistenz der Buchhaltung sicherzustellen. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Was bestimmt den Aufbau einer Bilanz und einer Gewinn- und Verlustrechnung und gibt an, welche Konten welcher Position im Bericht entsprechen?",
    options: ["Bilanz/GuV-Struktur", "Kontenplan", "Kostenrechnungskreis", "Sachkontenstammsatz"],
    correct: [0],
    explanation: "Die 'Bilanz/GuV-Struktur' ist eine hierarchische Struktur, die definiert, welche Sachkonten in welche Zeilen der Bilanz und der Gewinn- und Verlustrechnung einfließen. Sie ist entscheidend für das externe Berichtswesen. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "Aus welchen zwei Bestandteilen setzt sich ein Beleg zusammen?",
    options: ["Belegkopf", "Belegpositionen", "Beleganhang", "Belegsaldo"],
    correct: [0, 1],
    explanation: "Jeder Buchungsbeleg in SAP besteht aus einem 'Belegkopf' mit allgemeinen Daten (Belegdatum, Buchungsdatum, Währung etc.) und mindestens zwei 'Belegpositionen', die die eigentlichen Soll- und Haben-Buchungen auf den Konten enthalten. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Für Buchungen auf Sachkonten stehen zwei Buchungsschlüssel zur Verfügung: einer für Sollbuchungen und einer für Habenbuchungen. Welche?",
    options: ["Soll: 40, Haben: 50", "Soll: 01, Haben: 15", "Soll: 21, Haben: 31", "Soll: 70, Haben: 75"],
    correct: [0],
    explanation: "Bei reinen Sachkontenbuchungen im Hauptbuch werden standardmä��ig die Buchungsschlüssel '40' für Sollbuchungen und '50' für Habenbuchungen verwendet. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Mit einem Buchungsschlüssel kann nur auf eine Kontoart gebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Der Buchungsschlüssel steuert unter anderem, auf welche Kontoart (Sachkonto, Debitor, Kreditor etc.) gebucht werden darf. Zum Beispiel ist Buchungsschlüssel 01 für Debitorenbuchungen reserviert und kann nicht für Sachkonten verwendet werden. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Bei der Buchung eines Belegs wird diesem Beleg eine Nummer zugeordnet. Diese Nummer liegt innerhalb eines Nummernkreises. Welchem Bestandteil im Kopf des Belegs ist dieser zugeordnet?",
    options: ["Belegart", "Buchungsdatum", "Buchungskreis", "Währung"],
    correct: [0],
    explanation: "Die 'Belegart' steuert wesentliche Eigenschaften eines Belegs, darunter auch den zu verwendenden Nummernkreis. So wird sichergestellt, dass z.B. Rechnungen und Gutschriften aus unterschiedlichen Nummernkreisen stammen. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Welche Stammsatzeinstellungen müssen für ein Aufwandskonto, das im Rahmen einer FI-Transaktion bebucht wird, vorhanden sein, damit Informationen an das Modul Controlling übergeben werden können?",
    options: ["Sachkontoart = Primärkosten oder Erlöse und Einstellungen zum Kostenartentyp", "Sachkontoart = Bilanzkonto und Abstimmkonto-Kennzeichen", "Sachkontoart = Sekundärkosten und Kostenstellen-Zuordnung"],
    correct: [0],
    explanation: "Damit eine Buchung aus dem FI kostenrechnerisch relevant ist, muss das bebuchte Sachkonto als 'Primärkostenart' oder 'Erlösart' angelegt sein. Diese Einstellung macht das FI-Konto im Controlling (CO) bekannt und ermöglicht die Buchung auf ein CO-Objekt (z.B. Kostenstelle). (Kapitel 3, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "Wenn eine Transaktion im FI gebucht wird, wird sie automatisch im Bereich AKTIVA/PASSIVA oder GEWINN & VERLUST in der Bilanz/GuV angezeigt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Dank der Zuordnung der Sachkonten zur Bilanz/GuV-Struktur und der Echtzeit-Integration in S/4HANA wird jede Buchung sofort in den entsprechenden Berichten sichtbar. (Kapitel 3, Link: /module?id=s4f10)"
},
{
    // === WOCHE 5: S4F10 - KAPITEL 4 ===
    schwierigkeit: "mittel",
    question: "Jeder Geschäftspartner muss beim Anlegen einer Gruppierung zugeordnet werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Die 'Gruppierung' ist ein Pflichtfeld beim Anlegen eines Geschäftspartners. Sie steuert unter anderem, ob die Geschäftspartnernummer intern vom System vergeben oder extern vom Benutzer eingegeben wird. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Kreditorenkonten bestehen aus zwei Segmenten. Welche?",
    options: ["Allgemeine Daten (Mandantenebene)", "Buchungskreisdaten", "Vertriebsbereichsdaten", "Werksdaten"],
    correct: [0, 1],
    explanation: "Ein Kreditorenstammsatz (als Teil des Geschäftspartners) hat 'Allgemeine Daten' auf Mandantenebene (z.B. Adresse) und 'Buchungskreisdaten' (z.B. Zahlungsbedingungen, Abstimmkonto), die pro Buchungskreis unterschiedlich sein können. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "In welchem Segment des Kreditorenstammsatzes befindet sich das Abstimmkonto?",
    options: ["Im Buchungskreissegment", "In den allgemeinen Daten", "Im Einkaufsorganisationssegment", "Im Zahlungssegment"],
    correct: [0],
    explanation: "Das Abstimmkonto ist eine buchungskreisspezifische Information und befindet sich daher im 'Buchungskreissegment' des Kreditorenstammsatzes. Es verknüpft die Kreditorenbuchungen mit dem Hauptbuch. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wenn Sie in SAP S/4HANA Kreditorenbuchungen ausführen, wird ein Informationsbereich zum Kreditor angezeigt. Wozu können Sie diese Information verwenden? (Mehrere Antworten möglich)",
    options: ["Den Kreditorenstammsatz vor der Ausführung einer Buchung anzeigen und ändern", "Direkt die offenen Posten auf dem Kreditorenkonto aufrufen", "Materialstammdaten des Lieferanten anlegen", "Eine automatische Zahlung veranlassen"],
    correct: [0, 1],
    explanation: "Der Informationsbereich in den Buchungstransaktionen ist ein nützliches Werkzeug, um schnell auf kontextbezogene Informationen zuzugreifen. Man kann direkt in den Stammsatz des Kreditors abspringen oder sich dessen offene Posten anzeigen lassen, ohne die Transaktion verlassen zu müssen. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Welche Sachkontoart wird verwendet, um von FI auf Kostenobjekte im CO zu buchen?",
    options: ["Primärkosten oder Erlöse", "Bilanzkonten", "Sekundärkosten", "Nichtbetriebliche Aufwendungen/Erträge"],
    correct: [0],
    explanation: "Sachkonten vom Typ 'Primärkosten oder Erlöse' sind das Bindeglied zwischen Externem (FI) und Internem (CO) Rechnungswesen. Nur Buchungen auf diese Konten können auf Kostenobjekte wie Kostenstellen oder Aufträge kontiert werden. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "Für regelmäßig ausgeführte Buchungen kann welches Programm verwendet werden, um die notwendigen Belege zu erzeugen?",
    options: ["Dauerbuchungsprogramm", "Zahlprogramm", "Mahnprogramm", "Kassenbuch"],
    correct: [0],
    explanation: "Das 'Dauerbuchungsprogramm' wird verwendet, um sich wiederholende Buchungen (z.B. Miete) automatisch zu einem festgelegten Zeitpunkt zu erstellen. Dies reduziert den manuellen Aufwand und vermeidet Fehler. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Was wird durch die Parameter für das Zahlprogramm genau definiert?",
    options: ["Nur Buchungskreise", "Nur Lieferanten und Belege", "Buchungskreise, Kreditoren und Belege"],
    correct: [2],
    explanation: "Die Parameter des Zahlprogramms definieren den Umfang des Zahlungslaufs. Man legt fest, für welche 'Buchungskreise' und welche 'Kreditoren' offene Posten ('Belege') zur Zahlung vorgeschlagen werden sollen. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "Wenn die Erstellung des Zahlungsvorschlags abgeschlossen ist, können keine Änderungen an den Zahlungsvorschlägen von SAP S/4HANA vorgenommen werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Nach der Erstellung des Zahlungsvorschlags kann dieser manuell bearbeitet werden. Man kann einzelne Posten aus der Zahlung herausnehmen (blockieren) oder die Zahlwege und Bankverbindungen ändern, bevor der eigentliche Zahllauf gestartet wird. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Aus welchen drei Teilen besteht ein Geschäftspartnerstammsatz, der als Kreditor (FI) und Lieferant (MM) verwendet wird?",
    options: ["Allgemeine Daten", "Daten zum Buchungskreis", "Daten zur Einkaufsorganisation", "Daten zum Werk", "Daten zum Vertriebsbereich"],
    correct: [0, 1, 2],
    explanation: "Ein Geschäftspartner, der als Lieferant im Einkauf (MM) und als Kreditor in der Buchhaltung (FI) genutzt wird, benötigt: 1. 'Allgemeine Daten' (zentral), 2. 'Daten zum Buchungskreis' für die FI-Rolle und 3. 'Daten zur Einkaufsorganisation' für die MM-Rolle. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Welche beiden wichtigen Organisationselemente gehören zur Materialwirtschaft?",
    options: ["Werk", "Einkaufsorganisation", "Buchungskreis", "Verkaufsorganisation"],
    correct: [0, 1],
    explanation: "Die zentralen Organisationselemente der Materialwirtschaft (MM) sind das 'Werk', das für die Produktion oder Lagerhaltung zuständig ist, und die 'Einkaufsorganisation', die für die Beschaffung von Materialien und Dienstleistungen verantwortlich ist. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Beim Anlegen einer Bestellung wird gleichzeitig ein Finanzbuchhaltungsbeleg generiert. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Das Anlegen einer Bestellung ist ein rein logistischer Vorgang und löst noch keine Buchung in der Finanzbuchhaltung aus. Ein FI-Beleg entsteht erst beim Wareneingang (für bewertetes Material) oder beim Rechnungseingang. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "In SAP S/4HANA können Korrekturen in Sonderperioden (z.B. Periode 13-16) für Jahresabschlusskorrekturen gebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Die Sonderperioden sind speziell für Abschlussbuchungen vorgesehen, die nach dem Ende der letzten regulären Periode (z.B. Dezember), aber noch für das abzuschließende Geschäftsjahr vorgenommen werden müssen. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Wenn sich der Umrechnungskurs seit der Buchung einer Kreditorenrechnung zu Ihren Gunsten geändert hat, werden die folgenden Soll- und Habentransaktionen vom Programm zur Fremdwährungsbewertung erstellt:",
    options: ["Soll: Bilanzkorrekturkonto; Haben: Ertrag aus Fremdwährungsbewertung", "Soll: Ertrag aus Fremdwährungsbewertung; Haben: Bilanzkorrekturkonto", "Soll: Kreditorenkonto; Haben: Aufwand aus Fremdwährungsbewertung", "Soll: Bankkonto; Haben: Bilanzkorrekturkonto"],
    correct: [0],
    explanation: "Wenn eine Verbindlichkeit in Fremdwährung bei einem günstigeren Kurs neu bewertet wird, sinkt ihr Wert in Hauswährung. Die Differenz wird als Ertrag gebucht ('Haben: Ertrag'). Die Gegenbuchung erfolgt auf ein 'Bilanzkorrekturkonto' ('Soll'), um die Bilanzsumme nicht zu verändern, da die ursprüngliche Verbindlichkeit nicht direkt geändert wird. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Das Programm zur Umgliederung von Verbindlichkeiten kann für drei Zwecke eingesetzt werden. Welche?",
    options: ["Umgliederung von Verbindlichkeiten gemäß ihren Restlaufzeiten", "Umgliederung von debitorischen Kreditoren", "Umgliederung von Kreditoren, deren Abstimmkonto sich geändert hat", "Umgliederung von Anlagegütern in das Umlaufvermögen", "Umgliederung von Fremdwährungen in Hauswährung"],
    correct: [0, 1, 2],
    explanation: "Das Programm zur Umgliederung von Verbindlichkeiten dient dazu, die Bilanz korrekt darzustellen. Es kann Verbindlichkeiten nach Restlaufzeit sortieren (kurz-/langfristig), Kreditoren mit Soll-Saldo als Forderung ausweisen (debitorische Kreditoren) und Korrekturen bei Abstimmkontenwechsel durchführen. (Kapitel 4, Link: /module?id=s4f10)"
},
{
    // === WOCHE 5: S4F10 - KAPITEL 5 ===
    schwierigkeit: "mittel",
    question: "Der Bereich für die allgemeinen Daten des Geschäftspartnerstammsatzes muss für jeden Buchungskreis, der Geschäfte mit diesem Debitor tätigt, separat angelegt werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Die allgemeinen Daten (z.B. Name, Adresse) eines Geschäftspartners werden zentral auf Mandantenebene angelegt und sind für alle Buchungskreise gültig. Nur die buchungskreis- und vertriebsbereichsspezifischen Daten müssen separat pro Organisationseinheit gepflegt werden. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wodurch wird die Buchung für einen Debitor mit dem Hauptbuch verknüpft?",
    options: ["Abstimmkonto", "Belegart", "Buchungsschlüssel", "Kontengruppe"],
    correct: [0],
    explanation: "Das im Debitorstammsatz hinterlegte 'Abstimmkonto' stellt die Verbindung zum Hauptbuch her. Jede Buchung auf das Debitorenkonto wird automatisch auch auf dieses Sachkonto im Hauptbuch gebucht, was die Konsistenz zwischen Neben- und Hauptbuch sicherstellt. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Wenn eine Teilzahlung für einen Zahlungseingang mit der Methode \"Teilzahlung\" verarbeitet wird, wird die Rechnung beglichen und ein neuer offener Posten in Höhe der Zahlungsdifferenz angelegt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Das beschriebene Verfahren ist die 'Restpostenmethode'. Bei der 'Teilzahlungsmethode' bleibt die ursprüngliche Rechnung als offener Posten bestehen und die erhaltene Zahlung wird als separater offener Posten (mit negativem Vorzeichen) gebucht. Beide Posten werden erst beim vollständigen Ausgleich miteinander verrechnet. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Verschiedene Ausgangsrechnungen, die nicht zu einem Kundenauftrag gehören, können nur über herkömmliche SAP-GUI-Transaktionen in der Komponente für die Debitorenbuchhaltung erfasst werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. In SAP S/4HANA können solche reinen FI-Rechnungen (ohne Bezug zu einem Logistikprozess) sowohl über klassische SAP-GUI-Transaktionen als auch über moderne SAP-Fiori-Apps erfasst werden. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wie kann eingesehen werden, ob ein Debitor gemahnt wurde? Wählen Sie die richtige Antwort.",
    options: ["Sie sehen im Korrespondenzbereich des Debitorenstammsatzes nach.", "Sie prüfen die Einzelpostendetails im Debitorenkonto.", "Sowohl A als auch B.", "Keine der genannten Möglichkeiten."],
    correct: [2],
    explanation: "Beide Wege sind möglich. Das Datum der letzten Mahnung und die Mahnstufe werden sowohl im Debitorenstammsatz (Korrespondenzbereich) gespeichert als auch in den Details des gemahnten Einzelpostens vermerkt. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Mit der transaktionalen App \"Klärungsfälle bearbeiten\" können Sie Folgendes tun: (Mehrere Antworten möglich)",
    options: ["Klärungsfälle anhand verschiedener Kriterien suchen und filtern.", "Die Details eines Klärungsfalls anzeigen, wie z.B. Textnotizen und verknüpfte Rechnungen.", "Klärungsfallattribute bearbeiten, wie z.B. den Bearbeiter.", "Textnotizen zu einem Klärungsfall hinzufügen.", "Dateianhänge zu einem Klärungsfall hinzufügen."],
    correct: [0, 1, 2, 3, 4],
    explanation: "Die Fiori-App 'Klärungsfälle bearbeiten' ist ein zentrales Werkzeug im Dispute Management. Sie ermöglicht eine umfassende Bearbeitung von der Suche und Anzeige bis hin zur Bearbeitung von Attributen, dem Hinzufügen von Notizen und Anhängen, um Zahlungsdifferenzen effizient zu klären. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wie lauten die drei Elemente, die zusammen einen Vertriebsbereich ergeben?",
    options: ["Verkaufsorganisation", "Vertriebsweg", "Sparte", "Werk", "Buchungskreis"],
    correct: [0, 1, 2],
    explanation: "Ein Vertriebsbereich ist eine eindeutige Kombination aus 'Verkaufsorganisation' (wer verkauft?), 'Vertriebsweg' (wie wird verkauft, z.B. Handel, Direktvertrieb) und 'Sparte' (was wird verkauft, z.B. Fahrräder, Ersatzteile). Er ist entscheidend für die Steuerung von Vertriebsprozessen. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wenn eine Lieferung angelegt wird, werden automatisch Buchhaltungsvorgänge generiert. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Das Anlegen der Lieferung ist ein rein logistischer Schritt zur Vorbereitung des Versands. Ein Buchhaltungsvorgang (Buchung von Warenaufwand an Bestand) wird erst beim Buchen des Warenausgangs zur Lieferung erzeugt. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wenn die Faktura in der Kundenauftragsbearbeitung angelegt wird, wird automatisch ein Buchhaltungsbeleg generiert, der das Konto des Kunden belastet und den Erlös bucht. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Mit dem Sichern der Faktura (Rechnung) wird im Hintergrund automatisch ein Buchhaltungsbeleg erzeugt. Dieser bucht die Forderung auf das Debitorenkonto (Soll) und den entsprechenden Erlös auf ein Erlöskonto (Haben). (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Welcher Schlüssel muss in den Stammsatz eines Debitors eingetragen werden, damit dieser Debitor in das Bewertungsprogramm für überfällige Forderungen einbezogen werden kann?",
    options: ["Wertberichtigungsschlüssel", "Mahnschlüssel", "Zahlungsbedingungsschlüssel", "Feldstatusgruppe"],
    correct: [0],
    explanation: "Der 'Wertberichtigungsschlüssel' im Debitorenstammsatz steuert, nach welcher Methode und mit welchen Prozentsätzen eine Forderung im Rahmen des Monatsabschlusses pauschal wertberichtigt wird, falls sie überfällig ist. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Das Wertberichtigungsprogramm führt eine Buchung durch, die zu Beginn des nächsten Monats storniert wird. Welche Konten werden mit der Buchung be- und entlastet?",
    options: ["Soll: Einzelwertberichtigung; Haben: Wertberichtigung Forderungen", "Soll: Wertberichtigung Forderungen; Haben: Einzelwertberichtigung", "Soll: Debitorenkonto; Haben: Abstimmkonto", "Soll: Bankkonto; Haben: Wertberichtigung Forderungen"],
    correct: [0],
    explanation: "Die Buchung lautet Soll an Aufwandskonto ('Einzelwertberichtigung') und Haben an Bilanzkorrekturkonto ('Wertberichtigung Forderungen'). Da dies eine rein statistische Buchung für den Periodenabschluss ist, wird sie am ersten Tag der Folgeperiode automatisch wieder storniert. (Kapitel 5, Link: /module?id=s4f10)"
},
{
    // === WOCHE 5: S4F10 - KAPITEL 6 ===
    schwierigkeit: "mittel",
    question: "Wie wird beim Anlegen eines Anlagenstammsatzes die Anlagennummer zugeordnet?",
    options: ["Die Anlagennummer wird über die Anlagenklasse zugeordnet.", "Die Anlagennummer wird manuell vergeben.", "Die Anlagennummer wird über den Buchungskreis zugeordnet.", "Die Anlagennummer wird über das Sachkonto abgeleitet."],
    correct: [0],
    explanation: "Die 'Anlagenklasse' ist das zentrale Steuerungselement für Anlagen. Sie legt unter anderem den Nummernkreis fest, aus dem die Anlagennummer beim Anlegen automatisch gezogen wird. (Kapitel 6, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wozu dient der Kontenfindungsschlüssel für die Anlage?",
    options: ["Er verbindet die Anlage mit dem Sachkonto (Abstimmkonto).", "Er berechnet die monatliche Abschreibung.", "Er definiert die voraussichtliche Nutzungsdauer.", "Er verknüpft die Anlage zwingend mit einer Kostenstelle."],
    correct: [0],
    explanation: "Der 'Kontenfindungsschlüssel' ist in der Anlagenklasse hinterlegt und verknüpft die Anlage mit den relevanten Sachkonten im Hauptbuch (z.B. Anschaffungswert, Abschreibungen). Er ist somit entscheidend für die automatische Kontenfindung bei Anlagenbuchungen. (Kapitel 6, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "leicht",
    question: "Jede Anlage gehört einem Buchungskreis an. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Jede Anlage muss genau einem Buchungskreis zugeordnet sein. Diese Zuordnung ist fix und stellt sicher, dass die Anlagenwerte korrekt in der Bilanz des jeweiligen Unternehmens ausgewiesen werden. (Kapitel 6, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Eine Bewegungsart gibt an, an welcher Stelle im Anlagengitter die Buchung aufgeführt wird. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Die Bewegungsart klassifiziert die Geschäftstransaktion (z.B. Zugang, Abgang, Umbuchung) und steuert, in welcher Spalte des Anlagengitters der Wert erscheint. Dies ist entscheidend für die Nachvollziehbarkeit der Anlagenentwicklung. (Kapitel 6, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Welche Methoden stehen für das Buchen von Zugängen in der Anlagenbuchhaltung zur Verfügung? (Mehrere Antworten möglich)",
    options: ["Ein Anlagenzugang aus einem Kauf gegen Kreditor.", "Ein Anlagenkauf mit automatischer Gegenbuchung.", "Abrechnung ausschließlich über das Kassenbuch.", "Automatische Buchung bei der Warenausgabe im Vertrieb."],
    correct: [0, 1],
    explanation: "Anlagenzugänge können auf verschiedene Weisen gebucht werden. Die häufigste ist die integrierte Buchung über den Einkaufsprozess (gegen Kreditor). Eine weitere Möglichkeit ist eine reine FI-Buchung, bei der die Gegenbuchung direkt auf ein Verrechnungskonto erfolgt. (Kapitel 6, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wozu dient der Asset Explorer?",
    options: ["Er bietet eine Übersicht über die Aktivitäten für eine Anlage nach Bewertungsbereich und Geschäftsjahr (Planwerte, gebuchte Bewegungen, Abschreibungen etc.).", "Er dient ausschließlich zur Anlage und Löschung neuer Buchungskreise in der Anlagenbuchhaltung.", "Er ist ein Tool zur Verwaltung von Mitarbeiterzugriffen auf Anlagegüter.", "Er berechnet automatisch den Verkaufspreis einer Anlage für den externen Markt."],
    correct: [0],
    explanation: "Der 'Asset Explorer' (Transaktion AW01N) ist das zentrale Analysewerkzeug für einzelne Anlagen. Er bietet eine detaillierte und transparente Übersicht über alle Werte und Bewegungen (Anschaffungswerte, Abschreibungen, Zuschreibungen etc.) einer Anlage, aufgeschlüsselt nach Bewertungsbereichen und Geschäftsjahren. (Kapitel 6, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Welche Art von Informationen liefert das Anlagengitter?",
    options: ["Ausschließlich geplante Wartungsintervalle von Maschinen.", "Eine umfassende Übersicht für den Abschluss (Buchwerte zu Beginn/Ende des Jahres, Zugänge, Abgänge, Abschreibungen).", "Eine Liste aller Debitoren und deren offener Posten.", "Echtzeitdaten zu Mitarbeiterstunden, die an Maschinen gearbeitet wurden."],
    correct: [1],
    explanation: "Das Anlagengitter ist der wichtigste Standardbericht in der Anlagenbuchhaltung für den Jahresabschluss. Es zeigt die Entwicklung des Anlagevermögens über ein Geschäftsjahr, indem es Anfangsbestände, alle Zugänge, Abgänge, Umbuchungen und Abschreibungen detailliert auflistet und die Endbestände ausweist. (Kapitel 6, Link: /module?id=s4f10)"
},
{
    // === WOCHE 5: S4F10 - KAPITEL 7 ===
    schwierigkeit: "leicht",
    question: "Alle Hausbankkonten werden in SAP durch Sachkonten dargestellt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Jedes physische Bankkonto (Girokonto, Festgeld etc.) wird im SAP-System als eigenes Sachkonto im Hauptbuch geführt. Dies ermöglicht eine genaue Verfolgung der Geldbestände und -flüsse pro Bankverbindung. (Kapitel 7, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Bevor die Details einer Bank in einem Geschäftspartner-Stammsatz erfasst werden können, muss diese Bank in das Bankenverzeichnis aufgenommen werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Obwohl es empfohlen wird, Banken zentral im Bankenverzeichnis anzulegen, können Bankdaten bei Bedarf auch direkt im Geschäftspartnerstammsatz erfasst werden. Das System legt dann automatisch einen Eintrag im Bankenverzeichnis an. (Kapitel 7, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Wenn Sie einen Geschäftsvorfall auf der Registerkarte \"Ausgaben bar\" des Kassenbuchs erfassen, wird das Handkassenkonto automatisch im Soll bebucht. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [1],
    explanation: "Falsch. Eine Barausgabe bedeutet, dass der Kassenbestand sinkt. Das Kassen-Sachkonto (Handkassenkonto) wird daher im Haben bebucht. Die Gegenbuchung erfolgt im Soll auf ein Aufwandskonto oder ein anderes Konto. (Kapitel 7, Link: /module?id=s4f10)"
},
{
    // === WOCHE 5: S4F10 - KAPITEL 8 ===
    schwierigkeit: "leicht",
    question: "Mit dem Financial Closing Cockpit können Sie Ihre Abschlussarbeiten auf verschiedenen Organisationsebenen organisieren. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: ["Richtig", "Falsch"],
    correct: [0],
    explanation: "Richtig. Das Financial Closing Cockpit ist ein flexibles Werkzeug zur Planung, Durchführung und Überwachung von Abschlussaktivitäten. Aufgaben können für verschiedene Organisationsebenen wie Buchungskreise, Kostenrechnungskreise etc. definiert und zugeordnet werden. (Kapitel 8, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "mittel",
    question: "Erlöse und Kosten, die in einer bestimmten Buchungsperiode gebucht wurden, stammen oft aus einer anderen Periode und müssen abgegrenzt werden. Was bedeutet das?",
    options: ["Sie müssen sofort in voller Höhe storniert werden.", "Sie dürfen erst im Folgejahr gebucht werden.", "Sie müssen über die Perioden verteilt werden, in denen sie entstehen.", "Sie werden auf ein Sperrkonto überwiesen, bis das Geschäftsjahr endet."],
    correct: [2],
    explanation: "Abgrenzung bedeutet die periodengerechte Zuordnung von Aufwand und Ertrag. Zum Beispiel wird eine im Voraus bezahlte Jahresmiete nicht komplett im Januar als Aufwand gebucht, sondern monatlich anteilig über das ganze Jahr verteilt. (Kapitel 8, Link: /module?id=s4f10)"
},
{
    schwierigkeit: "schwer",
    question: "Auf welches Konto überträgt das Programm zur WE/RE-Umgliederung den Saldo, wenn es im WE/RE-Konto beim Abschluss der Bücher einen Habensaldo für eine Einkaufstransaktion gibt?",
    options: ["Gelieferte, aber nicht berechnete Waren", "Berechnete, aber nicht gelieferte Waren", "Skontoerträge", "Rückstellungen für drohende Verluste"],
    correct: [0],
    explanation: "Ein Habensaldo auf dem WE/RE-Verrechnungskonto bedeutet, dass mehr Warenwerte (WE) gebucht wurden als Rechnungswerte (RE). Für die Bilanz wird dieser Saldo auf das Konto 'Gelieferte, aber nicht berechnete Waren' umgegliedert, um eine korrekte Passivposition auszuweisen. (Kapitel 8, Link: /module?id=s4f10)"
},
// Konvertierte Fragen aus quiz_s4f10.json
{
    schwierigkeit: "mittel",
    question: "Wie können Sie SAP S/4HANA so einrichten, dass Sie alle Softwareaktualisierungen automatisch erhalten?",
    options: [
        "On-Premise",
        "Cloud",
        "Central Finance",
        "Virtuell"
    ],
    correct: [1],
    explanation: "Die Cloud-Version von SAP S/4HANA wird direkt von SAP verwaltet, sodass Updates und Aktualisierungen automatisch eingespielt werden."
},
{
    schwierigkeit: "mittel",
    question: "Welche Faktoren sollten Sie bei der Entscheidung, welche SAP-S/4HANA-Implementierungsoption für Ihr Unternehmen am besten geeignet ist, berücksichtigen? (Mehrere Antworten möglich)",
    options: [
        "Geschäftsfunktionen, gesetzliche und regionale Anforderungen",
        "Ausschließlich die Vorlieben der IT-Abteilung",
        "IT-Strategie und Innovationszyklen",
        "Implementierungszeiten",
        "Anzahl der verwendeten SAP-GUI-Themes"
    ],
    correct: [0, 2, 3],
    explanation: "Die Wahl der Implementierungsoption hängt von Geschäfts- und IT-Anforderungen, der Strategie, Innovationszyklen und der geplanten Dauer ab."
},
{
    schwierigkeit: "mittel",
    question: "Welche verschiedenen Typen von SAP-Fiori-Apps können verwendet werden? (Mehrere Antworten möglich)",
    options: [
        "Transaktionale Apps",
        "Analytische Apps",
        "Administrative Background-Apps",
        "Infoblätter (Factsheets)"
    ],
    correct: [0, 1, 3],
    explanation: "SAP Fiori bietet drei Haupttypen von Apps: Transaktionale Apps für Aufgaben, Analytische Apps für Einblicke und Infoblätter (Factsheets) zur Anzeige von Stammdaten."
},
{
    schwierigkeit: "leicht",
    question: "Auf dem SAP Fiori Launchpad können Benutzer Personalisierungsoptionen auswählen. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Das SAP Fiori Launchpad ist stark personalisierbar, um die Benutzererfahrung zu verbessern."
},
{
    schwierigkeit: "mittel",
    question: "Nennen Sie mindestens drei Komponenten der Finanzbuchhaltung in SAP S/4HANA. (Mehrere Antworten möglich)",
    options: [
        "FI-GL (Hauptbuchhaltung)",
        "FI-AP (Kreditorenbuchhaltung)",
        "FI-AR (Debitorenbuchhaltung)",
        "FI-AA (Anlagenbuchhaltung)",
        "FI-BL (Bankbuchhaltung)",
        "CO-OM (Gemeinkostencontrolling)",
        "MM-PUR (Einkauf)"
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Die Kernkomponenten des FI-Moduls umfassen Hauptbuchhaltung (GL), Kreditoren- (AP), Debitoren- (AR), Anlagen- (AA) und Bankbuchhaltung (BL)."
},
{
    schwierigkeit: "leicht",
    question: "In Nebenbüchern wie Kreditorenbuchhaltung und Debitorenbuchhaltung vorgenommene Buchungen werden gleichzeitig im Hauptbuch aufgezeichnet. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Durch die Nutzung von Abstimmkonten werden Buchungen in Nebenbüchern automatisch und in Echtzeit im Hauptbuch (FI-GL) mitgebucht."
},
{
    schwierigkeit: "mittel",
    question: "Wie wird in SAP ein Unternehmen (selbständig bilanzierende Einheit) abgebildet?",
    options: [
        "Buchungskreis",
        "Kostenrechnungskreis",
        "Mandant",
        "Geschäftsbereich"
    ],
    correct: [0],
    explanation: "Der Buchungskreis ist die zentrale Organisationseinheit im externen Rechnungswesen, die eine rechtlich selbstständige, bilanzierende Einheit darstellt."
},
{
    schwierigkeit: "mittel",
    question: "Einem Kostenrechnungskreis können mehrere Buchungskreise zugeordnet werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Dies ist ein typisches Szenario für ein konzernweites Controlling, bei dem mehrere rechtliche Einheiten (Buchungskreise) unter einem einheitlichen Controlling (Kostenrechnungskreis) geführt werden."
},
{
    schwierigkeit: "mittel",
    question: "Welcher Kontenplan muss einem Buchungskreis zugeordnet werden, damit Buchungen vorgenommen werden können?",
    options: [
        "Gruppe",
        "Land",
        "Operativ",
        "Keine der genannten Möglichkeiten",
        "Alle genannten Möglichkeiten"
    ],
    correct: [2],
    explanation: "Der operative Kontenplan enthält die Sachkonten, die im täglichen Geschäftsbetrieb für Buchungen im Buchungskreis verwendet werden."
},
{
    schwierigkeit: "mittel",
    question: "Welches sind die zwei Bestandteile eines Sachkontos?",
    options: [
        "Kontenplansegment",
        "Buchungskreissegment",
        "Einkaufsorganisationssegment",
        "Vertriebsbereichssegment"
    ],
    correct: [0, 1],
    explanation: "Ein Sachkonto besteht aus allgemeinen Daten auf Kontenplanebene und spezifischen Steuerungsdaten auf Buchungskreisebene."
},
{
    schwierigkeit: "schwer",
    question: "Was ist einem Nummernbereich zugeordnet und steuert, wie das Buchungskreissegment eines Sachkontos auf einem Bildschirmbild dargestellt wird?",
    options: [
        "Kontengruppe",
        "Feldstatusvariante",
        "Kontoart",
        "Belegart"
    ],
    correct: [0],
    explanation: "Die Kontengruppe legt den Nummernkreis für das Sachkonto fest und steuert über den Feldstatus, welche Felder bei der Pflege des Buchungskreissegments Eingabefelder sind."
},
{
    schwierigkeit: "mittel",
    question: "Abstimmkonten können direkt bebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Abstimmkonten können nicht direkt bebucht werden. Sie werden automatisch über Buchungen auf die zugeordneten Nebenbücher (z.B. Debitoren, Kreditoren) aktualisiert."
},
{
    schwierigkeit: "mittel",
    question: "Was bestimmt den Aufbau einer Bilanz und einer Gewinn- und Verlustrechnung und gibt an, welche Konten welcher Position im Bericht entsprechen?",
    options: [
        "Bilanz/GuV-Struktur",
        "Kontenplan",
        "Kostenrechnungskreis",
        "Sachkontenstammsatz"
    ],
    correct: [0],
    explanation: "Die Bilanz/GuV-Struktur ist ein hierarchischer Aufbau, der die Sachkonten den entsprechenden Posten in der Bilanz und der Gewinn- und Verlustrechnung zuordnet."
},
{
    schwierigkeit: "leicht",
    question: "Aus welchen zwei Bestandteilen setzt sich ein Beleg zusammen?",
    options: [
        "Belegkopf",
        "Belegpositionen",
        "Beleganhang",
        "Belegsaldo"
    ],
    correct: [0, 1],
    explanation: "Jeder Buchungsbeleg in SAP besteht aus einem Belegkopf mit allgemeinen Daten (z.B. Belegdatum) und mindestens zwei Belegpositionen (Soll und Haben)."
},
{
    schwierigkeit: "mittel",
    question: "Für Buchungen auf Sachkonten stehen zwei Buchungsschlüssel zur Verfügung: einer für Sollbuchungen und einer für Habenbuchungen. Welche?",
    options: [
        "Soll: 40, Haben: 50",
        "Soll: 01, Haben: 15",
        "Soll: 21, Haben: 31",
        "Soll: 70, Haben: 75"
    ],
    correct: [0],
    explanation: "Im Standard sind die Buchungsschlüssel 40 (Soll) und 50 (Haben) für Sachkontenbuchungen vorgesehen."
},
{
    schwierigkeit: "schwer",
    question: "Mit einem Buchungsschlüssel kann nur auf eine Kontoart gebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Der Buchungsschlüssel steuert unter anderem die Kontoart (Sachkonto, Debitor, Kreditor), die bebucht werden darf, und ob es sich um eine Soll- oder Habenbuchung handelt."
},
{
    schwierigkeit: "mittel",
    question: "Bei der Buchung eines Belegs wird diesem Beleg eine Nummer zugeordnet. Diese Nummer liegt innerhalb eines Nummernkreises. Welchem Bestandteil im Kopf des Belegs ist dieser zugeordnet?",
    options: [
        "Belegart",
        "Buchungsdatum",
        "Buchungskreis",
        "Währung"
    ],
    correct: [0],
    explanation: "Die Belegart steuert, aus welchem Nummernkreis die Belegnummer vergeben wird. Dies dient der Organisation und Nachvollziehbarkeit von Geschäftsvorfällen."
},
{
    schwierigkeit: "schwer",
    question: "Welche Stammsatzeinstellungen müssen für ein Aufwandskonto, das im Rahmen einer FI-Transaktion bebucht wird, vorhanden sein, damit Informationen an das Modul Controlling übergeben werden können?",
    options: [
        "Sachkontoart = Primärkosten oder Erlöse und Einstellungen zum Kostenartentyp",
        "Sachkontoart = Bilanzkonto und Abstimmkonto-Kennzeichen",
        "Sachkontoart = Sekundärkosten und Kostenstellen-Zuordnung"
    ],
    correct: [0],
    explanation: "Damit ein FI-Beleg auch eine CO-relevante Buchung auslöst, muss das bebuchte Sachkonto als primäre Kostenart oder Erlösart angelegt sein."
},
{
    schwierigkeit: "leicht",
    question: "Wenn eine Transaktion im FI gebucht wird, wird sie automatisch im Bereich AKTIVA/PASSIVA oder GEWINN & VERLUST in der Bilanz/GuV angezeigt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Dank der Echtzeit-Integration und der Bilanz/GuV-Struktur wird jede Buchung sofort in den entsprechenden Berichten korrekt ausgewiesen."
},
{
    schwierigkeit: "leicht",
    question: "Jeder Geschäftspartner muss beim Anlegen einer Gruppierung zugeordnet werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Die Gruppierung ist ein Pflichtfeld und steuert unter anderem den Nummernkreis, aus dem die Geschäftspartnernummer vergeben wird."
},
{
    schwierigkeit: "mittel",
    question: "Kreditorenkonten bestehen aus zwei Segmenten. Welche?",
    options: [
        "Allgemeine Daten (Mandantenebene)",
        "Buchungskreisdaten",
        "Vertriebsbereichsdaten",
        "Werksdaten"
    ],
    correct: [0, 1],
    explanation: "Ein reiner FI-Kreditor (ohne Einkaufsdaten) besteht aus den allgemeinen Daten (mandantenweit) und den Buchungskreisdaten (buchungskreisspezifisch)."
},
{
    schwierigkeit: "mittel",
    question: "In welchem Segment des Kreditorenstammsatzes befindet sich das Abstimmkonto?",
    options: [
        "Im Buchungskreissegment",
        "In den allgemeinen Daten",
        "Im Einkaufsorganisationssegment",
        "Im Zahlungssegment"
    ],
    correct: [0],
    explanation: "Das Abstimmkonto ist spezifisch für einen Buchungskreis und wird daher im Buchungskreissegment des Kreditorenstammsatzes gepflegt."
},
{
    schwierigkeit: "mittel",
    question: "Wenn Sie in SAP S/4HANA Kreditorenbuchungen ausführen, wird ein Informationsbereich zum Kreditor angezeigt. Wozu können Sie diese Information verwenden? (Mehrere Antworten möglich)",
    options: [
        "Den Kreditorenstammsatz vor der Ausführung einer Buchung anzeigen und ändern",
        "Direkt die offenen Posten auf dem Kreditorenkonto aufrufen",
        "Materialstammdaten des Lieferanten anlegen",
        "Eine automatische Zahlung veranlassen"
    ],
    correct: [0, 1],
    explanation: "Der Informationsbereich in Buchungstransaktionen bietet direkten Zugriff auf Stammdaten und offene Posten, um die Dateneingabe zu erleichtern und zu überprüfen."
},
{
    schwierigkeit: "schwer",
    question: "Welche Sachkontoart wird verwendet, um von FI auf Kostenobjekte im CO zu buchen?",
    options: [
        "Primärkosten oder Erlöse",
        "Bilanzkonten",
        "Sekundärkosten",
        "Nichtbetriebliche Aufwendungen/Erträge"
    ],
    correct: [0],
    explanation: "Primärkostenarten sind das Bindeglied zwischen Finanzbuchhaltung (FI) und Controlling (CO). Sie spiegeln Aufwands- und Ertragskonten des FI im CO wider."
},
{
    schwierigkeit: "mittel",
    question: "Für regelmäßig ausgeführte Buchungen kann welches Programm verwendet werden, um die notwendigen Belege zu erzeugen?",
    options: [
        "Dauerbuchungsprogramm",
        "Zahlprogramm",
        "Mahnprogramm",
        "Kassenbuch"
    ],
    correct: [0],
    explanation: "Das Dauerbuchungsprogramm wird verwendet, um wiederkehrende Buchungen mit festen Beträgen (z.B. Miete) automatisch zu generieren."
},
{
    schwierigkeit: "mittel",
    question: "Was wird durch die Parameter für das Zahlprogramm genau definiert?",
    options: [
        "Nur Buchungskreise",
        "Nur Lieferanten und Belege",
        "Buchungskreise, Kreditoren und Belege"
    ],
    correct: [2],
    explanation: "Die Parameter des Zahlprogramms legen fest, welche offenen Posten welcher Kreditoren in welchen Buchungskreisen für die Zahlung berücksichtigt werden sollen."
},
{
    schwierigkeit: "mittel",
    question: "Wenn die Erstellung des Zahlungsvorschlags abgeschlossen ist, können keine Änderungen an den Zahlungsvorschlägen von SAP S/4HANA vorgenommen werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Der Zahlungsvorschlag ist eine bearbeitbare Liste. Man kann Posten sperren, entsperren oder Bankdetails ändern, bevor der endgültige Zahlungslauf gestartet wird."
},
{
    schwierigkeit: "schwer",
    question: "Aus welchen drei Teilen besteht ein Geschäftspartnerstammsatz, der als Kreditor (FI) und Lieferant (MM) verwendet wird?",
    options: [
        "Allgemeine Daten",
        "Daten zum Buchungskreis",
        "Daten zur Einkaufsorganisation",
        "Daten zum Werk",
        "Daten zum Vertriebsbereich"
    ],
    correct: [0, 1, 2],
    explanation: "Ein vollständiger Lieferant besteht aus allgemeinen Daten (mandantenweit), Buchungskreisdaten (für FI) und Einkaufsorganisationsdaten (für MM)."
},
{
    schwierigkeit: "mittel",
    question: "Welche beiden wichtigen Organisationselemente gehören zur Materialwirtschaft?",
    options: [
        "Werk",
        "Einkaufsorganisation",
        "Buchungskreis",
        "Verkaufsorganisation"
    ],
    correct: [0, 1],
    explanation: "Das Werk ist für die Bestandsführung und Produktionsplanung zuständig, während die Einkaufsorganisation für die Beschaffung von Materialien und Dienstleistungen verantwortlich ist."
},
{
    schwierigkeit: "mittel",
    question: "Beim Anlegen einer Bestellung wird gleichzeitig ein Finanzbuchhaltungsbeleg generiert. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Die Bestellung ist eine reine MM-Transaktion und löst keine Buchung in der Finanzbuchhaltung aus. Erst der Wareneingang oder der Rechnungseingang erzeugt einen FI-Beleg."
},
{
    schwierigkeit: "mittel",
    question: "In SAP S/4HANA können Korrekturen in Sonderperioden (z.B. Periode 13-16) für Jahresabschlusskorrekturen gebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Sonderperioden werden für Abschlussbuchungen verwendet, um diese von den regulären Buchungen der normalen Perioden (1-12) zu trennen."
},
{
    schwierigkeit: "schwer",
    question: "Wenn sich der Umrechnungskurs seit der Buchung einer Kreditorenrechnung zu Ihren Gunsten geändert hat, werden die folgenden Soll- und Habentransaktionen vom Programm zur Fremdwährungsbewertung erstellt:",
    options: [
        "Soll: Bilanzkorrekturkonto; Haben: Ertrag aus Fremdwährungsbewertung",
        "Soll: Ertrag aus Fremdwährungsbewertung; Haben: Bilanzkorrekturkonto",
        "Soll: Kreditorenkonto; Haben: Aufwand aus Fremdwährungsbewertung",
        "Soll: Bankkonto; Haben: Bilanzkorrekturkonto"
    ],
    correct: [0],
    explanation: "Ein Kursgewinn bei Verbindlichkeiten wird als Ertrag gebucht. Die Gegenbuchung erfolgt auf ein Bilanzkorrekturkonto, um die GuV nicht zu verfälschen, da es sich um eine reine Bewertung handelt."
},
{
    schwierigkeit: "schwer",
    question: "Das Programm zur Umgliederung von Verbindlichkeiten kann für drei Zwecke eingesetzt werden. Welche?",
    options: [
        "Umgliederung von Verbindlichkeiten gemäß ihren Restlaufzeiten",
        "Umgliederung von debitorischen Kreditoren",
        "Umgliederung von Kreditoren, deren Abstimmkonto sich geändert hat",
        "Umgliederung von Anlagegütern in das Umlaufvermögen",
        "Umgliederung von Fremdwährungen in Hauswährung"
    ],
    correct: [0, 1, 2],
    explanation: "Das Programm dient der korrekten bilanziellen Ausweisung von Verbindlichkeiten, z.B. nach Fristigkeit (kurz-, mittel-, langfristig) oder bei geänderten Abstimmkonten."
},
{
    schwierigkeit: "mittel",
    question: "Der Bereich für die allgemeinen Daten des Geschäftspartnerstammsatzes muss für jeden Buchungskreis, der Geschäfte mit diesem Debitor tätigt, separat angelegt werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Die allgemeinen Daten (z.B. Name, Adresse) sind mandantenweit gültig und werden nur einmal angelegt. Lediglich die buchungskreisspezifischen Daten werden pro Buchungskreis ergänzt."
},
{
    schwierigkeit: "mittel",
    question: "Wodurch wird die Buchung für einen Debitor mit dem Hauptbuch verknüpft?",
    options: [
        "Abstimmkonto",
        "Belegart",
        "Buchungsschlüssel",
        "Kontengruppe"
    ],
    correct: [0],
    explanation: "Das im Debitorenstammsatz hinterlegte Abstimmkonto sorgt dafür, dass alle Forderungen gegen diesen Debitor auf dem entsprechenden Sammelkonto im Hauptbuch mitgebucht werden."
},
{
    schwierigkeit: "schwer",
    question: "Wenn eine Teilzahlung für einen Zahlungseingang mit der Methode \"Teilzahlung\" verarbeitet wird, wird die Rechnung beglichen und ein neuer offener Posten in Höhe der Zahlungsdifferenz angelegt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Falsch. Bei einer Teilzahlung bleibt die ursprüngliche Rechnung als offener Posten mit dem Restbetrag bestehen. Die Methode, bei der die Rechnung ausgeglichen und ein neuer Restposten erzeugt wird, heißt 'Restpostenbildung'."
},
{
    schwierigkeit: "mittel",
    question: "Verschiedene Ausgangsrechnungen, die nicht zu einem Kundenauftrag gehören, können nur über herkömmliche SAP-GUI-Transaktionen in der Komponente für die Debitorenbuchhaltung erfasst werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Auch für solche reinen FI-Rechnungen stehen moderne Fiori-Apps zur Verfügung (z.B. 'Ausgangsrechnungen anlegen')."
},
{
    schwierigkeit: "mittel",
    question: "Wie kann eingesehen werden, ob ein Debitor gemahnt wurde? Wählen Sie die richtige Antwort.",
    options: [
        "Sie sehen im Korrespondenzbereich des Debitorenstammsatzes nach.",
        "Sie prüfen die Einzelpostendetails im Debitorenkonto.",
        "Sowohl A als auch B.",
        "Keine der genannten Möglichkeiten."
    ],
    correct: [2],
    explanation: "Das Datum der letzten Mahnung und die Mahnstufe werden sowohl im Stammsatz des Debitors (Korrespondenz-Tab) als auch in den Details des gemahnten offenen Postens gespeichert."
},
{
    schwierigkeit: "mittel",
    question: "Mit der transaktionalen App \"Klärungsfälle bearbeiten\" können Sie Folgendes tun: (Mehrere Antworten möglich)",
    options: [
        "Klärungsfälle anhand verschiedener Kriterien suchen und filtern.",
        "Die Details eines Klärungsfalls anzeigen, wie z.B. Textnotizen und verknüpfte Rechnungen.",
        "Klärungsfallattribute bearbeiten, wie z.B. den Bearbeiter.",
        "Textnotizen zu einem Klärungsfall hinzufügen.",
        "Dateianhänge zu einem Klärungsfall hinzufügen."
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: "Die App 'Klärungsfälle bearbeiten' ist ein zentrales Werkzeug im Dispute Management und bietet umfassende Funktionen zur Verwaltung von Zahlungsdifferenzen."
},
{
    schwierigkeit: "mittel",
    question: "Wie lauten die drei Elemente, die zusammen einen Vertriebsbereich ergeben?",
    options: [
        "Verkaufsorganisation",
        "Vertriebsweg",
        "Sparte",
        "Werk",
        "Buchungskreis"
    ],
    correct: [0, 1, 2],
    explanation: "Ein Vertriebsbereich ist die eindeutige Kombination aus Verkaufsorganisation, Vertriebsweg und Sparte und steuert, unter welchen Bedingungen verkauft werden darf."
},
{
    schwierigkeit: "mittel",
    question: "Wenn eine Lieferung angelegt wird, werden automatisch Buchhaltungsvorgänge generiert. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Das Anlegen der Lieferung löst noch keine Buchung aus. Erst der Warenausgang zur Lieferung führt zu einer Buchung (Kosten des Umsatzes an Bestand)."
},
{
    schwierigkeit: "mittel",
    question: "Wenn die Faktura in der Kundenauftragsbearbeitung angelegt wird, wird automatisch ein Buchhaltungsbeleg generiert, der das Konto des Kunden belastet und den Erlös bucht. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Das Sichern der Faktura erzeugt automatisch einen Buchhaltungsbeleg, der die Forderung an den Debitor und die Umsatzerlöse bucht."
},
{
    schwierigkeit: "schwer",
    question: "Welcher Schlüssel muss in den Stammsatz eines Debitors eingetragen werden, damit dieser Debitor in das Bewertungsprogramm für überfällige Forderungen einbezogen werden kann?",
    options: [
        "Wertberichtigungsschlüssel",
        "Mahnschlüssel",
        "Zahlungsbedingungsschlüssel",
        "Feldstatusgruppe"
    ],
    correct: [0],
    explanation: "Der Wertberichtigungsschlüssel steuert, wie das Programm zur Einzelwertberichtigung überfällige Forderungen bewertet und welche Konten bebucht werden."
},
{
    schwierigkeit: "schwer",
    question: "Das Wertberichtigungsprogramm führt eine Buchung durch, die zu Beginn des nächsten Monats storniert wird. Welche Konten werden mit der Buchung be- und entlastet?",
    options: [
        "Soll: Einzelwertberichtigung; Haben: Wertberichtigung Forderungen",
        "Soll: Wertberichtigung Forderungen; Haben: Einzelwertberichtigung",
        "Soll: Debitorenkonto; Haben: Abstimmkonto",
        "Soll: Bankkonto; Haben: Wertberichtigung Forderungen"
    ],
    correct: [0],
    explanation: "Die Buchung lautet Aufwandskonto (Einzelwertberichtigung) an Bilanzkorrekturkonto. Die Buchung wird am ersten Tag der Folgeperiode storniert, da es sich nur um eine periodische Bewertung handelt."
},
{
    schwierigkeit: "mittel",
    question: "Wie wird beim Anlegen eines Anlagenstammsatzes die Anlagennummer zugeordnet?",
    options: [
        "Die Anlagennummer wird über die Anlagenklasse zugeordnet.",
        "Die Anlagennummer wird manuell vergeben.",
        "Die Anlagennummer wird über den Buchungskreis zugeordnet.",
        "Die Anlagennummer wird über das Sachkonto abgeleitet."
    ],
    correct: [0],
    explanation: "Die Anlagenklasse steuert den Nummernkreis, aus dem die Anlagennummer vergeben wird, sowie die Standardwerte für die Stammdatenpflege."
},
{
    schwierigkeit: "schwer",
    question: "Wozu dient der Kontenfindungsschlüssel für die Anlage?",
    options: [
        "Er verbindet die Anlage mit dem Sachkonto (Abstimmkonto).",
        "Er berechnet die monatliche Abschreibung.",
        "Er definiert die voraussichtliche Nutzungsdauer.",
        "Er verknüpft die Anlage zwingend mit einer Kostenstelle."
    ],
    correct: [0],
    explanation: "Der in der Anlagenklasse hinterlegte Kontenfindungsschlüssel bestimmt, auf welche Sachkonten der Finanzbuchhaltung bei Anlagenbewegungen (Zugang, Abgang, Abschreibung) gebucht wird."
},
{
    schwierigkeit: "leicht",
    question: "Jede Anlage gehört einem Buchungskreis an. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Die Zuordnung zu einem Buchungskreis ist für jede Anlage obligatorisch, da die Werte der Anlage in der Bilanz dieses Buchungskreises geführt werden."
},
{
    schwierigkeit: "mittel",
    question: "Eine Bewegungsart gibt an, an welcher Stelle im Anlagengitter die Buchung aufgeführt wird. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Die Anlagenbewegungsart klassifiziert die Geschäftsvorfälle (z.B. Zugang, Abgang, Umbuchung) und steuert deren Darstellung im Anlagengitter."
},
{
    schwierigkeit: "mittel",
    question: "Welche Methoden stehen für das Buchen von Zugängen in der Anlagenbuchhaltung zur Verfügung? (Mehrere Antworten möglich)",
    options: [
        "Ein Anlagenzugang aus einem Kauf gegen Kreditor.",
        "Ein Anlagenkauf mit automatischer Gegenbuchung.",
        "Abrechnung ausschließlich über das Kassenbuch.",
        "Automatische Buchung bei der Warenausgabe im Vertrieb."
    ],
    correct: [0, 1],
    explanation: "Ein Anlagenzugang kann entweder integriert im Einkaufsprozess (mit Kreditor) oder als reine FI-Buchung (mit Gegenbuchung auf ein Verrechnungskonto) erfolgen."
},
{
    schwierigkeit: "mittel",
    question: "Wozu dient der Asset Explorer?",
    options: [
        "Er bietet eine Übersicht über die Aktivitäten für eine Anlage nach Bewertungsbereich und Geschäftsjahr (Planwerte, gebuchte Bewegungen, Abschreibungen etc.).",
        "Er dient ausschließlich zur Anlage und Löschung neuer Buchungskreise in der Anlagenbuchhaltung.",
        "Er ist ein Tool zur Verwaltung von Mitarbeiterzugriffen auf Anlagegüter.",
        "Er berechnet automatisch den Verkaufspreis einer Anlage für den externen Markt."
    ],
    correct: [0],
    explanation: "Der Asset Explorer (Transaktion AW01N) ist das zentrale Reporting- und Analysewerkzeug für einzelne Anlagen und zeigt alle Werte und Bewegungen transparent an."
},
{
    schwierigkeit: "mittel",
    question: "Welche Art von Informationen liefert das Anlagengitter?",
    options: [
        "Ausschließlich geplante Wartungsintervalle von Maschinen.",
        "Eine umfassende Übersicht für den Abschluss (Buchwerte zu Beginn/Ende des Jahres, Zugänge, Abgänge, Abschreibungen).",
        "Eine Liste aller Debitoren und deren offener Posten.",
        "Echtzeitdaten zu Mitarbeiterstunden, die an Maschinen gearbeitet wurden."
    ],
    correct: [1],
    explanation: "Das Anlagengitter ist ein gesetzlich vorgeschriebener Bericht, der die Entwicklung des Anlagevermögens über ein Geschäftsjahr detailliert nachweist."
},
{
    schwierigkeit: "leicht",
    question: "Alle Hausbankkonten werden in SAP durch Sachkonten dargestellt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Jedes Bankkonto, das für Zahlungen genutzt wird, wird im Hauptbuch als eigenes Sachkonto geführt, um den Kontostand in der Buchhaltung abzubilden."
},
{
    schwierigkeit: "mittel",
    question: "Bevor die Details einer Bank in einem Geschäftspartner-Stammsatz erfasst werden können, muss diese Bank in das Bankenverzeichnis aufgenommen werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Die Bank kann auch direkt bei der Pflege der Geschäftspartner-Bankverbindung angelegt werden. Es ist nicht zwingend erforderlich, sie vorher separat im Bankenverzeichnis zu erfassen."
},
{
    schwierigkeit: "mittel",
    question: "Wenn Sie einen Geschäftsvorfall auf der Registerkarte \"Ausgaben bar\" des Kassenbuchs erfassen, wird das Handkassenkonto automatisch im Soll bebucht. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [1],
    explanation: "Eine Ausgabe verringert den Kassenbestand. Daher wird das Handkassenkonto (ein Bilanzkonto) im Haben bebucht. Die Gegenbuchung erfolgt im Soll auf ein Aufwandskonto."
},
{
    schwierigkeit: "mittel",
    question: "Mit dem Financial Closing Cockpit können Sie Ihre Abschlussarbeiten auf verschiedenen Organisationsebenen organisieren. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
    options: [
        "Richtig",
        "Falsch"
    ],
    correct: [0],
    explanation: "Das Closing Cockpit ermöglicht die Strukturierung von Abschlussprozessen für verschiedene Einheiten wie Buchungskreise oder Kostenrechnungskreise."
},
{
    schwierigkeit: "schwer",
    question: "Erlöse und Kosten, die in einer bestimmten Buchungsperiode gebucht wurden, stammen oft aus einer anderen Periode und müssen abgegrenzt werden. Was bedeutet das?",
    options: [
        "Sie müssen sofort in voller Höhe storniert werden.",
        "Sie dürfen erst im Folgejahr gebucht werden.",
        "Sie müssen über die Perioden verteilt werden, in denen sie entstehen.",
        "Sie werden auf ein Sperrkonto überwiesen, bis das Geschäftsjahr endet."
    ],
    correct: [2],
    explanation: "Die periodengerechte Abgrenzung stellt sicher, dass Aufwendungen und Erträge der Periode zugeordnet werden, in der sie wirtschaftlich verursacht wurden, unabhängig vom Zahlungszeitpunkt."
},
{
    schwierigkeit: "schwer",
    question: "Auf welches Konto überträgt das Programm zur WE/RE-Umgliederung den Saldo, wenn es im WE/RE-Konto beim Abschluss der Bücher einen Habensaldo für eine Einkaufstransaktion gibt?",
    options: [
        "Gelieferte, aber nicht berechnete Waren",
        "Berechnete, aber nicht gelieferte Waren",
        "Skontoerträge",
        "Rückstellungen für drohende Verluste"
    ],
    correct: [0],
    explanation: "Ein Habensaldo auf dem WE/RE-Verrechnungskonto bedeutet, dass mehr Waren geliefert (WE gebucht) als berechnet (RE gebucht) wurden. Für die Bilanz wird dieser Saldo auf das Konto 'Gelieferte, aber nicht berechnete Waren' umgegliedert."
}
];