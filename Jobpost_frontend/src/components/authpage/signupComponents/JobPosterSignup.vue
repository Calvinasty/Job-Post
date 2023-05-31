<template>
    <AuthLayout class="auth-container">
        <div class="form-container" :class="{centerForm:pageNum==1}">
           <JobPosterFormHeader :pageNum="pageNum" v-if="pageNum==0"/>
            <JobPosterForm :pageNumber="pageNum" :handleSignUp="handleComapnySignUp" :handleVerify="handleVerify" :userInfo="userInfo" :handleUserInput="handleUserInput"/>
        </div>

    </AuthLayout>
</template>

<script>
import axios from 'axios';
import AuthLayout from '../AuthLayout.vue';
import JobPosterFormHeader from './JobPosterFormHeader.vue';
import JobPosterForm from './JobPosterForm.vue';
export default {
  components: { 
    AuthLayout, 
    JobPosterFormHeader,
    JobPosterForm },
    name: 'JobPostJobPosterSignup',
   
    data(){
        return{
            activeClass:[false,false,false],
            pageNum:0,
            userInfo:{
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
                phone:"",
                verification:""
            }
        }
    },
    mounted(){
      

    },

    methods:{
            handleComapnySignUp(){
                this.handleUserInput()

                const userData={
                name:this.userInfo.name,
                email:this.userInfo.email,
                password:this.userInfo.password,
                confirmPassword:this.userInfo.confirmPassword,
                phone:this.userInfo.phone,
                verification:this.userInfo.verification
            }
                axios.post('http://192.168.1.53:3000/company',userData)
               .then(res=>{
                    console.log(res);
                    res.status==201?++this.pageNum:alert('invalid Input')
               })
                .catch(err=>{
                    console.log(err);
                })
                },
            handleUserInput(data){
               if(data?.inputName=='name'){ this.userInfo.name=data?.inputValue }
               if(data?.inputName=='email'){ this.userInfo.email=data?.inputValue }
               if(data?.inputName=='password'){this.userInfo.password=data?.inputValue }
               if(data?.inputName=='confirmPassword'){this.userInfo.confirmPassword=data?.inputValue }
               if(data?.inputName=='phone'){this.userInfo.phone=data?.inputValue}
               if(data?.inputName=='verification'){this.handleVerify()}                      
            },
            handleVerify(data){
                this.userInfo.verification=data?.verification
            },
}
};


</script>

<style lang="css" scoped>
.auth-container{
    background-image: url(/images/maxim-auth-background.jpeg);
    width:100dvw;
    height:100vh;
    padding: 55px 105px;
    background-color: rgba(28, 48, 12, 0.55);
    background-blend-mode: overlay;
}
.auth-container h1{
    color: #7FBF4C;
    font-size: 20px;
}

.auth-container h3{
    margin-bottom: 30px;
    font-size: 13px;
}

.form-container{
    background: rgba(255, 255, 255, 1);
    align-items: flex-start;
    height: 838px;
    width: 701px;
    border-radius: 20px;
    padding: 30px 50px;
    position :relative;
    transition: all .4s ease;
   
}
.form-container.centerForm{
align-items: center;
justify-content: center;
margin: 0 auto;
background-color: transparent;
}


@media screen and (max-width:786px) {
    .auth-container{ padding: 20px 50px; }
    .form-container{ padding: 15px 30px; }

    
}
@media screen and (max-width:600px) {
    .auth-container{
    padding:0;
    background: #fff;
}

}

@media screen and (max-width:480px){
.form-container{
    row-gap: 5px;
    padding: 50px 10px;
  
}

}
@media screen and (min-width:1024px) {
    .form-container{
        justify-content:center;
        align-items:center ;
        height: fit-content;
    }
    
}
</style>