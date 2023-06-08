
import { createStore } from 'vuex'
import { api } from "@/services.js";


export const store = createStore ({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    }
  },
  actions: {
    getUser(context) {
      return api.get(`/user`).then(response => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    userCreate(context, payload) {
      context.commit("UPDATE_USER", {id: payload.email})
      return api.post("/user", payload)
    },
    userLogin(context, payload) {
      return api
      .login({
        username: payload.email,
        password: payload.password
      })
      .then(response => {
        window.localStorage.token = `Bearer ${response.data.token}`
        console.log(response)
      })
    },
    userLogout(context) {
      context.commit("UPDATE_USER", {
        id: "",
        name: "",
        email: "",
        password: ""
      });
      window.localStorage.removeItem("token");
      context.commit("UPDATE_LOGIN", false);
    }
  }
});
