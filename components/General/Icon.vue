<template>
  <!-- https://github.com/nuxt-community/svg-module -->
  <!-- eslint-disable vue/no-v-html -->
  <i
    tabindex="-1"
    :aria-label="`icon: ${type}`"
    v-html="require(`@/assets/icons/${type}.svg?raw`)"
  />
</template>

<script>
export default {
  props: {
    type: { type: String, default: '' },
  },
}
</script>