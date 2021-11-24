<template>
<transition name="fade">
<div>

  <div class="inner-task-group">
    <div class="button-block">
      <button @click="changeTask" class="task-group-button task-group-button--change">&#9998;</button>
      <button @click="confirmDeleteTaskGroup" class="task-group-button task-group-button--delete">&#10006;</button>

    </div>
    <div
      class="title-block"
      :style="`background-color:${group.backgroundColor}; color:${group.textColor}`"
    >
      <p class="title-block__title"
      :style="`color:${group.textColor}`"
      
      >
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
    </div>
  </div>
  <transition name="fade">
    <confirm-modal :show="showConfirmModal" @close-confirm-modal="closeConfirmModal" @apply-confirm="deleteTaskGroup"/>
  </transition>
</div>
</transition>
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
      showConfirmModal: false,
      groupId: "",
    }
  },
  methods: {
    confirmDeleteTaskGroup() {
      this.groupId = this.group.id
      this.showConfirmModal = !this.showConfirmModal

    },
    changeTask() {
      this.$router.push(`/note-list/${this.group.id}`)
    },
    deleteTaskGroup() {
      // this.showConfirmModal = !this.showConfirmModal
      this.$emit('delete-task', this.groupId)


    },
    applyDelete() {
      this.confirmValue = true
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
  top: 13px;
  right: 13px;
  display: flex;
  gap: 10px;
  & .task-group-button {
    background: #ffffff5c;
    display: block;
    width: 25px;
    height: 25px;
    font-size: 25px;
    cursor: pointer;
    line-height: 25px;
    border-radius: 3px;
    transition: all .2s;
    &:hover {
    background: #ffffff8f;
    box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.037),
      0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.053),
      0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.065),
      0px 1.6px 6px -2px rgba(0, 0, 0, 0.077),
      0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.093),
      0px 7px 27px -2px rgba(0, 0, 0, 0.13);

    }
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
  height: auto;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 1.2px 0.7px 2.2px rgba(0, 0, 0, 0.02),
    2.8px 1.8px 5.3px rgba(0, 0, 0, 0.028),
    5.3px 3.4px 10px rgba(0, 0, 0, 0.035), 9.4px 6px 17.9px rgba(0, 0, 0, 0.042),
    17.5px 11.3px 33.4px rgba(0, 0, 0, 0.05), 42px 27px 80px rgba(0, 0, 0, 0.07);

  .title-block {
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    background: $default-color;
    border-radius: 5px 5px 0px 0px;

    &__title {
      font-size: 27px;
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
        min-height: 32px;

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
    justify-content: center;
    align-items: center;
  }
}

.container-complete {
  display: block;
  position: relative;
  padding-left: 35px;
  align-self: baseline;
  cursor: pointer;
  font-size: 12px;
  user-select: none;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: #8f8f8f;
    }
  }
  & .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50px;
    color: #eee;
    border: 2px solid #858585;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
}
</style>
