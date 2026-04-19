import React from "react";

/**
 * Navigationstasten für Zurück/Weiter
 */
export default function NavButtons({
  onBack,
  onNext,
  canNext = true,
  showBack = true,
  nextLabel = "Weiter",
  backLabel = "Zurück",
  loading = false,
}) {
  return (
    <div className="nav-buttons">
      {showBack && (
        <button className="btn btn-secondary" onClick={onBack} type="button">
          {backLabel}
        </button>
      )}
      <button
        className="btn btn-primary"
        onClick={onNext}
        disabled={!canNext || loading}
        type="button"
      >
        {loading ? (
          <span className="btn-loading">
            <span className="loading-dot" />
            <span className="loading-dot" />
            <span className="loading-dot" />
          </span>
        ) : (
          nextLabel
        )}
      </button>
    </div>
  );
}
