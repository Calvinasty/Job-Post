<template>
    <div class="signin-desktop">

        <div class="signin">
            <header>
                <img src="/images/logo.png" alt="">
                <h2>JOB POSTS</h2>
            </header>

            <div class="signin-header">
                <h3>Sign In</h3>
            </div>

            <div class="signin-desktop-field">
                <div class="user-field">
                    <InputComponent text="text" placeHolder="Username"/>
                </div>

                <div class="password-field">
                    <InputComponent text="password" placeHolder="Password"/>
                </div>

                <div class="desk-links">
                    <button>Sign In</button>

                    <p>Not Registered yet? <router-link to="/auth">Register Now</router-link></p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import InputComponent from '../InputComponent.vue';
    export default {
        components: {
            InputComponent,
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
        padding: 130px;
        row-gap: 20px;
        border-radius: 10px;
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
        row-gap: 15px;
    }

    .desk-links p {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
    }

    .desk-links button {
        padding:12px 9px;
        border-radius: 10px;
        background: #7FBF4C;
        color: #fff;
        border: #7FBF4C;
        width: 30%;
    }

    @media screen and (max-width:1200px) and (min-width:1024px) {
        .signin{
            width: 45%;
        }

        .desk-links {
            width: 80%;
        }
    }

    @media screen and (max-width: 1024px) and (min-width: 500px) {
        .signin {
            width: 50%;
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