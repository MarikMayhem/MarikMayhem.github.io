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

<style src="./AppFooter.scss" scoped lang="scss" />
