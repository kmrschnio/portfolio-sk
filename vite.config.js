import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set base to '/<repo-name>/' in production
// Or set VITE_BASE_PATH env var. Defaults to '/' for custom domains.
export default defineConfig({
    plugins: [react()],
    base: '/',
    server: {
        port: 3000,
        open: false
    }
})
