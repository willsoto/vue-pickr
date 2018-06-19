# Vue Pickr

[![pipeline status](https://gitlab.com/willsoto/vue-pickr/badges/master/pipeline.svg)](https://gitlab.com/willsoto/vue-pickr/commits/master)
[![coverage report](https://gitlab.com/willsoto/vue-pickr/badges/master/coverage.svg)](https://gitlab.com/willsoto/vue-pickr/commits/master)

> Vue component wrapping [Pickr](https://github.com/Simonwep/pickr)

## Installation

```bash
npm install @willsoto/vue-pickr pickr-widget
```

```bash
yarn add @willsoto/vue-pickr pickr-widget
```

## Usage

### Template

```html
<div>
  <vue-pickr @pickr="pickr" :options="options"></vue-pickr>
</div>
```

### Script

```js
import VuePickr from '@willsoto/vue-pickr';

export default {
  name: 'my-component',
  components: {
    VuePickr
  },
  data() {
    return {
      // gives you access to the pickr instance
      // https://github.com/Simonwep/pickr#methods
      pickr: null,
      // https://github.com/Simonwep/pickr#optional-options
      options: {}
    };
  }
};
```
