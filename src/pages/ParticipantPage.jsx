import React, { useState } from "react";
import NavButtons from "../components/NavButtons";

/**
 * Seite zur Erfassung der Teilnehmer:innenangaben
 */
export default function ParticipantPage({ onNext, onBack, participant, setParticipant }) {
  const [touched, setTouched] = useState(false);

  const handleChange = (field, value) => {
    setParticipant((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setTouched(true);
    onNext();
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">Angaben zur Person</h2>
        <p className="page-subtitle">
          Die folgenden Angaben dienen ausschließlich der Einordnung der Stichprobe.
        </p>
      </div>

      <div className="form-card">
        <div className="form-group">
          <label className="form-label" htmlFor="experience">
            Berufserfahrung im CPA-/Automatisierungskontext
          </label>
          <textarea
            id="experience"
            className="form-textarea"
            value={participant.experience}
            onChange={(e) => handleChange("experience", e.target.value)}
            placeholder="z. B. 5 Jahre Erfahrung als Prozessautomatisierungsberater:in, Projektleiter:in RPA-Implementierungen …"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="role">
            Rolle / Funktion im Unternehmen
          </label>
          <textarea
            id="role"
            className="form-textarea"
            value={participant.role}
            onChange={(e) => handleChange("role", e.target.value)}
            placeholder="z. B. Senior Consultant, Head of Automation, Data Scientist …"
            rows={2}
          />
        </div>

        <p className="form-hint">
          ⓘ Diese Angaben dienen ausschließlich der Einordnung der Stichprobe.
        </p>
      </div>

      <NavButtons onBack={onBack} onNext={handleNext} />
    </div>
  );
}
