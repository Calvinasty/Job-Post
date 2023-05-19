<template>
    <div class="container">
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
        },
        data(){
            return{

            }
        }        
    }
</script>

<style lang="css" scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        width: 100%;
    }

    @media screen and (max-width:480px) {
        .container .mobile-show{
            display: block;
        }
        .container .desktop-show{
            display: none;
        }
    }

    @media screen and (min-width:481px) {
        .container .mobile-show{
            display: none;
        }
        .container .desktop-show{
            display: flex;
        }
    }
</style>