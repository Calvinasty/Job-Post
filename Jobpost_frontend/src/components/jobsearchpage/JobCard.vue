<template>
    <div class="job-card flex-center" v-on:click="()=>handleApplyJob(jobInfomation.id)">
        <header class="flex-center-row" >
            <span class="title flex-center-row">
            <img src="/images/companySample_logo.png" alt="company-logo">
                <span class="title-text">
                    <h3>{{ jobInfomation.job_title }}</h3>
                    <h4>{{ jobInfomation.jobPoster }}</h4>
                </span>
            </span>
            <img src="/images/save_job_icon.svg" alt="save job for later">            
        </header>

        <main class="flex-center">
             <JobDetailItem :detailIcon="jobDetailInfo[0].icon" :detailName="jobDetailInfo[0].altText" :detailText="jobInfomation.location"/>
             
             <div class="job-detail flex-center-row">
                 <JobDetailItem :detailIcon="jobDetailInfo[1].icon" :detailName="jobDetailInfo[1].altText" :detailText="jobInfomation.job_type"/>
                 <JobDetailItem :detailIcon="jobDetailInfo[2].icon" :detailName="jobDetailInfo[2].altText" :detailText="jobInfomation.salary_range"/>
             </div>
        </main>

        <footer class="flex-center-row">
            <div class="slots-availab">{{jobInfomation.jobPositionsAvailable}}</div>
            <div class="updated-at">Updated {{ jobInfomation.updatedAt?.split('T')[0] }}</div>
        </footer>
        
    </div>
</template>

<script>
import JobDetailItem from './JobDetailItem.vue';
export default {
  components: { JobDetailItem },
    name: 'JobPostJobCard',

    data() {
        return {
            updatedAT:'',
            token:false ,
            toaster:false,
            jobDetailInfo:[
                {
                    icon:'/images/icon_locationpin.svg',
                    altText:'location'
                },
                {
                    icon:"/images/jobexperince_icon.svg",
                    altText:"experince"
                },{
                    icon:"/images/icon_salary.svg",
                    altText:"salary range"
                }
            ],
            
            
            
        };
    },
    props:[
        'jobInfomation',
        'handleAccountCheck'
       
    ],

    mounted() {
       this.token=JSON.parse(localStorage.getItem('userToken'))
        // console.log(this.jobDetailInfo);
        
    },

    methods: {
        handleApplyJob(jobId){
            
            if(!this.token){
                this.handleAccountCheck()
                return
            }
            this.$router.push(`/jobsearch/apply/${jobId}`)
        }   
    },
};
</script>

<style lang="css" scoped>
    .job-card{     
        width: 100%;
        max-width: 429px;   
        background: #F9F8F8;
        height: 283px;
        border-radius: 10px;
        padding: 20px;
        gap:20px;
        cursor: pointer;
        transition: .2s ease-in-out;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.568);
    }
    .job-card:hover{
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.568);
    }
    .job-card >*{
        width: 100%;
    }
    .job-card :is(header,main){
        padding: 0px 5px;
    }

    .job-card header{
        align-items: flex-start;
        justify-content: space-between;
        /* background: #000; */
    }
    .title{
        column-gap: 15px;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .title :is(h4,h3){
        font-size: 14px;
    }
    .title h3{
        font-weight: 600;
        /* font-size: 20px; */
        margin-bottom: 7px;
    }
    .title-text h4{
        font-weight: 200;
        /* font-size: 15px; */
    }
    .title img{
        width: auto;
        height: 35px;
        cursor: pointer;
    }

    .job-card main{
        align-items: flex-start;
        row-gap: 10px;
    }

    .job-detail{
        column-gap: 44px;
    }
    .job-card footer{
        justify-content: space-between;
        align-items: center;
        border-top: 3px solid #7fbf4c;
        padding-top: 20px;
        font-weight: 400;
        font-size: 12px;

    }

   
    @media screen and (max-width: 1051px) 
    {
        .job-card main{
        row-gap: 10px;}
       

    }
 

</style>