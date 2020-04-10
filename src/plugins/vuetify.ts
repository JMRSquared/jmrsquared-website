import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0093a4',
                secondary: '#706cfe', // '#6fcacb',
                accent: '#f5f6f8',
                error: '#b71c1c',
            },
        },
    },
});
