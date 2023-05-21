<template>
    <AuthLayout class="auth-container">

        <div class="form-container">
            <header class="flex-center">
                <img src="/images/logo.png" alt="logo">
                <span style="text-align: center;">
                    <h1>Sign Up</h1>
                    <h3>Enter your details</h3>
                </span>
            </header>
            <main>
                <form class="flex-center">
                    <div class=" input-container flex-center-row">
                        <InputComponent :type="inputData[0].type" :label="inputData[0].label" :inputId="inputData[0].inputId" :name="inputData[0].name" :placeHolder="inputData[0].placeholder" />
                        <InputComponent :type="inputData[1].type" :label="inputData[1].label" :inputId="inputData[1].inputId" :name="inputData[1].name" :placeHolder="inputData[1].placeholder" />

                    </div>
                    <div class="input-container  flex-center-row">
                        <InputComponent :type="inputData[2].type" :label="inputData[2].label" :inputId="inputData[2].inputId" :name="inputData[2].name" :placeHolder="inputData[2].placeholder" />
                        <InputComponent :type="inputData[3].type" :label="inputData[3].label" :inputId="inputData[3].inputId" :name="inputData[3].name" :placeHolder="inputData[3].placeholder" />

                    </div>
                    <div class="input-container flex-center-row">
                        <InputComponent :type="inputData[4].type" :label="inputData[4].label" :inputId="inputData[4].inputId" :name="inputData[4].name" :placeHolder="inputData[4].placeholder" />
                        <InputComponent :type="inputData[5].type" :label="inputData[5].label" :inputId="inputData[5].inputId" :name="inputData[5].name" :placeHolder="inputData[5].placeholder" />

                    </div>
                    <div class="buttons flex-center-row">
                        <button type="submit" class="flex-center-row">
                            SignUp <span class="material-symbols-outlined">arrow_right_alt</span>
                        </button>
                        <p>Already registered? <router-link to="/auth/login">Sign in</router-link></p>
                    </div>
                </form>
            </main>
        </div>
    </AuthLayout>
</template>

<script>
import AuthLayout from '../AuthLayout.vue';
import InputComponent from '../InputComponent.vue';
export default {
  components: { AuthLayout, InputComponent },
    name: 'JobPostJobPosterSignup',

    data() {
        return {
            inputData:[
                {
                    placeholder:'Enter Organizations name',
                    label:'Organization Name',
                    name:'name',
                    value:'',
                    inputId:'job-poster-name',
                    type:'text'

                },
                {
                    placeholder:'Enter Organizations email',
                    label:'Organization Email',
                    name:'email',
                    value:'',
                    inputId:'job-poster-email',
                    type:'email'

                },
                {
                    placeholder:'Enter Password',
                    label:'Password',
                    name:'password',
                    value:'',
                    inputId:'job-poster-password',
                    type:'password'

                },
                {
                    placeholder:'Confirm Password',
                    label:'Confirm Password',
                    name:'confirm-password',
                    value:'',
                    inputId:'job-poster-confirm-password',
                    type:'password'

                },
                {
                    placeholder:'Organizations Website',
                    label:'Enter Website URL',
                    name:'website',
                    value:'',
                    inputId:'job-poster-website',
                    type:'text'

                },
                {
                    placeholder:'Enter Organizations name',
                    label:'Organization Name',
                    name:'name',
                    value:'',
                    inputId:'job-poster-name',
                    type:'text'

                },
            ]
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.auth-container{
    background-image: url(/images/maxim-auth-background.jpeg);
    width:100dvw;
    height:100vh;
    padding: 55px 105px;
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

}

.form-container header{
   row-gap:20px;
}

.form-container form{
    gap:19px;
}
.form-container img{
    height: 35px;
    width: auto;
   
}

.input-container{
    flex: 1;
    width: 100%;
    column-gap: 49px;

}
.buttons{
    width: 100%;
    gap:31px;
    padding:20px 0px;
    /* background: #000; */
    border-bottom: 2px solid #D9D9D9;
}

.buttons a{
    color:#7FBF4C;
    text-decoration: none;
}
.buttons button{
 
    justify-content: flex-start;
    padding: 15px 40px;
    border-radius: 10px;
    width: 195px;
    border: none;
    background-color: #7FBF4C;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
}
</style>