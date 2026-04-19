/**
 * EmailJS Konfiguration
 *
 * Bitte hier Ihre eigenen Zugangsdaten eintragen:
 * 1. Registrieren Sie sich unter https://www.emailjs.com/
 * 2. Erstellen Sie einen Service und ein Template
 * 3. Tragen Sie die IDs unten ein
 */

export const EMAILJS_CONFIG = {
  // Ihr Public Key (zu finden unter Account > General)
  PUBLIC_KEY: "IDnDazU0meO3pSH6B",

  // Ihre Service ID (zu finden unter Email Services)
  SERVICE_ID: "service_ypl4moc",

  // Ihre Template ID (zu finden unter Email Templates)
  TEMPLATE_ID: "template_jrxtnqj",
};

/**
 * Formatiert die Umfragedaten für den E-Mail-Versand
 * @param {Object} surveyData - Die gesammelten Umfragedaten
 * @returns {Object} - Formatiertes Objekt für das EmailJS-Template
 */
export function formatSurveyDataForEmail(surveyData) {
  const { participant, answers, timestamp } = surveyData;

  // Antworten in lesbaren Text umwandeln
  let answersText = "";

  if (answers.dimensions) {
    answersText += "=== DIMENSIONEN-VERGLEICHE ===\n";
    answers.dimensions.forEach((a, i) => {
      answersText += `${i + 1}. ${a.pairLabel}: Gewählt: ${a.chosen}\n`;
    });
    answersText += "\n";
  }

  if (answers.criteria) {
    Object.entries(answers.criteria).forEach(([dimId, dimAnswers]) => {
      answersText += `=== KRITERIEN: ${dimId} ===\n`;
      dimAnswers.forEach((a, i) => {
        answersText += `${i + 1}. ${a.pairLabel}: Gewählt: ${a.chosen}\n`;
      });
      answersText += "\n";
    });
  }

  return {
    berufserfahrung: participant?.experience || "",
    rolle: participant?.role || "",
    antworten: answersText,
    zeitstempel: timestamp
      ? new Date(timestamp).toLocaleString("de-DE")
      : new Date().toLocaleString("de-DE"),
  };
}
