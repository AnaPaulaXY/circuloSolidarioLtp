<template>
  <div>
    <barra-nav></barra-nav>
    <main id="conteudo">
      <section class="row justify-content-start">
        <article class="col-4 esquerda00">
          <img class="img4" src="../static/canil.jpg" alt="" /><br />
          <p class="pb-0">Canil</p>
          <a class="sobre" href="#"
            ><p class="espaco04">Endereço e horário para doar</p></a
          >
          <button
            onclick="function_text()"
            id="funcao_btn"
            class="btn-doacao btn"
            type="submit"
          >
            Adicionar doação
          </button>
        </article>
        <article class="col-8 Resumo">
          <p class="espaco03">Resumo</p>
          <p></p>
          <p class="espaco03">
            Essa instituição, acolhe cães carentes, e para se manter necessita
            da boa ação da população. <br />
            Você pode colaborar, doando mantimentos como ração, cobertores,
            dinheiro, entre outras coisas.
          </p>
          <br />
          <p class="espaco04">O que a instituição mais precisa no momento</p>
          <ul class="lista pb-0">
            <li>Shampoo</li>
            <li>...</li>
          </ul>
        </article>
      </section>
    </main>
    <barra-footer></barra-footer>
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
.pb-0 {
  line-height: 25px;
}
.espaco04 {
  line-height: 15px;
}
.espaco03 {
  line-height: 20px;
}
.resumo {
  width: 60%;
  padding-top: 3%;
}
.btn-doacao {
  background-color: #ff9d65;
  border: #000 solid 0.05rem;
}
.espaco04 {
  line-height: 15px;
}
.sobre {
  color: #000;
  text-decoration: underline;
}
.pb-0 {
  padding-bottom: 0 !important;
}

img.img4 {
  width: 45%;
}
.esquerda00 {
  background-color: rgba(0, 110, 255, 0.199);
}
.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}
.justify-content-start {
  justify-content: flex-start !important;
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