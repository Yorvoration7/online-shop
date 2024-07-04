
<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import allProducts from './store/products.js'
import Loader from './components/Loader.vue'

const productStore = allProducts()
import { onMounted } from "vue";
onMounted(()=> {
  setTimeout(()=> {
    productStore.getProducts()
  },1300)
})
</script>


<template>
  <div class="wrapper" v-if="productStore?.products">
<Header/>
<Main/>
<Footer/>
<!-- <h1>Hello World</h1> -->
  </div>
  <Loader v-else/>
</template>



<style lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>