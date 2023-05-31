import { defineStore } from "pinia";

export const useJobsStore=defineStore(
    'jobs',
    {
        state:()=>({postedJobs:[]}),
        actions:{
            setPostedJobs(jobs){
                this.postedJobs=jobs
            }
        }
    }
)