<template>
  <b-container>
    <section id="about" class="about">
      <b-row>
        <b-col cols="12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eros a urna
            luctus, quis tempor elit commodo. Suspendisse sodales odio elit, non interdum ante
            iaculis at. Nam ut dui gravida, aliquam eros vitae, imperdiet ex.
          </p>
          <Button content="Vagas em Aberto" url="https://elo7.gupy.io" />
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>
<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
.about {
  padding: 40px;
  text-align: center;
  font-size: 18px;
  color: rgb(112, 112, 112);
}
</style>
