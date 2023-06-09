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
            }
        },
        actions: {
            setCompany(company){
                this.company = company
            }
        }
    }
)