import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@context': resolve(__dirname, 'src/context'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utilities': resolve(__dirname, 'src/utilities'),
      '@data': resolve(__dirname, 'src/data'),
      '@interfaces': resolve(__dirname, 'src/interfaces'),
      '@config': resolve(__dirname, 'src/config'),
      '@adapters': resolve(__dirname, 'src/adapters'),
      '@services': resolve(__dirname, 'src/services'),
      '@dto': resolve(__dirname, 'src/dto'),
    },
  },
});
