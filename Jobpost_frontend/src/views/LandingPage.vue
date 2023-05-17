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
import HeaderComponent from '../components/HeaderComponent.vue';
import TestimonialsComponent from '../components/TestimonialsComponent.vue'
import FooterComponent from '../components/FooterComponent.vue';
import PageLayout from '../components/PageLayout.vue';
import CategorySection from '../components/CategorySection.vue';
import JobPortalComponent from '@/components/JobPortalComponent.vue';
import FeaturedJobsComponent from '@/components/FeaturedJobsComponent.vue';

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
            header: HeaderComponent,
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