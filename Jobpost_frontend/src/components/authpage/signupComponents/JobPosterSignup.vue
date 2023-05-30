<template>
    <AuthLayout class="auth-container">
        <div class="form-container" :class="{centerForm:activeClass[2]}">
           <JobPosterFormHeader :pageNum="pageNum" v-if="pageNum!==2"/>
            <JobPosterForm :pageNumber="pageNum" :pageNavigation="handlePageNavigation" :userInfo="userInfo" :handleUserInput="handleUserInput"/>
           <PageIndicator  :activeClass="activeClass"/>
        </div>

    </AuthLayout>
</template>

<script>
import AuthLayout from '../AuthLayout.vue';
import PageIndicator from './PageIndicator.vue';
import JobPosterFormHeader from './JobPosterFormHeader.vue';
import JobPosterForm from './JobPosterForm.vue';
export default {
  components: { 
    AuthLayout, 
    JobPosterFormHeader,
    JobPosterForm,
    PageIndicator },
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
                website:"",
                companyLogo:"",
                phone:"",
                location:"",
                verification:""
            }
        }
    },
    mounted(){
        this.handleActivePage()

    },

    methods:{
            handlePageNavigation(btn){
                const actionText=btn.toLowerCase()
                if(actionText=='next'||actionText=='register'){
                    this.pageNum>=2
                    ?this.pageNum
                    :++this.pageNum
                    this.handleActivePage(this.pageNum)
                    this.handleUserInput()
                    // console.log(this.pageNum);
                }else{
                    this.pageNum<=0
                    ?this.pageNum
                    :--this.pageNum
                    this.handleActivePage(this.pageNum)
                }
                // console.log(this.pageNum,actionText);
            },
            handleUserInput(data){
               if(data?.inputName=='name'){ this.userInfo.name=data?.inputValue }
               if(data?.inputName=='email'){ this.userInfo.email=data?.inputValue }
               if(data?.inputName=='password'){this.userInfo.password=data?.inputValue }
               if(data?.inputName=='confirmPassword'){this.userInfo.confirmPassword=data?.inputValue }
               if(data?.inputName=='website'){this.userInfo.website=data?.inputValue  }
               if(data?.inputName=='companyLogo'){ this.userInfo.companyLogo=data?.inputValue }
               if(data?.inputName=='phone'){this.userInfo.phone=data?.inputValue}
               if(data?.inputName=='location'){this.userInfo.location=data?.inputValue}
               if(data?.inputName=='verification'){this.handleVerify()}
               if(this.pageNum>=2){
                   this.handleSignUp()
               }
               
                     
            },
            handleVerify(data){
                this.userInfo.verification=data?.verification
            },
            handleSignUp(){
                const userData={
                name:this.userInfo.name,
                email:this.userInfo.email,
                password:this.userInfo.password,
                confirmPassword:this.userInfo.confirmPassword,
                website:this.userInfo.website,
                companyLogo:this.userInfo.companyLogo,
                phone:this.userInfo.phone,
                location:this.userInfo.location,
                verification:this.userInfo.verification
            }
            console.log(userData);
            },
            handleActivePage(page=0){
                this.activeClass.map((_activeItem,index)=>(index==page?this.activeClass[index]=true:this.activeClass[index]=false))
                // console.log(this.activeClass);
        }
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
    background: #ffff;
    align-items: flex-start;
    flex:1;
    height: 100%;
    max-width: 1123px;
    padding: 30px 60px;
    border-radius: 60px;
    position :relative;
    transition: all .4s ease;
   
}
.form-container.centerForm{
align-items: center;
justify-content: center;
margin: 0 auto;
background-color: #f1f1f1;
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