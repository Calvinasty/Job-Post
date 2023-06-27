import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core'

export const useUserStore = defineStore(
    'user',
    {
        state:()=>({
            user: useStorage("userState", {}) //user information from api or signin
        }),
        getters: {
            showUser:(state) => {
                alert(`Welcome ${state.email}`)
            }
        },
        actions: {
            setUser(user,type='all'){
                if(type=='socials'){
                    if(!this.user.js_social_link || this.user.js_social_link == '')
                    {this.user = {user}}
                    else{ user.js_social_link=this.user.js_social_link   }
                }
                else{ this.user = user }
            }
        }
    }
)