<template>
  <div class="container">
    <div class="product__section">
    
    <div class="product__card">
      
        <!-- <swiper-slide> <div class="product__pics">
        <img alt="product.title" v-for="image in product.images" :key="image" :src="image" class="products__pic"> 
      </div></swiper-slide>  -->
      
      <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="image in product.images" :key="image"> <div class="product__pics">
        <img alt="" :src="image" class="products__pic"> 
      </div></swiper-slide> 
    <!-- <swiper-slide></swiper-slide> -->
    <!-- <swiper-slide>Slsdfsdfsdfsdfsdfsdfide 2</swiper-slide><swiper-slide>Slsdfsdfsdfsdfsdfsdfide 3</swiper-slide>
    <swiper-slide>Slsdfsdfsdfsdfsdfsdfide 4</swiper-slide> -->

  </swiper>

<div class="products__exact-info">
    <div class="product__info">
            <h1 class="product__title">
              {{ product.title }}
            </h1>
            <div class="product__description">
              <p class="product__text">{{ product.description }}</p>
            </div>

            <ul class="product__info-list">
              <li class="product__info-item">
                <span class="product__price"
                  >Price: {{ Number(product.price.toFixed(2)) }}$</span
                >
              </li>
              <li class="product__info-item">
                <span class="product__count"
                  >Quantity of products: {{ product.stock }}</span
                >
              </li>
              <li class="product__info-item">
                <span class="product__price-discount"
                  >Discount<span class="price"
                    >-{{ Number(product.discountPercentage.toFixed(2)) }}%</span
                  ></span
                >
              </li>
              <li class="product__info-item">
                <span class="discount__price"
                  >Price with discount:
                  <span class="price"
                    >{{
                      Number(
                        (
                          product.price -
                          product.price * (product.discountPercentage / 100)
                        ).toFixed(2)
                      )
                    }}$</span
                  ></span
                >
              </li>
            </ul>
          </div>
          <div class="product__reviews">
          <div class="product__review-info" v-for="review in product.reviews" :key="review">
            <h1 class="reviewer__msg">Reviews</h1>
            <h2 class="reviewer__msg">{{review.reviewerName}}
            </h2>
             <h3 class="reviewer__msg">{{review.reviewerEmail}}
            </h3>
            <p class="product__review-info-item">Status of product: {{product.availabilityStatus}}</p>
            <p class="product__review-info-item">Status of product: {{review.comment}}</p>
            
          </div>
          </div>
          <p class="product__review-resp">You have ability to contact with our customers, to verify quality of our products!</p>
    </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {ref} from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../assets/styles/swipes.css';
import { Pagination, Navigation } from 'swiper/modules';
const modules = [Pagination, Navigation];

import { useRouter } from "vue-router";
import { computed } from "vue";
import allProducts from "../store/products.js";
const router = useRouter();

const productId = router.currentRoute.value.params["id"];
console.log(productId);
const productsStore = allProducts();
const product = computed(() => {
  return productsStore.products.find((item) =>
   item.id == productId);
});
</script>

<style scoped>
.product__review-resp{
  margin-top: 20px;
}
.product__title{
  padding: 10px 0;
  font-family: "Poppins";
        font-size: 18px;
        font-weight: 500;
}
.product__text{
  padding: 10px 0;
width: 300px;
height: 100px;
line-height: 18px;
color: rgba(233, 233, 233, 0.92);
          font-family: "Poppins";
          font-size: 16px;
          font-weight: 400;

overflow: hidden;
animation: 
typing 2s steps(15),
cursor .4s step-end infinite alternate;
}

@keyframes cursor {
  50% {border-color: transparent;}
}
@keyframes typing {
  from {width: 0}
}

.product__count,.product__price-discount,.product__price,.discount__price,.product__review-resp,.reviewer__msg{
  font-family: "Poppins";
          font-size: 16px;
          font-weight: 400;
}
.product__review-info-item{
  font-family: "Poppins";
          font-size: 16px;
          font-weight: 400;
           color: white ;
}
.product__info{
  margin-top: 70px;
}
.product__info-list{
  line-height: 20px;
}
.product__reviews{
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.product__review-info{
  display: flex;
  flex-direction: column;
 line-height: 20px;
}
.product__card{
 margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
}
.products__pic{
  min-width: 250px;
    height: 550px;
    max-width: 550px;
}
.products__exact-info{
  display: flex;
  flex-direction: column;
}

.he {
  color: white;
}



@media (max-width:1199.99px) {
 .product__card{
  margin-left: 50px;
 }
  

}
@media (max-width:699.99px) {


  .products__pic{
  min-width: 250px;
    height: 300px;
    max-width: 280px;
    width: 250px;
 
}
}
</style>

  