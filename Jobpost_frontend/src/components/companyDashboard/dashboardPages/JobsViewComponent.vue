<template>
    <div class="container">  
        <JobsDescriptionComponent
            :myjobs="jobs"
        />
        <h4 class="nojob-tag" v-if="jobs?.length == 0">📝 No Jobs posted / <span class="color-red">❌ Check network connections</span></h4>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState, mapActions} from 'pinia'
    import { useCompanyStore } from '../../../stores/companies'; 
    const BASE_URL = import.meta.env.VITE_BASE_URL
    import JobsDescriptionComponent from './JobsDescriptionComponent.vue';
    export default {
        name: 'JobPostJobsViewComponent',
        components: {
            JobsDescriptionComponent,
        },
        data() {
            return {
                date: "April 1st - May 30th",  
                jobs: []          
            };
        },
        computed:{
            ...mapState(useCompanyStore, ['company'])
        },
        beforeMount() {
            this.getPostedJobs()
        },
        mounted(){
            this.jobs = this.company?.Jobs
        },
        methods: {
            ...mapActions(useCompanyStore, ['updateCompany']),
            getPostedJobs(){
                const token = JSON.parse(localStorage.getItem('companyToken'))
                axios.get(`${BASE_URL}/company/getAll`, {headers: {token}})
                .then(res => {
                    const companyInfo = res.data[0]
                    this.updateCompany(companyInfo)
                })
                .catch(err => {
                    console.log('err', err);
                })
            }
        },
    };
</script>

<style lang="css" scoped>
.container{
    /* background: #F4F4F4; */
    padding: 20px 0;
}
.text{
    padding-left: 40px;
}
.text p {
    color: #9C9595;
    font-size: 15px;
}
.nojob-tag{
    font-weight: 500;
    text-align: center;
    padding-top: 50px;
    color: #000;
}
.color-red{
    color: rgb(175, 11, 11);
}

</style>