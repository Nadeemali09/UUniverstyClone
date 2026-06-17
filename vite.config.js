import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild', // Changed from 'terser' to avoid installation
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split React and ReactDOM into a separate chunk
          if (id.includes('node_modules') && (id.includes('react') || id.includes('react-dom'))) {
            return 'react-vendor';
          }
          // Split react-helmet-async into its own chunk
          if (id.includes('node_modules') && id.includes('react-helmet-async')) {
            return 'helmet';
          }
          // Let Vite handle everything else automatically
          return null;
        },
      },
    },
  },
  server: {
    port: 5173,
    host: 'localhost',
  },
})