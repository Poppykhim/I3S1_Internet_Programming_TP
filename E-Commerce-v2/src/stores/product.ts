import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    categories: [],
    groups: [],
    promotions: [],
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/api/products').then((res) => {
        this.products = res.data
        console.log('Fetched products:', this.products)
      })
      return response
    },
    async fetchCategories() {
      const response = await axios.get('http://localhost:3000/api/categories').then((res) => {
        this.categories = res.data
        console.log('Fetched categories:', this.categories)
      })
      return response
    },
  },
})
