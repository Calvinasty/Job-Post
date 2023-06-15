<template>
    <div>
        <FilterCard :title="info.Job.job_title" :subTitle="'Deadline: &emsp;' + info.Job.application_deadline.split('T')[0]"  v-for="(info,index) in applicantsInfo" :hideOption="index==0?false:true">
            <ApplicantsDescription :applicants="applicants"/>
        </FilterCard>
    </div>
</template>

<script>
    import FilterCard from './FilterCard.vue'
    import ApplicantsDescription from './ApplicantsDescription.vue';
    export default {
        components:{ FilterCard, ApplicantsDescription },
        props:['applicantsInfo', 'applicants']
    }
</script>

<style lang="scss" scoped>

</style>