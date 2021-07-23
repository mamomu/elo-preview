<template>
  <div v-bind:class="`title-container ${centered && 'centered'}`">
    <h2 v-html="content"></h2>
    <h3 v-if="subcontent">{{ subcontent }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    content: String,
    subcontent: String,
    centered: Boolean
  },
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.centered {
  text-align: center;
}
.title-container {
  margin-bottom: 50px;
  h2 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    color: #7d7873;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    font-style: italic;
    color: #f9a90e;
  }
}
</style>
