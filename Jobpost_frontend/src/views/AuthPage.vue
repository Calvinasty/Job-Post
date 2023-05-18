<template>
    <AuthLayout>
        <component v-if="routing == 'login'" :is="signIn"></component>
        <component v-if="routing == 'register'" :is="signUp"></component>
    </AuthLayout>
</template>

<script>
    import AuthLayout from '../components/authpage/AuthLayout.vue';
    import SignInPage from '../components/authpage/SignInPage.vue';
    import SignUpPage from '../components/authpage/signupComponents/SignUpPage.vue';
    export default {
        components: {
            AuthLayout,
            SignInPage,
            SignUpPage
        },
        data(){
            return {
                routing: 'register',
                signIn: SignInPage,
                signUp: SignUpPage
            }
        },
        beforeMount() {
            this.$route.params.id == 'login' ? this.showLogin() : this.showRegister()
        },
        methods:{
            showLogin(){
                this.routing = 'login'
            },
            showRegister(){
                this.routing = 'register'
            }
        }
    }
</script>

<style lang="css" scoped>

</style>