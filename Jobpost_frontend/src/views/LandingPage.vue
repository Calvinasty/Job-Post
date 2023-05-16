<template>
    <div>
        <PageLayout>
            <component :is="headerComponent"></component>
            <component :is="regflow"></component>
            <component :is="categories"></component>
            <component :is="featuredJobs"></component>
            <component :is="jobPortal"></component>
            <component :is="testimonialsComponent"></component>
            <component :is="footer"></component>
        </PageLayout>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import TestimonialsComponent from '../components/TestimonialsComponent.vue'
import FooterComponent from '../components/FooterComponent.vue';
import PageLayout from '../components/PageLayout.vue';
import featuredJobsComponent from '../components/featuredJobsComponent.vue';
import RegFlow from '../components/RegFlow.vue';
import CategorySection from '../components/CategorySection.vue';
import JobPortalComponent from '@/components/JobPortalComponent.vue';

export default {
    components: {
        PageLayout,
        HeaderComponent,
        RegFlow,
        CategorySection,
        featuredJobsComponent,
        JobPortalComponent,
        TestimonialsComponent,
        FooterComponent
    },
    data() {
        return {
            headerComponent: HeaderComponent,
            regflow: 'RegFlow',
            categories: 'CategorySection',
            featuredJobs: featuredJobsComponent,
            jobPortal: 'JobPortalComponent',
            testimonialsComponent: TestimonialsComponent,
            footer: 'FooterComponent'
        };
    },
}
</script>

<style lang="css" scoped></style>