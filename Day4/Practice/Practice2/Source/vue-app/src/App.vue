<script>
  export default{
    data(){
      return{
        num1:0,
        num2:0
      }
    }
  }
</script>

<template>
  <h1>Find greater Number</h1>
  <input type="number" name="num1" v-model="num1">
  <input type="number" name="num2" v-model="num2">
  <h1 v-if="num1 > num2">
    Number 1 is greater
  </h1>
  <h1 v-else-if="num2 > num1">
    Number 2 is greater
  </h1>
  <h1 v-else>
    Both number are same
  </h1>
</template>

<style >
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
