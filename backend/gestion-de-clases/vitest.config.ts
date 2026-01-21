import path from 'path'
import { defineConfig } from 'vitest/config'
import dotenv from 'dotenv'

dotenv.config({
  path: path.resolve(__dirname, '.env.test'),
})

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'resources': path.resolve(__dirname, "resources"),
    },
  },
  test: {
    environment: 'node',
    globals: true,
    include: ['src/test/**/*.test.ts'],
    exclude: ['node_modules', 'dist']
  },
})