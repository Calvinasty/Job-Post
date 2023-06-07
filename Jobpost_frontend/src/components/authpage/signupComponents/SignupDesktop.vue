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
        <SignupSuccess :handleRoute="handleHome" :userEmail="user.email" v-if="next == 1" />

    </div>
</template>

<script>
import {mapState} from 'pinia'
import { useUserStore } from '../../../stores/users';
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
            form1header: 'SIGN UP',
            form1sub: 'Create a Job Seeker account',
            form2header: 'SIGN UP',
            form2sub: 'Enter additional details'
        }
    },
    computed:{
        ...mapState(useUserStore, ['user'])
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