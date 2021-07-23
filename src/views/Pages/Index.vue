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
    <section id="team" class="team">
      <b-row>
        <b-col cols="6">
          <img src="@/assets/images/placeholder-video.png" />
        </b-col>
        <b-col cols="6">
          <Title content="Palavra do CEO" subcontent="Carlos Curioni" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eros a urna
            luctus, quis tempor elit commodo. Suspendisse sodales odio elit, non interdum ante
            iaculis at. Nam ut dui gravida, aliquam eros vitae, imperdiet ex.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <div class="m-50">
            <Title content="Conheça nosso time <br> fora de série" centered />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <img src="@/assets/images/camila.png" />
        </b-col>
        <b-col cols="3">
          <img src="@/assets/images/guto.png" />
        </b-col>
        <b-col cols="3">
          <img src="@/assets/images/david.png" />
        </b-col>
        <b-col cols="3">
          <img src="@/assets/images/beatriz.png" />
        </b-col>
      </b-row>
    </section>
  </b-container>
</template>
<script>
import Button from "@/components/Button.vue";
import Title from "@/components/Title.vue";

export default {
  components: {
    Button,
    Title
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
.team {
  padding: 40px;
  background: #f8f8f8;
  img {
    width: 100%;
  }
  .m-50 {
    margin: 50px;
  }
}
</style>
