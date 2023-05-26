<template>
    <div>
        <PostNav 
            @details="$emit('details')"
            @jobtype="$emit('jobtype')"
            @salary="$emit('salary')"
            @recruiter="$emit('recruiter')"

        />
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