import { createI18n } from 'vue-i18n'
import { localeMap } from './config'
import { setHtmlPageLang, setLoadLocalePool } from './helper'
import type { I18nOptions } from 'vue-i18n'
import type { App } from 'vue'
import { useLocaleStoreWithOut } from '@/stores/modules/locale'

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions(): Promise<I18nOptions> {
  const localeStore = useLocaleStoreWithOut()
  const locale = localeStore.getLocale
  const defaultLocal = await import(`./lang/${locale}.ts`)
  const message = defaultLocal.default?.message ?? {}

  setHtmlPageLang(locale)
  setLoadLocalePool((loadLocalePool) => {
    loadLocalePool.push(locale)
  })

  return {
    locale,
    // legacy: false,
    fallbackLocale: localeMap.vi_VN, // set fallback locale
    messages: {
      [locale]: message as { [key: string]: string }
    },
    legacy: false,
    globalInjection: true,
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true
  }
}

// setup i18n instance with global
export async function setupI18n(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options)

  app.use(i18n)
}
