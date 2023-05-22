<template>
    <div class="box">
        <SelectUserMobile class="mobile-view"/>
        <SelectUserDesktop class="desktop-view" />
    </div>
</template>

<script>
    import SelectUserMobile from './SelectUserMobile.vue';
    import SelectUserDesktop from './SelectUserDesktop.vue';
    export default {
        components: {
            SelectUserMobile,
            SelectUserDesktop
        }
    }
</script>

<style lang="css" scoped>
    /* Mobile view display */
    
    @media screen and (min-width: 481px) {
        .mobile-view {
            display: none;
        }

        .desktop-view {
            display: flex;
        }
    }

    @media screen and (max-width: 480px) {
        .mobile-view {
            display: flex;
        }
        .desktop-view {
            display: none;
        }
    }

</style>