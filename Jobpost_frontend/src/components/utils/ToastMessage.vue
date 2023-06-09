<template>
    <Transition name="slide-fades">
        <div :style="toast.color=='success' ? {backgroundColor:'green'} : {backgroundColor: 'red'}">
            {{ toast.msg }}
        </div>
    </Transition>
</template>

<script>
    export default {
        props: [ 'toast' ]
    }
</script>

<style lang="css" scoped>
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;
        padding: 20px 30px;
        border-radius: 5px;
        color: #fff;
        /* background-color: red; */
        position: absolute;
        top: 15%;
        left: 50%;
        opacity: 0.87;
        transform: translateX(-50%);
    }
    .slide-fades-enter-active{
        transition: 0.3s ease-out;
    }
    .slide-fades-leave-active{
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
    }
    .slide-fades-enter-from,
    .slide-fades-leave-to{
        transform: translateY(-20px);
        opacity: 0;
    }

    @media screen and (max-width: 480px){
        div{
            top: 10%;
        }
    }
</style>