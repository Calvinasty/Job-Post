<template>
    <div>
        <PageLayout>
            <component :is="footer"></component>
        </PageLayout>
    </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import PageLayout from '../components/PageLayout.vue';
export default {
    components: {
        PageLayout,
        FooterComponent


    },

    data() {
        return {
            footer: 'FooterComponent'
        };
    },

}
</script>

<style lang="css" scoped></style>