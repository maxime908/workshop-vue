import { recupId } from "@/post/post";

import gsap from "gsap";

function likeAnimation(like, id) {
    let tl = gsap.timeline()

    tl.to(like + id, { rotate: 30, scale: 1.5, duration: 0.25 })

    tl.to(like + id, { rotate: -30, scale: 1.25, duration: 0.25 })

    tl.to(like + id, { rotate: 0, scale: 1, duration: 0.25 })
}

export const like = (id, bool) => {
    const storedData = recupId(id);
    if (bool) {
        storedData.likes++
    } else {
        storedData.likes--
    }

    if (storedData.dislike === true) {
        storedData.dislikes--
        storedData.dislike = false;
    }

    likeAnimation("#like", id)

    storedData.like = bool
}

export const dislike = (id, bool) => {
    const storedData = recupId(id);
    if (bool) {
        storedData.dislikes++
    } else {
        storedData.dislikes--
    }

    if (storedData.like === true) {
        storedData.likes--
        storedData.like = false;
    }

    likeAnimation("#dislike", id)

    storedData.dislike = bool
}

// TODO : Modifier nom variables like et dislike en par exemple : likeBool et dislikeBool