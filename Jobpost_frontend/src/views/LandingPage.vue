<template>
    <div>
        <PageLayout>
            <component :is="regflow"></component>
            <component :is="categories"></component>
        </PageLayout>
    </div>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import RegFlow from '../components/RegFlow.vue';
import CategorySection from '../components/CategorySection.vue';
export default {
    components: {
        PageLayout,
        RegFlow,
        CategorySection
    },

    data() {
        return {
            regflow:'RegFlow',
            categories:'CategorySection'

        };
    },

}
</script>

<style lang="css" scoped></style>