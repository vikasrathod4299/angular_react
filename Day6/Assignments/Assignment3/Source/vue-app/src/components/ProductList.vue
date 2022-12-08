<template>

    <input type="text" v-model="prod.name" placeholder="Name">
    <input type="number" v-model="prod.price" placeholder="Price">
    <input type="number" v-model="prod.quantity" placeholder="Quantity">
    <button @click="onSubmit()">Submit</button>
    <div v-for="item in list">
        <Product :item="item"></Product>
    </div>
</template>

<script>

    import Product from './Product.vue';

    export default{
        data(){
            return{
                prod:{
                    name:'',
                    price:null,
                    quantity:null,
                },
                list:[]
            }
        },
        methods:{
            onSubmit(){
                this.list.push({...this.prod})
            }
        },
        components: { Product }
    }

</script>

<style>

</style>