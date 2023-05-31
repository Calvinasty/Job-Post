<template>
    <EditProfileLayout @close="$emit('close')" :handlecloseCard="handlecloseCard" :handleSave="handleSave">
        <component :is="componentId"></component>
    </EditProfileLayout>
</template>

<script>
import { mapState } from "pinia";
import { useUserProfileStore } from '../../stores/userprofile'
import EditProfileLayout from './EditProfileLayout.vue'
import UploadPicture from './updateuser/UploadComponent.vue';
import PersonalInfo from './updateuser/PersonalInformationComponent.vue';
import EducationHistory from './updateuser/EducationHistoryComponent.vue';
import WorkExperience from './updateuser/WorkExperienceComponent.vue'
import SkillInterest from './updateuser/SkillInterestComponent.vue'
export default {

    props: ['handlecloseCard', 'handleSave'],


    components: {
        EditProfileLayout,
        UploadPicture,
        PersonalInfo,
        EducationHistory,
        WorkExperience,
        SkillInterest,
    },

    data() {
        return {
            uploadpicture: UploadPicture,
            personalinfo: PersonalInfo,
            educationhistory: EducationHistory,
            workexperience: WorkExperience,
            skillinterest: SkillInterest,
        }
    },

    computed: {
        ...mapState(useUserProfileStore, ['componentId'])
    },
}
</script>

<style lang="css" scoped></style>