import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import th from 'react-intl/locale-data/th'
import locale_en from './locales/en/en.json'
import locale_th from './locales/th/th.json'

addLocaleData([...en, ...th])

export const messages = {
  'en': locale_en,
  'th': locale_th
}

export const language = navigator.language.split(/[-_]/)[0]