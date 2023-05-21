<template>
    <header class="top-bar" :style="!toggleNav && {width: '100%'}">
        <div class="flex-center-row">
            <!-- <img @click="toggle" style="cursor: pointer;" src="/images/company_logo.png" alt="c-logo"> -->
            <span @click="toggle" class="material-symbols-outlined"> menu </span>
            <h3>Candle Technologies</h3>
        </div>
        <button @click="addPost()" class="post flex-center-row">
            <span class="material-symbols-outlined">add</span>
            Post a job
        </button>
    </header>
</template>

<script>
    export default {
        props: [ 'toggleNav' ],
        methods:{
            toggle(){
                this.$emit("toggle")
            },
            addPost(){
                this.$emit("add-post")
            }
        }
    }
</script>

<style lang="css" scoped>
    .top-bar{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #f9f8f8;
        text-align: right;
        box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633);
    }
    .top-bar div{
        /* position: relative; */
        display: flex;

    }
    .top-bar div img{
        position: absolute;
        width: 100px;
        top:-140%;
        left: -15%;
    }
    .flex-center-row span{
        /* box-shadow: 5px 0px 9px rgba(131, 131, 131, 0.633); */
        cursor: pointer;
    }
    .flex-center-row h3{
        margin-left: 20px;
    }
    .post{
        background-color: #7FBF4C;
        color: #fff;
        padding: 10px 15px;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>