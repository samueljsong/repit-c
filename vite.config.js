import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import istanbul from 'vite-plugin-istanbul';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(),
      // Only instrument code for coverage in testing environments
      process.env.NODE_ENV === 'development' && istanbul({
        include: 'src/**', // Instrument only files in the src/ directory
        exclude: ['node_modules', 'test/', '**/*.test.js', '**/*.spec.js'],
        extension: ['.js', '.jsx'], // Include JS and JSX files
      })
    ],
  });