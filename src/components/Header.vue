<template>
  <header>
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="header">
            <h1 class="header-title" :title="title" :aria-label="title">
              {{ title }}
            </h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Hello World"
    }
  }
};
</script>
<style lang="scss">
.header {
  min-height: 450px;
  background: url("../assets/images/foto-header.png");
  background-size: cover;
  text-align: center;

  &-title {
    color: #ffffff;
    font-size: 50px;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
    padding-top: 250px;
  }
}
</style>
