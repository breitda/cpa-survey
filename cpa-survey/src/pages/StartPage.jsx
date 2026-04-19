import React from "react";

/**
 * Startseite der Befragung
 */
export default function StartPage({ onNext }) {
  return (
    <div className="page-start">
      <div className="start-content">
        <div className="start-badge">Masterarbeit · Experten:innenbefragung</div>
        <h1 className="start-title">
          Gewichtung von CPA-Bewertungskriterien
        </h1>
        <p className="start-subtitle">
          Experten:innenbefragung mittels binärer Paarvergleiche
        </p>
        <div className="start-card">
          <p className="start-text">
            Vielen Dank für Ihre Teilnahme.
          </p>
          <p className="start-text">
            Diese Befragung ist Teil einer Masterarbeit und dient der Gewichtung
            von Bewertungskriterien zur Einschätzung der Prozesseignung für
            Cognitive Process Automation.
          </p>
          <p className="start-text">
            Ihre Angaben werden vertraulich behandelt und ausschließlich im
            Rahmen dieser Masterarbeit zu wissenschaftlichen Zwecken verwendet.
            Die Teilnahme erfolgt anonym.
          </p>
        </div>
        <button className="btn btn-primary btn-large" onClick={onNext}>
          Umfrage starten
        </button>
      </div>
    </div>
  );
}
