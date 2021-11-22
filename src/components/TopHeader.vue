<template>
  <div class="loggin-info">
    <standart-button @click.prevent="signOut" v-if="loggedIn">Sign out</standart-button>
    <standart-button :href="'/login'" v-else>Login</standart-button>
    <standart-button :href="'/register'">Register</standart-button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      loggedIn: false
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
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
          .then(response => {
            console.log(response);

            this.$router.replace({ name: "login" });
          })
          .catch(response => {
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.loggin-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100px;
  box-sizing: border-box;
  &__button {
    background: #5cc95c;
    box-sizing: border-box;
    width: 100%;
    padding: 2px 10px;
    text-align: center;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: #fff;
    border-radius: 3px;
    transition: all 0.2s;
    cursor: pointer;
    text-decoration: none;
    // box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.014),
    //   0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.02),
    //   0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.025),
    //   0px 1.6px 6px -2px rgba(0, 0, 0, 0.03),
    //   0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.036),
    //   0px 7px 27px -2px rgba(0, 0, 0, 0.05);
    &:hover {
      box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.037),
        0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.053),
        0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.065),
        0px 1.6px 6px -2px rgba(0, 0, 0, 0.077),
        0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.093),
        0px 7px 27px -2px rgba(0, 0, 0, 0.13);
    }
  }
}
</style>