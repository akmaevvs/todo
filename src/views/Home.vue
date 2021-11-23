<template>
  <div class="home">
    <h2>Добро пожаловать в Список дел!</h2>
    <div class="all-tasks" v-if="taskGroup.length > 0">
      <task-group-template
        class="task-group"
        v-for="group in taskGroup"
        :key="group.id"
        :group="group"
      >
      </task-group-template>
    </div>
    <p v-else>Создайте группу и добавьте в нее задачи</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  props: {
    taskGroup: {
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.all-tasks {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
</style>
