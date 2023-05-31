import { defineStore } from 'pinia'

export const useUserProfileStore = defineStore('userprofile', {
    state: () => ({
        // userProfile: [],
        componentId: 'UploadPicture',
    }),

    actions:{
        setNav(link){
            this.componentId = link
            // alert(id)
        }
    },
})