<template>
    <section class="user">
        user
    </section>
  </template>

<script>
export default {
  name: "user-page",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  },
  created() {
    document.title = "Usuário";
  }
};
</script>