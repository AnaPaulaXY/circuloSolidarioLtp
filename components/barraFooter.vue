<template>
<div>
   <footer>
            <section class="row pb-0">
                <article id="informacoes" class="col-5 mx-auto">
                    <p>Fundadoras:</p>
                    <img src="../static/ana-100.jpeg" alt="">
                    <p class="pb-0"> Ana Paula Rosa, Estudante do Instituto Federal de Educação, Ciência e Tecnologia (IFSP) em Bragança Paulista, SP.</p>
                    <img src="../static/tais-100.jpg" alt="">
                    <p class="pb-0">Taís Barbosa Rodrigues, Estudante do Instituto Federal de Educação, Ciência e Tecnologia (IFSP) em Bragança Paulista, SP. </p>
                </article>
                <article id="comunicacao" class="col-5 mx-auto">
                    <p>Comunicação:</p>
                    <p class="pb-0">E-mail: <a href="mailto:conexaosolidariaa@gmail.com">conexaosolidariaa@gmail.com</a></p>
                </article>
                <p class="text-sm-center pb-0">Desenvolvido por... 2022...</p>
            </section>
        </footer>
</div>
</template>

<script>
export default {

}
</script>

<style>
 .text-sm-center {
    text-align: center !important;
  }
.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;
}
.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}
.pb-0 {
  padding-bottom: 0 !important;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x) * -.5);
  margin-left: calc(var(--bs-gutter-x) * -.5);
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
  margin-top: var(--bs-gutter-y);
}
</style>