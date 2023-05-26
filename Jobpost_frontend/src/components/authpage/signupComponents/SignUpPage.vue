<template>
    <div class="auth-container">
        <SignupMobile class="mobile-show"/>
        <SignupDesktop class="desktop-show"/>
    </div>
</template>

<script>
    import SignupMobile from './SignupMobile.vue';
    import SignupDesktop from './SignupDesktop.vue';
    export default {
        components:{
            SignupMobile,
            SignupDesktop
        }     
    }
</script>

<style lang="css" scoped>
    .auth-container{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width:480px) {
        .auth-container .mobile-show{
            display: block;
        }
        .auth-container .desktop-show{
            display: none;
        }
    }
    @media screen and (min-width:481px) {
        .auth-container .mobile-show{
            display: none;
        }
        .auth-container .desktop-show{
            display: flex;
        }
    }
</style>