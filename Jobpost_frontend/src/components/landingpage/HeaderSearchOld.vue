<template>
    <aside class="action">
        <div class="filters-container">
            <HeaderSearchInput class="first" :title="filters.search.title" :placeholder="filters.search.placeholder" type="textFilter"/>
            <HeaderSearchInput class="second" type="filterType" :jobType="filters.jobType"/>
            <HeaderSearchInput class="third" type="filterLocation" />
            <button class="fourth" type="button" @click="handleSearch()">
                <span class="material-symbols-outlined"> search </span>
                Search
            </button>
        </div>

        <!-- button displays only on mobile -->
        <!-- <button class="mobile-search" @click="handleSearch()">
            <span class="material-symbols-outlined"> search </span>
            Get started
        </button> -->
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
                        // title: "Location",
                        placeholder: "Search for jobs",
                        type: "text"
                    },
                    jobType:[
                        "Full Time", "Part Time", "Contract", "Internship", "Remote"
                    ]
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
    /* @import '../../assets/landing_assets/headerComponent.css'; */
    .action{
        /* width: 100%; */
        background-color: blue;
    }
    .filters-container{
        width: 100%;
        /* background-color: aqua; */
        display: flex;
        flex-direction: row;
    }
    /* .filters-container .first{width: 40%;background-color: brown;padding: 0;} */
    /* .filters-container .second{width: 20%;} */
    /* .filters-container .third{width: 20%;} */
    /* .filters-container .fourth{width: 20%;} */


</style>
