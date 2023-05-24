<template>
    <div class="main">
        <section class="top">
            <Card1Component />
            <Card1Component />
            <Card1Component />
            <Card1Component />
        </section>
    </div>
</template>

<script>
    import Card1Component from './Card1Component.vue';
    export default {
        components:{
            Card1Component
        }
    }
</script>

<style lang="css" scoped>
    div .main{
        /* border: 2px solid blue; */
    }
    main .top{
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        /* border: 5px solid red; */
    }
</style>