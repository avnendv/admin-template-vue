import { i18n } from '@/locales'

/**
 * International conversion tool function, mainly used to process the title of dynamic routing
 * @param {string | Title18n} message message
 * @param isI18n is true by default, get the corresponding translation text, otherwise return itself
 * @returns message
 */
export function transformI18n(message: string | Title18n = '', isI18n = true) {
  if (!message) {
    return ''
  }

  if (!i18n) {
    return ''
  }

  // handle the title of dynamic routing, format {vi_VN:"",en_US:""}
  if (typeof message === 'object') {
    return message[i18n.global?.locale]
  }

  if (isI18n && typeof message === 'string') {
    return i18n.global.t(message)
  }
  return message
}
