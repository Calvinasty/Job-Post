<template>
    <div class="forgot-desktop">
        <div class="forgot">
            <header>
                <img src="/images/logo.png" alt="">
                <h2>Forgot Password</h2>
            </header>


            <form class="forgot-desktop-field">
                <div class="user-field">
                    <InputComponent type="email" name="email" inputId="email" placeHolder="Email" />
                </div>

                <div class="error-prompt">
                    <p>There’s no Email Account with the info you provided.</p>
                </div>

                <div class="desk-links">
                    <button type="submit" class="flex-center-row reset-btn">Reset Password </button>

                    <button type="button" class="login-btn">Back to Login</button>
                    
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import InputComponent from './InputComponent.vue';
    export default {
        components: {
            InputComponent
        }
    }
</script>

<style lang="css" scoped>
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
        row-gap: 10px;
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