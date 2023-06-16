<template>
    <div class="signin-desktop">
        <div class="signin">
            <header>
                <div class="image-box">
                    <span class="material-symbols-outlined back-arrow" @click="$router.back()"> west</span>
                    <img src="/images/logo.png" alt="">
                </div>

                <h2>{{ nameHeader }}</h2>

                <div v-if="showToggle" class="login-option flex-center-row">
                    <div id="btn">Job Seeker</div>
                    <button type="button" class="toggle-btn" id="jobSeeker" @click="jobSeeker()">Job Seeker</button>
                    <button type="button" class="toggle-btn" id="jobPoster" @click="jobPoster()">Job Poster</button>
                </div>

            </header>

            <div class="signin-header">
                <h3>{{ nameTitle }}</h3>
            </div>

            <form @submit.prevent="handleSignIn" class="signin-desktop-field">
                <div class="user-field">
                    <InputComponent type="email" id="email" name="email" placeHolder="Email"
                        :handleInput="handleUserInput" />
                </div>

                <div class="password-field">
                    <InputComponent type="password" id="password" name="password" placeHolder="Password"
                        :handleInput="handleUserInput" />
                </div>

                <div class="desk-links">
                    <button type="submit" class="flex-center-row signin-btn"> Log in
                        <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
                        <span class="material-symbols-outlined" v-show="loading == false"> east </span>
                    </button>

                    <button type="button" class="forgot-btn">Forgotten Password? <span @click="toForgot()">Click
                            Here</span></button>

                    <button type="button" v-if="showText" class="signup-btn">{{ userInfo }} <span
                            @click="toSignup()">Register Now</span></button>
                </div>
            </form>
        </div>
    </div>
    <ToastMessage v-show="toast.active" :toast="toast" />
</template>

<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../../../stores/users'
import { useCompanyStore } from '../../../stores/companies'
import axios from 'axios'
import InputComponent from '@/components/authpage/InputComponent.vue'
import ToastMessage from '../../utils/ToastMessage.vue'
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const BASE_URL = import.meta.env.VITE_BASE_URL
export default {
    components: {
        InputComponent,
        ToastMessage
    },

    data() {

        return {
            inputData: {
                email: '',
                password: ''
            },
            userType: 'jobSeeker',
            loading: false,
            toast: {
                active: false, msg: '', color: ''
            }
        }

    },

    props: [
        'nameHeader',
        'nameTitle',
        'userInfo',
        'showText',
        'showToggle'
    ],

    methods: {
        ...mapActions(useUserStore, ['setUser']),
        ...mapActions(useCompanyStore, ['setCompany']),
        toForgot() {
            this.$router.push('/auth/forgot-password')
        },
        toSignup() {
            this.$router.push('/auth')
        },

        jobPoster() {
            var z = document.getElementById("btn");
            // console.log(z);
            z.style.left = "50%"
            z.innerHTML = "Job Poster"

            this.userType = "jobPoster"

            // console.log(this.userType);

        },
        jobSeeker() {
            var z = document.getElementById("btn");
            z.style.left = "0"
            z.innerHTML = "Job Seeker"
            this.userType = "jobSeeker"

            // console.log(this.userType);
        },

        handleUserInput(data) {
            // console.log(data);
            if (data.inputName == 'email') {
                this.inputData.email = data.inputValue
            }

            if (data.inputName == 'password') {
                this.inputData.password = data.inputValue
            }

        },

        handleSignIn() {
            this.loading = true
            console.log('Hello', this.inputData.email.match((validRegex)));
            // console.log(this.inputData);

            const user = new FormData()
            user.append("email", this.inputData.email,)
            user.append("password", this.inputData.password)


            if (this.userType == 'jobPoster') {
                axios.post(`${BASE_URL}/company/logInCompany`, user)
                .then(res => {
                    console.log(res.data);
                    if (res.data?.message) {
                        let msg = res.data.message
                        this.showToast(msg, 'success')
                        this.loading = false
                    }
                    if (res.data?.token) {
                        const token = JSON.stringify(res.data.token)
                        localStorage.setItem('companyToken', token)
                        console.log('company', res.data.allCompanyInfo[0]);
                        this.setCompany(res.data.allCompanyInfo[0])
                    }
                })
                .then(()=>{
                    this.$router.push('/admin/analyticsView')
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
            }

            if (this.userType == 'jobSeeker') {
                axios
                    .post(`${BASE_URL}/jobSeeker/logInJobSeeker`, user)
                    .then((res) => {

                        if (res.data?.message) {
                            let msg = res.data.message
                            this.showToast(msg, 'success')
                            this.loading = false
                        }
                        if (res.data?.token) {
                            const token = JSON.stringify(res.data.token)
                            localStorage.setItem('userToken', token)
                            console.log(res.data.allInfo[0]);
                            this.setUser(res.data.allInfo[0])
                            this.$router.push('/userprofile')
                        }


                    })


                    .catch((err) => {
                        let msg 
                        if(err.response) 
                            msg = err.response.data.message 
                        if(err.message)
                            msg = err.message
                        
                        this.showToast(msg, 'error')
                        this.loading = false
                        console.log(err)
                    })
            }

        },

        showToast(msg, color) {
            this.toast = {
                active: true, msg, color
            }
            setTimeout(() => {
                this.toast = { active: false, msg: '', color: '' }
            }, 6000)
        }
    }
}
</script>

<style lang="css" scoped>
.signin header {
    position: relative;
}
.image-box {
    display: flex;
    align-items: center;
    justify-content: center;

}
.back-arrow {
    color: #7FBF4C;
    position: absolute;
    left: 0;
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
}
.signin-desktop {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/images/maxim-auth-background.jpeg");
    background-color: #10150cf3;
    mix-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    width: 100dvw;
    height: 100dvh;
}

.signin {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
    border-radius: 20px;
    width: 550px;
    max-width: 622px;
    padding-bottom: 80px;
    padding-top: 30px;
}

header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;
}

header img {
    width: 40%;
    padding-bottom: 13px;
}

.login-option {
    width: 100%;
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

header h2 {
    font-weight: bolder;
    line-height: 41px;
    color: #7FBF4C;
}

#btn {
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
    justify-content: center;
    align-items: center;
    text-align: center;
}

.signin-header h3 {
    font-weight: bolder;
    line-height: 38px;
    color: #7FBF4C;
}

.signin-header p {
    font-size: 14px;
    width: 70%;
    color: #7D7474;
}

.signin-desktop-field {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    width: 80%;
}

.user-field,
.password-field {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}

.user-field label,
.password-field label {
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
}

/* .user-field input, .password-field input {
        padding: 15px;
        border: 2px solid #7FBF4C;
        border-radius: 8px;
    } */
.desk-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 25px;
}

.desk-links p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
}

.desk-links .signin-btn {
    padding: 12px 9px;
    width: 100%;
    border-radius: 10px;
    background: #7FBF4C;
    color: #fff;
    border: #7FBF4C;
    column-gap: 5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
}

.desk-links .forgot-btn,
.signup-btn {
    background: #fff;
    border: none;
    font-size: 14px;
    font-weight: 500;
}

.forgot-btn span,
.signup-btn span {
    color: #7FBF4C;
    cursor: pointer;
}

.loading {
    transform: rotate(300deg);
    animation: spin 1s infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* .desk-links p span {
        color: #7FBF4C;
        cursor: pointer;
    } */

/* @media screen and (max-width:1200px) and (min-width:1024px) {
        .signin{
            width: 550px;
        }

        .desk-links {
            width: 550px;
        }
    } */

/* @media screen and (max-width: 1024px) and (min-width: 681px) {
        .signin {
            width: 80%;
        }

        .desk-links {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 5px;
        }
    } */
</style>