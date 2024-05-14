import { genMessage } from '../helper'

const modulesFiles = import.meta.glob('./vi-VN/**/*.ts', { eager: true })

export default {
  message: {
    ...genMessage(modulesFiles, 'vi-VN')
  },
  dateLocale: null,
  dateLocaleName: 'vi-VN'
}
