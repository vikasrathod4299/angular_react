<template>
     <div>
    <div class="container p-5">
      <div class="d-flex justify-content-around">
        <div class="card">
          <div class="card-body">
          <h5 class="card-title">Student 1</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" @click="stdDetails(1)" class="btn btn-primary">Details</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Student 2</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" @click="stdDetails(2)" class="btn btn-primary">Details</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Student 3</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" @click="stdDetails(3)" class="btn btn-primary">Details</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Student 4</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" @click="stdDetails(4)" class="btn btn-primary">Details</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Student 5</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" @click="stdDetails(5)" class="btn btn-primary">Details</a>
        </div>
      </div>
    </div>    
    </div>
  </div>
</template>

<script>
import router from '../router';

    export default{
        methods:{
            stdDetails(id){
            router.push({path:`/details/${id}`})        
         }
        }
    }
</script>

<style>
</style>