<template>
    <header class="container">
        <!-- <NavComponent /> -->
        <section>
            <aside class="head" v-html="headerMessage"></aside>
            <aside class="tag active-tag-desk"> <p v-html="tagMessage"></p> </aside>
            <aside class="tag active-tag-mob"> <p v-html="tagMessage_mobile"></p> </aside>
            <HeaderSearch />
        </section>
    </header>
</template>

<script>
    // import NavComponent from './NavComponent.vue';
    import HeaderSearch from './HeaderSearch.vue'
    export default {
        components: {
            // NavComponent,
            HeaderSearch
        },
        data(){
            return{
                headerMessage: '<h1>Find the <span class="color">jobs</span> that fit your <span class="color">career</span></h1>',
                tagMessage: 'Connecting dream jobs with dream candidates. Your one-stop job search solution. Find your next career opportunity with ease.',
                tagMessage_mobile: 'Connecting dream jobs with dream candidates...'
            }
        },
        computed:{

        },
        methods:{
            handleSearch(){
                this.$router.push('/jobsearch')
            }
        }
    }
</script>
<style lang="css" scoped>
    @import '../../assets/landing_assets/headerComponent.css';
</style>