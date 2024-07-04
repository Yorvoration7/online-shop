<template>
  <div class="home__section container">
    <Products class="products__section" />
  </div>
</template>

<script setup>
import Products from "../components/Products.vue";
import allProducts from "../store/products.js";
import { onMounted } from "vue";
const productStore = allProducts();

onMounted(() => {
  productStore.getProducts();
});
</script>

<style >
.home__section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.products__panel-section {
  z-index: 999;
  position: absolute;
}
.products__section {
  position: relative;
  top: 150px;
  z-index: 1;
}
</style>