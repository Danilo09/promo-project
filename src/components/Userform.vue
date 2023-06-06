<template>
    <form>
      <div class="user">
        <label for="name">Nome</label>
        <input id="name" name="name" type="text">
        <label for="email">Email</label>
        <input id="email" name="email" type="email">
        <label for="password">Senha</label>
        <input id="password" name="password" type="password">
      </div>
      <div class="button">
        <slot></slot>
      </div>
    </form>
  </template>

<script> 
    export default {
        name: "user-form"
    };
</script>

<style scoped>
form,
.user {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.user {
  grid-column: 1 / 3;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>