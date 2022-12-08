<script>
  import { useVuelidate } from "@vuelidate/core";
  import { required, helpers, minLength } from "@vuelidate/validators";
  import Errors from "./components/Errors.vue";

    export default{
    data() {
        return {
            v$: useVuelidate(),
            stdList:[],
            form: {
                student: {
                    fname: "",
                    mname: "",
                    lname: "",
                    dob: "",
                    birthPlace: "",
                    firstLang: "",
                    city: "",
                    state: "",
                    pin: ""
                },
                father: {
                    fname: "",
                    mname: "",
                    lname: "",
                    email: "",
                    education: "",
                    profession: "",
                    designation: "",
                    mobile: ""
                },
                mother: {
                    fname: "",
                    mname: "",
                    lname: "",
                    email: "",
                    education: "",
                    profession: "",
                    designation: "",
                    mobile: ""
                }
            }
        };
    },
    validations() {
        return {
            form: {
                student: {
                    fname: { required: helpers.withMessage('First name is required!', required) },
                    mname: { required: helpers.withMessage('Middle name is required!', required) },
                    lname: { required: helpers.withMessage('Last name is required!', required) },
                    dob: { required: helpers.withMessage('Date of Birth is required!', required) }
                },
                father: {
                    fname: { required: helpers.withMessage('First name is required!', required) },
                    mname: { required: helpers.withMessage('Middle name is required!', required) },
                    lname: { required: helpers.withMessage('Last name is required!', required) },
                    mobile: { required: helpers.withMessage('Mobile Number is required!', required) }
                },
                mother: {
                    fname: { required: helpers.withMessage('First name is required!', required) },
                    mname: { required: helpers.withMessage('Middle name is required!', required) },
                    lname: { required: helpers.withMessage('Last name is required!', required) },
                    mobile: { required: helpers.withMessage('Mobile is required!', required) }
                }
            }
        };
    },
    components: { Errors },
    methods:{
      submit(e){
        e.preventDefault()
        if(this.v$.$validate()) this.stdList.push(this.form)
        return;
      }
    }
}
</script>

<template>
  <div>
  <div class="container">
    <form  class="d-flex justify-content-between" @submit="submit">
        <div  id="student">
          <h3>Student Details :-</h3>
            <div>
                <div class="form-group my-3">
                  <label for="firstName">First Name:-</label>
                  <input formControlName="firstName" v-model="form.student.fname" @blur="v$.form.student.fname.$touch" class="form-control" type="text" id="firstName" name="firstName" placeholder="Enter Firstname"> 
                  <Errors :errors="v$.form.student.fname.$errors"></Errors>
                </div>
                <div class="form-group my-3">
                  <label for="middleName">Middle Name:-</label>
                  <input formControlName="middleName" v-model="form.student.mname" @blur="v$.form.student.mname.$touch" class="form-control" type="text" id="middleName" name="middleName" placeholder="Enter Middlename">
                  <Errors :errors="v$.form.student.mname.$errors"></Errors>
                </div>
                
                <div class="form-group my-3">
                  <label for="lastName">Last Name:-</label>
                  <input formControlName="lastName" v-model="form.student.lname" @blur="v$.form.student.lname.$touch" class="form-control" type="text" id="lastName" name="lastName" placeholder="Enter Lastname">
                  <Errors :errors="v$.form.student.lname.$errors"></Errors>
                </div>                

              </div>

            <div>
              <div class="form-group my-3">
                <label for="dob">DOB:-</label>
                <input formControlName="dob" v-model="form.student.dob" @blur="v$.form.student.dob.$touch" class="form-control" type="date" id="dob" name="dob">                
                <Errors :errors="v$.form.student.dob.$errors"></Errors>
              </div>

              <div class="form-group my-3">
                <label for="birthPlace">Birth Place:-</label>
                <input formControlName="birthPlace" v-model="form.student.birthPlace" class="form-control" type="text" id="birthPlace" name="birthPlace" placeholder="Enter Birth Place">  
              </div>

              <div class="form-group my-3">
                <label for="firstLang">First Language:-</label>
                <input formControlName="firstLang" v-model="form.student.firstLang" class="form-control" type="text" id="firstLang" name="firstLang" placeholder="Enter First Language">
              </div>
            </div>

            <div >
              <div class="form-group my-3">
                <label for="city">City:-</label>
                <input formControlName="city" v-model="form.student.city" class="form-control" type="text" id="city" name="city" placeholder="Enter Your City">  
              </div>

              <div class="form-group my-3">
                <label for="State">State:-</label>
                <input formControlName="state" v-model="form.student.state" class="form-control" type="text" id="State" name="State" placeholder="Enter Your State">
              </div>              

              <div class="form-group my-3">
                <label for="pin">Enter Pin Code:-</label>
                <input formControlName="pinCode" v-model="form.student.pin" class="form-control" type="text" id="pin" name="pin" placeholder="Pincode">
              </div>

            </div>
        </div>
        <div id="father" >
          <h3>Father's Details :-</h3>
          <div >
              <div class="form-group my-3">
                <label for="firstName">First Name:-</label>
                <input formControlName="firstName" v-model="form.father.fname" @blur="v$.form.father.fname.$touch" class="form-control" type="text" id="firstName" name="firstName" placeholder="Enter Firstname">
                <Errors :errors="v$.form.father.fname.$errors"></Errors>
              </div>
              <div class="form-group my-3">
                <label for="middleName">Middle Name:-</label>
                <input formControlName="middleName" v-model="form.father.mname" @blur="v$.form.father.mname.$touch" class="form-control" type="text" id="middleName" name="middleName" placeholder="Enter Middlename">  
                <Errors :errors="v$.form.father.mname.$errors"></Errors>
              </div>
              <div class="form-group my-3">
                <label for="lastName">Last Name:-</label>
                <input formControlName="lastName" v-model="form.father.lname" @blur="v$.form.father.lname.$touch" class="form-control" type="text" id="lastName" name="lastName" placeholder="Enter Lastname">
                <Errors :errors="v$.form.father.lname.$errors"></Errors>
              </div>
          </div>

          <div class="form-group my-3">
            <label for="email">Email :-</label>
            <input formControlName="email" v-model="form.father.email" class="form-control" type="email" id="email" name="email" placeholder="Enter Email">            
          </div>

          <div class="form-group my-3">
            <label for="education">Education Qualification:-</label>
            <input formControlName="education" v-model="form.father.education" class="form-control" type="text" id="education" name="education" placeholder="Enter Education">
          </div>
          
          <div class="form-group my-3">
            <label for="profession">Profession:-</label>
            <input formControlName="profession" v-model="form.father.profession" class="form-control" type="text" id="profession" name="profession" placeholder="Enter Profession">  
          </div>

          <div class="form-group my-3">
            <label for="designation">Designation:-</label>
            <input formControlName="desgnation" v-model="form.father.designation" class="form-control" type="text" id="designation" name="designation" placeholder="Enter Designation">
          </div>
          
          <div class="form-group my-3">
            <label for="moblie">Moblie Number:-</label>
            <input formControlName="mobile" v-model="form.father.mobile" @blur="v$.form.father.mobile.$touch" class="form-control" type="text" id="moblie" name="moblie" placeholder="Enter Mobile Number">
            <Errors :errors="v$.form.father.mobile.$errors"></Errors>
          </div>

        </div>  
        <div  id="mother">
          <h3>Mother's Details :-</h3>
          <div>
            <div class="form-group my-3">
              <label for="firstName">First Name:-</label>
              <input formControlName="firstName" v-model="form.mother.fname" @blur="v$.form.mother.fname.$touch" class="form-control" type="text" id="firstName" name="firstName" placeholder="Enter Firstname">  
              <Errors :errors="v$.form.mother.fname.$errors"></Errors>
            </div>

            <div class="form-group my-3">
              <label for="middleName">Middle Name:-</label>
              <input formControlName="middleName" v-model="form.mother.mname" @blur="v$.form.mother.mname.$touch" class="form-control" type="text" id="middleName" name="middleName" placeholder="Enter Middlename">  
              <Errors :errors="v$.form.mother.mname.$errors"></Errors>
            </div>

            <div class="form-group my-3">
              <label for="lastName">Last Name:-</label>
              <input formControlName="lastName" v-model="form.mother.lname" @blur="v$.form.mother.lname.$touch" class="form-control" type="text" id="lastName" name="lastName" placeholder="Enter Lastname">
              <Errors :errors="v$.form.mother.lname.$errors"></Errors>
            </div>
         </div>

          <div class="form-group my-3">
            <label for="email">Email :-</label>
            <input formControlName="email" v-model="form.mother.email" class="form-control" type="email" id="email" name="email" placeholder="Enter Email">
          </div>

          <div class="form-group my-3">
            <label for="education">Education Qualification:-</label>
            <input formControlName="education" v-model="form.mother.education" class="form-control" type="text" id="education" name="education" placeholder="Enter Education">
          </div>

          <div class="form-group my-3">
            <label for="profession">Profession:-</label>
            <input formControlName="profession" v-model="form.mother.profession" class="form-control" type="text" id="profession" name="profession" placeholder="Enter Profession">
          </div>

          <div class="form-group my-3">
            <label for="designation">Designation:-</label>
            <input formControlName="desgnation" v-model="form.mother.designation" class="form-control" type="text" id="designation" name="designation" placeholder="Enter Designation">
          </div>

          <div class="form-group my-3">
            <label for="moblie">Moblie Number:-</label>
            <input formControlName="mobile" v-model="form.mother.mobile" @blur="v$.form.mother.mobile.$touch" class="form-control" type="text" id="moblie" name="moblie" placeholder="Enter Mobile Number">
            <Errors :errors="v$.form.mother.mobile.$errors"></Errors>
          </div>        
        </div>

        <div>
          <h4>Emergency contect :-</h4>
          <div formArrayName="emeList">
            <div  class="form-group my-3">
              <div >
                <div>
                  <label for="designation">Name:-</label>
                  <input formControlName="name" class="form-control" type="text" id="name" name="name" placeholder="Enter Name">                      
                </div>
                <div>
                  <label for="designation">Number:-</label>
                  <input formControlName="number" class="form-control" type="text" id="number" name="number" placeholder="Enter Number">  
                </div>
              </div>
            </div>  
          </div>
          <div>
            <button type="button" >Add person</button>
            <button type="button">Remove person</button>

          </div>
          <button class="btn btn-success" type="submit">Submit</button>
          </div>
      </form>
  </div>
</div>
<!-- {{form.value | json}} -->

{{Object.keys(v$.form.father)}}
</template>

<style>
</style>
