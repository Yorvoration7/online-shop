<template>
  <div class="products__section">
    <div class="container">
      <div class="product__panel">
        <div class="product__type">
          <div class="products__panel">
          <button class="product__type-title" @click="openMenu">
            
            Categories

            <img
              src="../assets/icons/arrow.png"
              alt=""
              class="arrow"
              :class="{ up: category, down: !category }"
            />
          </button>

          <p class="product__number">

Number of products - {{ count }}
</p>
        </div>
          <ul class="product__type-items" v-if="category">
            <li>
              <a
                href=""
                class="product__type-item"
                @click.prevent="sortByName()"
                >Name</a
              >
            </li>
            <li>
              <a
                href=""
                class="product__type-item"
                @click.prevent="sortByPrice()"
                >Price</a
              >
            </li>
            <li>
              <a
                href=""
                class="product__type-item"
                @click.prevent="sortByCount()"
                >Quantity</a
              >
            </li>
          </ul>
        </div>
        <!-- <p class="product__number">

          Number of products - {{ count }}
        </p> -->
      </div>

      <div class="product__items">
        <div
          class="product__item"
          v-for="product in paginatedList"
          :key="product.id"
        >
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="product__img"
          />
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
          <router-link :to="'products/' + product.id">
            <button class="more__info-btn">
              Details
            </button></router-link
          >
          <!-- <router-link :to="`${product.id}`" class="more__info-btn" >Detailss</router-link> -->
        </div>
      </div>
    </div>
    <div class="paginated">
      <button @click="prevPage" class="page__button back">Back</button>
      <span class="pages__num">{{ currentPage }} out of {{ totalPages }} </span>
      <button @click="nextPage" class="page__button next">Next</button>
    </div>
  </div>
  <h1></h1>
</template>

<script setup>
import allProducts from "../store/products.js";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const productsStore = allProducts();
const currentPage = ref(1);
const pageCount = ref(12);
const router = useRouter();

function sortByName(title) {
  productsStore.sortProductsName("title");
}
function sortByCount(stock) {
  productsStore.sortProductsCount("stock");
}
function sortByPrice(price) {
  productsStore.sortProductsCount("price");
}

const paginatedList = computed(() => {
  if (productsStore.products == null) {
    return null;
  }

  const start = (currentPage.value - 1) * pageCount.value;
  const end = start + pageCount.value;
  return productsStore.products.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(productsStore.products?.length / pageCount.value)
);
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
////
const category = ref(false);
const openMenu = () => {
  category.value = !category.value;
};
productsStore.getProducts();

const count = computed(() => productsStore.products?.length || 0);
</script>

<style lang="scss">
.products__panel{
  display: flex;
  justify-content: space-between;
  gap: 670px;
}
.products__section {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.paginated {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 100px;

  button {
    background: white;
    border: solid 2px black;
    padding: 0.375em 1.125em;
    font-size: 1rem;
  }

  .page__button {
    font-size: 2rem;
    background: hsl(190deg, 30%, 15%);
    color: hsl(190deg, 10%, 95%);
    box-shadow: 0 0px 0px hsla(190deg, 15%, 5%, 0.2);
    // transfrom: translateY(0);
    transform: translateY(0);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    --dur: 0.15s;
    --delay: 0.15s;
    --radius: 16px;

    transition: border-top-left-radius var(--dur) var(--delay) ease-out,
      border-top-right-radius var(--dur) calc(var(--delay) * 2) ease-out,
      border-bottom-right-radius var(--dur) calc(var(--delay) * 3) ease-out,
      border-bottom-left-radius var(--dur) calc(var(--delay) * 4) ease-out,
      box-shadow calc(var(--dur) * 4) ease-out,
      transform calc(var(--dur) * 4) ease-out,
      background calc(var(--dur) * 4) steps(4, jump-end);
  }

  .page__button:hover,
  .page__button:focus {
    box-shadow: 0 4px 8px hsla(190deg, 15%, 5%, 0.2);
    transform: translateY(-4px);
    background: hsl(230deg, 50%, 45%);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .back {
    outline: none;
    border-radius: 25px 2px 2px 25px;
  }
  .next {
    outline: none;
    border-radius: 2px 25px 25px 0px;
  }
  .pages__num {
    font-size: 22px;
    font-weight: 400;
    line-height: 25px;
    font-family: "Poppins";

    color: white;
    padding: 0px 15px;
  }
}

.product__items {
  padding-top: 320px;
  padding-bottom: 250px;
  gap: 80px;
  display: grid;
  position: relative;
  z-index: 1;
  grid-template-columns: repeat(3, 1fr);
  .product__item {
    border-radius: 45px 5px;

    height: 580px;
    width: 350px;
    background-color: rgba(255, 255, 255, 0.909);
    z-index: 1;
    .product__img {
      width: 250px;
      height: 250px;
      margin: 10px 50px;
    }
    .product__info {
      padding: 15px;
      .product__title {
        color: rgb(0, 0, 0);
        font-family: "Poppins";
        font-size: 18px;
        font-weight: 500;
      }
      .product__description {
        margin: 10px auto;
        .product__text {
          color: rgb(0, 0, 0);
          font-family: "Poppins";
          font-size: 16px;
          font-weight: 400;
          line-height: 15px;
        }
      }
      .product__info-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;
        .product__info-item {
          color: rgb(0, 0, 0);
          font-family: "Poppins";
          font-size: 16px;
          font-weight: 300;
          .price {
            color: green;
            background-color: rgba(0, 128, 0, 0.278);
            border-radius: 10px;
            font-size: 17px;
            font-weight: 500;
          }
          .price:hover {
            color: rgb(219, 206, 206);
            opacity: 0.7;
            background-color: rgba(0, 0, 0, 0.935);
            transition: 1s;
          }
        }
      }
    }
    .more__info-btn {
      border: none;
      text-decoration: none;
      display: flex;
      font-size: 16px;
      font-weight: 500;
      font-family: "Poppins";
      justify-content: center;
      align-items: center;
      margin: 15px auto;
      margin-bottom: 10px;
      background-color: black;
      color: white;
      padding: 10px 20px;
      border-radius: 20px;
    }
    .more__info-btn:hover {
      background-color: white;
      color: black;
      transition: all 0.5s ease;
    }
  }
}

.arrow.up {
  transform: rotate(540deg);
  transition: 0.5s;
}
.arrow.down {
  transform: rotate(0deg);
  transition: 0.5s;
}
.product__panel {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  gap: 720px;
  position: absolute;
  z-index: 2;

  // padding-top: 10px;
  .product__type {
    display: flex;
    flex-direction: column;
    .product__type-title {
      color: rgb(0, 0, 0);
      font-family: "Poppins";
      font-size: 26px;
      padding: 10px 10px;
      font-weight: 500;
      border-style: none;
      background-color: rgb(233, 232, 232);
    }
    .product__type-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      z-index: 999;
      margin-top: 15px;
      padding: 13px 10px;
      animation-name: appear,disappear;
      animation-duration: 0.6s;
      animation-timing-function: ease-in-out;
      @keyframes appear {
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes disappear {
        100% {
          transform: translateX(0);
          opacity: 1;
        }
        0% {
          transform: translateX(-100%);
          opacity: 0;
        }
      }
      

      .product__type-item {
        // padding: 10px 5px;
        color: rgb(199, 197, 197);
        font-family: "Poppins";
        font-size: 24px;
        font-weight: 400;
        // text-decoration: none;
        position: relative;

        &:hover {
          color: rgb(255, 255, 255);
        }
        &::before {
          content: "";
          width: 0;
          height: 2px;
          position: absolute;
          background-color: #ffffff;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover::before {
          width: 60%;
        }
      }
    }
    .arrow {
      height: 15px;
      width: 15px;
    }
  }

}
.product__number {
    color: rgb(245, 245, 245);
    font-family: "Poppins";
    font-size: 24px;
    font-weight: 500;
    // padding-top: 15px;
    padding: 16px 5px;
  }

@media (max-width:1516.99px) {
.product__type-title{
  width: 170px;
  height: 59px;
  font-size: 22px !important;
}
.product__number{
  width: 255px;
  font-size: 20px;
    font-weight: 400;
}
.product__items{
  grid-template-columns: repeat(2, 1fr);
}
.products__panel{
  gap: 480px;
  font-size: 22px;
    font-weight: 500;
}
}
@media (max-width:1199.99px) {
   
  .product__type-title{
  width: 170px;
  height: 59px;
  font-size: 20px !important;
}
.product__number{
  width: 255px;
  font-size: 20px;
    font-weight: 400;
}
.products__panel{
  gap: 340px;
  font-size: 22px;
    font-weight: 500;
}
.product__type-item{
  font-size: 22px !important;
}
.product__items{
gap: 45px;
}
}
@media (max-width:910.99px) {
   
 
  .product__type-title{
  width: 170px;
  height: 59px;
  font-size: 18px !important;
  width: 150px;
        height: 49px;
}
.product__number{
  width: 255px;
  font-size: 18px;
    font-weight: 400;
}
.products__panel{
  gap: 50px;
  font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-left: 50px;
}
.product__type-item{
  font-size: 22px !important;
}
.product__items{
gap: 45px;
}
.product__items{
  grid-template-columns: repeat(1, 1fr);
}
}
@media (max-width:699.99px) {
   
.product__items{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.products__panel{
  gap: 50px;
  font-size: 18px;
    font-weight: 500;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-left: 80px;
}

}
@media (max-width:699.99px) {
   
.page__button{
  font-size: 25px !important;
}
.pages__num{
  font-size: 18px !important;
}
}
</style>