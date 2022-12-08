<script>
    export default{
        props:{
            errors:Array
        }
    }
</script>

<template>
    <div v-for="error of errors" class="text-danger">
        <p>{{error.$message}}</p>
    </div>  
</template>

<style>

</style>