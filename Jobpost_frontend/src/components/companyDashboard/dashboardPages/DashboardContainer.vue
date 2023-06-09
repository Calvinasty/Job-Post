<template>
    <DashboardLayout class="main-container">
        <component :is="componentId" ></component>
    </DashboardLayout>
</template>

<script>
    import axios from 'axios'
    import {mapActions} from 'pinia'
    import { useCompanyStore } from '../../../stores/companies';
    const BASE_URL = import.meta.env.VITE_BASE_URL
    import DashboardLayout from './DashboardLayout.vue';
    import AnalyticsView from './AnalyticsView.vue';
    import JobsView from './JobsViewComponent.vue';
    import ViewApplicant from './ViewAllApplicant.vue';
    import CompanyProfile from './CompanyProfilePage.vue';
    export default {
        components:{
            DashboardLayout,
            AnalyticsView,
            JobsView,
            ViewApplicant,
            CompanyProfile
        },
        data(){
            return{
                componentId: 'analyticsView',
                analyticsView: AnalyticsView,
                jobsView: JobsView,
                viewApplicant: ViewApplicant,
                companyProfile: CompanyProfile
            }   
        },
        created(){
            this.getCompanyInfo()
        },
        updated(){
            this.getCompanyInfo()
        },
        beforeMount(){
            this.componentId = this.$route.params.id
            this.getCompanyInfo()
        },
        watch:{
            $route(to){
                this.componentId = to.params.id
            }
        },
        methods: {
            ...mapActions(useCompanyStore, ['setCompany']),
            getCompanyInfo(){
                const token = JSON.parse(localStorage.getItem('companyToken'))
                // console.log(token);
                axios.get(`${BASE_URL}/company/getAll`, {headers: {token}})
                .then(res => {
                    const companyInfo = res.data[0]
                    console.log(companyInfo)
                    this.setCompany(companyInfo)
                })
                .catch(err => {
                    console.log('err', err);
                })
            }
        }
    }
</script>

<style lang="css" scoped>
    .main-container{
        width: 100%;
        height: 100dvh;
        padding: 25px;
        overflow: scroll;
    }
</style>