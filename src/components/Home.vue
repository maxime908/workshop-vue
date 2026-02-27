<script>
    import 'highlight.js/lib/common';
    import hljsVuePlugin from "@highlightjs/vue-plugin";
    import { dislike, like } from '@/store/store';
    import { ref } from 'vue';

    import { useClipboard } from '@vueuse/core'

    export default {
        components: {
            highlightjs: hljsVuePlugin.component
        }
    }

    let id_of_user = null;

    if (JSON.parse(localStorage.getItem('is_authentificated'))) {
        id_of_user = ref(JSON.parse(localStorage.getItem('is_authentificated'))['id'])
    }
</script>

<script setup>
    defineProps({
        id: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: false,
        },
        code: {
            type: String,
            required: false,
        },
        likes: {
            type: Number,
            required: true,
        },
        dislikes: {
            type: Number,
            required: true,
        },
        likeBool: {
            type: Boolean,
            required: true,
        },
        dislikeBool: {
            type: Boolean,
            required: true,
        },
        id_user: {
            type: Number,
            required: true,
        }
    })

    const source = ref('Hello')
    const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
    <ul class="d-flex flex-column gap-3">
        <div>
            {{ description }}
        </div>
        <img v-if="img !== null" :src="img" alt="img" class="w-50 object-fit-cover">
        <div class="d-flex justify-content-between position-relative">
            <highlightjs class="w-100"
                v-if="code !== null"
                :code="code"
            />
            <span class="position-absolute right-10px top-5px" v-if="!copied" @click="copy(code)"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clipboard2" viewBox="0 0 16 16">
                <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z"/>
                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
            </svg></span>
            <span v-else class="position-absolute right-10px top-5px"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-clipboard2-fill" viewBox="0 0 16 16">
                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                <path d="M3.5 1h.585A1.5 1.5 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5q-.001-.264-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1"/>
            </svg></span>
        </div>
        <div class="d-flex gap-3">
            <span id="like" @click="like(id, bool = !likeBool)">Like(s): {{ likes }}</span>
            <span id="dislike" @click="dislike(id, bool = !dislikeBool)">Dislike(s): {{ dislikes }}</span>
        </div>
        <div v-if="id_user === id_of_user" class="d-flex gap-3">
            <a class="btn btn-primary" :href="'/post/update/' + id">Modifier</a>
            <a class="btn btn-danger" :href="'/delete/' + id">Supprimer</a>
        </div>
    </ul>
</template>