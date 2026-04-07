import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/theme.less')}";`,
        },
        javascriptEnabled: true,
      },
      scss: {
        api: 'modern',
        silenceDeprecations: ['legacy-js-api'],
      },
      sass: {
        api: 'modern',
        silenceDeprecations: ['legacy-js-api'],
      },
    }
  },
})
