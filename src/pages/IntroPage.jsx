import React from "react";
import NavButtons from "../components/NavButtons";
import { DIMENSIONS } from "../data/criteria";

/**
 * Einführungsseite mit Erklärung zu CPA, Paarvergleich und Ablauf der Befragung
 */
export default function IntroPage({ onNext, onBack }) {
  const blocks = [
    {
      icon: "◈",
      title: "Was ist CPA?",
      text: "Cognitive Process Automation beschreibt die Automatisierung von Prozessen durch die Kombination klassischer Prozessautomatisierung mit KI-basierten Fähigkeiten. Dadurch können auch komplexere oder weniger strukturierte Aufgaben unterstützt werden.",
    },
    {
      icon: "◎",
      title: "Ziel der Befragung",
      text: "Ziel dieser Befragung ist es, verschiedene Bewertungskriterien hinsichtlich ihrer Bedeutung für die Einschätzung der Prozesseignung von CPA zu gewichten.",
    },
    {
      icon: "◐",
      title: "Wie funktioniert der Paarvergleich?",
      text: "Im Folgenden werden Ihnen jeweils zwei Aspekte gegenübergestellt. Bitte wählen Sie pro Vergleich die Option aus, die aus Ihrer Sicht wichtiger ist. Pro Frage ist genau eine Auswahl möglich.",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h2 className="page-title">Einführung</h2>
        <p className="page-subtitle">
          Bitte lesen Sie die folgenden Hinweise sorgfältig durch.
        </p>
      </div>

      <div className="intro-blocks">
        {blocks.map((block) => (
          <div className="intro-block" key={block.title}>
            <div className="intro-block-icon">{block.icon}</div>
            <div className="intro-block-content">
              <h3 className="intro-block-title">{block.title}</h3>
              <p className="intro-block-text">{block.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ablauf der Befragung */}
      <div className="survey-flow-card">
        <h3 className="survey-flow-title">◑ Ablauf der Befragung</h3>
        <p className="survey-flow-intro">
          Die Befragung gliedert sich in zwei aufeinanderfolgende Teile:
        </p>
        <div className="survey-flow-steps">
          <div className="survey-flow-step">
            <div className="survey-flow-step-number">1</div>
            <div className="survey-flow-step-content">
              <strong>Vergleich der übergeordneten Dimensionen</strong>
              <p>
                Als erstes werden die vier übergeordneten Dimensionen (DA, KA,
                BA, TA) paarweise miteinander verglichen. Die übergeordneten
                Dimensionen beschreiben die thematische Zuordnung einzelner
                Kriterien und grenzen diese voneinander ab.
              </p>
            </div>
          </div>
          <div className="survey-flow-step">
            <div className="survey-flow-step-number">2</div>
            <div className="survey-flow-step-content">
              <strong>Vergleich der Kriterien je Dimension</strong>
              <p>
                Anschließend werden die Kriterien innerhalb jeder Dimension
                einzeln miteinander verglichen. Dieser Schritt wird für alle
                vier Dimensionen durchgeführt.
              </p>
            </div>
          </div>
        </div>
        <div className="survey-flow-dims">
          {DIMENSIONS.map((dim) => (
            <div className="survey-flow-dim" key={dim.id}>
              <span className="survey-flow-dim-id">{dim.id}</span>
              <span className="survey-flow-dim-name">{dim.name}</span>
              <span className="survey-flow-dim-count">
                {dim.criteria.length} Kriterien
              </span>
            </div>
          ))}
        </div>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} showBack={false} />
    </div>
  );
}
