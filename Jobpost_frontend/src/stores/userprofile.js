import { defineStore } from 'pinia'

export const useUserProfileStore = defineStore('userprofile', {
    state: () => ({
        // userProfile: [],
        componentId: 'UploadPicture',
        componentId2: 'UploadCompanyPicture',
        forgotPasswordEmail: ''
    }),

    actions:{
        setNav(link){
            this.componentId = link
        },
        // Company setNav
        setNav2(link){
            this.componentId2 = link
        },

        setForgotPassword(email){
            this.forgotPasswordEmail = email
        }
    },
})