<template>
    <DashboardComponent />
</template>

<script>
    import DashboardComponent from '@/components/companyDashboard/DashboardComponent.vue'
    export default {
        components:{
            DashboardComponent
        },
        data(){
            return{
                dashboardComponent: DashboardComponent
            }
        }        
    }
</script>

<style lang="css" scoped>

</style>