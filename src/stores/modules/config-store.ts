import { defineStore } from 'pinia'
import { useStorage, type RemovableRef } from '@vueuse/core'
import { store } from '@/stores'
import { type Theme } from '@/lib/registry/themes'
import { styles, type Style } from '@/lib/registry/styles'

interface Config {
  theme: Theme['name']
  radius: number
  style: Style
}

export const RADII = [0, 0.25, 0.5, 0.75, 1]

export const useConfigStore = defineStore({
  id: 'config',
  state: (): { config: RemovableRef<Config> } => ({
    config: useStorage<Config>('config', {
      theme: 'zinc',
      radius: 0.5,
      style: styles[0].name
    })
  }),
  getters: {
    themeClass(): string {
      return `theme-${this.config.theme}`
    },

    theme(): string {
      return this.config.theme
    },

    radius(): number {
      return this.config.radius
    },

    style(): Style {
      return this.config.style
    }
  },
  actions: {
    setTheme(themeName: Theme['name']) {
      this.config.theme = themeName
    },

    setRadius(newRadius: number) {
      this.config.radius = newRadius
    },

    setStyle(newStyle: Style) {
      this.config.style = newStyle
    }
  }
})

// Need to be used outside the setup
export function useConfigStoreWithOut() {
  return useConfigStore(store)
}
