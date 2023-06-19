<template>
    <div class="container">  
        <JobsDescriptionComponent
            :myjobs="jobs"
        />
        <span class="nojob">
            <h4 class="nojob-tag" v-if="jobs?.length == 0 || jobs == undefined">
                📝 No Jobs posted / <span class="color-red">❌ Check network connections</span>
            </h4>
            <button @click="addPost()">
                Post your first Job!
            </button>
        </span>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState, mapActions} from 'pinia'
    import { useCompanyStore } from '../../../stores/companies';
    import { useDashboardStore } from '../../../stores/dashboard';
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
            ...mapActions(useDashboardStore, ['setModal']),
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
            },
            addPost(){
                this.setModal('PostJobForm')
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
.nojob{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
}
.nojob-tag{
    font-weight: 500;
    text-align: center;
    padding-top: 50px;
    color: #000;
}
.nojob button{
    padding: 15px;
    border-radius: 5px;
    outline: none;
    border: 2px solid #88cc00;
    cursor: pointer;
    background-color: #f1f1f1;
    font-weight: 500;
    box-shadow: 5px 5px 9px rgb(215, 213, 213);
}
.nojob button:hover{
    box-shadow: none;
}
.color-red{
    color: rgb(175, 11, 11);
}

</style>