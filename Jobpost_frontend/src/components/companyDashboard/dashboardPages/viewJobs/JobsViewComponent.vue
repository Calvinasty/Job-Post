<template>
    <div class="container">  
        <JobsDescriptionComponent
            :myjobs="jobs"
        />
        <span class="nojob" v-if="jobs?.length == 0 || jobs == undefined">
            <h4 class="nojob-tag">
                📝 No Jobs posted
                <button class="sync-btn">
                    <span class="material-symbols-outlined"> sync </span>
                    <span>Reload</span>
                </button>
            </h4>
            <button class="post" @click="addPost()">
                Post your first Job!
            </button>
        </span>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState, mapActions} from 'pinia'
    import { useCompanyStore } from '../../../../stores/companies';
    import { useDashboardStore } from '../../../../stores/dashboard';
    const BASE_URL = import.meta.env.VITE_BASE_URL
    import JobsDescriptionComponent from './JobsDescriptionComponent.vue';
    export default {
        name: 'JobPostJobsViewComponent',
        components: {
            JobsDescriptionComponent,
        },
        data() {
            return {
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
            this.jobs = this.company.Jobs
        },
        methods: {
            ...mapActions(useCompanyStore, ['updateCompany']),
            ...mapActions(useDashboardStore, ['setModal']),
            getPostedJobs(){
                const token = JSON.parse(localStorage.getItem('companyToken'))
                axios.get(`${BASE_URL}/company/getAll`, {headers: {token}})
                .then(res => {
                    const companyInfo = res.data[0]
                    console.log(companyInfo);
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
    padding: 0;
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
.nojob button.post{
    padding: 15px;
    border-radius: 5px;
    outline: none;
    border: 0.5px solid #88cc00;
    cursor: pointer;
    background-color: #f1f1f1;
    font-weight: 500;
    box-shadow: 5px 5px 9px rgb(215, 213, 213);
}
.nojob button.post:hover{
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