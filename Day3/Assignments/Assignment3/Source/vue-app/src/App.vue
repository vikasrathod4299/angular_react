<script>
  import areaOfrectengleVue from './components/areaOfrectengle.vue';
  import login from './components/login.vue';
  import signUp from './components/signUp.vue'
  export default{
    components:{
      areaOfrectengleVue,login,signUp
    }
  }
</script>

<template>
  <div class="d-flex justify-content-around">
      <areaOfrectengleVue></areaOfrectengleVue>
      <login></login>
    <signUp></signUp>
  </div>

</template>

<style>

</style>
