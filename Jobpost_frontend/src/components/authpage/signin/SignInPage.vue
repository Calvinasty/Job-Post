<template>
    <div>
        <!-- Desktop View Section -->
        <div class="desktop-view">
            <SignInDesktop />
        </div>

        <!-- Mobile View Section -->
        <div class="mobile-view">
            <SignInMobile />
        </div>

    </div>
</template>

<script>
    import SignInMobile from './SignInMobile.vue';
    import SignInDesktop from './SignInDesktop.vue';
    export default {
       components: {
        SignInMobile,
        SignInDesktop
       } 
    }
</script>

<style lang="css" scoped>

    @media screen and (min-width: 501px) {
            .mobile-view {
            /* Mobile display none for Desktop view */
            display: none;
        }
    }



    /*================ MOBILE VIEW ====================*/
    @media screen and (max-width: 500px) {
        .desktop-view {
            /* Desktop display none for mobile view */
            display: none;
        }
        .mobile-view{
            display: block;
        }
    }
</style>