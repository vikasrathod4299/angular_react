<template>
    <p> <strong> Title:- </strong>{{item.name}}</p>
    <p><strong> Price:- </strong>{{item.price}}</p>
    <p><strong>Quantity</strong>{{item.quantity}}</p>
    <p><strong>Discount:- </strong>{{discount}}</p> 
    <p><strong>Total:- </strong>{{total}}</p> 

    
</template>

<script>
export default{
    props:{
        item:Object
    },
    computed:{
        total(){
            return this.item.quantity * this.item.price - this.discount
        },
        discount(){
            return this.item.quantity * this.item.price*0.05
        }
    }
}
</script>

<style>

</style>
