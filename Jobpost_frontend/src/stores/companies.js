import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCompanyStore = defineStore(
    'company',
    {
        state: () => ({
            company: useStorage("companyState", {})
        }),
        actions: {
            setCompany(company){
                this.company = company
            }
        }
    }
)