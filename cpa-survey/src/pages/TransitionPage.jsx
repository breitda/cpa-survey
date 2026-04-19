import React from "react";
import NavButtons from "../components/NavButtons";
import { DIMENSIONS } from "../data/criteria";

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
 */
export default function TransitionPage({ step, onNext, onBack }) {
  const content = SECTION_CONTENT[step.sectionId];

  // Anzahl der Kriterien für Dimensionen ermitteln
  const dimension = DIMENSIONS.find((d) => d.id === step.sectionId);

  return (
    <div className="page page-transition">
      <div className="transition-content">
        <div className="transition-icon">{content?.icon}</div>
        <div className="transition-label">Abschnitt</div>
        <h2 className="transition-title">{content?.label}</h2>

        {dimension && (
          <div className="transition-meta">
            {dimension.criteria.length} Kriterien ·{" "}
            {(dimension.criteria.length * (dimension.criteria.length - 1)) / 2}{" "}
            Vergleiche
          </div>
        )}

        <p className="transition-text">{content?.text}</p>

        {dimension && (
          <div className="transition-definition">
            <strong>Definition:</strong> {dimension.definition}
          </div>
        )}
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Abschnitt beginnen" />
    </div>
  );
}
