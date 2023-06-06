<template>
  
<section class="bg-market">
    <div class="bg-angle-left"></div>
    <div class="bg-angle-right"></div>
    <ProductView />
 </section>
    
</template>

<script>
import ProductView from './ProductView.vue';

    export default {
    name: "product-market",
    components: { ProductView }
};

</script>

<style>

@keyframes breath-dark {
  0% {
    height: 20vh;
  }
  50% {
    height: 10vh;
  }
  100% {
    height: 20vh;
  }
}
@keyframes breath-yellow {
  0% {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(100% 27%, 0% 100%, 100% 100%); 
  }
  100% {
   clip-path: polygon(100% 0, 0% 100%, 100% 100%); 
  }
}

.bg-market {
    background-image: 100%;
    width: 100%;
    height: 400px;
    position: relative;
    
}

.bg-angle-left, .bg-angle-right {
 position: absolute;
  z-index: 100;
  bottom:0;
  left:0;
  right:0;
  width: 100%;
  height: 20vh; 
}
.bg-angle-left {
  z-index: -1;
  background: #000;
  clip-path: polygon(0 0, 0% 100%, 100% 100%);
  animation: breath-dark 10s infinite;
}
.bg-angle-right {
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);;
  background: #cd4b2a;
  animation: breath-yellow 13s infinite;
}
</style>


