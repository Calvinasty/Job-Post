<template>
    <CompanyDashboardLayout>
        <component :is="dashboardComponent"></component>
    </CompanyDashboardLayout>
</template>

<script>
    import CompanyDashboardLayout from '../components/companyDashboard/CompanyDashboardLayout.vue';
    import DashboardComponent from '@/components/companyDashboard/DashboardComponent.vue'
    export default {
        components:{
            CompanyDashboardLayout,
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