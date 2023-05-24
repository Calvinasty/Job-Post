<template>
    <DashboardLayout class="main-container">
        <component :is="componentId"></component>
    </DashboardLayout>
</template>

<script>
    import DashboardLayout from './DashboardLayout.vue';
    import AnalyticsView from './AnalyticsView.vue';
    import JobsView from './JobsViewComponent.vue';
    export default {
        components:{
            DashboardLayout,
            AnalyticsView,
            JobsView
        },
        data(){
            return{
                componentId: 'jobsViewComponent',
                analyticsView: AnalyticsView,
                jobsView: JobsView
            }   
        },
        beforeMount(){
            this.componentId = this.$route.params.id
        },
        watch:{
            $route(to){
                this.componentId = to.params.id
            }
        },
    }
</script>

<style lang="css" scoped>
    .main-container{
        width: 100%;
        padding: 25px;
    }
</style>