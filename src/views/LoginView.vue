


<template>
    <section class="login">
      <h1>Login</h1>
      <form>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="login.email">
        <label for="senha">Senha</label>
        <input type="password" name="senha" id="senha" v-model="login.senha">
        <button class="btn" @click.prevent="logar">Logar</button>
        <ErroNotificacao :erros="erros"/>
      </form>
      <p class="lost">
        <a
          href="http://ranekapilocal.local/wp-login.php?action=lostpassword"
          target="_blank"
        >Perdeu a senha? Clique aqui.</a>
      </p>
      <LoginCreate />
    </section>
  </template>

<script>
import LoginCreate from '../components/LoginCreate.vue';

export default {
    name: "Login-view",
    components: {
        LoginCreate
    },
    data() {
        return {
            login: {
                email: "",
                senha: ""
            },
            erros: []
        };
    },
    methods: {
        logar() {
            this.erros = [];
            this.$store.dispatch("loginUser", this.login)
            .then(response => {
                this.$store.dispatch("getUser");
                this.$router.push({ name: "user"})
            })
            .catch(error => {
                this.erros.push(error.response.data.message)
            })
        }
    },
    create(){
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
