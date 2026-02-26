<script setup>
import { computed, ref, stop } from 'vue';
import Home from '../components/Home.vue'
import { store } from '../store/store';

const count = ref(5)

</script>

<template>
  <main>
    <div v-for="item in store.slice(0, count)">
      <Home 
        :id="item.id" 
        :text="item.text"  
        :img="item.img"
        :code="item.code"
        :likes="item.likes"
        :dislikes="item.dislikes"
        :like-bool="item.like"
        :dislike-bool="item.dislike"
        :id_user="item.id_user"
      />
    </div>

    <button class="btn btn-primary" @click="count += 5">Voir Plus</button>
  </main>
</template>