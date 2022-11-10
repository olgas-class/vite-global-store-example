<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {

    }
  },
  created() {
    console.log(this.menu);
  }
}
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi natus laboriosam laudantium iste fuga velit
      assumenda! Nam, debitis earum maiores inventore vel nemo, fuga sequi officiis vitae voluptatum hic omnis!
    </main>
    <AppFooter />
  </div>
</template>

<style>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>