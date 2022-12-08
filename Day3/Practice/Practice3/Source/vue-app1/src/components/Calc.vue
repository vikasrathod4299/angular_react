
<template>
    <h1>{{result}}</h1>
    <button v-on:click='calculate()'>Calculate</button>
</template>


<script>
console.log(this.form);
    export default{
        props:{
            form:{
                num1:Number,
                num2:Number,
                opr:String
            }
        },
        data(){
            return {
                result:''
            }
        },
        methods:{
            calculate(){

                switch(this.form.opr){
                    case '+':
                        this.result = this.form.num1 + this.form.num2
                        break;
                    case '-':
                        this.result = this.form.num1 - this.form.num2
                        break;
                    case '*':
                        this.result = this.form.num1 * this.form.num2
                        break;
                    case '/':
                        this.result = this.form.num1 / this.form.num2
                        break;
                    }       
            }
        }

    }

</script>


<style>
    
</style>
