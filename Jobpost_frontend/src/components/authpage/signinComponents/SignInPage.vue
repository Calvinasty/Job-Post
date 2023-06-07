<template>
    <div>
        <!-- Desktop View Section -->
        <div class="desktop-view">
            <SignInDesktopComponent 
            nameTitle = 'SIGN IN'
            userInfo = 'Not Registered yet?'
            :showText = true
            :showToggle = true
            />
        </div>

        <!-- Mobile View Section -->
        <div class="mobile-view">
            <SignInMobileComponentVue
            nameTitle = 'Sign In'
            userInfo = 'Not Registered yet?' 
            :showText = true
            :showToggle= true
            />
        </div>

    </div>
</template>

<script>
    import SignInDesktopComponent from '@/components/authpage/signinComponents/SignInDesktopComponent.vue';
    import SignInMobileComponentVue from './SignInMobileComponent.vue';
    export default {
       components: {
        SignInMobileComponentVue,
        SignInDesktopComponent
       } 
    }
</script>

<style lang="css" scoped>

    @media screen and (min-width: 681px) {
            .mobile-view {
            /* Mobile display none for Desktop view */
            display: none;
        }
    }



    /*================ MOBILE VIEW ====================*/
    @media screen and (max-width: 681px) {
        .desktop-view {
            /* Desktop display none for mobile view */
            display: none;
        }
        .mobile-view{
            display: block;
        }
    }
</style>