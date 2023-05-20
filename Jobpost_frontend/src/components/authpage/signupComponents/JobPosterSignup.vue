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
                <form action="">
                    <InputComponent />
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
    padding:90px 300px;
}
.auth-container h1{
    color: #7FBF4C;
    font-size: 20px;
}

.auth-container h3{
    margin-bottom: 20px;
    font-size: 13px;
}

.form-container{
    background: #ffff;
    flex:1;
    height: 100%;
    max-width: 1123px;
    padding: 60px;
    border-radius: 60px;

}

.form-container header{
   row-gap:60px;
}
.form-container img{
    height: 35px;
    width: auto;
}

</style>