<template>
  <div class="body">
    <barra-nav></barra-nav>
      <main id="conteudo">
        <h1>Mapa das instituições</h1>
        <div class="row justify-content-start pb-2">
          <div class="col-5 pt-1">
            <form action="" id="formlario">
              <label for="endereco"><strong>Cidade/UF:</strong></label>
              <input type="text" id="endereco" />
              <NuxtLink v-bind:to="`/${chaveBusca}`">Buscar</NuxtLink>
            </form>
          </div>
          <div class="col-3 pb-0 pt-3 btn-success fs-5">
            <a href="#" class="dropdown-item">Sua localização atual</a>
          </div>
        </div>
        <iframe
          class="container d-mapa"
          src="https://www.google.com/maps/d/embed?mid=1y-HU5BKpBQ5J0pCH7gUuvhHTJKm2tnUj"
        ></iframe>
      </main>
    <barra-footer></barra-footer>
  </div>
</template>

<script>
import barraNav from '~/components/barraNav.vue'
import barraFooter from '~/components/barraFooter.vue'

export default {
  name: 'IndexPage',
  components: { barraNav, barraFooter },
  data() {
    return {
      chaveBusca: 'instituicao',
    }
  },
}
</script>

<style>
.body{
  margin: 0;
  font-family: var(--bs-font-sans-serif);
  font-size: 1rem;
  font-weight: 600;
  line-height: 4.5;
  color: #212529;
  background-color: #ff9d65;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.fs-5 {
  font-size: 1.25rem !important;
}
.d-mapa {
  width: 920px;
  height: 580px;
}
.btn-success {
  color: #fff;
  background-color: #198754;
  border-color: #198754;
}
.pb-0 {
  padding-bottom: 0 !important;
}
.col-3 {
  flex: 0 0 auto;
  width: 25%;
}
.pt-1 {
  padding-top: 0.25rem !important;
}
.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
.pb-2 {
  padding-bottom: 0.5rem !important;
}
.justify-content-start {
  justify-content: flex-start !important;
}
#conteudo {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  background-color: #fff;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -0.5);
  margin-left: calc(var(--bs-gutter-x) * -0.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
</style>
