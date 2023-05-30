<template>
    <ModalLayout>
        <component :is="applicantsummary"></component>
    </ModalLayout>
</template>

<script>
    import {mapState} from 'pinia'
    import { useDashboardStore } from '../../../stores/dashboard';
    import ModalLayout from './ModalLayout.vue';
    import PostJobForm from '../postjob/PostJobForm.vue';
    import ApplicantSummary from '../dashboardPages/ApplicantSummary.vue';
    export default {
        components:{ModalLayout},
        data(){
            return{
                componentId: this.modalComponentId,
                postjobform: PostJobForm,
                applicantsummary: ApplicantSummary
            }
        },
        computed:{
            ...mapState(useDashboardStore, ['modalComponentId'])
        },
        watch:{
            
        }
    }
</script>

<style lang="scss" scoped>

</style>