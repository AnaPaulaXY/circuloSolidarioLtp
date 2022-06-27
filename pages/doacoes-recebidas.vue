<template>
  <div>
    <barra-nav> </barra-nav>
    <main id="conteudo" class="pb-5">
      <section class="notificacoes">
        <h2>Doações recebidas:</h2>
        <article>
          <ul class="lista-not row">
            <li class="linha-not">DoadorExemplo1</li>
            <button
              onclick=""
              id="funcao_btn"
              class="btn-confirmar btn"
              type="submit"
            >
              confirmar
            </button>
            <li class="linha-not">DoadorExemplo2</li>
            <button
              onclick=""
              id="funcao_btn"
              class="btn-confirmar btn"
              type="submit"
            >
              confirmar
            </button>
            <li class="linha-not">DoadorExemplo3</li>
            <button
              onclick=""
              id="funcao_btn"
              class="btn-confirmar btn"
              type="submit"
            >
              confirmar
            </button>
            <li class="linha-not">DoadorExemplo4</li>
            <button
              onclick=""
              id="funcao_btn"
              class="btn-confirmar btn"
              type="submit"
            >
              confirmar
            </button>
          </ul>
        </article>
      </section>
    </main>
    <barra-footer> </barra-footer>
  </div>
</template>

<script>
import barraNav from '~/components/barraNav.vue'
import barraFooter from '~/components/barraFooter.vue'
export default {
  components: { barraNav, barraFooter },
}
</script>

<style>
#conteudo {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  background-color: #fff;
}
.pb-5 {
  padding-bottom: 3rem !important;
}
.lista-not {
  list-style: none;
  text-align: center;
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