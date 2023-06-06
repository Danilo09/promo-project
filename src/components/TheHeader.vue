<template>
    <header>
      <nav>
        <router-link to="/" class="logo">
          <img src="@/assets/promo-logo.png" alt="Promo Project Logo">
        </router-link>
        <div class="navigation-header">
            <RouterLink to="/">Início</RouterLink>
            <RouterLink to="/product">Produto</RouterLink>
            <RouterLink to="/login">Entrar</RouterLink>
        </div>
      </nav>
    </header>
  </template>

  <script>
  export default {
    name: "TheHeader",
    // computed: {
    //   nome() {
    //     return this.$store.state.usuario.nome.replace(/ .*/, "");
    //   }
    // }
  };
  </script>

<style scoped>

header {
    padding: 1rem;
    background: #000000;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.navigation-header a:first-child {
    padding-right: 1rem;
}

.navigation-header a {
    color: #FFFFFF;
    text-decoration: none;
    text-transform: uppercase;
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>