import {defineStore} from 'pinia'

export const useDashboardStore = defineStore(
    'dashboard',
    {
        state: () => ({
            next: 0     // set state of postjobform next modal
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
            }
        }
    }
)