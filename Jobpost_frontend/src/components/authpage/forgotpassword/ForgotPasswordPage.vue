<template>
    <div class="forgot-desktop forgot-mobile">
        <div class="forgot">
            <header>
                <img src="/images/logo.png" alt="">
                <h2>Forgot Password?</h2>
                <p>Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
            </header>


            <form @submit.prevent="handleForgotPassword" class="forgot-desktop-field">
                <div class="user-field">
                    <InputComponent type="email" name="email" inputId="email" placeHolder="Email" :handleInput="handleUserInput" />
                </div>

                <div class="desk-links">
                    <button type="submit" class="flex-center-row reset-btn">Send Reset Link </button>

                    <button type="button" class="login-btn">Back to Login</button>
                    
                </div>
            </form>
        </div>
    </div>
    <ToastMessage v-show="toast.active" :toast="toast" />
</template>

<script>
    import axios from 'axios';
    import InputComponent from '../InputComponent.vue';
    import ToastMessage from '../../utils/ToastMessage.vue';
    const BASE_URL = import.meta.env.VITE_BASE_URL
    export default {
        components: {
            InputComponent,
            ToastMessage,
        },

        data() {
            return {
                inputData: {
                    email: '',
                },
                toast: {
                    active: false, msg: '', color: ''
                },
                loading: false
            }
        },
        methods: {
            handleUserInput(data) {
                // console.log(data);
                if (data.inputName == 'email') {
                    this.inputData.email = data.inputValue
                }
            },

            handleForgotPassword() {
                console.log('Hello', this.inputData.email);

                const user = new FormData()
                user.append("email", this.inputData.email)
                axios.post(`${BASE_URL}/jobSeeker/email`, user)
                .then(res => {
                    console.log(res.data);
                    if (res.data?.message) {
                        let msg = res.data.message
                        this.showToast(msg, 'success')
                        this.loading = false
                    }
                })
                .then(() => {
                    this.$router.push('/auth/forgot-password')
                })
                .catch(err => {
                    let msg = err.response ? err.response.data.message : err.message

                    if(typeof(msg) == 'object'){
                        msg=msg[0]
                    }
                    this.showToast(msg, 'error')
                    this.loading = false
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
        .forgot-mobile {
            display: none;
        }
        .forgot-desktop {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("/images/maxim-auth-background.jpeg");
        background-color: #10150cf3;
        mix-blend-mode: overlay;
        background-repeat: no-repeat;
        background-size:cover;
        background-blend-mode: overlay;   
        width: 100dvw;
        height: 100dvh;
    }

    .forgot {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 5px;
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
        text-align: center;
        row-gap: 10px;
        margin-bottom: 50px;
    }

    header img {
        width: 35%;
        padding-bottom: 5px;
    }

    header h2 {
        font-weight: bolder;
        line-height: 41px;
        color: #7FBF4C;
    }

    header p {
        font-size: 14px;
        color: #787272;
        width: 70%;
    }

    .forgot-desktop-field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        row-gap: 30px;
    }

    .user-field {
        width: 80%;
    }

    .desk-links {
        display: flex;
        flex-direction: row;
        column-gap: 10px;
        row-gap: 40px;
    }

    .reset-btn {
        padding: 15px 20px;
        background: #7FBF4C;
        border-radius: 10px;
        border: #7FBF4C;
        font-weight: 500;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
    }

    .login-btn {
        padding: 15px 20px;
        background: #ffffff;
        border-radius: 10px;
        border: #000000 2px solid;
        font-weight: 500;
        font-size: 16px;
        color: #000000;
        cursor: pointer;
    }
    
}

@media screen and (max-width: 681px) {
    .forgot-desktop {
        display: none;
    }

    .forgot-mobile {
        display: block;
    }
    .forgot {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 10px;
        border-radius: 20px;
        padding-bottom: 80px;
        padding-top: 30px;
        height: 100dvh;
        width: 100dvw;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 10px;
        margin-bottom: 50px;
    }

    header img {
        width: 35%;
        padding-bottom: 5px;
    }

    header h2 {
        font-weight: bolder;
        line-height: 41px;
        color: #7FBF4C;
    }

    .forgot-desktop-field {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        row-gap: 15px;
    }

    .user-field {
        width: 70%;
    }

    .desk-links {
        display: flex;
        flex-direction: column;
        row-gap: 40px;
    }

    .error-prompt {
        background: rgba(169, 234, 156, 0.39);
        border-radius: 10px;
        width: 70%;
        padding: 10px;
        text-align: center;
    }

    .error-prompt p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #7D7474; 
    }

    .reset-btn {
        padding: 15px 40px;
        background: #7FBF4C;
        border-radius: 10px;
        border: #7FBF4C;
        font-weight: 600;
        font-size: 20px;
        color: #fff;
    }

    .login-btn {
        padding: 15px 40px;
        background: #fff;
        border-radius: 10px;
        border: #7FBF4C 1px solid;
        font-weight: 600;
        font-size: 20px;
        color: #7FBF4C;
    }
}
    
    

    /* @media screen and (max-width:1200px) and (min-width:1024px) {
        .forgot{
            width: 50%;
        }

        .desk-links {
            width: 80%;
        }
    }

    @media screen and (max-width: 1024px) and (min-width: 681px) {
        .forgot {
            width: 80%;
        }

        .desk-links {
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 5px;
        }
    }
     */


</style>