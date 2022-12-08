<template>
<div>
    <h1>Login Form</h1>
    <form>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" name="username" v-model="username" placeholder="Enter username.">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" v-model="password" placeholder="Enter Password.">
        </div>
        <button type="button" class="btn btn-info" @click="login()">Login!</button>
    </form>
    <div>
        <p>{{errMsg}}</p>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            username:'',
            password:'',
            errMsg:''
        }
    },
    methods:{
        login(){
            if (this.username.length>0 && this.password.length>=0){
                if(this.username=="admin" && this.password=='admin'){
                    this.errMsg=`${this.username} is logged in`
                }
                else{
                    this.errMsg=`You are not registerd`                    
                }
            }
            else{
                this.errMsg=`Enter values`                                    
            }
        }
    }
}
</script>
<style>
</style>