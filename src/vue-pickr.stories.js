import { storiesOf } from '@storybook/vue';
import { action, actions } from '@storybook/addon-actions';

import VuePickr from './vue-pickr.vue';

storiesOf('VuePickr', module).add('Basic Example', () => ({
  components: { VuePickr },
  data() {
    return {
      options: {
        default: '#232323',
        onChange: action('onChange'),
        onSave: action('onSave')
      }
    };
  },
  template: `
    <div>
      <vue-pickr @pickr="pickr" :options="options"></vue-pickr>
    </div>`,
  methods: actions({
    pickr: '@pickr'
  })
}));
