<template>
    <AuthLayout class="auth-container">
        <div class="form-container">
           <JobPosterFormHeader/>
            <JobPosterForm/>
           <PageIndicator :isActive="pageNum"/>
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
    pageNum:0,

    methods:{
            handlePageNavigation(page){
                this.pageNum=page
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
    padding: 0px 10px;
}

}
</style>