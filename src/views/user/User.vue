<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'user-graphic'}">Gráfico</router-link>
        </li>
        <li>
          <router-link :to="{name: 'random-status'}">Status</router-link>
        </li>
        <li>
          <button @click="logout">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
  </template>

<script>



export default {
  name: "user-page",
  methods: {
    logout() {
      this.$store.dispatch("userLogout");
      this.$router.push("/login")
    }
  },
  mounted() {
    document.title = "Usuário";
  }
};
</script>


<style scoped>

.user {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .user {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
  text-decoration: none;
}

nav.sidenav ul li::marker {
    color: transparent;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

</style>