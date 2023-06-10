<template>
    <EditProfileLayout @close="$emit('close')" :type="type" :index="index">
        <component v-show="type == 'user'" :key="key" :is="componentId" :userInfo="userInfo"
            :handlecloseCard="handlecloseCard" :handleSave="handleSave">
        </component>
        <component v-show="type == 'company'" :handlecloseCard="handlecloseCard" :companyInfo="companyInfo" :updateComponent="updateComponent" :is="componentId2"></component>
    </EditProfileLayout>
</template>

<script>
import { mapState } from 'pinia'
import { useUserProfileStore } from '../../stores/userprofile';
import EditProfileLayout from './EditProfileLayout.vue'
// user components
import UploadPicture from './updateuser/UploadComponent.vue';
import PersonalInfo from './updateuser/PersonalInformationComponent.vue';
import EducationHistory from './updateuser/EducationHistoryComponent.vue';
import WorkExperience from './updateuser/WorkExperienceComponent.vue'
import SkillInterest from './updateuser/SkillInterestComponent.vue'
import SocialsLinks from './updateuser/socialsComponents.vue';
// company components
import CompanyInformation from './updatecompany/CompanyInformation.vue'
import RegistrationInfo from './updatecompany/RegistrationInfo.vue'
import UploadCompanyPicture from './updatecompany/UploadPicture.vue'
import CompanyLocation from "./updatecompany/CompanyLocation.vue";



export default {

    props: ['handlecloseCard', 'handleSave', 'type', 'userInfo', 'index', 'companyInfo', 'updateComponent'],


    components: {
        EditProfileLayout,
        UploadPicture,
        PersonalInfo,
        EducationHistory,
        WorkExperience,
        SkillInterest,
        SocialsLinks,
        // company components
        CompanyInformation,
        RegistrationInfo,
        UploadCompanyPicture,
        CompanyLocation
    },

    data() {
        return {
            uploadpicture: UploadPicture,
            personalinfo: PersonalInfo,
            educationhistory: EducationHistory,
            workexperience: WorkExperience,
            skillinterest: SkillInterest,
            // company components
            uploadcompanypicture: UploadCompanyPicture,
            companyinformation: CompanyInformation,
            registrationinfo: RegistrationInfo,
            companylocation: CompanyLocation,

            //data from state
            // user : []

        }
    },
    computed: {
        key() {
            return this.$route.params + Math.random()
        },
        ...mapState(useUserProfileStore, ['componentId', 'componentId2'])
    },
    mounted() {

    },

}
</script> 

<style lang="css" scoped></style>