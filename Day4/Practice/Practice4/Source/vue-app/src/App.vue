<script>

  export default{
    data(){
      return {
        n:[]
      }
    },
    methods:{
      printEven(){
        for(let i=1;i<100;i++){
          this.n.push(i)
        }
      }
    }
  }
</script>

<template>
  <div v-for="i in n">
    <div v-if="i%2==0">
      <h1>{{i}}</h1>
    </div>
  </div>
  <button @click="printEven()">Print even numbers</button>
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
