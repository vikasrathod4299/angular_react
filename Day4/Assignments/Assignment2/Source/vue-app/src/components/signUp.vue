<template>

<div class="container">
    <h1>Sign up form</h1>
    <form class="d-grid gap-4">
        <div class="form-group">
            <label for="EmployeeID">EmployeeID</label>
            <input type="text" class="form-control" id="EmployeeID" name="EmployeeID" v-model="formData.EmployeeID" placeholder="Enter Employee ID.">
        </div>
        <div class="form-group">
            <label for="Name">Name</label>
            <input type="text" class="form-control" id="Name" name="Name" v-model="formData.Name" placeholder="Enter Name.">
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" name="address" v-model="formData.Address" placeholder="Enter address." >
        </div>  
        <div class="form-group">
            <label > Gender</label>
            <div class="d-flex">
                <div class="form-check">
                <input type="radio" class="form-check-input" id="gender" name="gender" value="Male" v-model="formData.Gender" > 
                <label class="form-check-label" for="gender">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="gender" name="gender" value="Female" v-model="formData.Gender" > 
                <label class="form-check-label" for="gender">
                    Female
                </label>
            </div>
        </div>
            
        </div>
        <div class="form-group">
            <label for="pan">Date of joining</label>
            <input type="date" class="form-control" id="pan" name="pan" v-model="formData.DOJ" placeholder="Enter PAN number." >
        </div>  
        <div class="form-group">
            <label for="password">Hobbies</label>
            <input type="text" class="form-control" id="password" name="password" v-model="formData.Hobbies" placeholder="Enter password." >
        </div>
        <button type="button" class="btn btn-info" @click="fetchData()">Sign UP!</button>
    </form>

    <div>
        <table class="table">
            <caption>Employee table</caption>
            <tr>
                <th>EmployeeID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Gender</th>
                <th>DOJ</th>
                <th>Hobbies</th>
            </tr>
            <tr v-for="item in empList">
                <td>{{item.EmployeeID}}</td>
                <td>{{item.Name}}</td>
                <td>{{item.Address}}</td>
                <td>{{item.Gender}}</td>
                <td>{{item.DOJ}}</td>
                <td>{{item.Hobbies}}</td>
            </tr>
        </table>
    </div>
    <div class="d-flex justify-content-between">
        <button class="btn btn-warning" @click="sort()">Sort By Name</button>
        <button class="btn btn-danger" @click="curMonth()">Date Filter</button>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return {
            formData:{
                EmployeeID:'',
                Name:'',
                Address:'',
                Gender:'',
                DOJ:'',
                Hobbies:'',
            },
            empList: new Array()
        }
    },
    methods:{
        fetchData(){
            this.empList.push({...this.formData})
        },
        sort(){
            this.empList = this.empList.sort((a,b) => a.Name.localeCompare(b.Name))
        },
        curMonth(){
            this.empList = this.empList.filter((item) => (item.DOJ.split('-')[1] == new Date().getMonth()+1))
        }
    }
}
</script>

<style>
</style>