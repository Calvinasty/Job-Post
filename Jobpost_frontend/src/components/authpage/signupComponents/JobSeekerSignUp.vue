<template>
    <div class="signup-desktop signup-mobile">
        <div class="signup">
            <header>
                <div class="image-box">
                    <span class="material-symbols-outlined back-arrow" @click="$router.back()"> west</span>
                    <img src="/images/logo.png" alt="">
                </div>

                <h2>{{ nameHeader }}</h2>

            </header>

            <div class="signup-header">
                <h3>{{ nameTitle }}</h3>
            </div>

            <form @submit.prevent="handleSignIn" class="signup-desktop-field">
                <div class="user-field">
                    <InputComponent type="email" id="email" name="email" placeHolder="Email"
                        :handleInput="handleUserInput" />
                </div>

                <div class="password-field">
                    <InputComponent type="password" name="password" placeHolder="Password" :handleInput="handleUserInput" />
                </div>

                <div class="password-field">
                    <InputComponent type="password" name="confirmpassword" placeHolder="Confirm Password"
                        :handleInput="handleUserInput" />
                </div>

                <div class="desk-links">
                    <button type="submit" class="flex-center-row signup-btn"> Register
                        <span class="material-symbols-outlined loading" v-show="loading"> cached </span>
                        <span class="material-symbols-outlined" v-show="loading == false"> east </span>
                    </button>

                    <button type="button" class="signin-btn">Already a user? <span @click="toForgot()">Click
                            Here</span></button>
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
const BASE_URL_USER = import.meta.env.VITE_BASE_URL_USER
export default {
    components: {
        InputComponent,
        ToastMessage
    },

    data() {

        return {
            inputData: {
                email: '',
                password: '',
                confirmPassword: '',
            },
            nameHeader: 'Sign Up',
            nameTitle: 'Create an account as a Job Seeker',
            loading: false,
            toast: {
                active: false, msg: '', color: ''
            }
        }

    },

    props: [
        'userInfo',
        'showText',
        'showToggle'
    ],

    methods: {
        ...mapActions(useUserStore, ['setUser']),
        ...mapActions(useCompanyStore, ['setCompany']),

        toForgot() {
            this.$router.push('/auth/register')
        },

        handleUserInput(data) {
            // console.log(data);
            if (data.inputName == 'email') {
                this.inputData.email = data.inputValue
            }

            if (data.inputName == 'password') {
                this.inputData.password = data.inputValue
            }

            if (data.inputName == 'confirmpassword') {
                this.inputData.confirmPassword = data.inputValue
            }
        },
        handleSignIn() {
            this.loading = true
            console.log('Hello', this.inputData.email.match((validRegex)));
            // console.log(this.inputData);

            const user = new FormData()
            user.append("email", this.inputData.email,)
            user.append("password", this.inputData.password)
            user.append("confirm_password", this.inputData.password)


            axios.post(`${BASE_URL_USER}/jobSeeker/signUp`, user)
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
                .then(() => {
                    this.$router.push('/auth/login')
                })
                .catch(err => {
                    let msg
                    if (err.response)
                        msg = err.response.data.message
                    else
                        msg = err.message

                    this.showToast(msg, 'error')
                    this.loading = false
                    console.log(err)
                })

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
@media screen and (min-width: 681px) {
    .signup-mobile {
        display: none;
    }

    .signup header {
        position: relative;
    }

    .image-box {
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;

    }

    .back-arrow {
        color: #7FBF4C;
        position: absolute;
        left: 0;
        font-size: 30px;
        font-weight: bolder;
        cursor: pointer;
    }

    .signup-desktop {
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

    .signup {
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
        color: #4E4E4E;
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

    .signup-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .signup-header h3 {
        font-weight: bolder;
        line-height: 38px;
        color: #7D7474;
    }

    .signup-header p {
        font-size: 14px;
        width: 70%;
        color: #7D7474;
    }

    .signup-desktop-field {
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

    .desk-links .signup-btn {
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

    .desk-links .signin-btn,
    .signup-btn {
        background: #fff;
        border: none;
        font-size: 14px;
        font-weight: 500;
    }

    .signin-btn span {
        color: #7FBF4C;
    }

    .signup-btn span {
        color: #eeeeee;
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
}

@media screen and (max-width: 681px) {
    .signup-desktop {
        display: none;
    }

    .signup header {
        position: relative;
    }

    .signup-mobile {
        display: block;
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

    .signup {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;
        border-radius: 20px;
        width: 100dvw;
        height: 100dvh;
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
        color: #4E4E4E;
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

    .signup-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .signup-header h3 {
        font-weight: bolder;
        line-height: 38px;
        color: #7D7474;
    }

    .signup-header p {
        font-size: 14px;
        width: 70%;
        color: #7D7474;
    }

    .signup-desktop-field {
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

    .desk-links .signup-btn {
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

    .desk-links .signin-btn,
    .signup-btn {
        background: #fff;
        border: none;
        font-size: 14px;
        font-weight: 500;
    }

    .signin-btn span {
        color: #7FBF4C;
    }

    .signup-btn span {
        color: #eeeeee;
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
}
</style>