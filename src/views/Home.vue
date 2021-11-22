<template>
  <div class="home">
    <h2>Добро пожаловать в Список дел!</h2>
    <p>Создайте группу и добавьте в нее задачи</p>
{{tasks}}
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  data() {
    return {
      tasks: ""
    }
  },
  components: {},
  mounted() {
    if (localStorage) {
      this.tasks = JSON.parse(localStorage.getItem('taskGroup'))
    }
  },
  watch: {
    // deep: true,
    // localStorage: {
    //   tasks = localStorage.getItem('taskGroup')
    // }
  }
};
</script>

<style lang="scss" scoped>
.home {
}
</style>


