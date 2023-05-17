<template>
    <div>
        <PageLayout>
            <component :is="jobPortal"></component>
        </PageLayout>
    </div>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import JobPortalComponent from '@/components/JobPortalComponent.vue'
export default {
    components: {
        PageLayout,
        JobPortalComponent


    },

    data() {
        return {
            jobPortal: 'JobPortalComponent'

        };
    },

}
</script>

<style lang="css" scoped></style>