import { createI18n } from 'vue-i18n'
import otaClient from '@crowdin/ota-client';

const hash = '243b495093d515fe2bb6a19pqd2';
const OTAConfig = { languageCode: 'en' };
const client = new otaClient(hash, OTAConfig);
const codes = ["en", "ja", 'nl', 'de']

async function downloadTranslations(lang) {
    try {
        const res = await client.getLanguageTranslations(lang);
        return res[0].content;
    } catch (error) {
        console.log(error);
    }
}

async function getLocalTranslations() {
    const messages = {};
    for (let i = 0, len = codes.length; i < len; i++) {
        const code = codes[i];
        const request = await downloadTranslations(code);
        const translations = request ? request : (await import(`../assets/locale/${code}.json`)).default;
        messages[code] = translations;
    }
    return messages;
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: await getLocalTranslations(),
    missingWarn: false,
})

export default i18n