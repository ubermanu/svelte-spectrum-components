import { svelte } from '@sveltejs/vite-plugin-svelte'
import type { UserConfig } from 'vite'
import sveld from 'vite-plugin-sveld'
import type { UserConfig as TestConfig } from 'vitest'

// Import package.json version
import { readFileSync } from 'fs'
const json = readFileSync('package.json', 'utf8')
const pkg = JSON.parse(json)

export default {
  plugins: [svelte(), sveld()],
  define: {
    __PACKAGE__: pkg,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
} as UserConfig & TestConfig
