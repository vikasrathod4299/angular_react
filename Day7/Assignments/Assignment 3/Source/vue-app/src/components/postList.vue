<template>
    <div class="card shadow-lg" style="width: 18rem;">
    <img class="card-img-top w-75 mx-auto rounded shadow mt-3"  v-bind:src="post.img" alt="Card image cap">
    <div class="card-body">
      <h3 class="card-title">{{post.name}}</h3>
      <p class="card-text">{{post.disc}}</p>
      <div class="d-flex justify-content-end me-4" @click="addLike()">
        <em v-bind:class="post.likeClass"></em>
      </div>
    </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                likedPosts:{}
            }
        },
        props:{
            post:Object
        },
        methods:{
            addLike(){
                this.$emit('likedPosts',this.post)
                this.post.likeClass = this.post.likeClass=="fa-regular fa-heart fs-2" 
                ? "fa-solid fa-heart fs-2 text-danger" 
                : "fa-regular fa-heart fs-2"
            }
        }
    }
</script>

<style>

</style>