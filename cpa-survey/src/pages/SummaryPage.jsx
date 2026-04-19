import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, formatSurveyDataForEmail } from "../utils/emailjs";

/**
 * Abschlussseite – zeigt Zusammenfassung und löst E-Mail-Versand aus
 */
export function SummaryPage({ onNext, onBack, getSurveyData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const surveyData = getSurveyData();
      const templateParams = formatSurveyDataForEmail(surveyData);

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      onNext();
    } catch (err) {
      console.error("EmailJS Fehler:", err);
      setError(
        "Beim Versand ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page page-summary">
      <div className="summary-content">
        <div className="summary-icon">◎</div>
        <h2 className="summary-title">Befragung abgeschlossen</h2>
        <p className="summary-text">
          Vielen Dank für Ihre Teilnahme.
        </p>
        <p className="summary-text">
          Sie haben alle Vergleiche abgeschlossen.
        </p>
        <p className="summary-text">
          Mit einem Klick auf <strong>„Antworten absenden"</strong> werden Ihre
          Angaben sicher übermittelt.
        </p>

        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="nav-buttons">
        <button className="btn btn-secondary" onClick={onBack} disabled={loading}>
          Zurück
        </button>
        <button
          className="btn btn-primary btn-large"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <span className="btn-loading">
              <span className="loading-dot" />
              <span className="loading-dot" />
              <span className="loading-dot" />
            </span>
          ) : (
            "Antworten absenden"
          )}
        </button>
      </div>
    </div>
  );
}

/**
 * Erfolgsseite nach dem Versand
 */
export function SuccessPage() {
  return (
    <div className="page page-success">
      <div className="success-content">
        <div className="success-checkmark">✓</div>
        <h2 className="success-title">Vielen Dank für Ihre Teilnahme.</h2>
        <p className="success-text">
          Ihre Antworten wurden erfolgreich übermittelt.
        </p>
        <p className="success-text muted">
          Sie können das Browserfenster nun schließen.
        </p>
      </div>
    </div>
  );
}
