import { createI18n } from 'vue-i18n'
// import messages from '../assets/locale/test_en.json'

async function getLocalTranslations() {
    const messages = {};
    const codes = [
        'en',
        'ja',
    ];

    for (let i = 0, len = codes.length; i < len; i++) {
        const code = codes[i];
        const translations = await import(`../assets/locale/${code}.json`);
        messages[code] = translations;
    }

    return messages;
}

let i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: await getLocalTranslations(),
    missingWarn: false,
})

export default i18n