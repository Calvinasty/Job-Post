<template>
    <div>
        <!-- Desktop View Section -->
        <div class="desktop-view">
            <SignInAdminDesktop />
        </div>

        <!-- Mobile View Section -->
        <div class="mobile-view">
            <SignInAdminMobile />
        </div>

    </div>
</template>

<script>
    import SignInAdminDesktop from './SignInAdminDesktop.vue'
    import SignInAdminMobile from './SignInAdminMobile.vue'

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
    @media screen and (max-width: 680px) {
        .desktop-view {
            /* Desktop display none for mobile view */
            display: none;
        }
        .mobile-view{
            display: block;
        }
    }
</style>