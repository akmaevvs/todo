<template>
  <top-header />
  <router-view />
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";

export default {
  components: { TopHeader }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background: #fafafa;
}
input,
button {
  outline: none;
  border: none;
  background: none;
  padding: 0;
}
input::placeholder {
  font-family: Gotham Pro;
  color: #fff;
}
#app {
  font-family: Gotham Pro, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
