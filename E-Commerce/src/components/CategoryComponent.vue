<template>
  <div class="container">
    <img :src="image" />
    <h3>{{ title }}</h3>
    <h5>{{ productCount }} items</h5>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #f2fce4;
  padding: 20px;
}
.category-component {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}
</style>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    productCount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
