import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiClose } from '@mdi/js';
import { ru } from 'vuetify/locale';
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    locale: {
      locale: 'ru',
      fallback: 'ru',
      messages: { ru }
    },

    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        clear: mdiClose
      },
      sets: { mdi }
    },

    theme: {
      defaultTheme: 'dark',
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 5,
        darken: 5
      },
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#a855f7',
            secondary: '#5EEAD4',
            accent: '#FCD34D'
          }
        },
        light: {
          dark: false,
          colors: {
            primary: '#7C3AED',
            secondary: '#14B8A6',
            accent: '#FBBF24'
          }
        }
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
