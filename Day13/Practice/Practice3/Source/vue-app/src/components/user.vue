<template>
    <RouterLink :to="{name:'details', params:{id: this.$route.params.id}}">Details{{this.$route.params.id}}</RouterLink>
    <RouterLink :to="{name:'post', params:{id: this.$route.params.id}}">Post{{this.$route.params.id}}</RouterLink>
    <RouterView></RouterView>
</template>

<script>
    

</script>

<style>

</style>