<script>
import postListVue from './components/postList.vue';
export default{
  data(){
    return{
        likedPosts:[],
        likeToggle:true,
        postList:[
          {
            name:'Post-1',
            disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
            img:'https://source.unsplash.com/random/200x200?sig=1',
            likeClass:"fa-regular fa-heart fs-2" 
          },
          {
            name:'Post-2',
            disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
            img:'https://source.unsplash.com/random/200x200?sig=2',
            likeClass:"fa-regular fa-heart fs-2"  
          },
          {
            name:'Post-3',
            disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
            img:'https://source.unsplash.com/random/200x200?sig=3',
            likeClass:"fa-regular fa-heart fs-2"  
          },
          {
            name:'Post-4',
            disc:'discription Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est quae ratione at odio, tempora quia' ,
            img:'https://source.unsplash.com/random/200x200?sig=4',
            likeClass:"fa-regular fa-heart fs-2"  
          }],
      }
    },
    components:{
      postListVue
    },
    methods:{
      addLikedPosts(data){
        let index = this.likedPosts.findIndex((item)=> item == data)
        if(index<0){
          this.likedPosts.push(data)
        }else{
          this.likedPosts.splice(index,1)
        }
      },
      handleLikeToggle(){
        this.likeToggle= this.likeToggle ? false :true
      }
    } 
  }
</script>

<template>

<div>
    <p class="m-5 px-5 fs-3 text-end pe-auto" @click="handleLikeToggle()">{{likedPosts.length}} ❤️</p>
    <div >
        <div v-if="likeToggle==true"  class="container d-flex flex-wrap justify-content-around mt-5">
          <div  v-for="post in postList">    
                <postListVue :post="post" @likedPosts="addLikedPosts($event)"></postListVue>
            </div>    
        </div>
            <div v-else-if="!likeToggle" class="container d-flex flex-wrap justify-content-around mt-5">
                <div v-for="post in likedPosts">
                    <postListVue :post="post" @likedPosts="addLikedPosts($event)"></postListVue>
                </div>
            </div>
    </div>
</div>

</template>

<style>

</style>
