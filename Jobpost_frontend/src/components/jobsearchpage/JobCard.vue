<template>
    <div class="job-card flex-center">
        <header class="flex-center-row" >
            <span class="title flex-center-row">
            <img src="/images/icon_microsoft.svg" alt="company-logo">
                <span class="title-text">
                    <h3>Job TItle</h3>
                    <h4>company name</h4>
                </span>
            </span>
            <img src="/images/save_job_icon.svg" alt="save job for later">            
        </header>

        <main class="flex-center">
        
             <JobDetailItem :detailIcon="jobDetailInfo[0].icon" :detailName="jobDetailInfo[0].altText" :detailText="jobLocation"/>
             
             <div class="job-detail flex-center-row">
                 <JobDetailItem :detailIcon="jobDetailInfo[1].icon" :detailName="jobDetailInfo[1].altText" :detailText="jobExperince"/>
                 <JobDetailItem :detailIcon="jobDetailInfo[2].icon" :detailName="jobDetailInfo[2].altText" :detailText="jobSalary"/>
             </div>
        </main>

        <footer>

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
            ]
            
            
        };
    },
    props:[
        'jobLocation',
        'jobExperince',
        'jobSalary'
    ],

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
/* utitlity class */

.flex-align-start{

}
    .job-card{     
        width: 429px;
        min-width: 429px;   
        background: #F9F8F8;
        border-radius: 10px;
        padding: 10px;
    }
    .job-card >*{
        width: 100%;
    }

    .job-card header{
        align-items: flex-start;
        justify-content: space-between;
        /* background: #000; */
    }
    .title{
        column-gap: 27px;
    }
    .title h3{
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 7px;
    }
    .title-text h4{
        font-weight: 200;
        font-size: 15px;
    }

    .job-card main{
        background: #c97e7e;
        align-items: flex-start;
    }

    .job-detail{
        column-gap: 44px;
    }


</style>