<template>
    <section class="login">
      <h1>Login</h1>
      <form>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="login.email">
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" v-model="login.password">
        <button class="btn" @click.prevent="logar">Logar</button>
        <NotificationError :erros="erros"/>
      </form>
      <p class="lost">
        <a
          href="#"
          target="_blank"
        >Perdeu a senha? Clique aqui.</a>
      </p>
      <LoginCreate />
    </section>
  </template>

<script>
import LoginCreate from '../components/LoginCreate.vue';
import NotificationError from '../components/NotificationError.vue';

export default {
    name: "Login-view",
    components: {
      LoginCreate,
      NotificationError
    },
    data() {
        return {
            login: {
                email: "",
                password: ""
            },
            erros: []
        };
    },
    methods: {
        logar() {
            this.$store.dispatch("getUser", this.login.email)
            this.$router.push({name: "user-page"});
        }
    },
    mounted(){
        document.title = "Login"
    }
}

</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.lost {
  text-align: center;
  margin: 20px auto 0 auto;
}

.lost a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
