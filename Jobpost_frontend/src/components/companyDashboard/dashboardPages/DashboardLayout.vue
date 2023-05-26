<template>
    <div class="container">
        <DashBoardWelcome />
        <slot></slot>
    </div>
</template>

<script>
    import DashBoardWelcome from '../DashBoardWelcome.vue';
    export default {
        components:{
            DashBoardWelcome
        }
    }
</script>

<style lang="css" scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .container:first-child{
        margin-bottom: 20px;
    }
</style>