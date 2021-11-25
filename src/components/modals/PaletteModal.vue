<template>
  <transition name="fade">
    <div v-if="show" class="modal-inner" @click.self="showPaletteFunc()">
      <div class="modal-palette">
        <span class="modal-palette__close-modal" @click.self="showPaletteFunc()"
          >&#215;</span
        >
        <h3 class="modal-palette__title">Цвет группы</h3>
        <div class="modal-palette__block-color">
          <span
            v-for="color in palette"
            :key="color"
            class="modal-palette__color"
            :style="`background-color:${color.backgroundColor}; color:${color.textColor}`"
            @click="changeColor(color)"
          ></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "palette-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      palette: [
        {
          backgroundColor: "#5cc95c",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#a52a2a",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#f44336",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#e91e63",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#9c27b0",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#673ab7",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#2196f3",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#03a9f4",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#00bcd4",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#009688",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#4caf50",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#8bc34a",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#cddc39",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#ffc107",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#ff5722",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#795548",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#9e9e9e",
          textColor: "#ffffff",
        },
        {
          backgroundColor: "#607d8b",
          textColor: "#ffffff",
        },
      ],
    };
  },
  methods: {
    showPaletteFunc() {
      this.$emit("close-palette-modal-event");
    },
    changeColor(color) {
      this.$emit("change-color-event", color);
    },
  },
};
</script>
<style lang="scss" scoped>
.modal-inner {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: #00000059;
  padding: 0 10px;
}

.modal-palette {
  position: relative;
  height: auto;
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
  }
  &__block-color {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 20px;
    justify-content: center;
  }

  &__color {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
  &__close-modal {
    cursor: pointer;
    color: #000;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  &__title {
    color: #000;
  }
}
</style>
