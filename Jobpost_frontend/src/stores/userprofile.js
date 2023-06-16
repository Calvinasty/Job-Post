import { defineStore } from 'pinia'

export const useUserProfileStore = defineStore('userprofile', {
    state: () => ({
        // userProfile: [],
        componentId: 'UploadPicture',
        componentId2: 'UploadCompanyPicture',
        // forgot Password
        forgotPasswordId: '',
        forgotPassword: '',
        forgotPasswordEmail: '',
        userType: '',
    }),

    actions:{
        setNav(link){
            this.componentId = link
        },
        // Company setNav
        setNav2(link){
            this.componentId2 = link
        },

        setForgotId(id){
            this.forgotPasswordId = id
        },

        setForgotEmail(email){
            this.forgotPasswordEmail = email
        },

        setForgotPassword(password){
            this.forgotPassword = password
        },

        setUserType(user){
            this.userType = user
        }
    },
})