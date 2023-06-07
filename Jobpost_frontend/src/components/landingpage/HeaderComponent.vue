<template>
    <header class="container">
        <!-- <NavComponent /> -->
        <section>
            <aside class="head" v-html="headerMessage"></aside>
            <aside class="tag"> <p v-html="tagMessage"></p> </aside>
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
                headerMessage: '<h1>Find the <span class="color">jobs</span><br> that fit <span class="color">your</span> <br> career</h1>',
                tagMessage: 'Connecting dream jobs with dream candidates.<br> Your one-stop job search solution.<br> Find your next career opportunity with ease.'
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