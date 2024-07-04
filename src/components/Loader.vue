<template>
    <div  class="loader">
<div class="loader__item"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loader {
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
.loader__item {
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l11 2s infinite;
}
@keyframes l11 {
  0%   {background: conic-gradient(#f03355 0     ,#0000 0)}
  12.5%{background: conic-gradient(#f03355 45deg ,#0000 46deg)}
  25%  {background: conic-gradient(#f03355 90deg ,#0000 91deg)}
  37.5%{background: conic-gradient(#f03355 135deg,#0000 136deg)}
  50%  {background: conic-gradient(#f03355 180deg,#0000 181deg)}
  62.5%{background: conic-gradient(#f03355 225deg,#0000 226deg)}
  75%  {background: conic-gradient(#f03355 270deg,#0000 271deg)}
  87.5%{background: conic-gradient(#f03355 315deg,#0000 316deg)}
  100% {background: conic-gradient(#f03355 360deg,#0000 360deg)}
}
}
/* HTML: <div class="loader"></div> */
/* HTML: <div class="loader"></div> */
// .loader {
/* HTML: <div class="loader"></div> */


// .loader {
//     width: 100%;
//     height: 100vh;
//     position: fixed;
//     display: flex;
//     justify-content: center;
//     align-items: center;
  //  .loader__item {
  //     width: 50px;
  //     height: 50px;
  //     border-radius: 50%;
  //     border: 1px solid rgba(208, 202, 202, 0.785);
  //     border-top: 1px solid rgba(17, 77, 167, 0.932);
  //     animation: loader 2s infinite linear;
  //   }
  // }

  
  // @keyframes loader {
  //   0% {
  //     transform: rotate(0deg);
  //   }
  //   100% {
  //     transform: rotate(360deg);
  //   }
  // }
</style>