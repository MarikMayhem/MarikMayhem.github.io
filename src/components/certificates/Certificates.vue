<template>
  <div class="container-wrapper">
    <h3 data-aos="fade-up" data-aos-delay="200" class="head-title">Certificates</h3>
    <section class="certificate-wrapper">
      <div class="change-tabs">
        <ul>
          <li :class="(toggle === 'udemy')?'highlight-color':''" @click="toggle = 'udemy'">Udemy</li>
          <li
            :class="(toggle === 'softuni')?'highlight-color':''"
            @click="toggle = 'softuni'"
          >Softuni</li>
        </ul>
      </div>
      <div class="certificates">
        <div
          v-if="toggle === 'udemy'"
          class="animate__animated animate__zoomInUp udemy certificate-container"
        >
          <a
            class="certificate"
            href="https://www.udemy.com/certificate/UC-f97935bc-f3cc-4b70-afc3-28a6a8ae0264/"
          >
            <img src="../../assets/images/certificates/Udemy-Vuejs.jpg" />
          </a>
        </div>
        <div
          v-if="toggle === 'softuni'"
          class="animate__animated animate__zoomInUp softuni certificate-container"
        >
          <a class="certificate" href="https://softuni.bg/certificates/details/24669/03a26d26">
            <img src="../../assets/images/certificates/WebFundamentals2017.png" />
          </a>
          <a class="certificate" href="https://softuni.bg/certificates/details/19137/738fb83a">
            <img src="../../assets/images/certificates/SoftwareTechnologies2017.png" />
          </a>
          <a class="certificate" href="https://softuni.bg/certificates/details/54681/616332d1">
            <img src="../../assets/images/certificates/JSFundamentals2018.png" />
          </a>
          <a class="certificate" href="https://softuni.bg/certificates/details/52885/e6e1163e">
            <img src="../../assets/images/certificates/JSAdvanced2018.png" />
          </a>
          <a class="certificate" href="https://softuni.bg/certificates/details/57714/73a97439">
            <img src="../../assets/images/certificates/AngularFundamentals2018.png" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: "udemy",
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
//Global
.change-tabs {
  li {
    cursor: pointer;
  }
  .highlight-color {
    color: #feda6a;
    font-size: 20px;
  }
}
.certificate-wrapper {
  .certificates {
    .certificate-container {
      width: 70%;
      margin: auto;
      @include tablet {
        width: 90%;
      }
      .certificate {
        img {
          height: 350px;
          @include tablet {
            height: 258px;
          }
        }
      }
    }
  }
}
</style>