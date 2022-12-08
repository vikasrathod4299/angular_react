<template>
    <div>
        <h1>Sign up form</h1>
        <form>
            <div class="form-group">
                <label for="first_name">First Name</label>
                <input type="text" class="form-control" id="first_name" name="first_name" v-model="formData.FirstName" placeholder="Enter First Name.">
            </div>
            <div class="form-group">
                <label for="Last-Name">Last Name</label>
                <input type="text" class="form-control" id="Last-Name" name="Last-Name" v-model="formData.LastName" placeholder="Enter Last Name.">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" name="email" v-model="formData.Email" placeholder="Enter Email address.">
            </div>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" name="address" v-model="formData.Address" placeholder="Enter address.">
            </div>  
            <div class="form-group">
                <label for="pan">PAN number</label>
                <input type="text" class="form-control" id="pan" name="pan" v-model="formData.PAN" placeholder="Enter PAN number.">
            </div>  
            <div class="form-group">
                <label for="password">password</label>
                <input type="password" class="form-control" id="password" name="password" v-model="formData.Passwrod" placeholder="Enter password.">
            </div>
            <button type="button" class="btn btn-info" @click="signUp()">Sign UP!</button>
        </form>
        <div>
            <p>{{discripton}}</p>
        </div>
    </div>
    </template>

<script>
        export default{
            data(){
                return{
                    formData:{
                        FirstName:'',
                        LastName:'',
                        Email:'',
                        Address:'',
                        PAN:'',
                        Passwrod:''
                    },
                    discripton:''
                }
            },
            methods:{
                signUp(){
                    this.discripton=`Name:${this.formData.FirstName} \n Address: ${this.formData.Address} \n PAN : ${this.formData.PAN}`
                }
            }   
        }
</script>
<style>
</style>