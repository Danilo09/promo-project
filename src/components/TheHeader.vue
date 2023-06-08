<template>
    <header>
      <nav>
        <RouterLink to="/" class="logo">
          <img src="@/assets/logo.svg" alt="Promo Project Logo">
        </RouterLink>
        <div class="navigation-header">
            <RouterLink to="/">Início</RouterLink>
            <RouterLink to="/product">Produto</RouterLink>
            <RouterLink v-if="$store.state.login" to="/user">{{ name }}</RouterLink>
            <RouterLink v-else to="/login">Entrar</RouterLink>
        </div>
      </nav>
    </header>
  </template>

  <script>
  export default {
    name: "TheHeader",
    computed: {
      name() {
        return this.$store.state.user.name.replace(/ .*/, "");
      }
    }
  };
  </script>

<style scoped>

header {
    padding: 1rem;
    background: #000000;
    z-index: 99999;
    position: relative;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.navigation-header a {
    padding-left: 1rem;
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