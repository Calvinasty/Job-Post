<template>
    <div>
        <!-- Desktop View Section -->
        <div class="desktop-view">
            <SignInAdminDesktop
            nameHeader = 'Super Admin'
            nameTitle = 'Sign In'
            userInfo = 'Not Admin?'
            :showText = false
            :showToggle = false
            />
        </div>

        <!-- Mobile View Section -->
        <div class="mobile-view">
            <SignInAdminMobile 
            nameHeader = 'Super Admin'
            nameTitle = 'Sign In'
            userInfo = 'Not Admin?'
            :showText = false
            />
        </div>

    </div>
</template>

<script>
    import SignInAdminDesktop from './SignInDesktopComponent.vue';
    import SignInAdminMobile from './SignInMobileComponent.vue';
    export default {
       components: {
        SignInAdminMobile,
        SignInAdminDesktop
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