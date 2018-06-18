import { mount } from '@vue/test-utils';

import VuePickr from '../../src/vue-pickr.vue';

describe(VuePickr.name, () => {
  let context;

  beforeEach(() => {
    context = {};

    context.wrapper = mount(VuePickr, {
      attachToDocument: true
    });
  });

  test('renders', () => {
    expect(context.wrapper).toBeTruthy();
  });
});
