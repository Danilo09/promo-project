<template>
    <section>
      <h2>Crie a Sua Conta</h2>
      <NotificationError :erros="erros"/>
        <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
        <Userform v-else>
          <button class="btn btn-form" @click.prevent="userCreate">Criar Usuário</button>
        </UserForm>
    </section>
  </template>
  
<script>

import NotificationError from './NotificationError.vue';

import Userform from './Userform.vue';

export default {
    name: "login-view",
    components: {
    Userform,
    NotificationError
},
    data() {
        return {
            create: false,
            erros: []
        }
    },
    methods: {
      async userCreate() {
        try {
          await this.$store.dispatch("userCreate", this.$store.state.user);
          await this.$store.dispatch("userLogin", this.$store.state.user);
          await this.$store.dispatch("getUser");
          this.$router.push({name: "user-page"})
        } catch(error){
          console.log(error)
        }
      }
    }
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.btn-form {
  max-width: 100%;
}
</style>