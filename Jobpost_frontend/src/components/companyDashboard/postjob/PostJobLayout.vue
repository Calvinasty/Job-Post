<template>
    <div>
        <!-- Post a job navigation -->
        <PostNav />
        <!-- slot to render post a job form -->
        <slot></slot>
    </div>
</template>

<script>
    import PostNav from './PostNav.vue';
    export default {
        components:{
            PostNav
        }
    }
</script>

<style lang="scss" scoped>

</style>