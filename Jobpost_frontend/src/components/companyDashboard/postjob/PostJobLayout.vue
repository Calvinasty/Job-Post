<template>
    <div>
        <PostNav />
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