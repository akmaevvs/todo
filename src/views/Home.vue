<template>
  <div class="home">
    <h2>Добро пожаловать в Список задач!</h2>
    <div class="all-tasks" v-if="taskGroup.length > 0">
      <task-group-template
        class="task-group"
        v-for="group in taskGroup"
        :key="group.id"
        :group="group"
        @delete-task="deleteTask"
      />
      <standart-link class="link--plus" to="/note-list">+</standart-link>
    </div>
    <div v-else class="add-tasks-block">
      <p class="add-tasks-block__text">
        Создайте группу и добавьте в нее задачи
      </p>
      <standart-link class="add-tasks-block__link link--plus" to="/note-list"
        >+</standart-link
      >
    </div>
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
  methods: {
    deleteTask(id) {
      console.log("home", id);
      this.$emit("delete-task", id);
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
.add-tasks-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 0px 10px;
}
</style>
