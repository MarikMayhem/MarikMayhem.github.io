<template>
  <div class="container-wrapper">
    <h2 data-aos="fade-up" data-aos-delay="200" class="head-title">Contact Me</h2>
    <h3 class="my-description">Want to work with me? Send me Email:</h3>
    <form class="contact-form" @submit.prevent="sendEmail">
      <input placeholder="Name" type="text" name="user_name" class="input" />
      <input placeholder="Your email" type="email" name="user_email" class="input" />
      <textarea placeholder="Message" name="message" class="message"></textarea>
      <input type="submit" value="Submit" class="submit" />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail: (e) => {
      console.log(e);
      emailjs
        .sendForm(
          "Yuliyan_dd3",
          "template_erpzlnp",
          e.target,
          "user_E9yN93jeeFx5OLeuUs49k"
        )
        .then(
          (result) => {
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
.contact-form {
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 60px auto;
  .input {
    height: 30px;
  }
  .message {
    height: 150px;
  }
  .submit {
    width: 20%;
    padding: 11px;
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