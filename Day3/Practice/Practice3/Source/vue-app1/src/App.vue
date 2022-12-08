<script >
import Calc from './components/Calc.vue';
export default {
  name: 'App',
  data(){
    return {form:{
      num1:0,
      num2:0,
      opr:''
    }
  }
},
  components: {
    Calc
  }
}
</script>

<template>
  <input type="number" name="num1" v-model="form.num1"/>
  <input type="number" name="num2" v-model="form.num2"/>
  <input type="text" name="opr" v-model="form.opr"/>
  <Calc :form="form" />
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
