<template>
  <div class="note-list">
    <div class="title-info-block">
      <p class="title-info-block__text">
        Введите название группы и добавьте в нее задачи
      </p>
    </div>
    <div class="task-group">
      <div
        class="title-block"
        :style="`background-color:${newTaskGroup.backgroundColor}; color:${newTaskGroup.textColor}`"
      >
        <input
          class="title-block__title"
          type="text"
          placeholder="Название группы"
          :style="`background-color:${newTaskGroup.backgroundColor}; color:${newTaskGroup.textColor}`"
          v-model="newTaskGroup.title"
        />
        <button class="title-block__button-palette" @click="showPaletteFunc()">
          <img
            v-if="paletteDark"
            class="title-block__img-palette"
            :src="paletteImgDark"
          />
          <img v-else class="title-block__img-palette" :src="paletteImg" />
        </button>
        <transition name="fade">
          <div
            v-if="showPaletteVar"
            class="modal-inner"
            @click.self="showPaletteFunc()"
          >
            <div class="modal-palette">
              <span
                class="modal-palette__close-modal"
                @click.self="showPaletteFunc()"
                >&#215;</span
              >
              <h3 class="modal-palette__title">Цвет группы</h3>
              <div class="modal-palette__block-color">
                <span
                  v-for="color in palette"
                  :key="color"
                  class="modal-palette__color"
                  :style="`background-color:${color.backgroundColor}; color:${color.textColor}`"
                  @click="chageColor(color)"
                ></span>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="inner-content">
        <ul class="tasks-block">
          <li
            class="tasks-block__li-task"
            v-for="task in newTaskGroup.tasks"
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
            />
            <span
              class="tasks-block__close-task"
              @click.self="deleteTask(task.id)"
              >&#215;</span
            >
          </li>
        </ul>
        <div class="add-task-block">
          <standart-button
            @click.prevent="addTask()"
            :style="`background-color:${newTaskGroup.backgroundColor}; color:${newTaskGroup.textColor}`"
            >Добавить задачу</standart-button
          >

          <standart-button
            v-if="this.$route.params.taskId"
            @click.prevent="saveChanges()"
            :style="`background-color:${newTaskGroup.backgroundColor}; color:${newTaskGroup.textColor}`"
            >Сохранить изменения по группе</standart-button
          >
          <standart-button
            v-else
            @click.prevent="saveTask()"
            :style="`background-color:${newTaskGroup.backgroundColor}; color:${newTaskGroup.textColor}`"
            >Сохранить группу задач</standart-button
          >
        </div>
      </div>
    </div>
    <transition name="fade">
      <standart-modal-info
        :show="showStandartModalInfo"
        :message="messageStandartModalInfo"
        v-on:close-standart-modal-info="closeStandartModalInfo"
      />
    </transition>
  </div>
</template>

<script>
import paletteImg from "@/assets/palette.png";
import paletteImgDark from "@/assets/paletteDark.png";

class StandartError extends Error {
  constructor(message = "Ошибка") {
    super(message);
    this.name = "StandartError";
  }
}

export default {
  name: "NoteList",
  props: {
    newTaskGroupToChange: {
      default: null,
    },
    taskGroup: {
      default: null,
    },
  },
  watch: {
    // if (localStorage.taskGroup) {
    // }
  },
  data() {
    return {
      paletteDark: false,
      paletteImg,
      paletteImgDark,
      tasks: [],
      showStandartModalInfo: false,
      messageStandartModalInfo: "",
      showPaletteVar: false,
      newTaskGroup: {
        id: this.makeId(),
        title: null,
        tasks: [],
        backgroundColor: "#5cc95c",
        textColor: "#ffffff",
      },
      palette: [
        {
          backgroundColor: "#8a2be2",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#faebd7",
          textColor: "#3f3838",
        },
        {
          backgroundColor: "#a52a2a",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#blueviolet",
          textColor: "#3f3838",
        },
        {
          backgroundColor: "#blueviolet",
          textColor: "#3f3838",
        },
        {
          backgroundColor: "#blueviolet",
          textColor: "#3f3838",
        },
      ],
    };
  },
  beforeMount() {
    console.log(this.taskGroup);
    document
      .querySelector(":root")
      .style.setProperty("--default-text-color", "#ffffff");

    if (this.$route.params.taskId) {
      console.log("yes");
      console.log(this.$route.params.taskId);
      this.newTaskGroup = this.taskGroup.filter((item) => {
        if (item.id == this.$route.params.taskId) {
          return item;
        }
      })[0];
      this.newTaskGroup = JSON.parse(JSON.stringify(this.newTaskGroup));
      console.log(this.newTaskGroup);
    } else {
      console.log("no");
      this.newTaskGroup = {
        id: this.makeId(),
        title: null,
        tasks: [],
        backgroundColor: "#5cc95c",
        textColor: "#ffffff",
      };
    }
  },
  methods: {
    closeStandartModalInfo() {
      this.showStandartModalInfo = !this.showStandartModalInfo;
    },
    chageColor(color) {
      if (color.textColor === "#3f3838") {
        this.paletteDark = true;
      } else {
        this.paletteDark = false;
      }
      document
        .querySelector(":root")
        .style.setProperty("--default-text-color", color.textColor);
      this.newTaskGroup.backgroundColor = color.backgroundColor;
      this.newTaskGroup.textColor = color.textColor;
      this.showPaletteVar = !this.showPaletteVar;
    },
    showPaletteFunc() {
      this.showPaletteVar = !this.showPaletteVar;
    },
    makeId() {
      let text = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    deleteTask(id) {
      this.newTaskGroup.tasks = this.newTaskGroup.tasks.filter((task) => {
        if (task.id != id) {
          return task;
        }
      });
    },
    addTask() {
      const id = this.makeId();
      const newTask = {
        complete: false,
        title: "",
        id,
      };

      this.newTaskGroup.tasks.push(newTask);

      // console.log(this.newTaskGroup);
    },
    saveChanges() {
      try {
        if (this.newTaskGroup.title && this.newTaskGroup.tasks.length > 0) {
          this.$emit("change-tasks-event", this.newTaskGroup);

          throw new StandartError("Группа успешно обновлена!");
        } else {
          throw new StandartError("Проверьте данные!");
        }
      } catch (err) {
        this.showStandartModalInfo = !this.showStandartModalInfo;
        this.messageStandartModalInfo = err.message;
      }
    },
    saveTask() {
      // console.log(this.newTaskGroup);
      try {
        if (this.newTaskGroup.title && this.newTaskGroup.tasks.length > 0) {
          this.$emit("save-tasks-event", this.newTaskGroup);
          this.newTaskGroup = {
            id: this.makeId(),
            title: null,
            tasks: [],
            backgroundColor: "#5cc95c",
            textColor: "#ffffff",
          };

          throw new StandartError("Группа успешно добавлена!");
        } else {
          throw new StandartError("Проверьте данные!");
        }
      } catch (err) {
        this.showStandartModalInfo = !this.showStandartModalInfo;
        this.messageStandartModalInfo = err.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.note-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.title-info-block {
  &__text {
    font-size: 18px;
    font-weight: bold;
  }
}
.container-complete {
  display: block;
  position: relative;
  padding-left: 35px;
  // margin-bottom: 12px;
  align-self: baseline;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
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

  /* When the checkbox is checked, add a blue background */

  /* Create the checkmark/indicator (hidden when not checked) */

  /* Show the checkmark when checked */

  /* Style the checkmark/indicator */
}

$default-text-color: #fff;
$tasks-block-border-color: #dfdfdf;
$default-color: #5cc95c;
.modal-inner {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000059;
}

.modal-palette {
  height: 350px;
  width: 350px;
  display: flex;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 1.2px 0.7px 2.2px rgba(0, 0, 0, 0.02),
    2.8px 1.8px 5.3px rgba(0, 0, 0, 0.028),
    5.3px 3.4px 10px rgba(0, 0, 0, 0.035), 9.4px 6px 17.9px rgba(0, 0, 0, 0.042),
    17.5px 11.3px 33.4px rgba(0, 0, 0, 0.05), 42px 27px 80px rgba(0, 0, 0, 0.07);
  flex-direction: column;
  &__close-modal {
    cursor: pointer;
  }
  &__block-color {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 20px;
  }

  &__color {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
  &__close-modal {
    align-self: end;
    color: #000;
  }
  &__title {
    color: #000;
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
    padding: 10px 20px;
    background: $default-color;
    border-radius: 5px 5px 0px 0px;

    &__title {
      font-size: 27px;
      color: #fff;
      width: 100%;
      &::placeholder {
        font-family: Gotham Pro;
        color: var(--default-text-color);
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
