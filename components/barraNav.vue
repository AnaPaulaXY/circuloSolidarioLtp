<template>
  <div>
    <header>
      <nav class="navbar navbar-light bg-transparent">
        <div class="container-fluid">
          <a href="index.html" class="navbar-brand">
            <img
              id="logo"
              src="../static/circulosolidario.png"
              alt="Círculo Solidário"
            />
            Círculo Solidário
          </a>
          <div class="d-flex">
            <a class="nav-link" aria-current="page" href="#comunicacao"
              >Contato</a
            >
            <a class="nav-link" aria-current="page" href="#informacoes"
              >Mais informações</a
            >
            <!-- <NuxtLink v-bind:to="`/${chaveNotificacao}`" ><img class="icone-links" src="../static/home.png" alt=""></NuxtLink>-->
            <a class="nav-link" aria-current="page" href="home.html"
              ><img class="icone-links" src="../static/home.png" alt=""
            /></a>
            <a class="nav-link" aria-current="page" href="perfil_doador.html"
              ><img class="icone-links" src="../static/perfil.png" alt=""
            /></a>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'barraNavPage',
  data(){
    return{
      chaveNotificacoes: "doacoes-recebidas"
    }
  }
}
</script>

<style>
.logo-float {
  color: #000;
  width: 24%;
  margin-left: 7%;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  color: #0d6efd;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
.d-flex {
  display: flex !important;
}
.navbar-brand {
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
#logo {
  width: 75px;
}
.container,
.container-fluid,
.container-xxl,
.container-xl,
.container-lg,
.container-md,
.container-sm {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
.bg-transparent {
  background-color: transparent !important;
}
.icone-links{
	width: 30px;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navbar > .container,
.navbar > .container-fluid,
.navbar > .container-sm,
.navbar > .container-md,
.navbar > .container-lg,
.navbar > .container-xl,
.navbar > .container-xxl {
  display: flex;
  flex-wrap: inherit;
  align-items: center;
  justify-content: space-between;
}
</style>