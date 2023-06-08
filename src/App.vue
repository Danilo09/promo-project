<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import { RouterView } from 'vue-router';
import { api } from "./services";


export default {
  components: {
    TheHeader,
    TheFooter,
    RouterView
  },
  created(){
    if(window.localStorage.token) {
      api.validateToken().then(() => {
        this.$store.dispatch("getUser");
      // eslint-disable-next-line no-unused-vars
      }).catch(error => {
        window.localStorage.removeItem("token");
      })
    }
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
