<script>
import CategoryComponent from './components/CategoryComponent.vue'
import TrioComponent from './components/TrioComponent.vue'
import CardComponent from './components/CardComponent.vue'
import MenuComponent from './components/MenuComponent.vue'
import { useProductStore } from './stores/product'
const burgerImage = new URL('@/assets/images/Burger.png', import.meta.url).href
const peachImage = new URL('@/assets/images/peach.png', import.meta.url).href
const kiwiImage = new URL('@/assets/images/Kiwi.png', import.meta.url).href
const appleImage = new URL('@/assets/images/Apple.png', import.meta.url).href
const snackImage = new URL('@/assets/images/Snack.png', import.meta.url).href
const blackPlumImage = new URL('@/assets/images/BlackPlum.png', import.meta.url).href
const vegetablesImage = new URL('@/assets/images/Vegetables.png', import.meta.url).href
const headPhoneImage = new URL('@/assets/images/HeadPhone.png', import.meta.url).href
const cakeAndMilkImage = new URL('@/assets/images/CakeAndMilk.png', import.meta.url).href
const orangeImage = new URL('@/assets/images/Orange.png', import.meta.url).href
const onionImage = new URL('@/assets/images/Onion.jpg', import.meta.url).href
const blaeImage = new URL('@/assets/images/Blae.jpg', import.meta.url).href
const milkImage = new URL('@/assets/images/Milk.png', import.meta.url).href
export default {
  name: 'App',
  setup() {
    const productStore = useProductStore()
    const categoryStore = useProductStore()
    return {
      productStore,
      categoryStore,
    }
  },
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
  async mounted() {
    await this.productStore.fetchProducts()
    await this.categoryStore.fetchCategories()
  },
  components: {
    CategoryComponent,
    TrioComponent,
    CardComponent,
    MenuComponent,
  },
  methods: {
    /**
     * @param {string|null} image
     * @returns {string}
     */
    cleanImagePath(image) {
      if (!image) return ''

      try {
        const arr = JSON.parse(image)
        return arr[0]
      } catch (err) {
        return image
      }
    },
  },
}
</script>

<template>
  <div class="body">
    <div class="Part1">
      <div class="header">
        <h1>Feature Categories</h1>
        <div class="header-container">
          <MenuComponent
            v-for="category in categoryStore.categories"
            :key="category.id"
            :categories="category.name"
          />
        </div>
      </div>
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
        <TrioComponent title="Make your Breakfast Healthy and Easy" :image="milkImage" />
        <TrioComponent title="The best Organic Products Online" :image="blaeImage" />
      </div>
    </div>
    <div class="header">
      <h1>Feature Categories</h1>
      <div class="header-container">
        <MenuComponent
          v-for="category in categoryStore.categories"
          :key="category.id"
          :categories="category.name"
        />
      </div>
    </div>
    <div class="Part2">
      <CardComponent
        v-for="product in productStore.products"
        :key="product['id']"
        :promotion-as-percentage="product['promotionAsPercentage']"
        :image="'http://localhost:3000/' + cleanImagePath(product['image'])"
        :group="product['group']"
        :name="product['name']"
        :rating="product['rating']"
        :size="product['size']"
        :price="product['price']"
        :count-sold="product['countSold']"
      />
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
}
.Part1 {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
}
.Part2 {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  justify-items: center;
}
.categoryContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.trioCardContainer {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.trioCardContainer :nth-child(3) {
  background-color: #e7eaf3;
}
.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 25px 0;
}
.header-container {
  display: flex;
  gap: 15px;
}
</style>
