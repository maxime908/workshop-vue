<script setup>
    import { gestionError } from '@/store/store';
    import { addUser } from '@/users/users';
    import { computed, ref } from 'vue';

    const email = ref("")
    const password = ref("")
    const firstName = ref("")
    const lastName = ref("")

    const error = computed(() => {
        return gestionError.errorLogup
    })
</script>

<template>
    <form>
        <h1>S'inscrire</h1>

        <div v-if="error !== ''" class="alert alert-danger">
            {{ error }}
        </div>

        <div class="mb-3">
            <label for="firstName" class="form-label">Prénom</label>
            <input v-model="firstName" type="text" id="firstName" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Nom</label>
            <input v-model="lastName" type="text" id="lastName" class="form-control"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" id="email" class="form-control" aria-describedby="emailHelpId" placeholder="abc@mail.com"/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input v-model="password" id="password" type="password" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="addUser(email, password, firstName, lastName)">Valider</button>
    </form>
</template>