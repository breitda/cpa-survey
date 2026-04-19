# CPA Experten:innenbefragung

Eine wissenschaftliche Experten:innenbefragung zur Gewichtung von CPA-Bewertungskriterien mittels binärer Paarvergleiche.

---

## 1. Lokal starten

**Voraussetzungen:** Node.js (Version 18 oder höher) muss installiert sein.

```bash
# 1. In das Projektverzeichnis wechseln
cd cpa-survey

# 2. Abhängigkeiten installieren
npm install

# 3. Entwicklungsserver starten
npm run dev
```

Die App ist dann unter **http://localhost:5173** erreichbar.

---

## 2. EmailJS einrichten

### Schritt 1: Account anlegen
Registrieren Sie sich kostenlos unter [https://www.emailjs.com/](https://www.emailjs.com/)

### Schritt 2: E-Mail-Service verbinden
- Unter **Email Services** einen neuen Service anlegen (z. B. Gmail)
- Die **Service ID** notieren (z. B. `service_abc123`)

### Schritt 3: E-Mail-Template erstellen
- Unter **Email Templates** ein neues Template anlegen
- Folgende Template-Variablen verwenden:

```
Betreff: Neue Antworten: CPA Experten:innenbefragung – {{zeitstempel}}

Berufserfahrung: {{berufserfahrung}}
Rolle / Funktion: {{rolle}}

{{antworten}}

Zeitstempel: {{zeitstempel}}
```

- Die **Template ID** notieren (z. B. `template_xyz789`)

### Schritt 4: Public Key ermitteln
- Unter **Account > General** den **Public Key** kopieren

### Schritt 5: Konfiguration eintragen

Öffnen Sie die Datei `src/utils/emailjs.js` und tragen Sie Ihre Daten ein:

```js
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: "IhrPublicKeyHier",
  SERVICE_ID: "IhreServiceIDHier",
  TEMPLATE_ID: "IhreTemplateIDHier",
};
```

---

## 3. Auf GitHub Pages veröffentlichen

### Schritt 1: Repository-Name in vite.config.js anpassen

Öffnen Sie `vite.config.js` und ersetzen Sie `cpa-survey` durch den Namen Ihres GitHub-Repositories:

```js
base: '/IhrRepositoryName/',
```

### Schritt 2: GitHub Repository erstellen
- Neues Repository auf GitHub anlegen (z. B. `cpa-survey`)

### Schritt 3: Code hochladen

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/IhrUsername/IhrRepository.git
git push -u origin main
```

### Schritt 4: GitHub Pages aktivieren
- Im Repository auf **Settings > Pages** gehen
- Unter **Source**: **GitHub Actions** auswählen

Der Build läuft automatisch. Die App ist dann erreichbar unter:
`https://IhrUsername.github.io/IhrRepository/`

---

## Projektstruktur

```
cpa-survey/
├── src/
│   ├── data/
│   │   └── criteria.js         # Kriterienkatalog & Paarvergleich-Logik
│   ├── hooks/
│   │   └── useSurvey.js        # Zustandsverwaltung & localStorage
│   ├── utils/
│   │   └── emailjs.js          # EmailJS-Konfiguration
│   ├── components/
│   │   ├── ProgressBar.jsx
│   │   └── NavButtons.jsx
│   ├── pages/
│   │   ├── StartPage.jsx
│   │   ├── IntroPage.jsx
│   │   ├── ParticipantPage.jsx
│   │   ├── TransitionPage.jsx
│   │   ├── ComparisonPage.jsx
│   │   └── SummaryPage.jsx     # Enthält auch SuccessPage
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── favicon.svg
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatisches Deployment
├── index.html
├── vite.config.js
└── package.json
```
