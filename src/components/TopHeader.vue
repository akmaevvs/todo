<template>
  <div class="top-header">
    <!-- <div class="top-header__logo-block">
      <img class="logo" :src="logoTodo" />
    </div> -->
    <!-- <standart-button @click.prevent="signOut" v-if="loggedIn">Sign out</standart-button>
    <standart-button :href="'/login'" v-else>Login</standart-button>
    <standart-button :href="'/register'">Register</standart-button> -->
    <div class="top-header__link-block">
      <standart-link to="/">Список задач</standart-link>
      <standart-link to="/note-list">Создать задачу</standart-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import logoTodo from "@/assets/logoTodo.png";

export default {
  name: "top-header",
  data() {
    return {
      logoTodo,
      loggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  methods: {
    async signOut() {
      try {
        const signOutData = firebase.auth().signOut();
        console.log(signOutData);

        await signOutData
          .then((response) => {
            console.log(response);

            this.$router.replace({ name: "login" });
          })
          .catch((response) => {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top-header {
  /* max-width: 530px; */
  /* max-width: 530px; */
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
  background-color: #5cc95c;
  padding: 12px 0px;
  z-index: 1;
  box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.037),
    0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.053),
    0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.065),
    0px 1.6px 6px -2px rgba(0, 0, 0, 0.077),
    0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.093),
    0px 7px 27px -2px rgba(0, 0, 0, 0.13);
  &__link-block {
    display: flex;
    max-width: 530px;
    gap: 5px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0px 10px;
  }
  &__logo-block {
    position: absolute;
    left: 50px;
    top: 6px;
    & .logo {
      width: 52px;
      filter: drop-shadow(2px 2px 4px #00000078);
    }
  }
  // max-width: 330px;
  // margin-top: 20px;
}
</style>
