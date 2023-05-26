<template>
    <div class="signupadmin-mobile">
        
        <div class="signup">
            <header>
                <img src="/images/logo.png" alt="">
                <h2>Super Admin</h2>
            </header>

            <div class="signup-header">
                <h4>Sign Up</h4>
            </div>

            <form class="signup-mobile-field">

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
                    <InputComponent type="password" id="confirm-password" name="confirm-password" placeHolder="Confirm Password"/>
                </div>

                <div class="mobile-btn flex-center">
                    <button type="submit">Continue</button>
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
    .signup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;
        margin-top: 40px;
    }

    header {
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        color: #88CC00;
    }

    header img {
        width:40%;
        padding-bottom: 13px;
    }

    .signup-header {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        text-align: center;
        width: 70%;
    }

    .signup-header h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 22px;
        color: #88CC00;
    }
    .signup-header p {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #7D7474;
    }
    .signup-mobile-field {
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        width: 80%;
    }
    .mobile-btn button {
        padding: 13px;
        background: #7FBF4C;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
    }

    .user-field:nth-child(2) {
        display: flex;
        flex-direction: row;
        column-gap: 10px;
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

    /* .signup-mobile-field p {
        text-align: center;
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
    }  */
    /* .signup-field p a {
        color: #7FBF4C;
    } */
</style>