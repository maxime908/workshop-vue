import { store } from "@/store/store";
import { computed, reactive } from "vue";

const params = new URLSearchParams(window.location.search)
const url = new URL(location);

export const storeDuplication = reactive({
    input: "",
    input_cat: (params.get("tab") !== null) ? params.get("tab") : "",
    store: store.value
})

export const search = computed(() => {
    if (storeDuplication.input !== "" && storeDuplication.input_cat !== "") { 
        storeDuplication.input = ""
        storeDuplication.input_cat = ""
    }

    if (storeDuplication.input !== "")  {
        storeDuplication.input_cat = ""

        return storeDuplication.store.filter((t) => t.text.toLowerCase().includes(storeDuplication.input.toLowerCase()) || t.text.toLowerCase() === storeDuplication.input || t.code.toLowerCase().includes(storeDuplication.input.toLowerCase()))
    }

    if (storeDuplication.input_cat !== "") {
        storeDuplication.input = ""

        url.searchParams.set("tab", storeDuplication.input_cat);
        history.pushState({}, "", url);

        let tag = storeDuplication.input_cat

        return storeDuplication.store.filter((t) => {
            for (let i = 0; i < t.tag.length; i++) {
                if (t.tag[i].toLowerCase() === "#" + tag.toLowerCase()) {
                    return true;
                }
            }
        })
    }

    return storeDuplication.store
})

export function sortByLike(order) {
    if (order === "desc") {
        return store.value.sort((a, b) => b.likes - a.likes);
    } else {
        return store.value.sort((a, b) => a.likes - b.likes);
    }
}

export function sortByDislike(order) {
    if (order === "desc") {
        return store.value.sort((a, b) => b.dislikes - a.dislikes);
    } else {
        return store.value.sort((a, b) => a.dislikes - b.dislikes);
    }
}

export function removeSort() {
    return store.value.sort((a, b) => a.id - b.id);
}