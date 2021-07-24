<template>
  <div class="wrapper">
    <Header title="Trabalhe no Elo7" />
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <router-view></router-view>
    </fade-transition>
    <Footer />
  </div>
</template>
<script>
/* eslint-disable no-new */

import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";

import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition,
    Header,
    Footer
  }
};
</script>
<style lang="scss"></style>
