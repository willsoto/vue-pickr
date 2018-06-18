<template>
  <div></div>
</template>

<script>
import Pickr from 'pickr-widget';

export default {
  name: 'vue-pickr',
  props: {
    options: {
      type: Object,
      required: false,
      default() {
        return {};
      }
    }
  },
  mounted() {
    const pickr = new Pickr({
      el: this.$el,
      ...this.options
    });

    this.$emit('pickr', pickr);
  }
};
</script>

<style scoped>
@import '~pickr-widget/dist/pickr.min.css';
</style>
