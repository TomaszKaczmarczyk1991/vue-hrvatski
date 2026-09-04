import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'

const packageJson = JSON.parse(
  fs.readFileSync('./package.json', 'utf-8')
)

export default defineConfig({
  plugins: [vue()],

  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(
      packageJson.version
    )
  }
})