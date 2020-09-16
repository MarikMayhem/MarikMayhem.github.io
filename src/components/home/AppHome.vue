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

<style lang="scss">
@mixin phone {
  @media (max-width: 415px) {
    @content;
  }
}
h1,
h2 {
  font-size: xxx-large;
  margin: 14px;
  @include phone {
    font-size: xx-large;
  }
}
h1 {
  color: #d4d4dc;
}

.button {
  display: flex;
  transition: background-color 0.5s;
  border: 1px solid white;
  padding: 16px;
  margin: 24px auto;
  width: max-content;
  text-align: initial;
  color: white;
  text-decoration: none;
  cursor: pointer;
  .learn-more {
    padding-right: 10px;
    align-self: center;
  }
  .arrowhead {
    transition: transform 0.5s;
    display: inline-block;
  }
  &:hover {
    background-color: dodgerblue;
    .arrowhead {
      transform: rotate(90deg);
    }
  }
}

.name {
  font-weight: bold;
  color: #feda6a;
}

[data-aos="ZoomInUp1"] {
  --webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
[data-aos="ZoomInUp2"] {
  --webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes zoomInUp {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.wrap-banner {
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;
  background: linear-gradient(rgba(57, 63, 77, 0.5), rgba(29, 30, 34, 0.5)),
    url("../../assets/starry-field.jpg") no-repeat fixed center;
  background-size: cover;
}
.particles-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

#particles-js {
  width: 100%;
  height: 109vh;
}
.main-title {
  top: 25%;
  color: #fff;
  width: 100%;
  position: absolute;
}
</style>