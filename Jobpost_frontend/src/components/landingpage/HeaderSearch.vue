<template>
    <aside class="action">
        <div>
            <HeaderSearchInput :title="filters.search.title" :placeholder="filters.search.placeholder" :type="filters.search.type"/>
            <HeaderSearchInput type="select" data=""/>
            <HeaderSearchInput type="select" />
            <button type="button" @click="handleSearch()">
                <!-- <img src="/images/search.svg" alt="search"> -->
                <span class="material-symbols-outlined"> search </span>
                Search
            </button>
        </div>

        <!-- button displays only on mobile -->
        <button class="mobile-search" @click="handleSearch()">
            <!-- <img src="/images/search.svg" alt="search"> -->
            <span class="material-symbols-outlined"> search </span>
            Get started
        </button>
    </aside>
</template>

<script>
    import HeaderSearchInput from './HeaderSearchInput.vue';
    export default {
        components:{HeaderSearchInput},
        data(){
            return{
                filters:{
                    search: {
                        title: "Location",
                        placeholder: "Search for jobs",
                        type: "text"
                    }
                }
            }
        },

        methods:{
            handleSearch(){
                this.$router.push('/jobsearch');
            }
        }
    }
</script>

<style lang="css" scoped>
    @import '../../assets/landing_assets/headerComponent.css';
</style>
