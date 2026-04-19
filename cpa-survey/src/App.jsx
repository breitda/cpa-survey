import React, { useEffect } from "react";
import { useSurvey } from "./hooks/useSurvey";
import ProgressBar from "./components/ProgressBar";
import StartPage from "./pages/StartPage";
import IntroPage from "./pages/IntroPage";
import ParticipantPage from "./pages/ParticipantPage";
import TransitionPage from "./pages/TransitionPage";
import ComparisonPage from "./pages/ComparisonPage";
import { SummaryPage, SuccessPage } from "./pages/SummaryPage";

/**
 * Haupt-App-Komponente
 * Steuert den Seitenablauf und gibt den richtigen Seitentyp aus
 */
export default function App() {
  const {
    currentStep,
    progress,
    participant,
    setParticipant,
    goNext,
    goBack,
    setDimensionAnswer,
    setCriteriaAnswer,
    getCurrentAnswer,
    getSurveyData,
    markAsSubmitted,
  } = useSurvey();

  if (!currentStep) return null;

  const showProgress =
    currentStep.type !== "start" && currentStep.type !== "success";

  const handleAnswer = (chosenId, pairLabel) => {
    if (currentStep.type === "comparison_dimension") {
      setDimensionAnswer(currentStep.pairIndex, chosenId, pairLabel);
    } else if (currentStep.type === "comparison_criteria") {
      setCriteriaAnswer(
        currentStep.dimensionId,
        currentStep.pairIndex,
        chosenId,
        pairLabel
      );
    }
  };

  const handleSuccessNext = () => {
    markAsSubmitted();
    goNext();
  };

  const renderPage = () => {
    switch (currentStep.type) {
      case "start":
        return <StartPage onNext={goNext} />;
      case "intro":
        return <IntroPage onNext={goNext} onBack={goBack} />;
      case "participant":
        return (
          <ParticipantPage
            onNext={goNext}
            onBack={goBack}
            participant={participant}
            setParticipant={setParticipant}
          />
        );
      case "transition":
        return (
          <TransitionPage step={currentStep} onNext={goNext} onBack={goBack} />
        );
      case "comparison_dimension":
      case "comparison_criteria":
        return (
          <ComparisonPage
            step={currentStep}
            currentAnswer={getCurrentAnswer()}
            onAnswer={handleAnswer}
            onNext={goNext}
            onBack={goBack}
          />
        );
      case "summary":
        return (
          <SummaryPage
            onNext={handleSuccessNext}
            onBack={goBack}
            getSurveyData={getSurveyData}
          />
        );
      case "success":
        return <SuccessPage />;
      default:
        return <div>Unbekannte Seite</div>;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner">
          <span className="app-logo">CPA · Masterarbeit</span>
          {showProgress && (
            <ProgressBar
              progress={progress}
              show={showProgress}
            />
          )}
        </div>
      </header>

      <main className="app-main">
        <div className="app-container">{renderPage()}</div>
      </main>
    </div>
  );
}
