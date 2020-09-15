<template>
  <div class="footer-wrapper">
    <button class="back-to-top" @click="backToTop()">&#8682;</button>
    <div class="social-media">
      <a href="https://github.com/MarikMayhem" target="_blank">
        <img class="social-icon" src="../../assets/images/social-media/github.png" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/yuliyan-ivanov-07543a137/" target="_blank">
        <img class="social-icon" src="../../assets/images/social-media/linkedin.png" alt="linkedin" />
      </a>
    </div>
    <p>Yuliyan Ivanov &#169;2020</p>
  </div>
</template>

<script>
export default {
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.footer-wrapper {
  position: relative;
  border-top: 1px solid #d4d4dc;
  background-color: #393f4d;
  .back-to-top {
    cursor: pointer;
    border: none;
    font-size: 40px;
    height: 50px;
    border-radius: 6px;
    color: #393f4d;
    position: absolute;
    top: -61px;
    left: 0;
    right: 0;
    margin: auto;

    &:hover {
      background-color: #feda6a;
      transition: background-color, 0.5s;
    }
  }
  .social-media {
    margin: 30px;
    .social-icon {
      height: 40px;
      cursor: pointer;
    }
  }
}
</style>