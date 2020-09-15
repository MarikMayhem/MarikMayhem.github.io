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

  mounted() {
    console.log(this.$store.state);
  },
  data() {
    return {
      toggle: "professional",
    };
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
.personal-img {
  height: 60%;
  width: 45%;
  margin: 5% auto;
}
//GLOBAL STYLE
.container-wrapper {
  letter-spacing: 0;
  background: linear-gradient(
    to right,
    rgba(57, 63, 77, 1),
    rgba(29, 30, 34, 1)
  );
  background-size: cover;
  color: #d4d4dc;
  padding-bottom: 100px;
  //Work And Education
  &:nth-child(3) {
    background: linear-gradient(to right, #1d1e22, #393f4d, #feda6a, #feda6a);
    font-weight: bold;
    font-size: 19px;
    border-top: 5px solid #d4d4dc;
    border-bottom: 5px solid #d4d4dc;
    @include tablet {
      background: linear-gradient(#1d1e22, #393f4d, #feda6a, #feda6a);
    }
  }
  .head-title {
    color: #feda6a;
    font-size: 50px;
    margin-top: 6%;
    margin-bottom: 2%;
  }
  .inner-container-section {
    font-family: "Homizio-Medium";
    max-width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    @include tablet {
      flex-direction: column;
    }
    .description {
      margin-top: 10%;
      text-align: left;
      flex-wrap: wrap;
      .my-description {
        font-size: 24px;
        width: 55%;
        margin: 10px auto;
        @include tablet {
          width: 90%;
        }
      }
    }
    .personal {
      display: flex;
      flex-direction: column;
      font-size: 21px;
    }
    .left {
      display: flex;
      width: 50%;

      @include tablet {
        margin: 0 auto;
        width: 90%;
      }
    }
    .right {
      width: 45%;
      margin-left: auto;
      margin: auto;
      @include tablet {
        width: 90%;
        margin: 0 auto;
      }

      .stacks {
        display: flex;
        flex-wrap: wrap;
        .stack {
          width: 20%;
          padding: 10px;
          margin: auto;
        }
      }
      .second-stacks {
        display: flex;
        flex-wrap: wrap;
        .second-stack {
          width: 40%;
          padding: 10px;
          margin: auto;
        }
      }
    }

    .parallelogram {
      -webkit-clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    }
    .circle {
      -webkit-clip-path: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);
    }
    .shape-inner-circle {
      height: calc(200px + 4vw);
      width: calc(200px + 4vw);
      background: url(../../assets/images/personal/me.jpg) no-repeat center;
      background-size: cover;
      margin: auto;
    }
    .shape-outer-circle {
      display: flex;
      flex-shrink: 0;
      height: calc(230px + 4vw);
      width: calc(230px + 4vw);
      width: calc(230px + 4vw);
      margin: 0px auto 32px;
      background-image: linear-gradient(
        to bottom right,
        #393f4d,
        #feda6a,
        #1d1e22
      );
    }
    .shape-outer {
      display: flex;
      flex-shrink: 0;
      height: calc(150px + 4vw);
      width: calc(150px + 4vw);

      margin: 32px auto;

      background-image: linear-gradient(
        to bottom right,
        #393f4d,
        #feda6a,
        #1d1e22
      );
    }

    .shape-inner {
      height: calc(130px + 4vw);
      width: calc(130px + 4vw);
      background: url(../../assets/my-photo.jpg) no-repeat center;
      background-size: cover;
      margin: auto;
    }
  }
}
</style>