<template>
    <div class="container">
        <DashBoardWelcome />
        <Transition name="slide-fade" appear>
            <slot></slot>
        </Transition>
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
    .slide-fade-enter-active{ transition: 0.5s ease-out; }
    .slide-fade-leave-active{ transition: all 1s cubic-bezier(1, 0.5, 0.8, 1); }
    .slide-fade-enter-from,
    .slide-fade-leave-to{
        transform: translateY(50px);
        opacity: 0;
    }
</style>