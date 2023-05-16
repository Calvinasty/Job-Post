<template>
    <div>
        <PageLayout>
            <component :is="headerComponent"></component>
            <component :is="testimonialsComponent"></component>
        </PageLayout>
    </div>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import TestimonialsComponent from '../components/TestimonialsComponent.vue'
export default {
    components: {
        PageLayout,
        HeaderComponent,
        TestimonialsComponent
    },

    data() {
        return {
            headerComponent: HeaderComponent,
            testimonialsComponent: TestimonialsComponent
        };
    },

}
</script>

<style lang="css" scoped></style>