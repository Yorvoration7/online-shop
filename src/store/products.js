import { defineStore } from "pinia";
import axios from "axios";

const allProducts = defineStore ({
id: 'product',
state: () => ({
    products: null,
    errorState:false,
}),
actions:{
async getProducts (){
try {
 
    const result = await axios.get('https://dummyjson.com/products?limit=100')

    // this.products= result.data.products;
    this.products = result.data.products

} catch (error) {
    console.error(error);
}

},
 sortProductsName(value) {
      this.products?.sort((a, b) => {
        if (value === "title") {
          if (a[value] > b[value]) {
            return 1;
          } else if (a[value] < b[value]) {
            return -1;
          }
        } else {
          if (a[value] < b[value]) {
            return 1;
          } else if (a[value] > b[value]) {
            return -1;
          }
        }
      }
    );
    },
    sortProductsCount(value) {
        this.products?.sort((a, b) => {
          if (value === "stock") {
            if (a[value] > b[value]) {
              return 1;
            } else if (a[value] < b[value]) {
              return -1;
            }
          } else {
            if (a[value] < b[value]) {
              return 1;
            } else if (a[value] > b[value]) {
              return -1;
            }
          }
        }
      );
      },
      sortProductsPrice(value) {
        this.products?.sort((a, b) => {
          if (value === "price") {
            if (a[value] > b[value]) {
              return 1;
            } else if (a[value] < b[value]) {
              return -1;
            }
          } else {
            if (a[value] < b[value]) {
              return 1;
            } else if (a[value] > b[value]) {
              return -1;
            }
          }
        }
      );
      },


    },
getters:{

}
})
export default allProducts