<template>
<div>

  <div class="inner-task-group">
    <div class="button-block">
      <button class="task-group-button task-group-button--change">&#9998;</button>
      <button @click="deleteTaskGroup" class="task-group-button task-group-button--delete">&#10006;</button>

    </div>
    <div
      class="title-block"
      :style="`background-color:${group.backgroundColor}; color:${group.textColor}`"
    >
      <p class="title-block__title">
        {{ group.title }}
      </p>
    </div>
    <div class="inner-content">
      <ul class="tasks-block">
        <li
          class="tasks-block__li-task"
          v-for="task in group.tasks"
          :key="task.id"
        >
          <label class="container-complete" :for="task.id">
            <input
              type="checkbox"
              :id="task.id"
              :name="task.id"
              v-model="task.complete"
            />
            <span class="checkmark">
              <template v-if="task.complete">&#10004;</template>
            </span>
          </label>
          <input
            class="tasks-block__input-task"
            type="text"
            v-model="task.title"
            placeholder="Введите задачу"
            disabled
          />
        </li>
      </ul>
      <!-- <div class="add-task-block">
              <standart-button
                @click.prevent="addTask()"
                :style="`background-color:${group.backgroundColor}; color:${group.textColor}`"
                >Добавить задачу</standart-button
              >
              <standart-button
                @click.prevent="saveTask()"
                :style="`background-color:${group.backgroundColor}; color:${group.textColor}`"
                >Сохранить группу задач</standart-button
              >
            </div> -->
    </div>
  </div>
  <transition name="fade">
    <confirm-modal :show="showConfirmModal" @close-confirm-modal="closeConfirmModal"/>
  </transition>
</div>
</template>

<script>
export default {
  name: "task-group-template",
  props: {
    group: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      confirmValue: null,
      showConfirmModal: false,
    }
  },
  methods: {
    deleteTaskGroup() {
      this.showConfirmModal = !this.showConfirmModal
    },
    closeConfirmModal() {
      this.showConfirmModal = !this.showConfirmModal
    }
  }
};
</script>
<style lang="scss" scoped>
$tasks-block-border-color: #dfdfdf;
$default-color: #5cc95c;
.inner-task-group {
  position: relative;
}
.button-block {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  & .task-group-button {
    background: #ffffff5c;
    display: block;
    width: 30px;
    height: 30px;
    font-size: 30px;
    // color: #fff;
    cursor: pointer;
    line-height: 30px;
    border-radius: 3px;
    &--change {
      color: #424242;
      transform: scaleX(-1);
    }
    &--delete {
      color: #b12424;
    }
  }

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
</style>
