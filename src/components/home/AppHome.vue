<template>
  <div class="wrap-banner">
    <div class="main-title">
      <h1 data-aos="ZoomInUp1" data-aos-delay="4000">
        Hello my name is
        <span class="name">Yuliyan Ivanov</span>,
      </h1>
      <h2 data-aos="ZoomInUp2">I'm a frontend web developer.</h2>
      <a data-aos="ZoomInUp2" class="button" @click="scrollToElement()">
        <span class="learn-more">Learn More About me</span>
        <span class="arrowhead">&#10148;</span>
      </a>
    </div>

    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <Header />
  </div>
</template>

<script>
import Header from "../layout/AppHeader";

export default {
  components: {
    Header,
  },
  methods: {
    scrollToElement() {
      let element = document.getElementsByClassName("container-wrapper")[0];
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style src="./AppHome.scss" scoped lang="scss"/>
