<template>
    <div class="signin-desktop">
        <div class="signin">
            <header>
                <img src="/images/logo.png" alt="">
                <h2>{{ nameHeader }}</h2>
            </header>

            <div class="signin-header">
                <h3>{{ nameTitle }}</h3>
            </div>

            <form @submit.prevent="handleSignIn" class="signin-desktop-field">
                <div class="user-field">
                    <InputComponent type="email" id="email" name="email" placeHolder="Email" :handleInput="() => handleUserInput" />
                </div>

                <div class="password-field">
                    <InputComponent type="password" id="password" name="password" placeHolder="Password" :handleInput="() => handleUserInput" />
                </div>

                <div class="desk-links">
                    <button type="submit" class="flex-center-row signin-btn">SignIn <span class="material-symbols-outlined">arrow_right_alt</span></button>

                    <button type="button" class="forgot-btn">Forgotten Password? <span>Click Here</span></button>

                    <button type="button" v-if="showText" class="signup-btn">{{ userInfo }} <span @click="toSignup()">Register Now</span></button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'pinia'
    import { useUserStore } from '../../../stores/users'
    import axios from 'axios'
    import InputComponent from '@/components/authpage/InputComponent.vue'
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    export default {
        components : {
            InputComponent
        },

       data () {

        return {
            inputData: {
                email: '',
                password: ''
            }
        }

       },
       
       props:[
            'nameHeader',
           'nameTitle',
           'userInfo',
           'showText'
       ],

       methods: {
        ...mapActions(useUserStore, ['setUser']),
        toSignup() {
            this.$router.push('/auth')
        },

        handleUserInput(data){
            // console.log(data);
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
            axios.get(`http://192.168.1.53:3000/user?email=${user.email}&password=${user.password}`)
            .then(res =>{
                if(res.data.length > 0){
                    this.setUser({
                        email: res.data[0].email,
                        password: res.data[0].password
                    })
                    this.$router.push('/jobsearch')
                }
                else{
                    alert('invalid email or password')
                }
            })
            .catch(err => {
                console.log(err);
            })                                   
        }
       }
    }
</script>

<style lang="css" scoped>

.signin-desktop {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(0deg, rgba(28, 48, 12, 0.55), rgba(28, 48, 12, 0.55)), url("/images/maxim-auth-background.jpeg");
        width: 100dvw;
        height: 100dvh;
    }

    .signin {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
        padding: 100px;
        row-gap: 20px;
        border-radius: 20px;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 25px;
    }

    header img {
        width: 50%;
        padding-bottom: 13px;
    }

    header h2 {
        font-weight: bolder;
        line-height: 41px;
        color: #7FBF4C;
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
        width: 100%; 
    }

    .user-field, .password-field {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .user-field label, .password-field label {
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
        padding:12px 9px;
        border-radius: 10px;
        background: #7FBF4C;
        color: #fff;
        border: #7FBF4C;
        column-gap: 5px;
    }

    .desk-links .forgot-btn, .signup-btn {
        background: #fff;
        border: none;
        font-size: 14px;
        font-weight: 500;
    }

    .forgot-btn span, .signup-btn span {
        color: #7FBF4C;
        cursor: pointer;
    }

    /* .desk-links p span {
        color: #7FBF4C;
        cursor: pointer;
    } */

    @media screen and (max-width:1200px) and (min-width:1024px) {
        .signin{
            width: 50%;
        }

        .desk-links {
            width: 80%;
        }
    }

    @media screen and (max-width: 1024px) and (min-width: 681px) {
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
    }
    

</style>