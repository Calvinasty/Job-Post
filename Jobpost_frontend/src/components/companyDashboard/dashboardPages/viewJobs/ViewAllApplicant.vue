<template>
    <div class="container">  
        <ApplicantsDescription
            :applicants="applicants"
            :jobDetails="jobDetails"
            :cv="cv"
            :cover="cover"
        />
        <span class="no-app" v-if="applicants?.length == 0 || applicants == undefined">
            <h4 class="no-app-tag">
                📝 No Applications yet
                <button class="sync-btn">
                    <span class="material-symbols-outlined"> sync </span>
                    <span>Reload</span>
                </button>
            </h4>
        </span>
    </div>
</template>

<script>
import axios from 'axios';
import {mapActions, mapState} from 'pinia'
import { useDashboardStore } from '../../../../stores/dashboard';
const BASE_URL = import.meta.env.VITE_BASE_URL

import ApplicantsDescription from './ApplicantsDescription.vue';
export default {
    name: 'JobPostJobsViewComponent',
    components: {
        ApplicantsDescription
    },
    data() {
        return {
            applicants: [
                {id:1,name: 'Kwame Amponsah', role: 'Remote - Intern', location:'Accra', status:'Pending'},
                {id:2,name: 'Yemi Ogbedengbey', role: 'Remote - Full Time', location:'Accra', status:'Pending'},
                {id:3,name: 'Joseph Atugubah', role: 'Remote - Part Time', location:'Accra', status:'Pending'},
                {id:4,name: 'Daniel McDan', role: 'Remote - Part Time', location:'Sunyani', status:'Pending'},
                {id:5,name: 'Daniel Kofi Tetteh', role: 'On Site - Full Time', location:'Koforidua', status:'Pending'},
                {id:6,name: 'Prince Tindan', role: 'On Site - Intern', location:'Koforidua', status:'Accepted'},
                {id:7,name: 'Father Benjamin', role: 'Hybride - Full Time', location:'Takoradi', status:'Accepted'},
                {id:8,name: 'Razark Adams', role: 'Remote - Intern', location:'Takoradi', status:'Declined'},
                {id:9,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Kumasi', status:'Pending'},
                {id:10,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Tamale', status:'Declined'},
                {id:11,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Kumasi', status:'Declined'},
                {id:12,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Accra', status:'Declined'},
                {id:13,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Cape Coast', status:'Pending'},
                {id:14,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Kumasi', status:'Pending'},
                {id:15,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Cape Coast', status:'Pending'},
                {id:16,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Cape Coast', status:'Pending'},
                {id:17,name: 'Daniella Momo', role: 'Hybride - Intern', location:'Kumasi', status:'Pending'},
            ],
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
        this.setApplicantsData() // this is a dummy function replacing data from the api
    },
    methods: {
        ...mapActions(useDashboardStore, ['setAllApplicantsData']),
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
        },
        setApplicantsData(){
            this.setAllApplicantsData(this.applicants)
        }
    },
};
</script>

<style lang="css" scoped>
.container{
    padding-bottom: 80px;
}
.text{
    padding-left: 40px;
}
.text p {
    color: #9C9595;
    font-size: 15px;
}
.no-app{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
}
.no-app-tag{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-weight: 500;
    text-align: center;
    padding-top: 50px;
    color: #000;
}
.no-app button.post{
    padding: 15px;
    border-radius: 5px;
    outline: none;
    border: 0.5px solid #88cc00;
    cursor: pointer;
    background-color: #f1f1f1;
    font-weight: 500;
    box-shadow: 5px 5px 9px rgb(215, 213, 213);
}
.no-app button.post:hover{
    box-shadow: none;
}
.sync-btn{
    color: green;
    border-radius: 3px;
    border: 0.5px solid #88cc00;
    padding: 5px;
    cursor: pointer;
    position: relative;
    box-shadow: 2px 2px 9px rgb(215, 213, 213);
}
.sync-btn span:last-child{
    position: absolute;
    display: none;
    left: 120%;
    padding: 5px 10px;
    border: 0.5px solid #88cc00;
    background-color: #f1f1f1;
}
.sync-btn:hover{
    box-shadow: none;
}
.sync-btn:hover span:last-child{
    display: block;
}

</style>