<template>
    <!-- <div> -->
        <main>
            <SideBarComponent :toggleNav="toggleNav" />
            <TopBarComponent 
            @toggle="toggleNav = !toggleNav" 
            @add-post="showModal=true" 
            :toggleNav="toggleNav" 
        />
    </main>
    <Transition name="slide-fade">
        <ModalComponent 
        v-show="showModal" 
            @modal-close="showModal=false"
            />
        </Transition>
    <!-- </div> -->
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
                toggleNav: true,
                showModal: false
            }
        },
        methods:{
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
    .slide-fade-enter-active{
        transition: 0.3s ease-out;
    }
    .slide-fade-leave-active{
        transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to{
        transform: translateY(-20px);
        opacity: 0;
    }
</style>