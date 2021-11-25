<template>
  <div class="top-header">
    <div class="top-header__link-block">
      <standart-link to="/">Список задач</standart-link>
      <standart-link to="/create-note">Создать задачу</standart-link>
    </div>
  </div>
</template>

<script>
import logoTodo from "@/assets/logoTodo.png";

export default {
  name: "top-header",
  data() {
    return {
      logoTodo,
      loggedIn: false,
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.top-header {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0 auto;
  background-color: #5cc95c;
  padding: 12px 0px;
  z-index: 1;
  box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.037),
    0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.053),
    0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.065),
    0px 1.6px 6px -2px rgba(0, 0, 0, 0.077),
    0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.093),
    0px 7px 27px -2px rgba(0, 0, 0, 0.13);
  &__link-block {
    display: flex;
    max-width: 530px;
    gap: 5px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0px 10px;
  }
  &__logo-block {
    position: absolute;
    left: 50px;
    top: 6px;
    & .logo {
      width: 52px;
      filter: drop-shadow(2px 2px 4px #00000078);
    }
  }
}
</style>
