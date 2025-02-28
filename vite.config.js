import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: 5173
  },
  define: {
    // This ensures environment variables work in production
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  }
}); 