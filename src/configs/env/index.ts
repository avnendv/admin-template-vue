import { z } from 'zod'

export const LOCALE_DEFAULT = import.meta.env.VITE_DEFAULT_LOCALE || 'vi_VN'
export const LOCALE_FALLBACK = import.meta.env.VITE_DEFAULT_LOCALE || 'vi_VN'

const configSchema = z.object({
  LOCALE_DEFAULT: z.string(),
  LOCALE_FALLBACK: z.string()
})

const configProject = configSchema.safeParse({
  LOCALE_DEFAULT,
  LOCALE_FALLBACK
})
if (!configProject.success) throw new Error('Invalid value declaration message in .env file!')

const env = configProject.data

export default env
