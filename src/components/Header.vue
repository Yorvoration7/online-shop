<template>
    
    <div class="shop__header">
   <div class="container">
    <div class="shop__header-items">
<router-link to="/"><h1 class="shop__title" >Online Store</h1></router-link>


<a href="" class="header__logo">
    <img src="../assets/icons/basket.png" alt="" class="header__logo-item">
</a>
</div>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss">
.shop__header{
    background: rgba(12, 12, 12, 0.712);
   padding: 15px 15px;
    padding-top: 50px;
    height: 100%;
    height: 70px;
    .shop__header-items{
        display: flex;
        justify-content: space-between;
    }
    .shop__title{
    color: rgb(255, 255, 255,850);
font-family: 'Poppins';
font-size: 28px;
font-weight: 500;
}

}
.header__logo-item{
    width: 50px;
height: 50px;
}
@media (max-width:1516.99px) {
   .shop__header{
    background: rgba(12, 12, 12, 0.712);
   padding: 15px 15px;
    padding-top: 50px;
    height: 100%;
    width: 100%;
   }
   .container{
    max-width: 1140px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
   }
   .header__logo-item{
    width: 35px;
height: 35px;
margin-bottom: 15px;
// padding: 15px 15px;
}
}
@media (max-width:1199.99px) {
   
   .container{
    max-width: 840px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
   }

}
@media (max-width:910.99px) {
   
   .container{
    max-width: 650px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
   }

}
@media (max-width:699.99px) {
   
   .container{
    max-width: 450px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
   }
   .shop__header{
    background: rgba(12, 12, 12, 0.712);
   padding: 15px 15px;
    padding-top: 50px;
    height: 100%;
    width: 100%;
   }
   .shop__title{
    font-size: 26px !important;
   }
   .header__logo-item{
    width: 30px;
height: 30px;

}

}
@media (max-width:699.99px) {
   
   .container{
    max-width: 375px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
   }

}


</style>