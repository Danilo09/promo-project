<template>
    <transition>
      <ul class="error" v-if="erros.length > 0">
        <li v-for="(erro, index) in erros" :key="index" v-html="erro"></li>
      </ul>
    </transition>
  </template>

<script>
export default {
  name: "Notification-error",
  props: {
    erros: Array
  }
};
</script>

<style scoped>
.error {
  margin: 20px auto;
}

.error li {
  color: #e80;
  text-align: center;
  text-decoration: none;
}

ul.error li a {
    display: block;
}

</style>