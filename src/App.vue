<template>
  <div id="app">
    <Home />
    <AboutMe />
    <WorkAndEducation />
    <Certificates />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/home/AppHome";
import Footer from "./components/layout/AppFooter";
import AboutMe from "./components/about/AboutMe";
import Certificates from "./components/certificates/Certificates";
import WorkAndEducation from "./components/work-and-education/WorkAndEducation";
import Contact from "./components/contact/Contact";

export default {
  name: `app`,
  components: {
    Home,
    Footer,
    AboutMe,
    Contact,
    WorkAndEducation,
    Certificates,
  },
};
</script>

<style src="./App.scss" lang="scss" />

