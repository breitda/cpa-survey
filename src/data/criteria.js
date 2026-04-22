/**
 * Kriterienkatalog für die CPA-Experten:innenbefragung
 * Basiert auf dem bereitgestellten Kriterienkatalog
 * Inkl. Kurzbeschreibungen für Paarvergleiche
 */

export const DIMENSIONS = [
  {
    id: "DA",
    number: 1,
    name: "Datenanforderungen",
    shortName: "Datenanforderungen",
    shortDescription: "Anforderungen an Verfügbarkeit, Qualität und Nutzbarkeit der benötigten Daten.",
    definition:
      "Datenanforderungen umfassen die Erfordernisse eines Anwendungsfalls an die Erfassung, Speicherung und den Zugriff auf Daten hinsichtlich der Eingaben, Ausgaben sowie des Kontextes eines Prozesses oder einer Aufgabe.",
    criteria: [
      {
        id: "DA1",
        name: "Zugänglichkeit",
        shortDescription: "Leichte und schnelle Verfügbarkeit der benötigten Daten.",
        definition: "Aufwand an Zeit und Kosten, um die für den Anwendungsfall benötigten Daten zu finden und darauf zugreifen zu können.",
      },
      {
        id: "DA2",
        name: "Genauigkeit",
        shortDescription: "Korrektheit und Fehlerfreiheit der relevanten Daten.",
        definition: "Korrektheit und Fehlerfreiheit der für den Anwendungsfall relevanten Daten.",
      },
      {
        id: "DA3",
        name: "Vollständigkeit",
        shortDescription: "Vollständiges Vorliegen aller benötigten Daten in digitaler Form.",
        definition: "Vollständige Verfügbarkeit aller für den Anwendungsfall benötigten Eingabedaten in digitaler Form.",
      },
      {
        id: "DA4",
        name: "Konsistenz",
        shortDescription: "Gleiche Daten über verschiedene Systeme oder Datensätze hinweg.",
        definition: "Übereinstimmung gleicher Datenwerte über verschiedene Datensätze oder Systeme hinweg.",
      },
      {
        id: "DA5",
        name: "Aktualität",
        shortDescription: "Ausreichende Aktualität der benötigten Daten.",
        definition: "Erforderliche Aktualität der für den Anwendungsfall benötigten Daten.",
      },
      {
        id: "DA6",
        name: "Interpretierbarkeit",
        shortDescription: "Verständliche und eindeutig nutzbare Daten in klarem Format.",
        definition: "Verständliche und eindeutige Interpretierbarkeit der für den Anwendungsfall benötigten Daten in einem klar definierten Format.",
      },
    ],
  },
  {
    id: "KA",
    number: 2,
    name: "Kognitive Anforderungen",
    shortName: "Kognitive Anforderungen",
    shortDescription: "Anforderungen an Wahrnehmung, Verarbeitung und Bewältigung von Komplexität im Prozess.",
    definition:
      "Kognitive Anforderungen beschreiben die Anforderungen, die ein Prozess oder eine Aufgabe an die Fähigkeiten eines CPA-Systems hinsichtlich Wahrnehmung, Lernen, Schlussfolgern und Interaktion stellt.",
    criteria: [
      {
        id: "KA1",
        name: "Umfang",
        shortDescription: "Anzahl der Prozessschritte sowie Aufwand und Schwierigkeit der Bearbeitung.",
        definition: "Anzahl der Prozessbestandteile sowie Aufwand und Schwierigkeit der Bearbeitung im Prozess.",
      },
      {
        id: "KA2",
        name: "Vielfalt",
        shortDescription: "Standardisierte und technisch gut integrierbare Abläufe sowie eine geringe Variantenvielfalt.",
        definition: "Ausmaß standardisierter, stabiler und technisch integrierbarer Prozessabläufe mit geringer Variantenvielfalt.",
      },
      {
        id: "KA3",
        name: "Mehrdeutigkeit",
        shortDescription: "Auftreten unklarer, unvollständiger oder mehrdeutiger Informationen im Prozess.",
        definition: "Ausmaß unklarer, unvollständiger oder nicht eindeutig spezifizierter Informationen im Prozess.",
      },
      {
        id: "KA4",
        name: "Abhängigkeiten",
        shortDescription: "Abhängigkeiten zwischen Prozessschritten sowie zu anderen Prozessen.",
        definition: "Ausmaß der Abhängigkeiten und Wechselwirkungen zwischen Prozessbestandteilen sowie zu anderen Prozessen.",
      },
      {
        id: "KA5",
        name: "Stabilität",
        shortDescription: "Gleichbleibende Abläufe ohne häufige Änderungen oder Ausnahmen.",
        definition: "Ausmaß gleichbleibender Prozessmerkmale ohne häufige Veränderungen oder unregelmäßige Ereignisse.",
      },
      {
        id: "KA6",
        name: "Zeitbedingte Prozesskomplexität",
        shortDescription: "Komplexität durch Zeitdruck und mehrere gleichzeitig laufende Vorgänge.",
        definition: "Komplexität des Prozesses durch Zeitdruck und parallele Vorgänge.",
      },
      {
        id: "KA7",
        name: "Häufigkeit",
        shortDescription: "Häufiges Auftreten bzw. Wiederholen des Prozesses.",
        definition: "Ausmaß der Wiederholungen des Anwendungsfalls.",
      },
    ],
  },
  {
    id: "BA",
    number: 3,
    name: "Beziehungsanforderungen",
    shortName: "Beziehungsanforderungen",
    shortDescription: "Anforderungen an Kommunikation, Zusammenarbeit und Interaktion mit beteiligten Personen.",
    definition:
      "Beziehungsanforderungen beziehen sich auf das Ausmaß, in dem ein CPA-System während der Durchführung einer Aufgabe oder eines Prozesses soziale oder professionelle Beziehungen wahrnehmen oder aufbauen muss.",
    criteria: [
      {
        id: "BA1",
        name: "Personeller Interaktionsbedarf im Prozess",
        shortDescription: "Bedarf an Abstimmung und Zusammenarbeit mit beteiligten Personen.",
        definition: "Ausmaß personeller Beteiligung und Zusammenarbeit mit internen oder externen Stakeholdern im Anwendungsfall.",
      },
      {
        id: "BA2",
        name: "Bearbeitungsdauer und Reaktionsgeschwindigkeit",
        shortDescription: "Erforderliche schnelle Bearbeitung und kurze Reaktionszeiten.",
        definition: "Erforderliche Schnelligkeit von Reaktionen sowie zeitlicher Aufwand für die Bearbeitung des Anwendungsfalls.",
      },
      {
        id: "BA3",
        name: "Standardisierung der Kommunikation",
        shortDescription: "Klare Regeln, Standards und feste Abläufe in der Kommunikation.",
        definition: "Ausmaß organisatorischer Vorgaben, standardisierter Abläufe und klarer Strukturen für die Kommunikation und Zusammenarbeit im Anwendungsfall.",
      },
      {
        id: "BA4",
        name: "Umgang mit Störungen",
        shortDescription: "Erforderliche Reaktionen auf Fehler, Beschwerden oder Unregelmäßigkeiten.",
        definition: "Häufigkeit erforderlicher Reaktionen auf Fehler, Beschwerden oder Unregelmäßigkeiten im Anwendungsfall.",
      },
      {
        id: "BA5",
        name: "Bedarf an persönlicher Interaktion",
        shortDescription: "Erforderlicher persönlicher Kontakt und direkte Kommunikation mit beteiligten Personen.",
        definition: "Erforderliches Ausmaß persönlicher Kommunikation und Interaktion mit beteiligten Personen im Anwendungsfall.",
      },
    ],
  },
  {
    id: "TA",
    number: 4,
    name: "Transparenzanforderungen",
    shortName: "Transparenzanforderungen",
    shortDescription: "Anforderungen an Nachvollziehbarkeit, Erklärbarkeit und Informationsbereitstellung im Prozess.",
    definition:
      "Transparenzanforderungen beschreiben das Ausmaß, in dem ein CPA-System in der Lage sein muss zu verstehen und zu erklären, was zwischen den Eingaben und Ausgaben eines Prozesses oder einer Aufgabe geschieht.",
    criteria: [
      {
        id: "TA1",
        name: "Transparenz gegenüber Stakeholdern",
        shortDescription: "Anzahl und Unterschiedlichkeit der Personen, die informiert werden müssen.",
        definition: "Anzahl und Unterschiedlichkeit der Stakeholder, die im Rahmen der Umsetzung über den Anwendungsfall informiert werden müssen.",
      },
      {
        id: "TA2",
        name: "Nachvollziehbarkeit von Entscheidungen",
        shortDescription: "Verständlichkeit von Datengrundlagen, Regeln und Entscheidungen.",
        definition: "Erforderliches Verständnis der beteiligten Personen von Informationen zu Datengrundlage, Prozesslogik und Entscheidungsregeln des Anwendungsfalls.",
      },
      {
        id: "TA3",
        name: "Entscheidungsunterstützung durch Transparenz",
        shortDescription: "Bereitgestellte Informationen helfen bei Entscheidungen und Maßnahmen.",
        definition: "Unterstützung der Stakeholder durch bereitgestellte Informationen, damit Entscheidungen getroffen und Maßnahmen eingeleitet werden können.",
      },
      {
        id: "TA4",
        name: "Informationsqualität der Transparenz",
        shortDescription: "Qualität, Verständlichkeit und Verlässlichkeit der kommunizierten Informationen.",
        definition: "Erforderliche Qualität der an interne oder externe Stakeholder kommunizierten Informationen über Ergebnisse, Funktionsweise oder Entscheidungen des Anwendungsfalls.",
      },
    ],
  },
];

/**
 * Generiert alle Paarvergleiche für eine Liste von Elementen
 */
export function generatePairs(items) {
  const pairs = [];
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      pairs.push({ a: items[i], b: items[j] });
    }
  }
  return pairs;
}

export function getTotalSteps() {
  const dimPairs = generatePairs(DIMENSIONS).length;
  const critPairs = DIMENSIONS.reduce(
    (sum, d) => sum + generatePairs(d.criteria).length,
    0
  );
  return 3 + 1 + dimPairs + DIMENSIONS.length + critPairs + 1;
}
