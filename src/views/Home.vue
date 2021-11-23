<template>
  <div class="home">
    <h2>Добро пожаловать в Список дел!</h2>
    <p>Создайте группу и добавьте в нее задачи</p>
    <div class="all-tasks" v-if="taskGroup.length > 0">
      <task-group-template
        class="task-group"
        v-for="group in taskGroup"
        :key="group.id"
        :group="group"

      >
      </task-group-template>
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$tasks-block-border-color: #dfdfdf;
$default-color: #5cc95c;
.all-tasks {
  display: flex;
}
.task-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  // border: 1px solid #f1f1f1;
  background: #fff;
  border-radius: 5px;
  // padding: 40px;
  box-sizing: border-box;
  box-shadow: 1.2px 0.7px 2.2px rgba(0, 0, 0, 0.02),
    2.8px 1.8px 5.3px rgba(0, 0, 0, 0.028),
    5.3px 3.4px 10px rgba(0, 0, 0, 0.035), 9.4px 6px 17.9px rgba(0, 0, 0, 0.042),
    17.5px 11.3px 33.4px rgba(0, 0, 0, 0.05), 42px 27px 80px rgba(0, 0, 0, 0.07);

  .title-block {
    display: flex;
    justify-content: center;
    padding: 20px;
    background: $default-color;
    border-radius: 5px 5px 0px 0px;

    &__title {
      font-size: 30px;
      color: #fff;
      width: 100%;
      &::placeholder {
        font-family: Gotham Pro;
        color: #fff;
      }
    }
    &__img-palette {
      width: 30px;
      height: auto;
      color: #00000078;
      filter: drop-shadow(5px 5px 6px #00000078);
      cursor: pointer;
    }
  }

  .inner-content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background-color: #e9e9e9;
    border-radius: 0px 0px 5px 5px;

    .tasks-block {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid $tasks-block-border-color;
      border-radius: 3px;
      background-color: white;
      &__li-task {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: 1px solid $tasks-block-border-color;
        border-top: 1px solid transparent;
        padding: 5px 10px;

        &:last-child {
          border-bottom-color: transparent;
        }
      }
      &__input-task {
        width: 100%;
        &::placeholder {
          color: #7e7e7e;
        }
      }
      &__close-task {
        cursor: pointer;
      }
    }
  }

  .add-task-block {
    align-content: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* width: fit-content; */
    justify-content: center;
    align-items: center;
  }
}
.home {
}
</style>
