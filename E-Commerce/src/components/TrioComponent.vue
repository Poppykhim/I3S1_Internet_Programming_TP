<template>
  <div class="cards">
    <div class="text-container">
      <h2 class="title">{{ title }}</h2>
      <h3 class="box">shop now -></h3>
    </div>
    <div class="img-container">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrioComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 25px;
  width: 80%;
}
.box {
  background-color: #3bb77e;
  padding: 10px;
  width: fit-content;
  border-radius: 7px;
}
.cards {
  width: 100%; /* ✅ take full width of parent */
  max-width: 700px; /* ✅ optional limit */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f0e8d5;
  margin: 10px auto;
  flex-wrap: nowrap; /* ✅ allow wrapping if space too small */
  overflow: hidden; /* ✅ hides any tiny overflow from rounding */
  border-radius: 10px; /* optional styling */
}
.text-container {
  flex: 1 1 300px; /* ✅ flexible width */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  gap: 10px;
  box-sizing: border-box;
}
</style>
