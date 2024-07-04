import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    url: 'https://dummyjson.com/products',
  }),

  actions: {
    async getProduct() {
      try {
        const res = await axios.get(this.url);
        this.products = res.data.products;
      } catch (error) {
        console.log('Произошла ошибка при получении продукта', error);
      }
    },
  },

  getters: {
    getProductById: (state) => (id) => {
      return this.products.find((product) => product.id === parseInt(id));
    },
  }
});













































































