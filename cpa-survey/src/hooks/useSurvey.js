import { useState, useCallback, useEffect } from "react";
import { DIMENSIONS, generatePairs } from "../data/criteria";

const STORAGE_KEY = "cpa_survey_state";

/**
 * Definiert alle Schritte der Befragung in der richtigen Reihenfolge
 */
function buildSteps() {
  const steps = [
    { type: "start", id: "start" },
    { type: "intro", id: "intro" },
    { type: "participant", id: "participant" },
    { type: "transition", id: "trans_dimensions", sectionId: "dimensions" },
  ];

  // Paarvergleiche für Dimensionen
  const dimPairs = generatePairs(DIMENSIONS);
  dimPairs.forEach((pair, i) => {
    steps.push({
      type: "comparison_dimension",
      id: `dim_pair_${i}`,
      pairIndex: i,
      pair,
    });
  });

  // Für jede Dimension: Zwischenseite + Kriterienvergleiche
  DIMENSIONS.forEach((dim) => {
    steps.push({
      type: "transition",
      id: `trans_${dim.id}`,
      sectionId: dim.id,
      dimension: dim,
    });

    const critPairs = generatePairs(dim.criteria);
    critPairs.forEach((pair, i) => {
      steps.push({
        type: "comparison_criteria",
        id: `${dim.id}_pair_${i}`,
        pairIndex: i,
        pair,
        dimensionId: dim.id,
        dimensionName: dim.name,
      });
    });
  });

  steps.push({ type: "summary", id: "summary" });
  steps.push({ type: "success", id: "success" });

  return steps;
}

export const STEPS = buildSteps();
export const TOTAL_STEPS = STEPS.length;

/**
 * Haupthook für die Verwaltung des Umfragezustands
 */
export function useSurvey() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [participant, setParticipant] = useState({ experience: "", role: "" });
  const [answers, setAnswers] = useState({ dimensions: [], criteria: {} });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Zustand aus localStorage laden
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.currentStepIndex !== undefined && !data.isSubmitted) {
          setCurrentStepIndex(data.currentStepIndex);
          setParticipant(data.participant || { experience: "", role: "" });
          setAnswers(data.answers || { dimensions: [], criteria: {} });
        }
      }
    } catch (e) {
      console.error("Fehler beim Laden des gespeicherten Zustands:", e);
    }
  }, []);

  // Zustand in localStorage speichern
  useEffect(() => {
    if (!isSubmitted) {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            currentStepIndex,
            participant,
            answers,
            isSubmitted,
          })
        );
      } catch (e) {
        console.error("Fehler beim Speichern des Zustands:", e);
      }
    }
  }, [currentStepIndex, participant, answers, isSubmitted]);

  const currentStep = STEPS[currentStepIndex];

  // Fortschritt berechnen (0 bis 1), ohne Start/Erfolg
  const progressSteps = STEPS.filter(
    (s) => s.type !== "start" && s.type !== "success"
  );
  const progressIndex = progressSteps.findIndex(
    (s) => s.id === currentStep?.id
  );
  const progress =
    progressIndex >= 0 ? progressIndex / (progressSteps.length - 1) : 0;

  const goNext = useCallback(() => {
    setCurrentStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  }, []);

  const goBack = useCallback(() => {
    setCurrentStepIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goToStep = useCallback((index) => {
    setCurrentStepIndex(index);
  }, []);

  // Antwort für einen Dimensionsvergleich setzen
  const setDimensionAnswer = useCallback((pairIndex, chosen, pairLabel) => {
    setAnswers((prev) => {
      const dims = [...(prev.dimensions || [])];
      dims[pairIndex] = { pairIndex, chosen, pairLabel };
      return { ...prev, dimensions: dims };
    });
  }, []);

  // Antwort für einen Kriterienvergleich setzen
  const setCriteriaAnswer = useCallback(
    (dimensionId, pairIndex, chosen, pairLabel) => {
      setAnswers((prev) => {
        const dimCriteria = [...(prev.criteria?.[dimensionId] || [])];
        dimCriteria[pairIndex] = { pairIndex, chosen, pairLabel };
        return {
          ...prev,
          criteria: { ...prev.criteria, [dimensionId]: dimCriteria },
        };
      });
    },
    []
  );

  // Aktuell gegebene Antwort für aktuellen Schritt abrufen
  const getCurrentAnswer = useCallback(() => {
    if (!currentStep) return null;
    if (currentStep.type === "comparison_dimension") {
      return answers.dimensions?.[currentStep.pairIndex] || null;
    }
    if (currentStep.type === "comparison_criteria") {
      return (
        answers.criteria?.[currentStep.dimensionId]?.[currentStep.pairIndex] ||
        null
      );
    }
    return null;
  }, [currentStep, answers]);

  // Alle Daten für den E-Mail-Versand zusammenstellen
  const getSurveyData = useCallback(() => {
    return {
      participant,
      answers,
      timestamp: Date.now(),
    };
  }, [participant, answers]);

  const markAsSubmitted = useCallback(() => {
    setIsSubmitted(true);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    currentStep,
    currentStepIndex,
    totalSteps: TOTAL_STEPS,
    progress,
    participant,
    setParticipant,
    answers,
    goNext,
    goBack,
    goToStep,
    setDimensionAnswer,
    setCriteriaAnswer,
    getCurrentAnswer,
    getSurveyData,
    markAsSubmitted,
  };
}
