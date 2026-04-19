import React from "react";

/**
 * Visueller Fortschrittsbalken ohne Zahlen oder Prozentangabe
 */
export default function ProgressBar({ progress, show = true }) {
  if (!show) return null;

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${Math.round(progress * 100)}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Fortschritt der Befragung"
      />
    </div>
  );
}
