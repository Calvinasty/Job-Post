<template>
    <AuthLayout>
        <component v-if="routing == 'login'" :is="signIn"></component>
        <component v-if="routing == 'register'" :is="signUp"></component>
        <component v-if="routing == 'poster-register'" :is="posterSignUp"></component>
    </AuthLayout>

</template>

<script>
    import AuthLayout from '../components/authpage/AuthLayout.vue';
    import SignInPage from '@/components/authpage/signin/SignInPage.vue'
    import SignUpPage from '../components/authpage/signupComponents/SignUpPage.vue';
    import JobPosterSignup from '../components/authpage/signupComponents/JobPosterSignup.vue'
    export default {
        components: {
            AuthLayout,
            SignInPage,
            SignUpPage,
            JobPosterSignup
        },
        data(){
            return {
                routing: 'register',
                signIn: SignInPage,
                signUp: SignUpPage,
                posterSignUp:JobPosterSignup
            }
        },
        beforeMount() {
            this.$route.params.id == 'login' 
            ? this.showLogin() 
            : this.$route.params.id=='register'
            ? this.showRegister()
            :this.showPosterRegister()
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
            }
        }
    }
</script>

<style lang="css" scoped>

</style>