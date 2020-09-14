<template>
  <div class="footer-wrapper">
    <button class="back-to-top" @click="backToTop()">&#8682;</button>
    <div class="social-media">
      <!-- <img class="social-icon" src="../../assets/images/social-media/github.png" alt="github" />
      <img class="social-icon" src="../../assets/images/social-media/linkedin.png" alt="linkedin" />-->
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
    background-color: #feda6a;
    font-size: 40px;
    color: #393f4d;
    position: absolute;
    bottom: 28px;
  }
}
</style>