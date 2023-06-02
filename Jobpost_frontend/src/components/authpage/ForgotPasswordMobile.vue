<template>
    <div class="forgot-mobile">
        <header class="flex-center">
            <img src="/images/logo.png" alt="">
            <h3>Forgot Password</h3>
        </header>

        <form class="forgot-field">
            <div>
                <InputComponent type="email" id="email" name="email" placeHolder="Email" :handleInput="handleUserInput" />
            </div>

            <div class="error-prompt">
                <p>There’s no Email Account with the info you provided.</p>
            </div>

            <button type="submit" class="reset-btn">Reset Password</button>

            <button class="login">Back to Login</button>
            
        </form>
    </div>
</template>

<script>
import InputComponent from './InputComponent.vue';
    export default {
        components: {
            InputComponent
        },

        
                
    }
</script>

<style lang="css" scoped>
    .forgot-mobile {
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
    .forgot-field {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        width: 80%;
    }

    .reset-btn, .login {
        padding: 13px;
        background: #7FBF4C;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .error-prompt {
        background: rgba(169, 234, 156, 0.39);
        border-radius: 10px;
        width: 100%;
        padding: 10px;
        text-align: center;
    }

    .error-prompt p {
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        text-align: center;
        color: #7D7474; 
    }
</style>