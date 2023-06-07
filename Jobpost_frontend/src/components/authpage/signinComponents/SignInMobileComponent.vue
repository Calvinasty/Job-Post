<template>
    <div class="signin-mobile">
        <header class="flex-center">
            <img src="/images/logo.png" alt="">
            <h3>{{ nameHeader }}</h3>
        </header>

        <div v-if="showToggle" class="login-option flex-center-row">
            <div id="mobile-btn">Job Seeker</div>
            <button type="button" class="toggle-btn" id="jobSeeker" @click="jobSeeker()">Job Seeker</button>
            <button type="button" class="toggle-btn" id="jobPoster" @click="jobPoster()">Job Poster</button>
        </div>

        <div class="signin-header">
            <h4>{{ nameTitle }}</h4>
        </div>

        <form class="signin-field">
            <div>
                <InputComponent type="email" id="email" name="email" placeHolder="Email" :handleInput="handleUserInput" />
            </div>

            <div>
                <InputComponent type="password" id="password" name="password" placeHolder="Password" :handleInput="handleUserInput" />
            </div>

            <button type="submit" class="mbn-btn">Sign In</button>

            <button class="forgot-btn">Forgotten Password? <span @click="toForgotten()">Click Here</span></button>

            <button v-if="showText" class="signup-btn">{{ userInfo }} <span @click="toSignup()">Register Now</span></button>
        </form>
    </div>
</template>

<script>
import InputComponent from '../InputComponent.vue'
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    export default {
        components: {
            InputComponent
        },

        data(){
            return{
                inputData: {
                    email: '',
                    password: ''
                },
                userType: "JobSeeker"
            }
            
        },

        props:[
            'nameHeader',
           'nameTitle',
           'userInfo',
           'showText',
           'showToggle'
       ],

       methods: {
            toSignup() {
                this.$router.push('/auth')
            },

            toForgotten() {
                this.$router.push('/auth/forgot-password')
            },

            jobPoster() {
                var z = document.getElementById("mobile-btn");
                z.style.left = "50%"
                z.innerHTML="Job Poster"
            
                this.userType = "jobPoster"

                console.log(this.userType);
            
            },

            jobSeeker() {
                var z = document.getElementById("mobile-btn");
                z.style.left = "0"
                z.innerHTML="Job Seeker"
                this.userType = "jobSeeker"

                console.log(this.userType);
            },

            handleUserInput(data){
                console.log(data);
                if(data.inputName == 'email') {
                    this.inputData.email = data.inputValue
                }

                if(data.inputName == 'password') {
                    this.inputData.password = data.inputValue
                }
            },

            handleSignIn() {
                console.log('Hello', this.inputData.email.match((validRegex)));
                const user={
                    email:this.inputData.email,
                    password:this.inputData.password
                }

                // if(user.email== '' || user.password=='') {
                //    return alert('Email and Password is required')
                // }
                // else {
                //     console.log(user);
                // }
                
                console.log(user)
            },

            
        }
    }
</script>

<style lang="css" scoped>
    .signin-mobile {
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 40px;
        height: 100dvh;
        width: 100dvw;
    }

    header {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        color: #88CC00;
        row-gap: 10px;
    }

    header img {
        width: 60%;
        padding-bottom: 13px;
    }

    .login-option {
        width: 80%;
        border: 1px solid #88CC00;
        border-radius: 5px 0px 0px 5px;
        position: relative;
    }

    .toggle-btn {
        width: 100%;
        padding: 10px 0;
        cursor: pointer;
        background: transparent;
        border: 0;
        outline: none;
        font-weight: 700;
        font-size: 14px;
        color: #7FBF4C;
    }

    #mobile-btn {
        top: 0;
        left: 0;
        position: absolute;
        width: 50%;
        height: 40px;
        background: #88CC00;
        transition: .5s;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
    }

    .signin-header {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        text-align: center;
        width: 60%;
    }

    .signin-header h4 {
        font-weight: 600;
        font-size: 20px;
        line-height: 22px;
        color: #88CC00;
        text-transform: uppercase;
    }
    .signin-header p {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #7D7474;
    }
    .signin-field {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        width: 80%;
    }

    /* .signin-field div {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        position: relative;
    } */
    /* .signin-field div label {
        font-weight: 400;
        font-size: 18px;
        line-height: 16px;
    }

    .signin-field div input {
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #88CC00;
    }

    .signin-field div span {
        position: absolute;
        top: 40px;
        left: 260px;
        color: #88CC00;
    } */

    .mbn-btn {
        padding: 13px;
        background: #7FBF4C;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .forgot-btn, .signup-btn {
        background: #fff;
        border: none;
        font-size: 14px;
        font-weight: 500;
    }

    .forgot-btn span, .signup-btn span {
        color: #7FBF4C;
        cursor: pointer;
    }

    /* .signin-field p {
        text-align: center;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
    } 
    .signin-field p a {
        color: #7FBF4C;
    } */
</style>