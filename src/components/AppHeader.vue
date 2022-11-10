<script>
import AppHeaderNav from './AppHeaderNav.vue';
export default {
    name: "AppHeader",
    components: {
        AppHeaderNav
    },
}
</script>

<template>
    <header>
        <div class="logo">LOGO</div>
        <AppHeaderNav />
    </header>

</template>

<style scoped>
header {
    background-color: white;
    padding: 1rem 0;
}

.logo {
    font-size: 3rem;
    color: blue;
    text-align: center;
}
</style>