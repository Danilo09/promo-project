<template>
    <header>
      <nav>
        <RouterLink to="/" class="logo">
          <img src="@/assets/logo.svg" alt="Promo Project Logo">
        </RouterLink>
        <div class="navigation-header">
            <RouterLink to="/">Início</RouterLink>
            <RouterLink to="/product">Produto</RouterLink>
            <RouterLink v-if="$store.state.login" to="/user" class="btn-login">{{ name }}</RouterLink>
            <RouterLink v-else to="/login" class="btn-login">Entrar</RouterLink>
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
    background: #FFFFFF;
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
.btn-login {
  background-color: #87f;
  padding: 10px 10px !important;
  margin-left: 1rem;
  color: #FFFFFF !important;
  border-radius: 3px;
}
.btn-login:hover {
  background-color: rgb(104, 90, 197);
}
.navigation-header a {
    padding-left: 1rem;
}

@media screen and (max-width: 400px) {
  .navigation-header a {
    font-size: 12px;
  }
}

.navigation-header a {
    color: #000000;
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