<template>
  <div class="top-header">
    <!-- <standart-button @click.prevent="signOut" v-if="loggedIn">Sign out</standart-button>
    <standart-button :href="'/login'" v-else>Login</standart-button>
    <standart-button :href="'/register'">Register</standart-button> -->
    <standart-link to="/">Note List</standart-link>
    <standart-link to="/note-list">Create Note</standart-link>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
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
  display: flex;
  gap: 5px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 250px;
  margin-top: 20px;
  
}
</style>
