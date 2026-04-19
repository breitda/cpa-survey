import React, { useState, useEffect } from "react";
import NavButtons from "../components/NavButtons";

/**
 * Vergleichsseite für einen einzelnen Paarvergleich
 * Zeigt zwei Karten an, von denen eine ausgewählt werden muss
 */
export default function ComparisonPage({
  step,
  currentAnswer,
  onAnswer,
  onNext,
  onBack,
}) {
  const [selected, setSelected] = useState(null);

  // Gespeicherte Antwort wiederherstellen
  useEffect(() => {
    setSelected(currentAnswer?.chosen || null);
  }, [step.id, currentAnswer]);

  const { pair } = step;
  const isDimension = step.type === "comparison_dimension";
  const question = isDimension
    ? "Welche Dimension ist wichtiger?"
    : "Welches Kriterium ist wichtiger?";
  const contextLabel = isDimension ? null : step.dimensionName;

  const handleSelect = (id) => {
    setSelected(id);
    const pairLabel = `${pair.a.name} vs. ${pair.b.name}`;
    onAnswer(id, pairLabel);
  };

  const handleNext = () => {
    if (selected) onNext();
  };

  return (
    <div className="page page-comparison">
      {contextLabel && (
        <div className="comparison-context">{contextLabel}</div>
      )}
      <h2 className="comparison-question">{question}</h2>

      <div className="comparison-cards">
        <ComparisonCard
          item={pair.a}
          isSelected={selected === pair.a.id}
          onSelect={() => handleSelect(pair.a.id)}
          isDimension={isDimension}
        />
        <div className="comparison-vs">vs.</div>
        <ComparisonCard
          item={pair.b}
          isSelected={selected === pair.b.id}
          onSelect={() => handleSelect(pair.b.id)}
          isDimension={isDimension}
        />
      </div>

      <NavButtons
        onBack={onBack}
        onNext={handleNext}
        canNext={!!selected}
      />
    </div>
  );
}

/**
 * Einzelne Auswahlkarte
 */
function ComparisonCard({ item, isSelected, onSelect, isDimension }) {
  return (
    <button
      className={`comparison-card ${isSelected ? "comparison-card--selected" : ""}`}
      onClick={onSelect}
      type="button"
      aria-pressed={isSelected}
    >
      <div className="comparison-card-inner">
        <div className="comparison-card-id">{item.id}</div>
        <div className="comparison-card-name">{item.name}</div>
        <div className="comparison-card-divider" />
        <div className="comparison-card-definition">{item.definition}</div>
        {isSelected && (
          <div className="comparison-card-check" aria-hidden="true">
            ✓
          </div>
        )}
      </div>
    </button>
  );
}
