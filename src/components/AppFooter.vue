<script>
import { store } from "../store";
export default {
    name: "AppFooter",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <footer>
        <nav>
            <ul>
                <li v-for="(item, index) in store.menu" :key="index">
                    <a :href="item.url">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped>
footer {
    background-color: orange;
    padding: 2rem;
}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>