<script>
  import HelloWorldVue from './components/HelloWorld.vue';
  export default{
    components: {
      HelloWorldVue
    },
    data(){
        return {
          title:"Hello,"
        }
      }
  }

</script>

<template>
  {{title}}
  <HelloWorldVue></HelloWorldVue>
</template>

<style>

</style>
