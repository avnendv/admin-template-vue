import { genMessage } from '../helper'

const modulesFiles = import.meta.glob('./en-US/**/*.ts', { eager: true })

export default {
  message: {
    ...genMessage(modulesFiles, 'en-US')
  },
  dateLocale: null,
  dateLocaleName: 'en-US'
}
