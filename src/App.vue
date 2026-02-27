<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let is_authentificated

if (JSON.parse(localStorage.getItem('is_authentificated'))) {
    is_authentificated = ref(JSON.parse(localStorage.getItem('is_authentificated')))
}
</script>

<template>
  <header class="position-fixed top-0 left-0 w-100">
    <nav class="d-flex justify-content-between m-auto p-3 navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Accueil</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/post">Ajouter</RouterLink>
              </li>
              <li is_authentificated class="nav-item">
                <RouterLink class="nav-link" to="/search">Rechercher</RouterLink>
              </li>
              <li v-if="is_authentificated" class="nav-item">
                <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
              </li>
              <li v-if="!is_authentificated" class="nav-item">
                <RouterLink class="nav-link" to="/log/logup">S'inscrire</RouterLink>
              </li>
              <li v-if="!is_authentificated"  class="nav-item">
                <RouterLink class="nav-link" to="/log/login">Se connecter</RouterLink>
              </li>
          </ul>
        </div>
      </div> 
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>