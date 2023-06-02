<template>
    <div>
        <!-- Desktop View Section -->
        <div class="desktop-view">
            <ForgotPasswordDesktop />
        </div>

        <!-- Mobile View Section -->
        <div class="mobile-view">
            <ForgotPasswordMobile />
        </div>

    </div>
</template>

<script>
    import ForgotPasswordDesktop from './ForgotPasswordDesktop.vue'
    import ForgotPasswordMobile from './ForgotPasswordMobile.vue'
    export default {
       components: {
        ForgotPasswordDesktop,
        ForgotPasswordMobile
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