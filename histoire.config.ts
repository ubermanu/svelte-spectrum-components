import { HstSvelte } from '@histoire/plugin-svelte'
import { defineConfig } from 'histoire'

export default defineConfig({
  vite: {
    base: '/svelte-spectrum-components/',
  },
  plugins: [HstSvelte()],
})
