<template>
    <main>
        <SideBarComponent :toggleNav="toggleNav" />
        <!-- toggle and add-post emits from child components to parent -->
        <section class="right-side">
            <TopBarComponent
                class="top-bar"
                @toggle="toggleNav = !toggleNav" 
                @add-post="showModal=true" 
                :toggleNav="toggleNav" 
            />
            <DashboardContainer class="dash-container"/>
        </section>
    </main>
    <Transition name="slide-fade">
        <!-- close emits from child component to parent -->
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
    import ModalComponent from './postjob/ModalComponent.vue';
    import DashboardContainer from './dashboardPages/DashboardContainer.vue';
    export default {
        components:{
            SideBarComponent,
            TopBarComponent,
            ModalComponent,
            DashboardContainer
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
        height: 100dvh;
        overflow:hidden
    }
    main.top-bar{
        width: 100%;
    }
    main .right-side{
        width: 100%;
        /* border:1px solid red; */
    }
    .dash-container{
        width: 100%;
        /* border: 1px solid green */
    }
    .slide-fade-enter-active{
        transition: 0.3s ease-out;
    }
    .slide-fade-leave-active{
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to{
        transform: translateY(-20px);
        opacity: 0;
    }
</style>