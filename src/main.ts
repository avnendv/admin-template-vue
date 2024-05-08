import { createApp } from 'vue'

import App from './App.vue'
import router, { setupRouter } from './router'
import { setupAssets, setupCustomComponents, setupGlobalMethods } from './plugins'
import { setupStore } from './stores'

const app = createApp(App)

app.use(router)

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

  // Mount the route
  await setupRouter(app)

  app.mount('#app')
}

setupPlugins()

setupApp()
