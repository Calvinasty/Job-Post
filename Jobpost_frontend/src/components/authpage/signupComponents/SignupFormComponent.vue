<template>
    <form @submit.prevent="() => handleSubmit()" v-if="next !== 2">
        <Transition name="slide-fade">
            <div v-show="next == 0" class="first">
                <div v-if="screen=='desktop'" class="headers">
                    <div class="image-container">
                        <span class="material-symbols-outlined" @click="$router.back()"> west</span>
                        <img src="/images/logo.png" alt="logo">
                    </div>
                    <h1 v-html="form1header"></h1>
                    <h3 v-html="form1sub"></h3>
                </div>

                <h1 v-if="screen=='mobile'" v-html="form1header"></h1>
                <h3 v-if="screen=='mobile'" v-html="form1sub"></h3>

                <InputComponent placeHolder="First Name" type="text" name="fname" :handleInput="handleUserInput" />
                <aside class="side-by-side">
                    <InputComponent placeHolder="Middle Name" type="text" name="mdname" :handleInput="handleUserInput" />
                    <InputComponent placeHolder="Last Name" type="text" name="lname" :handleInput="handleUserInput" />
                </aside>
                <InputComponent placeHolder="Email" type="email" name="email" :handleInput="handleUserInput" />
                <InputComponent placeHolder="Password" type="password" name="password" :label="passLabel" :handleInput="handleUserInput" />
                <InputComponent placeHolder="Confirm Password" type="password" name="confirmPass" :handleInput="handleUserInput" />

                <button type="button" @click.prevent="()=>setNext(1)">
                    Continue <span class="material-symbols-outlined">arrow_right_alt</span>
                </button>
                <span class="progress">
                    <span></span>
                    <span></span>
                </span>
            </div>
        </Transition>

        <Transition name="slide-fade">
            <div v-show="next == 1" class="second">
                <div v-if="screen == 'desktop'" class="headers">
                    <img src="/images/logo.png" alt="logo">
                    <h1 v-html="form2header"></h1>
                    <h3 v-html="form2sub"></h3>
                </div>

                <h1 v-if="screen=='mobile'" v-html="form1header"></h1>
                <h3 v-if="screen=='mobile'" v-html="form1sub"></h3>

                <InputComponent label="Select your date of Birth" type="date" name="date" :handleInput="handleUserInput" />
                
                <aside class="side-by-side">
                    <span>
                        <label for="gender">Gender</label>
                        <select v-model="inputData.gender" :handleInput="handleUserInput">
                            <option value="default">Select Your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </span>
                    <InputComponent placeHolder="Contact eg. +233 54..." label="&emsp;" type="text" name="contact" :handleInput="handleUserInput"/>
                </aside>

                <aside class="side-by-side btn-group">
                    <!-- Back button -->
                    <button class="prev-btn" type="button" @click.prevent="()=>setPrev(0)">
                        <span class="material-symbols-outlined"> west</span> Back
                    </button>
                    <button type="submit">
                        SignUp
                        <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
                        <span class="material-symbols-outlined" v-show="loading == false"> east </span>
                    </button>
                </aside>

                <!-- Progress indicator -->
                <span class="progress progress-2">
                    <span></span>
                    <span></span>
                </span>
            </div>
        </Transition>
    </form>
    <ToastMessage v-show="toast.active" :toast="toast"/>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '../../../stores/users';
import { mapActions } from 'pinia';
import InputComponent from '../InputComponent.vue';
import ToastMessage from '../../utils/ToastMessage.vue'
const BASE_URL = import.meta.env.VITE_BASE_URL

export default {
    components:{InputComponent, ToastMessage},

    data() {
            return {
                inputData: {
                    email: '',
                    password: '',
                    fname: '',
                    mdname: '',
                    lname: '',
                    confirmPass: '',
                    date: '',
                    gender: '',
                    contact: ''
                },
                passLabel: '<h5 class="red-text">*upper/lower/special eg. <span class="green-text">Kode@123</span></h5>',
                toast:{
                    active: false, msg:'', color:''
                },
                loading: false
            }
        },

    methods: {
        ...mapActions(useUserStore,['setUser']),
        handleUserInput(data){
            // console.log(data);
            if(data.inputName == 'email') { this.inputData.email = data.inputValue}
            if(data.inputName == 'password') {this.inputData.password = data.inputValue}
            if(data.inputName == 'confirmPass') {this.inputData.confirmPass = data.inputValue}
            if(data.inputName == 'fname') {this.inputData.fname = data.inputValue}
            if(data.inputName == 'mdname') {this.inputData.mdname = data.inputValue}
            if(data.inputName == 'lname') {this.inputData.lname = data.inputValue}
            if(data.inputName == 'date') {this.inputData.date = data.inputValue}
            if(data.inputName == 'contact') {this.inputData.contact = data.inputValue}
        },

        handleSubmit() {
            this.loading = true
            const newFormData= new FormData()
            if(this.inputData.mdname!==''){newFormData.append("middle_name",this.inputData.mdname)}       
            newFormData.append("first_name",this.inputData.fname)
            newFormData.append("last_name",this.inputData.lname)
            newFormData.append("gender",this.inputData.gender)
            newFormData.append("date_of_birth",this.inputData.date)
            newFormData.append("email",this.inputData.email)
            newFormData.append("password",this.inputData.password)
            newFormData.append("confirm_password", this.inputData.confirmPass)
            newFormData.append("phone", this.inputData.contact)
            // console.log(newFormData);
            axios.post(`${BASE_URL}/jobSeeker/registerJobSeeker`, newFormData)
            .then(res => {
                console.log(res?.data);
                if(res.data?.message){
                    let msg=res.data.message
                    this.showToast(msg, 'success')
                    this.loading = false
                }
                if(res.data?.token){
                    const token= JSON.stringify(res.data.token)
                    localStorage.setItem('userToken',token)  
                }
                if(res.data?.user){
                    const user = res.data.user
                    this.setUser(user)
                    this.setNext(2)
                }
            })
            .catch(err => {
                let msg 
                        if(err.response) 
                            msg = err.response.data.message 
                        if(err.message)
                            msg = err.message
                        
                        this.showToast(msg, 'error')
                        this.loading = false
                        console.log(err)
            })                        
        },

        showToast(msg, color){
            this.toast = {
                active: true, msg, color
            }
            setTimeout(()=>{
                this.toast = {active: false, msg:'', color:''}
            }, 6000)
        }
    },

    props: [
        "screen",
        "next",
        "form1header",
        "form1sub",
        "form2header",
        "form2sub",
        "setNext",
        "setPrev",
        // "handleRegister",
        "handleHome"
    ]
}
</script>

<style lang="css" scoped>
@import '../../../assets/auth_assets/signup_js_mobile.css';
</style>