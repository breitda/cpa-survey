/**
 * Kriterienkatalog für die CPA-Experten:innenbefragung
 * Basiert auf dem bereitgestellten Kriterienkatalog
 */

export const DIMENSIONS = [
  {
    id: "DA",
    name: "Datenanforderungen",
    shortName: "Datenanforderungen",
    definition:
      "Datenanforderungen umfassen die Erfordernisse eines Anwendungsfalls an die Erfassung, Speicherung und den Zugriff auf Daten hinsichtlich der Eingaben, Ausgaben sowie des Kontextes eines Prozesses oder einer Aufgabe.",
    criteria: [
      {
        id: "DA1",
        name: "Zugänglichkeit",
        definition:
          "Aufwand an Zeit und Kosten, um die für den Anwendungsfall benötigten Daten zu finden und darauf zugreifen zu können.",
      },
      {
        id: "DA2",
        name: "Genauigkeit",
        definition:
          "Korrektheit und Fehlerfreiheit der für den Anwendungsfall relevanten Daten.",
      },
      {
        id: "DA3",
        name: "Vollständigkeit",
        definition:
          "Vollständige Verfügbarkeit aller für den Anwendungsfall benötigten Eingabedaten in digitaler Form.",
      },
      {
        id: "DA4",
        name: "Konsistenz",
        definition:
          "Übereinstimmung gleicher Datenwerte über verschiedene Datensätze oder Systeme hinweg.",
      },
      {
        id: "DA5",
        name: "Aktualität",
        definition:
          "Erforderliche Aktualität der für den Anwendungsfall benötigten Daten.",
      },
      {
        id: "DA6",
        name: "Interpretierbarkeit",
        definition:
          "Verständliche und eindeutige Interpretierbarkeit der für den Anwendungsfall benötigten Daten in einem klar definierten Format.",
      },
    ],
  },
  {
    id: "KA",
    name: "Kognitive Anforderungen",
    shortName: "Kognitive Anforderungen",
    definition:
      "Kognitive Anforderungen beschreiben die Anforderungen, die ein Prozess oder eine Aufgabe an die Fähigkeiten eines CPA-Systems hinsichtlich Wahrnehmung, Lernen, Schlussfolgern und Interaktion stellt.",
    criteria: [
      {
        id: "KA1",
        name: "Umfang",
        definition:
          "Anzahl der Prozessbestandteile sowie Aufwand und Schwierigkeit der Bearbeitung im Prozess.",
      },
      {
        id: "KA2",
        name: "Vielfalt",
        definition:
          "Ausmaß standardisierter, stabiler und technisch integrierbarer Prozessabläufe mit geringer Variantenvielfalt.",
      },
      {
        id: "KA3",
        name: "Mehrdeutigkeit",
        definition:
          "Ausmaß unklarer, unvollständiger oder nicht eindeutig spezifizierter Informationen im Prozess.",
      },
      {
        id: "KA4",
        name: "Abhängigkeiten",
        definition:
          "Ausmaß der Abhängigkeiten und Wechselwirkungen zwischen Prozessbestandteilen sowie zu anderen Prozessen.",
      },
      {
        id: "KA5",
        name: "Stabilität",
        definition:
          "Ausmaß gleichbleibender Prozessmerkmale ohne häufige Veränderungen oder unregelmäßige Ereignisse.",
      },
      {
        id: "KA6",
        name: "Zeitbedingte Prozesskomplexität",
        definition:
          "Komplexität des Prozesses durch Zeitdruck und parallele Vorgänge.",
      },
      {
        id: "KA7",
        name: "Häufigkeit",
        definition: "Ausmaß der Wiederholungen des Anwendungsfalls.",
      },
    ],
  },
  {
    id: "BA",
    name: "Beziehungsanforderungen",
    shortName: "Beziehungsanforderungen",
    definition:
      "Beziehungsanforderungen beziehen sich auf das Ausmaß, in dem ein CPA-System während der Durchführung einer Aufgabe oder eines Prozesses soziale oder professionelle Beziehungen wahrnehmen oder aufbauen muss.",
    criteria: [
      {
        id: "BA1",
        name: "Personeller Interaktionsbedarf im Prozess",
        definition:
          "Ausmaß personeller Beteiligung und Zusammenarbeit mit internen oder externen Stakeholdern im Anwendungsfall.",
      },
      {
        id: "BA2",
        name: "Bearbeitungsdauer und Reaktionsgeschwindigkeit",
        definition:
          "Erforderliche Schnelligkeit von Reaktionen sowie zeitlicher Aufwand für die Bearbeitung des Anwendungsfalls.",
      },
      {
        id: "BA3",
        name: "Standardisierung der Kommunikation",
        definition:
          "Ausmaß organisatorischer Vorgaben, standardisierter Abläufe und klarer Strukturen für die Kommunikation und Zusammenarbeit im Anwendungsfall.",
      },
      {
        id: "BA4",
        name: "Umgang mit Störungen",
        definition:
          "Häufigkeit erforderlicher Reaktionen auf Fehler, Beschwerden oder Unregelmäßigkeiten im Anwendungsfall.",
      },
      {
        id: "BA5",
        name: "Bedarf an persönlicher Interaktion",
        definition:
          "Ausmaß personeller Beteiligung und Zusammenarbeit mit internen oder externen Stakeholdern im Anwendungsfall, die persönlich erfolgen müssen.",
      },
    ],
  },
  {
    id: "TA",
    name: "Transparenzanforderungen",
    shortName: "Transparenzanforderungen",
    definition:
      "Transparenzanforderungen beschreiben das Ausmaß, in dem ein CPA-System in der Lage sein muss zu verstehen und zu erklären, was zwischen den Eingaben und Ausgaben eines Prozesses oder einer Aufgabe geschieht.",
    criteria: [
      {
        id: "TA1",
        name: "Transparenz gegenüber Stakeholdern",
        definition:
          "Anzahl und Unterschiedlichkeit der Stakeholder, die im Rahmen der Umsetzung über den Anwendungsfall informiert werden müssen.",
      },
      {
        id: "TA2",
        name: "Nachvollziehbarkeit von Entscheidungen",
        definition:
          "Erforderliches Verständnis der beteiligten Personen von Informationen zu Datengrundlage, Prozesslogik und Entscheidungsregeln des Anwendungsfalls.",
      },
      {
        id: "TA3",
        name: "Entscheidungsunterstützung durch Transparenz",
        definition:
          "Unterstützung der Stakeholder durch bereitgestellte Informationen, damit Entscheidungen getroffen und Maßnahmen eingeleitet werden können.",
      },
      {
        id: "TA4",
        name: "Informationsqualität der Transparenz",
        definition:
          "Erforderliche Qualität der an interne oder externe Stakeholder kommunizierten Informationen über Ergebnisse, Funktionsweise oder Entscheidungen des Anwendungsfalls.",
      },
    ],
  },
];

/**
 * Generiert alle Paarvergleiche für eine Liste von Elementen
 * @param {Array} items - Liste der Elemente
 * @returns {Array} - Liste aller Paare [{a, b}]
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

/**
 * Berechnet die Gesamtanzahl der Schritte der Befragung
 */
export function getTotalSteps() {
  // Startseite, Einführung, Teilnehmer:innen = 3
  // Zwischenseite + Paare für Dimensionen
  // Zwischenseite + Paare für jede Dimension
  const dimPairs = generatePairs(DIMENSIONS).length;
  const critPairs = DIMENSIONS.reduce(
    (sum, d) => sum + generatePairs(d.criteria).length,
    0
  );
  // 3 feste + 1+dimPairs + 4*(1+critPairs_per_dim) + 1 (Abschluss)
  return 3 + 1 + dimPairs + DIMENSIONS.length + critPairs + 1;
}
