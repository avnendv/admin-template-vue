export type LocaleType = keyof typeof localeMap;

export const localeMap = {
  vi_VN: 'vi_VN',
  en_US: 'en_US',
} as const;

export const localeList = [
  {
    lang: localeMap.vi_VN,
    label: 'Việt Nam',
    icon: 'vi',
    title: 'Ngôn ngữ',
  },
  {
    lang: localeMap.en_US,
    label: 'English',
    icon: '🇺🇸',
    title: 'Language',
  },
] as const;
