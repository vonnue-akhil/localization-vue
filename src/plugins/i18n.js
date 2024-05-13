import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en: {
            message: {
                hi: 'Hi, {name}!',
                bye: 'good bye!',
                apple: 'no apples | one apple | {count} apples'
            }
        },
        ja: {
            message: {
                hi: 'こんにちは、 {name}！',
                bye: 'さようなら！',
                apple: 'リンゴはありません | 一つのりんご | {count} りんご'
            }
        }
    }
})

export default i18n