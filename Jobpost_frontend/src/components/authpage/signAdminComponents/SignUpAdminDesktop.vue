<template>
    <div class="signupadmin-desktop">
        
        <div class="signup">
            <header>
                <img src="/images/logo.png" alt="">
                <h2>Super Admin</h2>
            </header>

            <div class="signup-header">
                <h3>Sign Up</h3>
            </div>

            <form class="signup-desktop-field">

                <div class="user-field">
                    <InputComponent type="text" id="fname" name="fname" placeHolder="First Name" />
                </div>

                <div class="user-field">
                    <InputComponent type="text" id="mdname" name="mdname" placeHolder="Middle Name" />
                    <InputComponent type="text" id="lname" name="lname" placeHolder="Last Name" />
                </div>

                <div class="user-field">
                    <InputComponent type="email" id="email" name="email" placeHolder="Corporate Email" />
                </div>

                <div class="password-field">
                    <InputComponent type="password" id="password" name="password" placeHolder="Password"/>
                </div>

                <div class="password-field">
                    <InputComponent type="password" id="confirmpass" name="confirmpass" placeHolder="Confirm Password"/>
                </div>

                <div class="desk-links">
                    <button type="submit" class="flex-center-row">Continue <span class="material-symbols-outlined">arrow_right_alt</span></button>
                </div>
            </form>
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
    .signupadmin-desktop {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(0deg, rgba(28, 48, 12, 0.55), rgba(28, 48, 12, 0.55)), url("/images/maxim-auth-background.jpeg");
        width: 100dvw;
        height: 100dvh;
    }

    .signup {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 45%;
        padding: 60px 130px;
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
        color: #7FBF4C;
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
        width: 100%; 
    }

    .user-field, .password-field {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }

    .user-field:nth-child(2) {
        display: flex;
        flex-direction: row;
        column-gap: 10px;
    }

    /* .user-field label, .password-field label {
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
    } */

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
        row-gap: 20px;
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
        column-gap: 5px;
    }

    /* .desk-links span {
        color: #7FBF4C;
        cursor: pointer;
    } */

    @media screen and (max-width:1200px) and (min-width:1024px) {
        .signup{
            width: 65%;
        }
    }

    @media screen and (max-width: 1024px) and (min-width: 500px) {
        .signup {
            width: 80%;
        }
    }


</style>