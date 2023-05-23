<template>
    <aside class="action">
        <div>
            <HeaderSearchInput v-for="(item,index) in search" :title="item.title" :placeholder="item.placeholder" :type="item.type" :key="index"/>
            <button type="button" @click="handleSearch()">
                <!-- <img src="/images/search.svg" alt="search"> -->
                <span class="material-symbols-outlined"> conditions </span>
                Search
            </button>
        </div>

        <!-- button displays only on mobile -->
        <button class="mobile-search" @click="handleSearch()">
            <!-- <img src="/images/search.svg" alt="search"> -->
            <span class="material-symbols-outlined"> conditions </span>
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
                search:[
                    {
                        title: "Location",
                        placeholder: "Enter Location",
                        type: "text"
                    },
                    {
                        title: "Type",
                        placeholder: "Enter type of job",
                        type: "text"
                    }
                ]
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
