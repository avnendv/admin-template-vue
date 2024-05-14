import { createApp } from 'vue'

import App from './App.vue'
import { setupRouter } from './router'
import { setupAssets, setupCustomComponents, setupGlobalMethods } from './plugins'
import { setupStore } from './stores'
import { setupI18n } from './locales'

const app = createApp(App)

function setupPlugins() {
  // Import static resources
  setupAssets()
  // Register global custom components, such as: <svg-icon />
  setupCustomComponents(app)
  // Register global methods, such as: app.config.globalProperties.$message = message
  setupGlobalMethods(app)
}

async function setupApp() {
  // mount pinia state management
  setupStore(app)
  // Asynchronous case: language files may be obtained from the server side
  await setupI18n(app)

  // Mount the route
  await setupRouter(app)

  app.mount('#app')
}

setupPlugins()

setupApp()
