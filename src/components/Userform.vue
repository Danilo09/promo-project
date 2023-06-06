<template>
    <form>
      <div class="usuario">
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text">
        <label for="email">Email</label>
        <input id="email" name="email" type="email">
        <label for="senha">Senha</label>
        <input id="senha" name="senha" type="password">
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