<template>
    <div>
        <PageLayout>
            <component :is="header"></component>
            <component :is="jobPortal"></component>
            <component :is="categories"></component>
            <component :is="featuredJob"></component>
            <component :is="testimonials"></component>
            <component :is="footer"></component>

        </PageLayout>
    </div>
</template>

<script>
import HeaderComponent from '../components/landingpage/HeaderComponent.vue';
import TestimonialsComponent from '../components/landingpage/TestimonialsComponent.vue'
import FooterComponent from '../components/FooterComponent.vue';
import PageLayout from '../components/landingpage/PageLayout.vue';
import CategorySection from '../components/landingpage/CategorySection.vue';
import JobPortalComponent from '@/components/landingpage/JobPortalComponent.vue';
import FeaturedJobsComponent from '@/components/landingpage/FeaturedJobsComponent.vue';

export default {
    components: {
        PageLayout,
        HeaderComponent,
        CategorySection,
        FeaturedJobsComponent,
        JobPortalComponent,
        TestimonialsComponent,
        FooterComponent
    },
    data() {
        return {
            header: 'HeaderComponent',
            categories: 'CategorySection',
            featuredJob: 'FeaturedJobsComponent',
            jobPortal: 'JobPortalComponent',
            testimonials: 'TestimonialsComponent',
            footer: 'FooterComponent'

        };
    },
}
</script>

<style lang="css" scoped></style>