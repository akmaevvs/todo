<template>
  <div class="home">
    <h2>Добро пожаловать в Список дел!</h2>
    <p>Создайте группу и добавьте в нее задачи</p>
{{taskGroup}}
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  props: {
    taskGroup: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
    }
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.home {
}
</style>


