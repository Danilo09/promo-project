<template>
    <section>
      <h2>Crie a Sua Conta</h2>
      <NotificationError :erros="erros"/>
      <transition mode="out-in">
        <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
        <Userform v-else>
          <button class="btn btn-form" @click.prevent="UserCreate">Criar Usuário</button>
        </Userform>
      </transition>
    </section>
  </template>
  
<script>
import Userform from './Userform.vue';

export default {
    name: "login-view",
    components: { 
        Userform 
    },
    data() {
        return {
            create: false,
            erros: []
        }
    },
    methods: {
        async UserCreate(event) {
            this.erros = []
            const button = event.currentTarget;
            button.value = "Criando...";
            button.setAttribute("disabled", "");
            try {
                await this.$store.dispatch("UserCreate", this.$store.state.user)
                await this.$store.dispatch("UserLogin", this.$store.state.user)
                await this.$store.dispatch("getUser")
                this.$router.push({ name: "user"})
            } catch (error) {
                button.removeAttribute("disabled");
                button.value = "Criar Usuário";
                this.erros.push(error.response.data.message)
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