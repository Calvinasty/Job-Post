import {defineStore} from 'pinia'

export const useUserStore = defineStore(
    'users',
    {
        state:()=>({
            email: '',
            id:''
        }),
        getters: {
            showUser:(state) => {
                alert(`Welcome ${state.email}`)
            }
        },
        actions: {
            setUser(user){
                this.email = user.email,
                this.id = user.id
            }
        }
    }
)