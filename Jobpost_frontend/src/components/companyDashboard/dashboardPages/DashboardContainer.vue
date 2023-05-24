<template>
    <DashboardLayout class="main-container">
        <component :is="componentId"></component>
    </DashboardLayout>
</template>

<script>
    import DashboardLayout from './DashboardLayout.vue';
    import AnalyticsView from './AnalyticsView.vue';
    import JobsView from './JobsViewComponent.vue';
    import ViewApplicant from './ViewAllApplicant.vue';
    export default {
        components:{
            DashboardLayout,
            AnalyticsView,
            JobsView,
            ViewApplicant
        },
        data(){
            return{
                componentId: 'analyticsView',
                analyticsView: AnalyticsView,
                jobsView: JobsView,
                viewApplicant: ViewApplicant
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