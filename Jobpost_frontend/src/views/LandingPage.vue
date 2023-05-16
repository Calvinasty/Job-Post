<template>
    <div>
        <PageLayout>
           
            <component :is="headerComponent"></component>
            <component :is="testimonialsComponent"></component>
             <component :is="footer"></component>

        </PageLayout>
    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import PageLayout from '../components/PageLayout.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import TestimonialsComponent from '../components/TestimonialsComponent.vue'
export default {
    components: {
        PageLayout,
        HeaderComponent,
        TestimonialsComponent,
         FooterComponent
    },

    data() {
        return {
            headerComponent: HeaderComponent,
            testimonialsComponent: TestimonialsComponent,
            footer: 'FooterComponent'
        };
    },

}
</script>

<style lang="css" scoped></style>