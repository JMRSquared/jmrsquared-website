import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#0093a4',
                secondary: '#6fcacb',
                accent: '#050C11',
                error: '#b71c1c',
            },
        },
    }
});
