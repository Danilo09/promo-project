<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { RouterView } from 'vue-router';


export default {
  components: {
    TheHeader,
    TheFooter,
    RouterView
  }

};

</script>

<template>
  <TheHeader/>
    <main>
      <RouterView />
    </main> 
  <TheFooter/>
</template>

<style scoped>

</style>
