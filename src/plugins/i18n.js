import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: {
        message: {
            hello: 'Hello, {name}!'
        }
    },
    de: {
        message: {
            hello: 'Guten Tag, {name}!'
        }
    }
};

const i18n = new VueI18n({
    locale: 'en',
    messages
});

export default { i18n }