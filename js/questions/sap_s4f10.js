export const questions = [
    {
        // === WOCHE 5: S4F10 - KAPITEL 1 ===
        schwierigkeit: "mittel",
        question: "Wie können Sie SAP S/4HANA so einrichten, dass Sie alle Softwareaktualisierungen automatisch erhalten?",
        options: ["On-Premise", "Cloud", "Central Finance", "Virtuell"],
        correct: [1],
        explanation: "In der SAP S/4HANA Cloud Edition werden Softwareaktualisierungen automatisch von SAP bereitgestellt, um sicherzustellen, dass das System immer auf dem neuesten Stand ist. Dies ist ein wesentliches Merkmal des Cloud-Modells."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche Faktoren sollten Sie bei der Entscheidung, welche SAP-S/4HANA-Implementierungsoption für Ihr Unternehmen am besten geeignet ist, berücksichtigen? (Mehrfachauswahl)",
        options: ["Geschäftsfunktionen, gesetzliche und regionale Anforderungen", "Ausschließlich die Vorlieben der IT-Abteilung", "IT-Strategie und Innovationszyklen", "Implementierungszeiten", "Anzahl der verwendeten SAP-GUI-Themes"],
        correct: [0, 2, 3],
        explanation: "Die Wahl der Implementierungsoption hängt von Geschäfts- und IT-Anforderungen, der Strategie, Innovationszyklen und der geplanten Dauer ab."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche verschiedenen Typen von SAP-Fiori-Apps können verwendet werden? (Mehrfachauswahl)",
        options: ["Transaktionale Apps", "Analytische Apps", "Administrative Background-Apps", "Infoblätter (Factsheets)"],
        correct: [0, 1, 3],
        explanation: "SAP Fiori bietet drei Haupttypen von Apps: Transaktionale Apps für Aufgaben, Analytische Apps für Einblicke und Infoblätter (Factsheets) zur Anzeige von Stammdaten."
    },
    {
        schwierigkeit: "leicht",
        question: "Auf dem SAP Fiori Launchpad können Benutzer Personalisierungsoptionen auswählen. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Das SAP Fiori Launchpad ist stark personalisierbar, um die Benutzererfahrung zu verbessern."
    },
    {
        // === WOCHE 5: S4F10 - KAPITEL 2 ===
        schwierigkeit: "mittel",
        question: "Nennen Sie mindestens drei Komponenten der Finanzbuchhaltung in SAP S/4HANA. (Mehrere Antworten möglich)",
        options: ["FI-GL (Hauptbuchhaltung)", "FI-AP (Kreditorenbuchhaltung)", "FI-AR (Debitorenbuchhaltung)", "FI-AA (Anlagenbuchhaltung)", "FI-BL (Bankbuchhaltung)", "CO-OM (Gemeinkostencontrolling)", "MM-PUR (Einkauf)"],
        correct: [0, 1, 2, 3, 4],
        explanation: "Die Kernkomponenten des FI-Moduls umfassen Hauptbuchhaltung (GL), Kreditoren- (AP), Debitoren- (AR), Anlagen- (AA) und Bankbuchhaltung (BL)."
    },
    {
        schwierigkeit: "leicht",
        question: "In Nebenbüchern wie Kreditorenbuchhaltung und Debitorenbuchhaltung vorgenommene Buchungen werden gleichzeitig im Hauptbuch aufgezeichnet. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Durch die Nutzung von Abstimmkonten werden Buchungen in Nebenbüchern automatisch und in Echtzeit im Hauptbuch (FI-GL) mitgebucht."
    },
    {
        // === WOCHE 5: S4F10 - KAPITEL 3 ===
        schwierigkeit: "leicht",
        question: "Wie wird in SAP ein Unternehmen (selbständig bilanzierende Einheit) abgebildet?",
        options: ["Buchungskreis", "Kostenrechnungskreis", "Mandant", "Geschäftsbereich"],
        correct: [0],
        explanation: "Der Buchungskreis ist die zentrale Organisationseinheit im externen Rechnungswesen, die eine rechtlich selbstständige, bilanzierende Einheit darstellt."
    },
    {
        schwierigkeit: "mittel",
        question: "Einem Kostenrechnungskreis können mehrere Buchungskreise zugeordnet werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Dies ist ein typisches Szenario für ein konzernweites Controlling, bei dem mehrere rechtliche Einheiten (Buchungskreise) unter einem einheitlichen Controlling (Kostenrechnungskreis) geführt werden."
    },
    {
        schwierigkeit: "mittel",
        question: "Welcher Kontenplan muss einem Buchungskreis zugeordnet werden, damit Buchungen vorgenommen werden können?",
        options: ["Gruppe", "Land", "Operativ", "Keine der genannten Möglichkeiten", "Alle genannten Möglichkeiten"],
        correct: [2],
        explanation: "Der operative Kontenplan enthält die Sachkonten, die im täglichen Geschäftsbetrieb für Buchungen im Buchungskreis verwendet werden."
    },
    {
        schwierigkeit: "mittel",
        question: "Welches sind die zwei Bestandteile eines Sachkontos?",
        options: ["Kontenplansegment", "Buchungskreissegment", "Einkaufsorganisationssegment", "Vertriebsbereichssegment"],
        correct: [0, 1],
        explanation: "Ein Sachkonto besteht aus allgemeinen Daten auf Kontenplanebene und spezifischen Steuerungsdaten auf Buchungskreisebene."
    },
    {
        schwierigkeit: "schwer",
        question: "Was ist einem Nummernbereich zugeordnet und steuert, wie das Buchungskreissegment eines Sachkontos auf einem Bildschirmbild dargestellt wird?",
        options: ["Kontengruppe", "Feldstatusvariante", "Kontoart", "Belegart"],
        correct: [0],
        explanation: "Die Kontengruppe legt den Nummernkreis für das Sachkonto fest und steuert über den Feldstatus, welche Felder bei der Pflege des Buchungskreissegments Eingabefelder sind."
    },
    {
        schwierigkeit: "mittel",
        question: "Abstimmkonten können direkt bebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Abstimmkonten können nicht direkt bebucht werden. Sie werden automatisch über Buchungen auf die zugeordneten Nebenbücher (z.B. Debitoren, Kreditoren) aktualisiert."
    },
    {
        schwierigkeit: "mittel",
        question: "Was bestimmt den Aufbau einer Bilanz und einer Gewinn- und Verlustrechnung und gibt an, welche Konten welcher Position im Bericht entsprechen?",
        options: ["Bilanz/GuV-Struktur", "Kontenplan", "Kostenrechnungskreis", "Sachkontenstammsatz"],
        correct: [0],
        explanation: "Die Bilanz/GuV-Struktur ist ein hierarchischer Aufbau, der die Sachkonten den entsprechenden Posten in der Bilanz und der Gewinn- und Verlustrechnung zuordnet."
    },
    {
        schwierigkeit: "leicht",
        question: "Aus welchen zwei Bestandteilen setzt sich ein Beleg zusammen?",
        options: ["Belegkopf", "Belegpositionen", "Beleganhang", "Belegsaldo"],
        correct: [0, 1],
        explanation: "Jeder Buchungsbeleg in SAP besteht aus einem Belegkopf mit allgemeinen Daten (z.B. Belegdatum) und mindestens zwei Belegpositionen (Soll und Haben)."
    },
    {
        schwierigkeit: "mittel",
        question: "Für Buchungen auf Sachkonten stehen zwei Buchungsschlüssel zur Verfügung: einer für Sollbuchungen und einer für Habenbuchungen. Welche?",
        options: ["Soll: 40, Haben: 50", "Soll: 01, Haben: 15", "Soll: 21, Haben: 31", "Soll: 70, Haben: 75"],
        correct: [0],
        explanation: "Im Standard sind die Buchungsschlüssel 40 (Soll) und 50 (Haben) für Sachkontenbuchungen vorgesehen."
    },
    {
        schwierigkeit: "schwer",
        question: "Mit einem Buchungsschlüssel kann nur auf eine Kontoart gebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Der Buchungsschlüssel steuert unter anderem die Kontoart (Sachkonto, Debitor, Kreditor), die bebucht werden darf, und ob es sich um eine Soll- oder Habenbuchung handelt."
    },
    {
        schwierigkeit: "mittel",
        question: "Bei der Buchung eines Belegs wird diesem Beleg eine Nummer zugeordnet. Diese Nummer liegt innerhalb eines Nummernkreises. Welchem Bestandteil im Kopf des Belegs ist dieser zugeordnet?",
        options: ["Belegart", "Buchungsdatum", "Buchungskreis", "Währung"],
        correct: [0],
        explanation: "Die Belegart steuert, aus welchem Nummernkreis die Belegnummer vergeben wird. Dies dient der Organisation und Nachvollziehbarkeit von Geschäftsvorfällen."
    },
    {
        schwierigkeit: "schwer",
        question: "Welche Stammsatzeinstellungen müssen für ein Aufwandskonto, das im Rahmen einer FI-Transaktion bebucht wird, vorhanden sein, damit Informationen an das Modul Controlling übergeben werden können?",
        options: ["Sachkontoart = Primärkosten oder Erlöse und Einstellungen zum Kostenartentyp", "Sachkontoart = Bilanzkonto und Abstimmkonto-Kennzeichen", "Sachkontoart = Sekundärkosten und Kostenstellen-Zuordnung"],
        correct: [0],
        explanation: "Damit ein FI-Beleg auch eine CO-relevante Buchung auslöst, muss das bebuchte Sachkonto als primäre Kostenart oder Erlösart angelegt sein."
    },
    {
        schwierigkeit: "leicht",
        question: "Wenn eine Transaktion im FI gebucht wird, wird sie automatisch im Bereich AKTIVA/PASSIVA oder GEWINN & VERLUST in der Bilanz/GuV angezeigt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Dank der Echtzeit-Integration und der Bilanz/GuV-Struktur wird jede Buchung sofort in den entsprechenden Berichten korrekt ausgewiesen."
    },
    {
        // === WOCHE 5: S4F10 - KAPITEL 4 ===
        schwierigkeit: "leicht",
        question: "Jeder Geschäftspartner muss beim Anlegen einer Gruppierung zugeordnet werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Die Gruppierung ist ein Pflichtfeld und steuert unter anderem den Nummernkreis, aus dem die Geschäftspartnernummer vergeben wird."
    },
    {
        schwierigkeit: "mittel",
        question: "Kreditorenkonten bestehen aus zwei Segmenten. Welche?",
        options: ["Allgemeine Daten (Mandantenebene)", "Buchungskreisdaten", "Vertriebsbereichsdaten", "Werksdaten"],
        correct: [0, 1],
        explanation: "Ein reiner FI-Kreditor (ohne Einkaufsdaten) besteht aus den allgemeinen Daten (mandantenweit) und den Buchungskreisdaten (buchungskreisspezifisch)."
    },
    {
        schwierigkeit: "mittel",
        question: "In welchem Segment des Kreditorenstammsatzes befindet sich das Abstimmkonto?",
        options: ["Im Buchungskreissegment", "In den allgemeinen Daten", "Im Einkaufsorganisationssegment", "Im Zahlungssegment"],
        correct: [0],
        explanation: "Das Abstimmkonto ist spezifisch für einen Buchungskreis und wird daher im Buchungskreissegment des Kreditorenstammsatzes gepflegt."
    },
    {
        schwierigkeit: "mittel",
        question: "Wenn Sie in SAP S/4HANA Kreditorenbuchungen ausführen, wird ein Informationsbereich zum Kreditor angezeigt. Wozu können Sie diese Information verwenden? (Mehrere Antworten möglich)",
        options: ["Den Kreditorenstammsatz vor der Ausführung einer Buchung anzeigen und ändern", "Direkt die offenen Posten auf dem Kreditorenkonto aufrufen", "Materialstammdaten des Lieferanten anlegen", "Eine automatische Zahlung veranlassen"],
        correct: [0, 1],
        explanation: "Der Informationsbereich in Buchungstransaktionen bietet direkten Zugriff auf Stammdaten und offene Posten, um die Dateneingabe zu erleichtern und zu überprüfen."
    },
    {
        schwierigkeit: "schwer",
        question: "Welche Sachkontoart wird verwendet, um von FI auf Kostenobjekte im CO zu buchen?",
        options: ["Primärkosten oder Erlöse", "Bilanzkonten", "Sekundärkosten", "Nichtbetriebliche Aufwendungen/Erträge"],
        correct: [0],
        explanation: "Primärkostenarten sind das Bindeglied zwischen Finanzbuchhaltung (FI) und Controlling (CO). Sie spiegeln Aufwands- und Ertragskonten des FI im CO wider."
    },
    {
        schwierigkeit: "mittel",
        question: "Für regelmäßig ausgeführte Buchungen kann welches Programm verwendet werden, um die notwendigen Belege zu erzeugen?",
        options: ["Dauerbuchungsprogramm", "Zahlprogramm", "Mahnprogramm", "Kassenbuch"],
        correct: [0],
        explanation: "Das Dauerbuchungsprogramm wird verwendet, um wiederkehrende Buchungen mit festen Beträgen (z.B. Miete) automatisch zu generieren."
    },
    {
        schwierigkeit: "mittel",
        question: "Was wird durch die Parameter für das Zahlprogramm genau definiert?",
        options: ["Nur Buchungskreise", "Nur Lieferanten und Belege", "Buchungskreise, Kreditoren und Belege"],
        correct: [2],
        explanation: "Die Parameter des Zahlprogramms legen fest, welche offenen Posten welcher Kreditoren in welchen Buchungskreisen für die Zahlung berücksichtigt werden sollen."
    },
    {
        schwierigkeit: "mittel",
        question: "Wenn die Erstellung des Zahlungsvorschlags abgeschlossen ist, können keine Änderungen an den Zahlungsvorschlägen von SAP S/4HANA vorgenommen werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Der Zahlungsvorschlag ist eine bearbeitbare Liste. Man kann Posten sperren, entsperren oder Bankdetails ändern, bevor der endgültige Zahlungslauf gestartet wird."
    },
    {
        schwierigkeit: "schwer",
        question: "Aus welchen drei Teilen besteht ein Geschäftspartnerstammsatz, der als Kreditor (FI) und Lieferant (MM) verwendet wird?",
        options: ["Allgemeine Daten", "Daten zum Buchungskreis", "Daten zur Einkaufsorganisation", "Daten zum Werk", "Daten zum Vertriebsbereich"],
        correct: [0, 1, 2],
        explanation: "Ein vollständiger Lieferant besteht aus allgemeinen Daten (mandantenweit), Buchungskreisdaten (für FI) und Einkaufsorganisationsdaten (für MM)."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche beiden wichtigen Organisationselemente gehören zur Materialwirtschaft?",
        options: ["Werk", "Einkaufsorganisation", "Buchungskreis", "Verkaufsorganisation"],
        correct: [0, 1],
        explanation: "Das Werk ist für die Bestandsführung und Produktionsplanung zuständig, während die Einkaufsorganisation für die Beschaffung von Materialien und Dienstleistungen verantwortlich ist."
    },
    {
        schwierigkeit: "mittel",
        question: "Beim Anlegen einer Bestellung wird gleichzeitig ein Finanzbuchhaltungsbeleg generiert. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Die Bestellung ist eine reine MM-Transaktion und löst keine Buchung in der Finanzbuchhaltung aus. Erst der Wareneingang oder der Rechnungseingang erzeugt einen FI-Beleg."
    },
    {
        schwierigkeit: "mittel",
        question: "In SAP S/4HANA können Korrekturen in Sonderperioden (z.B. Periode 13-16) für Jahresabschlusskorrekturen gebucht werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Sonderperioden werden für Abschlussbuchungen verwendet, um diese von den regulären Buchungen der normalen Perioden (1-12) zu trennen."
    },
    {
        schwierigkeit: "schwer",
        question: "Wenn sich der Umrechnungskurs seit der Buchung einer Kreditorenrechnung zu Ihren Gunsten geändert hat, werden die folgenden Soll- und Habentransaktionen vom Programm zur Fremdwährungsbewertung erstellt:",
        options: ["Soll: Bilanzkorrekturkonto; Haben: Ertrag aus Fremdwährungsbewertung", "Soll: Ertrag aus Fremdwährungsbewertung; Haben: Bilanzkorrekturkonto", "Soll: Kreditorenkonto; Haben: Aufwand aus Fremdwährungsbewertung", "Soll: Bankkonto; Haben: Bilanzkorrekturkonto"],
        correct: [0],
        explanation: "Ein Kursgewinn bei Verbindlichkeiten wird als Ertrag gebucht. Die Gegenbuchung erfolgt auf ein Bilanzkorrekturkonto, um die GuV nicht zu verfälschen, da es sich um eine reine Bewertung handelt."
    },
    {
        schwierigkeit: "schwer",
        question: "Das Programm zur Umgliederung von Verbindlichkeiten kann für drei Zwecke eingesetzt werden. Welche?",
        options: ["Umgliederung von Verbindlichkeiten gemäß ihren Restlaufzeiten", "Umgliederung von debitorischen Kreditoren", "Umgliederung von Kreditoren, deren Abstimmkonto sich geändert hat", "Umgliederung von Anlagegütern in das Umlaufvermögen", "Umgliederung von Fremdwährungen in Hauswährung"],
        correct: [0, 1, 2],
        explanation: "Das Programm dient der korrekten bilanziellen Ausweisung von Verbindlichkeiten, z.B. nach Fristigkeit (kurz-, mittel-, langfristig) oder bei geänderten Abstimmkonten."
    },
    {
        // === WOCHE 5: S4F10 - KAPITEL 5 ===
        schwierigkeit: "mittel",
        question: "Der Bereich für die allgemeinen Daten des Geschäftspartnerstammsatzes muss für jeden Buchungskreis, der Geschäfte mit diesem Debitor tätigt, separat angelegt werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Die allgemeinen Daten (z.B. Name, Adresse) sind mandantenweit gültig und werden nur einmal angelegt. Lediglich die buchungskreisspezifischen Daten werden pro Buchungskreis ergänzt."
    },
    {
        schwierigkeit: "mittel",
        question: "Wodurch wird die Buchung für einen Debitor mit dem Hauptbuch verknüpft?",
        options: ["Abstimmkonto", "Belegart", "Buchungsschlüssel", "Kontengruppe"],
        correct: [0],
        explanation: "Das im Debitorenstammsatz hinterlegte Abstimmkonto sorgt dafür, dass alle Forderungen gegen diesen Debitor auf dem entsprechenden Sammelkonto im Hauptbuch mitgebucht werden."
    },
    {
        schwierigkeit: "schwer",
        question: "Wenn eine Teilzahlung für einen Zahlungseingang mit der Methode \"Teilzahlung\" verarbeitet wird, wird die Rechnung beglichen und ein neuer offener Posten in Höhe der Zahlungsdifferenz angelegt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Falsch. Bei einer Teilzahlung bleibt die ursprüngliche Rechnung als offener Posten mit dem Restbetrag bestehen. Die Methode, bei der die Rechnung ausgeglichen und ein neuer Restposten erzeugt wird, heißt 'Restpostenbildung'."
    },
    {
        schwierigkeit: "mittel",
        question: "Verschiedene Ausgangsrechnungen, die nicht zu einem Kundenauftrag gehören, können nur über herkömmliche SAP-GUI-Transaktionen in der Komponente für die Debitorenbuchhaltung erfasst werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Auch für solche reinen FI-Rechnungen stehen moderne Fiori-Apps zur Verfügung (z.B. 'Ausgangsrechnungen anlegen')."
    },
    {
        schwierigkeit: "mittel",
        question: "Wie kann eingesehen werden, ob ein Debitor gemahnt wurde? Wählen Sie die richtige Antwort.",
        options: ["Sie sehen im Korrespondenzbereich des Debitorenstammsatzes nach.", "Sie prüfen die Einzelpostendetails im Debitorenkonto.", "Sowohl A als auch B.", "Keine der genannten Möglichkeiten."],
        correct: [2],
        explanation: "Das Datum der letzten Mahnung und die Mahnstufe werden sowohl im Stammsatz des Debitors (Korrespondenz-Tab) als auch in den Details des gemahnten offenen Postens gespeichert."
    },
    {
        schwierigkeit: "mittel",
        question: "Mit der transaktionalen App \"Klärungsfälle bearbeiten\" können Sie Folgendes tun: (Mehrere Antworten möglich)",
        options: ["Klärungsfälle anhand verschiedener Kriterien suchen und filtern.", "Die Details eines Klärungsfalls anzeigen, wie z.B. Textnotizen und verknüpfte Rechnungen.", "Klärungsfallattribute bearbeiten, wie z.B. den Bearbeiter.", "Textnotizen zu einem Klärungsfall hinzufügen.", "Dateianhänge zu einem Klärungsfall hinzufügen."],
        correct: [0, 1, 2, 3, 4],
        explanation: "Die App 'Klärungsfälle bearbeiten' ist ein zentrales Werkzeug im Dispute Management und bietet umfassende Funktionen zur Verwaltung von Zahlungsdifferenzen."
    },
    {
        schwierigkeit: "mittel",
        question: "Wie lauten die drei Elemente, die zusammen einen Vertriebsbereich ergeben?",
        options: ["Verkaufsorganisation", "Vertriebsweg", "Sparte", "Werk", "Buchungskreis"],
        correct: [0, 1, 2],
        explanation: "Ein Vertriebsbereich ist die eindeutige Kombination aus Verkaufsorganisation, Vertriebsweg und Sparte und steuert, unter welchen Bedingungen verkauft werden darf."
    },
    {
        schwierigkeit: "mittel",
        question: "Wenn eine Lieferung angelegt wird, werden automatisch Buchhaltungsvorgänge generiert. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Das Anlegen der Lieferung löst noch keine Buchung aus. Erst der Warenausgang zur Lieferung führt zu einer Buchung (Kosten des Umsatzes an Bestand)."
    },
    {
        schwierigkeit: "mittel",
        question: "Wenn die Faktura in der Kundenauftragsbearbeitung angelegt wird, wird automatisch ein Buchhaltungsbeleg generiert, der das Konto des Kunden belastet und den Erlös bucht. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Das Sichern der Faktura erzeugt automatisch einen Buchhaltungsbeleg, der die Forderung an den Debitor und die Umsatzerlöse bucht."
    },
    {
        schwierigkeit: "schwer",
        question: "Welcher Schlüssel muss in den Stammsatz eines Debitors eingetragen werden, damit dieser Debitor in das Bewertungsprogramm für überfällige Forderungen einbezogen werden kann?",
        options: ["Wertberichtigungsschlüssel", "Mahnschlüssel", "Zahlungsbedingungsschlüssel", "Feldstatusgruppe"],
        correct: [0],
        explanation: "Der Wertberichtigungsschlüssel steuert, wie das Programm zur Einzelwertberichtigung überfällige Forderungen bewertet und welche Konten bebucht werden."
    },
    {
        schwierigkeit: "schwer",
        question: "Das Wertberichtigungsprogramm führt eine Buchung durch, die zu Beginn des nächsten Monats storniert wird. Welche Konten werden mit der Buchung be- und entlastet?",
        options: ["Soll: Einzelwertberichtigung; Haben: Wertberichtigung Forderungen", "Soll: Wertberichtigung Forderungen; Haben: Einzelwertberichtigung", "Soll: Debitorenkonto; Haben: Abstimmkonto", "Soll: Bankkonto; Haben: Wertberichtigung Forderungen"],
        correct: [0],
        explanation: "Die Buchung lautet Aufwandskonto (Einzelwertberichtigung) an Bilanzkorrekturkonto. Die Buchung wird am ersten Tag der Folgeperiode storniert, da es sich nur um eine periodische Bewertung handelt."
    },
    {
        // === WOCHE 5: S4F10 - KAPITEL 6 ===
        schwierigkeit: "mittel",
        question: "Wie wird beim Anlegen eines Anlagenstammsatzes die Anlagennummer zugeordnet?",
        options: ["Die Anlagennummer wird über die Anlagenklasse zugeordnet.", "Die Anlagennummer wird manuell vergeben.", "Die Anlagennummer wird über den Buchungskreis zugeordnet.", "Die Anlagennummer wird über das Sachkonto abgeleitet."],
        correct: [0],
        explanation: "Die Anlagenklasse steuert den Nummernkreis, aus dem die Anlagennummer vergeben wird, sowie die Standardwerte für die Stammdatenpflege."
    },
    {
        schwierigkeit: "schwer",
        question: "Wozu dient der Kontenfindungsschlüssel für die Anlage?",
        options: ["Er verbindet die Anlage mit dem Sachkonto (Abstimmkonto).", "Er berechnet die monatliche Abschreibung.", "Er definiert die voraussichtliche Nutzungsdauer.", "Er verknüpft die Anlage zwingend mit einer Kostenstelle."],
        correct: [0],
        explanation: "Der in der Anlagenklasse hinterlegte Kontenfindungsschlüssel bestimmt, auf welche Sachkonten der Finanzbuchhaltung bei Anlagenbewegungen (Zugang, Abgang, Abschreibung) gebucht wird."
    },
    {
        schwierigkeit: "leicht",
        question: "Jede Anlage gehört einem Buchungskreis an. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Die Zuordnung zu einem Buchungskreis ist für jede Anlage obligatorisch, da die Werte der Anlage in der Bilanz dieses Buchungskreises geführt werden."
    },
    {
        schwierigkeit: "mittel",
        question: "Eine Bewegungsart gibt an, an welcher Stelle im Anlagengitter die Buchung aufgeführt wird. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Die Anlagenbewegungsart klassifiziert die Geschäftsvorfälle (z.B. Zugang, Abgang, Umbuchung) und steuert deren Darstellung im Anlagengitter."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche Methoden stehen für das Buchen von Zugängen in der Anlagenbuchhaltung zur Verfügung? (Mehrere Antworten möglich)",
        options: ["Ein Anlagenzugang aus einem Kauf gegen Kreditor.", "Ein Anlagenkauf mit automatischer Gegenbuchung.", "Abrechnung ausschließlich über das Kassenbuch.", "Automatische Buchung bei der Warenausgabe im Vertrieb."],
        correct: [0, 1],
        explanation: "Ein Anlagenzugang kann entweder integriert im Einkaufsprozess (mit Kreditor) oder als reine FI-Buchung (mit Gegenbuchung auf ein Verrechnungskonto) erfolgen."
    },
    {
        schwierigkeit: "mittel",
        question: "Wozu dient der Asset Explorer?",
        options: ["Er bietet eine Übersicht über die Aktivitäten für eine Anlage nach Bewertungsbereich und Geschäftsjahr (Planwerte, gebuchte Bewegungen, Abschreibungen etc.).", "Er dient ausschließlich zur Anlage und Löschung neuer Buchungskreise in der Anlagenbuchhaltung.", "Er ist ein Tool zur Verwaltung von Mitarbeiterzugriffen auf Anlagegüter.", "Er berechnet automatisch den Verkaufspreis einer Anlage für den externen Markt."],
        correct: [0],
        explanation: "Der Asset Explorer (Transaktion AW01N) ist das zentrale Reporting- und Analysewerkzeug für einzelne Anlagen und zeigt alle Werte und Bewegungen transparent an."
    },
    {
        schwierigkeit: "mittel",
        question: "Welche Art von Informationen liefert das Anlagengitter?",
        options: ["Ausschließlich geplante Wartungsintervalle von Maschinen.", "Eine umfassende Übersicht für den Abschluss (Buchwerte zu Beginn/Ende des Jahres, Zugänge, Abgänge, Abschreibungen).", "Eine Liste aller Debitoren und deren offener Posten.", "Echtzeitdaten zu Mitarbeiterstunden, die an Maschinen gearbeitet wurden."],
        correct: [1],
        explanation: "Das Anlagengitter ist ein gesetzlich vorgeschriebener Bericht, der die Entwicklung des Anlagevermögens über ein Geschäftsjahr detailliert nachweist."
    },
    {
        // === WOCHE 5: S4F10 - KAPITEL 7 ===
        schwierigkeit: "leicht",
        question: "Alle Hausbankkonten werden in SAP durch Sachkonten dargestellt. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Jedes Bankkonto, das für Zahlungen genutzt wird, wird im Hauptbuch als eigenes Sachkonto geführt, um den Kontostand in der Buchhaltung abzubilden."
    },
    {
        schwierigkeit: "mittel",
        question: "Bevor die Details einer Bank in einem Geschäftspartner-Stammsatz erfasst werden können, muss diese Bank in das Bankenverzeichnis aufgenommen werden. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Die Bank kann auch direkt bei der Pflege der Geschäftspartner-Bankverbindung angelegt werden. Es ist nicht zwingend erforderlich, sie vorher separat im Bankenverzeichnis zu erfassen."
    },
    {
        schwierigkeit: "mittel",
        question: "Wenn Sie einen Geschäftsvorfall auf der Registerkarte \"Ausgaben bar\" des Kassenbuchs erfassen, wird das Handkassenkonto automatisch im Soll bebucht. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [1],
        explanation: "Eine Ausgabe verringert den Kassenbestand. Daher wird das Handkassenkonto (ein Bilanzkonto) im Haben bebucht. Die Gegenbuchung erfolgt im Soll auf ein Aufwandskonto."
    },
    {
        // === WOCHE 5: S4F10 - KAPITEL 8 ===
        schwierigkeit: "leicht",
        question: "Mit dem Financial Closing Cockpit können Sie Ihre Abschlussarbeiten auf verschiedenen Organisationsebenen organisieren. Entscheiden Sie, ob diese Aussage richtig oder falsch ist.",
        options: ["Richtig", "Falsch"],
        correct: [0],
        explanation: "Das Closing Cockpit ermöglicht die Strukturierung von Abschlussprozessen für verschiedene Einheiten wie Buchungskreise oder Kostenrechnungskreise."
    },
    {
        schwierigkeit: "schwer",
        question: "Erlöse und Kosten, die in einer bestimmten Buchungsperiode gebucht wurden, stammen oft aus einer anderen Periode und müssen abgegrenzt werden. Was bedeutet das?",
        options: ["Sie müssen sofort in voller Höhe storniert werden.", "Sie dürfen erst im Folgejahr gebucht werden.", "Sie müssen über die Perioden verteilt werden, in denen sie entstehen.", "Sie werden auf ein Sperrkonto überwiesen, bis das Geschäftsjahr endet."],
        correct: [2],
        explanation: "Die periodengerechte Abgrenzung stellt sicher, dass Aufwendungen und Erträge der Periode zugeordnet werden, in der sie wirtschaftlich verursacht wurden, unabhängig vom Zahlungszeitpunkt."
    },
    {
        schwierigkeit: "schwer",
        question: "Auf welches Konto überträgt das Programm zur WE/RE-Umgliederung den Saldo, wenn es im WE/RE-Konto beim Abschluss der Bücher einen Habensaldo für eine Einkaufstransaktion gibt?",
        options: ["Gelieferte, aber nicht berechnete Waren", "Berechnete, aber nicht gelieferte Waren", "Skontoerträge", "Rückstellungen für drohende Verluste"],
        correct: [0],
        explanation: "Ein Habensaldo auf dem WE/RE-Verrechnungskonto bedeutet, dass mehr Waren geliefert (WE gebucht) als berechnet (RE gebucht) wurden. Für die Bilanz wird dieser Saldo auf das Konto 'Gelieferte, aber nicht gelieferte Waren' umgegliedert."
    }
];