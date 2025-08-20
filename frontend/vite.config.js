import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss()],
  
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> c61f231925e486ce475ff6182a901013005fecef
})
