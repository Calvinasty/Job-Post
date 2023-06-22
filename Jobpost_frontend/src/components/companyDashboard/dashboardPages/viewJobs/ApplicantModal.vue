<template>
    <section class="main">
        <aside class="modal-nav">
            <h2>{{  }}</h2>
            <SelectTiles v-for="nav in modalNav" :key="nav.link" :navItem="nav" :handleClick="handleClick" />
        </aside>
    </section>
</template>

<script>
    import SelectTiles from './SelectTiles.vue';
    export default {
        components:{ SelectTiles },
        data(){
            return{
                modalNav:[
                    {name: 'Application Status', link:'status'},
                    {name: 'View Cover Letter', link:'cover'},
                    {name: 'View Profile', link:'profile'},
                    {name: 'Download CV', link:'cv'},
                ]
            }
        },
        methods:{
            handleClick(link){
                alert(link)
            }
        }
    }
</script>

<style lang="css" scoped>
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .modal-nav{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 25px;
        width: 100%;
        height: 100%;
    }
</style>