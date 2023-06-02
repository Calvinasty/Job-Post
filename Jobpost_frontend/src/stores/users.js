import {defineStore} from 'pinia'

export const useUserStore = defineStore(
    'user',
    {
        state:()=>({
            user: {}
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