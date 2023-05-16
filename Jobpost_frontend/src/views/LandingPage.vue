<template>
    <div>
        <PageLayout>
            <component :is="headerComponent"></component>
        </PageLayout>
    </div>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
export default {
    components: {
        PageLayout,
        HeaderComponent
    },

    data() {
        return {
            headerComponent: HeaderComponent
        };
    },

}
</script>

<style lang="css" scoped></style>