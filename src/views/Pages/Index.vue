<template>
  <b-container>
    <section id="about" class="about">
      <b-row>
        <b-col md="12">
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
        <b-col md="6">
          <img
            src="@/assets/images/placeholder-video.png"
            alt="Thumbnail de um vídeo do YouTube com a foto do CEO Carlos Curioni"
          />
        </b-col>
        <b-col md="6">
          <Title content="Palavra do CEO" subcontent="Carlos Curioni" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eros a urna
            luctus, quis tempor elit commodo. Suspendisse sodales odio elit, non interdum ante
            iaculis at. Nam ut dui gravida, aliquam eros vitae, imperdiet ex.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <div class="m-50">
            <Title content="Conheça nosso time <br> fora de série" centered />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" cols="6" class="mb-4">
          <img src="@/assets/images/camila.png" alt="Camila" title="Camila" />
        </b-col>
        <b-col md="3" cols="6" class="mb-4">
          <img src="@/assets/images/guto.png" alt="Guto" title="Guto" />
        </b-col>
        <b-col md="3" cols="6" class="mb-4">
          <img src="@/assets/images/david.png" alt="David" title="David" />
        </b-col>
        <b-col md="3" cols="6" class="mb-4">
          <img src="@/assets/images/beatriz.png" alt="Beatriz" title="Beatriz" />
        </b-col>
      </b-row>
    </section>
    <section id="benefits" class="benefits">
      <b-row>
        <b-col md="4">
          <div class="box">
            <img src="@/assets/images/qualidade.png" class="box-image" />
            <Title content="Qualidade de Vida" centered />
            <p class="box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eros a
              urna luctus, quis tempor elit commodo. Suspendisse sodales odio elit, non interdum
              ante iaculis at. Nam ut dui gravida, aliquam eros vitae, imperdiet ex.
            </p>
          </div>
        </b-col>
        <b-col md="4">
          <div class="box">
            <img src="@/assets/images/descontracao.png" class="box-image" />
            <Title content="Ambiente Descontraído" centered />
            <p class="box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eros a
              urna luctus, quis tempor elit commodo. Suspendisse sodales odio elit, non interdum
              ante iaculis at. Nam ut dui gravida, aliquam eros vitae, imperdiet ex.
            </p>
          </div>
        </b-col>
        <b-col md="4">
          <div class="box">
            <img src="@/assets/images/atividades.png" class="box-image" />
            <Title content="Atividades Extras" centered />
            <p class="box-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices eros a
              urna luctus, quis tempor elit commodo. Suspendisse sodales odio elit, non interdum
              ante iaculis at. Nam ut dui gravida, aliquam eros vitae, imperdiet ex.
            </p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <Button content="Saiba Mais" url="https://elo7.gupy.io" />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <img
            src="@/assets/images/foto-bottom.png"
            class="bottom-picture"
            alt="Um grupo de pessoas próximas umas das outras em uma sala."
          />
        </b-col>
      </b-row>
    </section>
    <section id="jobs" class="jobs">
      <b-row>
        <b-col md="12">
          <Title content="Vagas em Aberto" centered />
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <Title content="Desenvolvimento" />
        </b-col>
      </b-row>
      <div class="jobs-list">
        <div class="loader" v-if="loading"></div>
        <div class="job" v-bind:key="job.id" v-for="job in jobs" v-show="!loading">
          <a
            :href="job.link"
            target="_blank"
            role="button"
            :title="`Vaga: ${job.cargo} / Localização: ${getLocalization(job.localizacao)}`"
          >
            {{ job.cargo }}
          </a>
          <div>{{ getLocalization(job.localizacao) }}</div>
        </div>
      </div>
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
    return {
      jobs: {},
      loading: true
    };
  },
  methods: {
    async fetchJobs() {
      let res = await fetch(process.env.API_URL)
        .then(response => response.json())
        .then(data => data);

      this.jobs = res?.vagas
        .map(job => {
          return {
            ...job,
            id: Math.floor(Math.random() * 1000)
          };
        })
        .filter(job => job.ativa);
    },
    getLocalization(localization) {
      return localization
        ? `${localization.bairro} - ${localization.cidade}, ${localization.pais}`
        : "Remoto";
    }
  },
  async mounted() {
    await this.fetchJobs();
    this.loading = false;
  }
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
.benefits {
  padding: 40px;
}
.box {
  text-align: center;
  &-image {
    margin: 30px;
  }
  &-description {
    text-align: justify;
    color: rgb(112, 112, 112);
    padding: 0 20px;
  }
}
.bottom-picture {
  width: 100%;
  margin: 50px 0 0 0px;
}
.jobs {
  padding: 40px;
  .job {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: rgb(112, 112, 112);
    font-size: 18px;
    margin-bottom: 15px;
  }
  .job a {
    width: 100%;
    font-weight: 600;
    color: #359c9c;
    font-size: 18px;
  }
  .job div {
    width: 100%;
    text-align: right;
  }
}
</style>
