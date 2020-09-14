<template>
  <header :class="{fluidMenu: fluidMenu}">
    <ul>
      <li @click="scrollToElement('top')">Home</li>
      <li @click="scrollToElement(0)">About me</li>
      <li @click="scrollToElement(1)">Work and education</li>
      <li @click="scrollToElement(2)">Certificates</li>
      <li @click="scrollToElement(3)">Contact</li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      fluidMenu: false,
    };
  },
  methods: {
    scrollToElement(elementPosition) {
      elementPosition === "top"
        ? window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        : "";
      let element = document.getElementsByClassName("container-wrapper")[
        elementPosition
      ];
      element.scrollIntoView({ behavior: "smooth" });
    },
    handleMenuShow(event) {
      let firstElement = document.getElementsByClassName(
        "container-wrapper"
      )[0];
      if (window.pageYOffset > firstElement.offsetTop) {
        this.fluidMenu = true;
      } else {
        this.fluidMenu = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleMenuShow);
  },
};
</script>

<style lang="scss">
.fluidMenu {
  position: fixed;
  transform: translateY(50px);
  z-index: 1;
  top: -52px;
  bottom: unset;
  transition: transform 0.2s linear;
}
header {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: left;
  font-size: 17px;
  background-color: #1d1e22;
  border-bottom: 1px solid #d4d4dc;
  color: #d4d4dc;

  ul {
    li {
      padding-left: 20px;
      &:hover {
        color: #feda6a;
        cursor: pointer;
      }
    }
  }
}
</style>