import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core'

export const useUserStore = defineStore(
    'user',
    {
        state:()=>({
            user: useStorage("userState", {})
        }),
        getters: {
            showUser:(state) => {
                alert(`Welcome ${state.email}`)
            }
        },
        actions: {
            setUser(user){
                this.user = user
            }
        }
    }
)