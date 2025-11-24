<template>
  <span>{{ categories }}</span>
</template>

<script lang="ts">
export default {
  name: 'MenuComponent',
  props: {
    categories: {
      type: Array as () => string[],
      required: true,
    },
  },
}
</script>
