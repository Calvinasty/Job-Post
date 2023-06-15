<template>
    <div class="container">
        <JobsAppliedAccordion :applicantsInfo="applicantsInfo" :applicants="applicants"/>
    </div>
</template>

<script>
import axios, { all } from 'axios';
import {mapState} from 'pinia'
import { useCompanyStore } from '../../../stores/companies';
const BASE_URL = import.meta.env.VITE_BASE_URL
import JobsAppliedAccordion from './JobsAppliedAccordion.vue'
export default {
    name: 'JobPostJobsViewComponent',
    components: {
        JobsAppliedAccordion
    },
    data() {
        return {
            applicantsInfo: [],
            applicants: [
                {id:1,applicant: 'Kwame Amponsah', role: 'Remote - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Yemi Ogbedengbey', role: 'Remote - Full Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Joseph Atugubah', role: 'Remote - Part Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniel McDan', role: 'Remote - Part Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniel Kofi Tetteh', role: 'On Site - Full Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Prince Tindan', role: 'On Site - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Father Benjamin', role: 'Hybride - Full Time', requirements:'Intern', download:'Ghana'},
                {applicant: 'Razark Adams', role: 'Remote - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
            ]
        };
    },
    computed:{
        ...mapState(useCompanyStore, ['company'])
    },
    mounted() {
        this.getApplicants()
    },

    methods: {
        getApplicants(){
            const companyId = this.company.id
            const token = JSON.parse(localStorage.getItem('companyToken'))
            axios.get(`${BASE_URL}/application/jobApplicant/${companyId}`, {headers: {token}})
            .then(res => {
                console.log(res.data);
                this.applicantsInfo = res.data
                // this.sampleData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        },
        // sampleData(allJobs){
        //     console.log('Hello');
        //     const applicants = allJobs.map((item,index) => {
        //         item.Job.id
        //     })
        //     let data = [
        //         // {
        //         //     jobId:{},
        //         //     applicants:[]
        //         // }
        //     ]
        //     Object.keys(allJobs).forEach((key,index) => {
        //         if(data.length == 0){
        //             data.push({
        //                 jobDetails: allJobs[index].Job,
        //                 applicants: [allJobs]
        //             })
        //         }
        //         if(data[index].jobId == allJobs[index].Job.id){
        //             data[]
        //         }
        //         allJobs[index].
        //     })
        //     // console.log(applicants);
        // }
    },
};
</script>

<style lang="css" scoped>
.container{
    /* display: flex;
    flex-direction: row;
    gap: 50%;
    padding-top: 80px; */
    overflow-y: scroll;
    padding-bottom: 100px;
}
.text{
    padding-left: 40px;
}
.text p {
    color: #9C9595;
    font-size: 15px;
}
.date{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 5px;
    border: 3px solid #88CC00;
}
.date span{
    color: #88CC00;
}

</style>