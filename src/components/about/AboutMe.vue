<template>
  <div class="container-wrapper">
    <!-- Gets transition type and transition delay -->
    <h3 data-aos="fade-up" data-aos-delay="200" class="head-title">About Me</h3>
    <div data-aos="fade-down" class="change-tabs">
      <ul>
        <li
          :class="(toggle === 'professional')?'highlight-color':''"
          @click="toggle = 'professional'"
        >Professional</li>
        <li
          :class="(toggle === 'personal')?'highlight-color':''"
          @click="toggle = 'personal'"
        >Personal</li>
      </ul>
    </div>
    <section v-if="toggle === 'personal'" class="inner-container-section">
      <div data-aos="fade-right" data-aos-delay="500" class="left personal">
        <img class="personal-img" src="../../assets/images/personal/rings.png" alt />
        <p
          class="my-description"
        >In my free time i clear my mind up by doing Calistenics. Bodyweight training is great and enjoyable. The way i train is by using the olympic rings.</p>
      </div>
      <div data-aos="fade-left" data-aos-delay="500" class="right personal">
        <div class="shape-outer-circle circle personal-img">
          <div class="shape-inner-circle circle"></div>
        </div>
        <p
          class="my-description"
        >I enjoy the nature alot. Whenever i can i go to the mountain or my favourite the sea. I also like animals and in part cats.</p>
      </div>
    </section>

    <section v-if="toggle === 'professional'" class="inner-container-section">
      <div data-aos="fade-right" data-aos-delay="500" class="left description">
        <div class="shape-outer parallelogram">
          <div class="shape-inner parallelogram"></div>
        </div>
        <p
          class="my-description"
        >I really strive for things that interest me. In my professional career that new thing is Vue.js. I enjoy working with it and getting challenged at every day basis. I also enjoy JavaScript alot and scss styling. Animations are also a new thing that got my interest.</p>
      </div>

      <div data-aos="fade-left" data-aos-delay="500" class="right">
        <p>My current Stack</p>
        <div class="stacks">
          <img class="stack" src="../../assets/images/stack/vuejs.png" alt="vue" />
          <img class="stack" src="../../assets/images/stack/js.png" alt="js" />
          <img class="stack" src="../../assets/images/stack/html5.png" alt="html" />
          <img class="stack" src="../../assets/images/stack/CSS3.png" alt="css" />
          <img class="stack" src="../../assets/images/stack/sass.png" alt="sass" />
          <img class="stack" src="../../assets/images/stack/git.png" alt="git" />
        </div>
        <div class="second-stacks">
          <img class="second-stack" src="../../assets/images/stack/webpack.png" alt="webpack" />
          <img class="second-stack" src="../../assets/images/stack/babel.png" alt="babel" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      toggle: "professional",
    };
  },
};
</script>

<style src="./AboutMe.scss" scoped lang="scss" />
