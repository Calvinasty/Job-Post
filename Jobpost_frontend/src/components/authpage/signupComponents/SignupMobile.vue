<template>
    <div class="auth-mobile-container">
        <form @submit.prevent="handleRegister()" v-if="next !== 2">
            <Transition name="slide-fade">
                <div v-if="next == 0" class="first">
                    <h1 v-html="form1header"></h1>
                    <h3 v-html="form1sub"></h3>
                    <InputComponent label="First Name" type="text" name="fname"/>
                    <aside class="other-names">
                        <InputComponent label="Middle Name" type="text" name="mdname"/>
                        <InputComponent label="Last Name" type="text" name="lname"/>
                    </aside>
                    <InputComponent label="Email" type="email" name="email"/>
                    <InputComponent label="Password" type="password" name="password"/>
                    <InputComponent label="Confirm Password" type="password" name="confirmPass"/>
                    <button type="button" @click="setNext(1)">
                        Continue <span class="material-symbols-outlined">arrow_right_alt</span>
                    </button>
                </div>
            </Transition>
            <Transition name="slide-fade">
                <div v-if="next == 1" class="second">
                    <h1 v-html="form2header"></h1>
                    <h3 v-html="form2sub"></h3>
                    <InputComponent label="Select Date of Birth" type="date" name="date"/>
                    <span>
                        <label for="fname">Gender</label>
                        <select name="gender" id="gender">
                            <option value="default">Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </span>
                    <InputComponent label="Select your profile picture (optional)" type="file" name="profile"/>

                    <button type="submit">
                        SignUp <span class="material-symbols-outlined">how_to_reg </span>
                    </button>

                    <button class="prev-btn" type="button" @click="setPrev(0)">
                        <span class="material-symbols-outlined"> arrow_back_ios_new</span> Back 
                    </button>
                </div>
            </Transition>

        </form>
        <SignupSuccess v-if="next == 2"/>

    </div>
</template>

<script>
    import InputComponent from '../InputComponent.vue'
    import SignupSuccess from './SignupSuccess.vue'
    export default {
        components:{
            InputComponent,
            SignupSuccess
        },
        data(){
            return{
                next: 0,
                form1header: 'Sign Up',
                form1sub: 'Enter your details',
                form2header: 'Sign Up Continue',
                form2sub: 'Enter additional details'
            }
        },
        methods:{
            setNext(num){
                this.next = num
            },
            setPrev(num){
                this.next = num
            },
            handleRegister(){
                this.next = 2
                console.log('Register')
            }
        }
    }
</script>

<style lang="css" scoped>
    @import '../../../assets/auth_assets/signup_js_mobile.css';
</style>