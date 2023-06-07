<template>
    <form>
      <div class="user" v-if="showDataLogin">
        <label for="name">Nome</label>
        <input id="name" name="name" type="text" v-model="name">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" v-model="email">
        <label for="password">Senha</label>
        <input id="password" name="password" type="password" v-model="password">
      </div>
      <div class="button">
       <slot></slot>
      </div>
    </form>
  </template>

<script> 
import { mapFields } from "@/helpers.js"
    export default {
        name: "user-form",
        computed: {
            ...mapFields({
                fields: [
                    "name",
                    "email",
                    "password"
                ],
                base: "user",
                mutation: "UPDATE_USER"
            }),
            showDataLogin() {
                return !this.$store.state.login || this.$route.name === "edit-user"
            }
        }
    }
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