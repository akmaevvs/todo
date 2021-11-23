<template>
  <div class="modal modal-inner" v-if="show" @click.self="close">
    <div class="modal-content">
      <span class="modal-cross" @click="close">&#10006;</span>
      <p>
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "standart-modal-info",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: "Ошибка!",
    },
  },
  methods: {
    close() {
      this.$emit('close-standart-modal-info')
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  &-inner {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #0000009a;
  }

  &-content {
    width: 100%;
    position: relative;
    max-width: 400px;
    background: #fff;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 1.2px 0.7px 2.2px rgba(0, 0, 0, 0.02),
      2.8px 1.8px 5.3px rgba(0, 0, 0, 0.028),
      5.3px 3.4px 10px rgba(0, 0, 0, 0.035),
      9.4px 6px 17.9px rgba(0, 0, 0, 0.042),
      17.5px 11.3px 33.4px rgba(0, 0, 0, 0.05),
      42px 27px 80px rgba(0, 0, 0, 0.07);
  }
  &-cross {
    /* top: 20px; */
    /* align-self: end; */
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 15px;
  }
}
</style>
