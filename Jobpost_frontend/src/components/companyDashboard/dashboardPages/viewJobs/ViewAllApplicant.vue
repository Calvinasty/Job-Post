<template>
    <div class="container">  
        <ApplicantsDescription
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
            applicants: [],
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
        ...mapActions(useDashboardStore, ['setAllApplicantsData']),
        getApplicantInfo(){
            axios.get(`${BASE_URL}/company/allApplicants/${this.jobId}`)
            .then(res => {
                console.log(res.data);
                const msg = res.data?.message
                console.log(msg);
                const allCompanyJobs = res.data.findAllApplicants
                const selectedJob = allCompanyJobs.find(item => item.id == this.jobId)
                const applicants = selectedJob.applications
                this.applicants = applicants
                this.setApplicantsData()
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