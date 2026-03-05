import { gestionError, store } from "@/store/store";

export const addPost = (url, description, code, tag) => {
    if (description) {
        const id = store.value.length;
        store.value.push({
            id: id,
            text: description,
            img: url,
            code: code,
            id_user: JSON.parse(localStorage.getItem("is_authentificated"))["id"],
            likes: 0,
            dislikes: 0,
            like: false,
            dislike: false,
            tag: tag,
        })
        window.location.href = "/";
    } else {
        gestionError.errorAdd = "Le champ de description ne peut pas être vide !"
    }
}

export const updatePost = () => { 
    window.location.href = "/";
}

export const deletePost = (id) => {
    store.value.splice(store.value.indexOf(id), 1);
    window.location.href = "/";
}

export const recupId = (id) => {
    return store.value.find((t) => t.id === parseInt(id))
}