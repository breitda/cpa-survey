import React from "react";
import NavButtons from "../components/NavButtons";

/**
 * Einführungsseite mit Erklärung zu CPA und dem Paarvergleich
 */
export default function IntroPage({ onNext, onBack }) {
  const blocks = [
    {
      icon: "◈",
      title: "Was ist CPA?",
      text: "Cognitive Process Automation beschreibt die Automatisierung von Prozessen durch die Kombination von Robotic Proceess Automation (RPA) mit KI-basierten Fähigkeiten. Dadurch können auch komplexere oder weniger strukturierte Aufgaben unterstützt werden.",
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

      <NavButtons onBack={onBack} onNext={onNext} showBack={false} />
    </div>
  );
}
