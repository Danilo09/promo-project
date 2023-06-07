<template>
    <section class="user-graphic">
      <UserGraphic />
    </section>
    <section>
      <RandomStatus />
    </section>
  </template>

<script>

import UserGraphic from './UserGraphic.vue'
import RandomStatus from './RandomStatus.vue'

export default {
  name: "user-page",
  components: {
    UserGraphic,
    RandomStatus
  },
  mounted() {
    document.title = "Usuário";
  }
};
</script>


<style>
.user-graphic {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>