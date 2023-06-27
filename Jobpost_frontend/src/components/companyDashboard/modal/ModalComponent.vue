<template>
    <ModalLayout>
        <component :is="modalComponentType"></component>
    </ModalLayout>
</template>

<script>
    import {mapState} from 'pinia'
    import { useDashboardStore } from '../../../stores/dashboard';
    import ModalLayout from './ModalLayout.vue';
    import PostJobForm from '../postjob/PostJobForm.vue';
    import ApplicantModal from '../dashboardPages/viewJobs/ApplicantModal.vue';
    export default {
        components:{ModalLayout, PostJobForm, ApplicantModal},
        data(){
            return{
                postjobform: PostJobForm,
                applicantmodal: ApplicantModal
            }
        },
        computed:{
            ...mapState(useDashboardStore, ['modalComponentType'])
        },
        watch:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>