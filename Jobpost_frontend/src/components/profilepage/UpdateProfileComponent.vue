<template>
    <EditProfileLayout @close="$emit('close')" :type="type">
        <component v-show="type=='user'" :is="componentId"></component>
        <component v-show="type=='company'" :is="componentId2"></component>
    </EditProfileLayout>
</template>

<script>
import { mapState } from "pinia";
import { useUserProfileStore } from '../../stores/userprofile'
import EditProfileLayout from './EditProfileLayout.vue'
//user components
import UploadPicture from './updateuser/UploadComponent.vue';
import PersonalInfo from './updateuser/PersonalInformationComponent.vue';
import EducationHistory from './updateuser/EducationHistoryComponent.vue';
import WorkExperience from './updateuser/WorkExperienceComponent.vue'
import SkillInterest from './updateuser/SkillInterestComponent.vue'
// company components
import CompanyInformation from './updatecompany/CompanyInformation.vue'
import RegistrationInfo from './updatecompany/RegistrationInfo.vue'
import UploadCompanyPicture from './updatecompany/UploadPicture.vue'


export default {
    props:[
        'type'
    ],
    components: {
        //user components
        EditProfileLayout,
        UploadPicture,
        PersonalInfo,
        EducationHistory,
        WorkExperience,
        SkillInterest,
        // company components
        CompanyInformation,
        RegistrationInfo,
        UploadCompanyPicture
    },
    data() {
        return {
            //user components
            uploadpicture: UploadPicture,
            personalinfo: PersonalInfo,
            educationhistory: EducationHistory,
            workexperience: WorkExperience,
            skillinterest: SkillInterest,
            // company components
            uploadcompanypicture: UploadCompanyPicture,
            companyinformation: CompanyInformation,
            registrationinfo: RegistrationInfo,
            
        }
    },
    computed: {
        ...mapState(useUserProfileStore, ['componentId', 'componentId2'])
    },
}
</script>

<style lang="css" scoped></style>