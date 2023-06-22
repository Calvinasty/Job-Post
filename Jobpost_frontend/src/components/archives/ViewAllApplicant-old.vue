<template>
    <div>  
        <ApplicantsDescription
            :applicants="applicants"
            :jobDetails="jobDetails"
            :cv="cv"
            :cover="cover"
        />
    </div>
</template>

<script>
import axios from 'axios';
import {mapState} from 'pinia'
import { useDashboardStore } from '../../../stores/dashboard';
const BASE_URL = import.meta.env.VITE_BASE_URL

import ApplicantsDescription from './ApplicantsDescription.vue';
export default {
    name: 'JobPostJobsViewComponent',
    components: {
        ApplicantsDescription
    },
    data() {
        return {
            applicants: {
                // {id:1,applicant: 'Kwame Amponsah', role: 'Remote - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Yemi Ogbedengbey', role: 'Remote - Full Time', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Joseph Atugubah', role: 'Remote - Part Time', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniel McDan', role: 'Remote - Part Time', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniel Kofi Tetteh', role: 'On Site - Full Time', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Prince Tindan', role: 'On Site - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Father Benjamin', role: 'Hybride - Full Time', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Razark Adams', role: 'Remote - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
                // {applicant: 'Daniella Momo', role: 'Hybride - Intern', requirements:'Intern', download:'Ghana'},
            },
            jobDetails: {},
            cv:'',
            cover:''       
        };
    },
    computed: {
        ...mapState(useDashboardStore, ['jobId'])
    },
    mounted() {
        this.getApplicantInfo()
    },
    methods: {
        getApplicantInfo(){
            axios.get(`${BASE_URL}/application/jobApplicant/${this.jobId}`)
            .then(res => {
                console.log(res.data);
                const jobSeeker = res.data[0].job_seeker
                const jobDetails = res.data[0].Job
                this.applicants = jobSeeker
                this.jobDetails = jobDetails
                this.cv = res.data[0].cv
                this.cover = res.data[0].cover_letter
            })
            .catch(err => console.log(err))
        }
    },
};
</script>

<style lang="css" scoped>
.container{
    display: flex;
    flex-direction: row;
    gap: 50%;
    padding-top: 80px;
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