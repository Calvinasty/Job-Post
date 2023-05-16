<template>
    <div>
        <PageLayout>
            <component :is="featuredJobs"></component>  
        </PageLayout>
    </div>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import featuredJobsComponent from '../components/featuredJobsComponent.vue';
export default {
    components: {
        PageLayout,
        featuredJobsComponent


    },

    data() {
        return {
            featuredJobs: featuredJobsComponent,
        };
    },

}
</script>

<style lang="css" scoped></style>