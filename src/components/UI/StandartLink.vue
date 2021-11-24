<template>
  <router-link class="link">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "standart-link",
  props: {
    href: {
      type: String,
      default: "/",
    },
    hrefText: {
      type: String,
      default: "Home",
    },
  },
};
</script>

<style lang="scss" scoped>
.link {
  // background: none;
  // box-sizing: border-box;
  // width: 100%;
  // padding: 20px 10px;
  // text-align: center;
  // height: 22px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // align-content: center;
  // color: #0e7e00;
  // transition: all 0.2s;
  // cursor: pointer;
  // text-decoration: none;
  // border-bottom: 2px solid;

  box-sizing: border-box;
  width: 100%;
  padding: 20px 10px;
  text-align: center;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #2c3e4f;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  background-color: #ffffff2e;
  /* border-bottom: 2px solid; */
  border-radius: 3px;

  &.router-link-active {
    background-color: #ffffff7e;
    // color: #5cc95c;
    box-shadow: 0px 10px 10px -10px #5cc95c;
  }
  &:hover {
    background-color: #ffffff7e;
    // color: #5cc95c;
    box-shadow: 0px 6px 10px -6px #5cc95c;
  }
  &--plus {
    background: none;
    border: 2px solid;
    border-radius: 3px;
    font-size: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: auto;
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
    color: #5cc95ce0;
    box-shadow: 0px 0.2px 0.7px -2px rgba(0, 0, 0, 0.037),
      0px 0.5px 1.8px -2px rgba(0, 0, 0, 0.053),
      0px 0.9px 3.4px -2px rgba(0, 0, 0, 0.065),
      0px 1.6px 6px -2px rgba(0, 0, 0, 0.077),
      0px 2.9px 11.3px -2px rgba(0, 0, 0, 0.093),
      0px 7px 27px -2px rgba(0, 0, 0, 0.13);
    &:hover {
      color: #5cc95c;
      box-shadow: 0px 0.2px 0.7px 0px rgba(0, 0, 0, 0.037),
        0px 0.5px 1.8px 0px rgba(0, 0, 0, 0.053),
        0px 0.9px 3.4px 0px rgba(0, 0, 0, 0.065),
        0px 1.6px 6px 0px rgba(0, 0, 0, 0.077),
        0px 2.9px 11.3px 0px rgba(0, 0, 0, 0.093),
        0px 7px 27px 0px rgba(0, 0, 0, 0.13);
    }
  }
}
</style>
