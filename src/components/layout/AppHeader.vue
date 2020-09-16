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

<style lang="scss">
@mixin phone {
  @media (max-width: 415px) {
    @content;
  }
}
@mixin tablet {
  @media (max-width: 1024px) {
    @content;
  }
}
.burger-button {
  display: none;
  @include phone {
    display: block;
    font-size: 52px;
    padding: 0;
    color: #d4d4dc;
    margin: 0 14px 9px;
    margin-left: auto;
    width: fit-content;
  }
}
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
  hr {
    display: none;
    @include phone {
      display: block;
      margin: 0;
      color: #d4d4dc;
    }
  }
  @include phone {
    position: fixed;
    bottom: unset;
    z-index: 1;
  }

  ul {
    display: block;
    @include phone {
      max-height: 0;
      transition: max-height 0.5s ease-out;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 0;
    }
    li {
      padding-left: 20px;
      margin: 7px 0;

      &:hover {
        color: #feda6a;
        cursor: pointer;
      }
    }
  }
  .burgerUl {
    max-height: 500px;
    transition: max-height 0.5s ease-in;
  }
}
</style>