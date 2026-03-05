<script setup>
import { computed, ref, stop, watchEffect } from 'vue';
import Home from '../components/Home.vue'
import { store } from '@/store/store';
import { removeSort, sortByDislike, sortByLike } from '@/search/search';

const count = ref(5)

function increment() {
  count.value += 5
  window.location.href = "#button"
}

</script>

<template>
  <main class="d-flex flex-column gap-5">
    <nav class="navbar navbar-expand-lg bg-transparent">
        <div class="container-fluid bg-transparent">
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav d-flex justify-content-end w-100">
                    <li class="nav-item dropdown">
                        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Trier
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <li><button class="dropdown-item" @click="sortByLike('desc')">Trier par like (desc)</button></li>
                            <li><button class="dropdown-item" @click="sortByLike('asc')">Trier par like (asc)</button></li>
                            <li><button class="dropdown-item" @click="sortByDislike('desc')">Trier par dislike (desc)</button></li>
                            <li><button class="dropdown-item" @click="sortByDislike('asc')">Trier par dislike (asc)</button></li>
                            <li><button class="dropdown-item" @click="removeSort">Enlever tri</button></li>
                        </ul>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>

    <div v-for="item in store.slice(0, count)">
      <Home 
        :id="item.id" 
        :description="item.text"  
        :img="item.img"
        :code="item.code"
        :likes="item.likes"
        :dislikes="item.dislikes"
        :like-bool="item.like"
        :dislike-bool="item.dislike"
        :id_user="item.id_user"
        :post-tag="item.tag"
      />
    </div>

    <button class="btn btn-primary d-flex justify-content-center align-items-center m-auto" id="button" @click="increment">Voir Plus</button>
  </main>
</template>