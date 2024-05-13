import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: { hello: 'hi there!' },
        ja: { hello: 'こんにちは！' }
    }
})

export default i18n