<template>
  <top-header />
  <router-view
    class="content"
    :taskGroup="data"
    @change-tasks-event="changeTasks"
    v-on:save-tasks-event="saveTasks"
    v-on:delete-task="deleteTask"
  />
  <bot-footer />
</template>

<script>
export default {
  mounted() {
    if (localStorage.taskGroup) {
      this.data = JSON.parse(localStorage.taskGroup);
    }
  },
  watch: {
    data: {
      deep: true,
      handler(val) {
        localStorage.taskGroup = JSON.stringify(val);
      },
    },
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    changeTasks(newTaskGroup) {
      this.data = JSON.parse(
        JSON.stringify(
          this.data.filter((item) => {
            if (item.id == newTaskGroup.id) {
              Object.keys(item).forEach((key) => {
                item[key] = newTaskGroup[key];
              });
              return item;
            } else {
              return item;
            }
          })
        )
      );
    },
    saveTasks(newTaskGroup) {
      this.data.push(newTaskGroup);
    },
    deleteTask(id) {
      this.data = this.data.filter((item) => {
        if (item.id != id) {
          return item;
        }
      });
    },
  },
};
</script>

<style lang="scss">
:root {
  --default-text-color: #fff;
  --tasks-block-border-color: #dfdfdf;
  --default-background-color: #5cc95c;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@font-face {
  font-family: Gotham Pro;
  src: url("./assets/GOTHAPROREG.OTF");
}

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

  margin-bottom: 40px;
}
.content {
  margin-bottom: 60px;
  padding: 0px 10px;
}
</style>
