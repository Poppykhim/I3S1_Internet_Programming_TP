<template>
  <div class="page">
    <h1>{{ pageTitle }}</h1>
    <p v-if="sectionId">This is Section {{ sectionId }} of {{ pageTitle }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    page: String,
    sectionId: Number,
  },
  computed: {
    pageTitle(): string {
      const titles: Record<string, string> = {
        PageOne: 'Welcome to Page 1',
        PageTwo: 'Welcome to Page 2',
        PageThree: 'Welcome to Page 3',
      }
      return titles[this.page] || this.page
    },
  },
}
</script>
