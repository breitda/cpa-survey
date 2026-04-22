import React from "react";
import NavButtons from "../components/NavButtons";
import { DIMENSIONS } from "../data/criteria";

const SECTION_NUMBERS = {
  dimensions: 1,
  DA: 2,
  KA: 3,
  BA: 4,
  TA: 5,
};

const SECTION_CONTENT = {
  dimensions: {
    label: "Übergeordnete Dimensionen",
    text: "Im nächsten Abschnitt vergleichen Sie die übergeordneten Dimensionen des Bewertungsmodells miteinander. Bitte wählen Sie jeweils die aus Ihrer Sicht wichtigere Dimension.",
    icon: "◈",
  },
  DA: {
    label: "Datenanforderungen",
    text: "Im nächsten Abschnitt vergleichen Sie die Kriterien innerhalb der Dimension Datenanforderungen.",
    icon: "◎",
  },
  KA: {
    label: "Kognitive Anforderungen",
    text: "Im nächsten Abschnitt vergleichen Sie die Kriterien innerhalb der Dimension Kognitive Anforderungen.",
    icon: "◐",
  },
  BA: {
    label: "Beziehungsanforderungen",
    text: "Im nächsten Abschnitt vergleichen Sie die Kriterien innerhalb der Dimension Beziehungsanforderungen.",
    icon: "◑",
  },
  TA: {
    label: "Transparenzanforderungen",
    text: "Im nächsten Abschnitt vergleichen Sie die Kriterien innerhalb der Dimension Transparenzanforderungen.",
    icon: "◒",
  },
};

/**
 * Zwischenseite zwischen Abschnitten
 * - Nummerierung der Abschnitte
 * - Für Dimensionen: Liste aller Dimensionen mit Kurzbeschreibung
 * - Für Kriterien: Definition der Dimension + Liste der Kriterien mit Kurzbeschreibung
 */
export default function TransitionPage({ step, onNext, onBack }) {
  const content = SECTION_CONTENT[step.sectionId];
  const sectionNumber = SECTION_NUMBERS[step.sectionId];
  const dimension = DIMENSIONS.find((d) => d.id === step.sectionId);
  const isDimensionsSection = step.sectionId === "dimensions";

  return (
    <div className="page page-transition">
      <div className="transition-content">
        <div className="transition-icon">{content?.icon}</div>
        <div className="transition-label">Abschnitt {sectionNumber}</div>
        <h2 className="transition-title">{content?.label}</h2>

        {/* Definition der Dimension (klein, unscheinbar) */}
        {dimension && (
          <p className="transition-dim-definition">{dimension.definition}</p>
        )}

        {/* Einleitungstext */}
        <p className="transition-text">{content?.text}</p>

        {/* Für Dimensionsabschnitt: alle Dimensionen auflisten */}
        {isDimensionsSection && (
          <div className="transition-list">
            {DIMENSIONS.map((dim) => (
              <div className="transition-list-item" key={dim.id}>
                <span className="transition-list-id">{dim.id}</span>
                <div className="transition-list-content">
                  <span className="transition-list-name">{dim.name}</span>
                  <span className="transition-list-desc">{dim.definition}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Für Kriterienabschnitt: Kriterien der Dimension auflisten */}
        {dimension && (
          <div className="transition-list">
            {dimension.criteria.map((crit) => (
              <div className="transition-list-item" key={crit.id}>
                <span className="transition-list-id">{crit.id}</span>
                <div className="transition-list-content">
                  <span className="transition-list-name">{crit.name}</span>
                  <span className="transition-list-desc">{crit.shortDescription}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Abschnitt beginnen" />
    </div>
  );
}
