import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.min.css';
import { createVuetify } from 'vuetify';
import { en, zhHant } from 'vuetify/locale';
import * as labs from 'vuetify/labs/components';

export const vuetify = createVuetify({
    locale: {
        locale: 'zhHant',
        fallback: 'en',
        messages: { zhHant, en },
    },
    components: {
        ...labs,
    },
});
