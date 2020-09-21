<template>
  <header :class="{fluidMenu: fluidMenu}">
    <a class="burger-button" @click="burgerMenu = !burgerMenu">&#9776;</a>
    <hr />
    <ul :class="{burgerUl: burgerMenu}">
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
      burgerMenu: false,
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
      this.burgerMenu = false;
    },
    handleMenuShow(event) {
      let firstElement = document.getElementsByClassName(
        "container-wrapper"
      )[0];

      if (
        window.pageYOffset > firstElement.offsetTop &&
        window.screen.availWidth > 415
      ) {
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

<style src="./AppHeader.scss" scoped lang="scss" />
