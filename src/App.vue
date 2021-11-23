<template>
  <top-header />
  <router-view :taskGroup="data" v-on:change-tasks-event="changeTasks" />
</template>

<script>

export default {
  mounted() {
    if (localStorage.taskGroup) {
      console.log("asdfasdf", localStorage.taskGroup);
      this.data = JSON.parse(localStorage.taskGroup)
    } else {
      console.log("basd");

    }
  },
  watch: {
    data: {
      deep: true,
      handler(val) {
        localStorage.taskGroup = JSON.stringify(val);

      }
    }
  },
  data() {
    return {
      data: []
    }
  },
  methods: {
    changeTasks(newTaskGroup) {
      this.data.push(newTaskGroup)
    }
  },
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
