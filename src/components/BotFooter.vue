<template>
  <div class="bot-footer">
    <p class="bot-footer__author">made by Victor Akmaev</p>
    <a class="bot-footer__link" target="_blank" href="https://github.com/akmaevvs/todo">source</a>
  </div>
</template>

<script>
export default {
  name: "bot-footer",
};
</script>

<style lang="scss" scoped>
.bot-footer {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  padding: 20px;
  background-color: #424242;
  justify-content: space-evenly;
  color: #fff;
  gap: 40px;
  align-items: center;

  &__link {
    color: #5cc95c;
  }
}
</style>
