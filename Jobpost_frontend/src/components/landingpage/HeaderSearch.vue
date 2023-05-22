<template>
    <aside class="action">
        <div>
            <HeaderSearchInput v-for="item in search" :title="item.title" :placeholder="item.placeholder" :type="item.type"/>
            <button type="button" @click="handleSearch()">
                <img src="/images/search.svg" alt="search">
                Search
            </button>
        </div>

        <!-- button displays only on mobile -->
        <button class="mobile-search" @click="handleSearch()">
            <img src="/images/search.svg" alt="search">
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
        }
    }
</script>

<style lang="css" scoped>
    @import '../../assets/landing_assets/headerComponent.css';
</style>
