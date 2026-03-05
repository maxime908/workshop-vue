<script setup>
    import { gestionError } from '@/store/store';
    import { login } from '@/users/users';
    import { computed, ref } from 'vue';

    const email = ref("")
    const password = ref("")

    const error = computed(() => {
        return gestionError.errorLogin
    })
</script>

<template>
    <form>
        <h1>Se connecter</h1>

        <div v-if="error !== ''" class="alert alert-danger">
            {{ error }}
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com" />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" />
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login(email, password)">Valider</button>
    </form>
</template>