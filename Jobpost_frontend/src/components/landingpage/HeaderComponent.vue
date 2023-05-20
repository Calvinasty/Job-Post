<template>
    <header class="container">
        <NavComponent />
        <section>
            <aside class="head" v-html="headerMessage"></aside>
            <aside class="tag">
                <p v-html="tagMessage"></p>
            </aside>
            <HeaderSearch />
        </section>
    </header>
</template>

<script>
    import NavComponent from './NavComponent.vue';
    import HeaderSearch from './HeaderSearch.vue'
    export default {
        components: {
            NavComponent,
            HeaderSearch
        },
        data(){
            return{
                headerMessage: '<h1>Find the <span class="color">jobs</span><br> that fits <span class="color">your</span> <br> career</h1>',
                tagMessage: 'Connecting Talent to Opportunity:<br> Your Path to Success Begins Here!'
            }
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