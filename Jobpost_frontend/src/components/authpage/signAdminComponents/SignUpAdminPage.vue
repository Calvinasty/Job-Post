<template>
    <div>
        <!-- Desktop View Section -->
        <div class="desktop-view">
            <SignUpAdminDesktop />
        </div>

        <!-- Mobile View Section -->
        <div class="mobile-view">
            <SignUpAdminMobile />
        </div>

    </div>
</template>

<script>
    import SignUpAdminDesktop from './SignUpAdminDesktop.vue'
    import SignUpAdminMobile from './SignUpAdminMobile.vue'

    export default {
       components: {
        SignUpAdminMobile,
        SignUpAdminDesktop
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