<template>
  <div class="container-wrapper">
    <h2 data-aos="fade-up" data-aos-delay="200" class="head-title">Contact Me</h2>
    <h3 data-aos="fade-down" class="my-description">Want to work with me? Send me Email:</h3>
    <form
      data-aos="flip-down"
      data-aos-delay="500"
      class="contact-form"
      @submit.prevent="sendEmail"
    >
      <input
        v-model="emailForm.user_name"
        placeholder="Name"
        type="text"
        name="user_name"
        class="input"
      />
      <input
        v-model="emailForm.user_email"
        placeholder="Your email"
        type="email"
        name="user_email"
        class="input"
      />
      <textarea v-model="emailForm.message" placeholder="Message" name="message" class="message"></textarea>
      <p class="input-warning" v-if="!isFormEmpty">Please fill all fields</p>
      <input
        :id="!isFormEmpty ? 'submitDisabled' : 'baba'"
        class="submit"
        :disabled="!isFormEmpty"
        type="submit"
        value="Submit"
      />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      emailForm: {
        user_email: "",
        user_name: "",
        message: "",
      },
    };
  },
  computed: {
    isFormEmpty() {
      if (
        this.emailForm.user_email &&
        this.emailForm.user_name &&
        this.emailForm.message
      ) {
        return true;
      }
    },
  },
  methods: {
    clearField() {
      for (const property in this.emailForm) {
        this.emailForm[property] = "";
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "Yuliyan_dd3",
          "template_erpzlnp",
          e.target,
          "user_E9yN93jeeFx5OLeuUs49k"
        )
        .then(
          (result) => {
            for (const property in this.emailForm) {
              console.log("vlizali?");
              this.emailForm[property] = "";
            }
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
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
@mixin tablet {
  @media (max-width: 1024px) {
    @content;
  }
}
#submitDisabled:disabled:hover {
  background-color: none;
}
#submitDisabled:disabled {
  transition: background-color, 0.5s;
  background-color: rgb(110, 110, 110);
  color: #393f4d;
}
.contact-form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 60px auto;

  @include tablet {
    width: 80%;
  }

  .input {
    height: 30px;
  }
  .input-warning {
    margin: 5px 0 0;
  }
  .message {
    height: 150px;
  }
  .submit {
    padding: 11px 20px;
    transition: background, 0.5s;
    background: none;
    border: 1px solid white;
    font-size: 20px;
    color: white;
    margin: 20px 0 0 auto;

    &:hover {
      transition: background-color, 1s;
      color: #393f4d;
      background-color: #feda6a;
      cursor: pointer;
    }
  }
}
</style>