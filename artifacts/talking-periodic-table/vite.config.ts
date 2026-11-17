import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || '/';

export default defineConfig(async ({ command }) => {
  const isDevelopment =
    command === 'serve' && process.env.NODE_ENV !== 'production';
  const developmentPlugins = isDevelopment
    ? [
        await import('@replit/vite-plugin-runtime-error-modal').then((m) =>
          m.default(),
        ),
        ...(process.env.REPL_ID !== undefined
          ? [
              await import('@replit/vite-plugin-cartographer').then((m) =>
                m.cartographer({
                  root: path.resolve(import.meta.dirname, '..'),
                }),
              ),
              await import('@replit/vite-plugin-dev-banner').then((m) =>
                m.devBanner(),
              ),
            ]
          : []),
      ]
    : [];

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), ...developmentPlugins],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, 'src'),
        '@assets': path.resolve(
          import.meta.dirname,
          '..',
          '..',
          'attached_assets',
        ),
      },
      dedupe: ['react', 'react-dom'],
    },
    root: path.resolve(import.meta.dirname),
    build: {
      outDir: path.resolve(import.meta.dirname, 'dist/public'),
      emptyOutDir: true,
    },
    server: {
      port,
      strictPort: true,
      host: '0.0.0.0',
      allowedHosts: true,
      fs: {
        strict: true,
      },
    },
    preview: {
      port,
      host: '0.0.0.0',
      allowedHosts: true,
    },
  };
});
