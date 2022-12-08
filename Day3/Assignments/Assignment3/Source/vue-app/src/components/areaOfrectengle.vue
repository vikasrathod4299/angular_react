<template>
<div>
    <div>
        <h1>Area of rectengle</h1>
        <form  action="">
            <div class="form-group">
                <label for="height">Height</label>
                <input class="form-control" type="number" id="height" name="height" placeholder=" Enter height" v-model="height" >
            </div>
            <div class="form-group">
                <label for="width">Width</label>
                <input class="form-control" type="number" id="width" name="width" placeholder=" Enter width" v-model="width" >
            </div>
            <button type="button" class="btn btn-info" @click="calculate()">Find area of ractengle!</button>
        </form>
    </div>

    <div>
        <h1>{{res}}</h1>
    </div>

    </div>

</template>

<script>
    export default{
        
        data(){
            return {
                height:'',
                width:'',
                res:0
            }
        },
        methods:{
            calculate(){
                this.res=this.height*this.width
            }
        }

    }
</script>

<style>
</style>