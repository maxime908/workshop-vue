import { useStorage } from "@vueuse/core";
import { reactive } from "vue";

export const users = useStorage(
    'users',
    [
        {
            id: 0,
            firstName: "Maxime",
            lastName: "DREZET",
            email: "drezetmaxime67@gmail.com",
            password: "moi1",
        },
        {
            id: 1,
            firstName: "Maxime",
            lastName: "DREZET",
            email: "moi@gmail.com",
            password: "moi2",
        },
    ]
)

export const store = useStorage(
    'store',
    [
        {
            id: 0,
            text: "Voici un code symfony",
            img: "https://live.staticflickr.com/65535/33866481868_e3d2dd77bc_o.gif",
            code: "<?php\n    echo 'bonjour';\n?>",
            id_user: 0,
            likes: 14,
            dislikes: 2,
            like: false,
            dislike: false,
            tag: ["#PHP", "#language de programmation", "#symfony"],
        },
        {
            id: 1,
            text: "Voici un code php",
            img: "https://grafikart.fr/media/resize/1330/750/uploads/attachments/2019/background-1183-600a91d6d854a044797735.jpg?s=8c3a4546e97e3f787a2fa6b07eebd09e",
            code: "<?php\n    echo 'Au revoir';\n?>",
            id_user: 0,
            likes: 6,
            dislikes: 1,
            like: false,
            dislike: false,
            tag: ["#PHP", "#language de programmation"],
        },
        {
            id: 2,
            text: "Exemple simple en JavaScript",
            img: "https://www.openmydiv.fr/wp-content/uploads/2021/09/commentaire-javascript-exemple-utilite-1.png",
            code: "function hello() {\n    console.log('Bonjour le monde');\n}",
            id_user: 1,
            likes: 23,
            dislikes: 4,
            like: false,
            dislike: false,
            tag: ["#JavaScript", "#web", "#programmation"],
        },
        {
            id: 3,
            text: "Petit exemple HTML",
            img: "https://www.apprendre-html-et-css.com/images/sublimtext3.png",
            code: "<!DOCTYPE html>\n<html>\n<head>\n<title>Ma page</title>\n</head>\n<body>\n<h1>Hello</h1>\n</body>\n</html>",
            id_user: 2,
            likes: 9,
            dislikes: 0,
            like: false,
            dislike: false,
            tag: ["#HTML", "#web"],
        },
        {
            id: 4,
            text: "Exemple CSS pour styliser un bouton",
            img: "https://i.ytimg.com/vi/6NTPqzmPYyg/maxresdefault.jpg",
            code: "button {\n    background-color: #3b82f6;\n    color: white;\n    padding: 10px 20px;\n    border-radius: 8px;\n}",
            id_user: 1,
            likes: 31,
            dislikes: 3,
            like: false,
            dislike: false,
            tag: ["#CSS", "#design", "#frontend"],
        },
        {
            id: 5,
            text: "Boucle simple en Python",
            img: "https://etudestech.com/wp-content/uploads/2023/06/image-13.png",
            code: "for i in range(5):\n    print(i)",
            id_user: 3,
            likes: 17,
            dislikes: 5,
            like: false,
            dislike: false,
            tag: ["#Python", "#programmation"],
        },
        {
            id: 6,
            text: "Composant Vue simple",
            img: "https://easypartner.fr/wp-content/uploads/2019/10/visuel_js_blog.png.webp",
            code: "<script setup>\nimport { ref } from 'vue'\n\nconst count = ref(0)\n</script>\n\n<template>\n<button @click=\"count++\">{{ count }}</button>\n</template>",
            id_user: 2,
            likes: 28,
            dislikes: 2,
            like: false,
            dislike: false,
            tag: ["#Vue", "#JavaScript", "#frontend"],
        },
        {
            id: 7,
            text: "Requête SQL basique",
            img: "https://cdn.prod.website-files.com/60ec34540d013784844d2ee2/66d0750305772139430aeb93_659d6065f12beb1529c77045_SQL%2520VS%2520SQL%2520Clause.png",
            code: "SELECT *\nFROM users\nWHERE id = 1;",
            id_user: 1,
            likes: 12,
            dislikes: 1,
            like: false,
            dislike: false,
            tag: ["#SQL", "#database"],
        }
    ]
)

export const gestionError = reactive({
    errorLogup: "",
    errorLogin: "",
    errorAdd: "",
})