<template>
    <header class="top-bar" :style="!toggleNav && {width: '100%'}">
        <div class="flex-center-row top-left">
            <span @click="toggleTop()" class="material-symbols-outlined"> menu </span>
            <h3>Candle Technologies</h3>
        </div>
        <div>
            <button @click="$router.push('/jobsearch')" class="post flex-center-row">
                View Other Jobs
            </button>
            <button @click="addPost()" class="post flex-center-row">
                <span class="material-symbols-outlined">add</span>
                Post a job
            </button>
        </div>
    </header>
</template>

<script>
    import {mapActions} from 'pinia'
    import { useDashboardStore } from '../../stores/dashboard';
    export default {
        props: [ 'toggleNav' ],
        methods:{
            ...mapActions(useDashboardStore, ['setModal']),
            toggleTop(){
                this.$emit("toggle")
            },
            addPost(){
                // this.$emit("add-post")
                this.setModal('postjobform')
            }
        }
    }
</script>

<style lang="css" scoped>
    .top-bar{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
        background-color: #f1f1f1;
        text-align: right;
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
    }
    .top-bar div{
        display: flex;
    }
    .top-bar div:nth-child(2){
        gap: 30px;
    }
    .top-bar div img{
        position: absolute;
        width: 100px;
        top:-140%;
        left: -15%;
    }
    .top-left span{
        /* box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633); */
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        color: #231F20;
        background-color: #D9D9D9;
    }
    .flex-center-row h3{
        margin-left: 20px;
    }
    .post{
        background-color: #88CC00;
        color: #fff;
        padding: 10px 15px;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>