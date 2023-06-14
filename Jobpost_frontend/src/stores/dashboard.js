import {defineStore} from 'pinia'
import { useStorage } from '@vueuse/core'
import { useCompanyStore } from './companies'

export const useDashboardStore = defineStore(
    'dashboard',
    {
        state: () => ({
            companyInfo: useStorage("companyState", {}),
            next: 0,     // set state of postjobform next in modal,
            modalComponentType: '',   //set state for modal show postJob or Applicants Summary
            updatePostModalId: '',    //sets the id of the job post to be updated by a company
            chartDataValues: useStorage("chartDataValues", [10, 9, 20, 10, 0, 0]),
            blink: false
        }),
        getters: {
            getNext(state){
                return state.count += 1
            }
        },
        actions: {
            // trigger next num for postjobform
            setNext(num){
                this.next = num
            },
            //trigger modal show for post job or applicant summary
            // if second parameter is passed, it means we are updating a jobpost by the id argument passed
            setModal(type, postId=''){
                this.modalComponentType = type
                this.updatePostModalId = postId
            },
            setCompanyInfo(info){
                this.companyInfo = info
            },
            updateChartDataValues(){
                const companyStore = useCompanyStore()
                const updatedValue = companyStore.getTotalJobs
                const lastIndex = this.chartDataValues.length-1
                this.chartDataValues[lastIndex] = updatedValue
            },
            setBlink(){
                this.blink = true
                setTimeout(() => {
                    this.blink = false
                }, 10000)
            }
        }
    }
)