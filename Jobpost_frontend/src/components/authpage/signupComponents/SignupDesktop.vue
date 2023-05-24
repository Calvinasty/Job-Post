<template>
    <div class="auth-desk-container">
        <SignupFormComponent 
            :next="next" 
            :form1header="form1header" 
            :form1sub="form1sub"
            :form2header="form2header"
            :form2sub="form2sub"
            :setNext="setNext"
            :setPrev="setPrev"
            :handleRegister="handleRegister"
            :handleHome="handleHome"
            :screen="screen"
        />
        <SignupSuccess :handleRoute="handleHome" v-if="next == 2" />

    </div>
</template>

<script>
import SignupFormComponent from './SignupFormComponent.vue';
import SignupSuccess from './SignupSuccess.vue'
export default {
    components: {
        SignupFormComponent,
        SignupSuccess
    },
    data() {
        return {
            screen: 'desktop',
            next: 0,
            form1header: 'Sign Up',
            form1sub: 'Enter your details',
            form2header: 'Sign Up Continue',
            form2sub: 'Enter additional details'
        }
    },
    methods: {
        setNext(num) {
            this.next = num
        },
        setPrev(num) {
            this.next = num
        },
        handleRegister() {
            this.setNext(2)
            console.log('Register')
        },
        handleHome() {
            this.$router.push('/userprofile')
        }
    }
}
</script>

<style lang="css" scoped>
@import '../../../assets/auth_assets/signup_js_mobile.css';
</style>