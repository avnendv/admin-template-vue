import type { App } from 'vue'

/**
 * Register global method
 * @param app
 */
export function setupGlobalMethods(app: App) {
  // Globally mount the Reflect reflection object for use in the vue template
  app.config.globalProperties.Reflect = Reflect
}
