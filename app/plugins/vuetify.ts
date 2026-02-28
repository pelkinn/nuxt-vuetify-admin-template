import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { ru } from 'vuetify/locale';
import '@mdi/font/css/materialdesignicons.css';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    locale: {
      locale: 'ru',
      fallback: 'ru',
      messages: { ru }
    },
    theme: {
      defaultTheme: 'light',
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 5,
        darken: 2
      },
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#a855f7',
            'on-primary': '#1E1B4B',
            secondary: '#5EEAD4',
            'on-secondary': '#002629',
            accent: '#FCD34D',
            background: '#0F0B1E',
            surface: '#1A1333',
            'surface-variant': '#2D1F54',
            'on-background': '#EDE9FE',
            'on-surface': '#F5F3FF',
            outline: '#5B21B6',
            success: '#4ADE80',
            warning: '#FBBF24',
            error: '#FB7185',
            info: '#38BDF8'
          }
        },
        light: {
          dark: false,
          colors: {
            primary: '#7C3AED',
            'on-primary': '#FFFFFF',
            secondary: '#14B8A6',
            'on-secondary': '#FFFFFF',
            accent: '#FBBF24',
            background: '#F5F3FF',
            surface: '#FFFFFF',
            'surface-variant': '#EDE9FE',
            'on-background': '#1E1B4B',
            'on-surface': '#1E1B4B',
            outline: '#C4B5FD',
            success: '#16A34A',
            warning: '#D97706',
            error: '#DC2626',
            info: '#0284C7'
          }
        }
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
});
