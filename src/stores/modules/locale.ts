import { defineStore } from 'pinia'
import type { LocaleType } from '@/locales/config'
import { store } from '@/stores'
import { env } from '@/configs'
import { Storage } from '@/utils/Storage'
import { LOCALE_KEY } from '@/constants'

interface LocaleState {
  locale: LocaleType
}

export const useLocaleStore = defineStore({
  id: 'locale',
  state: (): LocaleState => ({
    locale: Storage!.get(LOCALE_KEY, env.LOCALE_DEFAULT)
  }),
  getters: {
    getLocale(): LocaleType {
      return this.locale ?? env.LOCALE_DEFAULT
    }
  },
  actions: {
    setLocale(locale: LocaleType) {
      this.locale = locale
      Storage!.set(LOCALE_KEY, locale)
    }
  }
})

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
  return useLocaleStore(store)
}
