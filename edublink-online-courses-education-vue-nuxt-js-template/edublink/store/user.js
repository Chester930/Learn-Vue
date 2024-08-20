import { defineStore } from "pinia";
import { ref } from "vue";

const user = defineStore("user", function() {
    const email = ref("");
    function setEmail(data) {
        email.value = data;
    }

    const isLogedin = ref(false);
    function setLogedin(data) {
        isLogedin.value = data;
    }

    return {
        email, setEmail, isLogedin, setLogedin
    }
}, {
    persist: {
        storage: localStorage,
        paths: ["email", "isLogedin"]
    }
});

export default user;
