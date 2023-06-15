import { defineStore } from "pinia";

export const useJobFilterStore= defineStore(
    'jobfilters',
    {
        state:()=>({
            salaryRange:{minSalary:0,maxSalary:10000},
            jobTypes:[],
            jobCategories:[]
        }),
        actions:{
            setSalaryRange(salaries){
                this.salaryRange.maxSalary=salaries.maxSalary
                this.salaryRange.minSalary=salaries.minSalary
            },
            setJobTypes(types){this.jobTypes=[...types,this.jobTypes]},
            setJobCategories(categories){this.jobCategories=[...categories]},
            resetFilters(){
                this.salaryRange={minSalary:0,maxSalary:10000},
                this.jobTypes=[],
                this.jobCategories=[]
            }
        }
    }
)