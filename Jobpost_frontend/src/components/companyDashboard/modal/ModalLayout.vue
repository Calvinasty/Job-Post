<template>
    <div class="overlay">
        <div class="modal">
            <span class="close" @click="setModal('')" @keyup.enter="setModal('')">X</span>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'pinia'
    import { useDashboardStore } from '../../../stores/dashboard';
    export default {
        methods:{
            ...mapActions(useDashboardStore, ['setModal'])
        }
    }
</script>

<style lang="css" scoped>
    .overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.677);
    }
    .modal{
        text-align: center;
        background-color: #f1f1f1;
        /* width: 60%;
        height: 90%; */
        width: 50%;
        height: 85%;
        padding: 20px 40px;
        border-radius: 15px;
        position: relative;
    }
    .modal span.close{
        position: absolute;
        right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        cursor: pointer;
        height: 25px;
        width: 25px;
        font-size: 12px;
        background-color: #7FBF4C;
        color: #fff;
        border-radius: 50%;
        box-shadow: 1px 0px 9px rgba(131, 131, 131, 0.633);
        z-index: 2;
    }
</style>