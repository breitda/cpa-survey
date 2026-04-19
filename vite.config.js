import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//
// WICHTIG für GitHub Pages:
// Ersetzen Sie 'cpa-survey' durch den Namen Ihres GitHub-Repositories
// Beispiel: base: '/mein-repo-name/'
//
export default defineConfig({
  plugins: [react()],
  base: '/cpa-survey/',  // <-- Repository-Name hier anpassen
})
