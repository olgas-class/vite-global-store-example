<script>
import { store } from "../store";
export default {
    name: "AppHeaderNav",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <nav>
        <ul>
            <li v-for="(item, index) in store.menu"><a :href="item.url">{{ item.title }}</a></li>
        </ul>
    </nav>

</template>

<style scoped>
ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 1rem;
}

li {
    margin: 0 1rem;
}

a {
    text-decoration: none;
    color: brown;
}
</style>