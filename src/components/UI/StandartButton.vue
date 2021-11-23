<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'standart-button', 
  props: {
    href: {
      type: String,
      default: "/home"
    },
    hrefText: {
      type: String,
      default: "Домой"
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background: #5cc95c;
  box-sizing: border-box;
  width: 100%;
  padding: 2px 10px;
  text-align: center;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #fff;
  border-radius: 3px;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  min-width: 50px;
  // box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.014),
  //   0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.02),
  //   0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.025),
  //   0px 1.6px 6px -2px rgba(0, 0, 0, 0.03),
  //   0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.036),
  //   0px 7px 27px -2px rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.037),
      0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.053),
      0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.065),
      0px 1.6px 6px -2px rgba(0, 0, 0, 0.077),
      0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.093),
      0px 7px 27px -2px rgba(0, 0, 0, 0.13);
  }
}
</style>