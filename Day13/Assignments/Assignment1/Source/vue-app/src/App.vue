<script>
import router from './router';
import HomeVue from './views/Home.vue';
  export default{
    components:{
      HomeVue
    }
  }
</script>

<template>
  <div v-if="!this.$route.params.id">
    <HomeVue/>
  </div>
    <RouterView/>
</template>

<style >

</style>
