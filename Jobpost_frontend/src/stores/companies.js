import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCompanyStore = defineStore(
    'company',
    {
        state: () => ({
            company: useStorage("companyState", {})
        }),
        getters: {
            getTotalJobs(state) {
                if(state.company.Jobs)
                    return Object.keys(state.company?.Jobs).length
            },
            getActiveJobs(state){
                if(state.company.Jobs){
                    const jobs = state.company.Jobs
                    let active = []
                    Object.keys(jobs).forEach((key,index) =>{
                        if(jobs[key].status == 'active')
                            active.push(jobs[key]);
                    })
                    return active.length
                }
            },
            getExpiredJobs(state){
                if(state.company.Jobs){
                    const jobs = state.company.Jobs
                    let expired = []
                    Object.keys(jobs).forEach((key,index) =>{
                        if(jobs[key].status == 'inactive')
                            expired.push(jobs[key]);
                    })
                    return expired.length
                }
            }
        },
        actions: {
            setCompany(company){
                this.company = company
            },
            updateCompany(updatedCompany) {
                const oldCompanyInfo = this.company
                const newCompanyInfo = {...oldCompanyInfo, ...updatedCompany}
                this.company = newCompanyInfo

                // this.company = updatedCompany
            }
        }
    }
)