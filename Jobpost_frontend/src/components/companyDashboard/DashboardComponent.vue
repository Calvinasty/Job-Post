<template>
    <main>
        <SideBarComponent />
        <TopBarComponent />
    </main>
</template>

<script>
    import SideBarComponent from './SideBarComponent.vue';
    import TopBarComponent from './TopBarComponent.vue';
    export default {
        components:{
            SideBarComponent,
            TopBarComponent
        }
    }
</script>

<style lang="css" scoped>
    main{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
</style>