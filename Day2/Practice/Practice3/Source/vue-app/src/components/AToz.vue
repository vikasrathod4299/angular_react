<script>

    export default{
        // name :"AToz",
        data(){
            let arr=[];
            for(let i=65; i<=90;i++){
                arr.push(String.fromCharCode(i))
            }
            return {
                arr
            }
        }
    }   
</script>

<template>

    {{arr}}
</template>

<style>

</style>