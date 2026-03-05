import { gestionError, users } from "@/store/store";
import { reactive } from "vue";

export const addUser = (email, password, firstName, lastName) => {
    if (email && password && firstName && lastName) {
        const find = users.value.find((t) => t.email === email)
        if (find) {
            gestionError.errorLogup = "L'email à déjà été utilisé lors de la création d'un compte !";
            return;
        }

        const id = users.value.length;
        users.value.push({
            id: id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            is_authentificated: false,
        })
        window.location.href = "/";
    } else {
        gestionError.errorLogup = "Tous les champs sont nécessaire !";
    }
}

export const login = (email, password) => {
    if (email && password) {
        const find = users.value.find((t) => t.email === email && t.password === password)

        if (find) {
            localStorage.setItem("is_authentificated", JSON.stringify({id: find.id}))
            window.location.href = "/";
            return;
        }
    }

    gestionError.errorLogin = "Information(s) incorrecte !";
}

export const userInfo = (id) => {
    return users.value.find((t) => t.id === parseInt(id))
}

export const deleteAccount = (id) => {
    users.value.splice(users.value.indexOf(id), 1);
    localStorage.removeItem("is_authentificated");
    window.location.href = "/log/login";
}