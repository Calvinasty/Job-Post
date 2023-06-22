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
        eduId:'', // id for education selected to be edited
        workexpId:'', // id for work experience selected to be edited
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
        },

        setEduId(id){
            this.eduId = id
        },

        setWorkexpId(id){
            this.workexpId = id
        }

    },
})