import {defineStore} from 'pinia'

export const useDashboardStore = defineStore(
    'dashboard',
    {
        state: () => ({
            next: 0,     // set state of postjobform next in modal,
            modalComponentId: '',   //set state for modal show postJob or Applicants Summary
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
            setModal(id){
                this.modalComponentId = id
            }
        }
    }
)