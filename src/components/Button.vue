<template>
  <a :href="url" class="btn-default" role="button" :title="content">{{ content }} »</a>
</template>
<script>
export default {
  props: {
    url: String,
    content: String
  },
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.btn-default {
  display: block;
  position: relative;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: #359c9c;
  text-transform: uppercase;
  margin-top: 50px;
  &:hover {
    text-decoration: none;
    color: #297a7a;
  }
  &::before {
    position: absolute;
    content: "";
    width: 200px;
    height: 2px;
    background: #cbcbcb;
    margin: auto;
    top: -18px;
    left: 0;
    right: 0;
  }
}
</style>
