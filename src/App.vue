<template>
  <top-header />
  <router-view :taskGroup = "data" />
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";

export default {
  components: { TopHeader },
  mounted() {
    if (localStorage.taskGroup) {
      this.data = localStorage.taskGroup
    }
  },
  watch: {
    data(newData) {
      localStorage.taskGroup = newData;
    }
  },
  data() {
    return {
      data: null
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Gotham Pro;

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
  color: #fff;
}
#app {
  font-family: Gotham Pro, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}
</style>
