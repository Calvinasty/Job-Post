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

<style lang="css" scoped>
    div{
        display: flex;
        width: 100%;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-between;
        gap: 20px;
    }
</style>