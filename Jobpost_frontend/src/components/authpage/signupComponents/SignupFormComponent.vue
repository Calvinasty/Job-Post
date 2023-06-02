<template>
    <form @submit.prevent="() => handleSubmit()" v-if="next !== 2">
        <Transition name="slide-fade">
            <div v-if="next == 0" class="first">
                <div v-if="screen=='desktop'" class="headers">
                    <img src="/images/logo.png" alt="logo">
                    <h1 v-html="form1header"></h1>
                    <h3 v-html="form1sub"></h3>
                </div>

                <h1 v-if="screen=='mobile'" v-html="form1header"></h1>
                <h3 v-if="screen=='mobile'" v-html="form1sub"></h3>

                <InputComponent placeHolder="First Name" type="text" name="fname" :handleInput="handleUserInput" />
                <aside class="other-names">
                    <InputComponent placeHolder="Middle Name" type="text" name="mdname" :handleInput="handleUserInput" />
                    <InputComponent placeHolder="Last Name" type="text" name="lname" :handleInput="handleUserInput" />
                </aside>
                <InputComponent placeHolder="Email" type="email" name="email" :handleInput="handleUserInput" />
                <InputComponent placeHolder="Password" type="password" name="password" :handleInput="handleUserInput" />
                <InputComponent placeHolder="Confirm Password" type="password" name="confirmPass" :handleInput="handleUserInput" />

                <button type="button" @click.prevent="setNext(1)">
                    Continue <span class="material-symbols-outlined">arrow_right_alt</span>
                </button>
                <span v-if="screen == 'desktop'" class="progress">
                    <span></span>
                    <span></span>
                </span>
            </div>
        </Transition>

        <Transition name="slide-fade">
            <div v-if="next == 1" class="second">
                <div v-if="screen == 'desktop'" class="headers">
                    <img src="/images/logo.png" alt="logo">
                    <h1 v-html="form2header"></h1>
                    <h3 v-html="form2sub"></h3>
                </div>

                <h1 v-if="screen=='mobile'" v-html="form1header"></h1>
                <h3 v-if="screen=='mobile'" v-html="form1sub"></h3>

                <InputComponent placeHolder="Select Date of Birth" type="date" name="date" :handleInput="handleUserInput" />
                <span>
                    <label for="fname">Gender</label>
                    <select name="gender" id="gender" v-model="inputData.gender" :handleInput="handleUserInput">
                        <option value="default">Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </span>
                <InputComponent placeHolder="Contact eg. +233 54..." type="text" name="contact" />

                <button type="submit">
                    SignUp <span class="material-symbols-outlined">how_to_reg </span>
                </button>

                <!-- Back button -->
                <button class="prev-btn" type="button" @click.prevent="setPrev(0)">
                    <span class="material-symbols-outlined"> arrow_back_ios_new</span> Back
                </button>
                <!-- Progress indicator -->
                <span v-if="screen == 'desktop'" class="progress progress-2">
                    <span></span>
                    <span></span>
                </span>
            </div>
        </Transition>
    </form>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '../../../stores/users';
import { mapActions } from 'pinia';
import InputComponent from '../InputComponent.vue';
export default {
    components:{InputComponent},

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
                    gender: ''
                }
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

            // if(data.inputName == 'gender') {
            //     this.inputData.gender = data.inputValue
            // }
        },

        handleSubmit() {
            // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            // const user={
            //     first_name:this.inputData.fname,
            //     last_name:this.inputData.lname,
            //     middle_name:this.inputData.mdname,
            //     gender:this.inputData.gender,
            //     date_of_birth:this.inputData.date,
            //     email:this.inputData.email,
            //     password:this.inputData.password,
            //     confirm_password: this.inputData.confirmPass
            // }
            const newFormData= new FormData()
            // newFormData.append('user',user)
            if(this.inputData.mdname!==''){newFormData.append("middle_name",this.inputData.mdname)}       
            newFormData.append("first_name",this.inputData.fname)
            newFormData.append("last_name",this.inputData.lname)
            newFormData.append("gender",this.inputData.gender)
            newFormData.append("date_of_birth",this.inputData.date)
            newFormData.append("email",this.inputData.email)
            newFormData.append("password",this.inputData.password)
            newFormData.append("confirm_password", this.inputData.confirmPass)
            // console.log(newFormData);
            axios.post("http://192.168.1.36:5000/jobSeeker/registerJobSeeker", newFormData)
            .then(res => {
                console.log(res?.data);
                if(res.data?.token){
                    const token= JSON.stringify(res.data.token)
                    localStorage.setItem('userToken',token)  
                }
            })
            .then((res)=>{
                const user =res?.data.user
                this.setUser(user)
                this.setNext(2)
            })
            .catch(err => {
                let msg =err.responds?.data.message
                alert(msg)
                console.log(err);
            })                        
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