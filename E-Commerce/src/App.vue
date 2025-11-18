<script>
import CategoryComponent from './components/CategoryComponent.vue'
import TrioComponent from './components/TrioComponent.vue'
const burgerImage = new URL('@/assets/Burger.png', import.meta.url).href
const peachImage = new URL('@/assets/peach.png', import.meta.url).href
const kiwiImage = new URL('@/assets/Kiwi.png', import.meta.url).href
const appleImage = new URL('@/assets/Apple.png', import.meta.url).href
const snackImage = new URL('@/assets/Snack.png', import.meta.url).href
const blackPlumImage = new URL('@/assets/BlackPlum.png', import.meta.url).href
const vegetablesImage = new URL('@/assets/Vegetables.png', import.meta.url).href
const headPhoneImage = new URL('@/assets/HeadPhone.png', import.meta.url).href
const cakeAndMilkImage = new URL('@/assets/CakeAndMilk.png', import.meta.url).href
const orangeImage = new URL('@/assets/Orange.png', import.meta.url).href
const onionImage = new URL('@/assets/Onion.jpg', import.meta.url).href
const blaeImage = new URL('@/assets/Blae.jpg', import.meta.url).href
const milkImage = new URL('@/assets/Milk.png', import.meta.url).href
export default {
  name: 'App',
  data() {
    return {
      burgerImage,
      peachImage,
      kiwiImage,
      appleImage,
      snackImage,
      blackPlumImage,
      vegetablesImage,
      headPhoneImage,
      cakeAndMilkImage,
      orangeImage,
      onionImage,
      blaeImage,
      milkImage,
    }
  },
  components: {
    CategoryComponent,
    TrioComponent,
  },
}
</script>

<template>
  <div class="body">
    <div class="categoryContainer">
      <CategoryComponent title="Burgers" productCount="14" :image="burgerImage" />
      <CategoryComponent title="Peach" productCount="17" :image="peachImage" />
      <CategoryComponent title="Kiwi" productCount="21" :image="kiwiImage" />
      <CategoryComponent title="Apple" productCount="68" :image="appleImage" />
      <CategoryComponent title="Snack" productCount="34" :image="snackImage" />
      <CategoryComponent title="Black Plum" productCount="25" :image="blackPlumImage" />
      <CategoryComponent title="Vegetables" productCount="65" :image="vegetablesImage" />
      <CategoryComponent title="Head Phone" productCount="33" :image="headPhoneImage" />
      <CategoryComponent title="Cake and Milk" productCount="54" :image="cakeAndMilkImage" />
      <CategoryComponent title="Orange" productCount="63" :image="orangeImage" />
    </div>
    <div class="trioCardContainer">
      <TrioComponent title="Everyday Fresh & Clean with Our Products" :image="onionImage" />
      <TrioComponent title="Everyday Fresh & Clean with Our Products" :image="milkImage" />
      <TrioComponent title="Everyday Fresh & Clean with Our Products" :image="blaeImage" />
    </div>
  </div>
</template>

<style>
.body {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}
.categoryContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  flex-wrap: nowrap; /* keep in one line */
  box-sizing: border-box;
}

.categoryContainer > * {
  flex: 1 1 0;
  min-width: 0px;
  height: auto;
}

.trioCardContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  flex-wrap: nowrap; /* keep in one line */
  box-sizing: border-box;
}

.trioCardContainer :nth-child(3) {
  background-color: #e7eaf3;
}
</style>
