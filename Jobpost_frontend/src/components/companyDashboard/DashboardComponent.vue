<template>
    <main>
        <SideBarComponent :setShow="setShow" />
        <TopBarComponent @toggle="toggle" :setShow="setShow" />
    </main>
    <ModalComponent />
</template>

<script>
    import SideBarComponent from './SideBarComponent.vue';
    import TopBarComponent from './TopBarComponent.vue';
    import ModalComponent from './ModalComponent.vue';
    export default {
        components:{
            SideBarComponent,
            TopBarComponent,
            ModalComponent
        },
        data(){
            return{
                setShow: true
            }
        },
        methods:{
            toggle(){
                this.setShow = !this.setShow
            }
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