<template>
    <AuthLayout>
        <component v-if="routing == 'login' " :is="signIn"></component>
        <component v-if="routing == 'register'" :is="signUp"></component>
        <component v-if="routing == 'poster-register'" :is="posterSignUp"></component>
        <component v-if="routing == 'adminlogin'" :is="signInAdmin"></component>
    </AuthLayout>

</template>

<script>
    import AuthLayout from '../components/authpage/AuthLayout.vue';
    import SignInPage from '../components/authpage/signinComponents/SignInPage.vue'
    import SignUpPage from '../components/authpage/signupComponents/SignUpPage.vue';
    import JobPosterSignup from '../components/authpage/signupComponents/JobPosterSignup.vue'
    import SignInAdminPage from '../components/authpage/signinComponents/SignInAdminPage.vue';
    export default {
        components: {
            AuthLayout,
            SignInPage,
            SignUpPage,
            JobPosterSignup,
            SignInAdminPage
        },
        data(){
            return {
                routing: '',
                signIn: SignInPage,
                signUp: SignUpPage,
                posterSignUp:JobPosterSignup,
                signInAdmin: SignInAdminPage
            }
        },
        beforeMount() {
            this.$route.params.id == 'login' 
            ? this.showLogin() 
            : this.$route.params.id=='register'
            ? this.showRegister()
            : this.$route.params.id == 'poster-register'
            ? this.showPosterRegister()
            : this.$route.params.id == 'adminlogin'
            ? this.showAdminLogin()
            : this.returnRoute()

            
        },
        methods:{
            showLogin(){
                this.routing = 'login'
            },
            showRegister(){
                this.routing = 'register'
            },
            showPosterRegister(){
                this.routing='poster-register'
            },
            showAdminLogin() {
                this.routing = 'adminlogin'
            },
            returnRoute(){
                this.routing = ''
            }
        }
    }
</script>

<style lang="css" scoped>

</style>