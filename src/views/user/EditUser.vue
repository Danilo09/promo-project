<template>
    <section>
      <UserForm>
        <button class="btn" @click.prevent="updateUser">Atualizar Usuário</button>
      </UserForm>
      <ErroNotificacao :erros="erros"/>
    </section>
  </template>

<script>
import UserForm from '../../components/UserForm.vue';
import { api } from "@/services.js";

export default {
    name: "edit-user",
    created() {
        document.title = "Editar Usuário";
    },
    components: { UserForm },
    data() {
      return {
        erros: []
      };
    },
    methods: {
    atualizarUsuario() {
      this.erros = [];
      api
        .put("/user", this.$store.state.user)
        .then(() => {
          this.$store.dispatch("getUser");
          this.$router.push({ name: "user" });
        })
        .catch(error => {
          this.erros.push(error.response.data.message);
        });
    }
  },
};
</script>