<template>
    <div>
        <div class="signin">
            <header>
                <img src="/images/logo.png" alt="">
                <h2>Forgot Password</h2>
            </header>


            <form @submit.prevent="handleSignIn" class="signin-desktop-field">
                <div class="user-field">
                    <InputComponent type="email" id="email" name="email" placeHolder="Email" :handleInput="() => handleUserInput" />
                </div>

                <div class="password-field">
                    <InputComponent type="password" id="password" name="password" placeHolder="Password" :handleInput="() => handleUserInput" />
                </div>

                <div class="desk-links">
                    <button type="submit" class="flex-center-row signin-btn">Log in </button>

                    <button type="button" class="forgot-btn">Forgotten Password? <span>Click Here</span></button>

                    <button type="button" v-if="showText" class="signup-btn">{{ userInfo }} <span @click="toSignup()">Register Now</span></button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

</style>